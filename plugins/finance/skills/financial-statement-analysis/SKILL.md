---
name: financial-statement-analysis
description: Construct, read, and interpret the three financial statements; compute and benchmark the four ratio families (liquidity, solvency, profitability, growth); perform common-size and trend analysis. Use when assessing a target's financial health for M&A, due diligence, credit review, or annual performance reporting.
---

# Financial Statement Analysis

The analyst's daily work: turning a set of statements into a defensible verdict on financial health.

## When to use

- Reviewing a target's audited statements for M&A or investment screening
- Assessing borrower health for credit risk (Al Adabiya MRCC FP review pattern)
- Producing the financial-health section of a Omega feasibility study (Bunyan, GSB)
- Preparing a CFO-ready board pack with ratio commentary
- Benchmarking a client against listed peers

## The three statements — what each tells you

| Statement | Reading question | Time frame |
|---|---|---|
| **Income Statement (P&L)** | Did the business make money this period? | Period (month, quarter, year) |
| **Balance Sheet** | What does the business own and owe right now? | Point in time (snapshot) |
| **Cash Flow Statement** | Where did cash come from and go? | Period |

The three are linked:
- Net Income (P&L) → Retained Earnings (BS) and Operating CF (CFS)
- CapEx (CFS investing) → PP&E (BS)
- Debt issued/repaid (CFS financing) → Debt (BS)
- Ending Cash (CFS) = Cash on BS

## Income Statement structure (Omega standard)

```
Revenue
(–) Cost of Goods Sold (COGS)
    = Gross Profit
(–) Operating Expenses (SG&A, R&D)
    = EBITDA
(–) Depreciation & Amortization
    = EBIT (Operating Income)
(–) Interest Expense
(+) Interest Income
    = Earnings Before Tax (EBT)
(–) Tax Expense
    = Net Income
```

## Balance Sheet structure

```
ASSETS                              LIABILITIES + EQUITY
─ Current Assets                    ─ Current Liabilities
  • Cash & equivalents                • Accounts Payable
  • Accounts Receivable               • Accrued Expenses
  • Inventory                         • Short-term Debt
  • Prepaid Expenses                  • Deferred Revenue
─ Non-current Assets                ─ Non-current Liabilities
  • PP&E (net)                        • Long-term Debt
  • Intangibles                       • Lease Liabilities
  • Goodwill                          • Deferred Tax
  • Long-term Investments           ─ Equity
                                      • Share Capital
                                      • Retained Earnings
                                      • Reserves

TOTAL ASSETS                  =     TOTAL LIABILITIES + EQUITY
```

## Cash Flow Statement structure (indirect method)

```
Net Income
(+) Depreciation & Amortization
(±) Changes in working capital
    = Cash from Operations (CFO)

(–) CapEx
(±) Acquisitions / disposals
    = Cash from Investing (CFI)

(+) Debt issued / (–) Debt repaid
(+) Equity raised / (–) Buybacks
(–) Dividends paid
    = Cash from Financing (CFF)

CFO + CFI + CFF = Net Change in Cash
                + Opening Cash
                = Closing Cash    (ties to Balance Sheet)
```

## The four ratio families

### A. Liquidity — can it pay near-term obligations?

| Ratio | Formula | Healthy range |
|---|---|---|
| Current Ratio | Current Assets / Current Liabilities | 1.5x – 2.5x |
| Quick Ratio (Acid Test) | (CA − Inventory − Prepaids) / CL | > 1.0x |
| Cash Ratio | (Cash + Marketable Securities) / CL | > 0.5x |
| Working Capital | CA − CL (absolute, not ratio) | Positive |

### B. Solvency — can it survive long-term?

| Ratio | Formula | Healthy range |
|---|---|---|
| Debt-to-Equity | Total Debt / Total Equity | < 1.5x (sector-dependent) |
| Debt-to-Assets | Total Debt / Total Assets | < 0.6x |
| Interest Coverage (TIE) | EBIT / Interest Expense | > 3.0x |
| Debt Service Coverage (DSCR) | CFADS / (Interest + Principal) | > 1.20x (banking) |
| Equity Multiplier | Total Assets / Total Equity | 2.0x – 3.0x |

