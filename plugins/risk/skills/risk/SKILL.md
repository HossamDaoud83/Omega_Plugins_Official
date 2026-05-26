---
name: risk
description: Enterprise Risk Management skills — erm framework, risk appetite, control mapping, bcp / dr plan, and more. Apply when the engagement scope includes enterprise risk management work or the consultant references risk, ERM, COSO.
---

# RISK — Enterprise Risk Management

## Capability overview

**Code:** RISK
**Full name:** Enterprise Risk Management
**Description:** Enterprise risk management — ERM frameworks (COSO, ISO 31000), risk appetite, control mapping, BCP/DR, operational resilience.

---

## Skills index

| # | Skill | Command | Purpose |
|---|---|---|---|
| 1 | ERM Framework | `/omega-risk:erm-framework` | Design or refresh enterprise risk framework aligned to COSO ERM 2017 / ISO 31000. |
| 2 | Risk Appetite | `/omega-risk:risk-appetite` | Define risk appetite statement and quantitative tolerance thresholds per category. |
| 3 | Control Mapping | `/omega-risk:control-map` | Map risks to controls; identify orphan risks and over-controlled areas. |
| 4 | BCP / DR Plan | `/omega-risk:bcp-dr` | Develop business continuity and disaster recovery plans with RTO/RPO targets. |
| 5 | Operational Resilience | `/omega-risk:op-resilience` | Stress-test critical business services against severe-but-plausible scenarios (per BoE / DORA). |
| 6 | Risk Register Build | `/omega-risk:risk-register` | Build / refresh enterprise risk register with risk owners, residual scoring. |

---

## Skill 1: ERM Framework

### Command: `/omega-risk:erm-framework`

### Purpose
Design or refresh enterprise risk framework aligned to COSO ERM 2017 / ISO 31000.

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
3. **Analyze.** Apply the ERM Framework method using domain frameworks (see Frameworks section of the agent).
4. **Synthesize.** Produce primary deliverable with recommendations, evidence, and risks.
5. **Validate.** Run `/omega:verify-quality` and pass through Every risk has a named owner, inherent score, residual score, and ≥1 mapped control.

### Output shape
A Omega-branded `ERM Framework` deliverable in `05_Deliverables_Final/`. Pyramid-Principle structured, sourced, and reviewed.

### Quality checklist
- Every risk has a named owner, inherent score, residual score, and ≥1 mapped control
- Risk appetite has both qualitative statement AND quantitative tolerance bands
- BCP includes RTO/RPO per critical business service; DR scenarios tested annually

---

## Skill 2: Risk Appetite

### Command: `/omega-risk:risk-appetite`

### Purpose
Define risk appetite statement and quantitative tolerance thresholds per category.

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
3. **Analyze.** Apply the Risk Appetite method using domain frameworks (see Frameworks section of the agent).
4. **Synthesize.** Produce primary deliverable with recommendations, evidence, and risks.
5. **Validate.** Run `/omega:verify-quality` and pass through Every risk has a named owner, inherent score, residual score, and ≥1 mapped control.

### Output shape
A Omega-branded `Risk Appetite` deliverable in `05_Deliverables_Final/`. Pyramid-Principle structured, sourced, and reviewed.

### Quality checklist
- Every risk has a named owner, inherent score, residual score, and ≥1 mapped control
- Risk appetite has both qualitative statement AND quantitative tolerance bands
- BCP includes RTO/RPO per critical business service; DR scenarios tested annually

---

## Skill 3: Control Mapping

### Command: `/omega-risk:control-map`

### Purpose
Map risks to controls; identify orphan risks and over-controlled areas.

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
3. **Analyze.** Apply the Control Mapping method using domain frameworks (see Frameworks section of the agent).
4. **Synthesize.** Produce primary deliverable with recommendations, evidence, and risks.
5. **Validate.** Run `/omega:verify-quality` and pass through Every risk has a named owner, inherent score, residual score, and ≥1 mapped control.

### Output shape
A Omega-branded `Control Mapping` deliverable in `05_Deliverables_Final/`. Pyramid-Principle structured, sourced, and reviewed.

