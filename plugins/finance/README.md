# `@omega/finance` — Financial Analysis & Project Finance

Banking-grade financial risk assessment plus full-stack analyst capabilities — from bookkeeping foundations to project-finance bankability.

## What this plugin provides

| Component | Count | Examples |
|---|---|---|
| Slash commands | **7** | `/omega-fin:ratios` · `/omega-fin:amortization` · `/omega-fin:statements` · `/omega-fin:sensitivity` · `/omega-fin:montecarlo` · `/omega-fin:scenarios` · `/omega-fin:breakeven` |
| Skills | **6** | `accounting-fundamentals` · `financial-statement-analysis` · `analyst-toolkit` · `project-finance` · `sensitivity-analysis` · `financial-modeling` |
| Agents | **3** | `associate-analyst` · `financial-analyst` · `deal-financing-advisor` |
| Python scripts | **9** | tornado · montecarlo · spider · scenario · breakeven · run-all · config · **ratio_analysis** · **amortization_schedule** |

**Bold items are new in v4.1.**

## What v4.1 adds (May 2026)

The plugin previously focused on senior bankability work. v4.1 adds the **analyst foundation layer** beneath it — the building blocks every junior-to-mid analyst needs before tackling project finance:

- **Bookkeeping & accounting fundamentals** — double-entry, journal entries, trial balance, Egyptian VAT and PDC conventions
- **Three-statement construction & audit** — P&L, BS, CF with integrity checks
- **Four-family ratio analysis** — Liquidity, Solvency, Profitability, Growth & Efficiency, with DuPont and CCC
- **Loan amortization** — 5 variants (level, level-principal, bullet, grace, sculpted PF)
- **Analyst toolkit** — Excel craft, formatting conventions, presentation skeletons

This mirrors the breadth of a `complete financial analyst` curriculum while layering Omega-specific conventions (Egyptian context, Omega Excel/deck standards, project-finance integration).

## Install

```
/plugin install @omega/finance
```

## Quick start by use case

### Reviewing a client's financial statements
```bash
python plugins/finance/scripts/ratio_analysis.py \
  --input <engagement>/data/statements.json \
  --output <engagement>/reports/ratios/
```
→ Open `/omega-fin:ratios` for the full workflow.

### Building a loan amortization schedule
```bash
python plugins/finance/scripts/amortization_schedule.py \
  --variant level --principal 10000000 --annual-rate 0.10 \
  --periods 60 --pay-per-year 12 --currency EGP \
  --output <engagement>/reports/amortization/
```
→ Open `/omega-fin:amortization` for variant selection guide.

### Project-finance sensitivity (unchanged from v4.0)
1. Edit `plugins/finance/scripts/config.py` with project parameters
2. Run `python plugins/finance/scripts/run_all_analysis.py`
3. Review charts and reports

## Slash commands

| Command | Purpose | Added |
|---|---|---|
| `/omega-fin:statements` | Three-statement construction or audit | v4.1 |
| `/omega-fin:ratios` | Four-family ratio analysis with DuPont and CCC | v4.1 |
| `/omega-fin:amortization` | Loan amortization (5 variants) | v4.1 |
| `/omega-fin:sensitivity` | Full sensitivity suite (tornado + spider) | v4.0 |
| `/omega-fin:montecarlo` | Probabilistic NPV/IRR/DSCR with P10/P50/P80 | v4.0 |
| `/omega-fin:scenarios` | Discrete case comparison | v4.0 |
| `/omega-fin:breakeven` | Threshold identification / covenant headroom | v4.0 |

## Agent routing

| Task | Agent | Hand-off |
|---|---|---|
| Three statements, ratios, amortization, deck pages | `associate-analyst` | → financial-analyst for senior synthesis |
| DCF/LBO build, bankability, lender pack | `financial-analyst` | terminal |
| Deal structuring (senior/mezz/equity/escrow) | `deal-financing-advisor` | terminal |

## Banking concepts (unchanged from v4.0)

- **P80** (banking standard) — 80 % probability of achieving this value or better
- **DSCR thresholds** — > 1.30x strong · 1.20x – 1.30x acceptable · 1.05x – 1.20x marginal · < 1.05x critical
- **Tornado** — top variables = key contract negotiation points

## Dependencies

```bash
pip install numpy pandas matplotlib scipy
```

No new dependencies for v4.1 — `ratio_analysis.py` and `amortization_schedule.py` use only matplotlib (already required).

## See also

- `plugins/core/skills/omega-consultation-budget/` — fee calculation (5 methods)
- `plugins/finance/skills/accounting-fundamentals/references/common-journal-entries.md` — 30+ pattern entries
- `plugins/finance/skills/financial-statement-analysis/references/ratio-formulas.md` — formula reference
- `plugins/finance/skills/analyst-toolkit/references/analyst-presentation-template.md` — slide skeleton
- Full overview: `docs/plugin-development.md`
