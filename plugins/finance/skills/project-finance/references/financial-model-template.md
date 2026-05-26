# Project Finance Model Template Structure

## Model Overview

This template provides the standard structure for infrastructure project financial models following international best practices (FAST Standard, IFC guidelines).

---

## Sheet Structure

### 1. Cover Sheet
```
┌─────────────────────────────────────────────────┐
│ PROJECT NAME: Al Adabiya Multipurpose Terminal  │
│ MODEL VERSION: 1.0                              │
│ DATE: January 2026                              │
│ PREPARED BY: Omega Consulting                     │
│ STATUS: Draft / Final / Audited                 │
├─────────────────────────────────────────────────┤
│ SCENARIO: Base Case / Upside / Downside / Bank  │
│ CURRENCY: USD                                   │
│ MODEL PERIOD: 2026-2056 (30 years)             │
└─────────────────────────────────────────────────┘
```

### 2. Instructions Sheet
- Navigation guide
- Color coding legend
- Key assumptions summary
- Model limitations

### 3. Assumptions Sheet

#### 3.1 Macro Assumptions
| Parameter | Value | Source |
|-----------|-------|--------|
| Inflation (USD) | 2.5% | IMF forecast |
| Inflation (EGP) | 12.0% | CBE target |
| Exchange Rate (EGP/USD) | 47.3 | Starting rate |
| FX Depreciation | 5.0%/year | Model assumption |
| Risk-Free Rate (USD) | 4.5% | US 10Y Treasury |

#### 3.2 Technical Assumptions
| Parameter | Value | Source |
|-----------|-------|--------|
| Design Capacity (m³/year) | [X] | Engineering |
| Ramp-up Year 1 | 50% | Industry standard |
| Ramp-up Year 2 | 75% | Industry standard |
| Steady State Utilization | 85% | Conservative |
| Operating Days/Year | 355 | Allow maintenance |

#### 3.3 Commercial Assumptions
| Parameter | Value | Source |
|-----------|-------|--------|
| Base Tariff ($/m³) | [X] | Market study |
| Tariff Escalation | 2.0%/year | Contract terms |
| Take-or-Pay % | 80% | Contract terms |
| Contract Tenor | 15 years | Contract terms |

#### 3.4 CAPEX Assumptions
| Category | Amount (USD) | Contingency |
|----------|--------------|-------------|
| Marine Works | $28.25M | 15% |
| Dredging | $44.36M | 15% |
| Tanks | $21.89M | 15% |
| Mechanical | $30.06M | 15% |
| ... | ... | ... |
| **Base CAPEX** | **$231.03M** | |
| **+ Contingency** | **$34.65M** | 15% |
| **Total CAPEX** | **$265.68M** | |

#### 3.5 OPEX Assumptions
| Category | % Revenue | USD/year |
|----------|-----------|----------|
| Personnel | 15% | [Calc] |
| Maintenance | 12% | [Calc] |
| Utilities | 8% | [Calc] |
| Insurance | 4% | [Calc] |
| Admin | 5% | [Calc] |
| **Total OPEX** | **44%** | [Calc] |

#### 3.6 Financing Assumptions
| Parameter | Value |
|-----------|-------|
| Debt/Equity | 70:30 |
| Senior Debt Term | 15 years |
| Interest Rate | SOFR + 350 bps |
| DSRA | 6 months debt service |
| Grace Period | 2 years (construction) |
| Repayment Profile | Sculpted to 1.35x DSCR |

---

### 4. Construction Sheet

#### 4.1 Construction Timeline
```
Month    |  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 |
─────────┼──────────────────────────────────────────────────────┤
Design   |████████                                              |
Marine   |    ████████████████                                  |
Dredging |        ████████████                                  |
Civil    |            ████████████████                          |
Mech     |                    ████████████████                  |
Commissn |                                    ████████          |
─────────┴──────────────────────────────────────────────────────┘
```

#### 4.2 CAPEX Drawdown (S-Curve)
| Month | Monthly % | Cumulative % | Monthly ($M) | Cumulative ($M) |
|-------|-----------|--------------|--------------|-----------------|
| 1 | 2% | 2% | $5.3 | $5.3 |
| 2 | 4% | 6% | $10.6 | $15.9 |
| ... | ... | ... | ... | ... |
| 18 | 3% | 100% | $8.0 | $265.7 |

