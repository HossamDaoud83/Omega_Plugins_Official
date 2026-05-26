---
name: accounting-fundamentals
description: Bookkeeping, double-entry accounting, journal entries, trial balance preparation, and the accounting equation. Use when an engagement requires building or reviewing books from raw transactions, training junior staff on accounting basics, or auditing a client's chart-of-accounts integrity before financial-statement analysis.
---

# Accounting Fundamentals

The bookkeeping layer beneath every analyst deliverable. Required reading before `financial-statement-analysis` or `financial-modeling`.

## When to use

- Building a small-entity P&L and Balance Sheet from raw transactions (no ERP)
- Reviewing a client's chart of accounts and journal entries for integrity
- Onboarding a junior analyst into Omega conventions
- Reconciling a trial balance that doesn't balance
- Translating informal Egyptian SME records (cash receipts books, ledgers) into accrual statements

## Core principles (Omega standards)

1. **The accounting equation always holds:** Assets = Liabilities + Equity
2. **Every transaction has at least two entries** (double-entry); debits must equal credits
3. **Accrual basis is the default** — recognize revenue when earned, expenses when incurred, not when cash moves
4. **Conservatism** — when in doubt, defer revenue and recognize expense; never the reverse
5. **Consistency** — same policy applied across periods; disclose changes
6. **Materiality** — apply rigor proportional to value; document the threshold

## Debit / Credit rules

| Account type | Increases with | Decreases with | Normal balance |
|---|---|---|---|
| Assets | Debit | Credit | Debit |
| Liabilities | Credit | Debit | Credit |
| Equity | Credit | Debit | Credit |
| Revenue | Credit | Debit | Credit |
| Expenses | Debit | Credit | Debit |

Mnemonic: **DEAD CLIC** — Debits increase Expenses, Assets, Drawings; Credits increase Liabilities, Income, Capital.

## The bookkeeping cycle

1. **Source document** — invoice, receipt, bank statement
2. **Journal entry** — chronological record with debit/credit
3. **Post to ledger** — by account
4. **Trial balance** — list all account balances, verify debits = credits
5. **Adjusting entries** — accruals, deferrals, depreciation, prepayments
6. **Adjusted trial balance**
7. **Financial statements** — P&L → Retained Earnings → Balance Sheet → Cash Flow
8. **Closing entries** — zero out P&L accounts into Retained Earnings

## Common journal entries

See `references/common-journal-entries.md` for the full catalog. Top patterns:

- **Sale on credit:** Dr. Accounts Receivable / Cr. Revenue
- **Cash collection:** Dr. Cash / Cr. Accounts Receivable
- **Purchase on credit:** Dr. Inventory or Expense / Cr. Accounts Payable
- **Depreciation:** Dr. Depreciation Expense / Cr. Accumulated Depreciation
- **Accrued expense:** Dr. Expense / Cr. Accrued Liability
- **Prepaid expense recognition:** Dr. Expense / Cr. Prepaid Expense
- **Loan drawdown:** Dr. Cash / Cr. Long-term Debt
- **Interest accrual:** Dr. Interest Expense / Cr. Interest Payable

## Adjusting entries — the four types

| Type | Cash timing | Revenue/Expense timing | Example |
|---|---|---|---|
| Accrued revenue | Cash later | Earned now | Service delivered, not yet invoiced |
| Accrued expense | Cash later | Incurred now | Utilities used, bill not received |
| Deferred revenue | Cash now | Earned later | Tuition received in advance |
| Deferred expense | Cash now | Incurred later | Insurance prepaid for 12 months |

Plus: **depreciation** (allocating long-term asset cost) and **bad debt provision** (estimated uncollectible AR).

## Trial balance — when it doesn't balance

Diagnose in this order:

1. **Difference divisible by 9?** → likely a transposition error (e.g. 540 entered as 450)
2. **Difference divisible by 2?** → likely a debit posted as credit or vice versa; divide by 2 to find the entry
3. **Difference is a round number** (100, 1000)? → likely a missed zero
4. **Same as a single transaction value?** → likely one entry posted only once

## Egyptian context notes

- **Egyptian Accounting Standards (EAS)** broadly follow IFRS; key local divergences in EAS 47 (financial instruments) and EAS 49 (insurance — formerly EAS 37, now aligned with IFRS 17).
- **VAT (14 % standard rate)** is collected as a liability, not revenue; Dr. Cash / Cr. Revenue / Cr. VAT Payable.
- **Cash-basis bookkeeping** is common in Egyptian SMEs; Omega conversion to accrual requires an explicit reconciliation memo.
- **Cheques** are still widely used; post-dated cheques are recorded as AR/AP with disclosure of maturity.

## Omega deliverable quality gate

- [ ] All journal entries have source-document reference (invoice #, receipt #, bank ref)
- [ ] Trial balance reconciles to zero
- [ ] Adjusting entries documented with rationale
- [ ] Accounting policy memo notes any cash-to-accrual conversions
- [ ] Sign convention consistent (debits positive, credits negative — or reverse, but stated)
- [ ] Egyptian VAT treatment explicit if applicable

## See also

- `references/double-entry-cheatsheet.md` — one-page reference for analysts
- `references/common-journal-entries.md` — 30+ pattern entries with explanations
- `plugins/finance/skills/financial-statement-analysis/SKILL.md` — next layer up
- `plugins/finance/skills/financial-modeling/SKILL.md` — modeling layer
