---
name: hospitality
description: Hospitality skills — revpar optimization, f&b operations review, brand standards audit, guest experience lift, and more. Apply when the engagement scope includes hospitality work or the consultant references hospitality, hotel, resort.
---

# HOSPITALITY — Hospitality

## Capability overview

**Code:** HOSPITALITY
**Full name:** Hospitality
**Description:** Hospitality — RevPAR optimization, F&B operations, brand standards, guest experience.

---

## Skills index

| # | Skill | Command | Purpose |
|---|---|---|---|
| 1 | RevPAR Optimization | `/omega-hospitality:revpar-opt` | Diagnose RevPAR drivers (rate, occupancy, segment mix) and identify uplift levers. |
| 2 | F&B Operations Review | `/omega-hospitality:fnb-ops` | Review F&B operations: cost, quality, throughput, guest satisfaction. |
| 3 | Brand Standards Audit | `/omega-hospitality:brand-audit` | Audit property against brand standards; identify gaps and remediation cost. |
| 4 | Guest Experience Lift | `/omega-hospitality:guest-exp` | Map guest journey, identify friction points, prioritize interventions. |

---

## Skill 1: RevPAR Optimization

### Command: `/omega-hospitality:revpar-opt`

### Purpose
Diagnose RevPAR drivers (rate, occupancy, segment mix) and identify uplift levers.

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
3. **Analyze.** Apply the RevPAR Optimization method using domain frameworks (see Frameworks section of the agent).
4. **Synthesize.** Produce primary deliverable with recommendations, evidence, and risks.
5. **Validate.** Run `/omega:verify-quality` and pass through RevPAR analysis decomposes ADR × occupancy × segment mix.

### Output shape
A Omega-branded `RevPAR Optimization` deliverable in `05_Deliverables_Final/`. Pyramid-Principle structured, sourced, and reviewed.

### Quality checklist
- RevPAR analysis decomposes ADR × occupancy × segment mix
- F&B review cites cost-of-sales %, labor %, and guest satisfaction
- Brand audit links each gap to a specific brand standard clause

---

## Skill 2: F&B Operations Review

### Command: `/omega-hospitality:fnb-ops`

### Purpose
Review F&B operations: cost, quality, throughput, guest satisfaction.

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
3. **Analyze.** Apply the F&B Operations Review method using domain frameworks (see Frameworks section of the agent).
4. **Synthesize.** Produce primary deliverable with recommendations, evidence, and risks.
5. **Validate.** Run `/omega:verify-quality` and pass through RevPAR analysis decomposes ADR × occupancy × segment mix.

### Output shape
A Omega-branded `F&B Operations Review` deliverable in `05_Deliverables_Final/`. Pyramid-Principle structured, sourced, and reviewed.

### Quality checklist
- RevPAR analysis decomposes ADR × occupancy × segment mix
- F&B review cites cost-of-sales %, labor %, and guest satisfaction
- Brand audit links each gap to a specific brand standard clause

---

## Skill 3: Brand Standards Audit

### Command: `/omega-hospitality:brand-audit`

### Purpose
Audit property against brand standards; identify gaps and remediation cost.

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
3. **Analyze.** Apply the Brand Standards Audit method using domain frameworks (see Frameworks section of the agent).
4. **Synthesize.** Produce primary deliverable with recommendations, evidence, and risks.
5. **Validate.** Run `/omega:verify-quality` and pass through RevPAR analysis decomposes ADR × occupancy × segment mix.

### Output shape
A Omega-branded `Brand Standards Audit` deliverable in `05_Deliverables_Final/`. Pyramid-Principle structured, sourced, and reviewed.

### Quality checklist
- RevPAR analysis decomposes ADR × occupancy × segment mix
- F&B review cites cost-of-sales %, labor %, and guest satisfaction
- Brand audit links each gap to a specific brand standard clause

---

## Skill 4: Guest Experience Lift

### Command: `/omega-hospitality:guest-exp`

### Purpose
Map guest journey, identify friction points, prioritize interventions.

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
3. **Analyze.** Apply the Guest Experience Lift method using domain frameworks (see Frameworks section of the agent).
4. **Synthesize.** Produce primary deliverable with recommendations, evidence, and risks.
5. **Validate.** Run `/omega:verify-quality` and pass through RevPAR analysis decomposes ADR × occupancy × segment mix.

### Output shape
A Omega-branded `Guest Experience Lift` deliverable in `05_Deliverables_Final/`. Pyramid-Principle structured, sourced, and reviewed.

### Quality checklist
- RevPAR analysis decomposes ADR × occupancy × segment mix
- F&B review cites cost-of-sales %, labor %, and guest satisfaction
- Brand audit links each gap to a specific brand standard clause

---


## Cross-skill workflows

```
Discovery → /omega-hospitality:revpar-opt → /omega-hospitality:fnb-ops → Recommendations
```

## Integration with other Omega plugins

| Plugin | Integration point |
|---|---|
| `omega-cx` | Guest experience design |
| `omega-coe` | Hotel KPI dashboards |

## Templates & artifacts

All deliverables use standard Omega branding via:
- `/doc-gen` for document generation
- `assets/omega-branding.json` for styling
- `scripts/omega-document-generator.js` for automation

| Skill | Primary artifact | Format |
|---|---|---|
| `/omega-hospitality:revpar-opt` | RevPAR Optimization Report | DOCX/PDF |
| `/omega-hospitality:fnb-ops` | F&B Operations Review Report | DOCX/PDF |
| `/omega-hospitality:brand-audit` | Brand Standards Audit Report | DOCX/PDF |
| `/omega-hospitality:guest-exp` | Guest Experience Lift Report | DOCX/PDF |