### Quality checklist
- Every risk has a named owner, inherent score, residual score, and ≥1 mapped control
- Risk appetite has both qualitative statement AND quantitative tolerance bands
- BCP includes RTO/RPO per critical business service; DR scenarios tested annually

---

## Skill 4: BCP / DR Plan

### Command: `/omega-risk:bcp-dr`

### Purpose
Develop business continuity and disaster recovery plans with RTO/RPO targets.

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
3. **Analyze.** Apply the BCP / DR Plan method using domain frameworks (see Frameworks section of the agent).
4. **Synthesize.** Produce primary deliverable with recommendations, evidence, and risks.
5. **Validate.** Run `/omega:verify-quality` and pass through Every risk has a named owner, inherent score, residual score, and ≥1 mapped control.

### Output shape
A Omega-branded `BCP / DR Plan` deliverable in `05_Deliverables_Final/`. Pyramid-Principle structured, sourced, and reviewed.

### Quality checklist
- Every risk has a named owner, inherent score, residual score, and ≥1 mapped control
- Risk appetite has both qualitative statement AND quantitative tolerance bands
- BCP includes RTO/RPO per critical business service; DR scenarios tested annually

---

## Skill 5: Operational Resilience

### Command: `/omega-risk:op-resilience`

### Purpose
Stress-test critical business services against severe-but-plausible scenarios (per BoE / DORA).

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
3. **Analyze.** Apply the Operational Resilience method using domain frameworks (see Frameworks section of the agent).
4. **Synthesize.** Produce primary deliverable with recommendations, evidence, and risks.
5. **Validate.** Run `/omega:verify-quality` and pass through Every risk has a named owner, inherent score, residual score, and ≥1 mapped control.

### Output shape
A Omega-branded `Operational Resilience` deliverable in `05_Deliverables_Final/`. Pyramid-Principle structured, sourced, and reviewed.

### Quality checklist
- Every risk has a named owner, inherent score, residual score, and ≥1 mapped control
- Risk appetite has both qualitative statement AND quantitative tolerance bands
- BCP includes RTO/RPO per critical business service; DR scenarios tested annually

---

## Skill 6: Risk Register Build

### Command: `/omega-risk:risk-register`

### Purpose
Build / refresh enterprise risk register with risk owners, residual scoring.

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
3. **Analyze.** Apply the Risk Register Build method using domain frameworks (see Frameworks section of the agent).
4. **Synthesize.** Produce primary deliverable with recommendations, evidence, and risks.
5. **Validate.** Run `/omega:verify-quality` and pass through Every risk has a named owner, inherent score, residual score, and ≥1 mapped control.

### Output shape
A Omega-branded `Risk Register Build` deliverable in `05_Deliverables_Final/`. Pyramid-Principle structured, sourced, and reviewed.

### Quality checklist
- Every risk has a named owner, inherent score, residual score, and ≥1 mapped control
- Risk appetite has both qualitative statement AND quantitative tolerance bands
- BCP includes RTO/RPO per critical business service; DR scenarios tested annually

---


## Cross-skill workflows

```
Discovery → /omega-risk:erm-framework → /omega-risk:risk-appetite → Recommendations
```

## Integration with other Omega plugins

| Plugin | Integration point |
|---|---|
| `omega-cyber` | Cyber risks feed into the enterprise risk register |
| `omega-pmo` | RAID logs roll up to enterprise risk view |
| `omega-iso` | ISO 22301 (BCM) certification readiness |

## Templates & artifacts

All deliverables use standard Omega branding via:
- `/doc-gen` for document generation
- `assets/omega-branding.json` for styling
- `scripts/omega-document-generator.js` for automation

| Skill | Primary artifact | Format |
|---|---|---|
| `/omega-risk:erm-framework` | ERM Framework Report | DOCX/PDF |
| `/omega-risk:risk-appetite` | Risk Appetite Report | DOCX/PDF |
| `/omega-risk:control-map` | Control Mapping Report | DOCX/PDF |
| `/omega-risk:bcp-dr` | BCP / DR Plan Report | DOCX/PDF |
| `/omega-risk:op-resilience` | Operational Resilience Report | DOCX/PDF |
| `/omega-risk:risk-register` | Risk Register Build Report | DOCX/PDF |
