# Common Journal Entries — Omega Pattern Catalog

Thirty patterns covering 95 % of small/mid-cap entries. Each shows the bookkeeping mechanics and a one-line "why."

## 1. Operating transactions

### Cash sale
```
Dr. Cash                    1,140
    Cr. Revenue                       1,000
    Cr. VAT Payable (14 %)              140
```
*Why:* Revenue is net of VAT; the 140 collected belongs to the tax authority.

### Sale on credit
```
Dr. Accounts Receivable     1,140
    Cr. Revenue                       1,000
    Cr. VAT Payable                     140
```

### Cash collection from customer
```
Dr. Cash                    1,140
    Cr. Accounts Receivable           1,140
```
*Why:* Revenue was already booked when invoiced; this just swaps one asset for another.

### Purchase of inventory on credit
```
Dr. Inventory                 800
Dr. VAT Receivable            112
    Cr. Accounts Payable                912
```
*Why:* Input VAT is an asset (recoverable against output VAT).

### Payment to supplier
```
Dr. Accounts Payable          912
    Cr. Cash                            912
```

### Cost of goods sold (when inventory is sold)
```
Dr. Cost of Goods Sold        800
    Cr. Inventory                       800
```
*Why:* Matching principle — recognize the cost when the related revenue is recognized.

## 2. Payroll

### Salary expense (cash basis, simple)
```
Dr. Salaries Expense       50,000
    Cr. Cash                         50,000
```

### Salary expense with withholdings (Egyptian context)
```
Dr. Salaries Expense       50,000
    Cr. Income Tax Withheld           5,000
    Cr. Social Insurance Payable      6,000
    Cr. Cash                         39,000
```

### Accrued salaries at month-end (paid next month)
```
Dr. Salaries Expense       50,000
    Cr. Accrued Salaries Payable     50,000
```

## 3. Fixed assets and depreciation

### Acquisition of equipment
```
Dr. Equipment             100,000
    Cr. Cash                        100,000
```

### Monthly straight-line depreciation (5-year life)
```
Dr. Depreciation Expense    1,667
    Cr. Accumulated Depreciation      1,667
```
*Why:* 100,000 / 60 months = 1,667/month.

### Disposal of equipment (sold for 30,000; book value 40,000)
```
Dr. Cash                   30,000
Dr. Accumulated Depreciation 60,000
Dr. Loss on Disposal       10,000
    Cr. Equipment                   100,000
```

## 4. Prepayments and accruals

### Pay 12 months insurance upfront, EGP 24,000
```
Dr. Prepaid Insurance      24,000
    Cr. Cash                         24,000
```

### Recognize one month of insurance expense
```
Dr. Insurance Expense       2,000
    Cr. Prepaid Insurance             2,000
```

### Accrue utilities used but not billed
```
Dr. Utilities Expense       3,000
    Cr. Accrued Liabilities           3,000
```

### Customer pays in advance (deferred revenue)
```
Dr. Cash                   60,000
    Cr. Deferred Revenue             60,000
```

### Recognize earned portion of deferred revenue
```
Dr. Deferred Revenue       10,000
    Cr. Revenue                      10,000
```

## 5. Financing

### Drawdown of bank loan
```
Dr. Cash                1,000,000
    Cr. Long-term Debt            1,000,000
```

### Monthly interest accrual (10 % annual on 1 M)
```
Dr. Interest Expense        8,333
    Cr. Interest Payable              8,333
```

### Principal and interest payment
```
Dr. Long-term Debt         20,000
Dr. Interest Payable        8,333
    Cr. Cash                         28,333
```

### Owner injection of capital
```
Dr. Cash                  500,000
    Cr. Share Capital               500,000
```

### Dividend declared
```
Dr. Retained Earnings     100,000
    Cr. Dividends Payable           100,000
```

### Dividend paid
```
Dr. Dividends Payable     100,000
    Cr. Cash                        100,000
```

## 6. Provisions and write-offs

### Provision for doubtful debts (2 % of AR)
```
Dr. Bad Debt Expense        5,000
    Cr. Allowance for Doubtful Debts   5,000
```

### Write-off a specific bad debt
```
Dr. Allowance for Doubtful Debts 3,000
    Cr. Accounts Receivable           3,000
```

### Inventory write-down to net realizable value
```
Dr. Inventory Write-down    8,000
    Cr. Inventory                     8,000
```

## 7. Year-end closing

### Close revenue to retained earnings
```
Dr. Revenue             1,000,000
    Cr. Retained Earnings         1,000,000
```

### Close expenses to retained earnings
```
Dr. Retained Earnings     700,000
    Cr. Various Expense Accounts    700,000
```

### Transfer net income (implicit after closing entries)
Net 300,000 sits in Retained Earnings, balancing into the Balance Sheet.

## 8. Egyptian-specific patterns

### Output VAT remitted to tax authority
```
Dr. VAT Payable           140,000
    Cr. VAT Receivable               60,000   (offset input VAT)
    Cr. Cash                         80,000   (net remittance)
```

### Receipt of post-dated cheque from customer
```
Dr. Notes Receivable      100,000
    Cr. Accounts Receivable         100,000
```
*Why:* PDC has a maturity date; disclose separately on the BS or in notes.

### Foreign currency revaluation gain (USD AR)
```
Dr. Accounts Receivable    50,000
    Cr. FX Gain                      50,000
```
*Why:* USD-denominated AR revalued at month-end EGP rate.

## Quality check on every entry

1. Does debit total = credit total?
2. Is each account on the correct side per its normal balance?
3. Is there a source document reference?
4. Is the date correct (transaction date, not entry date)?
5. Does the description tell a future analyst what happened?
