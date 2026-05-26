---
name: construction
description: Construction & EPC skills — project controls, bim readiness, schedule risk analysis, claims defense, and more. Apply when the engagement scope includes construction & epc work or the consultant references construction, EPC, FIDIC.
---

# CONSTRUCTION — Construction & EPC

## Capability overview

**Code:** CONSTRUCTION
**Full name:** Construction & EPC
**Description:** Construction & EPC — project controls, BIM, schedule risk analysis, claims, contracts (FIDIC / NEC).

---

## Skills index

| # | Skill | Command | Purpose |
|---|---|---|---|
| 1 | Project Controls | `/omega-construction:project-controls` | Set up cost + schedule controls (EVM, S-curves, drift analysis). |
| 2 | BIM Readiness | `/omega-construction:bim-readiness` | Assess BIM maturity (UK PAS 1192 / ISO 19650); produce BEP roadmap. |
| 3 | Schedule Risk Analysis | `/omega-construction:schedule-risk` | Run quantitative schedule risk analysis (Monte Carlo on activity durations). |
| 4 | Claims Defense | `/omega-construction:claims-defense` | Analyze EOT/disruption claims using delay analysis methodologies (TIA, AACE 29R-03). |
| 5 | Contract Review | `/omega-construction:contract-review` | Review FIDIC / NEC contract clauses for risk allocation gaps. |

---

## Skill 1: Project Controls

### Command: `/omega-construction:project-controls`

### Purpose
Set up cost + schedule controls (EVM, S-curves, drift analysis).

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
3. **Analyze.** Apply the Project Controls method using domain frameworks (see Frameworks section of the agent).
4. **Synthesize.** Produce primary deliverable with recommendations, evidence, and risks.
5. **Validate.** Run `/omega:verify-quality` and pass through Project controls have baseline + actual + EAC + variance per work package.

### Output shape
A Omega-branded `Project Controls` deliverable in `05_Deliverables_Final/`. Pyramid-Principle structured, sourced, and reviewed.

### Quality checklist
- Project controls have baseline + actual + EAC + variance per work package
- BIM assessment cites ISO 19650 levels explicitly
- Schedule risk analysis uses Monte Carlo with named distributions

---

## Skill 2: BIM Readiness

### Command: `/omega-construction:bim-readiness`

### Purpose
Assess BIM maturity (UK PAS 1192 / ISO 19650); produce BEP roadmap.

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
3. **Analyze.** Apply the BIM Readiness method using domain frameworks (see Frameworks section of the agent).
4. **Synthesize.** Produce primary deliverable with recommendations, evidence, and risks.
5. **Validate.** Run `/omega:verify-quality` and pass through Project controls have baseline + actual + EAC + variance per work package.

### Output shape
A Omega-branded `BIM Readiness` deliverable in `05_Deliverables_Final/`. Pyramid-Principle structured, sourced, and reviewed.

### Quality checklist
- Project controls have baseline + actual + EAC + variance per work package
- BIM assessment cites ISO 19650 levels explicitly
- Schedule risk analysis uses Monte Carlo with named distributions

---

## Skill 3: Schedule Risk Analysis

### Command: `/omega-construction:schedule-risk`

### Purpose
Run quantitative schedule risk analysis (Monte Carlo on activity durations).

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
3. **Analyze.** Apply the Schedule Risk Analysis method using domain frameworks (see Frameworks section of the agent).
4. **Synthesize.** Produce primary deliverable with recommendations, evidence, and risks.
5. **Validate.** Run `/omega:verify-quality` and pass through Project controls have baseline + actual + EAC + variance per work package.

### Output shape
A Omega-branded `Schedule Risk Analysis` deliverable in `05_Deliverables_Final/`. Pyramid-Principle structured, sourced, and reviewed.

### Quality checklist
- Project controls have baseline + actual + EAC + variance per work package
- BIM assessment cites ISO 19650 levels explicitly
- Schedule risk analysis uses Monte Carlo with named distributions

---

## Skill 4: Claims Defense

### Command: `/omega-construction:claims-defense`

### Purpose
Analyze EOT/disruption claims using delay analysis methodologies (TIA, AACE 29R-03).

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
3. **Analyze.** Apply the Claims Defense method using domain frameworks (see Frameworks section of the agent).
4. **Synthesize.** Produce primary deliverable with recommendations, evidence, and risks.
5. **Validate.** Run `/omega:verify-quality` and pass through Project controls have baseline + actual + EAC + variance per work package.

### Output shape
A Omega-branded `Claims Defense` deliverable in `05_Deliverables_Final/`. Pyramid-Principle structured, sourced, and reviewed.

### Quality checklist
- Project controls have baseline + actual + EAC + variance per work package
- BIM assessment cites ISO 19650 levels explicitly
- Schedule risk analysis uses Monte Carlo with named distributions

---

## Skill 5: Contract Review

### Command: `/omega-construction:contract-review`

### Purpose
Review FIDIC / NEC contract clauses for risk allocation gaps.

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
3. **Analyze.** Apply the Contract Review method using domain frameworks (see Frameworks section of the agent).
4. **Synthesize.** Produce primary deliverable with recommendations, evidence, and risks.
5. **Validate.** Run `/omega:verify-quality` and pass through Project controls have baseline + actual + EAC + variance per work package.

### Output shape
A Omega-branded `Contract Review` deliverable in `05_Deliverables_Final/`. Pyramid-Principle structured, sourced, and reviewed.

### Quality checklist
- Project controls have baseline + actual + EAC + variance per work package
- BIM assessment cites ISO 19650 levels explicitly
- Schedule risk analysis uses Monte Carlo with named distributions

---


## Cross-skill workflows

```
Discovery → /omega-construction:project-controls → /omega-construction:bim-readiness → Recommendations
```

## Integration with other Omega plugins

| Plugin | Integration point |
|---|---|
| `omega-pmo` | Construction program management |
| `omega-finance` | Project finance for infrastructure |
| `omega-risk` | Construction risk register |

## Templates & artifacts

All deliverables use standard Omega branding via:
- `/doc-gen` for document generation
- `assets/omega-branding.json` for styling
- `scripts/omega-document-generator.js` for automation

| Skill | Primary artifact | Format |
|---|---|---|
| `/omega-construction:project-controls` | Project Controls Report | DOCX/PDF |
| `/omega-construction:bim-readiness` | BIM Readiness Report | DOCX/PDF |
| `/omega-construction:schedule-risk` | Schedule Risk Analysis Report | DOCX/PDF |
| `/omega-construction:claims-defense` | Claims Defense Report | DOCX/PDF |
| `/omega-construction:contract-review` | Contract Review Report | DOCX/PDF |
