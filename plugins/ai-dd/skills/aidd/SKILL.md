---
name: aidd
description: AI-Assisted Due Diligence skills — data room ingest, red-flag scan, qoe baseline, dd report, and more. Apply when the engagement scope includes ai-assisted due diligence work or the consultant references due diligence, DD, data room.
---

# AIDD — AI-Assisted Due Diligence

## Capability overview

**Code:** AIDD
**Full name:** AI-Assisted Due Diligence
**Description:** AI-assisted due diligence — data room ingest, red-flag extraction, redaction-on-export, structured findings.

---

## Skills index

| # | Skill | Command | Purpose |
|---|---|---|---|
| 1 | Data Room Ingest | `/omega-aidd:dataroom-ingest` | Ingest a data room: classify documents, build inventory, flag missing categories. |
| 2 | Red-Flag Scan | `/omega-aidd:red-flag` | Scan ingested documents for red flags by workstream (commercial, financial, legal, IT, HR). |
| 3 | QoE Baseline | `/omega-aidd:qoe-baseline` | Build quality-of-earnings baseline from financials with normalization adjustments. |
| 4 | DD Report | `/omega-aidd:dd-report` | Author DD report with findings, severity, recommended price/structure adjustments. |
| 5 | Redacted Export | `/omega-aidd:redaction-export` | Export client-facing version with PII / sensitive details redacted. |

---

## Skill 1: Data Room Ingest

### Command: `/omega-aidd:dataroom-ingest`

### Purpose
Ingest a data room: classify documents, build inventory, flag missing categories.

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
3. **Analyze.** Apply the Data Room Ingest method using domain frameworks (see Frameworks section of the agent).
4. **Synthesize.** Produce primary deliverable with recommendations, evidence, and risks.
5. **Validate.** Run `/omega:verify-quality` and pass through Data room inventory shows coverage % vs expected document categories.

### Output shape
A Omega-branded `Data Room Ingest` deliverable in `05_Deliverables_Final/`. Pyramid-Principle structured, sourced, and reviewed.

### Quality checklist
- Data room inventory shows coverage % vs expected document categories
- Every red flag has severity (critical/high/med/low) and an explicit source citation
- QoE adjustments have rationale and tie back to source documents

---

## Skill 2: Red-Flag Scan

### Command: `/omega-aidd:red-flag`

### Purpose
Scan ingested documents for red flags by workstream (commercial, financial, legal, IT, HR).

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
3. **Analyze.** Apply the Red-Flag Scan method using domain frameworks (see Frameworks section of the agent).
4. **Synthesize.** Produce primary deliverable with recommendations, evidence, and risks.
5. **Validate.** Run `/omega:verify-quality` and pass through Data room inventory shows coverage % vs expected document categories.

### Output shape
A Omega-branded `Red-Flag Scan` deliverable in `05_Deliverables_Final/`. Pyramid-Principle structured, sourced, and reviewed.

### Quality checklist
- Data room inventory shows coverage % vs expected document categories
- Every red flag has severity (critical/high/med/low) and an explicit source citation
- QoE adjustments have rationale and tie back to source documents

---

## Skill 3: QoE Baseline

### Command: `/omega-aidd:qoe-baseline`

### Purpose
Build quality-of-earnings baseline from financials with normalization adjustments.

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
3. **Analyze.** Apply the QoE Baseline method using domain frameworks (see Frameworks section of the agent).
4. **Synthesize.** Produce primary deliverable with recommendations, evidence, and risks.
5. **Validate.** Run `/omega:verify-quality` and pass through Data room inventory shows coverage % vs expected document categories.

### Output shape
A Omega-branded `QoE Baseline` deliverable in `05_Deliverables_Final/`. Pyramid-Principle structured, sourced, and reviewed.

### Quality checklist
- Data room inventory shows coverage % vs expected document categories
- Every red flag has severity (critical/high/med/low) and an explicit source citation
- QoE adjustments have rationale and tie back to source documents

---

## Skill 4: DD Report

### Command: `/omega-aidd:dd-report`

### Purpose
Author DD report with findings, severity, recommended price/structure adjustments.

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
3. **Analyze.** Apply the DD Report method using domain frameworks (see Frameworks section of the agent).
4. **Synthesize.** Produce primary deliverable with recommendations, evidence, and risks.
5. **Validate.** Run `/omega:verify-quality` and pass through Data room inventory shows coverage % vs expected document categories.

### Output shape
A Omega-branded `DD Report` deliverable in `05_Deliverables_Final/`. Pyramid-Principle structured, sourced, and reviewed.

### Quality checklist
- Data room inventory shows coverage % vs expected document categories
- Every red flag has severity (critical/high/med/low) and an explicit source citation
- QoE adjustments have rationale and tie back to source documents

---

## Skill 5: Redacted Export

### Command: `/omega-aidd:redaction-export`

### Purpose
Export client-facing version with PII / sensitive details redacted.

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
3. **Analyze.** Apply the Redacted Export method using domain frameworks (see Frameworks section of the agent).
4. **Synthesize.** Produce primary deliverable with recommendations, evidence, and risks.
5. **Validate.** Run `/omega:verify-quality` and pass through Data room inventory shows coverage % vs expected document categories.

### Output shape
A Omega-branded `Redacted Export` deliverable in `05_Deliverables_Final/`. Pyramid-Principle structured, sourced, and reviewed.

### Quality checklist
- Data room inventory shows coverage % vs expected document categories
- Every red flag has severity (critical/high/med/low) and an explicit source citation
- QoE adjustments have rationale and tie back to source documents

---


## Cross-skill workflows

```
Discovery → /omega-aidd:dataroom-ingest → /omega-aidd:red-flag → Recommendations
```

## Integration with other Omega plugins

| Plugin | Integration point |
|---|---|
| `omega-ai-contracts` | Contract clause extraction during legal DD |
| `omega-finance` | Financial modeling for the deal |
| `omega-str` | Strategic rationale and synergy assessment |

## Templates & artifacts

All deliverables use standard Omega branding via:
- `/doc-gen` for document generation
- `assets/omega-branding.json` for styling
- `scripts/omega-document-generator.js` for automation

| Skill | Primary artifact | Format |
|---|---|---|
| `/omega-aidd:dataroom-ingest` | Data Room Ingest Report | DOCX/PDF |
| `/omega-aidd:red-flag` | Red-Flag Scan Report | DOCX/PDF |
| `/omega-aidd:qoe-baseline` | QoE Baseline Report | DOCX/PDF |
| `/omega-aidd:dd-report` | DD Report Report | DOCX/PDF |
| `/omega-aidd:redaction-export` | Redacted Export Report | DOCX/PDF |
