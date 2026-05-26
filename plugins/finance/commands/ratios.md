---
description: Compute the four ratio families (Liquidity, Solvency, Profitability, Growth & Efficiency) from a statements JSON, generate a Markdown report and Omega-branded charts
allowed-tools: Bash, Read, Write
---

# /omega-fin:ratios

Run the full ratio analysis on a target company's financial statements.

## Steps

1. Confirm the engagement has a `statements.json` (or prompt to construct one) following the structure documented in `plugins/finance/skills/financial-statement-analysis/SKILL.md`.
2. Verify minimum data quality:
   - At least 2 years of history (3+ recommended)
   - Income statement, balance sheet, and (optionally) cash flow populated
3. Run the analysis:
   ```bash
   python plugins/finance/scripts/ratio_analysis.py \
     --input <engagement>/data/statements.json \
     --output <engagement>/reports/ratios/
   ```
4. Verify outputs:
   - `RATIO_REPORT.md` — full Markdown report with all four ratio families, DuPont, and observations
   - `charts/ratios_margin_trend.png` — margin ladder over time
   - `charts/ratios_working_capital.png` — DSO/DIO/DPO/CCC
   - `charts/ratios_returns.png` — ROA/ROE
   - `charts/ratios_leverage.png` — D/E and interest coverage
5. Read the auto-generated headline observations; supplement with sector context.
6. If thresholds need calibration to a specific sector (telecom, real estate, healthcare), edit `DEFAULT_THRESHOLDS` in `ratio_analysis.py` or override in the engagement's local copy.

## Inputs needed

- Three financial statements in `statements.json` format (template in skill docs)
- Optional: sector identifier for benchmark calibration

## Outputs

- `RATIO_REPORT.md` — board-ready ratio commentary with red/yellow/green verdict per ratio
- 4 PNG charts — Omega-branded, ready for deck insertion
- CSV-exportable underlying data

## Quality criteria

See `plugins/finance/skills/financial-statement-analysis/SKILL.md` § Omega deliverable quality gate.

Specifically verify:
- All four ratio families populated (≥ 12 ratios computed)
- DuPont decomposition reconciles to direct ROE within rounding
- At least 3 headline observations surfaced
- Working capital chart included
