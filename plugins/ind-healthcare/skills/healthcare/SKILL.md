---
name: healthcare
description: Healthcare Industry skills — hipaa gap, hl7-fhir readiness, his/emr assessment, clinical workflow redesign, and more. Apply when the engagement industry is healthcare industry or the consultant references healthcare, HIS, EMR.
---

# HEALTHCARE — Healthcare Industry

## Industry overview

**Code:** HEALTHCARE
**Description:** Healthcare provider engagements — HIS/EMR readiness, HIPAA gap, HL7-FHIR integration, clinical workflow redesign, payer-mix economics.

---

## Skills index

| # | Skill | Command | Purpose |
|---|---|---|---|
| 1 | HIPAA Gap | `/omega-ind-healthcare:hipaa-gap` | Map current PHI handling against HIPAA Privacy + Security Rule; identify gaps and remediation plan. |
| 2 | HL7-FHIR Readiness | `/omega-ind-healthcare:hl7-fhir-readiness` | Assess interoperability readiness for HL7 v2 / FHIR R4; gap to USCDI requirements. |
| 3 | HIS/EMR Assessment | `/omega-ind-healthcare:his-emr-assessment` | Evaluate HIS/EMR fit, clinical adoption, workflow integration; identify upgrade or replace decision. |
| 4 | Clinical Workflow Redesign | `/omega-ind-healthcare:clinical-workflow` | Map clinician journey; identify documentation burden, cognitive load, and redesign opportunities. |
| 5 | Payer-Mix Analysis | `/omega-ind-healthcare:payer-mix` | Analyze payer mix and reimbursement economics; recommend contracting strategy. |

---

## Skill 1: HIPAA Gap

### Command: `/omega-ind-healthcare:hipaa-gap`

### Purpose
Map current PHI handling against HIPAA Privacy + Security Rule; identify gaps and remediation plan.

### Inputs required
```yaml
client:
  name: "Client Name"
  industry: "healthcare"
context:
  in_scope: ["explicit scope items"]
  constraints: ["regulatory deadlines", "stakeholder commitments"]
references:
  - "Prior deliverable / regulator filings"
  - "Peer benchmarks"
```

### Methodology

