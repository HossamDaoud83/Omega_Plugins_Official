# Double-Entry Cheatsheet (Omega Analyst Reference)

One-page reference. Print and pin.

## The five account types

| Type | Lives on | Normal balance | Closed at year-end? |
|---|---|---|---|
| **Assets** | Balance Sheet | Debit | No |
| **Liabilities** | Balance Sheet | Credit | No |
| **Equity** | Balance Sheet | Credit | No |
| **Revenue** | P&L | Credit | Yes → Retained Earnings |
| **Expenses** | P&L | Debit | Yes → Retained Earnings |

## The fundamental equation

```
Assets = Liabilities + Equity
       = Liabilities + (Contributed Capital + Retained Earnings)
       = Liabilities + (Contributed Capital + Prior RE + Net Income − Dividends)
```

Every valid journal entry preserves this identity.

## Decision tree: which side does it go on?

```
Is the account being affected an Asset or Expense?
├── YES → Increase = DEBIT      Decrease = CREDIT
└── NO  (Liability, Equity, Revenue)
        → Increase = CREDIT     Decrease = DEBIT
```

## Worked example: a typical month for a small consulting firm

| # | Transaction | Dr. | Cr. |
|---|---|---|---|
| 1 | Owner invests EGP 500,000 cash | Cash 500,000 | Capital 500,000 |
| 2 | Pay 6 months office rent in advance, EGP 120,000 | Prepaid Rent 120,000 | Cash 120,000 |
| 3 | Buy laptops on credit, EGP 80,000 | Equipment 80,000 | Accounts Payable 80,000 |
| 4 | Invoice client for services, EGP 200,000 | Accounts Receivable 200,000 | Revenue 200,000 |
| 5 | Pay staff salaries, EGP 90,000 | Salaries Expense 90,000 | Cash 90,000 |
| 6 | Client pays half the invoice | Cash 100,000 | Accounts Receivable 100,000 |
| 7 | Record one month's rent expense (adjusting) | Rent Expense 20,000 | Prepaid Rent 20,000 |
| 8 | Record monthly laptop depreciation (4-yr SL) | Depreciation Expense 1,667 | Accumulated Depreciation 1,667 |

After these entries, the trial balance balances and the P&L shows Revenue 200,000 / Expenses 111,667 / Net Income 88,333.

## Common analyst mistakes (avoid these)

1. **Treating VAT as revenue.** It's a pass-through liability.
2. **Booking the full prepayment as expense.** Use Prepaid Asset, then amortize.
3. **Mixing capital and revenue items.** Equipment purchase is an asset, not an expense; only depreciation hits P&L.
4. **Forgetting accruals at month-end.** Salaries earned but unpaid, interest accrued, utilities used — all need accrual entries.
5. **Reversing debits/credits.** Use DEAD CLIC mnemonic if in doubt.

## DEAD CLIC mnemonic

**D**ebits increase: **E**xpenses, **A**ssets, **D**rawings
**C**redits increase: **L**iabilities, **I**ncome, **C**apital
