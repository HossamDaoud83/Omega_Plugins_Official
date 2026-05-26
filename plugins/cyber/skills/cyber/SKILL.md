---
name: cyber
description: Cybersecurity skills — maturity assessment, iso 27001 gap, threat modeling, secure-by-design review, and more. Apply when the engagement scope includes cybersecurity work or the consultant references cybersecurity, ISO 27001, NIST CSF.
---

# CYBER — Cybersecurity

## Capability overview

**Code:** CYBER
**Full name:** Cybersecurity
**Description:** Advisory across security strategy, ISO 27001 readiness, threat modeling, secure-by-design reviews, and security operations maturity.

---

## Skills index

| # | Skill | Command | Purpose |
|---|---|---|---|
| 1 | Maturity Assessment | `/omega-cyber:maturity-assess` | Score the client's security capabilities against NIST CSF / ISO 27001 controls. |
| 2 | ISO 27001 Gap | `/omega-cyber:iso27001-gap` | Map current controls to ISO 27001 Annex A; produce a gap register and remediation plan. |
| 3 | Threat Modeling | `/omega-cyber:threat-model` | Run STRIDE / PASTA on a target system; produce threat register + mitigations. |
| 4 | Secure-by-Design Review | `/omega-cyber:secure-by-design` | Architectural review for new systems against secure-by-design principles. |
| 5 | Incident Runbook | `/omega-cyber:incident-runbook` | Author / refresh incident response runbooks with severity tiers and playbooks. |
| 6 | Vendor Risk Assessment | `/omega-cyber:vendor-risk` | Score third-party vendors on security posture using CAIQ / SIG Lite. |

---

## Skill 1: Maturity Assessment

### Command: `/omega-cyber:maturity-assess`

### Purpose
Score the client's security capabilities against NIST CSF / ISO 27001 controls.

### Inputs required
```yaml
client:
  name: "Client Name"
  industry: "Industry"
context:
  scope: "in-scope description"
  constraints: ["constraint 1", "constraint 2"]
references:
  - "Prior deliverable / document name"
  - "External benchmark / source"
```

### Methodology

1. **Frame.** Translate client request into a structured problem statement and hypotheses.
2. **Gather.** Pull data from engagement brain, client documents, and external sources.
3. **Analyze.** Apply the Maturity Assessment method using domain frameworks (see Frameworks section of the agent).
4. **Synthesize.** Produce primary deliverable with recommendations, evidence, and risks.
5. **Validate.** Run `/omega:verify-quality` and pass through Every control gap mapped to a CIS Critical Security Control or ISO 27001 Annex A clause.

### Output shape
A Omega-branded `Maturity Assessment` deliverable in `05_Deliverables_Final/`. Pyramid-Principle structured, sourced, and reviewed.

### Quality checklist
- Every control gap mapped to a CIS Critical Security Control or ISO 27001 Annex A clause
- Threat models name explicit assets, threat actors, and attack vectors
- Vendor risk scores cite the questionnaire (CAIQ row, SIG Lite section) used to derive them

---

## Skill 2: ISO 27001 Gap

### Command: `/omega-cyber:iso27001-gap`

### Purpose
Map current controls to ISO 27001 Annex A; produce a gap register and remediation plan.

### Inputs required
```yaml
client:
  name: "Client Name"
  industry: "Industry"
context:
  scope: "in-scope description"
  constraints: ["constraint 1", "constraint 2"]
references:
  - "Prior deliverable / document name"
  - "External benchmark / source"
```

### Methodology

1. **Frame.** Translate client request into a structured problem statement and hypotheses.
2. **Gather.** Pull data from engagement brain, client documents, and external sources.
3. **Analyze.** Apply the ISO 27001 Gap method using domain frameworks (see Frameworks section of the agent).
4. **Synthesize.** Produce primary deliverable with recommendations, evidence, and risks.
5. **Validate.** Run `/omega:verify-quality` and pass through Every control gap mapped to a CIS Critical Security Control or ISO 27001 Annex A clause.

### Output shape
A Omega-branded `ISO 27001 Gap` deliverable in `05_Deliverables_Final/`. Pyramid-Principle structured, sourced, and reviewed.

### Quality checklist
- Every control gap mapped to a CIS Critical Security Control or ISO 27001 Annex A clause
- Threat models name explicit assets, threat actors, and attack vectors
- Vendor risk scores cite the questionnaire (CAIQ row, SIG Lite section) used to derive them

---

## Skill 3: Threat Modeling

### Command: `/omega-cyber:threat-model`

### Purpose
Run STRIDE / PASTA on a target system; produce threat register + mitigations.

### Inputs required
```yaml
client:
  name: "Client Name"
  industry: "Industry"
context:
  scope: "in-scope description"
  constraints: ["constraint 1", "constraint 2"]
references:
  - "Prior deliverable / document name"
  - "External benchmark / source"
```

### Methodology

1. **Frame.** Translate client request into a structured problem statement and hypotheses.
2. **Gather.** Pull data from engagement brain, client documents, and external sources.
3. **Analyze.** Apply the Threat Modeling method using domain frameworks (see Frameworks section of the agent).
4. **Synthesize.** Produce primary deliverable with recommendations, evidence, and risks.
5. **Validate.** Run `/omega:verify-quality` and pass through Every control gap mapped to a CIS Critical Security Control or ISO 27001 Annex A clause.

### Output shape
A Omega-branded `Threat Modeling` deliverable in `05_Deliverables_Final/`. Pyramid-Principle structured, sourced, and reviewed.

