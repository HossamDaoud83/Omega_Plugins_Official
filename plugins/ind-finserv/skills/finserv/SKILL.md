---
name: finserv
description: Financial Services Industry skills — aml readiness, kyc program design, basel iii gap, payments modernization, and more. Apply when the engagement industry is financial services industry or the consultant references banking, insurance, fintech.
---

# FINSERV — Financial Services Industry

## Industry overview

**Code:** FINSERV
**Description:** Banking / insurance / fintech engagements — AML, KYC, Basel III, payments modernization, fraud programs.

---

## Skills index

| # | Skill | Command | Purpose |
|---|---|---|---|
| 1 | AML Readiness | `/omega-ind-finserv:aml-readiness` | Assess AML program maturity (transaction monitoring, sanctions screening, SAR filing) against FATF and local regulator expectations. |
| 2 | KYC Program Design | `/omega-ind-finserv:kyc-program` | Design or refresh KYC program: customer risk rating, EDD triggers, ongoing monitoring. |
| 3 | Basel III Gap | `/omega-ind-finserv:basel-iii-gap` | Map current capital, liquidity, and leverage ratios against Basel III requirements (CET1, LCR, NSFR). |
| 4 | Payments Modernization | `/omega-ind-finserv:payments-modernization` | Assess payment rails (ACH, RTP, ISO 20022) and design modernization roadmap. |
| 5 | Fraud Program | `/omega-ind-finserv:fraud-program` | Assess fraud detection program (rules + ML), false-positive rates, customer impact. |

---

## Skill 1: AML Readiness

### Command: `/omega-ind-finserv:aml-readiness`

### Purpose
Assess AML program maturity (transaction monitoring, sanctions screening, SAR filing) against FATF and local regulator expectations.

### Inputs required
```yaml
client:
  name: "Client Name"
  industry: "finserv"
context:
  in_scope: ["explicit scope items"]
  constraints: ["regulatory deadlines", "stakeholder commitments"]
references:
  - "Prior deliverable / regulator filings"
  - "Peer benchmarks"
```

### Methodology

