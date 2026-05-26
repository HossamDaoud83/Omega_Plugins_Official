---
name: airesearch
description: AI-Assisted Research skills — topic scoping, source pull, triangulate findings, research synthesis, and more. Apply when the engagement scope includes ai-assisted research work or the consultant references research, secondary research, source triangulation.
---

# AIRESEARCH — AI-Assisted Research

## Capability overview

**Code:** AIRESEARCH
**Full name:** AI-Assisted Research
**Description:** AI-assisted secondary research with source triangulation, citation chains, and confidence flags.

---

## Skills index

| # | Skill | Command | Purpose |
|---|---|---|---|
| 1 | Topic Scoping | `/omega-airesearch:topic-scope` | Frame a research question into PICO / SPIDER style sub-questions and search terms. |
| 2 | Source Pull | `/omega-airesearch:source-pull` | Run multi-source search and pull primary references with citation metadata. |
| 3 | Triangulate Findings | `/omega-airesearch:triangulate` | Cross-check claims across ≥3 independent sources; flag single-source claims. |
| 4 | Research Synthesis | `/omega-airesearch:synthesis` | Synthesize findings into a structured brief with explicit confidence per claim. |
| 5 | Research Gap List | `/omega-airesearch:gap-list` | Identify unresolved questions and recommended primary research. |

---

## Skill 1: Topic Scoping

### Command: `/omega-airesearch:topic-scope`

### Purpose
Frame a research question into PICO / SPIDER style sub-questions and search terms.

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
3. **Analyze.** Apply the Topic Scoping method using domain frameworks (see Frameworks section of the agent).
4. **Synthesize.** Produce primary deliverable with recommendations, evidence, and risks.
5. **Validate.** Run `/omega:verify-quality` and pass through Every claim has ≥1 cited source with date and author.

### Output shape
A Omega-branded `Topic Scoping` deliverable in `05_Deliverables_Final/`. Pyramid-Principle structured, sourced, and reviewed.

### Quality checklist
- Every claim has ≥1 cited source with date and author
- Single-source claims are flagged "single-source — verify"
- Confidence labels (high/medium/low) are explicit on every conclusion

---

## Skill 2: Source Pull

### Command: `/omega-airesearch:source-pull`

### Purpose
Run multi-source search and pull primary references with citation metadata.

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
3. **Analyze.** Apply the Source Pull method using domain frameworks (see Frameworks section of the agent).
4. **Synthesize.** Produce primary deliverable with recommendations, evidence, and risks.
5. **Validate.** Run `/omega:verify-quality` and pass through Every claim has ≥1 cited source with date and author.

### Output shape
A Omega-branded `Source Pull` deliverable in `05_Deliverables_Final/`. Pyramid-Principle structured, sourced, and reviewed.

### Quality checklist
- Every claim has ≥1 cited source with date and author
- Single-source claims are flagged "single-source — verify"
- Confidence labels (high/medium/low) are explicit on every conclusion

---

## Skill 3: Triangulate Findings

### Command: `/omega-airesearch:triangulate`

### Purpose
Cross-check claims across ≥3 independent sources; flag single-source claims.

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
3. **Analyze.** Apply the Triangulate Findings method using domain frameworks (see Frameworks section of the agent).
4. **Synthesize.** Produce primary deliverable with recommendations, evidence, and risks.
5. **Validate.** Run `/omega:verify-quality` and pass through Every claim has ≥1 cited source with date and author.

### Output shape
A Omega-branded `Triangulate Findings` deliverable in `05_Deliverables_Final/`. Pyramid-Principle structured, sourced, and reviewed.

### Quality checklist
- Every claim has ≥1 cited source with date and author
- Single-source claims are flagged "single-source — verify"
- Confidence labels (high/medium/low) are explicit on every conclusion

---

## Skill 4: Research Synthesis

### Command: `/omega-airesearch:synthesis`

### Purpose
Synthesize findings into a structured brief with explicit confidence per claim.

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
3. **Analyze.** Apply the Research Synthesis method using domain frameworks (see Frameworks section of the agent).
4. **Synthesize.** Produce primary deliverable with recommendations, evidence, and risks.
5. **Validate.** Run `/omega:verify-quality` and pass through Every claim has ≥1 cited source with date and author.

### Output shape
A Omega-branded `Research Synthesis` deliverable in `05_Deliverables_Final/`. Pyramid-Principle structured, sourced, and reviewed.

### Quality checklist
- Every claim has ≥1 cited source with date and author
- Single-source claims are flagged "single-source — verify"
- Confidence labels (high/medium/low) are explicit on every conclusion

---

## Skill 5: Research Gap List

### Command: `/omega-airesearch:gap-list`

### Purpose
Identify unresolved questions and recommended primary research.

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
3. **Analyze.** Apply the Research Gap List method using domain frameworks (see Frameworks section of the agent).
4. **Synthesize.** Produce primary deliverable with recommendations, evidence, and risks.
5. **Validate.** Run `/omega:verify-quality` and pass through Every claim has ≥1 cited source with date and author.

### Output shape
A Omega-branded `Research Gap List` deliverable in `05_Deliverables_Final/`. Pyramid-Principle structured, sourced, and reviewed.

### Quality checklist
- Every claim has ≥1 cited source with date and author
- Single-source claims are flagged "single-source — verify"
- Confidence labels (high/medium/low) are explicit on every conclusion

---


## Cross-skill workflows

```
Discovery → /omega-airesearch:topic-scope → /omega-airesearch:source-pull → Recommendations
```

## Integration with other Omega plugins

| Plugin | Integration point |
|---|---|
| `omega-ai-regs` | Regulatory research with freshness gates |
| `omega-ai-dd` | Pre-DD market and target research |
| `omega-str` | Strategy research feeding into market sizing |

## Templates & artifacts

All deliverables use standard Omega branding via:
- `/doc-gen` for document generation
- `assets/omega-branding.json` for styling
- `scripts/omega-document-generator.js` for automation

| Skill | Primary artifact | Format |
|---|---|---|
| `/omega-airesearch:topic-scope` | Topic Scoping Report | DOCX/PDF |
| `/omega-airesearch:source-pull` | Source Pull Report | DOCX/PDF |
| `/omega-airesearch:triangulate` | Triangulate Findings Report | DOCX/PDF |
| `/omega-airesearch:synthesis` | Research Synthesis Report | DOCX/PDF |
| `/omega-airesearch:gap-list` | Research Gap List Report | DOCX/PDF |
