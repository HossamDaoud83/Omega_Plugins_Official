# -*- coding: utf-8 -*-
"""
Scenario Analysis
=================
Omega Project Finance Template

Compares discrete scenarios: Base, Upside, Downside, Stress, Bank Case.
Generates comparison tables and waterfall charts.

Usage:
    python scenario_analysis.py
"""

import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import matplotlib.patches as mpatches
from typing import Dict, List, Tuple
from dataclasses import dataclass

from config import (
    SensitivityConfig, get_config, apply_omega_style,
    Omega_COLORS, CHARTS_DIR, REPORTS_DIR,
    format_currency, format_percentage, format_ratio
)


@dataclass
class ScenarioResult:
    """Container for scenario analysis results."""
    name: str
    description: str
    inputs: Dict[str, float]
    npv: float
    irr: float
    equity_irr: float
    min_dscr: float
    avg_dscr: float
    payback: float
    dsra_required: float
    status: str  # PASS, MARGINAL, FAIL


class ScenarioAnalyzer:
    """
    Scenario Analysis Engine for Project Finance.

    Evaluates discrete scenarios and compares against banking thresholds.
    """

    def __init__(self, config: SensitivityConfig = None):
        self.config = config or get_config()
        self.results: Dict[str, ScenarioResult] = {}
        apply_omega_style()

        # Scenario descriptions
        self.scenario_descriptions = {
            'base': 'Management base case assumptions',
            'upside': 'Favorable market conditions, efficient execution',
            'downside': 'Moderate headwinds, minor delays',
            'stress': 'Severe stress - multiple adverse factors',
            'bank_case': 'Lender conservative case for covenant testing',
        }

        # Status colors
        self.status_colors = {
            'PASS': '#228B22',
            'MARGINAL': '#FF8C00',
            'FAIL': '#CC0000',
        }

    def _calculate_metrics(self, scenario: Dict[str, float]) -> Dict[str, float]:
        """Calculate all financial metrics for a scenario."""
        cfg = self.config

        # Apply multipliers
        capex = cfg.total_capex * scenario.get('capex', 1.0)
        tariff = cfg.tariff_usd_per_tonne * scenario.get('tariff', 1.0)
        throughput = cfg.annual_throughput_mta * scenario.get('throughput', 1.0)
        opex_fixed = cfg.opex_fixed_annual * scenario.get('opex', 1.0)
        opex_var = cfg.opex_variable_per_tonne * scenario.get('opex', 1.0)
        interest = cfg.interest_rate * scenario.get('interest_rate', 1.0)
        delay_months = scenario.get('delay_months', 0)

        # Revenue (mature year) - in USD M
        annual_revenue = throughput * tariff * (1 + cfg.ancillary_revenue_pct)

        # OPEX - in USD M
        annual_opex = opex_fixed + (throughput * opex_var)

        # EBITDA
        ebitda = annual_revenue - annual_opex

        # Debt service
        debt = capex * cfg.debt_ratio
        annual_debt_service = debt * (interest + 1/cfg.loan_tenor_years)

        # Free cash flow
        fcfe = ebitda - annual_debt_service

        # Delay cost
        delay_cost = delay_months * (capex * 0.005 + ebitda * 0.08)

        # NPV
        pv_operations = fcfe * ((1 - (1 + cfg.wacc) ** -cfg.operations_years) / cfg.wacc)
        npv = pv_operations - capex - delay_cost

        # IRR (approximation)
        npv_change_pct = (npv - cfg.base_npv) / max(cfg.base_npv, 1)
        irr = cfg.base_irr * (1 + npv_change_pct * 0.5)
        irr = max(0, min(irr, 0.50))

        # Equity IRR (leveraged)
        equity_irr = irr + (irr - interest) * (cfg.debt_ratio / cfg.equity_ratio)
        equity_irr = max(0, min(equity_irr, 0.60))

        # Minimum DSCR (Year 3 with partial utilization)
        utilization_y3 = 0.55
        throughput_y3 = throughput * utilization_y3
        revenue_y3 = throughput_y3 * tariff * (1 + cfg.ancillary_revenue_pct)
        opex_y3 = opex_fixed + (throughput_y3 * opex_var)
        ebitda_y3 = revenue_y3 - opex_y3
        min_dscr = ebitda_y3 / annual_debt_service if annual_debt_service > 0 else 0

        # Average DSCR (mature operations)
        avg_dscr = ebitda / annual_debt_service if annual_debt_service > 0 else 0

        # Payback period (simplified)
        annual_cashflow = fcfe
        if annual_cashflow > 0:
            payback = capex / annual_cashflow + (delay_months / 12)
        else:
            payback = 99  # Infinite

        # DSRA requirement (if DSCR < 1.20)
        if min_dscr < 1.20:
            shortfall = (1.20 - min_dscr) * annual_debt_service
            dsra_years = 4  # Years of shortfall coverage
            dsra_required = shortfall * dsra_years
        else:
            dsra_required = 0

        return {
            'npv': npv,
            'irr': irr,
            'equity_irr': equity_irr,
            'min_dscr': min_dscr,
            'avg_dscr': avg_dscr,
            'payback': payback,
            'dsra_required': dsra_required,
        }

    def _determine_status(self, metrics: Dict[str, float]) -> str:
        """Determine pass/fail status based on banking thresholds."""
        cfg = self.config

        # Criteria
        npv_pass = metrics['npv'] > 0
        irr_pass = metrics['irr'] > cfg.wacc
        dscr_pass = metrics['min_dscr'] >= 1.20
        dscr_marginal = metrics['min_dscr'] >= 1.05

        if npv_pass and irr_pass and dscr_pass:
            return 'PASS'
        elif npv_pass and irr_pass and dscr_marginal:
            return 'MARGINAL'
        else:
            return 'FAIL'

    def run_scenarios(self) -> Dict[str, ScenarioResult]:
        """Run all defined scenarios."""

        for name, inputs in self.config.scenarios.items():
            metrics = self._calculate_metrics(inputs)
            status = self._determine_status(metrics)

            self.results[name] = ScenarioResult(
                name=name.upper(),
                description=self.scenario_descriptions.get(name, ''),
                inputs=inputs,
                npv=metrics['npv'],
                irr=metrics['irr'],
                equity_irr=metrics['equity_irr'],
                min_dscr=metrics['min_dscr'],
                avg_dscr=metrics['avg_dscr'],
                payback=metrics['payback'],
                dsra_required=metrics['dsra_required'],
                status=status,
            )

        return self.results

    def plot_scenario_comparison(self, save: bool = True) -> plt.Figure:
        """Generate scenario comparison bar chart."""

        if not self.results:
            self.run_scenarios()

        scenarios = list(self.results.values())
        scenario_names = [s.name for s in scenarios]
        n_scenarios = len(scenarios)

        fig, axes = plt.subplots(2, 2, figsize=(14, 10))

        # Colors based on status
        colors = [self.status_colors[s.status] for s in scenarios]

        # NPV Chart
        ax1 = axes[0, 0]
        npv_values = [s.npv for s in scenarios]
        bars1 = ax1.bar(scenario_names, npv_values, color=colors, alpha=0.85, edgecolor='white')
        ax1.axhline(0, color='black', linestyle='-', linewidth=1.5)
        ax1.set_ylabel('NPV (USD Million)', fontweight='bold')
        ax1.set_title('Net Present Value', fontweight='bold', color=Omega_COLORS['PRIMARY'])
        for bar, val in zip(bars1, npv_values):
            ax1.annotate(f'${val:.0f}M', xy=(bar.get_x() + bar.get_width()/2, val),
                        ha='center', va='bottom' if val >= 0 else 'top',
                        fontsize=10, fontweight='bold')

        # IRR Chart
        ax2 = axes[0, 1]
        irr_values = [s.irr * 100 for s in scenarios]
        bars2 = ax2.bar(scenario_names, irr_values, color=colors, alpha=0.85, edgecolor='white')
        ax2.axhline(11.5, color='black', linestyle=':', linewidth=2, label='WACC (11.5%)')
        ax2.set_ylabel('IRR (%)', fontweight='bold')
        ax2.set_title('Internal Rate of Return', fontweight='bold', color=Omega_COLORS['PRIMARY'])
        ax2.legend(loc='lower right')
        for bar, val in zip(bars2, irr_values):
            ax2.annotate(f'{val:.1f}%', xy=(bar.get_x() + bar.get_width()/2, val),
                        ha='center', va='bottom', fontsize=10, fontweight='bold')

        # DSCR Chart
        ax3 = axes[1, 0]
        dscr_values = [s.min_dscr for s in scenarios]
        bars3 = ax3.bar(scenario_names, dscr_values, color=colors, alpha=0.85, edgecolor='white')
        ax3.axhline(1.20, color='black', linestyle=':', linewidth=2, label='Covenant (1.20x)')
        ax3.axhline(1.05, color='orange', linestyle='--', linewidth=1.5, label='Default (1.05x)')
        ax3.set_ylabel('Minimum DSCR', fontweight='bold')
        ax3.set_title('Debt Service Coverage Ratio', fontweight='bold', color=Omega_COLORS['PRIMARY'])
        ax3.legend(loc='upper right')
        for bar, val in zip(bars3, dscr_values):
            ax3.annotate(f'{val:.2f}x', xy=(bar.get_x() + bar.get_width()/2, val),
                        ha='center', va='bottom', fontsize=10, fontweight='bold')

        # Payback Chart
        ax4 = axes[1, 1]
        payback_values = [min(s.payback, 20) for s in scenarios]  # Cap at 20 for display
        bars4 = ax4.bar(scenario_names, payback_values, color=colors, alpha=0.85, edgecolor='white')
        ax4.axhline(15, color='black', linestyle=':', linewidth=2, label='Max Target (15 yrs)')
        ax4.set_ylabel('Payback Period (Years)', fontweight='bold')
        ax4.set_title('Simple Payback', fontweight='bold', color=Omega_COLORS['PRIMARY'])
        ax4.legend(loc='upper right')
        for bar, val, s in zip(bars4, payback_values, scenarios):
            label = f'{val:.1f}' if s.payback < 20 else '>20'
            ax4.annotate(label, xy=(bar.get_x() + bar.get_width()/2, val),
                        ha='center', va='bottom', fontsize=10, fontweight='bold')

        # Legend for status
        pass_patch = mpatches.Patch(color=self.status_colors['PASS'], label='PASS', alpha=0.85)
        marg_patch = mpatches.Patch(color=self.status_colors['MARGINAL'], label='MARGINAL', alpha=0.85)
        fail_patch = mpatches.Patch(color=self.status_colors['FAIL'], label='FAIL', alpha=0.85)
        fig.legend(handles=[pass_patch, marg_patch, fail_patch],
                  loc='upper center', ncol=3, bbox_to_anchor=(0.5, 0.02))

        fig.suptitle('Scenario Analysis - Financial Metrics Comparison\nOmega Project Finance Template',
                    fontsize=14, fontweight='bold', color=Omega_COLORS['PRIMARY'], y=1.02)

        # Watermark
        fig.text(0.99, 0.01, 'Omega Consulting | Confidential',
                fontsize=8, color=Omega_COLORS['GRAY'],
                ha='right', va='bottom', alpha=0.7)

        plt.tight_layout()

        if save:
            filepath = CHARTS_DIR / "scenario_comparison.png"
            plt.savefig(filepath, dpi=300, bbox_inches='tight',
                       facecolor='white', edgecolor='none')
            print(f"Saved: {filepath}")

        return fig

    def plot_waterfall(self, save: bool = True) -> plt.Figure:
        """Generate waterfall chart showing NPV bridge from base to stress."""

        if not self.results:
            self.run_scenarios()

        base = self.results['base']
        stress = self.results['stress']

        # Calculate individual impacts
        cfg = self.config
        base_inputs = cfg.scenarios['base']
        stress_inputs = cfg.scenarios['stress']

        # Calculate impact of each factor
        impacts = []

        # CAPEX impact
        capex_only = base_inputs.copy()
        capex_only['capex'] = stress_inputs['capex']
        capex_impact = self._calculate_metrics(capex_only)['npv'] - base.npv
        impacts.append(('CAPEX\nIncrease', capex_impact))

        # Tariff impact
        tariff_only = base_inputs.copy()
        tariff_only['tariff'] = stress_inputs['tariff']
        tariff_impact = self._calculate_metrics(tariff_only)['npv'] - base.npv
        impacts.append(('Tariff\nReduction', tariff_impact))

        # Throughput impact
        throughput_only = base_inputs.copy()
        throughput_only['throughput'] = stress_inputs['throughput']
        throughput_impact = self._calculate_metrics(throughput_only)['npv'] - base.npv
        impacts.append(('Volume\nDecrease', throughput_impact))

        # OPEX impact
        opex_only = base_inputs.copy()
        opex_only['opex'] = stress_inputs['opex']
        opex_impact = self._calculate_metrics(opex_only)['npv'] - base.npv
        impacts.append(('OPEX\nIncrease', opex_impact))

        # Interest impact
        interest_only = base_inputs.copy()
        interest_only['interest_rate'] = stress_inputs['interest_rate']
        interest_impact = self._calculate_metrics(interest_only)['npv'] - base.npv
        impacts.append(('Interest\nIncrease', interest_impact))

        # Delay impact
        delay_only = base_inputs.copy()
        delay_only['delay_months'] = stress_inputs['delay_months']
        delay_impact = self._calculate_metrics(delay_only)['npv'] - base.npv
        impacts.append(('Construction\nDelay', delay_impact))

        # Sort by impact magnitude
        impacts.sort(key=lambda x: x[1])

        fig, ax = plt.subplots(figsize=(14, 8))

        # Build waterfall
        labels = ['Base Case'] + [i[0] for i in impacts] + ['Stress Case']
        values = [base.npv] + [i[1] for i in impacts] + [stress.npv]

        # Calculate cumulative for plotting
        cumulative = [base.npv]
        for i, (_, impact) in enumerate(impacts):
            cumulative.append(cumulative[-1] + impact)
        cumulative.append(stress.npv)

        # Plot bars
        x = np.arange(len(labels))
        bar_width = 0.6

        for i, (label, val) in enumerate(zip(labels, values)):
            if i == 0:  # Base case
                ax.bar(i, val, bar_width, color=Omega_COLORS['PRIMARY'], alpha=0.85)
                ax.annotate(f'${val:.0f}M', xy=(i, val), ha='center', va='bottom',
                           fontsize=11, fontweight='bold')
            elif i == len(labels) - 1:  # Stress case
                color = self.status_colors['FAIL'] if val < 0 else self.status_colors['MARGINAL']
                ax.bar(i, val, bar_width, color=color, alpha=0.85)
                ax.annotate(f'${val:.0f}M', xy=(i, val), ha='center',
                           va='bottom' if val >= 0 else 'top',
                           fontsize=11, fontweight='bold')
            else:  # Impact bars
                bottom = cumulative[i-1] if val < 0 else cumulative[i-1] + val
                height = abs(val)
                color = self.status_colors['FAIL'] if val < 0 else self.status_colors['PASS']

                if val < 0:
                    ax.bar(i, val, bar_width, bottom=cumulative[i-1], color=color, alpha=0.85)
                else:
                    ax.bar(i, val, bar_width, bottom=cumulative[i-1], color=color, alpha=0.85)

                ax.annotate(f'{val:+.0f}M', xy=(i, cumulative[i]),
                           ha='center', va='bottom' if val >= 0 else 'top',
                           fontsize=10, fontweight='bold', color=color)

        # Connect bars with lines
        for i in range(len(cumulative) - 1):
            ax.plot([i + bar_width/2, i + 1 - bar_width/2],
                   [cumulative[i], cumulative[i]],
                   color='gray', linestyle='--', linewidth=1)

        ax.axhline(0, color='black', linestyle='-', linewidth=1.5)
        ax.set_xticks(x)
        ax.set_xticklabels(labels, fontsize=10)
        ax.set_ylabel('NPV (USD Million)', fontweight='bold')
        ax.set_title('NPV Waterfall: Base Case to Stress Case\nOmega Project Finance Template',
                    fontsize=14, fontweight='bold', color=Omega_COLORS['PRIMARY'])

        # Watermark
        fig.text(0.99, 0.01, 'Omega Consulting | Confidential',
                fontsize=8, color=Omega_COLORS['GRAY'],
                ha='right', va='bottom', alpha=0.7)

        plt.tight_layout()

        if save:
            filepath = CHARTS_DIR / "npv_waterfall.png"
            plt.savefig(filepath, dpi=300, bbox_inches='tight',
                       facecolor='white', edgecolor='none')
            print(f"Saved: {filepath}")

        return fig

    def generate_comparison_table(self) -> pd.DataFrame:
        """Generate scenario comparison table."""

        if not self.results:
            self.run_scenarios()

        data = []
        for name, result in self.results.items():
            data.append({
                'Scenario': result.name,
                'Description': result.description,
                'NPV ($M)': f"${result.npv:.1f}M",
                'IRR': f"{result.irr*100:.1f}%",
                'Equity IRR': f"{result.equity_irr*100:.1f}%",
                'Min DSCR': f"{result.min_dscr:.2f}x",
                'Avg DSCR': f"{result.avg_dscr:.2f}x",
                'Payback (yrs)': f"{result.payback:.1f}",
                'DSRA Required': f"${result.dsra_required:.1f}M" if result.dsra_required > 0 else "None",
                'Status': result.status,
            })

        df = pd.DataFrame(data)
        return df

    def generate_report(self) -> str:
        """Generate markdown summary report."""

        if not self.results:
            self.run_scenarios()

        report = []
        report.append("# Scenario Analysis Results")
        report.append("## Omega Project Finance Template\n")

        report.append("## Summary Comparison\n")
        report.append("| Scenario | NPV | IRR | Min DSCR | Status |")
        report.append("|----------|-----|-----|----------|--------|")

        for name, result in self.results.items():
            status_emoji = {"PASS": "✅", "MARGINAL": "⚠️", "FAIL": "❌"}[result.status]
            row = f"| {result.name} | ${result.npv:.1f}M | {result.irr*100:.1f}% | {result.min_dscr:.2f}x | {status_emoji} {result.status} |"
            report.append(row)

        report.append("\n## Key Findings\n")

        base = self.results['base']
        stress = self.results['stress']
        bank = self.results['bank_case']

        report.append(f"- **Base Case NPV:** ${base.npv:.1f}M with {base.irr*100:.1f}% IRR")
        report.append(f"- **Stress Case NPV:** ${stress.npv:.1f}M ({(stress.npv/base.npv-1)*100:+.0f}% from base)")
        report.append(f"- **Bank Case DSCR:** {bank.min_dscr:.2f}x (covenant: 1.20x)")

        if bank.dsra_required > 0:
            report.append(f"- **DSRA Requirement:** ${bank.dsra_required:.1f}M to cover DSCR shortfall")

        return "\n".join(report)


def main():
    """Run scenario analysis and generate all outputs."""
    print("=" * 60)
    print("SCENARIO ANALYSIS")
    print("Omega Project Finance Template")
    print("=" * 60)

    analyzer = ScenarioAnalyzer()

    # Run scenarios
    analyzer.run_scenarios()

    # Print comparison table
    df = analyzer.generate_comparison_table()
    print("\nScenario Comparison:")
    print(df.to_string(index=False))

    # Generate charts
    print("\nGenerating comparison chart...")
    analyzer.plot_scenario_comparison()

    print("Generating waterfall chart...")
    analyzer.plot_waterfall()

    # Generate report
    report = analyzer.generate_report()
    print("\n" + report)

    # Save report
    report_path = REPORTS_DIR / "scenario_analysis.md"
    with open(report_path, 'w') as f:
        f.write(report)
    print(f"\nReport saved to: {report_path}")

    # Save table
    table_path = REPORTS_DIR / "scenario_comparison.csv"
    df.to_csv(table_path, index=False)
    print(f"Table saved to: {table_path}")

    print("\n" + "=" * 60)
    print("Scenario analysis complete. Charts saved to:", CHARTS_DIR)
    print("=" * 60)

    plt.show()


if __name__ == "__main__":
    main()
