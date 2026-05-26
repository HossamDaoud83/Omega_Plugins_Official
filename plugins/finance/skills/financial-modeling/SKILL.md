---
name: financial-modeling
description: Build and review three-statement, DCF, LBO, and project-finance models. Use when an engagement needs structured financial modeling, model audit, or assumption documentation against banking conventions.
---

# Financial Modeling

Structured approach to building defensible financial models for consulting deliverables.

## When to use

- Three-statement models (P&L + Balance Sheet + Cash Flow)
- DCF valuation (enterprise value, equity value, sensitivity)
- LBO models (M&A, leveraged transactions, returns analysis)
- Project finance models (CFADS, DSCR, debt sizing, equity IRR)
- Model audits (peer review of client-provided models)

## Modeling principles (Omega standards)

1. **Inputs separated from calculations** — colored cells (blue inputs, black calcs, green outputs)
2. **One formula per row, copied across** — no hard-coding mid-formula
3. **Named ranges for key drivers** — readable formulas
4. **Sign convention consistent** — outflows negative, inflows positive
5. **Sources documented** — every input has a comment with source and date
6. **Sensitivity-ready** — all key drivers exposed in the inputs sheet
7. **Audit trail** — version history at the top of the model

## Standard tabs

| Tab | Purpose |
|---|---|
| Cover | Project name, version, author, date, contact |
| Assumptions | All inputs (CAPEX, OPEX, prices, volumes, financing) |
| Calcs | Year-by-year P&L, BS, CF (or CFADS for project finance) |
| Outputs | NPV, IRR, payback, DSCR, key ratios |
| Sensitivity | Tornado data, scenario table |
| Charts | Output visualizations (linked to outputs) |

## Three-statement integrity checks

- [ ] Net income flows to Retained Earnings on BS
- [ ] CapEx flows to PP&E on BS, depreciation on P&L, investing CF
- [ ] Debt issued/repaid flows to BS Debt and financing CF
- [ ] BS balances every year (Assets = Liabilities + Equity)
- [ ] Cash on BS = Cash on CF statement
- [ ] EBITDA → Net Income reconciliation visible

## Project finance specifics

- **CFADS** — Cash Flow Available for Debt Service = EBITDA – Tax – Working Capital – CapEx
- **DSCR** — CFADS / (Interest + Principal); track yearly, report minimum
- **LLCR / PLCR** — Loan Life Cover Ratio / Project Life Cover Ratio
- **Debt sculpting** — repayment schedule shaped to maintain target DSCR

## Slash commands

- `/omega-fin:sensitivity` — exercise the model under sensitivity stress
- `/omega-fin:scenarios` — compare discrete cases
- `/omega-fin:breakeven` — identify covenant breach thresholds

## Quality checklist

- [ ] Cover page filled (project, version, date, author)
- [ ] All inputs sourced with comments
- [ ] Three-statement integrity checks pass
- [ ] Outputs match agreed base case
- [ ] At least 3 scenarios modeled
- [ ] Charts use Omega branding
- [ ] Peer reviewed (initials and date on cover)

## References

- `plugins/core/assets/Omega_METHODOLOGY.md` — quality standards
- `plugins/finance/skills/sensitivity-analysis/SKILL.md` — companion skill


---

## Additional Skill: working-capital-optimization

### Command: `/omega-skills:working-capital-optimization` (v4.2.1)

### Purpose
Optimize working capital across receivables, inventory, payables; quantify cash release.

### Inputs required
```yaml
client:
  name: "Client Name"
context:
  scope: "in-scope description"
  constraints: ["regulatory / commercial constraints"]
```

### Methodology
1. Frame the request against Financial Advisory domain conventions.
2. Pull required inputs from engagement brain and external sources.
3. Apply the working-capital-optimization method using the relevant subagent.
4. Synthesize into deliverable with recommendations + risks.
5. Validate via `/omega:verify-quality`.

### Output shape
Omega-branded working-capital-optimization deliverable in `05_Deliverables_Final/`.

### Quality checklist
- Pyramid Principle structure
- Source citations on all data
- Quantified impact where the analysis supports it


---

## Additional Skill: capital-allocation

### Command: `/omega-skills:capital-allocation` (v4.2.1)

### Purpose
Frame capital allocation choices: organic growth, M&A, buybacks, dividends; ROIC threshold.

### Inputs required
```yaml
client:
  name: "Client Name"
context:
  scope: "in-scope description"
  constraints: ["regulatory / commercial constraints"]
```

### Methodology
1. Frame the request against Financial Advisory domain conventions.
2. Pull required inputs from engagement brain and external sources.
3. Apply the capital-allocation method using the relevant subagent.
4. Synthesize into deliverable with recommendations + risks.
5. Validate via `/omega:verify-quality`.

### Output shape
Omega-branded capital-allocation deliverable in `05_Deliverables_Final/`.

### Quality checklist
- Pyramid Principle structure
- Source citations on all data
- Quantified impact where the analysis supports it
