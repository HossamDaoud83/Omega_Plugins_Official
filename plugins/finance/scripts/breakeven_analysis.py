# -*- coding: utf-8 -*-
"""
Break-Even Analysis
===================
Omega Project Finance Template

Calculates threshold values for key variables at which project
achieves break-even (NPV=0, IRR=WACC, DSCR=covenant).

Usage:
    python breakeven_analysis.py
"""

import numpy as np
import matplotlib.pyplot as plt
from scipy.optimize import brentq
from typing import Dict, Tuple, Optional
from dataclasses import dataclass

from config import (
    SensitivityConfig, get_config, apply_omega_style,
    Omega_COLORS, CHARTS_DIR, REPORTS_DIR,
    format_currency, format_percentage, format_ratio
)


@dataclass
class BreakevenResult:
    """Container for break-even analysis result."""
    variable: str
    display_name: str
    base_value: float
    breakeven_value: float
    breakeven_pct: float
    headroom_pct: float
    metric: str
    threshold: float
    unit: str
    status: str  # SAFE, MODERATE, TIGHT


class BreakevenAnalyzer:
    """
    Break-Even Analysis Engine.

    Finds threshold values where project metrics hit critical levels.
    """

    def __init__(self, config: SensitivityConfig = None):
        self.config = config or get_config()
        self.results: Dict[str, BreakevenResult] = {}
        apply_omega_style()

    def _calculate_npv(self, capex_mult: float = 1.0, tariff_mult: float = 1.0,
                       throughput_mult: float = 1.0, opex_mult: float = 1.0,
                       interest_mult: float = 1.0) -> float:
        """Calculate NPV with multipliers."""
        cfg = self.config

        capex = cfg.total_capex * capex_mult
        tariff = cfg.tariff_usd_per_tonne * tariff_mult
        throughput = cfg.annual_throughput_mta * throughput_mult
        opex_fixed = cfg.opex_fixed_annual * opex_mult
        opex_var = cfg.opex_variable_per_tonne * opex_mult
        interest = cfg.interest_rate * interest_mult

        annual_revenue = throughput * tariff * (1 + cfg.ancillary_revenue_pct)
        annual_opex = opex_fixed + (throughput * opex_var)
        ebitda = annual_revenue - annual_opex

        debt = capex * cfg.debt_ratio
        annual_debt_service = debt * (interest + 1/cfg.loan_tenor_years)
        fcfe = ebitda - annual_debt_service

        pv_operations = fcfe * ((1 - (1 + cfg.wacc) ** -cfg.operations_years) / cfg.wacc)
        npv = pv_operations - capex

        return npv

    def _calculate_dscr(self, capex_mult: float = 1.0, tariff_mult: float = 1.0,
                        throughput_mult: float = 1.0, opex_mult: float = 1.0,
                        interest_mult: float = 1.0) -> float:
        """Calculate minimum DSCR."""
        cfg = self.config

        utilization_y3 = 0.55
        capex = cfg.total_capex * capex_mult
        tariff = cfg.tariff_usd_per_tonne * tariff_mult
        throughput = cfg.annual_throughput_mta * throughput_mult * utilization_y3
        opex_fixed = cfg.opex_fixed_annual * opex_mult
        opex_var = cfg.opex_variable_per_tonne * opex_mult
        interest = cfg.interest_rate * interest_mult

        revenue = throughput * tariff * (1 + cfg.ancillary_revenue_pct)
        opex = opex_fixed + (throughput * opex_var)
        ebitda = revenue - opex

        debt = capex * cfg.debt_ratio
        debt_service = debt * (interest + 1/cfg.loan_tenor_years)

        return ebitda / debt_service if debt_service > 0 else 0

    def find_breakeven(self, variable: str, metric: str = 'npv',
                       threshold: float = 0, search_range: Tuple[float, float] = (0.5, 2.0)) -> Optional[float]:
        """Find break-even multiplier for a variable."""

        param_map = {
            'capex': 'capex_mult',
            'tariff': 'tariff_mult',
            'throughput': 'throughput_mult',
            'opex': 'opex_mult',
            'interest_rate': 'interest_mult',
        }

        param_name = param_map.get(variable)
        if not param_name:
            raise ValueError(f"Unknown variable: {variable}")

        # Select calculation function
        if metric == 'npv':
            calc_func = lambda mult: self._calculate_npv(**{param_name: mult}) - threshold
        elif metric == 'dscr':
            calc_func = lambda mult: self._calculate_dscr(**{param_name: mult}) - threshold
        else:
            raise ValueError(f"Unknown metric: {metric}")

        # Check if break-even exists in range
        try:
            low_val = calc_func(search_range[0])
            high_val = calc_func(search_range[1])

            if low_val * high_val > 0:
                # No sign change - break-even not in range
                return None

            # Find break-even using Brent's method
            breakeven_mult = brentq(calc_func, search_range[0], search_range[1])
            return breakeven_mult

        except ValueError:
            return None

    def run_analysis(self) -> Dict[str, BreakevenResult]:
        """Run break-even analysis for all variables."""

        cfg = self.config

        variables = [
            ('capex', 'CAPEX', cfg.total_capex, 'USD M', (1.0, 2.0)),  # Only look upward for CAPEX
            ('tariff', 'Tariff Rate', cfg.tariff_usd_per_tonne, 'USD/t', (0.3, 1.0)),  # Only look downward
            ('throughput', 'Throughput', cfg.annual_throughput_mta, 'MTA', (0.3, 1.0)),
            ('opex', 'Operating Costs', cfg.opex_fixed_annual, 'USD M', (1.0, 3.0)),
            ('interest_rate', 'Interest Rate', cfg.interest_rate * 100, '%', (1.0, 2.0)),
        ]

        metrics = [
            ('npv', 'NPV = 0', 0),
            ('dscr', 'DSCR = 1.20x', 1.20),
        ]

        for var_name, display_name, base_value, unit, search_range in variables:
            for metric, metric_desc, threshold in metrics:
                key = f"{var_name}_{metric}"

                breakeven_mult = self.find_breakeven(var_name, metric, threshold, search_range)

                if breakeven_mult is not None:
                    breakeven_pct = (breakeven_mult - 1.0) * 100
                    headroom_pct = abs(breakeven_pct)

                    # Determine status based on headroom
                    if headroom_pct > 30:
                        status = 'SAFE'
                    elif headroom_pct > 15:
                        status = 'MODERATE'
                    else:
                        status = 'TIGHT'

                    if var_name == 'interest_rate':
                        breakeven_value = base_value * breakeven_mult
                    else:
                        breakeven_value = base_value * breakeven_mult

                    self.results[key] = BreakevenResult(
                        variable=var_name,
                        display_name=display_name,
                        base_value=base_value,
                        breakeven_value=breakeven_value,
                        breakeven_pct=breakeven_pct,
                        headroom_pct=headroom_pct,
                        metric=metric,
                        threshold=threshold,
                        unit=unit,
                        status=status,
                    )
                else:
                    # No break-even found - project robust to this variable
                    self.results[key] = BreakevenResult(
                        variable=var_name,
                        display_name=display_name,
                        base_value=base_value,
                        breakeven_value=None,
                        breakeven_pct=None,
                        headroom_pct=100,  # Effectively infinite headroom
                        metric=metric,
                        threshold=threshold,
                        unit=unit,
                        status='SAFE',
                    )

        return self.results

    def plot_breakeven_chart(self, save: bool = True) -> plt.Figure:
        """Generate break-even headroom chart."""

        if not self.results:
            self.run_analysis()

        # Filter for NPV break-even only
        npv_results = [r for r in self.results.values() if r.metric == 'npv' and r.breakeven_pct is not None]
        npv_results.sort(key=lambda x: x.headroom_pct)

        fig, ax = plt.subplots(figsize=(12, 7))

        variables = [r.display_name for r in npv_results]
        headrooms = [r.headroom_pct for r in npv_results]

        # Color based on status
        status_colors = {
            'SAFE': '#228B22',
            'MODERATE': '#FF8C00',
            'TIGHT': '#CC0000',
        }
        colors = [status_colors[r.status] for r in npv_results]

        # Horizontal bar chart
        y_pos = np.arange(len(variables))
        bars = ax.barh(y_pos, headrooms, color=colors, alpha=0.85, edgecolor='white', height=0.6)

        # Add threshold lines
        ax.axvline(15, color='orange', linestyle='--', linewidth=2, label='Tight (<15%)')
        ax.axvline(30, color='green', linestyle='--', linewidth=2, label='Safe (>30%)')

        # Add value labels
        for bar, headroom, result in zip(bars, headrooms, npv_results):
            direction = "↑" if result.breakeven_pct > 0 else "↓"
            ax.annotate(f'{direction} {headroom:.0f}%',
                       xy=(headroom + 1, bar.get_y() + bar.get_height()/2),
                       va='center', fontsize=10, fontweight='bold')

            # Add break-even value
            if result.breakeven_value is not None:
                if result.unit == '%':
                    be_text = f"BE: {result.breakeven_value:.1f}%"
                elif result.unit == 'USD/t':
                    be_text = f"BE: ${result.breakeven_value:.2f}/t"
                else:
                    be_text = f"BE: ${result.breakeven_value:.0f}M"
                ax.annotate(be_text, xy=(headroom - 2, bar.get_y() + bar.get_height()/2),
                           va='center', ha='right', fontsize=9, color='white', fontweight='bold')

        ax.set_yticks(y_pos)
        ax.set_yticklabels(variables)
        ax.set_xlabel('Headroom to Break-Even (%)', fontweight='bold')
        ax.set_title('Break-Even Analysis: Headroom to NPV = 0\nOmega Project Finance Template',
                    fontsize=14, fontweight='bold', color=Omega_COLORS['PRIMARY'])
        ax.legend(loc='lower right', framealpha=0.95)

        # Add interpretation
        ax.text(0.02, 0.98, "Higher headroom = More robust to changes",
               transform=ax.transAxes, fontsize=9, style='italic',
               verticalalignment='top',
               bbox=dict(boxstyle='round', facecolor='lightyellow', alpha=0.8))

        # Watermark
        fig.text(0.99, 0.01, 'Omega Consulting | Confidential',
                fontsize=8, color=Omega_COLORS['GRAY'],
                ha='right', va='bottom', alpha=0.7)

        plt.tight_layout()

        if save:
            filepath = CHARTS_DIR / "breakeven_headroom.png"
            plt.savefig(filepath, dpi=300, bbox_inches='tight',
                       facecolor='white', edgecolor='none')
            print(f"Saved: {filepath}")

        return fig

    def plot_dscr_breakeven(self, save: bool = True) -> plt.Figure:
        """Generate DSCR break-even chart."""

        if not self.results:
            self.run_analysis()

        # Filter for DSCR break-even
        dscr_results = [r for r in self.results.values() if r.metric == 'dscr' and r.breakeven_pct is not None]
        dscr_results.sort(key=lambda x: x.headroom_pct)

        fig, ax = plt.subplots(figsize=(12, 7))

        variables = [r.display_name for r in dscr_results]
        headrooms = [r.headroom_pct for r in dscr_results]

        status_colors = {
            'SAFE': '#228B22',
            'MODERATE': '#FF8C00',
            'TIGHT': '#CC0000',
        }
        colors = [status_colors[r.status] for r in dscr_results]

        y_pos = np.arange(len(variables))
        bars = ax.barh(y_pos, headrooms, color=colors, alpha=0.85, edgecolor='white', height=0.6)

        ax.axvline(15, color='orange', linestyle='--', linewidth=2, label='Tight (<15%)')
        ax.axvline(30, color='green', linestyle='--', linewidth=2, label='Safe (>30%)')

        for bar, headroom, result in zip(bars, headrooms, dscr_results):
            direction = "↑" if result.breakeven_pct > 0 else "↓"
            ax.annotate(f'{direction} {headroom:.0f}%',
                       xy=(headroom + 1, bar.get_y() + bar.get_height()/2),
                       va='center', fontsize=10, fontweight='bold')

        ax.set_yticks(y_pos)
        ax.set_yticklabels(variables)
        ax.set_xlabel('Headroom to DSCR Covenant Breach (%)', fontweight='bold')
        ax.set_title('Break-Even Analysis: Headroom to DSCR = 1.20x\nOmega Project Finance Template',
                    fontsize=14, fontweight='bold', color=Omega_COLORS['PRIMARY'])
        ax.legend(loc='lower right', framealpha=0.95)

        ax.text(0.02, 0.98, "Current Min DSCR: 0.61x (already below covenant)",
               transform=ax.transAxes, fontsize=9, style='italic',
               verticalalignment='top',
               bbox=dict(boxstyle='round', facecolor='lightyellow', alpha=0.8))

        fig.text(0.99, 0.01, 'Omega Consulting | Confidential',
                fontsize=8, color=Omega_COLORS['GRAY'],
                ha='right', va='bottom', alpha=0.7)

        plt.tight_layout()

        if save:
            filepath = CHARTS_DIR / "breakeven_dscr.png"
            plt.savefig(filepath, dpi=300, bbox_inches='tight',
                       facecolor='white', edgecolor='none')
            print(f"Saved: {filepath}")

        return fig

    def generate_report(self) -> str:
        """Generate markdown summary report."""

        if not self.results:
            self.run_analysis()

        report = []
        report.append("# Break-Even Analysis Results")
        report.append("## Omega Project Finance Template\n")

        # NPV Break-even
        report.append("## NPV Break-Even Points (NPV = 0)\n")
        report.append("| Variable | Base Value | Break-Even | Change | Headroom | Status |")
        report.append("|----------|------------|------------|--------|----------|--------|")

        for key, result in self.results.items():
            if result.metric == 'npv':
                status_emoji = {"SAFE": "✅", "MODERATE": "⚠️", "TIGHT": "❌"}[result.status]

                if result.breakeven_pct is not None:
                    if result.unit == '%':
                        base_str = f"{result.base_value:.1f}%"
                        be_str = f"{result.breakeven_value:.1f}%"
                    elif result.unit == 'USD/t':
                        base_str = f"${result.base_value:.2f}"
                        be_str = f"${result.breakeven_value:.2f}"
                    else:
                        base_str = f"${result.base_value:.0f}M"
                        be_str = f"${result.breakeven_value:.0f}M"

                    row = f"| {result.display_name} | {base_str} | {be_str} | {result.breakeven_pct:+.0f}% | {result.headroom_pct:.0f}% | {status_emoji} |"
                else:
                    row = f"| {result.display_name} | - | N/A | - | >100% | ✅ |"
                report.append(row)

        # DSCR Break-even
        report.append("\n## DSCR Break-Even Points (DSCR = 1.20x)\n")
        report.append("| Variable | Base Value | Break-Even | Change | Headroom | Status |")
        report.append("|----------|------------|------------|--------|----------|--------|")

        for key, result in self.results.items():
            if result.metric == 'dscr' and result.breakeven_pct is not None:
                status_emoji = {"SAFE": "✅", "MODERATE": "⚠️", "TIGHT": "❌"}[result.status]

                if result.unit == '%':
                    base_str = f"{result.base_value:.1f}%"
                    be_str = f"{result.breakeven_value:.1f}%"
                elif result.unit == 'USD/t':
                    base_str = f"${result.base_value:.2f}"
                    be_str = f"${result.breakeven_value:.2f}"
                else:
                    base_str = f"${result.base_value:.0f}M"
                    be_str = f"${result.breakeven_value:.0f}M"

                row = f"| {result.display_name} | {base_str} | {be_str} | {result.breakeven_pct:+.0f}% | {result.headroom_pct:.0f}% | {status_emoji} |"
                report.append(row)

        return "\n".join(report)


def main():
    """Run break-even analysis and generate all outputs."""
    print("=" * 60)
    print("BREAK-EVEN ANALYSIS")
    print("Omega Project Finance Template")
    print("=" * 60)

    analyzer = BreakevenAnalyzer()

    # Run analysis
    analyzer.run_analysis()

    # Generate charts
    print("\nGenerating NPV break-even chart...")
    analyzer.plot_breakeven_chart()

    print("Generating DSCR break-even chart...")
    analyzer.plot_dscr_breakeven()

    # Generate report
    report = analyzer.generate_report()
    print("\n" + report)

    # Save report
    report_path = REPORTS_DIR / "breakeven_analysis.md"
    with open(report_path, 'w') as f:
        f.write(report)
    print(f"\nReport saved to: {report_path}")

    print("\n" + "=" * 60)
    print("Break-even analysis complete. Charts saved to:", CHARTS_DIR)
    print("=" * 60)

    plt.show()


if __name__ == "__main__":
    main()
