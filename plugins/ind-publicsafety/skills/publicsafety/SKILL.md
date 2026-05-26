---
name: publicsafety
description: Public Safety skills — cad/rms review, response time analysis, emergency mgmt readiness, mission critical comms, and more. Apply when the engagement scope includes public safety work or the consultant references public safety, police, fire.
---

# PUBLICSAFETY — Public Safety

## Capability overview

**Code:** PUBLICSAFETY
**Full name:** Public Safety
**Description:** Public safety — police, fire/EMS, emergency management, command-and-control modernization.

---

## Skills index

| # | Skill | Command | Purpose |
|---|---|---|---|
| 1 | CAD/RMS Review | `/omega-publicsafety:cad-review` | Review computer-aided dispatch and records management system maturity. |
| 2 | Response Time Analysis | `/omega-publicsafety:response-time` | Analyze response times by call type, district, time-of-day; identify bottlenecks. |
| 3 | Emergency Mgmt Readiness | `/omega-publicsafety:em-readiness` | Assess emergency-management readiness against ICS / NIMS / equivalent. |
| 4 | Mission Critical Comms | `/omega-publicsafety:mcc-strategy` | Strategize mission-critical communications (LMR, P25, MCPTT). |

---

## Skill 1: CAD/RMS Review

### Command: `/omega-publicsafety:cad-review`

### Purpose
Review computer-aided dispatch and records management system maturity.

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
3. **Analyze.** Apply the CAD/RMS Review method using domain frameworks (see Frameworks section of the agent).
4. **Synthesize.** Produce primary deliverable with recommendations, evidence, and risks.
5. **Validate.** Run `/omega:verify-quality` and pass through CAD/RMS review cites NIBRS / FBI/Interpol data standards.

### Output shape
A Omega-branded `CAD/RMS Review` deliverable in `05_Deliverables_Final/`. Pyramid-Principle structured, sourced, and reviewed.

### Quality checklist
- CAD/RMS review cites NIBRS / FBI/Interpol data standards
- Response time analysis disaggregates by priority and rural/urban
- EM readiness mapped to ICS / NIMS function (or equivalent national framework)

---

## Skill 2: Response Time Analysis

### Command: `/omega-publicsafety:response-time`

### Purpose
Analyze response times by call type, district, time-of-day; identify bottlenecks.

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
3. **Analyze.** Apply the Response Time Analysis method using domain frameworks (see Frameworks section of the agent).
4. **Synthesize.** Produce primary deliverable with recommendations, evidence, and risks.
5. **Validate.** Run `/omega:verify-quality` and pass through CAD/RMS review cites NIBRS / FBI/Interpol data standards.

### Output shape
A Omega-branded `Response Time Analysis` deliverable in `05_Deliverables_Final/`. Pyramid-Principle structured, sourced, and reviewed.

### Quality checklist
- CAD/RMS review cites NIBRS / FBI/Interpol data standards
- Response time analysis disaggregates by priority and rural/urban
- EM readiness mapped to ICS / NIMS function (or equivalent national framework)

---

## Skill 3: Emergency Mgmt Readiness

### Command: `/omega-publicsafety:em-readiness`

### Purpose
Assess emergency-management readiness against ICS / NIMS / equivalent.

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
3. **Analyze.** Apply the Emergency Mgmt Readiness method using domain frameworks (see Frameworks section of the agent).
4. **Synthesize.** Produce primary deliverable with recommendations, evidence, and risks.
5. **Validate.** Run `/omega:verify-quality` and pass through CAD/RMS review cites NIBRS / FBI/Interpol data standards.

### Output shape
A Omega-branded `Emergency Mgmt Readiness` deliverable in `05_Deliverables_Final/`. Pyramid-Principle structured, sourced, and reviewed.

### Quality checklist
- CAD/RMS review cites NIBRS / FBI/Interpol data standards
- Response time analysis disaggregates by priority and rural/urban
- EM readiness mapped to ICS / NIMS function (or equivalent national framework)

---

## Skill 4: Mission Critical Comms

### Command: `/omega-publicsafety:mcc-strategy`

### Purpose
Strategize mission-critical communications (LMR, P25, MCPTT).

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
3. **Analyze.** Apply the Mission Critical Comms method using domain frameworks (see Frameworks section of the agent).
4. **Synthesize.** Produce primary deliverable with recommendations, evidence, and risks.
5. **Validate.** Run `/omega:verify-quality` and pass through CAD/RMS review cites NIBRS / FBI/Interpol data standards.

### Output shape
A Omega-branded `Mission Critical Comms` deliverable in `05_Deliverables_Final/`. Pyramid-Principle structured, sourced, and reviewed.

### Quality checklist
- CAD/RMS review cites NIBRS / FBI/Interpol data standards
- Response time analysis disaggregates by priority and rural/urban
- EM readiness mapped to ICS / NIMS function (or equivalent national framework)

---


## Cross-skill workflows

```
Discovery → /omega-publicsafety:cad-review → /omega-publicsafety:response-time → Recommendations
```

## Integration with other Omega plugins

| Plugin | Integration point |
|---|---|
| `omega-gov` | Public-sector engagement glue |
| `omega-data` | Crime/incident data analytics |
| `omega-cyber` | Public-safety system security |

## Templates & artifacts

All deliverables use standard Omega branding via:
- `/doc-gen` for document generation
- `assets/omega-branding.json` for styling
- `scripts/omega-document-generator.js` for automation

| Skill | Primary artifact | Format |
|---|---|---|
| `/omega-publicsafety:cad-review` | CAD/RMS Review Report | DOCX/PDF |
| `/omega-publicsafety:response-time` | Response Time Analysis Report | DOCX/PDF |
| `/omega-publicsafety:em-readiness` | Emergency Mgmt Readiness Report | DOCX/PDF |
| `/omega-publicsafety:mcc-strategy` | Mission Critical Comms Report | DOCX/PDF |
