# -*- coding: utf-8 -*-
"""
Master Analysis Runner - TEMPLATE
=================================
Omega Business Consulting - Project Finance

Executes all sensitivity analyses and generates comprehensive report.

Usage:
    1. First update config.py with your project parameters
    2. Run: python run_all_analysis.py
"""

import sys
from pathlib import Path
from datetime import datetime

# Ensure scripts directory is in path
sys.path.insert(0, str(Path(__file__).parent))

from config import get_config, CHARTS_DIR, REPORTS_DIR, Omega_COLORS
from tornado_analysis import TornadoAnalyzer
from montecarlo_simulation import MonteCarloSimulator
from spider_chart import SpiderChartGenerator
from scenario_analysis import ScenarioAnalyzer
from breakeven_analysis import BreakevenAnalyzer


def run_complete_analysis():
    """Execute all sensitivity analyses."""

    config = get_config()

    print("=" * 70)
    print("   COMPREHENSIVE SENSITIVITY ANALYSIS SUITE")
    print(f"   {config.project_name}")
    print("   Omega Consulting")
    print("=" * 70)
    print(f"\nExecution Time: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    print(f"Charts Output: {CHARTS_DIR}")
    print(f"Reports Output: {REPORTS_DIR}")
    print(f"\nBase Case Parameters:")
    print(f"  - NPV: ${config.base_npv:.1f}M @ {config.wacc*100:.1f}% WACC")
    print(f"  - IRR: {config.base_irr*100:.1f}%")
    print(f"  - Min DSCR: {config.base_min_dscr:.2f}x (Year 3)")
    print(f"  - CAPEX: ${config.total_capex:.0f}M")

    # Track generated files
    generated_files = []

    # =========================================================================
    # 1. TORNADO ANALYSIS
    # =========================================================================
    print("\n" + "-" * 70)
    print("1. TORNADO ANALYSIS - Identifying Key Value Drivers")
    print("-" * 70)

    tornado = TornadoAnalyzer(config)

    for metric in ['npv', 'irr', 'dscr']:
        print(f"\n   Analyzing {metric.upper()} sensitivity...")
        tornado.run_analysis(metric)
        fig = tornado.plot_tornado(metric)
        generated_files.append(f"tornado_{metric}.png")

    print("\n   NPV Sensitivity Ranking:")
    for i, result in enumerate(tornado.results['npv'], 1):
        print(f"   {i}. {result.display_name}: ${result.impact_range:.1f}M range")

    # =========================================================================
    # 2. MONTE CARLO SIMULATION
    # =========================================================================
    print("\n" + "-" * 70)
    print(f"2. MONTE CARLO SIMULATION - {config.mc_iterations:,} Iterations")
    print("-" * 70)

    mc = MonteCarloSimulator(config)
    mc.run_simulation()

    for metric in ['npv', 'irr', 'min_dscr']:
        print(f"\n   Generating {metric.upper()} distribution...")
        mc.plot_distribution(metric)
        mc.plot_cumulative(metric)
        generated_files.extend([f"montecarlo_{metric}.png", f"montecarlo_{metric}_scurve.png"])

    mc.plot_schedule_risk()
    generated_files.append("montecarlo_schedule_risk.png")

    print("\n   Probability Summary:")
    print(f"   - P(NPV > 0): {mc.results['npv'].prob_positive*100:.1f}%")
    print(f"   - P(IRR > WACC): {mc.results['irr'].prob_target*100:.1f}%")
    print(f"   - P(DSCR > 1.20x): {mc.results['min_dscr'].prob_target*100:.1f}%")

    print(f"\n   P80 Values (Banking Standard):")
    print(f"   - NPV P80: ${mc.results['npv'].p80:.1f}M")
    print(f"   - IRR P80: {mc.results['irr'].p80*100:.1f}%")
    print(f"   - DSCR P80: {mc.results['min_dscr'].p80:.2f}x")

    # =========================================================================
    # 3. SPIDER CHART ANALYSIS
    # =========================================================================
    print("\n" + "-" * 70)
    print("3. SPIDER CHART ANALYSIS - Multi-Variable Sensitivity Curves")
    print("-" * 70)

    spider = SpiderChartGenerator(config)

    for metric in ['npv', 'irr', 'dscr']:
        print(f"\n   Generating {metric.upper()} spider chart...")
        spider.plot_spider(metric)
        generated_files.append(f"spider_{metric}.png")

    spider.plot_combined_spider()
    generated_files.append("spider_combined.png")

    print("\n   NPV Elasticities (at +/-10%):")
    elasticities = spider.calculate_elasticity('npv')
    for var, elast in sorted(elasticities.items(), key=lambda x: abs(x[1]), reverse=True):
        print(f"   - {var}: {elast:+.2f}")

    # =========================================================================
    # 4. SCENARIO ANALYSIS
    # =========================================================================
    print("\n" + "-" * 70)
    print("4. SCENARIO ANALYSIS - Discrete Case Comparison")
    print("-" * 70)

    scenario = ScenarioAnalyzer(config)
    scenario.run_scenarios()

    scenario.plot_scenario_comparison()
    scenario.plot_waterfall()
    generated_files.extend(["scenario_comparison.png", "npv_waterfall.png"])

    print("\n   Scenario Results:")
    for name, result in scenario.results.items():
        status_symbol = {"PASS": "+", "MARGINAL": "~", "FAIL": "x"}[result.status]
        print(f"   [{status_symbol}] {result.name}: NPV ${result.npv:.0f}M, IRR {result.irr*100:.1f}%, DSCR {result.min_dscr:.2f}x")

    # =========================================================================
    # 5. BREAK-EVEN ANALYSIS
    # =========================================================================
    print("\n" + "-" * 70)
    print("5. BREAK-EVEN ANALYSIS - Threshold Identification")
    print("-" * 70)

    breakeven = BreakevenAnalyzer(config)
    breakeven.run_analysis()

    breakeven.plot_breakeven_chart()
    breakeven.plot_dscr_breakeven()
    generated_files.extend(["breakeven_headroom.png", "breakeven_dscr.png"])

    print("\n   NPV Break-Even Points:")
    for key, result in breakeven.results.items():
        if result.metric == 'npv' and result.breakeven_pct is not None:
            print(f"   - {result.display_name}: {result.breakeven_pct:+.0f}% ({result.headroom_pct:.0f}% headroom)")

    # =========================================================================
    # GENERATE COMPREHENSIVE REPORT
    # =========================================================================
    print("\n" + "-" * 70)
    print("GENERATING COMPREHENSIVE REPORT")
    print("-" * 70)

    report = generate_comprehensive_report(config, tornado, mc, spider, scenario, breakeven)

    report_path = REPORTS_DIR / "comprehensive_sensitivity_report.md"
    with open(report_path, 'w', encoding='utf-8') as f:
        f.write(report)
    print(f"\n   Report saved to: {report_path}")

    # =========================================================================
    # SUMMARY
    # =========================================================================
    print("\n" + "=" * 70)
    print("   ANALYSIS COMPLETE")
    print("=" * 70)
    print(f"\n   Generated {len(generated_files)} chart files:")
    for f in sorted(set(generated_files)):
        print(f"   - {f}")

    print(f"\n   Output Locations:")
    print(f"   - Charts: {CHARTS_DIR}")
    print(f"   - Reports: {REPORTS_DIR}")

    print("\n   Key Findings:")
    print(f"   1. Most sensitive variable: {tornado.results['npv'][0].display_name}")
    print(f"   2. NPV probability > 0: {mc.results['npv'].prob_positive*100:.0f}%")
    print(f"   3. Stress case NPV: ${scenario.results['stress'].npv:.0f}M")
    print(f"   4. DSCR requires mitigation in all scenarios")

    return True


def generate_comprehensive_report(config, tornado, mc, spider, scenario, breakeven) -> str:
    """Generate comprehensive markdown report combining all analyses."""

    report = []

    report.append("# Comprehensive Sensitivity Analysis Report")
    report.append(f"## {config.project_name}")
    report.append(f"\n**Generated:** {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    report.append("**Prepared by:** Omega Consulting\n")

    report.append("---\n")

    # Executive Summary
    report.append("## Executive Summary\n")
    report.append(f"This report presents a comprehensive sensitivity analysis of the {config.project_name}, ")
    report.append("employing five complementary methodologies to assess project robustness and identify key risk factors.\n")

    report.append("### Key Findings\n")
    report.append(f"1. **Most Sensitive Variable:** {tornado.results['npv'][0].display_name} (NPV range: ${tornado.results['npv'][0].impact_range:.0f}M)")
    report.append(f"2. **Probability of Positive NPV:** {mc.results['npv'].prob_positive*100:.0f}% (Monte Carlo, {config.mc_iterations:,} iterations)")
    report.append(f"3. **P80 NPV:** ${mc.results['npv'].p80:.0f}M (banking standard confidence level)")
    report.append(f"4. **Stress Case Result:** NPV ${scenario.results['stress'].npv:.0f}M, IRR {scenario.results['stress'].irr*100:.1f}%")
    report.append(f"5. **DSCR Challenge:** Min DSCR {config.base_min_dscr:.2f}x requires mitigation measures\n")

    # Base Case Parameters
    report.append("---\n")
    report.append("## Base Case Parameters\n")
    report.append("| Parameter | Value |")
    report.append("|-----------|-------|")
    report.append(f"| Total CAPEX | ${config.total_capex:.0f}M |")
    report.append(f"| NPV @ {config.wacc*100:.1f}% | ${config.base_npv:.1f}M |")
    report.append(f"| Project IRR | {config.base_irr*100:.1f}% |")
    report.append(f"| Minimum DSCR | {config.base_min_dscr:.2f}x |")
    report.append(f"| Debt/Equity | {config.debt_ratio*100:.0f}% / {config.equity_ratio*100:.0f}% |")
    report.append(f"| Interest Rate | {config.interest_rate*100:.1f}% |")
    report.append(f"| Loan Tenor | {config.loan_tenor_years} years |\n")

    # 1. Tornado Analysis
    report.append("---\n")
    report.append("## 1. Tornado Analysis\n")
    report.append("Single-variable sensitivity ranking by impact on NPV:\n")
    report.append("| Rank | Variable | Low Case | High Case | Impact Range |")
    report.append("|------|----------|----------|-----------|--------------|")
    for i, r in enumerate(tornado.results['npv'], 1):
        report.append(f"| {i} | {r.display_name} | ${r.low_output:.0f}M | ${r.high_output:.0f}M | ${r.impact_range:.0f}M |")
    report.append("\n![Tornado NPV](charts/tornado_npv.png)\n")

    # 2. Monte Carlo
    report.append("---\n")
    report.append("## 2. Monte Carlo Simulation\n")
    report.append(f"Probabilistic analysis based on {config.mc_iterations:,} iterations:\n")
    report.append("| Metric | P10 | P50 | P80 | P90 | Mean |")
    report.append("|--------|-----|-----|-----|-----|------|")
    report.append(f"| NPV | ${mc.results['npv'].p10:.0f}M | ${mc.results['npv'].p50:.0f}M | ${mc.results['npv'].p80:.0f}M | ${mc.results['npv'].p90:.0f}M | ${mc.results['npv'].mean:.0f}M |")
    report.append(f"| IRR | {mc.results['irr'].p10*100:.1f}% | {mc.results['irr'].p50*100:.1f}% | {mc.results['irr'].p80*100:.1f}% | {mc.results['irr'].p90*100:.1f}% | {mc.results['irr'].mean*100:.1f}% |")
    report.append(f"| Min DSCR | {mc.results['min_dscr'].p10:.2f}x | {mc.results['min_dscr'].p50:.2f}x | {mc.results['min_dscr'].p80:.2f}x | {mc.results['min_dscr'].p90:.2f}x | {mc.results['min_dscr'].mean:.2f}x |")
    report.append("\n**P80 = 80% probability of achieving this value or better (banking standard)**\n")
    report.append("\n![Monte Carlo NPV](charts/montecarlo_npv.png)\n")

    # 3. Spider Chart
    report.append("---\n")
    report.append("## 3. Spider Chart Analysis\n")
    report.append("Elasticity of NPV to key variables (at +/-10% change):\n")
    elasticities = spider.calculate_elasticity('npv')
    report.append("| Variable | Elasticity | Interpretation |")
    report.append("|----------|------------|----------------|")
    for var, elast in sorted(elasticities.items(), key=lambda x: abs(x[1]), reverse=True):
        interp = "Highly sensitive" if abs(elast) > 1.5 else ("Moderately sensitive" if abs(elast) > 0.8 else "Low sensitivity")
        report.append(f"| {var} | {elast:+.2f} | {interp} |")
    report.append("\n![Spider Chart](charts/spider_combined.png)\n")

    # 4. Scenario Analysis
    report.append("---\n")
    report.append("## 4. Scenario Analysis\n")
    report.append("| Scenario | NPV | IRR | Min DSCR | Status |")
    report.append("|----------|-----|-----|----------|--------|")
    for name, result in scenario.results.items():
        status_emoji = {"PASS": "✅", "MARGINAL": "⚠️", "FAIL": "❌"}[result.status]
        report.append(f"| {result.name} | ${result.npv:.0f}M | {result.irr*100:.1f}% | {result.min_dscr:.2f}x | {status_emoji} |")
    report.append("\n![Scenario Comparison](charts/scenario_comparison.png)\n")
    report.append("\n![NPV Waterfall](charts/npv_waterfall.png)\n")

    # 5. Break-even
    report.append("---\n")
    report.append("## 5. Break-Even Analysis\n")
    report.append("Headroom to NPV = 0 for key variables:\n")
    report.append("| Variable | Base | Break-Even | Headroom | Status |")
    report.append("|----------|------|------------|----------|--------|")
    for key, result in breakeven.results.items():
        if result.metric == 'npv' and result.breakeven_pct is not None:
            status_emoji = {"SAFE": "✅", "MODERATE": "⚠️", "TIGHT": "❌"}[result.status]
            report.append(f"| {result.display_name} | {result.base_value:.1f} | {result.breakeven_value:.1f} | {result.headroom_pct:.0f}% | {status_emoji} |")
    report.append("\n![Break-Even Analysis](charts/breakeven_headroom.png)\n")

    # Recommendations
    report.append("---\n")
    report.append("## Recommendations\n")
    report.append("Based on the comprehensive sensitivity analysis:\n")
    report.append("1. **DSRA Requirement:** Establish Debt Service Reserve Account (~$26M) to cover DSCR shortfall in Years 3-6")
    report.append("2. **Interest Rate Lock:** Consider hedging to protect against rate increases (high sensitivity)")
    report.append("3. **Volume Contracts:** Secure take-or-pay agreements to mitigate throughput risk")
    report.append("4. **CAPEX Contingency:** Maintain 12% contingency given sensitivity to cost overruns")
    report.append("5. **Covenant Holiday:** Negotiate DSCR covenant holiday for ramp-up period\n")

    report.append("---\n")
    report.append("*Report generated by Omega Consulting Sensitivity Analysis Suite*\n")

    return "\n".join(report)


if __name__ == "__main__":
    import matplotlib.pyplot as plt

    success = run_complete_analysis()

    if success:
        print("\n   Displaying charts...")
        plt.show()
