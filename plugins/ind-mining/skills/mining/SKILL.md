---
name: mining
description: Mining & Metals skills — reserve review, mine plan review, tailings management, esg license to operate, and more. Apply when the engagement scope includes mining & metals work or the consultant references mining, metals, ore.
---

# MINING — Mining & Metals

## Capability overview

**Code:** MINING
**Full name:** Mining & Metals
**Description:** Mining & metals — ore reserves, mine planning, ESG license to operate, tailings management.

---

## Skills index

| # | Skill | Command | Purpose |
|---|---|---|---|
| 1 | Reserve Review | `/omega-mining:reserve-review` | Review ore reserves and resources reporting per JORC / NI 43-101. |
| 2 | Mine Plan Review | `/omega-mining:mine-plan` | Review LoM plan: pit design, grade control, sequencing. |
| 3 | Tailings Management | `/omega-mining:tailings-mgmt` | Assess tailings management vs Global Industry Standard on Tailings Management. |
| 4 | ESG License to Operate | `/omega-mining:esg-licence` | Diagnose social license risks; recommend community engagement program. |

---

## Skill 1: Reserve Review

### Command: `/omega-mining:reserve-review`

### Purpose
Review ore reserves and resources reporting per JORC / NI 43-101.

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
3. **Analyze.** Apply the Reserve Review method using domain frameworks (see Frameworks section of the agent).
4. **Synthesize.** Produce primary deliverable with recommendations, evidence, and risks.
5. **Validate.** Run `/omega:verify-quality` and pass through Reserves classified per JORC / NI 43-101 with QP sign-off.

### Output shape
A Omega-branded `Reserve Review` deliverable in `05_Deliverables_Final/`. Pyramid-Principle structured, sourced, and reviewed.

### Quality checklist
- Reserves classified per JORC / NI 43-101 with QP sign-off
- Tailings recommendations cite GISTM principles explicitly
- Social license analysis maps stakeholder map + grievance log

---

## Skill 2: Mine Plan Review

### Command: `/omega-mining:mine-plan`

### Purpose
Review LoM plan: pit design, grade control, sequencing.

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
3. **Analyze.** Apply the Mine Plan Review method using domain frameworks (see Frameworks section of the agent).
4. **Synthesize.** Produce primary deliverable with recommendations, evidence, and risks.
5. **Validate.** Run `/omega:verify-quality` and pass through Reserves classified per JORC / NI 43-101 with QP sign-off.

### Output shape
A Omega-branded `Mine Plan Review` deliverable in `05_Deliverables_Final/`. Pyramid-Principle structured, sourced, and reviewed.

### Quality checklist
- Reserves classified per JORC / NI 43-101 with QP sign-off
- Tailings recommendations cite GISTM principles explicitly
- Social license analysis maps stakeholder map + grievance log

---

## Skill 3: Tailings Management

### Command: `/omega-mining:tailings-mgmt`

### Purpose
Assess tailings management vs Global Industry Standard on Tailings Management.

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
3. **Analyze.** Apply the Tailings Management method using domain frameworks (see Frameworks section of the agent).
4. **Synthesize.** Produce primary deliverable with recommendations, evidence, and risks.
5. **Validate.** Run `/omega:verify-quality` and pass through Reserves classified per JORC / NI 43-101 with QP sign-off.

### Output shape
A Omega-branded `Tailings Management` deliverable in `05_Deliverables_Final/`. Pyramid-Principle structured, sourced, and reviewed.

### Quality checklist
- Reserves classified per JORC / NI 43-101 with QP sign-off
- Tailings recommendations cite GISTM principles explicitly
- Social license analysis maps stakeholder map + grievance log

---

## Skill 4: ESG License to Operate

### Command: `/omega-mining:esg-licence`

### Purpose
Diagnose social license risks; recommend community engagement program.

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
3. **Analyze.** Apply the ESG License to Operate method using domain frameworks (see Frameworks section of the agent).
4. **Synthesize.** Produce primary deliverable with recommendations, evidence, and risks.
5. **Validate.** Run `/omega:verify-quality` and pass through Reserves classified per JORC / NI 43-101 with QP sign-off.

### Output shape
A Omega-branded `ESG License to Operate` deliverable in `05_Deliverables_Final/`. Pyramid-Principle structured, sourced, and reviewed.

### Quality checklist
- Reserves classified per JORC / NI 43-101 with QP sign-off
- Tailings recommendations cite GISTM principles explicitly
- Social license analysis maps stakeholder map + grievance log

---


## Cross-skill workflows

```
Discovery → /omega-mining:reserve-review → /omega-mining:mine-plan → Recommendations
```

## Integration with other Omega plugins

| Plugin | Integration point |
|---|---|
| `omega-esg` | ESG strategy and reporting |
| `omega-finance` | Mining project finance |
| `omega-risk` | Tailings + community risk |

## Templates & artifacts

All deliverables use standard Omega branding via:
- `/doc-gen` for document generation
- `assets/omega-branding.json` for styling
- `scripts/omega-document-generator.js` for automation

| Skill | Primary artifact | Format |
|---|---|---|
| `/omega-mining:reserve-review` | Reserve Review Report | DOCX/PDF |
| `/omega-mining:mine-plan` | Mine Plan Review Report | DOCX/PDF |
| `/omega-mining:tailings-mgmt` | Tailings Management Report | DOCX/PDF |
| `/omega-mining:esg-licence` | ESG License to Operate Report | DOCX/PDF |
