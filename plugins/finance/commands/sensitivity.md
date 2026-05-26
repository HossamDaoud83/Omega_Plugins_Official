---
description: Run full sensitivity analysis suite (tornado + spider + scenarios + Monte Carlo + break-even)
allowed-tools: Bash, Read, Write
---

# /omega-fin:sensitivity

Run the complete Omega sensitivity analysis suite for a project finance engagement.

## Steps

1. Verify `plugins/finance/scripts/config.py` is configured with the engagement's actual parameters (CAPEX, throughput, tariff, OPEX, debt, WACC, base outputs).
2. Confirm the engagement has a `charts/sensitivity/` and `reports/sensitivity/` directory (create if missing).
3. Execute the master runner:
   ```bash
   python plugins/finance/scripts/run_all_analysis.py
   ```
4. Verify output:
   - 10+ PNG charts in `charts/sensitivity/`
   - Markdown report in `reports/sensitivity/SENSITIVITY_REPORT.md`
5. Surface the top 3 drivers by NPV impact and the P80 NPV / minimum DSCR for client briefing.

## Inputs needed

- Project parameters set in `config.py`
- Base case NPV / IRR / DSCR from the underlying DCF model

## Outputs

- Tornado, Monte Carlo, Spider, Scenario, Break-even charts (Omega-branded PNG)
- `SENSITIVITY_REPORT.md` with banking-grade interpretation

## Quality criteria

See `plugins/finance/skills/sensitivity-analysis/SKILL.md` § Quality checklist.