### Quality checklist
- Every control gap mapped to a CIS Critical Security Control or ISO 27001 Annex A clause
- Threat models name explicit assets, threat actors, and attack vectors
- Vendor risk scores cite the questionnaire (CAIQ row, SIG Lite section) used to derive them

---

## Skill 4: Secure-by-Design Review

### Command: `/omega-cyber:secure-by-design`

### Purpose
Architectural review for new systems against secure-by-design principles.

### Inputs required
```yaml
client:
  name: "Client Name"
  industry: "Industry"
context:
  scope: "in-scope description"
  constraints: ["constraint 1", "constraint 2"]
references:
  - "Prior deliverable / document name"
  - "External benchmark / source"
```

### Methodology

1. **Frame.** Translate client request into a structured problem statement and hypotheses.
2. **Gather.** Pull data from engagement brain, client documents, and external sources.
3. **Analyze.** Apply the Secure-by-Design Review method using domain frameworks (see Frameworks section of the agent).
4. **Synthesize.** Produce primary deliverable with recommendations, evidence, and risks.
5. **Validate.** Run `/omega:verify-quality` and pass through Every control gap mapped to a CIS Critical Security Control or ISO 27001 Annex A clause.

### Output shape
A Omega-branded `Secure-by-Design Review` deliverable in `05_Deliverables_Final/`. Pyramid-Principle structured, sourced, and reviewed.

### Quality checklist
- Every control gap mapped to a CIS Critical Security Control or ISO 27001 Annex A clause
- Threat models name explicit assets, threat actors, and attack vectors
- Vendor risk scores cite the questionnaire (CAIQ row, SIG Lite section) used to derive them

---

## Skill 5: Incident Runbook

### Command: `/omega-cyber:incident-runbook`

### Purpose
Author / refresh incident response runbooks with severity tiers and playbooks.

### Inputs required
```yaml
client:
  name: "Client Name"
  industry: "Industry"
context:
  scope: "in-scope description"
  constraints: ["constraint 1", "constraint 2"]
references:
  - "Prior deliverable / document name"
  - "External benchmark / source"
```

### Methodology

1. **Frame.** Translate client request into a structured problem statement and hypotheses.
2. **Gather.** Pull data from engagement brain, client documents, and external sources.
3. **Analyze.** Apply the Incident Runbook method using domain frameworks (see Frameworks section of the agent).
4. **Synthesize.** Produce primary deliverable with recommendations, evidence, and risks.
5. **Validate.** Run `/omega:verify-quality` and pass through Every control gap mapped to a CIS Critical Security Control or ISO 27001 Annex A clause.

### Output shape
A Omega-branded `Incident Runbook` deliverable in `05_Deliverables_Final/`. Pyramid-Principle structured, sourced, and reviewed.

### Quality checklist
- Every control gap mapped to a CIS Critical Security Control or ISO 27001 Annex A clause
- Threat models name explicit assets, threat actors, and attack vectors
- Vendor risk scores cite the questionnaire (CAIQ row, SIG Lite section) used to derive them

---

## Skill 6: Vendor Risk Assessment

### Command: `/omega-cyber:vendor-risk`

### Purpose
Score third-party vendors on security posture using CAIQ / SIG Lite.

### Inputs required
```yaml
client:
  name: "Client Name"
  industry: "Industry"
context:
  scope: "in-scope description"
  constraints: ["constraint 1", "constraint 2"]
references:
  - "Prior deliverable / document name"
  - "External benchmark / source"
```

### Methodology

1. **Frame.** Translate client request into a structured problem statement and hypotheses.
2. **Gather.** Pull data from engagement brain, client documents, and external sources.
3. **Analyze.** Apply the Vendor Risk Assessment method using domain frameworks (see Frameworks section of the agent).
4. **Synthesize.** Produce primary deliverable with recommendations, evidence, and risks.
5. **Validate.** Run `/omega:verify-quality` and pass through Every control gap mapped to a CIS Critical Security Control or ISO 27001 Annex A clause.

### Output shape
A Omega-branded `Vendor Risk Assessment` deliverable in `05_Deliverables_Final/`. Pyramid-Principle structured, sourced, and reviewed.

### Quality checklist
- Every control gap mapped to a CIS Critical Security Control or ISO 27001 Annex A clause
- Threat models name explicit assets, threat actors, and attack vectors
- Vendor risk scores cite the questionnaire (CAIQ row, SIG Lite section) used to derive them

---


## Cross-skill workflows

```
Discovery → /omega-cyber:maturity-assess → /omega-cyber:iso27001-gap → Recommendations
```

## Integration with other Omega plugins

| Plugin | Integration point |
|---|---|
| `omega-iso` | Joint ISO 27001 + ISO 9001/42001 readiness work |
| `omega-risk` | Map cyber risks into the enterprise risk register |
| `omega-aig` | AI governance security control overlay (ISO 42001 + 27001) |

## Templates & artifacts

All deliverables use standard Omega branding via:
- `/doc-gen` for document generation
- `assets/omega-branding.json` for styling
- `scripts/omega-document-generator.js` for automation

| Skill | Primary artifact | Format |
|---|---|---|
| `/omega-cyber:maturity-assess` | Maturity Assessment Report | DOCX/PDF |
| `/omega-cyber:iso27001-gap` | ISO 27001 Gap Report | DOCX/PDF |
| `/omega-cyber:threat-model` | Threat Modeling Report | DOCX/PDF |
| `/omega-cyber:secure-by-design` | Secure-by-Design Review Report | DOCX/PDF |
| `/omega-cyber:incident-runbook` | Incident Runbook Report | DOCX/PDF |
| `/omega-cyber:vendor-risk` | Vendor Risk Assessment Report | DOCX/PDF |