1. **Frame.** Map the request to the relevant Financial Services Industry regulator / standard.
2. **Gather.** Pull current-state evidence — filings, prior audits, interviews.
3. **Score.** Apply the standard rubric (don't invent one).
4. **Synthesize.** Author deliverable with severity-ranked gaps + remediation plan.
5. **Validate.** Run `/omega:verify-quality` and address all flagged items.

### Output shape
A Omega-branded `AML Readiness` deliverable in `05_Deliverables_Final/`. Pyramid-Principle structured, sourced, and reviewed.

### Quality checklist
- AML findings reference FATF recommendation numbers and local regulator (FinCEN, FCA, MAS, SAMA, etc.)
- KYC program tiered by customer risk; EDD triggers documented
- Basel III ratios computed with explicit RWA methodology

---

## Skill 2: KYC Program Design

### Command: `/omega-ind-finserv:kyc-program`

### Purpose
Design or refresh KYC program: customer risk rating, EDD triggers, ongoing monitoring.

### Inputs required
```yaml
client:
  name: "Client Name"
  industry: "finserv"
context:
  in_scope: ["explicit scope items"]
  constraints: ["regulatory deadlines", "stakeholder commitments"]
references:
  - "Prior deliverable / regulator filings"
  - "Peer benchmarks"
```

### Methodology

1. **Frame.** Map the request to the relevant Financial Services Industry regulator / standard.
2. **Gather.** Pull current-state evidence — filings, prior audits, interviews.
3. **Score.** Apply the standard rubric (don't invent one).
4. **Synthesize.** Author deliverable with severity-ranked gaps + remediation plan.
5. **Validate.** Run `/omega:verify-quality` and address all flagged items.

### Output shape
A Omega-branded `KYC Program Design` deliverable in `05_Deliverables_Final/`. Pyramid-Principle structured, sourced, and reviewed.

### Quality checklist
- AML findings reference FATF recommendation numbers and local regulator (FinCEN, FCA, MAS, SAMA, etc.)
- KYC program tiered by customer risk; EDD triggers documented
- Basel III ratios computed with explicit RWA methodology

---

## Skill 3: Basel III Gap

### Command: `/omega-ind-finserv:basel-iii-gap`

### Purpose
Map current capital, liquidity, and leverage ratios against Basel III requirements (CET1, LCR, NSFR).

### Inputs required
```yaml
client:
  name: "Client Name"
  industry: "finserv"
context:
  in_scope: ["explicit scope items"]
  constraints: ["regulatory deadlines", "stakeholder commitments"]
references:
  - "Prior deliverable / regulator filings"
  - "Peer benchmarks"
```

### Methodology

1. **Frame.** Map the request to the relevant Financial Services Industry regulator / standard.
2. **Gather.** Pull current-state evidence — filings, prior audits, interviews.
3. **Score.** Apply the standard rubric (don't invent one).
4. **Synthesize.** Author deliverable with severity-ranked gaps + remediation plan.
5. **Validate.** Run `/omega:verify-quality` and address all flagged items.

### Output shape
A Omega-branded `Basel III Gap` deliverable in `05_Deliverables_Final/`. Pyramid-Principle structured, sourced, and reviewed.

### Quality checklist
- AML findings reference FATF recommendation numbers and local regulator (FinCEN, FCA, MAS, SAMA, etc.)
- KYC program tiered by customer risk; EDD triggers documented
- Basel III ratios computed with explicit RWA methodology

---

## Skill 4: Payments Modernization

### Command: `/omega-ind-finserv:payments-modernization`

### Purpose
Assess payment rails (ACH, RTP, ISO 20022) and design modernization roadmap.

### Inputs required
```yaml
client:
  name: "Client Name"
  industry: "finserv"
context:
  in_scope: ["explicit scope items"]
  constraints: ["regulatory deadlines", "stakeholder commitments"]
references:
  - "Prior deliverable / regulator filings"
  - "Peer benchmarks"
```

### Methodology

1. **Frame.** Map the request to the relevant Financial Services Industry regulator / standard.
2. **Gather.** Pull current-state evidence — filings, prior audits, interviews.
3. **Score.** Apply the standard rubric (don't invent one).
4. **Synthesize.** Author deliverable with severity-ranked gaps + remediation plan.
5. **Validate.** Run `/omega:verify-quality` and address all flagged items.

### Output shape
A Omega-branded `Payments Modernization` deliverable in `05_Deliverables_Final/`. Pyramid-Principle structured, sourced, and reviewed.

### Quality checklist
- AML findings reference FATF recommendation numbers and local regulator (FinCEN, FCA, MAS, SAMA, etc.)
- KYC program tiered by customer risk; EDD triggers documented
- Basel III ratios computed with explicit RWA methodology

---

## Skill 5: Fraud Program

### Command: `/omega-ind-finserv:fraud-program`

### Purpose
Assess fraud detection program (rules + ML), false-positive rates, customer impact.

### Inputs required
```yaml
client:
  name: "Client Name"
  industry: "finserv"
context:
  in_scope: ["explicit scope items"]
  constraints: ["regulatory deadlines", "stakeholder commitments"]
references:
  - "Prior deliverable / regulator filings"
  - "Peer benchmarks"
```

### Methodology

1. **Frame.** Map the request to the relevant Financial Services Industry regulator / standard.
2. **Gather.** Pull current-state evidence — filings, prior audits, interviews.
3. **Score.** Apply the standard rubric (don't invent one).
4. **Synthesize.** Author deliverable with severity-ranked gaps + remediation plan.
5. **Validate.** Run `/omega:verify-quality` and address all flagged items.

### Output shape
A Omega-branded `Fraud Program` deliverable in `05_Deliverables_Final/`. Pyramid-Principle structured, sourced, and reviewed.

### Quality checklist
- AML findings reference FATF recommendation numbers and local regulator (FinCEN, FCA, MAS, SAMA, etc.)
- KYC program tiered by customer risk; EDD triggers documented
- Basel III ratios computed with explicit RWA methodology

---


## Cross-skill workflows

```
Discovery → /omega-ind-finserv:aml-readiness → /omega-ind-finserv:kyc-program → Recommendations
```

## Integration with other Omega plugins

| Plugin | Integration point |
|---|---|
| `omega-core` | Cross-cutting skills + brain commands |
| `omega-iso` | Companion certification work |
| `omega-risk` | Industry risks roll into enterprise register |
| `omega-ai-regs` | Track regulatory horizon for this sector |

## Templates & artifacts

All deliverables use standard Omega branding via:
- `/doc-gen` for document generation
- `assets/omega-branding.json` for styling

| Skill | Primary artifact | Format |
|---|---|---|
| `/omega-ind-finserv:aml-readiness` | AML Readiness Report | DOCX/PDF |
| `/omega-ind-finserv:kyc-program` | KYC Program Design Report | DOCX/PDF |
| `/omega-ind-finserv:basel-iii-gap` | Basel III Gap Report | DOCX/PDF |
| `/omega-ind-finserv:payments-modernization` | Payments Modernization Report | DOCX/PDF |
| `/omega-ind-finserv:fraud-program` | Fraud Program Report | DOCX/PDF |
