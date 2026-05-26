---
name: analyst-toolkit
description: Analyst-grade Excel techniques, loan amortization schedule construction, and Omega-standard PowerPoint deliverable craft. Use when producing client-ready spreadsheets and presentations, building amortization schedules for term sheets or credit memos, or coaching junior analysts on deliverable quality.
---

# Analyst Toolkit

The craft layer — how a Omega deliverable looks, reads, and survives client scrutiny.

## When to use

- Building a new model and want Omega Excel conventions enforced from line 1
- Producing a loan amortization schedule for a term sheet, credit memo, or feasibility appendix
- Drafting a CFO/board-ready PowerPoint from raw analytical output
- Reviewing a junior analyst's deliverable before client release
- Setting up a reusable template (model, deck, ratio dashboard)

## Section 1 — Excel craft

### Cell color convention (Omega standard)

| Color | Meaning |
|---|---|
| Blue font | Hard-coded input (assumption) |
| Black font | Formula / calculation |
| Green font | Linked from another sheet |
| Red font | Warning, override, or check |
| Yellow fill | Cell needs review |
| Gray fill | Section header / non-editable |

### Sheet structure (Omega standard)

| Order | Sheet | Purpose |
|---|---|---|
| 1 | Cover | Project name, version, author, date, change log, contact |
| 2 | Contents | Hyperlinked index of all sheets |
| 3 | Assumptions | All inputs in one place — blue cells |
| 4 | Calcs | Detailed calculations, year by year |
| 5 | Outputs | Summary metrics — NPV, IRR, DSCR, ratios |
| 6 | Sensitivity | Tornado data, scenario table |
| 7 | Charts | Visual outputs linked to outputs |
| 8 | Checks | Three-statement integrity tests |
| 9 | Notes | Methodology, sources, change log |

### Top 20 functions every Omega analyst must master

| Function | Use case |
|---|---|
| `SUMIFS` / `COUNTIFS` / `AVERAGEIFS` | Conditional aggregation |
| `INDEX` + `MATCH` | Two-way lookup (replaces VLOOKUP) |
| `XLOOKUP` | Modern lookup (Excel 365 / 2021+) |
| `IFERROR` | Trap #DIV/0!, #N/A, #VALUE! |
| `IFS` | Multi-condition without nested IFs |
| `LET` | Reusable sub-expressions (Excel 365+) |
| `EOMONTH` / `EDATE` | Month-end roll forward |
| `YEARFRAC` | Day-count fractions for interest |
| `NPV` / `XNPV` | Net present value (XNPV for irregular dates) |
| `IRR` / `XIRR` / `MIRR` | Internal rate of return |
| `PMT` / `IPMT` / `PPMT` | Loan amortization atoms |
| `CUMIPMT` / `CUMPRINC` | Cumulative interest / principal |
| `OFFSET` / `INDIRECT` | Dynamic ranges (use sparingly — volatile) |
| `SUMPRODUCT` | Weighted sums, array math without Ctrl-Shift-Enter |
| `CHOOSE` | Scenario switching |
| `TEXT` | Format numbers as text for labels |
| `LEN` / `TRIM` / `SUBSTITUTE` | String cleanup on imported data |
| `DATEVALUE` / `VALUE` | Convert imported text to numbers/dates |
| `FILTER` / `SORT` / `UNIQUE` | Dynamic arrays (Excel 365+) |
| `LAMBDA` | Custom reusable functions (Excel 365+) |

### Five formatting rules (non-negotiable)

1. **Numbers right-aligned**, units in column header (`EGP M` or `%`)
2. **Negative numbers in parentheses**, red font: `#,##0;(#,##0)` and red conditional
3. **Years across, line items down** — no exception
4. **Group rows by section** with subtotals; freeze top row and left column
5. **Print area defined** on every output sheet; one page wide

### Productivity shortcuts (memorize)