#### 4.3 Interest During Construction (IDC)
```
IDC = Σ (Drawdown × Rate × Time to COD)
```

---

### 5. Operations Sheet

#### 5.1 Revenue Projection
```
Year        | 2028  | 2029  | 2030  | 2031  | ... |
────────────┼───────┼───────┼───────┼───────┼─────┤
Capacity    | 100%  | 100%  | 100%  | 100%  |     |
Utilization | 50%   | 75%   | 85%   | 85%   |     |
Volume (m³) | X     | X     | X     | X     |     |
Tariff ($/m³)| X    | X+2%  | X+4%  | X+6%  |     |
ToP Revenue | X     | X     | X     | X     |     |
Variable Rev| X     | X     | X     | X     |     |
Total Rev   | $XXM  | $XXM  | $XXM  | $XXM  |     |
```

#### 5.2 Operating Costs
| Category | 2028 | 2029 | 2030 | Growth |
|----------|------|------|------|--------|
| Personnel | | | | Inflation + 1% |
| Maintenance | | | | Inflation |
| Utilities | | | | Inflation + 2% |
| Insurance | | | | Inflation |
| Admin | | | | Inflation |

#### 5.3 Working Capital
| Component | Days | Calculation |
|-----------|------|-------------|
| Receivables | 30 | Revenue × 30/365 |
| Payables | 45 | OPEX × 45/365 |
| Inventory | 15 | OPEX × 15/365 |
| Net WC | | Receivables + Inventory - Payables |

---

### 6. Debt Schedule

#### 6.1 Debt Structure
| Tranche | Amount | Rate | Tenor | Grace |
|---------|--------|------|-------|-------|
| Senior A | $100M | SOFR+300 | 12 yrs | 2 yrs |
| Senior B | $86M | SOFR+350 | 15 yrs | 2 yrs |
| DSRA | $10M | - | - | - |
| **Total** | **$186M** | | | |

#### 6.2 Debt Schedule
```
Year      | Opening | Drawdown | Interest | Principal | Closing | DSCR |
──────────┼─────────┼──────────┼──────────┼───────────┼─────────┼──────┤
2026      | 0       | 62       | 2.5      | 0         | 62      | n/a  |
2027      | 62      | 124      | 7.5      | 0         | 186     | n/a  |
2028      | 186     | 0        | 15.0     | 8.0       | 178     | 1.35 |
...       | ...     | ...      | ...      | ...       | ...     | ...  |
```

#### 6.3 DSRA Schedule
- Required: 6 months forward-looking debt service
- Funded from equity during construction
- Released in final years

---

### 7. Financial Statements

#### 7.1 Income Statement
| Line Item | 2028 | 2029 | 2030 |
|-----------|------|------|------|
| Revenue | | | |
| (-) Operating Costs | | | |
| **EBITDA** | | | |
| (-) Depreciation | | | |
| **EBIT** | | | |
| (-) Interest | | | |
| **EBT** | | | |
| (-) Tax | | | |
| **Net Income** | | | |

#### 7.2 Balance Sheet
| Assets | 2028 | 2029 | 2030 |
|--------|------|------|------|
| Cash | | | |
| Receivables | | | |
| Fixed Assets (Net) | | | |
| DSRA | | | |
| **Total Assets** | | | |

| Liabilities & Equity | 2028 | 2029 | 2030 |
|----------------------|------|------|------|
| Payables | | | |
| Debt | | | |
| Equity | | | |
| Retained Earnings | | | |
| **Total L&E** | | | |

#### 7.3 Cash Flow Statement
| Line Item | 2028 | 2029 | 2030 |
|-----------|------|------|------|
| **Operating Cash Flow** | | | |
| Net Income | | | |
| (+) Depreciation | | | |
| (-) WC Change | | | |
| **Investing Cash Flow** | | | |
| (-) CAPEX | | | |
| **Financing Cash Flow** | | | |
| (+) Debt Drawdown | | | |
| (-) Debt Repayment | | | |
| (+) Equity Injection | | | |
| (-) Dividends | | | |
| **Net Cash Flow** | | | |
| Opening Cash | | | |
| **Closing Cash** | | | |

