# -*- coding: utf-8 -*-
"""
Monte Carlo Simulation Analysis
===============================
Omega Project Finance Template

Probabilistic analysis using Monte Carlo simulation for NPV, IRR, DSCR.
Generates P10/P50/P90 confidence intervals for banking presentations.

Usage:
    python montecarlo_simulation.py
"""

import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from matplotlib.ticker import PercentFormatter
from scipy import stats
from pathlib import Path
from typing import Dict, List, Tuple, Optional
from dataclasses import dataclass
import warnings

from config import (
    SensitivityConfig, get_config, apply_omega_style,
    Omega_COLORS, MC_COLORS, CHARTS_DIR, REPORTS_DIR,
    format_currency, format_percentage, format_ratio
)

warnings.filterwarnings('ignore')


@dataclass
class MonteCarloResults:
    """Container for Monte Carlo simulation results."""
    metric: str
    iterations: int
    values: np.ndarray
    mean: float
    std: float
    p10: float
    p50: float
    p80: float
    p90: float
    min_val: float
    max_val: float
    prob_positive: float  # Probability > 0 (for NPV)
    prob_target: float    # Probability > target threshold


class MonteCarloSimulator:
    """
    Monte Carlo Simulation Engine for Project Finance.

    Runs probabilistic analysis with correlated variables and
    generates banking-grade probability distributions.
    """

    def __init__(self, config: SensitivityConfig = None):
        self.config = config or get_config()
        self.rng = np.random.default_rng(self.config.mc_seed)
        self.results: Dict[str, MonteCarloResults] = {}
        self.simulation_data: Optional[pd.DataFrame] = None
        apply_omega_style()

    def _generate_triangular(self, min_val: float, mode: float, max_val: float,
                             size: int) -> np.ndarray:
        """Generate triangular distribution samples."""
        return self.rng.triangular(min_val, mode, max_val, size)

    def _generate_normal(self, mean: float, std: float, size: int) -> np.ndarray:
        """Generate normal distribution samples (truncated)."""
        samples = self.rng.normal(mean, std, size)
        # Truncate to reasonable bounds
        return np.clip(samples, mean - 3*std, mean + 3*std)

    def _generate_uniform(self, min_val: float, max_val: float, size: int) -> np.ndarray:
        """Generate uniform distribution samples."""
        return self.rng.uniform(min_val, max_val, size)

    def _generate_pert(self, min_val: float, mode: float, max_val: float,
                       size: int, lamb: float = 4) -> np.ndarray:
        """Generate PERT (Beta-PERT) distribution samples."""
        # PERT parameters
        mu = (min_val + lamb * mode + max_val) / (lamb + 2)
        if max_val == min_val:
            return np.full(size, mode)

        # Beta distribution shape parameters
        alpha = 1 + lamb * (mu - min_val) / (max_val - min_val)
        beta = 1 + lamb * (max_val - mu) / (max_val - min_val)

        # Generate beta samples and scale
        samples = self.rng.beta(alpha, beta, size)
        return min_val + samples * (max_val - min_val)

    def generate_input_samples(self, n_iterations: int = None) -> pd.DataFrame:
        """Generate correlated input variable samples."""

        n = n_iterations or self.config.mc_iterations
        cfg = self.config
        mc_dist = cfg.mc_distributions

        samples = {}

        # CAPEX multiplier (triangular - skewed to overruns)
        capex_params = mc_dist['capex']
        samples['capex_mult'] = self._generate_triangular(
            capex_params['min'], capex_params['mode'], capex_params['max'], n
        )

        # Tariff multiplier (normal)
        tariff_params = mc_dist['tariff']
        samples['tariff_mult'] = self._generate_normal(
            tariff_params['mean'], tariff_params['std'], n
        )

        # Throughput multiplier (triangular - skewed down)
        throughput_params = mc_dist['throughput']
        samples['throughput_mult'] = self._generate_triangular(
            throughput_params['min'], throughput_params['mode'], throughput_params['max'], n
        )

        # OPEX multiplier (normal)
        opex_params = mc_dist['opex']
        samples['opex_mult'] = self._generate_normal(
            opex_params['mean'], opex_params['std'], n
        )

        # Interest rate (uniform between bounds)
        interest_params = mc_dist['interest_rate']
        samples['interest_rate'] = self._generate_uniform(
            interest_params['min'], interest_params['max'], n
        )

        # Construction duration (PERT - key for schedule risk)
        constr_params = mc_dist['construction_months']
        samples['construction_months'] = self._generate_pert(
            constr_params['min'], constr_params['mode'], constr_params['max'], n
        )

        # Add correlation between CAPEX and construction duration
        # Higher CAPEX often correlates with delays
        correlation_factor = 0.4
        capex_deviation = (samples['capex_mult'] - 1.0) / 0.1
        samples['construction_months'] += correlation_factor * capex_deviation * 2

        return pd.DataFrame(samples)

    def calculate_npv(self, row: pd.Series) -> float:
        """Calculate NPV for single simulation iteration."""
        cfg = self.config

        capex = cfg.total_capex * row['capex_mult']
        tariff = cfg.tariff_usd_per_tonne * row['tariff_mult']
        throughput = cfg.annual_throughput_mta * row['throughput_mult']
        opex_fixed = cfg.opex_fixed_annual * row['opex_mult']
        opex_var = cfg.opex_variable_per_tonne * row['opex_mult']
        interest = row['interest_rate']
        construction = row['construction_months']

        # Annual revenue (mature) - in USD M
        # throughput (M tonnes) * tariff (USD/t) = USD M
        annual_revenue = throughput * tariff * (1 + cfg.ancillary_revenue_pct)

        # Annual OPEX - in USD M
        annual_opex = opex_fixed + (throughput * opex_var)

        # EBITDA (USD M)
        ebitda = annual_revenue - annual_opex

        # Debt service
        debt = capex * cfg.debt_ratio
        annual_debt_service = debt * (interest + 1/cfg.loan_tenor_years)

        # Free cash flow
        fcfe = ebitda - annual_debt_service

        # Construction delay cost
        delay_months = max(0, construction - 29)
        delay_cost = delay_months * (capex * 0.005 + ebitda * 0.08)

        # NPV calculation
        pv_operations = fcfe * ((1 - (1 + cfg.wacc) ** -cfg.operations_years) / cfg.wacc)
        npv = pv_operations - capex - delay_cost

        return npv

    def calculate_irr(self, row: pd.Series) -> float:
        """Calculate approximate IRR for single iteration."""
        npv = self.calculate_npv(row)
        npv_change_pct = (npv - self.config.base_npv) / max(self.config.base_npv, 1)
        irr = self.config.base_irr * (1 + npv_change_pct * 0.5)
        return max(0, min(irr, 0.50))

    def calculate_min_dscr(self, row: pd.Series) -> float:
        """Calculate minimum DSCR for single iteration."""
        cfg = self.config

        capex = cfg.total_capex * row['capex_mult']
        tariff = cfg.tariff_usd_per_tonne * row['tariff_mult']
        throughput = cfg.annual_throughput_mta * row['throughput_mult'] * 0.55  # Y3 utilization
        opex_fixed = cfg.opex_fixed_annual * row['opex_mult']
        opex_var = cfg.opex_variable_per_tonne * row['opex_mult']
        interest = row['interest_rate']

        revenue = throughput * tariff * (1 + cfg.ancillary_revenue_pct)
        opex = opex_fixed + (throughput * opex_var)
        ebitda = revenue - opex

        debt = capex * cfg.debt_ratio
        debt_service = debt * (interest + 1/cfg.loan_tenor_years)

        return ebitda / debt_service if debt_service > 0 else 0

    def run_simulation(self, n_iterations: int = None) -> pd.DataFrame:
        """Run full Monte Carlo simulation."""

        n = n_iterations or self.config.mc_iterations
        print(f"Running {n:,} Monte Carlo iterations...")

        # Generate input samples
        inputs = self.generate_input_samples(n)

        # Calculate outputs
        outputs = pd.DataFrame()
        outputs['npv'] = inputs.apply(self.calculate_npv, axis=1)
        outputs['irr'] = inputs.apply(self.calculate_irr, axis=1)
        outputs['min_dscr'] = inputs.apply(self.calculate_min_dscr, axis=1)

        # Combine
        self.simulation_data = pd.concat([inputs, outputs], axis=1)

        # Calculate statistics
        for metric in ['npv', 'irr', 'min_dscr']:
            values = outputs[metric].values
            target = 0 if metric == 'npv' else (0.115 if metric == 'irr' else 1.20)

            self.results[metric] = MonteCarloResults(
                metric=metric,
                iterations=n,
                values=values,
                mean=np.mean(values),
                std=np.std(values),
                p10=np.percentile(values, 10),
                p50=np.percentile(values, 50),
                p80=np.percentile(values, 80),
                p90=np.percentile(values, 90),
                min_val=np.min(values),
                max_val=np.max(values),
                prob_positive=np.mean(values > 0),
                prob_target=np.mean(values > target)
            )

        return self.simulation_data

    def plot_distribution(self, metric: str = 'npv', save: bool = True) -> plt.Figure:
        """Plot probability distribution with P10/P50/P90 lines."""

        if metric not in self.results:
            self.run_simulation()

        result = self.results[metric]
        values = result.values

        # Metric-specific formatting
        if metric == 'npv':
            title = "NPV Probability Distribution"
            xlabel = "Net Present Value (USD Million)"
            formatter = lambda x: f"${x:.0f}M"
            target_line = 0
            target_label = "Break-Even (NPV=0)"
        elif metric == 'irr':
            title = "IRR Probability Distribution"
            xlabel = "Internal Rate of Return (%)"
            values = values * 100  # Convert to percentage
            formatter = lambda x: f"{x:.1f}%"
            target_line = 11.5
            target_label = "WACC (11.5%)"
        else:  # dscr
            title = "Minimum DSCR Probability Distribution"
            xlabel = "Debt Service Coverage Ratio"
            formatter = lambda x: f"{x:.2f}x"
            target_line = 1.20
            target_label = "Covenant (1.20x)"

        fig, ax = plt.subplots(figsize=(12, 7))

        # Histogram
        n_bins = 50
        counts, bins, patches = ax.hist(values, bins=n_bins, density=True,
                                        alpha=0.7, color=MC_COLORS['histogram'],
                                        edgecolor='white', linewidth=0.5)

        # Color bars based on value
        for patch, left_edge in zip(patches, bins[:-1]):
            if metric == 'npv' and left_edge < 0:
                patch.set_facecolor(MC_COLORS['p10'])
                patch.set_alpha(0.7)
            elif metric == 'irr' and left_edge < 11.5:
                patch.set_facecolor(MC_COLORS['p10'])
                patch.set_alpha(0.7)
            elif metric == 'min_dscr' and left_edge < 1.20:
                patch.set_facecolor(MC_COLORS['p10'])
                patch.set_alpha(0.7)

        # Percentile lines
        p10 = np.percentile(values, 10)
        p50 = np.percentile(values, 50)
        p80 = np.percentile(values, 80)
        p90 = np.percentile(values, 90)
        mean_val = np.mean(values)

        ymax = ax.get_ylim()[1]

        ax.axvline(p10, color=MC_COLORS['p10'], linestyle='--', linewidth=2,
                  label=f'P10: {formatter(p10)}')
        ax.axvline(p50, color=MC_COLORS['p50'], linestyle='-', linewidth=2.5,
                  label=f'P50: {formatter(p50)}')
        ax.axvline(p80, color='#1B4F72', linestyle='-.', linewidth=2,
                  label=f'P80: {formatter(p80)}')
        ax.axvline(p90, color=MC_COLORS['p90'], linestyle='--', linewidth=2,
                  label=f'P90: {formatter(p90)}')

        # Target/threshold line
        ax.axvline(target_line, color='black', linestyle=':', linewidth=2,
                  label=target_label)

        # Add annotations
        ax.annotate(f'P10\n{formatter(p10)}', xy=(p10, ymax*0.9),
                   ha='center', fontsize=9, fontweight='bold', color=MC_COLORS['p10'])
        ax.annotate(f'P80\n{formatter(p80)}', xy=(p80, ymax*0.85),
                   ha='center', fontsize=9, fontweight='bold', color='#1B4F72')

        # Statistics box
        if metric == 'npv':
            prob_text = f"Probability NPV > 0: {result.prob_positive*100:.1f}%"
        elif metric == 'irr':
            prob_text = f"Probability IRR > WACC: {result.prob_target*100:.1f}%"
        else:
            prob_text = f"Probability DSCR > 1.20x: {result.prob_target*100:.1f}%"

        stats_text = (
            f"Iterations: {result.iterations:,}\n"
            f"Mean: {formatter(mean_val if metric != 'irr' else mean_val)}\n"
            f"Std Dev: {formatter(np.std(values))}\n"
            f"{prob_text}"
        )
        ax.text(0.02, 0.98, stats_text, transform=ax.transAxes,
               fontsize=10, verticalalignment='top',
               bbox=dict(boxstyle='round', facecolor='white', alpha=0.9,
                        edgecolor=Omega_COLORS['PRIMARY']))

        # Formatting
        ax.set_xlabel(xlabel, fontweight='bold')
        ax.set_ylabel('Probability Density', fontweight='bold')
        ax.set_title(f"{title}\nOmega Project Finance Template ({result.iterations:,} iterations)",
                    fontsize=14, fontweight='bold', color=Omega_COLORS['PRIMARY'])

        ax.legend(loc='upper right', framealpha=0.95)

        # Watermark
        fig.text(0.99, 0.01, 'Omega Consulting | Confidential',
                fontsize=8, color=Omega_COLORS['GRAY'],
                ha='right', va='bottom', alpha=0.7)

        plt.tight_layout()

        if save:
            filepath = CHARTS_DIR / f"montecarlo_{metric}.png"
            plt.savefig(filepath, dpi=300, bbox_inches='tight',
                       facecolor='white', edgecolor='none')
            print(f"Saved: {filepath}")

        return fig

    def plot_cumulative(self, metric: str = 'npv', save: bool = True) -> plt.Figure:
        """Plot cumulative probability (S-curve) chart."""

        if metric not in self.results:
            self.run_simulation()

        result = self.results[metric]
        values = np.sort(result.values)
        cumulative = np.arange(1, len(values) + 1) / len(values)

        # Metric-specific formatting
        if metric == 'npv':
            title = "NPV Cumulative Probability (S-Curve)"
            xlabel = "Net Present Value (USD Million)"
            formatter = lambda x: f"${x:.0f}M"
        elif metric == 'irr':
            title = "IRR Cumulative Probability (S-Curve)"
            xlabel = "Internal Rate of Return (%)"
            values = values * 100
            formatter = lambda x: f"{x:.1f}%"
        else:
            title = "Minimum DSCR Cumulative Probability (S-Curve)"
            xlabel = "Debt Service Coverage Ratio"
            formatter = lambda x: f"{x:.2f}x"

        fig, ax = plt.subplots(figsize=(12, 7))

        # S-curve
        ax.plot(values, cumulative * 100, color=Omega_COLORS['PRIMARY'],
               linewidth=2.5, label='Cumulative Probability')

        # Fill areas
        ax.fill_between(values, 0, cumulative * 100, alpha=0.1,
                       color=Omega_COLORS['PRIMARY'])

        # Percentile lines
        p10_val = np.percentile(values, 10)
        p50_val = np.percentile(values, 50)
        p80_val = np.percentile(values, 80)
        p90_val = np.percentile(values, 90)

        ax.axhline(10, color=MC_COLORS['p10'], linestyle='--', linewidth=1.5, alpha=0.7)
        ax.axhline(50, color=MC_COLORS['p50'], linestyle='-', linewidth=1.5, alpha=0.7)
        ax.axhline(80, color='#1B4F72', linestyle='-.', linewidth=1.5, alpha=0.7)
        ax.axhline(90, color=MC_COLORS['p90'], linestyle='--', linewidth=1.5, alpha=0.7)

        ax.axvline(p10_val, color=MC_COLORS['p10'], linestyle='--', linewidth=1.5, alpha=0.7)
        ax.axvline(p50_val, color=MC_COLORS['p50'], linestyle='-', linewidth=1.5, alpha=0.7)
        ax.axvline(p80_val, color='#1B4F72', linestyle='-.', linewidth=1.5, alpha=0.7)
        ax.axvline(p90_val, color=MC_COLORS['p90'], linestyle='--', linewidth=1.5, alpha=0.7)

        # Add markers and labels
        ax.plot(p10_val, 10, 'o', color=MC_COLORS['p10'], markersize=10)
        ax.plot(p50_val, 50, 'o', color=MC_COLORS['p50'], markersize=10)
        ax.plot(p80_val, 80, 's', color='#1B4F72', markersize=10)
        ax.plot(p90_val, 90, 'o', color=MC_COLORS['p90'], markersize=10)

        ax.annotate(f'P10: {formatter(p10_val)}', xy=(p10_val, 10),
                   xytext=(p10_val + (values.max()-values.min())*0.05, 15),
                   fontsize=10, fontweight='bold', color=MC_COLORS['p10'])
        ax.annotate(f'P50: {formatter(p50_val)}', xy=(p50_val, 50),
                   xytext=(p50_val + (values.max()-values.min())*0.05, 55),
                   fontsize=10, fontweight='bold', color=MC_COLORS['p50'])
        ax.annotate(f'P80: {formatter(p80_val)}', xy=(p80_val, 80),
                   xytext=(p80_val + (values.max()-values.min())*0.05, 75),
                   fontsize=10, fontweight='bold', color='#1B4F72')
        ax.annotate(f'P90: {formatter(p90_val)}', xy=(p90_val, 90),
                   xytext=(p90_val + (values.max()-values.min())*0.05, 85),
                   fontsize=10, fontweight='bold', color=MC_COLORS['p90'])

        # Formatting
        ax.set_xlabel(xlabel, fontweight='bold')
        ax.set_ylabel('Cumulative Probability (%)', fontweight='bold')
        ax.set_title(f"{title}\nOmega Project Finance Template",
                    fontsize=14, fontweight='bold', color=Omega_COLORS['PRIMARY'])
        ax.set_ylim(0, 100)
        ax.yaxis.set_major_formatter(PercentFormatter(100))

        # Add P80 banking note
        ax.text(0.02, 0.02, "P80 = 80% probability of achieving this value or better\n(Banking standard for project finance)",
               transform=ax.transAxes, fontsize=9, style='italic',
               bbox=dict(boxstyle='round', facecolor='lightyellow', alpha=0.8))

        # Watermark
        fig.text(0.99, 0.01, 'Omega Consulting | Confidential',
                fontsize=8, color=Omega_COLORS['GRAY'],
                ha='right', va='bottom', alpha=0.7)

        plt.tight_layout()

        if save:
            filepath = CHARTS_DIR / f"montecarlo_{metric}_scurve.png"
            plt.savefig(filepath, dpi=300, bbox_inches='tight',
                       facecolor='white', edgecolor='none')
            print(f"Saved: {filepath}")

        return fig

    def plot_schedule_risk(self, save: bool = True) -> plt.Figure:
        """Plot construction schedule risk distribution."""

        if self.simulation_data is None:
            self.run_simulation()

        values = self.simulation_data['construction_months'].values

        fig, ax = plt.subplots(figsize=(12, 7))

        # Histogram
        counts, bins, patches = ax.hist(values, bins=30, density=True,
                                        alpha=0.7, color=MC_COLORS['histogram'],
                                        edgecolor='white', linewidth=0.5)

        # Color by risk
        for patch, left_edge in zip(patches, bins[:-1]):
            if left_edge > 35:
                patch.set_facecolor(MC_COLORS['p10'])
            elif left_edge > 32:
                patch.set_facecolor(MC_COLORS['p50'])

        # Percentile lines
        p50 = np.percentile(values, 50)
        p80 = np.percentile(values, 80)
        p90 = np.percentile(values, 90)

        ax.axvline(29, color='green', linestyle='-', linewidth=2.5,
                  label=f'Base Plan: 29 months')
        ax.axvline(p50, color=MC_COLORS['p50'], linestyle='--', linewidth=2,
                  label=f'P50: {p50:.0f} months')
        ax.axvline(p80, color='#1B4F72', linestyle='-.', linewidth=2.5,
                  label=f'P80: {p80:.0f} months (Banking)')
        ax.axvline(p90, color=MC_COLORS['p10'], linestyle='--', linewidth=2,
                  label=f'P90: {p90:.0f} months')

        # Stats box
        stats_text = (
            f"Iterations: {len(values):,}\n"
            f"Mean: {np.mean(values):.1f} months\n"
            f"Std Dev: {np.std(values):.1f} months\n"
            f"P(delay > 6 mo): {np.mean(values > 35)*100:.1f}%"
        )
        ax.text(0.98, 0.98, stats_text, transform=ax.transAxes,
               fontsize=10, verticalalignment='top', horizontalalignment='right',
               bbox=dict(boxstyle='round', facecolor='white', alpha=0.9,
                        edgecolor=Omega_COLORS['PRIMARY']))

        ax.set_xlabel('Construction Duration (months)', fontweight='bold')
        ax.set_ylabel('Probability Density', fontweight='bold')
        ax.set_title('Construction Schedule Risk Analysis\nOmega Project Finance Template',
                    fontsize=14, fontweight='bold', color=Omega_COLORS['PRIMARY'])
        ax.legend(loc='upper left', framealpha=0.95)

        # Watermark
        fig.text(0.99, 0.01, 'Omega Consulting | Confidential',
                fontsize=8, color=Omega_COLORS['GRAY'],
                ha='right', va='bottom', alpha=0.7)

        plt.tight_layout()

        if save:
            filepath = CHARTS_DIR / f"montecarlo_schedule_risk.png"
            plt.savefig(filepath, dpi=300, bbox_inches='tight',
                       facecolor='white', edgecolor='none')
            print(f"Saved: {filepath}")

        return fig

    def generate_report(self) -> str:
        """Generate markdown summary report."""

        if not self.results:
            self.run_simulation()

        report = []
        report.append("# Monte Carlo Simulation Results")
        report.append("## Omega Project Finance Template\n")
        report.append(f"**Iterations:** {self.config.mc_iterations:,}")
        report.append(f"**Random Seed:** {self.config.mc_seed}\n")

        report.append("## Summary Statistics\n")
        report.append("| Metric | P10 | P50 | P80 | P90 | Mean | Std Dev |")
        report.append("|--------|-----|-----|-----|-----|------|---------|")

        for metric, result in self.results.items():
            if metric == 'npv':
                row = f"| NPV | ${result.p10:.1f}M | ${result.p50:.1f}M | ${result.p80:.1f}M | ${result.p90:.1f}M | ${result.mean:.1f}M | ${result.std:.1f}M |"
            elif metric == 'irr':
                row = f"| IRR | {result.p10*100:.1f}% | {result.p50*100:.1f}% | {result.p80*100:.1f}% | {result.p90*100:.1f}% | {result.mean*100:.1f}% | {result.std*100:.1f}% |"
            else:
                row = f"| Min DSCR | {result.p10:.2f}x | {result.p50:.2f}x | {result.p80:.2f}x | {result.p90:.2f}x | {result.mean:.2f}x | {result.std:.2f}x |"
            report.append(row)

        report.append("\n## Key Probabilities\n")
        report.append(f"- Probability NPV > 0: **{self.results['npv'].prob_positive*100:.1f}%**")
        report.append(f"- Probability IRR > WACC: **{self.results['irr'].prob_target*100:.1f}%**")
        report.append(f"- Probability DSCR > 1.20x: **{self.results['min_dscr'].prob_target*100:.1f}%**")

        return "\n".join(report)


def main():
    """Run Monte Carlo simulation and generate all outputs."""
    print("=" * 60)
    print("MONTE CARLO SIMULATION ANALYSIS")
    print("Omega Project Finance Template")
    print("=" * 60)

    simulator = MonteCarloSimulator()

    # Run simulation
    simulator.run_simulation()

    # Generate charts
    for metric in ['npv', 'irr', 'min_dscr']:
        print(f"\nGenerating {metric.upper()} distribution...")
        simulator.plot_distribution(metric)
        simulator.plot_cumulative(metric)

    # Schedule risk
    print("\nGenerating schedule risk distribution...")
    simulator.plot_schedule_risk()

    # Generate report
    report = simulator.generate_report()
    print("\n" + report)

    # Save report
    report_path = REPORTS_DIR / "montecarlo_summary.md"
    with open(report_path, 'w') as f:
        f.write(report)
    print(f"\nReport saved to: {report_path}")

    print("\n" + "=" * 60)
    print("Monte Carlo simulation complete. Charts saved to:", CHARTS_DIR)
    print("=" * 60)

    plt.show()


if __name__ == "__main__":
    main()