| Shortcut | Action |
|---|---|
| Ctrl + ↓ / Ctrl + → | Jump to end of data range |
| Ctrl + Shift + ↓ | Select to end of column |
| F4 | Toggle absolute reference ($A$1 → A$1 → $A1 → A1) |
| Ctrl + ; | Insert today's date |
| Alt + = | AutoSum |
| Ctrl + 1 | Format cells dialog |
| Ctrl + Shift + L | Toggle filters |
| Alt + H + O + I | Auto-fit column width |
| F2 | Edit current cell |
| Ctrl + [ | Jump to source of formula |
| Ctrl + ` | Show all formulas |

## Section 2 — Loan amortization

### The PMT formula (level annuity)

For a fixed-rate loan with equal periodic payments:
```
PMT = P × [r(1+r)^n] / [(1+r)^n − 1]

where:
  P = principal
  r = periodic interest rate (annual rate / payments per year)
  n = number of payments
```

### Excel implementation

```excel
=PMT(rate/12, term_months, -principal)
```
*Sign convention:* principal is negative (cash out from lender), PMT comes out positive (cash in).

### Amortization table structure

| Period | Opening Balance | Payment | Interest | Principal | Closing Balance |
|---|---|---|---|---|---|
| 1 | P | PMT | OB × r | PMT − Interest | OB − Principal |
| 2 | prior CB | PMT | OB × r | PMT − Interest | OB − Principal |
| ... | ... | PMT | ... | ... | ... |
| n | small | PMT | tiny | full repayment | 0 |

### Worked example — EGP 10 M loan, 10 % annual, 60 monthly payments

```
P  = 10,000,000
r  = 10% / 12 = 0.833 %
n  = 60
PMT = 212,470 EGP/month

Total payments = 60 × 212,470 = 12,748,200
Total interest paid = 12,748,200 − 10,000,000 = 2,748,200
```

### Common amortization variants Omega encounters

| Variant | Mechanic |
|---|---|
| **Level annuity** | Equal payments throughout — most consumer / SME loans |
| **Level principal** | Equal principal; declining interest; declining total payment |
| **Bullet** | Interest-only with principal at maturity |
| **Balloon** | Level pay early, large final payment |
| **Sculpted (project finance)** | Repayment shaped to maintain target DSCR each year |
| **Grace period** | Interest-only initial period, then amortizing |
| **Step-up / step-down** | Payment changes at defined milestones |

### Project finance debt sculpting

For project finance, the schedule is reverse-engineered:
1. Forecast CFADS for each year
2. Set target DSCR (e.g. 1.30x)
3. Maximum allowable debt service = CFADS / Target DSCR
4. Allocate to interest first, then to principal
5. Solve for total debt that exactly amortizes given the schedule

The Python script `amortization_schedule.py` handles all variants; `/omega-fin:amortization` is the slash command.

## Section 3 — Analyst presentation craft

### The Pyramid Principle (Barbara Minto) — Omega standard

Every slide and every deck follows the pyramid:

```
                    THE ANSWER
                    (one sentence)
                         │
        ┌────────────────┼────────────────┐
   Supporting       Supporting       Supporting
   argument 1       argument 2       argument 3
        │                │                │
   evidence         evidence         evidence
```

The answer goes at the top. Three supporting points. Evidence beneath each. Never make a client scroll to the conclusion.

### Slide types for a financial deliverable

| Slide | Purpose | Maximum content |
|---|---|---|
| Cover | Project, client, version, date | Title + logo |
| Executive Summary | The one-page answer | 3-5 bullets, headline metric |
| Context | Why we're here | 1 paragraph + situation diagram |
| Approach | How we worked | 4-6 step diagram |
| Findings | Each major finding | Headline + 3 supports + chart |
| Financial summary | Key numbers | 1 table, 1 chart |
| Sensitivity | Bankability or risk | Tornado or scenario table |
| Recommendations | What to do | Prioritized list with owners |
| Next steps | 30/60/90 days | Timeline diagram |
| Appendix | Supporting detail | As needed |

### Headline-style titles (mandatory)

❌ "Financial Performance"
✅ "EBITDA margin compressed 530 bps over 3 years, driven by COGS inflation"

❌ "Sensitivity Analysis"
✅ "Project remains bankable in 9 of 10 stress scenarios; tariff is the dominant driver"

The title is the message. The slide body is the evidence.

### Chart selection guide

| Use case | Chart | Notes |
|---|---|---|
| Comparing categories | Bar (horizontal) | Sort descending; never use pie |
| Showing change over time | Line | Indexed if multiple series at different scales |
| Composition of total | Stacked bar (vertical) | Limit to 4-5 segments |
| Two-variable relationship | Scatter | Show trend line if applicable |
| Sensitivity ranking | Tornado | One-sided horizontal bars, ranked |
| Probability distribution | Histogram | Mark P10 / P50 / P80 |
| Geographic data | Map | Only if location is the key insight |

**Pie charts are banned in Omega deliverables.** Use bar charts. Always.

### Color discipline

Use only Omega brand palette (see `plugins/core/assets/omega-branding.json` or equivalent). Never use Excel/PowerPoint default colors.

- Primary: deep navy
- Secondary: gold
- Accent: muted red (for negatives / warnings only)
- Grays for text and gridlines
- Never more than 3 colors on a single chart unless absolutely necessary

### Speaker notes (mandatory for client decks)

Every slide carries 2-4 lines of speaker notes:
1. The headline restated
2. Key supporting evidence
3. The transition to the next slide

This is what differentiates a Omega deck from an analyst's working draft.

## Section 4 — Omega deliverable quality gate

Before sending any analyst deliverable to a client:

- [ ] Cover page complete (client, project, version, date, author, reviewer)
- [ ] Executive summary on page 1
- [ ] All headlines are message titles, not topic labels
- [ ] All charts use Omega palette
- [ ] All tables right-aligned numerically, units in headers
- [ ] No spelling/grammar errors (run a check)
- [ ] All assumptions sourced (date, source, retrieval method)
- [ ] Three-statement integrity verified if a model is included
- [ ] Sensitivity covered if a recommendation is made
- [ ] Two-person review: author initials + reviewer initials on cover
- [ ] File naming: `CLIENT_PROJECT_DELIVERABLE_vX.Y_YYYYMMDD.{ext}`

## See also

- `references/excel-techniques.md` — 20 high-leverage techniques
- `references/loan-amortization.md` — formulas + variant catalog
- `references/analyst-presentation-template.md` — slide-by-slide skeleton
- `plugins/finance/scripts/amortization_schedule.py` — automation
- `/omega-fin:amortization` — slash command
