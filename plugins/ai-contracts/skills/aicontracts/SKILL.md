---
name: aicontracts
description: AI Contract Review skills — clause extraction, risk scoring, redline suggestions, contract comparison, and more. Apply when the engagement scope includes ai contract review work or the consultant references contract, clause, indemnity.
---

# AICONTRACTS — AI Contract Review

## Capability overview

**Code:** AICONTRACTS
**Full name:** AI Contract Review
**Description:** AI contract review — clause extraction, risk scoring, confidence-gated exports, comparison to market standard.

---

## Skills index

| # | Skill | Command | Purpose |
|---|---|---|---|
| 1 | Clause Extraction | `/omega-aicontracts:clause-extract` | Extract named clauses (indemnity, limitation of liability, IP, termination, etc.) with confidence scores. |
| 2 | Risk Scoring | `/omega-aicontracts:risk-score` | Score extracted clauses against playbook standards; flag deviations. |
| 3 | Redline Suggestions | `/omega-aicontracts:redline` | Propose redlines to bring deviations into playbook compliance. |
| 4 | Contract Comparison | `/omega-aicontracts:compare` | Compare two contracts clause-by-clause; produce delta report. |

---

## Skill 1: Clause Extraction

### Command: `/omega-aicontracts:clause-extract`

### Purpose
Extract named clauses (indemnity, limitation of liability, IP, termination, etc.) with confidence scores.

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
3. **Analyze.** Apply the Clause Extraction method using domain frameworks (see Frameworks section of the agent).
4. **Synthesize.** Produce primary deliverable with recommendations, evidence, and risks.
5. **Validate.** Run `/omega:verify-quality` and pass through Every extracted clause has confidence score; <0.85 is flagged for human review.

### Output shape
A Omega-branded `Clause Extraction` deliverable in `05_Deliverables_Final/`. Pyramid-Principle structured, sourced, and reviewed.

### Quality checklist
- Every extracted clause has confidence score; <0.85 is flagged for human review
- Risk scores reference an explicit playbook clause / threshold
- Redlines are tracked against the original; no silent edits

---

## Skill 2: Risk Scoring

### Command: `/omega-aicontracts:risk-score`

### Purpose
Score extracted clauses against playbook standards; flag deviations.

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
3. **Analyze.** Apply the Risk Scoring method using domain frameworks (see Frameworks section of the agent).
4. **Synthesize.** Produce primary deliverable with recommendations, evidence, and risks.
5. **Validate.** Run `/omega:verify-quality` and pass through Every extracted clause has confidence score; <0.85 is flagged for human review.

### Output shape
A Omega-branded `Risk Scoring` deliverable in `05_Deliverables_Final/`. Pyramid-Principle structured, sourced, and reviewed.

### Quality checklist
- Every extracted clause has confidence score; <0.85 is flagged for human review
- Risk scores reference an explicit playbook clause / threshold
- Redlines are tracked against the original; no silent edits

---

## Skill 3: Redline Suggestions

### Command: `/omega-aicontracts:redline`

### Purpose
Propose redlines to bring deviations into playbook compliance.

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
3. **Analyze.** Apply the Redline Suggestions method using domain frameworks (see Frameworks section of the agent).
4. **Synthesize.** Produce primary deliverable with recommendations, evidence, and risks.
5. **Validate.** Run `/omega:verify-quality` and pass through Every extracted clause has confidence score; <0.85 is flagged for human review.

### Output shape
A Omega-branded `Redline Suggestions` deliverable in `05_Deliverables_Final/`. Pyramid-Principle structured, sourced, and reviewed.

### Quality checklist
- Every extracted clause has confidence score; <0.85 is flagged for human review
- Risk scores reference an explicit playbook clause / threshold
- Redlines are tracked against the original; no silent edits

---

## Skill 4: Contract Comparison

### Command: `/omega-aicontracts:compare`

### Purpose
Compare two contracts clause-by-clause; produce delta report.

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
3. **Analyze.** Apply the Contract Comparison method using domain frameworks (see Frameworks section of the agent).
4. **Synthesize.** Produce primary deliverable with recommendations, evidence, and risks.
5. **Validate.** Run `/omega:verify-quality` and pass through Every extracted clause has confidence score; <0.85 is flagged for human review.

### Output shape
A Omega-branded `Contract Comparison` deliverable in `05_Deliverables_Final/`. Pyramid-Principle structured, sourced, and reviewed.

### Quality checklist
- Every extracted clause has confidence score; <0.85 is flagged for human review
- Risk scores reference an explicit playbook clause / threshold
- Redlines are tracked against the original; no silent edits

---


## Cross-skill workflows

```
Discovery → /omega-aicontracts:clause-extract → /omega-aicontracts:risk-score → Recommendations
```

## Integration with other Omega plugins

| Plugin | Integration point |
|---|---|
| `omega-ai-dd` | Contract review during legal due diligence |
| `omega-ai-regs` | Regulatory clauses (e.g., GDPR DPAs) |

## Templates & artifacts

All deliverables use standard Omega branding via:
- `/doc-gen` for document generation
- `assets/omega-branding.json` for styling
- `scripts/omega-document-generator.js` for automation

| Skill | Primary artifact | Format |
|---|---|---|
| `/omega-aicontracts:clause-extract` | Clause Extraction Report | DOCX/PDF |
| `/omega-aicontracts:risk-score` | Risk Scoring Report | DOCX/PDF |
| `/omega-aicontracts:redline` | Redline Suggestions Report | DOCX/PDF |
| `/omega-aicontracts:compare` | Contract Comparison Report | DOCX/PDF |
