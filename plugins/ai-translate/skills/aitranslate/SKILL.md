---
name: aitranslate
description: AI Bilingual Translation skills — glossary init, translate deliverable, parity check, extend glossary, and more. Apply when the engagement scope includes ai bilingual translation work or the consultant references translate, translation, bilingual.
---

# AITRANSLATE — AI Bilingual Translation

## Capability overview

**Code:** AITRANSLATE
**Full name:** AI Bilingual Translation
**Description:** AI bilingual deliverables — domain glossary enforcement, AR/EN parity checks, terminology consistency.

---

## Skills index

| # | Skill | Command | Purpose |
|---|---|---|---|
| 1 | Glossary Init | `/omega-aitranslate:glossary-init` | Initialize domain glossary from existing deliverables; seed AR/EN pairs. |
| 2 | Translate Deliverable | `/omega-aitranslate:translate` | Translate a deliverable to/from Arabic with glossary enforcement. |
| 3 | Parity Check | `/omega-aitranslate:parity-check` | Verify AR/EN versions of a deliverable match on structure and key terms. |
| 4 | Extend Glossary | `/omega-aitranslate:glossary-extend` | Propose new AR/EN term pairs from a draft document. |

---

## Skill 1: Glossary Init

### Command: `/omega-aitranslate:glossary-init`

### Purpose
Initialize domain glossary from existing deliverables; seed AR/EN pairs.

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
3. **Analyze.** Apply the Glossary Init method using domain frameworks (see Frameworks section of the agent).
4. **Synthesize.** Produce primary deliverable with recommendations, evidence, and risks.
5. **Validate.** Run `/omega:verify-quality` and pass through Glossary coverage ≥90% (glossary-coverage hook enforces).

### Output shape
A Omega-branded `Glossary Init` deliverable in `05_Deliverables_Final/`. Pyramid-Principle structured, sourced, and reviewed.

### Quality checklist
- Glossary coverage ≥90% (glossary-coverage hook enforces)
- Every translated deliverable has an EN side and AR side with matching structure
- New terms proposed for human approval before adding to glossary

---

## Skill 2: Translate Deliverable

### Command: `/omega-aitranslate:translate`

### Purpose
Translate a deliverable to/from Arabic with glossary enforcement.

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
3. **Analyze.** Apply the Translate Deliverable method using domain frameworks (see Frameworks section of the agent).
4. **Synthesize.** Produce primary deliverable with recommendations, evidence, and risks.
5. **Validate.** Run `/omega:verify-quality` and pass through Glossary coverage ≥90% (glossary-coverage hook enforces).

### Output shape
A Omega-branded `Translate Deliverable` deliverable in `05_Deliverables_Final/`. Pyramid-Principle structured, sourced, and reviewed.

### Quality checklist
- Glossary coverage ≥90% (glossary-coverage hook enforces)
- Every translated deliverable has an EN side and AR side with matching structure
- New terms proposed for human approval before adding to glossary

---

## Skill 3: Parity Check

### Command: `/omega-aitranslate:parity-check`

### Purpose
Verify AR/EN versions of a deliverable match on structure and key terms.

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
3. **Analyze.** Apply the Parity Check method using domain frameworks (see Frameworks section of the agent).
4. **Synthesize.** Produce primary deliverable with recommendations, evidence, and risks.
5. **Validate.** Run `/omega:verify-quality` and pass through Glossary coverage ≥90% (glossary-coverage hook enforces).

### Output shape
A Omega-branded `Parity Check` deliverable in `05_Deliverables_Final/`. Pyramid-Principle structured, sourced, and reviewed.

### Quality checklist
- Glossary coverage ≥90% (glossary-coverage hook enforces)
- Every translated deliverable has an EN side and AR side with matching structure
- New terms proposed for human approval before adding to glossary

---

## Skill 4: Extend Glossary

### Command: `/omega-aitranslate:glossary-extend`

### Purpose
Propose new AR/EN term pairs from a draft document.

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
3. **Analyze.** Apply the Extend Glossary method using domain frameworks (see Frameworks section of the agent).
4. **Synthesize.** Produce primary deliverable with recommendations, evidence, and risks.
5. **Validate.** Run `/omega:verify-quality` and pass through Glossary coverage ≥90% (glossary-coverage hook enforces).

### Output shape
A Omega-branded `Extend Glossary` deliverable in `05_Deliverables_Final/`. Pyramid-Principle structured, sourced, and reviewed.

### Quality checklist
- Glossary coverage ≥90% (glossary-coverage hook enforces)
- Every translated deliverable has an EN side and AR side with matching structure
- New terms proposed for human approval before adding to glossary

---


## Cross-skill workflows

```
Discovery → /omega-aitranslate:glossary-init → /omega-aitranslate:translate → Recommendations
```

## Integration with other Omega plugins

| Plugin | Integration point |
|---|---|
| `omega-core` | Glossary stored in .brain/glossary.json |
| `omega-ai-personas` | Bilingual persona quotes |

## Templates & artifacts

All deliverables use standard Omega branding via:
- `/doc-gen` for document generation
- `assets/omega-branding.json` for styling
- `scripts/omega-document-generator.js` for automation

| Skill | Primary artifact | Format |
|---|---|---|
| `/omega-aitranslate:glossary-init` | Glossary Init Report | DOCX/PDF |
| `/omega-aitranslate:translate` | Translate Deliverable Report | DOCX/PDF |
| `/omega-aitranslate:parity-check` | Parity Check Report | DOCX/PDF |
| `/omega-aitranslate:glossary-extend` | Extend Glossary Report | DOCX/PDF |
