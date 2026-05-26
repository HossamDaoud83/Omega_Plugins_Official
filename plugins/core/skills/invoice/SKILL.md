---
name: invoice
description: Generate invoices from milestones, track payments and aging
---

# Omega Invoice Generator

Generate professional invoices from engagement milestones and payment schedules.

## Skill Metadata

- **Name:** Omega Invoice Generator
- **Command:** `/invoice`
- **Category:** Financial Management
- **Version:** 1.0
- **Author:** Omega Business Consulting

---

## What This Skill Does

1. Generates invoices from completed milestones
2. Tracks payment status and aging
3. Calculates taxes (VAT) where applicable
4. Produces PDF invoices with Omega branding
5. Maintains invoice register for accounting

---

## When to Use

- Milestone completed and ready for billing
- Monthly retainer billing
- Expense reimbursement
- Final project billing

---

## Instructions for Claude

When `/invoice` is invoked:

### Step 1: Load Engagement Data

Read from `project.json`:
- Client name and address
- Budget and payment schedule
- Completed milestones

### Step 2: Identify Billable Items

Check `deliverables_tracker.json` for:
- Completed milestones with `client_approved: true`
- Milestones not yet invoiced

### Step 3: Generate Invoice

---

## Invoice Template

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│  [Omega LOGO]                                              INVOICE            │
│                                                                             │
│  Omega Consulting                                                       │
│  [Omega Address Line 1]                                                       │
│  [Omega Address Line 2]                                                       │
│  Tax ID: [XXX-XXX-XXX]                                                      │
│                                                                             │
│  ═══════════════════════════════════════════════════════════════════════    │
│                                                                             │
│  Invoice Number:    INV-[YYYY]-[NNN]                                        │
│  Invoice Date:      [Date]                                                  │
│  Due Date:          [Date + Payment Terms]                                  │
│  Payment Terms:     Net 30                                                  │
│                                                                             │
│  ─────────────────────────────────────────────────────────────────────────  │
│                                                                             │
│  BILL TO:                          PROJECT:                                 │
│  [Client Name]                     [Engagement Name]                        │
│  [Client Address Line 1]           Reference: [Engagement Code]             │
│  [Client Address Line 2]           PO Number: [If applicable]               │
│  [Client City, Country]                                                     │
│  Tax ID: [Client Tax ID]                                                    │
│                                                                             │
│  ═══════════════════════════════════════════════════════════════════════    │
│                                                                             │
│  DESCRIPTION                                              AMOUNT            │
│  ─────────────────────────────────────────────────────────────────────────  │
│                                                                             │
│  Professional Services - [Milestone Name]                                   │
│  Period: [Start Date] to [End Date]                                         │
│  Deliverables:                                                              │
│    • [Deliverable 1]                                                        │
│    • [Deliverable 2]                                                        │
│    • [Deliverable 3]                                                        │
│                                                                             │
│  Milestone Payment ([X]% of $[Total])              $[Amount]                │
│                                                                             │
│  ─────────────────────────────────────────────────────────────────────────  │
│                                                                             │
│  Expenses (per attached receipts)                                           │
│    • Travel - [Description]                        $[Amount]                │
│    • Materials - [Description]                     $[Amount]                │
│                                                                             │
│  ─────────────────────────────────────────────────────────────────────────  │
│                                                                             │
│                                          Subtotal:      $[Subtotal]         │
│                                          VAT (14%):     $[VAT]              │
│                                          ─────────────────────────          │
│                                          TOTAL DUE:     $[TOTAL]            │
│                                                                             │
│  ═══════════════════════════════════════════════════════════════════════    │
│                                                                             │
│  PAYMENT INFORMATION                                                        │
│                                                                             │
│  Bank:          [Bank Name]                                                 │
│  Account Name:  Omega Consulting                                        │
│  Account No:    [Account Number]                                            │
│  SWIFT/BIC:     [SWIFT Code]                                                │
│  IBAN:          [IBAN Number]                                               │
│                                                                             │
│  Reference:     INV-[YYYY]-[NNN]                                            │
│                                                                             │
│  ─────────────────────────────────────────────────────────────────────────  │
│                                                                             │
│  Thank you for your business.                                               │
│                                                                             │
│  Questions? Contact: finance@omega-consulting.local                                  │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Invoice Numbering

Format: `INV-[YYYY]-[NNN]`

- YYYY = Year
- NNN = Sequential number (001, 002, etc.)

Examples:
- INV-2026-001
- INV-2026-002

---

## Tax Calculation

| Region | Tax Type | Rate | Calculation |
|--------|----------|------|-------------|
| Egypt | VAT | 14% | Subtotal × 0.14 |
| UAE | VAT | 5% | Subtotal × 0.05 |
| Saudi Arabia | VAT | 15% | Subtotal × 0.15 |
| International | None | 0% | No tax |

---

## Invoice Register

Track all invoices in: `00_Engagement_Management/invoice_register.json`

