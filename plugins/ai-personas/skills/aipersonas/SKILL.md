---
name: aipersonas
description: AI Persona Synthesis skills — interview clustering, persona build, persona journey map, persona refresh, and more. Apply when the engagement scope includes ai persona synthesis work or the consultant references persona, journey, interview.
---

# AIPERSONAS — AI Persona Synthesis

## Capability overview

**Code:** AIPERSONAS
**Full name:** AI Persona Synthesis
**Description:** AI persona synthesis — interview clusters, journey personas, evidence-anchored quotes, persona refresh.

---

## Skills index

| # | Skill | Command | Purpose |
|---|---|---|---|
| 1 | Interview Clustering | `/omega-aipersonas:cluster` | Cluster interview transcripts into candidate personas using thematic analysis. |
| 2 | Persona Build | `/omega-aipersonas:persona-build` | Build canonical persona cards with name, role, JTBD, pain points, evidence-anchored quotes. |
| 3 | Persona Journey Map | `/omega-aipersonas:journey-map` | Map a persona's journey across touchpoints with quotes per moment. |
| 4 | Persona Refresh | `/omega-aipersonas:persona-refresh` | Refresh personas with new interview data; flag drift. |

---

## Skill 1: Interview Clustering

### Command: `/omega-aipersonas:cluster`

### Purpose
Cluster interview transcripts into candidate personas using thematic analysis.

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
3. **Analyze.** Apply the Interview Clustering method using domain frameworks (see Frameworks section of the agent).
4. **Synthesize.** Produce primary deliverable with recommendations, evidence, and risks.
5. **Validate.** Run `/omega:verify-quality` and pass through Every quote attributed (interview ID, date, persona).

### Output shape
A Omega-branded `Interview Clustering` deliverable in `05_Deliverables_Final/`. Pyramid-Principle structured, sourced, and reviewed.

### Quality checklist
- Every quote attributed (interview ID, date, persona)
- No fabricated quotes — only paraphrased or verbatim from real interviews
- Personas grounded in ≥5 interviews each

---

## Skill 2: Persona Build

### Command: `/omega-aipersonas:persona-build`

### Purpose
Build canonical persona cards with name, role, JTBD, pain points, evidence-anchored quotes.

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
3. **Analyze.** Apply the Persona Build method using domain frameworks (see Frameworks section of the agent).
4. **Synthesize.** Produce primary deliverable with recommendations, evidence, and risks.
5. **Validate.** Run `/omega:verify-quality` and pass through Every quote attributed (interview ID, date, persona).

### Output shape
A Omega-branded `Persona Build` deliverable in `05_Deliverables_Final/`. Pyramid-Principle structured, sourced, and reviewed.

### Quality checklist
- Every quote attributed (interview ID, date, persona)
- No fabricated quotes — only paraphrased or verbatim from real interviews
- Personas grounded in ≥5 interviews each

---

## Skill 3: Persona Journey Map

### Command: `/omega-aipersonas:journey-map`

### Purpose
Map a persona's journey across touchpoints with quotes per moment.

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
3. **Analyze.** Apply the Persona Journey Map method using domain frameworks (see Frameworks section of the agent).
4. **Synthesize.** Produce primary deliverable with recommendations, evidence, and risks.
5. **Validate.** Run `/omega:verify-quality` and pass through Every quote attributed (interview ID, date, persona).

### Output shape
A Omega-branded `Persona Journey Map` deliverable in `05_Deliverables_Final/`. Pyramid-Principle structured, sourced, and reviewed.

### Quality checklist
- Every quote attributed (interview ID, date, persona)
- No fabricated quotes — only paraphrased or verbatim from real interviews
- Personas grounded in ≥5 interviews each

---

## Skill 4: Persona Refresh

### Command: `/omega-aipersonas:persona-refresh`

### Purpose
Refresh personas with new interview data; flag drift.

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
3. **Analyze.** Apply the Persona Refresh method using domain frameworks (see Frameworks section of the agent).
4. **Synthesize.** Produce primary deliverable with recommendations, evidence, and risks.
5. **Validate.** Run `/omega:verify-quality` and pass through Every quote attributed (interview ID, date, persona).

### Output shape
A Omega-branded `Persona Refresh` deliverable in `05_Deliverables_Final/`. Pyramid-Principle structured, sourced, and reviewed.

### Quality checklist
- Every quote attributed (interview ID, date, persona)
- No fabricated quotes — only paraphrased or verbatim from real interviews
- Personas grounded in ≥5 interviews each

---


## Cross-skill workflows

```
Discovery → /omega-aipersonas:cluster → /omega-aipersonas:persona-build → Recommendations
```

## Integration with other Omega plugins

| Plugin | Integration point |
|---|---|
| `omega-cx` | Personas drive journey-map work |
| `omega-people` | Personas for change segmentation |

## Templates & artifacts

All deliverables use standard Omega branding via:
- `/doc-gen` for document generation
- `assets/omega-branding.json` for styling
- `scripts/omega-document-generator.js` for automation

| Skill | Primary artifact | Format |
|---|---|---|
| `/omega-aipersonas:cluster` | Interview Clustering Report | DOCX/PDF |
| `/omega-aipersonas:persona-build` | Persona Build Report | DOCX/PDF |
| `/omega-aipersonas:journey-map` | Persona Journey Map Report | DOCX/PDF |
| `/omega-aipersonas:persona-refresh` | Persona Refresh Report | DOCX/PDF |
