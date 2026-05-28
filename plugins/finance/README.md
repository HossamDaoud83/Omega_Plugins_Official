# `@omega/finance` — Project Finance & Sensitivity Analysis

Banking-grade financial risk assessment for infrastructure, BOT/PPP, and project-finance engagements.

## What this plugin provides

| Component | Count | Examples |
|---|---|---|
| Slash commands | 4 | `/omega-fin:sensitivity`, `/omega-fin:montecarlo`, `/omega-fin:scenarios`, `/omega-fin:breakeven` |
| Skills | 3 | `project-finance`, `sensitivity-analysis`, `financial-modeling` |
| Agents | 1 | `financial-analyst` |
| Python scripts | 7 | tornado, montecarlo, spider, scenario, breakeven, run-all, config |

## Install

```
/plugin install @omega/finance
```

## Quick start

1. Edit `plugins/finance/scripts/config.py` (or the engagement's local copy) with your project parameters: CAPEX, throughput, tariff, OPEX, debt ratio, WACC, base NPV/IRR/DSCR.
2. Run the full suite:
   ```bash
   python plugins/finance/scripts/run_all_analysis.py
   ```
3. Review charts in `<engagement>/charts/sensitivity/` and reports in `<engagement>/reports/sensitivity/`.

## Slash commands

| Command | Purpose |
|---|---|
| `/omega-fin:sensitivity` | Run full sensitivity suite (tornado + spider) |
| `/omega-fin:montecarlo` | Probabilistic NPV/IRR/DSCR distributions with P10/P50/P80/P90 |
| `/omega-fin:scenarios` | Discrete case comparison (Base, Upside, Downside, Stress) |
| `/omega-fin:breakeven` | Threshold identification — headroom to covenant breach / failure |

## Banking concepts

- **P80** (banking standard) — 80 % probability of achieving this value or better
- **DSCR thresholds** — > 1.30x strong · 1.20x – 1.30x acceptable · 1.05x – 1.20x marginal · < 1.05x critical
- **Tornado** — top variables = key contract negotiation points

## Dependencies

```bash
pip install numpy pandas matplotlib scipy
```

## See also

- `plugins/core/skills/omega-consultation-budget/` — fee calculation (5 methods)
- Full overview: `docs/plugin-development.md`
