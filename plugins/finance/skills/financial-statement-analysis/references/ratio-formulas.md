# Ratio Formulas — Full Reference with Worked Examples

Use these definitions consistently across all Omega engagements. Where multiple conventions exist, the Omega choice is marked **[Omega]**.

## Sample data — illustrative manufacturing company, EGP millions

```
Income Statement (FY2025)
  Revenue                        1,200
  COGS                             720
  Gross Profit                     480
  SG&A                             216
  EBITDA                           264
  D&A                               60
  EBIT                             204
  Interest Expense                  36
  EBT                              168
  Tax (22.5 %)                      38
  Net Income                       130

Balance Sheet (FY2025 end)
  Cash                              80
  Accounts Receivable              200
  Inventory                        180
  Other CA                          40
  Current Assets                   500
  PP&E (net)                       600
  Intangibles                      100
  Total Assets                   1,200

  Accounts Payable                 120
  Short-term Debt                   80
  Accrued Expenses                  50
  Current Liabilities              250
  Long-term Debt                   300
  Total Liabilities                550
  Share Capital                    300
  Retained Earnings                350
  Equity                           650
  Total Liab + Equity            1,200

Cash Flow (FY2025)
  CFO                              180
  CapEx                            (90)
  CFI                              (90)
  Debt repaid                      (40)
  Dividends                        (30)
  CFF                              (70)
  Net Change in Cash                20
```

---

## Liquidity ratios

### Current Ratio
```
Current Ratio = Current Assets / Current Liabilities
             = 500 / 250
             = 2.00x        → Healthy
```

### Quick Ratio (Acid Test)
```
Quick Ratio = (CA − Inventory − Prepaids) / CL
           = (500 − 180 − 0) / 250
           = 1.28x          → Healthy
```

### Cash Ratio
```
Cash Ratio = (Cash + Marketable Securities) / CL
          = 80 / 250
          = 0.32x           → Below 0.5x — modest stress
```

### Working Capital (absolute)
```
Working Capital = CA − CL = 500 − 250 = 250    → Positive
```

---

## Solvency ratios

### Debt-to-Equity
```
D/E = Total Debt / Total Equity
   = (80 + 300) / 650
   = 0.58x           → Conservative leverage
```
**[Omega]** Use total interest-bearing debt only (exclude AP and accruals).

### Debt-to-Assets
```
D/A = Total Debt / Total Assets
   = 380 / 1,200
   = 0.32x           → Healthy
```

### Interest Coverage (Times Interest Earned)
```
TIE = EBIT / Interest Expense
   = 204 / 36
   = 5.67x           → Strong (above 3.0x threshold)
```

### Debt Service Coverage Ratio (DSCR) — banking
```
DSCR = CFADS / (Interest + Principal Repayment)
     = (EBITDA − Tax − ΔWC − Maintenance CapEx) / (Interest + Principal)
     ≈ (264 − 38 − 0 − 60) / (36 + 40)
     = 166 / 76
     = 2.18x          → Strong (above 1.20x covenant)
```
**[Omega]** For project finance, use 6-month rolling forward DSCR.

### Equity Multiplier
```
EM = Total Assets / Total Equity = 1,200 / 650 = 1.85x
```

---

## Profitability ratios

### Margin ladder
```
Gross Margin       = 480 / 1,200    = 40.0 %
EBITDA Margin      = 264 / 1,200    = 22.0 %
Operating Margin   = 204 / 1,200    = 17.0 %
Net Margin         = 130 / 1,200    = 10.8 %
```

### Return on Assets (ROA)
```
ROA = Net Income / Average Total Assets
   ≈ 130 / 1,150     (assume opening assets 1,100)
   = 11.3 %          → Strong
```

### Return on Equity (ROE)
```
ROE = Net Income / Average Equity
   ≈ 130 / 620       (assume opening equity 590)
   = 21.0 %          → Strong
```

### DuPont decomposition of ROE
```
ROE = Net Margin × Asset Turnover × Equity Multiplier
   = 10.8 % × 1.04x × 1.85x
   ≈ 20.8 %         (small rounding vs direct calc)
```
**[Omega]** Always decompose ROE when comparing peers. A high ROE driven by leverage (high EM) signals different risk than one driven by margin.

### Return on Invested Capital (ROIC)
```
NOPAT = EBIT × (1 − tax rate) = 204 × (1 − 0.225) = 158
Invested Capital = Equity + Debt = 650 + 380 = 1,030
ROIC = 158 / 1,030 = 15.4 %
```
Compare to WACC; ROIC − WACC = economic value created.

---

## Growth & efficiency ratios

### Year-over-year growth (assume FY2024 Revenue = 1,050)
```
Revenue Growth   = (1,200 − 1,050) / 1,050 = 14.3 %
```

### Asset Turnover
```
Asset Turnover = Revenue / Avg Total Assets
              = 1,200 / 1,150
              = 1.04x
```

### Days Sales Outstanding (DSO)
```
DSO = (Avg AR / Revenue) × 365
   ≈ (200 / 1,200) × 365
   = 60.8 days       → Slow if industry norm is 45
```

### Days Inventory Outstanding (DIO)
```
DIO = (Avg Inventory / COGS) × 365
   ≈ (180 / 720) × 365
   = 91.3 days
```

### Days Payable Outstanding (DPO)
```
DPO = (Avg AP / COGS) × 365
   ≈ (120 / 720) × 365
   = 60.8 days
```

### Cash Conversion Cycle (CCC)
```
CCC = DSO + DIO − DPO
   = 60.8 + 91.3 − 60.8
   = 91.3 days       → Working capital tied up ~91 days
```
**[Omega]** Reducing CCC by 10 days on this company's revenue base releases ~33 M EGP in cash.

---

## Egyptian sector medians (illustrative, 2024)

| Sector | Gross Margin | EBITDA Margin | D/E | ROE |
|---|---|---|---|---|
| Cement | 28 % | 18 % | 0.70x | 14 % |
| Real Estate Dev | 38 % | 22 % | 0.55x | 11 % |
| Pharmaceuticals | 45 % | 24 % | 0.40x | 18 % |
| Telecom | 52 % | 38 % | 1.10x | 16 % |
| Banking | n/a | n/a | n/a | 22 % |
| Retail | 22 % | 8 % | 0.65x | 13 % |

*Sources to verify per engagement: EGX disclosures, FRA filings, sector association reports.*

---

## Pitfalls

1. **Always check whether ratios use point-in-time or average balances.** Mixing creates apples-to-oranges comparisons.
2. **Strip out one-offs.** Adjust for impairment, restructuring, divestiture gains before computing trend ratios.
3. **Recognize negative-equity companies** — D/E becomes meaningless; switch to debt/assets.
4. **Sector context matters.** A 1.5x current ratio is fine for retail but tight for cyclical industrial.
5. **Tie cash flow to earnings.** If CFO ≪ Net Income consistently, earnings quality is suspect.
