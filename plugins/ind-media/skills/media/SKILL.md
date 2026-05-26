---
name: media
description: Media & Entertainment skills — content economics, streaming strategy, rights strategy, ad tech stack, and more. Apply when the engagement scope includes media & entertainment work or the consultant references media, streaming, content.
---

# MEDIA — Media & Entertainment

## Capability overview

**Code:** MEDIA
**Full name:** Media & Entertainment
**Description:** Media & entertainment — content economics, streaming, rights management, ad tech.

---

## Skills index

| # | Skill | Command | Purpose |
|---|---|---|---|
| 1 | Content Economics | `/omega-media:content-econ` | Model content economics: cost per hour, viewing share, unit economics. |
| 2 | Streaming Strategy | `/omega-media:streaming-strategy` | Design streaming strategy: D2C, content mix, monetization model. |
| 3 | Rights Strategy | `/omega-media:rights-strategy` | Strategize rights acquisition / licensing across windows and territories. |
| 4 | Ad Tech Stack | `/omega-media:adtech-stack` | Review ad tech stack (DSP, SSP, DMP, CDP) and identify rationalization opportunities. |

---

## Skill 1: Content Economics

### Command: `/omega-media:content-econ`

### Purpose
Model content economics: cost per hour, viewing share, unit economics.

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
3. **Analyze.** Apply the Content Economics method using domain frameworks (see Frameworks section of the agent).
4. **Synthesize.** Produce primary deliverable with recommendations, evidence, and risks.
5. **Validate.** Run `/omega:verify-quality` and pass through Content economics shown per title with cost-per-hour and viewing-share metrics.

### Output shape
A Omega-branded `Content Economics` deliverable in `05_Deliverables_Final/`. Pyramid-Principle structured, sourced, and reviewed.

### Quality checklist
- Content economics shown per title with cost-per-hour and viewing-share metrics
- Streaming strategy includes monetization model (SVOD/AVOD/FAST/hybrid)
- Rights strategy covers windows + territories explicitly

---

## Skill 2: Streaming Strategy

### Command: `/omega-media:streaming-strategy`

### Purpose
Design streaming strategy: D2C, content mix, monetization model.

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
3. **Analyze.** Apply the Streaming Strategy method using domain frameworks (see Frameworks section of the agent).
4. **Synthesize.** Produce primary deliverable with recommendations, evidence, and risks.
5. **Validate.** Run `/omega:verify-quality` and pass through Content economics shown per title with cost-per-hour and viewing-share metrics.

### Output shape
A Omega-branded `Streaming Strategy` deliverable in `05_Deliverables_Final/`. Pyramid-Principle structured, sourced, and reviewed.

### Quality checklist
- Content economics shown per title with cost-per-hour and viewing-share metrics
- Streaming strategy includes monetization model (SVOD/AVOD/FAST/hybrid)
- Rights strategy covers windows + territories explicitly

---

## Skill 3: Rights Strategy

### Command: `/omega-media:rights-strategy`

### Purpose
Strategize rights acquisition / licensing across windows and territories.

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
3. **Analyze.** Apply the Rights Strategy method using domain frameworks (see Frameworks section of the agent).
4. **Synthesize.** Produce primary deliverable with recommendations, evidence, and risks.
5. **Validate.** Run `/omega:verify-quality` and pass through Content economics shown per title with cost-per-hour and viewing-share metrics.

### Output shape
A Omega-branded `Rights Strategy` deliverable in `05_Deliverables_Final/`. Pyramid-Principle structured, sourced, and reviewed.

### Quality checklist
- Content economics shown per title with cost-per-hour and viewing-share metrics
- Streaming strategy includes monetization model (SVOD/AVOD/FAST/hybrid)
- Rights strategy covers windows + territories explicitly

---

## Skill 4: Ad Tech Stack

### Command: `/omega-media:adtech-stack`

### Purpose
Review ad tech stack (DSP, SSP, DMP, CDP) and identify rationalization opportunities.

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
3. **Analyze.** Apply the Ad Tech Stack method using domain frameworks (see Frameworks section of the agent).
4. **Synthesize.** Produce primary deliverable with recommendations, evidence, and risks.
5. **Validate.** Run `/omega:verify-quality` and pass through Content economics shown per title with cost-per-hour and viewing-share metrics.

### Output shape
A Omega-branded `Ad Tech Stack` deliverable in `05_Deliverables_Final/`. Pyramid-Principle structured, sourced, and reviewed.

### Quality checklist
- Content economics shown per title with cost-per-hour and viewing-share metrics
- Streaming strategy includes monetization model (SVOD/AVOD/FAST/hybrid)
- Rights strategy covers windows + territories explicitly

---


## Cross-skill workflows

```
Discovery → /omega-media:content-econ → /omega-media:streaming-strategy → Recommendations
```

## Integration with other Omega plugins

| Plugin | Integration point |
|---|---|
| `omega-finance` | Content investment ROI |
| `omega-data` | Audience data platforms |

## Templates & artifacts

All deliverables use standard Omega branding via:
- `/doc-gen` for document generation
- `assets/omega-branding.json` for styling
- `scripts/omega-document-generator.js` for automation

| Skill | Primary artifact | Format |
|---|---|---|
| `/omega-media:content-econ` | Content Economics Report | DOCX/PDF |
| `/omega-media:streaming-strategy` | Streaming Strategy Report | DOCX/PDF |
| `/omega-media:rights-strategy` | Rights Strategy Report | DOCX/PDF |
| `/omega-media:adtech-stack` | Ad Tech Stack Report | DOCX/PDF |
