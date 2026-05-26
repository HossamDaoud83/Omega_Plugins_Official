# -*- coding: utf-8 -*-
"""
Spider Chart (Sensitivity Curves) Analysis
==========================================
Omega Project Finance Template

Generates spider charts showing multi-variable sensitivity across
a range of percentage changes (-30% to +30%).

Usage:
    python spider_chart.py
"""

import numpy as np
import matplotlib.pyplot as plt
from typing import Dict, List, Tuple
from dataclasses import dataclass

from config import (
    SensitivityConfig, get_config, apply_omega_style,
    Omega_COLORS, CHARTS_DIR,
    format_currency, format_percentage, format_ratio
)


@dataclass
class SpiderData:
    """Container for spider chart data."""
    variable: str
    display_name: str
    x_values: np.ndarray  # Percentage changes
    y_values: np.ndarray  # Metric values
    color: str
    linestyle: str


class SpiderChartGenerator:
    """
    Spider Chart Generator for Multi-Variable Sensitivity.

    Shows how different variables affect outputs across a range
    of percentage changes from base case.
    """

    def __init__(self, config: SensitivityConfig = None):
        self.config = config or get_config()
        self.data: Dict[str, List[SpiderData]] = {}
        apply_omega_style()

        # Variable colors for differentiation
        self.var_colors = {
            'capex': '#CC0000',         # Red
            'tariff': '#228B22',         # Green
            'throughput': '#1B4F72',     # Navy
            'opex': '#FF8C00',           # Orange
            'interest_rate': '#9400D3',  # Purple
            'utilization': '#00CED1',    # Cyan
        }

        self.var_linestyles = {
            'capex': '-',
            'tariff': '--',
            'throughput': '-.',
            'opex': ':',
            'interest_rate': '-',
            'utilization': '--',
        }

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

    def _calculate_irr(self, **kwargs) -> float:
        """Calculate approximate IRR."""
        npv = self._calculate_npv(**kwargs)
        npv_change_pct = (npv - self.config.base_npv) / max(self.config.base_npv, 1)
        irr = self.config.base_irr * (1 + npv_change_pct * 0.5)
        return max(0, min(irr, 0.50))

    def _calculate_dscr(self, **kwargs) -> float:
        """Calculate minimum DSCR."""
        cfg = self.config

        capex_mult = kwargs.get('capex_mult', 1.0)
        tariff_mult = kwargs.get('tariff_mult', 1.0)
        throughput_mult = kwargs.get('throughput_mult', 1.0)
        opex_mult = kwargs.get('opex_mult', 1.0)
        interest_mult = kwargs.get('interest_mult', 1.0)

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

    def generate_spider_data(self, metric: str = 'npv',
                            pct_range: Tuple[float, float] = (-0.30, 0.30),
                            steps: int = 61) -> List[SpiderData]:
        """Generate spider chart data for all variables."""

        # Select calculation function
        if metric == 'npv':
            calc_func = self._calculate_npv
        elif metric == 'irr':
            calc_func = self._calculate_irr
        elif metric == 'dscr':
            calc_func = self._calculate_dscr
        else:
            raise ValueError(f"Unknown metric: {metric}")

        # Parameter mapping
        variables = [
            ('capex', 'capex_mult', 'CAPEX'),
            ('tariff', 'tariff_mult', 'Tariff Rate'),
            ('throughput', 'throughput_mult', 'Throughput'),
            ('opex', 'opex_mult', 'OPEX'),
            ('interest_rate', 'interest_mult', 'Interest Rate'),
        ]

        x_values = np.linspace(pct_range[0], pct_range[1], steps)
        spider_data = []

        for var_name, param_name, display_name in variables:
            y_values = []

            for pct_change in x_values:
                mult = 1.0 + pct_change
                kwargs = {param_name: mult}
                result = calc_func(**kwargs)
                y_values.append(result)

            spider_data.append(SpiderData(
                variable=var_name,
                display_name=display_name,
                x_values=x_values * 100,  # Convert to percentage
                y_values=np.array(y_values),
                color=self.var_colors[var_name],
                linestyle=self.var_linestyles[var_name]
            ))

        self.data[metric] = spider_data
        return spider_data

    def plot_spider(self, metric: str = 'npv', save: bool = True) -> plt.Figure:
        """Generate spider chart for specified metric."""

        if metric not in self.data:
            self.generate_spider_data(metric)

        spider_data = self.data[metric]

        # Metric-specific formatting
        if metric == 'npv':
            title = "NPV Sensitivity Spider Chart"
            ylabel = "Net Present Value (USD Million)"
            base_value = self.config.base_npv
            formatter = lambda x: f"${x:.0f}M"
            threshold_line = 0
            threshold_label = "Break-Even"
        elif metric == 'irr':
            title = "IRR Sensitivity Spider Chart"
            ylabel = "Internal Rate of Return (%)"
            base_value = self.config.base_irr * 100
            formatter = lambda x: f"{x:.1f}%"
            # Convert to percentage
            for sd in spider_data:
                sd.y_values = sd.y_values * 100
            threshold_line = 11.5
            threshold_label = "WACC"
        else:  # dscr
            title = "DSCR Sensitivity Spider Chart"
            ylabel = "Minimum Debt Service Coverage Ratio"
            base_value = self.config.base_min_dscr
            formatter = lambda x: f"{x:.2f}x"
            threshold_line = 1.20
            threshold_label = "Covenant"

        fig, ax = plt.subplots(figsize=(12, 8))

        # Plot each variable line
        for sd in spider_data:
            ax.plot(sd.x_values, sd.y_values,
                   color=sd.color, linestyle=sd.linestyle,
                   linewidth=2.5, label=sd.display_name,
                   marker='o', markersize=4, markevery=10)

        # Base case point
        ax.axhline(base_value, color=Omega_COLORS['GRAY'], linestyle='-',
                  linewidth=1.5, alpha=0.7, label=f'Base Case: {formatter(base_value)}')
        ax.axvline(0, color=Omega_COLORS['GRAY'], linestyle='-',
                  linewidth=1.5, alpha=0.7)

        # Threshold line
        ax.axhline(threshold_line, color='black', linestyle=':',
                  linewidth=2, label=f'{threshold_label}: {formatter(threshold_line)}')

        # Highlight base point
        ax.plot(0, base_value, 'ko', markersize=12, zorder=5)
        ax.annotate(f'Base: {formatter(base_value)}',
                   xy=(0, base_value), xytext=(5, base_value + (ax.get_ylim()[1]-ax.get_ylim()[0])*0.05),
                   fontsize=10, fontweight='bold')

        # Shade negative region
        if metric == 'npv':
            ax.fill_between(spider_data[0].x_values, ax.get_ylim()[0], 0,
                           alpha=0.1, color='red', label='Negative NPV Zone')
        elif metric == 'dscr':
            ax.fill_between(spider_data[0].x_values, ax.get_ylim()[0], 1.20,
                           alpha=0.1, color='red', label='Covenant Breach Zone')

        # Formatting
        ax.set_xlabel('Change from Base Case (%)', fontweight='bold', fontsize=11)
        ax.set_ylabel(ylabel, fontweight='bold', fontsize=11)
        ax.set_title(f"{title}\nOmega Project Finance Template",
                    fontsize=14, fontweight='bold', color=Omega_COLORS['PRIMARY'])

        ax.legend(loc='best', framealpha=0.95, ncol=2)
        ax.set_xlim(-32, 32)

        # Add interpretation guide
        guide_text = (
            "Steeper lines = Higher sensitivity\n"
            "Positive slope = Direct relationship\n"
            "Negative slope = Inverse relationship"
        )
        ax.text(0.02, 0.02, guide_text, transform=ax.transAxes,
               fontsize=9, style='italic', verticalalignment='bottom',
               bbox=dict(boxstyle='round', facecolor='lightyellow', alpha=0.8))

        # Watermark
        fig.text(0.99, 0.01, 'Omega Consulting | Confidential',
                fontsize=8, color=Omega_COLORS['GRAY'],
                ha='right', va='bottom', alpha=0.7)

        plt.tight_layout()

        if save:
            filepath = CHARTS_DIR / f"spider_{metric}.png"
            plt.savefig(filepath, dpi=300, bbox_inches='tight',
                       facecolor='white', edgecolor='none')
            print(f"Saved: {filepath}")

        return fig

    def plot_combined_spider(self, save: bool = True) -> plt.Figure:
        """Generate combined spider chart showing all metrics."""

        metrics = ['npv', 'irr', 'dscr']
        for m in metrics:
            if m not in self.data:
                self.generate_spider_data(m)

        fig, axes = plt.subplots(1, 3, figsize=(18, 6))

        for ax, metric in zip(axes, metrics):
            spider_data = self.data[metric]

            if metric == 'npv':
                title = "NPV"
                ylabel = "USD Million"
                base_value = self.config.base_npv
                threshold = 0
            elif metric == 'irr':
                title = "IRR"
                ylabel = "Percent"
                base_value = self.config.base_irr * 100
                threshold = 11.5
                for sd in spider_data:
                    if sd.y_values.max() < 1:  # Not yet converted
                        sd.y_values = sd.y_values * 100
            else:
                title = "Min DSCR"
                ylabel = "Ratio"
                base_value = self.config.base_min_dscr
                threshold = 1.20

            for sd in spider_data:
                ax.plot(sd.x_values, sd.y_values,
                       color=sd.color, linestyle=sd.linestyle,
                       linewidth=2, label=sd.display_name)

            ax.axhline(base_value, color=Omega_COLORS['GRAY'], linestyle='-',
                      linewidth=1, alpha=0.5)
            ax.axvline(0, color=Omega_COLORS['GRAY'], linestyle='-',
                      linewidth=1, alpha=0.5)
            ax.axhline(threshold, color='black', linestyle=':', linewidth=1.5)

            ax.set_xlabel('Change (%)', fontweight='bold')
            ax.set_ylabel(ylabel, fontweight='bold')
            ax.set_title(title, fontsize=12, fontweight='bold', color=Omega_COLORS['PRIMARY'])
            ax.set_xlim(-32, 32)

        # Single legend for all
        handles, labels = axes[0].get_legend_handles_labels()
        fig.legend(handles, labels, loc='upper center', ncol=5,
                  bbox_to_anchor=(0.5, 0.02), framealpha=0.95)

        fig.suptitle('Multi-Metric Sensitivity Analysis\nOmega Project Finance Template',
                    fontsize=14, fontweight='bold', color=Omega_COLORS['PRIMARY'], y=1.02)

        # Watermark
        fig.text(0.99, 0.01, 'Omega Consulting | Confidential',
                fontsize=8, color=Omega_COLORS['GRAY'],
                ha='right', va='bottom', alpha=0.7)

        plt.tight_layout()

        if save:
            filepath = CHARTS_DIR / f"spider_combined.png"
            plt.savefig(filepath, dpi=300, bbox_inches='tight',
                       facecolor='white', edgecolor='none')
            print(f"Saved: {filepath}")

        return fig

    def calculate_elasticity(self, metric: str = 'npv') -> Dict[str, float]:
        """Calculate elasticity (% change in output / % change in input) for each variable."""

        if metric not in self.data:
            self.generate_spider_data(metric)

        spider_data = self.data[metric]
        elasticities = {}

        for sd in spider_data:
            # Use +/- 10% points
            idx_neg = np.argmin(np.abs(sd.x_values - (-10)))
            idx_pos = np.argmin(np.abs(sd.x_values - 10))
            idx_base = np.argmin(np.abs(sd.x_values - 0))

            base_val = sd.y_values[idx_base]
            pct_change_output = ((sd.y_values[idx_pos] - sd.y_values[idx_neg]) / base_val) * 100
            pct_change_input = 20  # From -10% to +10%

            elasticity = pct_change_output / pct_change_input
            elasticities[sd.display_name] = elasticity

        return elasticities


def main():
    """Run spider chart analysis and generate all outputs."""
    print("=" * 60)
    print("SPIDER CHART SENSITIVITY ANALYSIS")
    print("Omega Project Finance Template")
    print("=" * 60)

    generator = SpiderChartGenerator()

    # Generate individual spider charts
    for metric in ['npv', 'irr', 'dscr']:
        print(f"\nGenerating {metric.upper()} spider chart...")
        generator.plot_spider(metric)

        # Calculate elasticities
        elasticities = generator.calculate_elasticity(metric)
        print(f"\n{metric.upper()} Elasticities (at +/-10%):")
        for var, elast in sorted(elasticities.items(), key=lambda x: abs(x[1]), reverse=True):
            print(f"  {var}: {elast:+.2f}")

    # Generate combined chart
    print("\nGenerating combined spider chart...")
    generator.plot_combined_spider()

    print("\n" + "=" * 60)
    print("Spider chart analysis complete. Charts saved to:", CHARTS_DIR)
    print("=" * 60)

    plt.show()


if __name__ == "__main__":
    main()
