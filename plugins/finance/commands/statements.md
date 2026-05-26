---
description: Construct or audit a three-statement model from source data, verifying integrity (BS balances, RE rolls, Cash ties)
allowed-tools: Read, Write, Edit, Bash
---

# /omega-fin:statements

Construct the three financial statements from raw inputs (or audit a client-provided model) and verify integrity.

## Steps

### Construction mode (no model exists)

1. Confirm input format:
   - Trial balance with debit/credit per account, OR
   - Categorized transactions (JE-level), OR
   - Prior period financials + period activity
2. Use the `accounting-fundamentals` skill to validate journal entries and trial balance reconciliation.
3. Build:
   - **Income Statement** in the Omega standard format (Revenue → COGS → Gross Profit → OpEx → EBITDA → D&A → EBIT → Interest → Tax → Net Income)
   - **Balance Sheet** (Current assets → Non-current → Total Assets = Current Liab → Non-current → Equity)
   - **Cash Flow Statement** (indirect: Net Income → CFO → CFI → CFF → Net change in cash)
4. Apply the three integrity checks:
   - Net Income (P&L) flows correctly to Retained Earnings (BS)
   - CapEx (CFI) flows to PP&E (BS); Depreciation (P&L) increases Accumulated Depreciation
   - Closing Cash on CF Statement equals Cash on BS

### Audit mode (model provided)

1. Read the client-provided statements (Excel, PDF, or extracted JSON).
2. Run the three integrity tests:

   | Test | Expected | Pass / Fail |
   |---|---|---|
   | Total Assets = Total Liab + Equity | Each year | |
   | Closing RE = Opening RE + NI − Dividends | Each year | |
   | Closing Cash (CF) = Cash on BS | Each year | |
   | Depreciation in P&L ties to ΔAccumulated Dep on BS | Each year | |
   | CapEx in CFI ties to ΔPP&E + Depreciation | Each year | |
   | Debt issued/repaid in CFF ties to ΔTotal Debt on BS | Each year | |

3. Document discrepancies with cell references and proposed corrections.

### Common audit findings to flag

- Plug numbers in the cash flow statement (CF doesn't reconcile, so a balancing figure is forced in)
- Working capital changes ignored (Net Income → CFO without WC adjustments)
- Dividends paid not reflected on BS Retained Earnings
- Asset disposals creating phantom CapEx
- Hardcoded values in formula cells (use Ctrl+` to scan)

## Inputs needed

- Trial balance OR three statements
- Period range (years or months)
- Engagement-specific accounting policy notes

## Outputs

- `STATEMENTS_REPORT.md` with:
  - Three-statement tables (3-5 years)
  - Common-size P&L
  - Trend analysis (indexed to base year)
  - Integrity test results (pass/fail per test per year)
  - Audit findings (if audit mode)
- Optional: spreadsheet model in Omega Excel conventions

## Quality criteria

See `plugins/finance/skills/financial-statement-analysis/SKILL.md` § Omega deliverable quality gate.

Specifically verify:
- All three integrity tests pass for every period (within rounding)
- Common-size table included
- Auditor's opinion captured if model is from audited statements
- Notes referenced (accounting policy, related parties, contingencies)
