# P80 Banking Conventions

## What is P80?

**P80** = the value below which 20 % of Monte Carlo outcomes fall and above which 80 % fall.

Formally: P80 of NPV is the 20th percentile of the simulated NPV distribution. There is an 80 % probability of achieving this NPV or better.

## Why banks use P80 (not P50)

| Confidence | Interpretation | Where used |
|---|---|---|
| P50 (median) | Expected outcome | Equity investors, internal planning |
| **P80** | Conservative expected | **Project finance lenders, debt sizing** |
| P90 | Stress case | Insurers, very conservative lenders |
| P95 / P99 | Tail risk | Catastrophic loss provisioning |

P80 balances:
- Conservative enough to absorb most downside scenarios
- Not so conservative that no project can be financed
- Internationally standard across IFC, World Bank, MIGA, ECAs

## How P80 affects debt sizing

Debt size = P80 CFADS × target DSCR safety multiple

Example: if P80 CFADS is USD 20 M / year and lender targets minimum DSCR 1.30x, max annual debt service = USD 15.4 M, which sets the debt sculpting schedule.

## Reporting standard

Always report P10 / P50 / P80 / P90 in a 4-column table. Highlight P80 as the banking case in lender packs. Reference this convention explicitly: "P80 NPV (banking standard)".