### C. Profitability — how efficiently does it earn?

| Ratio | Formula | Healthy range |
|---|---|---|
| Gross Margin | Gross Profit / Revenue | Sector-dependent (10 % – 70 %) |
| EBITDA Margin | EBITDA / Revenue | > 15 % (services), > 8 % (industrial) |
| Operating Margin | EBIT / Revenue | > 10 % |
| Net Margin | Net Income / Revenue | > 5 % |
| ROA | Net Income / Avg Total Assets | > 5 % |
| ROE | Net Income / Avg Equity | > 12 % |
| ROIC | NOPAT / Invested Capital | > WACC by 2-4 ppts |

### D. Growth & efficiency — is it scaling?

| Ratio | Formula | Healthy signal |
|---|---|---|
| Revenue Growth (YoY) | (Rev_t − Rev_{t-1}) / Rev_{t-1} | > sector average |
| EBITDA Growth (YoY) | (EBITDA_t − EBITDA_{t-1}) / EBITDA_{t-1} | ≥ Revenue Growth |
| Asset Turnover | Revenue / Avg Total Assets | Sector-dependent |
| Inventory Days | (Avg Inventory / COGS) × 365 | Lower is better |
| Receivable Days (DSO) | (Avg AR / Revenue) × 365 | Lower is better |
| Payable Days (DPO) | (Avg AP / COGS) × 365 | Sector norm |
| Cash Conversion Cycle | DSO + DIO − DPO | Lower / negative ideal |

See `references/ratio-formulas.md` for the full formula sheet and worked examples.

## Common-size analysis

Express every P&L line as % of Revenue, every BS line as % of Total Assets. Enables cross-company and cross-period comparison.

**P&L common-size example:**
```
Revenue                         100.0 %
COGS                             62.5 %
Gross Profit                     37.5 %
SG&A                             18.0 %
EBITDA                           19.5 %
D&A                               4.5 %
EBIT                             15.0 %
Interest                          2.0 %
Tax                               3.5 %
Net Income                        9.5 %
```

If COGS grew from 60 % to 65 % of revenue, that's a 5-point margin compression — far more meaningful than the absolute COGS number.

## Trend analysis (horizontal analysis)

Compare each line over 3-5 years. Index Year 1 = 100, show subsequent years as % of base. Reveals patterns that single-period analysis misses.

## Five-step analyst review process (Omega standard)

1. **Read the auditor's opinion first** — qualified / adverse / disclaimer is a red flag before any numbers
2. **Read the notes before the statements** — accounting policies, related parties, contingencies, subsequent events
3. **Compute and trend the four ratio families** over 3+ years
4. **Reconcile the three statements** (Net Income → Retained Earnings → Cash)
5. **Form a one-line verdict** with three supporting ratio observations

## Red flags checklist

- [ ] Revenue growth without CFO growth (earnings quality issue)
- [ ] AR growing faster than revenue (collection problem)
- [ ] Inventory growing faster than COGS (obsolescence / sales slowdown)
- [ ] Goodwill > 30 % of total assets (impairment risk)
- [ ] Interest coverage < 2.0x (solvency stress)
- [ ] Current ratio < 1.0x with negative working capital (liquidity stress)
- [ ] Frequent restatements or change of auditor
- [ ] Related-party transactions > 10 % of revenue
- [ ] Discontinued operations or extraordinary items recurring

## Omega deliverable quality gate

- [ ] All three statements presented and reconciled
- [ ] Minimum 3 years of historical data
- [ ] All four ratio families computed (≥ 12 ratios total)
- [ ] Common-size P&L included
- [ ] Trend analysis with base year = 100
- [ ] Peer benchmark or sector medians where available
- [ ] One-line verdict with confidence level
- [ ] Red flags explicitly addressed

## See also

- `references/ratio-formulas.md` — full formula sheet with worked examples
- `references/common-size-and-trend.md` — template structure
- `plugins/finance/skills/accounting-fundamentals/SKILL.md` — bookkeeping foundation
- `plugins/finance/scripts/ratio_analysis.py` — automation
- `/omega-fin:ratios` — slash command
