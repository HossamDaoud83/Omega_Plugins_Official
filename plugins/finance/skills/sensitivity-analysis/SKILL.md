---
name: sensitivity-analysis
description: Banking-grade sensitivity, Monte Carlo, scenario, and break-even analysis for project finance. Use when an engagement needs tornado diagrams, P80 NPV, DSCR distributions, or stress testing for bankability discussions.
---

# Sensitivity Analysis

Five complementary methodologies for financial risk assessment. All produce Omega-branded PNG charts and markdown reports suitable for board presentations and lender packs.

## When to use

- Bankability studies and lender packs (term sheet, debt sizing)
- BOT / PPP feasibility (tariff negotiation, risk allocation)
- Investment decisions with uncertain inputs (Greenfield, expansion CAPEX)
- Board presentations requiring quantified downside (stress testing)

## Methodologies

| Method | Purpose | Primary output |
|---|---|---|
| **Tornado** | Identify top value drivers | Variable impact ranking on NPV / IRR / DSCR |
| **Monte Carlo** | Probabilistic outcomes | P10 / P50 / P80 / P90 distributions |
| **Spider** | Multi-variable elasticity | Sensitivity curves for each input |
| **Scenario** | Discrete case comparison | Base / Upside / Downside / Stress |
| **Break-Even** | Threshold identification | Headroom to covenant breach |

## How to invoke

1. Configure project parameters in `plugins/finance/scripts/config.py` (or the engagement's local override). Required:
   - `total_capex`, `annual_throughput_mta`, `tariff_usd_per_tonne`
   - `opex_fixed_annual`, `opex_variable_per_tonne`
   - `debt_ratio`, `interest_rate`, `loan_tenor_years`, `wacc`
   - `base_npv`, `base_irr`, `base_min_dscr` (from your DCF model)
2. Run `python plugins/finance/scripts/run_all_analysis.py`
3. Review outputs in `<engagement>/charts/sensitivity/` and `<engagement>/reports/sensitivity/`

## Slash commands

- `/omega-fin:sensitivity` — full tornado + spider suite
- `/omega-fin:montecarlo` — Monte Carlo with configurable distributions
- `/omega-fin:scenarios` — discrete scenario comparison
- `/omega-fin:breakeven` — break-even and headroom analysis

## Quality checklist

- [ ] Base case NPV/IRR/DSCR matches the underlying DCF model (within 1 %)
- [ ] Tornado includes at least 6 variables ranked by impact
- [ ] Monte Carlo runs >= 10,000 iterations for stable P80
- [ ] Scenarios are MECE (Base / Upside / Downside / Stress, no overlap)
- [ ] Break-even reports headroom % to each covenant
- [ ] Charts use Omega branding (colors from `assets/omega-branding.json`)
- [ ] Banking conventions cited (P80 standard, DSCR ≥ 1.20x covenant)

## References

- `references/p80-banking-conventions.md` — when to use P80 vs P50
- `references/dscr-thresholds.md` — covenant interpretation
- `plugins/finance/scripts/config.py` — parameter and distribution definitions