1. **Frame.** Map the request to the relevant Healthcare Industry regulator / standard.
2. **Gather.** Pull current-state evidence — filings, prior audits, interviews.
3. **Score.** Apply the standard rubric (don't invent one).
4. **Synthesize.** Author deliverable with severity-ranked gaps + remediation plan.
5. **Validate.** Run `/omega:verify-quality` and address all flagged items.

### Output shape
A Omega-branded `HIPAA Gap` deliverable in `05_Deliverables_Final/`. Pyramid-Principle structured, sourced, and reviewed.

### Quality checklist
- PHI handling findings cite specific HIPAA rule (164.312, 164.502, etc.)
- HL7-FHIR assessments cite USCDI version and specific resources
- Clinical workflow redesigns reduce documentation time without reducing safety

---

## Skill 2: HL7-FHIR Readiness

### Command: `/omega-ind-healthcare:hl7-fhir-readiness`

### Purpose
Assess interoperability readiness for HL7 v2 / FHIR R4; gap to USCDI requirements.

### Inputs required
```yaml
client:
  name: "Client Name"
  industry: "healthcare"
context:
  in_scope: ["explicit scope items"]
  constraints: ["regulatory deadlines", "stakeholder commitments"]
references:
  - "Prior deliverable / regulator filings"
  - "Peer benchmarks"
```

### Methodology

1. **Frame.** Map the request to the relevant Healthcare Industry regulator / standard.
2. **Gather.** Pull current-state evidence — filings, prior audits, interviews.
3. **Score.** Apply the standard rubric (don't invent one).
4. **Synthesize.** Author deliverable with severity-ranked gaps + remediation plan.
5. **Validate.** Run `/omega:verify-quality` and address all flagged items.

### Output shape
A Omega-branded `HL7-FHIR Readiness` deliverable in `05_Deliverables_Final/`. Pyramid-Principle structured, sourced, and reviewed.

### Quality checklist
- PHI handling findings cite specific HIPAA rule (164.312, 164.502, etc.)
- HL7-FHIR assessments cite USCDI version and specific resources
- Clinical workflow redesigns reduce documentation time without reducing safety

---

## Skill 3: HIS/EMR Assessment

### Command: `/omega-ind-healthcare:his-emr-assessment`

### Purpose
Evaluate HIS/EMR fit, clinical adoption, workflow integration; identify upgrade or replace decision.

### Inputs required
```yaml
client:
  name: "Client Name"
  industry: "healthcare"
context:
  in_scope: ["explicit scope items"]
  constraints: ["regulatory deadlines", "stakeholder commitments"]
references:
  - "Prior deliverable / regulator filings"
  - "Peer benchmarks"
```

### Methodology

1. **Frame.** Map the request to the relevant Healthcare Industry regulator / standard.
2. **Gather.** Pull current-state evidence — filings, prior audits, interviews.
3. **Score.** Apply the standard rubric (don't invent one).
4. **Synthesize.** Author deliverable with severity-ranked gaps + remediation plan.
5. **Validate.** Run `/omega:verify-quality` and address all flagged items.

### Output shape
A Omega-branded `HIS/EMR Assessment` deliverable in `05_Deliverables_Final/`. Pyramid-Principle structured, sourced, and reviewed.

### Quality checklist
- PHI handling findings cite specific HIPAA rule (164.312, 164.502, etc.)
- HL7-FHIR assessments cite USCDI version and specific resources
- Clinical workflow redesigns reduce documentation time without reducing safety

---

## Skill 4: Clinical Workflow Redesign

### Command: `/omega-ind-healthcare:clinical-workflow`

### Purpose
Map clinician journey; identify documentation burden, cognitive load, and redesign opportunities.

### Inputs required
```yaml
client:
  name: "Client Name"
  industry: "healthcare"
context:
  in_scope: ["explicit scope items"]
  constraints: ["regulatory deadlines", "stakeholder commitments"]
references:
  - "Prior deliverable / regulator filings"
  - "Peer benchmarks"
```

### Methodology

1. **Frame.** Map the request to the relevant Healthcare Industry regulator / standard.
2. **Gather.** Pull current-state evidence — filings, prior audits, interviews.
3. **Score.** Apply the standard rubric (don't invent one).
4. **Synthesize.** Author deliverable with severity-ranked gaps + remediation plan.
5. **Validate.** Run `/omega:verify-quality` and address all flagged items.

### Output shape
A Omega-branded `Clinical Workflow Redesign` deliverable in `05_Deliverables_Final/`. Pyramid-Principle structured, sourced, and reviewed.

### Quality checklist
- PHI handling findings cite specific HIPAA rule (164.312, 164.502, etc.)
- HL7-FHIR assessments cite USCDI version and specific resources
- Clinical workflow redesigns reduce documentation time without reducing safety

---

## Skill 5: Payer-Mix Analysis

### Command: `/omega-ind-healthcare:payer-mix`

### Purpose
Analyze payer mix and reimbursement economics; recommend contracting strategy.

### Inputs required
```yaml
client:
  name: "Client Name"
  industry: "healthcare"
context:
  in_scope: ["explicit scope items"]
  constraints: ["regulatory deadlines", "stakeholder commitments"]
references:
  - "Prior deliverable / regulator filings"
  - "Peer benchmarks"
```

### Methodology

1. **Frame.** Map the request to the relevant Healthcare Industry regulator / standard.
2. **Gather.** Pull current-state evidence — filings, prior audits, interviews.
3. **Score.** Apply the standard rubric (don't invent one).
4. **Synthesize.** Author deliverable with severity-ranked gaps + remediation plan.
5. **Validate.** Run `/omega:verify-quality` and address all flagged items.

### Output shape
A Omega-branded `Payer-Mix Analysis` deliverable in `05_Deliverables_Final/`. Pyramid-Principle structured, sourced, and reviewed.

### Quality checklist
- PHI handling findings cite specific HIPAA rule (164.312, 164.502, etc.)
- HL7-FHIR assessments cite USCDI version and specific resources
- Clinical workflow redesigns reduce documentation time without reducing safety

---


## Cross-skill workflows

```
Discovery → /omega-ind-healthcare:hipaa-gap → /omega-ind-healthcare:hl7-fhir-readiness → Recommendations
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
| `/omega-ind-healthcare:hipaa-gap` | HIPAA Gap Report | DOCX/PDF |
| `/omega-ind-healthcare:hl7-fhir-readiness` | HL7-FHIR Readiness Report | DOCX/PDF |
| `/omega-ind-healthcare:his-emr-assessment` | HIS/EMR Assessment Report | DOCX/PDF |
| `/omega-ind-healthcare:clinical-workflow` | Clinical Workflow Redesign Report | DOCX/PDF |
| `/omega-ind-healthcare:payer-mix` | Payer-Mix Analysis Report | DOCX/PDF |
