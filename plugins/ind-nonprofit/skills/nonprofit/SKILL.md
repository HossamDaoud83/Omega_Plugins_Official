---
name: nonprofit
description: Nonprofit & NGO skills — theory of change, grant management, m&e framework, donor reporting, and more. Apply when the engagement scope includes nonprofit & ngo work or the consultant references nonprofit, NGO, theory of change.
---

# NONPROFIT — Nonprofit & NGO

## Capability overview

**Code:** NONPROFIT
**Full name:** Nonprofit & NGO
**Description:** Nonprofit & NGO — grant management, theory of change, donor reporting, monitoring & evaluation (M&E).

---

## Skills index

| # | Skill | Command | Purpose |
|---|---|---|---|
| 1 | Theory of Change | `/omega-nonprofit:theory-of-change` | Develop theory of change linking inputs → activities → outputs → outcomes → impact. |
| 2 | Grant Management | `/omega-nonprofit:grant-mgmt` | Set up grant management system: pipeline, compliance, reporting. |
| 3 | M&E Framework | `/omega-nonprofit:me-framework` | Design M&E framework with indicators, data sources, baseline, targets. |
| 4 | Donor Reporting | `/omega-nonprofit:donor-report` | Author donor report with results vs commitment, qualitative case stories. |

---

## Skill 1: Theory of Change

### Command: `/omega-nonprofit:theory-of-change`

### Purpose
Develop theory of change linking inputs → activities → outputs → outcomes → impact.

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
3. **Analyze.** Apply the Theory of Change method using domain frameworks (see Frameworks section of the agent).
4. **Synthesize.** Produce primary deliverable with recommendations, evidence, and risks.
5. **Validate.** Run `/omega:verify-quality` and pass through Theory of change has explicit assumptions and risks per logic-model rung.

### Output shape
A Omega-branded `Theory of Change` deliverable in `05_Deliverables_Final/`. Pyramid-Principle structured, sourced, and reviewed.

### Quality checklist
- Theory of change has explicit assumptions and risks per logic-model rung
- Grant pipeline shows stage, value, P(win), donor
- M&E indicators are SMART; have baseline + target + data source

---

## Skill 2: Grant Management

### Command: `/omega-nonprofit:grant-mgmt`

### Purpose
Set up grant management system: pipeline, compliance, reporting.

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
3. **Analyze.** Apply the Grant Management method using domain frameworks (see Frameworks section of the agent).
4. **Synthesize.** Produce primary deliverable with recommendations, evidence, and risks.
5. **Validate.** Run `/omega:verify-quality` and pass through Theory of change has explicit assumptions and risks per logic-model rung.

### Output shape
A Omega-branded `Grant Management` deliverable in `05_Deliverables_Final/`. Pyramid-Principle structured, sourced, and reviewed.

### Quality checklist
- Theory of change has explicit assumptions and risks per logic-model rung
- Grant pipeline shows stage, value, P(win), donor
- M&E indicators are SMART; have baseline + target + data source

---

## Skill 3: M&E Framework

### Command: `/omega-nonprofit:me-framework`

### Purpose
Design M&E framework with indicators, data sources, baseline, targets.

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
3. **Analyze.** Apply the M&E Framework method using domain frameworks (see Frameworks section of the agent).
4. **Synthesize.** Produce primary deliverable with recommendations, evidence, and risks.
5. **Validate.** Run `/omega:verify-quality` and pass through Theory of change has explicit assumptions and risks per logic-model rung.

### Output shape
A Omega-branded `M&E Framework` deliverable in `05_Deliverables_Final/`. Pyramid-Principle structured, sourced, and reviewed.

### Quality checklist
- Theory of change has explicit assumptions and risks per logic-model rung
- Grant pipeline shows stage, value, P(win), donor
- M&E indicators are SMART; have baseline + target + data source

---

## Skill 4: Donor Reporting

### Command: `/omega-nonprofit:donor-report`

### Purpose
Author donor report with results vs commitment, qualitative case stories.

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
3. **Analyze.** Apply the Donor Reporting method using domain frameworks (see Frameworks section of the agent).
4. **Synthesize.** Produce primary deliverable with recommendations, evidence, and risks.
5. **Validate.** Run `/omega:verify-quality` and pass through Theory of change has explicit assumptions and risks per logic-model rung.

### Output shape
A Omega-branded `Donor Reporting` deliverable in `05_Deliverables_Final/`. Pyramid-Principle structured, sourced, and reviewed.

### Quality checklist
- Theory of change has explicit assumptions and risks per logic-model rung
- Grant pipeline shows stage, value, P(win), donor
- M&E indicators are SMART; have baseline + target + data source

---


## Cross-skill workflows

```
Discovery → /omega-nonprofit:theory-of-change → /omega-nonprofit:grant-mgmt → Recommendations
```

## Integration with other Omega plugins

| Plugin | Integration point |
|---|---|
| `omega-pmo` | Grant program management |
| `omega-finance` | Restricted/unrestricted fund accounting |

## Templates & artifacts

All deliverables use standard Omega branding via:
- `/doc-gen` for document generation
- `assets/omega-branding.json` for styling
- `scripts/omega-document-generator.js` for automation

| Skill | Primary artifact | Format |
|---|---|---|
| `/omega-nonprofit:theory-of-change` | Theory of Change Report | DOCX/PDF |
| `/omega-nonprofit:grant-mgmt` | Grant Management Report | DOCX/PDF |
| `/omega-nonprofit:me-framework` | M&E Framework Report | DOCX/PDF |
| `/omega-nonprofit:donor-report` | Donor Reporting Report | DOCX/PDF |
