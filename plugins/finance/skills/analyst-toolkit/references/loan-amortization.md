# Loan Amortization — Formulas, Variants, and Implementation

## Core formulas

### Level annuity payment (PMT)
```
PMT = P × [ r(1+r)^n ] / [ (1+r)^n − 1 ]

  P = principal
  r = periodic rate (annual / payments per year)
  n = number of payments
```

### Interest portion in period k
```
Interest_k = Opening_Balance_k × r
```

### Principal portion in period k
```
Principal_k = PMT − Interest_k
```

### Closing balance in period k
```
Closing_Balance_k = Opening_Balance_k − Principal_k
                  = Opening_Balance_k × (1 + r) − PMT
```

### Outstanding balance after k payments (closed form)
```
B_k = P × (1+r)^k − PMT × [ (1+r)^k − 1 ] / r
```

## Excel functions cheat sheet

| Function | Returns | Signature |
|---|---|---|
| `PMT(rate, nper, pv, [fv], [type])` | Periodic payment | All-in |
| `IPMT(rate, per, nper, pv, [fv], [type])` | Interest portion in period `per` | Single period |
| `PPMT(rate, per, nper, pv, [fv], [type])` | Principal portion in period `per` | Single period |
| `CUMIPMT(rate, nper, pv, start, end, type)` | Cumulative interest over period range | Range |
| `CUMPRINC(rate, nper, pv, start, end, type)` | Cumulative principal over period range | Range |
| `RATE(nper, pmt, pv, [fv], [type])` | Implied periodic rate | Solver |
| `NPER(rate, pmt, pv, [fv], [type])` | Number of periods | Solver |

**Sign convention:** `pv` is negative if cash comes out of the borrower's pocket; `pmt` is negative for payments out.

## Variant 1 — Level annuity (most common)

Equal total payment every period. Most consumer and SME loans.

```
Period | Opening | Payment | Interest | Principal | Closing
   1   |   P     |  PMT    | P × r    | PMT − I   |  CB
   2   |  CB_1   |  PMT    | CB_1 × r | PMT − I   |  CB
   …
   n   |  small  |  PMT    |  tiny    |  full     |   0
```

**Pattern:** interest is high early, declines over time; principal does the opposite.

## Variant 2 — Level principal (equal principal)

Equal principal every period; interest declines; total payment declines.

```
Principal each period = P / n
Interest_k = Opening_Balance_k × r
Payment_k = Principal + Interest_k    (declines over time)
```

Used in: commercial real estate, some Egyptian SME loans. Total interest paid is lower than level annuity for the same loan, but cash burden is higher early on.

## Variant 3 — Interest-only (bullet)

Interest paid each period, full principal at maturity.

```
Payment_k (k < n) = P × r
Payment_n        = P × r + P    (interest + principal)
```

Used in: bridge financing, mezzanine debt, construction loans pre-conversion.

## Variant 4 — Grace period then amortization

Interest-only during construction, then principal kicks in at commercial operation date (COD).

```
Period 1 .. g (grace):     Payment = P × r           (no principal)
Period g+1 .. n:           Payment = PMT computed on (n − g) periods
```

Used in: project finance, infrastructure (Al Adabiya pattern).

## Variant 5 — Debt sculpting (project finance)

Repayment shaped to maintain target DSCR each year, given a forecast CFADS profile.

```
For each year y:
   Max_Debt_Service_y = CFADS_y / Target_DSCR
   Interest_y         = Opening_Balance_y × r
   Principal_y        = max(0, Max_Debt_Service_y − Interest_y)
   Closing_Balance_y  = Opening_Balance_y − Principal_y
```

Total sustainable debt is found by iterating principal until balance closes to zero in the final year, or by solving with Excel Goal Seek.

**Used in:** Al Adabiya Port KVR v5.1, all Omega project-finance engagements.

## Variant 6 — Step-up / step-down

Payment changes at defined milestones (e.g. tariff escalator, end of ramp-up).

```
Period 1 .. m:    PMT_1
Period m+1 .. n:  PMT_2
```

Each segment is an independent amortization sub-schedule.

## Worked example — EGP 10 M, 10 % annual, 60 months, level annuity

```
P  = 10,000,000 EGP
r  = 10 % / 12 = 0.00833 (monthly)
n  = 60

PMT = 10,000,000 × [ 0.00833 × (1.00833)^60 ] / [ (1.00833)^60 − 1 ]
    = 212,470 EGP / month

Total payments     = 60 × 212,470 = 12,748,200
Total interest     = 12,748,200 − 10,000,000 = 2,748,200
Effective interest = 27.5 % of principal
```

## First three rows of the schedule

| Period | Opening | Payment | Interest | Principal | Closing |
|---|---|---|---|---|---|
| 1 | 10,000,000 | 212,470 | 83,333 | 129,137 | 9,870,863 |
| 2 | 9,870,863 | 212,470 | 82,257 | 130,213 | 9,740,650 |
| 3 | 9,740,650 | 212,470 | 81,172 | 131,298 | 9,609,352 |
| ... | ... | ... | ... | ... | ... |
| 60 | 210,720 | 212,470 | 1,756 | 210,714 | 0 |

## Egyptian context

- **Murabaha (Islamic) structures:** No interest as such; cost-plus profit margin is fixed at inception and amortized like a level annuity. Internal accounting still tracks an effective rate for IRR analysis.
- **CBE prime rate** anchors most variable EGP loans (typically prime + spread).
- **CIB, NBE, QNB Alahli** are the active project-finance lenders for mid/large Egyptian deals; each has a slightly different debt-sculpting convention.

## Common pitfalls

1. **Mixing nominal and effective rates.** An annual rate of 12 % with monthly compounding = effective 12.68 %. Always state the convention.
2. **Forgetting the day-count.** Actual/365, Actual/360, 30/360 give materially different interest amounts on long loans.
3. **Bullet structures and DSCR.** A bullet loan with DSCR computed annually looks fine for 4 years and breaches catastrophically in year 5 — always project all years.
4. **Step-up structures and lender consent.** Sculpting changes mid-life usually need a covenant amendment.
5. **Excel sign convention.** `PMT(rate, nper, pv)` returns a positive number if `pv` is negative — be consistent throughout the schedule.

## Omega deliverable quality gate

- [ ] Schedule prints to one page (summary) plus full schedule on appendix sheet
- [ ] Period column shows date as well as period number
- [ ] Cumulative interest and cumulative principal columns included
- [ ] Closing balance in final period = 0 (within rounding)
- [ ] Loan covenant DSCR shown by period if project finance
- [ ] All-in rate (effective) stated on the cover, not just nominal
- [ ] Currency stated; EGP and USD shown side-by-side if applicable
