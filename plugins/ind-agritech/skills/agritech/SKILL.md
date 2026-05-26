---
name: agritech
description: Agriculture & Agritech skills — crop economics, irrigation strategy, food traceability, climate-smart pathway, and more. Apply when the engagement scope includes agriculture & agritech work or the consultant references agriculture, agritech, crop.
---

# AGRITECH — Agriculture & Agritech

## Capability overview

**Code:** AGRITECH
**Full name:** Agriculture & Agritech
**Description:** Agriculture & agritech — crop economics, irrigation, food traceability, climate-smart agriculture.

---

## Skills index

| # | Skill | Command | Purpose |
|---|---|---|---|
| 1 | Crop Economics | `/omega-agritech:crop-econ` | Build crop economics model (gross margin per ha) by crop and farming system. |
| 2 | Irrigation Strategy | `/omega-agritech:irrigation-design` | Design irrigation strategy balancing water cost, crop yield, sustainability. |
| 3 | Food Traceability | `/omega-agritech:traceability` | Design farm-to-fork traceability system aligned to GFSI / GS1. |
| 4 | Climate-Smart Pathway | `/omega-agritech:csa-pathway` | Develop climate-smart agriculture pathway (mitigation + adaptation + productivity). |

---

## Skill 1: Crop Economics

### Command: `/omega-agritech:crop-econ`

### Purpose
Build crop economics model (gross margin per ha) by crop and farming system.

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
3. **Analyze.** Apply the Crop Economics method using domain frameworks (see Frameworks section of the agent).
4. **Synthesize.** Produce primary deliverable with recommendations, evidence, and risks.
5. **Validate.** Run `/omega:verify-quality` and pass through Crop economics shown per ha with yield, price, cost, gross margin.

### Output shape
A Omega-branded `Crop Economics` deliverable in `05_Deliverables_Final/`. Pyramid-Principle structured, sourced, and reviewed.

### Quality checklist
- Crop economics shown per ha with yield, price, cost, gross margin
- Irrigation recommendations cite water productivity (crop per drop)
- Traceability designs map to GS1 standards and GFSI scheme requirements

---

## Skill 2: Irrigation Strategy

### Command: `/omega-agritech:irrigation-design`

### Purpose
Design irrigation strategy balancing water cost, crop yield, sustainability.

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
3. **Analyze.** Apply the Irrigation Strategy method using domain frameworks (see Frameworks section of the agent).
4. **Synthesize.** Produce primary deliverable with recommendations, evidence, and risks.
5. **Validate.** Run `/omega:verify-quality` and pass through Crop economics shown per ha with yield, price, cost, gross margin.

### Output shape
A Omega-branded `Irrigation Strategy` deliverable in `05_Deliverables_Final/`. Pyramid-Principle structured, sourced, and reviewed.

### Quality checklist
- Crop economics shown per ha with yield, price, cost, gross margin
- Irrigation recommendations cite water productivity (crop per drop)
- Traceability designs map to GS1 standards and GFSI scheme requirements

---

## Skill 3: Food Traceability

### Command: `/omega-agritech:traceability`

### Purpose
Design farm-to-fork traceability system aligned to GFSI / GS1.

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
3. **Analyze.** Apply the Food Traceability method using domain frameworks (see Frameworks section of the agent).
4. **Synthesize.** Produce primary deliverable with recommendations, evidence, and risks.
5. **Validate.** Run `/omega:verify-quality` and pass through Crop economics shown per ha with yield, price, cost, gross margin.

### Output shape
A Omega-branded `Food Traceability` deliverable in `05_Deliverables_Final/`. Pyramid-Principle structured, sourced, and reviewed.

### Quality checklist
- Crop economics shown per ha with yield, price, cost, gross margin
- Irrigation recommendations cite water productivity (crop per drop)
- Traceability designs map to GS1 standards and GFSI scheme requirements

---

## Skill 4: Climate-Smart Pathway

### Command: `/omega-agritech:csa-pathway`

### Purpose
Develop climate-smart agriculture pathway (mitigation + adaptation + productivity).

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
3. **Analyze.** Apply the Climate-Smart Pathway method using domain frameworks (see Frameworks section of the agent).
4. **Synthesize.** Produce primary deliverable with recommendations, evidence, and risks.
5. **Validate.** Run `/omega:verify-quality` and pass through Crop economics shown per ha with yield, price, cost, gross margin.

### Output shape
A Omega-branded `Climate-Smart Pathway` deliverable in `05_Deliverables_Final/`. Pyramid-Principle structured, sourced, and reviewed.

### Quality checklist
- Crop economics shown per ha with yield, price, cost, gross margin
- Irrigation recommendations cite water productivity (crop per drop)
- Traceability designs map to GS1 standards and GFSI scheme requirements

---


## Cross-skill workflows

```
Discovery → /omega-agritech:crop-econ → /omega-agritech:irrigation-design → Recommendations
```

## Integration with other Omega plugins

| Plugin | Integration point |
|---|---|
| `omega-esg` | Carbon and water footprint |
| `omega-supply` | Agri supply chain |

## Templates & artifacts

All deliverables use standard Omega branding via:
- `/doc-gen` for document generation
- `assets/omega-branding.json` for styling
- `scripts/omega-document-generator.js` for automation

| Skill | Primary artifact | Format |
|---|---|---|
| `/omega-agritech:crop-econ` | Crop Economics Report | DOCX/PDF |
| `/omega-agritech:irrigation-design` | Irrigation Strategy Report | DOCX/PDF |
| `/omega-agritech:traceability` | Food Traceability Report | DOCX/PDF |
| `/omega-agritech:csa-pathway` | Climate-Smart Pathway Report | DOCX/PDF |
