# Common-Size and Trend Analysis — Template & Method

Two of the highest-signal techniques in the analyst toolkit. Both are cheap to compute and reveal structural shifts that absolute numbers hide.

## 1. Common-size analysis (vertical analysis)

### P&L common-size — every line as % of Revenue

| Line | FY23 | FY24 | FY25 | Comment |
|---|---|---|---|---|
| Revenue | 100.0 % | 100.0 % | 100.0 % | base |
| COGS | 58.0 % | 60.5 % | 62.5 % | **Compressing** — input cost or pricing pressure |
| Gross Profit | 42.0 % | 39.5 % | 37.5 % | down 4.5 pts in 2 years |
| SG&A | 16.5 % | 17.2 % | 18.0 % | Creeping up — operating leverage thinning |
| EBITDA | 25.5 % | 22.3 % | 19.5 % | **Material decline** |
| D&A | 4.0 % | 4.2 % | 4.5 % | stable |
| EBIT | 21.5 % | 18.1 % | 15.0 % | |
| Interest | 1.5 % | 1.8 % | 2.0 % | leverage cost rising |
| Tax | 4.5 % | 3.6 % | 3.0 % | follows EBT down |
| Net Income | 15.5 % | 12.7 % | 10.0 % | -5.5 pts in 2 years |

### Balance sheet common-size — every line as % of Total Assets

| Line | FY23 | FY24 | FY25 | Comment |
|---|---|---|---|---|
| Cash | 8 % | 7 % | 7 % | stable |
| AR | 14 % | 16 % | 17 % | **Growing — DSO check** |
| Inventory | 12 % | 13 % | 15 % | **Growing — turnover check** |
| Current Assets | 38 % | 40 % | 42 % | |
| PP&E | 52 % | 51 % | 50 % | |
| Total Assets | 100 % | 100 % | 100 % | |
| Current Liab | 18 % | 20 % | 21 % | |
| Long-term Debt | 25 % | 25 % | 25 % | |
| Equity | 57 % | 55 % | 54 % | mildly diluted by leverage |

## 2. Trend analysis (horizontal analysis)

Index base year = 100. Reveals growth and decay patterns.

| Line | FY23 (base) | FY24 | FY25 | 2-yr CAGR |
|---|---|---|---|---|
| Revenue | 100 | 110 | 120 | 9.5 % |
| COGS | 100 | 115 | 130 | 14.0 % |
| Gross Profit | 100 | 103 | 107 | 3.5 % |
| EBITDA | 100 | 96 | 92 | -4.1 % |
| Net Income | 100 | 90 | 78 | -11.7 % |
| AR | 100 | 126 | 146 | 20.8 % |
| Inventory | 100 | 119 | 150 | 22.5 % |

**Reading:** Revenue up 20 % over 2 years, but EBITDA down 8 % and Net Income down 22 %. AR and Inventory growing far faster than revenue — classic deterioration pattern. This company is "growing into trouble."

## 3. The combined interpretation

Common-size says: *"Margins are eroding, working capital intensity is rising."*

Trend says: *"Growth is funded by working capital build-up; earnings can't keep pace with revenue."*

Combined story: **Revenue growth is masking quality decline. Recommend management discussion of input costs, pricing power, and AR/Inventory controls before any extension of credit or valuation premium.**

## 4. Omega deliverable template

A board-ready financial-health page should contain:

1. **Headline** (one sentence verdict)
2. **Key ratios table** — 12 ratios over 3 years, color-coded vs sector median
3. **Common-size P&L** — full table
4. **Trend chart** — Revenue / EBITDA / Net Income indexed to 100
5. **Working capital chart** — DSO / DIO / DPO over time
6. **Three observations** — bulleted, each with the ratio that supports it
7. **Recommendation** — extend / monitor / decline / conditional

## 5. Excel implementation tips

- Use `=cell / Revenue_row` for common-size; lock the revenue row reference with `$`
- Use `=cell / FirstYear_cell * 100` for indexed trend
- Conditional formatting: green if better than prior year, red if worse — applied to the % change column
- Sparklines next to each ratio row for instant visual trend

## 6. CAGR formula reminders

```
CAGR over n years = (End_Value / Start_Value)^(1/n) − 1
```

For the data above:
- 2-yr Revenue CAGR = (120/100)^(1/2) − 1 = 9.5 %
- 2-yr EBITDA CAGR = (92/100)^(1/2) − 1 = −4.1 %
