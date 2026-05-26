---
name: pmo
description: PMO & Program Delivery skills — pmo setup, portfolio prioritization, program charter, status pack, and more. Apply when the engagement scope includes pmo & program delivery work or the consultant references PMO, portfolio, program.
---

# PMO — PMO & Program Delivery

## Capability overview

**Code:** PMO
**Full name:** PMO & Program Delivery
**Description:** PMO setup, portfolio governance, program management, RAID logs, status pack automation, gate reviews.

---

## Skills index

| # | Skill | Command | Purpose |
|---|---|---|---|
| 1 | PMO Setup | `/omega-pmo:pmo-setup` | Stand up a PMO: charter, operating model, governance, tools. |
| 2 | Portfolio Prioritization | `/omega-pmo:portfolio-prioritize` | Score and rank initiatives using strategic-fit, value, and feasibility lenses. |
| 3 | Program Charter | `/omega-pmo:program-charter` | Author program charter: scope, objectives, governance, RAID, success criteria. |
| 4 | Status Pack | `/omega-pmo:status-pack` | Author weekly/monthly status pack from tracker state. |
| 5 | Stage-Gate Review | `/omega-pmo:gate-review` | Facilitate stage-gate review with scorecard and go/no-go decision. |
| 6 | RAID Cleanup | `/omega-pmo:raid-cleanup` | Audit RAID log for stale items; drive resolution and aging-out. |

---

## Skill 1: PMO Setup

### Command: `/omega-pmo:pmo-setup`

### Purpose
Stand up a PMO: charter, operating model, governance, tools.

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
3. **Analyze.** Apply the PMO Setup method using domain frameworks (see Frameworks section of the agent).
4. **Synthesize.** Produce primary deliverable with recommendations, evidence, and risks.
5. **Validate.** Run `/omega:verify-quality` and pass through Every program has a charter with objectives, governance, scope, and named sponsor.

### Output shape
A Omega-branded `PMO Setup` deliverable in `05_Deliverables_Final/`. Pyramid-Principle structured, sourced, and reviewed.

### Quality checklist
- Every program has a charter with objectives, governance, scope, and named sponsor
- RAID items have owner + due date + aging; nothing untouched > 14 days
- Status packs have a 3-bullet headline, decisions-needed section, and 2-week look-ahead

---

## Skill 2: Portfolio Prioritization

### Command: `/omega-pmo:portfolio-prioritize`

### Purpose
Score and rank initiatives using strategic-fit, value, and feasibility lenses.

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
3. **Analyze.** Apply the Portfolio Prioritization method using domain frameworks (see Frameworks section of the agent).
4. **Synthesize.** Produce primary deliverable with recommendations, evidence, and risks.
5. **Validate.** Run `/omega:verify-quality` and pass through Every program has a charter with objectives, governance, scope, and named sponsor.

### Output shape
A Omega-branded `Portfolio Prioritization` deliverable in `05_Deliverables_Final/`. Pyramid-Principle structured, sourced, and reviewed.

### Quality checklist
- Every program has a charter with objectives, governance, scope, and named sponsor
- RAID items have owner + due date + aging; nothing untouched > 14 days
- Status packs have a 3-bullet headline, decisions-needed section, and 2-week look-ahead

---

## Skill 3: Program Charter

### Command: `/omega-pmo:program-charter`

### Purpose
Author program charter: scope, objectives, governance, RAID, success criteria.

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
3. **Analyze.** Apply the Program Charter method using domain frameworks (see Frameworks section of the agent).
4. **Synthesize.** Produce primary deliverable with recommendations, evidence, and risks.
5. **Validate.** Run `/omega:verify-quality` and pass through Every program has a charter with objectives, governance, scope, and named sponsor.

### Output shape
A Omega-branded `Program Charter` deliverable in `05_Deliverables_Final/`. Pyramid-Principle structured, sourced, and reviewed.

### Quality checklist
- Every program has a charter with objectives, governance, scope, and named sponsor
- RAID items have owner + due date + aging; nothing untouched > 14 days
- Status packs have a 3-bullet headline, decisions-needed section, and 2-week look-ahead