```json
{
  "invoices": [
    {
      "invoice_number": "INV-2026-001",
      "client": "International Ceramics Manufacturing Company",
      "engagement": "MAR-BSF-2026-001",
      "milestone": "M01",
      "issue_date": "2026-02-15",
      "due_date": "2026-03-17",
      "subtotal": 17000,
      "tax_rate": 0.14,
      "tax_amount": 2380,
      "total": 19380,
      "currency": "USD",
      "status": "issued",
      "payment_date": null,
      "payment_amount": null,
      "notes": ""
    }
  ],
  "summary": {
    "total_invoiced": 17000,
    "total_paid": 0,
    "total_outstanding": 17000,
    "overdue_amount": 0
  }
}
```

---

## Invoice Status Workflow

```
DRAFT → ISSUED → SENT → PAID
                  ↓
               OVERDUE → ESCALATED → PAID/WRITTEN OFF
```

| Status | Description |
|--------|-------------|
| draft | Invoice created, not yet finalized |
| issued | Invoice finalized, ready to send |
| sent | Invoice sent to client |
| paid | Payment received |
| overdue | Past due date, not paid |
| escalated | Sent to collections/legal |
| written_off | Uncollectible, written off |

---

## Step 4: Output Invoice

### File Naming
```
INV-[YYYY]-[NNN]_[Client]_[Milestone].pdf
```

### Output Location
```
06_Client_Communications/invoices/
├── INV-2026-001_IntlCeramics_M01.pdf
├── INV-2026-002_IntlCeramics_M02.pdf
└── invoice_register.json
```

---

## Step 5: Display Summary

```
═══════════════════════════════════════════════════════════════════════════════
INVOICE GENERATED
═══════════════════════════════════════════════════════════════════════════════

Invoice Number:   INV-2026-001
Client:           International Ceramics Manufacturing Company
Engagement:       Beni Suef Dry Port BOT Advisory (MAR-BSF-2026-001)

─────────────────────────────────────────────────────────────────────────────
INVOICE DETAILS
─────────────────────────────────────────────────────────────────────────────

Milestone:        M01 - Discovery & Gap Analysis Complete
Period:           2026-01-28 to 2026-02-15
Deliverables:     D001, D002, D003

┌─────────────────────────────────────────────────────────────────────────────┐
│ Professional Fees (20% of $85,000)              $17,000.00                  │
│ Expenses                                        $     0.00                  │
│ ─────────────────────────────────────────────────────────────────────────── │
│ Subtotal                                        $17,000.00                  │
│ VAT (14%)                                       $ 2,380.00                  │
│ ─────────────────────────────────────────────────────────────────────────── │
│ TOTAL DUE                                       $19,380.00                  │
└─────────────────────────────────────────────────────────────────────────────┘

Issue Date:       2026-02-15
Due Date:         2026-03-17 (Net 30)
Status:           ISSUED

─────────────────────────────────────────────────────────────────────────────
OUTPUT
─────────────────────────────────────────────────────────────────────────────

✅ Invoice PDF:    06_Client_Communications/invoices/INV-2026-001.pdf
✅ Register Updated: invoice_register.json

─────────────────────────────────────────────────────────────────────────────
NEXT STEPS
─────────────────────────────────────────────────────────────────────────────

1. Review invoice for accuracy
2. Send to client: [Client Email]
3. Update status to 'sent' after sending
4. Follow up if not paid by 2026-03-17

═══════════════════════════════════════════════════════════════════════════════
```

---

## Payment Tracking Commands

| Command | Purpose |
|---------|---------|
| `/invoice` | Generate new invoice |
| `/invoice status` | Show invoice aging report |
| `/invoice mark-paid INV-XXXX` | Mark invoice as paid |
| `/invoice reminder INV-XXXX` | Generate payment reminder |

---

## Aging Report

```
═══════════════════════════════════════════════════════════════════════════════
INVOICE AGING REPORT
As of: 2026-02-02
═══════════════════════════════════════════════════════════════════════════════

┌────────────────┬───────────┬───────────┬───────────┬───────────┬───────────┐
│ Category       │ Current   │ 1-30 Days │ 31-60 Days│ 61-90 Days│ 90+ Days  │
├────────────────┼───────────┼───────────┼───────────┼───────────┼───────────┤
│ Amount         │ $17,000   │ $0        │ $0        │ $0        │ $0        │
│ Invoices       │ 1         │ 0         │ 0         │ 0         │ 0         │
└────────────────┴───────────┴───────────┴───────────┴───────────┴───────────┘

Total Outstanding: $17,000
Total Overdue:     $0

INVOICE DETAILS:

│ Invoice     │ Client              │ Amount    │ Due Date   │ Status   │ Days │
├─────────────┼─────────────────────┼───────────┼────────────┼──────────┼──────┤
│ INV-2026-001│ Intl Ceramics       │ $19,380   │ 2026-03-17 │ Issued   │ -43  │

═══════════════════════════════════════════════════════════════════════════════
```

---

## Integration with Budget Tracking

When invoice is marked as paid:
1. Update `invoice_register.json`
2. Update `project.json` budget consumed
3. Update `session_state.json` budget tracking

```json
// session_state.json budget section updates
{
  "budget": {
    "total": 90000,
    "consumed": 17000,  // Updated from 0
    "remaining": 73000, // Updated from 90000
    "invoiced": 17000,
    "paid": 17000
  }
}
```

---

*Skill Version: 1.0*
*Last Updated: 2026-02-02*
