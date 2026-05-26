---
description: Generate a loan amortization schedule (level / level principal / bullet / grace / sculpted) with CSV, Markdown summary, and Omega-branded chart
allowed-tools: Bash, Read, Write
---

# /omega-fin:amortization

Build a banking-grade loan amortization schedule for a term sheet, credit memo, or feasibility appendix.

## Steps

1. Confirm loan parameters with the user:
   - Principal amount and currency
   - Annual interest rate (e.g. 0.10 for 10 %)
   - Payment frequency (monthly = 12, quarterly = 4, semi-annual = 2, annual = 1)
   - Total number of payment periods
   - Variant (default: `level` annuity)

2. Choose the variant:

   | Variant | When to use |
   |---|---|
   | `level` | Standard SME / consumer / corporate term loan |
   | `principal` | Equal principal repayment — some Egyptian SME and commercial RE |
   | `bullet` | Bridge financing, mezzanine, construction loans pre-conversion |
   | `grace` | Construction loan with grace period before amortization |
   | `sculpted` | Project finance — repayment shaped to target DSCR given CFADS |

3. Run the script:
   ```bash
   # Level annuity example
   python plugins/finance/scripts/amortization_schedule.py \
     --variant level \
     --principal 10000000 \
     --annual-rate 0.10 \
     --periods 60 \
     --pay-per-year 12 \
     --currency EGP \
     --output <engagement>/reports/amortization/

   # Sculpted (project finance) example
   python plugins/finance/scripts/amortization_schedule.py \
     --variant sculpted \
     --principal 200000000 \
     --annual-rate 0.08 \
     --pay-per-year 1 \
     --target-dscr 1.30 \
     --cfads-json <engagement>/data/cfads.json \
     --output <engagement>/reports/amortization/
   ```

4. Verify outputs:
   - `schedule.csv` — full period-by-period schedule
   - `AMORTIZATION_SUMMARY.md` — summary with totals and preview
   - `amortization_chart.png` — payment composition + outstanding balance chart

5. For sculpted (project finance): verify the achieved DSCR matches target each period, and that the loan amortizes fully within the CFADS horizon.

## Inputs needed

- Principal, rate, term, payment frequency
- Variant-specific: grace period count (for `grace`) or CFADS JSON list (for `sculpted`)
- Currency for display labels

## Outputs

- Full schedule CSV (drop into Excel for further work)
- One-page Markdown summary
- Omega-branded PNG chart (payment composition + balance curve)

## Quality criteria

See `plugins/finance/skills/analyst-toolkit/references/loan-amortization.md`.

Specifically verify:
- Closing balance in final period = 0 (within rounding)
- Total interest + total principal = total payments
- For sculpted: every period DSCR ≥ target (within rounding)
- Currency labels consistent throughout