---

## Skill 4: Status Pack

### Command: `/omega-pmo:status-pack`

### Purpose
Author weekly/monthly status pack from tracker state.

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
3. **Analyze.** Apply the Status Pack method using domain frameworks (see Frameworks section of the agent).
4. **Synthesize.** Produce primary deliverable with recommendations, evidence, and risks.
5. **Validate.** Run `/omega:verify-quality` and pass through Every program has a charter with objectives, governance, scope, and named sponsor.

### Output shape
A Omega-branded `Status Pack` deliverable in `05_Deliverables_Final/`. Pyramid-Principle structured, sourced, and reviewed.

### Quality checklist
- Every program has a charter with objectives, governance, scope, and named sponsor
- RAID items have owner + due date + aging; nothing untouched > 14 days
- Status packs have a 3-bullet headline, decisions-needed section, and 2-week look-ahead

---

## Skill 5: Stage-Gate Review

### Command: `/omega-pmo:gate-review`

### Purpose
Facilitate stage-gate review with scorecard and go/no-go decision.

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
3. **Analyze.** Apply the Stage-Gate Review method using domain frameworks (see Frameworks section of the agent).
4. **Synthesize.** Produce primary deliverable with recommendations, evidence, and risks.
5. **Validate.** Run `/omega:verify-quality` and pass through Every program has a charter with objectives, governance, scope, and named sponsor.

### Output shape
A Omega-branded `Stage-Gate Review` deliverable in `05_Deliverables_Final/`. Pyramid-Principle structured, sourced, and reviewed.

### Quality checklist
- Every program has a charter with objectives, governance, scope, and named sponsor
- RAID items have owner + due date + aging; nothing untouched > 14 days
- Status packs have a 3-bullet headline, decisions-needed section, and 2-week look-ahead

---

## Skill 6: RAID Cleanup

### Command: `/omega-pmo:raid-cleanup`

### Purpose
Audit RAID log for stale items; drive resolution and aging-out.

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
3. **Analyze.** Apply the RAID Cleanup method using domain frameworks (see Frameworks section of the agent).
4. **Synthesize.** Produce primary deliverable with recommendations, evidence, and risks.
5. **Validate.** Run `/omega:verify-quality` and pass through Every program has a charter with objectives, governance, scope, and named sponsor.

### Output shape
A Omega-branded `RAID Cleanup` deliverable in `05_Deliverables_Final/`. Pyramid-Principle structured, sourced, and reviewed.

### Quality checklist
- Every program has a charter with objectives, governance, scope, and named sponsor
- RAID items have owner + due date + aging; nothing untouched > 14 days
- Status packs have a 3-bullet headline, decisions-needed section, and 2-week look-ahead

---


## Cross-skill workflows

```
Discovery → /omega-pmo:pmo-setup → /omega-pmo:portfolio-prioritize → Recommendations
```

## Integration with other Omega plugins

| Plugin | Integration point |
|---|---|
| `omega-risk` | RAID issue/risk feeds into the enterprise risk register |
| `omega-dig` | PMO supporting digital transformation programs |
| `omega-finance` | Portfolio investment and benefit tracking |

## Templates & artifacts

All deliverables use standard Omega branding via:
- `/doc-gen` for document generation
- `assets/omega-branding.json` for styling
- `scripts/omega-document-generator.js` for automation

| Skill | Primary artifact | Format |
|---|---|---|
| `/omega-pmo:pmo-setup` | PMO Setup Report | DOCX/PDF |
| `/omega-pmo:portfolio-prioritize` | Portfolio Prioritization Report | DOCX/PDF |
| `/omega-pmo:program-charter` | Program Charter Report | DOCX/PDF |
| `/omega-pmo:status-pack` | Status Pack Report | DOCX/PDF |
| `/omega-pmo:gate-review` | Stage-Gate Review Report | DOCX/PDF |
| `/omega-pmo:raid-cleanup` | RAID Cleanup Report | DOCX/PDF |
