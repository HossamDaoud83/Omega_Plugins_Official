---
name: esg
description: ESG & Sustainability skills — materiality assessment, carbon baseline, net-zero pathway, csrd gap, and more. Apply when the engagement scope includes esg & sustainability work or the consultant references ESG, sustainability, carbon accounting.
---

# ESG — ESG & Sustainability

## Capability overview

**Code:** ESG
**Full name:** ESG & Sustainability
**Description:** ESG strategy, sustainability reporting, carbon accounting (Scope 1/2/3), CSRD/GRI/SASB alignment, and net-zero pathway design.

---

## Skills index

| # | Skill | Command | Purpose |
|---|---|---|---|
| 1 | Materiality Assessment | `/omega-esg:materiality` | Run double-materiality assessment per CSRD ESRS 1; identify material topics. |
| 2 | Carbon Baseline | `/omega-esg:carbon-baseline` | Establish Scope 1/2/3 inventory using GHG Protocol; produce baseline year report. |
| 3 | Net-Zero Pathway | `/omega-esg:net-zero-pathway` | Design SBTi-aligned net-zero pathway with milestones and sector decarbonization levers. |
| 4 | CSRD Gap | `/omega-esg:csrd-gap` | Map current disclosure to ESRS standards; identify gaps and remediation plan. |
| 5 | ESG Rating Prep | `/omega-esg:esg-rating-prep` | Prepare for MSCI/Sustainalytics/CDP scoring; identify quick wins. |

---

## Skill 1: Materiality Assessment

### Command: `/omega-esg:materiality`

### Purpose
Run double-materiality assessment per CSRD ESRS 1; identify material topics.

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
3. **Analyze.** Apply the Materiality Assessment method using domain frameworks (see Frameworks section of the agent).
4. **Synthesize.** Produce primary deliverable with recommendations, evidence, and risks.
5. **Validate.** Run `/omega:verify-quality` and pass through Every emission figure cites methodology (location-based vs market-based, emission factor source, year).

### Output shape
A Omega-branded `Materiality Assessment` deliverable in `05_Deliverables_Final/`. Pyramid-Principle structured, sourced, and reviewed.

### Quality checklist
- Every emission figure cites methodology (location-based vs market-based, emission factor source, year)
- Materiality assessment includes ≥10 stakeholder groups and double-materiality lens
- Net-zero pathway is SBTi-aligned (1.5°C trajectory, near-term + long-term targets)

---

## Skill 2: Carbon Baseline

### Command: `/omega-esg:carbon-baseline`

### Purpose
Establish Scope 1/2/3 inventory using GHG Protocol; produce baseline year report.

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
3. **Analyze.** Apply the Carbon Baseline method using domain frameworks (see Frameworks section of the agent).
4. **Synthesize.** Produce primary deliverable with recommendations, evidence, and risks.
5. **Validate.** Run `/omega:verify-quality` and pass through Every emission figure cites methodology (location-based vs market-based, emission factor source, year).

### Output shape
A Omega-branded `Carbon Baseline` deliverable in `05_Deliverables_Final/`. Pyramid-Principle structured, sourced, and reviewed.

### Quality checklist
- Every emission figure cites methodology (location-based vs market-based, emission factor source, year)
- Materiality assessment includes ≥10 stakeholder groups and double-materiality lens
- Net-zero pathway is SBTi-aligned (1.5°C trajectory, near-term + long-term targets)

---

## Skill 3: Net-Zero Pathway

### Command: `/omega-esg:net-zero-pathway`

### Purpose
Design SBTi-aligned net-zero pathway with milestones and sector decarbonization levers.

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
3. **Analyze.** Apply the Net-Zero Pathway method using domain frameworks (see Frameworks section of the agent).
4. **Synthesize.** Produce primary deliverable with recommendations, evidence, and risks.
5. **Validate.** Run `/omega:verify-quality` and pass through Every emission figure cites methodology (location-based vs market-based, emission factor source, year).

### Output shape
A Omega-branded `Net-Zero Pathway` deliverable in `05_Deliverables_Final/`. Pyramid-Principle structured, sourced, and reviewed.

### Quality checklist
- Every emission figure cites methodology (location-based vs market-based, emission factor source, year)
- Materiality assessment includes ≥10 stakeholder groups and double-materiality lens
- Net-zero pathway is SBTi-aligned (1.5°C trajectory, near-term + long-term targets)

---

## Skill 4: CSRD Gap

### Command: `/omega-esg:csrd-gap`

### Purpose
Map current disclosure to ESRS standards; identify gaps and remediation plan.

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
3. **Analyze.** Apply the CSRD Gap method using domain frameworks (see Frameworks section of the agent).
4. **Synthesize.** Produce primary deliverable with recommendations, evidence, and risks.
5. **Validate.** Run `/omega:verify-quality` and pass through Every emission figure cites methodology (location-based vs market-based, emission factor source, year).

### Output shape
A Omega-branded `CSRD Gap` deliverable in `05_Deliverables_Final/`. Pyramid-Principle structured, sourced, and reviewed.

### Quality checklist
- Every emission figure cites methodology (location-based vs market-based, emission factor source, year)
- Materiality assessment includes ≥10 stakeholder groups and double-materiality lens
- Net-zero pathway is SBTi-aligned (1.5°C trajectory, near-term + long-term targets)

---

## Skill 5: ESG Rating Prep

### Command: `/omega-esg:esg-rating-prep`

### Purpose
Prepare for MSCI/Sustainalytics/CDP scoring; identify quick wins.

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
3. **Analyze.** Apply the ESG Rating Prep method using domain frameworks (see Frameworks section of the agent).
4. **Synthesize.** Produce primary deliverable with recommendations, evidence, and risks.
5. **Validate.** Run `/omega:verify-quality` and pass through Every emission figure cites methodology (location-based vs market-based, emission factor source, year).

### Output shape
A Omega-branded `ESG Rating Prep` deliverable in `05_Deliverables_Final/`. Pyramid-Principle structured, sourced, and reviewed.

### Quality checklist
- Every emission figure cites methodology (location-based vs market-based, emission factor source, year)
- Materiality assessment includes ≥10 stakeholder groups and double-materiality lens
- Net-zero pathway is SBTi-aligned (1.5°C trajectory, near-term + long-term targets)

---


## Cross-skill workflows

```
Discovery → /omega-esg:materiality → /omega-esg:carbon-baseline → Recommendations
```

## Integration with other Omega plugins

| Plugin | Integration point |
|---|---|
| `omega-finance` | Finance side of ESG capex / transition financing |
| `omega-ai-regs` | CSRD / SEC climate rule tracking |
| `omega-str` | ESG-strategy linkage to corporate strategy |

## Templates & artifacts

All deliverables use standard Omega branding via:
- `/doc-gen` for document generation
- `assets/omega-branding.json` for styling
- `scripts/omega-document-generator.js` for automation

| Skill | Primary artifact | Format |
|---|---|---|
| `/omega-esg:materiality` | Materiality Assessment Report | DOCX/PDF |
| `/omega-esg:carbon-baseline` | Carbon Baseline Report | DOCX/PDF |
| `/omega-esg:net-zero-pathway` | Net-Zero Pathway Report | DOCX/PDF |
| `/omega-esg:csrd-gap` | CSRD Gap Report | DOCX/PDF |
| `/omega-esg:esg-rating-prep` | ESG Rating Prep Report | DOCX/PDF |
