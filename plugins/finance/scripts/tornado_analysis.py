# -*- coding: utf-8 -*-
"""
Tornado Diagram Analysis - TEMPLATE
===================================
Omega Business Consulting - Project Finance

Generates tornado diagrams showing single-variable sensitivity impact
on NPV, IRR, and DSCR. Banking-grade visualization with Omega branding.

Usage:
    python tornado_analysis.py
"""

import numpy as np
import matplotlib.pyplot as plt
import matplotlib.patches as mpatches
from pathlib import Path
from typing import Dict, List, Tuple
from dataclasses import dataclass

from config import (
    SensitivityConfig, get_config, apply_omega_style,
    Omega_COLORS, TORNADO_COLORS, CHARTS_DIR,
    format_currency, format_percentage, format_ratio
)


@dataclass
class TornadoResult:
    """Single variable sensitivity result."""
    variable: str
    display_name: str
    base_value: float
    low_input: float
    high_input: float
    low_output: float
    high_output: float
    impact_range: float
    unit: str


class TornadoAnalyzer:
    """
    Tornado Diagram Generator for Project Finance Sensitivity Analysis.

    Calculates single-variable impacts on key financial metrics and
    generates banking-grade tornado visualizations.
    """

    def __init__(self, config: SensitivityConfig = None):
        self.config = config or get_config()
        self.results: Dict[str, List[TornadoResult]] = {}
        apply_omega_style()

    def _calculate_npv(self, capex_mult: float = 1.0, tariff_mult: float = 1.0,
                       throughput_mult: float = 1.0, opex_mult: float = 1.0,
                       interest_mult: float = 1.0, delay_months: int = 0) -> float:
        """
        Simplified NPV calculation for sensitivity analysis.

        Uses cash flow approximation based on base case with multiplier adjustments.
        For full accuracy, integrate with detailed financial model.
        """
        cfg = self.config

        # Adjusted parameters
        capex = cfg.total_capex * capex_mult  # USD M
        tariff = cfg.tariff_usd_per_tonne * tariff_mult  # USD/tonne
        throughput = cfg.annual_throughput_mta * throughput_mult  # Million tonnes
        opex_fixed = cfg.opex_fixed_annual * opex_mult  # USD M
        opex_var = cfg.opex_variable_per_tonne * opex_mult  # USD/tonne
        interest = cfg.interest_rate * interest_mult

        # Calculate annual revenue (mature year) - in USD M
        # throughput (M tonnes) * tariff (USD/t) = USD M
        annual_revenue = throughput * tariff * (1 + cfg.ancillary_revenue_pct)

        # Calculate annual OPEX - in USD M
        # opex_fixed (USD M) + throughput (M tonnes) * opex_var (USD/t) = USD M
        annual_opex = opex_fixed + (throughput * opex_var)

        # Simplified EBITDA (USD M)
        ebitda = annual_revenue - annual_opex

        # Debt service (simplified)
        debt = capex * cfg.debt_ratio
        annual_debt_service = debt * (interest + 1/cfg.loan_tenor_years)

        # Free cash flow to equity (simplified average)
        fcfe = ebitda - annual_debt_service

        # Construction delay impact
        delay_cost = delay_months * (capex * 0.005 + ebitda * 0.08)  # Cost + lost revenue

        # NPV approximation using perpetuity with finite horizon adjustment
        pv_operations = fcfe * ((1 - (1 + cfg.wacc) ** -cfg.operations_years) / cfg.wacc)
        npv = pv_operations - capex - delay_cost

        return npv

    def _calculate_irr(self, **kwargs) -> float:
        """Calculate approximate IRR based on NPV sensitivity."""
        npv = self._calculate_npv(**kwargs)
        # Approximate IRR adjustment based on NPV change
        npv_change_pct = (npv - self.config.base_npv) / self.config.base_npv
        irr = self.config.base_irr * (1 + npv_change_pct * 0.5)
        return max(0, min(irr, 0.50))  # Cap at 0-50%

    def _calculate_dscr(self, **kwargs) -> float:
        """Calculate approximate minimum DSCR."""
        cfg = self.config

        capex_mult = kwargs.get('capex_mult', 1.0)
        tariff_mult = kwargs.get('tariff_mult', 1.0)
        throughput_mult = kwargs.get('throughput_mult', 1.0)
        opex_mult = kwargs.get('opex_mult', 1.0)
        interest_mult = kwargs.get('interest_mult', 1.0)

        # Year 3 (minimum DSCR year) with partial ramp-up
        utilization_y3 = 0.55  # ~55% in year 3

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

        dscr = ebitda / debt_service if debt_service > 0 else 0
        return max(0, dscr)

    def analyze_variable(self, var_name: str, display_name: str,
                        metric: str, low_mult: float, high_mult: float,
                        unit: str = "") -> TornadoResult:
        """Analyze single variable sensitivity."""

        # Get calculation function
        if metric == 'npv':
            calc_func = self._calculate_npv
            base_value = self.config.base_npv
        elif metric == 'irr':
            calc_func = self._calculate_irr
            base_value = self.config.base_irr
        elif metric == 'dscr':
            calc_func = self._calculate_dscr
            base_value = self.config.base_min_dscr
        else:
            raise ValueError(f"Unknown metric: {metric}")

        # Map variable names to function parameters
        param_map = {
            'capex': 'capex_mult',
            'tariff': 'tariff_mult',
            'throughput': 'throughput_mult',
            'opex': 'opex_mult',
            'interest_rate': 'interest_mult',
        }

        param_name = param_map.get(var_name, var_name)

        # Calculate low and high scenarios
        low_output = calc_func(**{param_name: low_mult})
        high_output = calc_func(**{param_name: high_mult})

        return TornadoResult(
            variable=var_name,
            display_name=display_name,
            base_value=base_value,
            low_input=low_mult,
            high_input=high_mult,
            low_output=low_output,
            high_output=high_output,
            impact_range=abs(high_output - low_output),
            unit=unit
        )

    def run_analysis(self, metric: str = 'npv') -> List[TornadoResult]:
        """Run full tornado analysis for specified metric."""

        variables = [
            ('capex', 'CAPEX', 0.85, 1.25, 'USD M'),
            ('tariff', 'Tariff Rate', 0.75, 1.20, 'USD/t'),
            ('throughput', 'Throughput Volume', 0.70, 1.15, 'MTA'),
            ('opex', 'Operating Costs', 0.85, 1.30, 'USD M'),
            ('interest_rate', 'Interest Rate', 0.75, 1.25, '%'),
        ]

        results = []
        for var_name, display_name, low, high, unit in variables:
            result = self.analyze_variable(var_name, display_name, metric, low, high, unit)
            results.append(result)

        # Sort by impact range (descending)
        results.sort(key=lambda x: x.impact_range, reverse=True)
        self.results[metric] = results

        return results

    def plot_tornado(self, metric: str = 'npv', save: bool = True) -> plt.Figure:
        """Generate tornado diagram for specified metric."""

        if metric not in self.results:
            self.run_analysis(metric)

        results = self.results[metric]

        # Metric-specific formatting
        if metric == 'npv':
            title = "NPV Sensitivity Analysis"
            xlabel = "Net Present Value (USD Million)"
            base_value = self.config.base_npv
            formatter = lambda x: f"${x:.1f}M"
        elif metric == 'irr':
            title = "IRR Sensitivity Analysis"
            xlabel = "Internal Rate of Return (%)"
            base_value = self.config.base_irr * 100
            formatter = lambda x: f"{x:.1f}%"
            # Convert to percentage
            for r in results:
                r.low_output *= 100
                r.high_output *= 100
                r.base_value *= 100
        elif metric == 'dscr':
            title = "Minimum DSCR Sensitivity Analysis"
            xlabel = "Debt Service Coverage Ratio"
            base_value = self.config.base_min_dscr
            formatter = lambda x: f"{x:.2f}x"

        fig, ax = plt.subplots(figsize=(12, 8))

        # Plot bars
        y_positions = np.arange(len(results))
        bar_height = 0.6

        for i, result in enumerate(results):
            # Determine which end is low/high for coloring
            if result.low_output < result.high_output:
                left = result.low_output
                width_neg = base_value - result.low_output
                width_pos = result.high_output - base_value
            else:
                left = result.high_output
                width_neg = base_value - result.high_output
                width_pos = result.low_output - base_value

            # Negative impact bar (left of base)
            ax.barh(i, -width_neg, left=base_value, height=bar_height,
                   color=TORNADO_COLORS['negative'], alpha=0.85,
                   edgecolor='white', linewidth=1)

            # Positive impact bar (right of base)
            ax.barh(i, width_pos, left=base_value, height=bar_height,
                   color=TORNADO_COLORS['positive'], alpha=0.85,
                   edgecolor='white', linewidth=1)

            # Add value labels
            ax.annotate(formatter(result.low_output),
                       xy=(min(result.low_output, result.high_output) - 2, i),
                       ha='right', va='center', fontsize=9, fontweight='bold')
            ax.annotate(formatter(result.high_output),
                       xy=(max(result.low_output, result.high_output) + 2, i),
                       ha='left', va='center', fontsize=9, fontweight='bold')

        # Base case line
        ax.axvline(x=base_value, color=TORNADO_COLORS['base_line'],
                  linestyle='-', linewidth=2.5, label=f'Base Case: {formatter(base_value)}')

        # Formatting
        ax.set_yticks(y_positions)
        ax.set_yticklabels([r.display_name for r in results])
        ax.set_xlabel(xlabel, fontweight='bold')
        ax.set_title(f"{title}\n{self.config.project_name}",
                    fontsize=14, fontweight='bold', color=Omega_COLORS['PRIMARY'])

        # Add range labels on right side
        ax2 = ax.twinx()
        ax2.set_yticks(y_positions)
        range_labels = []
        for r in results:
            low_pct = (r.low_input - 1) * 100
            high_pct = (r.high_input - 1) * 100
            range_labels.append(f"{low_pct:+.0f}% to {high_pct:+.0f}%")
        ax2.set_yticklabels(range_labels, fontsize=9, color=Omega_COLORS['GRAY'])
        ax2.set_ylim(ax.get_ylim())

        # Legend
        negative_patch = mpatches.Patch(color=TORNADO_COLORS['negative'],
                                        label='Negative Impact', alpha=0.85)
        positive_patch = mpatches.Patch(color=TORNADO_COLORS['positive'],
                                        label='Positive Impact', alpha=0.85)
        ax.legend(handles=[negative_patch, positive_patch, ax.get_lines()[0]],
                 loc='lower right', framealpha=0.95)

        # Add watermark
        fig.text(0.99, 0.01, 'Omega Consulting | Confidential',
                fontsize=8, color=Omega_COLORS['GRAY'],
                ha='right', va='bottom', alpha=0.7)

        plt.tight_layout()

        if save:
            filepath = CHARTS_DIR / f"tornado_{metric}.png"
            plt.savefig(filepath, dpi=300, bbox_inches='tight',
                       facecolor='white', edgecolor='none')
            print(f"Saved: {filepath}")

        return fig

    def generate_summary_table(self, metric: str = 'npv') -> str:
        """Generate markdown summary table."""

        if metric not in self.results:
            self.run_analysis(metric)

        results = self.results[metric]

        # Format header
        if metric == 'npv':
            header = "| Rank | Variable | Low Case | Base Case | High Case | Impact Range |\n"
            header += "|------|----------|----------|-----------|-----------|-------------|\n"
            fmt = lambda x: f"${x:.1f}M"
        elif metric == 'irr':
            header = "| Rank | Variable | Low Case | Base Case | High Case | Impact Range |\n"
            header += "|------|----------|----------|-----------|-----------|-------------|\n"
            fmt = lambda x: f"{x*100:.1f}%"
        else:
            header = "| Rank | Variable | Low Case | Base Case | High Case | Impact Range |\n"
            header += "|------|----------|----------|-----------|-----------|-------------|\n"
            fmt = lambda x: f"{x:.2f}x"

        rows = []
        for i, r in enumerate(results, 1):
            row = f"| {i} | {r.display_name} | {fmt(r.low_output)} | {fmt(r.base_value)} | {fmt(r.high_output)} | {fmt(r.impact_range)} |"
            rows.append(row)

        return header + "\n".join(rows)


def main():
    """Run tornado analysis and generate all outputs."""
    config = get_config()
    print("=" * 60)
    print("TORNADO SENSITIVITY ANALYSIS")
    print(config.project_name)
    print("=" * 60)

    analyzer = TornadoAnalyzer(config)

    # Generate tornado diagrams for all metrics
    for metric in ['npv', 'irr', 'dscr']:
        print(f"\nAnalyzing {metric.upper()}...")
        analyzer.run_analysis(metric)
        analyzer.plot_tornado(metric)
        print(analyzer.generate_summary_table(metric))

    print("\n" + "=" * 60)
    print("Tornado analysis complete. Charts saved to:", CHARTS_DIR)
    print("=" * 60)

    plt.show()


if __name__ == "__main__":
    main()
