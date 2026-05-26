---
name: ops
description: Operational Excellence skills — value stream map, process redesign, kaizen event plan, lean maturity assessment, and more. Apply when the engagement scope includes operational excellence work or the consultant references lean, six sigma, VSM.
---

# OPS — Operational Excellence

## Capability overview

**Code:** OPS
**Full name:** Operational Excellence
**Description:** Operational excellence, lean six sigma, value stream mapping, process redesign, continuous improvement programs.

---

## Skills index

| # | Skill | Command | Purpose |
|---|---|---|---|
| 1 | Value Stream Map | `/omega-ops:vsm` | Build current-state and future-state VSM for a target process. |
| 2 | Process Redesign | `/omega-ops:process-redesign` | Re-engineer a target process for cycle time, quality, and cost gains. |
| 3 | Kaizen Event Plan | `/omega-ops:kaizen-event` | Plan and facilitate a 3-5 day kaizen / improvement event. |
| 4 | Lean Maturity Assessment | `/omega-ops:lean-assess` | Score the operation against Shingo Model dimensions. |
| 5 | Six Sigma Project | `/omega-ops:six-sigma-project` | Frame a DMAIC project: SIPOC, problem statement, charter. |

---

## Skill 1: Value Stream Map

### Command: `/omega-ops:vsm`

### Purpose
Build current-state and future-state VSM for a target process.

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
3. **Analyze.** Apply the Value Stream Map method using domain frameworks (see Frameworks section of the agent).
4. **Synthesize.** Produce primary deliverable with recommendations, evidence, and risks.
5. **Validate.** Run `/omega:verify-quality` and pass through VSM has explicit start/end nodes, takt time, cycle time per step, and value-added ratio.

### Output shape
A Omega-branded `Value Stream Map` deliverable in `05_Deliverables_Final/`. Pyramid-Principle structured, sourced, and reviewed.

### Quality checklist
- VSM has explicit start/end nodes, takt time, cycle time per step, and value-added ratio
- Process redesign quantifies before/after on cycle time, cost, defect rate
- Kaizen events have a chartered scope, daily standup cadence, and Day 5 readout

---

## Skill 2: Process Redesign

### Command: `/omega-ops:process-redesign`

### Purpose
Re-engineer a target process for cycle time, quality, and cost gains.

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
3. **Analyze.** Apply the Process Redesign method using domain frameworks (see Frameworks section of the agent).
4. **Synthesize.** Produce primary deliverable with recommendations, evidence, and risks.
5. **Validate.** Run `/omega:verify-quality` and pass through VSM has explicit start/end nodes, takt time, cycle time per step, and value-added ratio.

### Output shape
A Omega-branded `Process Redesign` deliverable in `05_Deliverables_Final/`. Pyramid-Principle structured, sourced, and reviewed.

### Quality checklist
- VSM has explicit start/end nodes, takt time, cycle time per step, and value-added ratio
- Process redesign quantifies before/after on cycle time, cost, defect rate
- Kaizen events have a chartered scope, daily standup cadence, and Day 5 readout

---

## Skill 3: Kaizen Event Plan

### Command: `/omega-ops:kaizen-event`

### Purpose
Plan and facilitate a 3-5 day kaizen / improvement event.

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
3. **Analyze.** Apply the Kaizen Event Plan method using domain frameworks (see Frameworks section of the agent).
4. **Synthesize.** Produce primary deliverable with recommendations, evidence, and risks.
5. **Validate.** Run `/omega:verify-quality` and pass through VSM has explicit start/end nodes, takt time, cycle time per step, and value-added ratio.

### Output shape
A Omega-branded `Kaizen Event Plan` deliverable in `05_Deliverables_Final/`. Pyramid-Principle structured, sourced, and reviewed.

### Quality checklist
- VSM has explicit start/end nodes, takt time, cycle time per step, and value-added ratio
- Process redesign quantifies before/after on cycle time, cost, defect rate
- Kaizen events have a chartered scope, daily standup cadence, and Day 5 readout

---

## Skill 4: Lean Maturity Assessment

### Command: `/omega-ops:lean-assess`

### Purpose
Score the operation against Shingo Model dimensions.

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
3. **Analyze.** Apply the Lean Maturity Assessment method using domain frameworks (see Frameworks section of the agent).
4. **Synthesize.** Produce primary deliverable with recommendations, evidence, and risks.
5. **Validate.** Run `/omega:verify-quality` and pass through VSM has explicit start/end nodes, takt time, cycle time per step, and value-added ratio.

### Output shape
A Omega-branded `Lean Maturity Assessment` deliverable in `05_Deliverables_Final/`. Pyramid-Principle structured, sourced, and reviewed.

### Quality checklist
- VSM has explicit start/end nodes, takt time, cycle time per step, and value-added ratio
- Process redesign quantifies before/after on cycle time, cost, defect rate
- Kaizen events have a chartered scope, daily standup cadence, and Day 5 readout

---

## Skill 5: Six Sigma Project

### Command: `/omega-ops:six-sigma-project`

### Purpose
Frame a DMAIC project: SIPOC, problem statement, charter.

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
3. **Analyze.** Apply the Six Sigma Project method using domain frameworks (see Frameworks section of the agent).
4. **Synthesize.** Produce primary deliverable with recommendations, evidence, and risks.
5. **Validate.** Run `/omega:verify-quality` and pass through VSM has explicit start/end nodes, takt time, cycle time per step, and value-added ratio.

### Output shape
A Omega-branded `Six Sigma Project` deliverable in `05_Deliverables_Final/`. Pyramid-Principle structured, sourced, and reviewed.

### Quality checklist
- VSM has explicit start/end nodes, takt time, cycle time per step, and value-added ratio
- Process redesign quantifies before/after on cycle time, cost, defect rate
- Kaizen events have a chartered scope, daily standup cadence, and Day 5 readout

---


## Cross-skill workflows

```
Discovery → /omega-ops:vsm → /omega-ops:process-redesign → Recommendations
```

## Integration with other Omega plugins

| Plugin | Integration point |
|---|---|
| `omega-supply` | Supply chain process redesign |
| `omega-coe` | KPI tracking for operational improvements |
| `omega-pmo` | Improvement project portfolio management |

## Templates & artifacts

All deliverables use standard Omega branding via:
- `/doc-gen` for document generation
- `assets/omega-branding.json` for styling
- `scripts/omega-document-generator.js` for automation

| Skill | Primary artifact | Format |
|---|---|---|
| `/omega-ops:vsm` | Value Stream Map Report | DOCX/PDF |
| `/omega-ops:process-redesign` | Process Redesign Report | DOCX/PDF |
| `/omega-ops:kaizen-event` | Kaizen Event Plan Report | DOCX/PDF |
| `/omega-ops:lean-assess` | Lean Maturity Assessment Report | DOCX/PDF |
| `/omega-ops:six-sigma-project` | Six Sigma Project Report | DOCX/PDF |
