---
name: pharma
description: Pharma & Life Sciences skills — gxp readiness, clinical trial design review, pharmacovigilance process, regulatory strategy, and more. Apply when the engagement scope includes pharma & life sciences work or the consultant references pharma, life sciences, GxP.
---

# PHARMA — Pharma & Life Sciences

## Capability overview

**Code:** PHARMA
**Full name:** Pharma & Life Sciences
**Description:** Pharma & life sciences — GxP, clinical trials, pharmacovigilance, regulatory filings (FDA / EMA / GCC).

---

## Skills index

| # | Skill | Command | Purpose |
|---|---|---|---|
| 1 | GxP Readiness | `/omega-pharma:gxp-readiness` | Assess GxP (GMP/GLP/GCP/GDP) readiness; identify control gaps. |
| 2 | Clinical Trial Design Review | `/omega-pharma:trial-design` | Review clinical trial protocol design and statistical approach. |
| 3 | Pharmacovigilance Process | `/omega-pharma:pv-process` | Assess PV process including ICSR handling, signal detection, PSUR/PBRER. |
| 4 | Regulatory Strategy | `/omega-pharma:regulatory-strategy` | Define filing strategy across FDA / EMA / GCC including pathway selection. |
| 5 | Launch Readiness | `/omega-pharma:launch-readiness` | Assess launch readiness across supply, market access, medical, commercial. |

---

## Skill 1: GxP Readiness

### Command: `/omega-pharma:gxp-readiness`

### Purpose
Assess GxP (GMP/GLP/GCP/GDP) readiness; identify control gaps.

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
3. **Analyze.** Apply the GxP Readiness method using domain frameworks (see Frameworks section of the agent).
4. **Synthesize.** Produce primary deliverable with recommendations, evidence, and risks.
5. **Validate.** Run `/omega:verify-quality` and pass through GxP findings link to specific regulation (21 CFR 211, ICH Q7, etc.).

### Output shape
A Omega-branded `GxP Readiness` deliverable in `05_Deliverables_Final/`. Pyramid-Principle structured, sourced, and reviewed.

### Quality checklist
- GxP findings link to specific regulation (21 CFR 211, ICH Q7, etc.)
- Trial design comments reference ICH E9 / E10 / GCP
- PV findings cite EMA GVP modules / FDA 21 CFR 314.80

---

## Skill 2: Clinical Trial Design Review

### Command: `/omega-pharma:trial-design`

### Purpose
Review clinical trial protocol design and statistical approach.

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
3. **Analyze.** Apply the Clinical Trial Design Review method using domain frameworks (see Frameworks section of the agent).
4. **Synthesize.** Produce primary deliverable with recommendations, evidence, and risks.
5. **Validate.** Run `/omega:verify-quality` and pass through GxP findings link to specific regulation (21 CFR 211, ICH Q7, etc.).

### Output shape
A Omega-branded `Clinical Trial Design Review` deliverable in `05_Deliverables_Final/`. Pyramid-Principle structured, sourced, and reviewed.

### Quality checklist
- GxP findings link to specific regulation (21 CFR 211, ICH Q7, etc.)
- Trial design comments reference ICH E9 / E10 / GCP
- PV findings cite EMA GVP modules / FDA 21 CFR 314.80

---

## Skill 3: Pharmacovigilance Process

### Command: `/omega-pharma:pv-process`

### Purpose
Assess PV process including ICSR handling, signal detection, PSUR/PBRER.

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
3. **Analyze.** Apply the Pharmacovigilance Process method using domain frameworks (see Frameworks section of the agent).
4. **Synthesize.** Produce primary deliverable with recommendations, evidence, and risks.
5. **Validate.** Run `/omega:verify-quality` and pass through GxP findings link to specific regulation (21 CFR 211, ICH Q7, etc.).

### Output shape
A Omega-branded `Pharmacovigilance Process` deliverable in `05_Deliverables_Final/`. Pyramid-Principle structured, sourced, and reviewed.

### Quality checklist
- GxP findings link to specific regulation (21 CFR 211, ICH Q7, etc.)
- Trial design comments reference ICH E9 / E10 / GCP
- PV findings cite EMA GVP modules / FDA 21 CFR 314.80

---

## Skill 4: Regulatory Strategy

### Command: `/omega-pharma:regulatory-strategy`

### Purpose
Define filing strategy across FDA / EMA / GCC including pathway selection.

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
3. **Analyze.** Apply the Regulatory Strategy method using domain frameworks (see Frameworks section of the agent).
4. **Synthesize.** Produce primary deliverable with recommendations, evidence, and risks.
5. **Validate.** Run `/omega:verify-quality` and pass through GxP findings link to specific regulation (21 CFR 211, ICH Q7, etc.).

### Output shape
A Omega-branded `Regulatory Strategy` deliverable in `05_Deliverables_Final/`. Pyramid-Principle structured, sourced, and reviewed.

### Quality checklist
- GxP findings link to specific regulation (21 CFR 211, ICH Q7, etc.)
- Trial design comments reference ICH E9 / E10 / GCP
- PV findings cite EMA GVP modules / FDA 21 CFR 314.80

---

## Skill 5: Launch Readiness

### Command: `/omega-pharma:launch-readiness`

### Purpose
Assess launch readiness across supply, market access, medical, commercial.

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
3. **Analyze.** Apply the Launch Readiness method using domain frameworks (see Frameworks section of the agent).
4. **Synthesize.** Produce primary deliverable with recommendations, evidence, and risks.
5. **Validate.** Run `/omega:verify-quality` and pass through GxP findings link to specific regulation (21 CFR 211, ICH Q7, etc.).

### Output shape
A Omega-branded `Launch Readiness` deliverable in `05_Deliverables_Final/`. Pyramid-Principle structured, sourced, and reviewed.

### Quality checklist
- GxP findings link to specific regulation (21 CFR 211, ICH Q7, etc.)
- Trial design comments reference ICH E9 / E10 / GCP
- PV findings cite EMA GVP modules / FDA 21 CFR 314.80

---


## Cross-skill workflows

```
Discovery → /omega-pharma:gxp-readiness → /omega-pharma:trial-design → Recommendations
```

## Integration with other Omega plugins

| Plugin | Integration point |
|---|---|
| `omega-iso` | ISO 13485 medical-device QMS |
| `omega-cyber` | GxP system validation security |
| `omega-ai-regs` | Regulatory horizon scan (FDA / EMA guidance) |

## Templates & artifacts

All deliverables use standard Omega branding via:
- `/doc-gen` for document generation
- `assets/omega-branding.json` for styling
- `scripts/omega-document-generator.js` for automation

| Skill | Primary artifact | Format |
|---|---|---|
| `/omega-pharma:gxp-readiness` | GxP Readiness Report | DOCX/PDF |
| `/omega-pharma:trial-design` | Clinical Trial Design Review Report | DOCX/PDF |
| `/omega-pharma:pv-process` | Pharmacovigilance Process Report | DOCX/PDF |
| `/omega-pharma:regulatory-strategy` | Regulatory Strategy Report | DOCX/PDF |
| `/omega-pharma:launch-readiness` | Launch Readiness Report | DOCX/PDF |