---

### 8. Returns Analysis

#### 8.1 Project Returns
| Metric | Base | Upside | Downside | Bank |
|--------|------|--------|----------|------|
| Project IRR | X% | X% | X% | X% |
| Project NPV (@8%) | $XM | $XM | $XM | $XM |
| Payback Period | X yrs | X yrs | X yrs | X yrs |

#### 8.2 Equity Returns
| Metric | Base | Upside | Downside | Bank |
|--------|------|--------|----------|------|
| Equity IRR | X% | X% | X% | X% |
| Equity NPV (@12%) | $XM | $XM | $XM | $XM |
| MOIC | X.Xx | X.Xx | X.Xx | X.Xx |

#### 8.3 Lender Metrics
| Metric | Minimum | Average | Requirement |
|--------|---------|---------|-------------|
| DSCR | 1.25x | 1.45x | ≥1.20x |
| LLCR | 1.35x | n/a | ≥1.30x |
| PLCR | 1.50x | n/a | ≥1.40x |

---

### 9. Sensitivity Analysis

#### 9.1 Single-Variable Sensitivity
| Driver | -20% | -10% | Base | +10% | +20% |
|--------|------|------|------|------|------|
| Revenue | IRR | IRR | IRR | IRR | IRR |
| CAPEX | IRR | IRR | IRR | IRR | IRR |
| OPEX | IRR | IRR | IRR | IRR | IRR |
| Interest | IRR | IRR | IRR | IRR | IRR |

#### 9.2 Two-Variable Sensitivity (IRR)
```
           Revenue
        -20%  -10%  Base  +10%  +20%
CAPEX ┌──────────────────────────────┐
 +20% │ X%    X%    X%    X%    X%   │
 +10% │ X%    X%    X%    X%    X%   │
 Base │ X%    X%    X%    X%    X%   │
 -10% │ X%    X%    X%    X%    X%   │
      └──────────────────────────────┘
```

#### 9.3 DSCR Sensitivity
| Driver | -10% | Base | +10% | Min Required |
|--------|------|------|------|--------------|
| Revenue | 1.15x | 1.35x | 1.55x | 1.20x |
| OPEX | 1.40x | 1.35x | 1.30x | 1.20x |

---

### 10. Scenarios

#### 10.1 Scenario Definitions
| Scenario | Revenue | CAPEX | OPEX | Volume |
|----------|---------|-------|------|--------|
| Base | 100% | 100% | 100% | 85% util |
| Upside | 110% | 95% | 95% | 90% util |
| Downside | 90% | 115% | 110% | 75% util |
| Bank | 85% | 120% | 115% | 70% util |

#### 10.2 Scenario Results Summary
| Metric | Base | Upside | Downside | Bank |
|--------|------|--------|----------|------|
| Equity IRR | | | | |
| Min DSCR | | | | |
| NPV | | | | |

---

### 11. Error Checks

| Check | Formula | Status |
|-------|---------|--------|
| Balance Sheet Balances | Assets = L+E | ✓/✗ |
| Cash Flow Reconciles | ΔCash = Net CF | ✓/✗ |
| Debt Fully Repaid | Final Balance = 0 | ✓/✗ |
| DSRA Funded | DSRA ≥ 6mo DS | ✓/✗ |
| No Negative Cash | Min Cash ≥ 0 | ✓/✗ |
| Equity Positive | Min Equity > 0 | ✓/✗ |

---

## Color Coding Standard

| Color | RGB | Use |
|-------|-----|-----|
| Blue | (0, 0, 255) | Hardcoded inputs |
| Black | (0, 0, 0) | Formulas (same sheet) |
| Green | (0, 128, 0) | Links to other sheets |
| Red | (255, 0, 0) | Error checks |
| Gray | (128, 128, 128) | Labels, headers |

---

## Version Control

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 0.1 | 2026-01-XX | Omega | Initial structure |
| 0.2 | 2026-01-XX | Omega | CAPEX inputs |
| 1.0 | 2026-01-XX | Omega | Complete base case |
| 1.1 | 2026-01-XX | Omega | Scenarios added |
