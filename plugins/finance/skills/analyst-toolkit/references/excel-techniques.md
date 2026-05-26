# 20 High-Leverage Excel Techniques

Patterns Omega analysts use weekly. Each shown with the formula and the use case.

## 1. Two-way INDEX/MATCH

```excel
=INDEX(data_range, MATCH(row_lookup, row_keys, 0), MATCH(col_lookup, col_keys, 0))
```
Use case: pulling a value from a 2-D table where both row and column keys vary.

## 2. SUMIFS over a date range

```excel
=SUMIFS(amount_col, date_col, ">="&start_date, date_col, "<="&end_date, category_col, "Revenue")
```
Use case: monthly P&L from a transaction-level journal.

## 3. Year-fraction interest

```excel
=principal * rate * YEARFRAC(start_date, end_date, 1)
```
Use case: interest accrual on irregular periods (Actual/Actual day count).

## 4. XNPV for irregular cash flows

```excel
=XNPV(discount_rate, cash_flow_range, date_range)
```
Use case: project NPV where cash flows occur on actual dates, not equal periods.

## 5. XIRR for project IRR

```excel
=XIRR(cash_flow_range, date_range)
```
Use case: equity IRR for a project finance investor.

## 6. Scenario switching with CHOOSE

```excel
=CHOOSE($scenario_cell, base_value, upside_value, downside_value, stress_value)
```
Use case: one cell drives the entire scenario; toggle 1 / 2 / 3 / 4 to switch views.

## 7. Goal Seek (Data > What-If > Goal Seek)

Use case: solve for the tariff that makes NPV = 0. Set cell = NPV, to value 0, by changing tariff cell.

## 8. Data tables (one-variable and two-variable)

Use case: tornado data preparation, sensitivity tables. Data > What-If > Data Table.

## 9. SUMPRODUCT for weighted averages

```excel
=SUMPRODUCT(weights_range, values_range) / SUM(weights_range)
```
Use case: weighted average cost of capital, weighted ratings, customer NPS roll-up.

## 10. CUMIPMT and CUMPRINC for loan totals

```excel
=CUMIPMT(rate, nper, principal, start_period, end_period, type)
=CUMPRINC(rate, nper, principal, start_period, end_period, type)
```
Use case: total interest paid in year 3 of a 5-year loan, without building the full schedule.

## 11. EOMONTH for month-end roll forward

```excel
=EOMONTH(start_date, months_ahead)
```
Use case: generate column headers for a 60-month model (= EOMONTH(start, 0), +1, +2, ...).

## 12. Conditional formatting for variance flags

Format > Conditional Formatting > New Rule > Use a formula:
```excel
=ABS(actual_cell - budget_cell) > 0.05 * ABS(budget_cell)
```
Use case: flag any variance > 5 % in red.

## 13. Data validation for input cells

Data > Data Validation > List, between 0% and 25%, etc.
Use case: prevent users from entering tariff = 500 % by mistake.

## 14. Named ranges for readable formulas

```
WACC instead of $B$45
Tariff instead of $C$12
```
Use case: every formula reads like English. Critical for review.

## 15. LET for reusable sub-expressions (Excel 365+)

```excel
=LET(
   cfads, EBITDA - Tax - WC_change - CapEx,
   debt_service, Interest + Principal,
   cfads / debt_service
)
```
Use case: complex DSCR formula readable on a single line.

## 16. Dynamic arrays — FILTER, SORT, UNIQUE

```excel
=SORT(FILTER(data, region="MENA"), 3, -1)
```
Use case: top-10 deals by value in MENA, automatically updating.

## 17. INDIRECT for sheet-name driven references

```excel
=INDIRECT("'"&scenario_name&"'!$B$10")
```
Use case: pull base case NPV from a sheet named "Base", upside from "Upside", etc.
**Warning:** INDIRECT is volatile; use sparingly in large models.

## 18. Power Query for messy data import

Data > Get Data > From File / From Web / From Database.
Use case: pull AR aging from an ERP CSV every month, transform consistently, load to model.

## 19. PivotTables with calculated fields

Use case: revenue by region by month, with a custom Margin % field. Insert > PivotTable > Calculated Field.

## 20. Print discipline

Page Layout > Print Area, Page Layout > Print Titles, Page Layout > Scale to Fit 1 page wide.
Use case: every output sheet prints cleanly on A4 landscape — non-negotiable for client decks.

---

## Bonus: model audit techniques

### Trace precedents and dependents

`Ctrl + [` jumps to the source cells of a formula. `Ctrl + ]` jumps to cells that depend on the current cell. Critical for auditing inherited models.

### Evaluate formula step-by-step

Formulas > Evaluate Formula. Walks through complex nested formulas one calculation at a time. Find the bug.

### Show all formulas (Ctrl + `)

Toggle between showing values and showing formulas across the sheet. Spot hard-coded values that should be formulas, and vice versa.

### Cell colors audit

Use a macro or visual scan to find black-font cells in the Assumptions sheet (should be blue) — these are calculated values that escaped into the input section, a common bug source.

### Three-statement integrity test cells

```excel
BS_check = (Total_Assets - Total_Liab - Total_Equity)
CF_check = (Closing_Cash_CF - Closing_Cash_BS)
RE_check = (Opening_RE + Net_Income - Dividends - Closing_RE)
```

All three should equal 0. Conditional-format red if not, with the message "INTEGRITY FAIL".
