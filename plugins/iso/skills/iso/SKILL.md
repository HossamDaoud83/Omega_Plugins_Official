---
name: iso
description: ISO Certification Preparation skills - gap analysis, audit prep, management systems
---

# ISO Certification Preparation (ISO) Service Line Skills

**Service Line Code:** ISO
**Description:** Gap analysis, management system design, documentation, audit preparation
**Version:** 1.0
**Last Updated:** 2026-02-02

---

## Service Line Overview

ISO Certification Preparation helps organizations achieve international standards compliance:
- Management System Design
- Gap Analysis & Remediation
- Documentation Development
- Internal Audit Programs
- Certification Audit Preparation

---

## Supported ISO Standards

| Standard | Title | Focus |
|----------|-------|-------|
| **ISO 9001:2015** | Quality Management System | Product/service quality |
| **ISO 27001:2022** | Information Security Management | Information security |
| **ISO 42001:2023** | AI Management System | Artificial intelligence |
| **ISO 14001:2015** | Environmental Management | Environmental impact |
| **ISO 45001:2018** | Occupational Health & Safety | Workplace safety |
| **ISO 22301:2019** | Business Continuity Management | Resilience |
| **ISO 20000-1:2018** | IT Service Management | IT services |
| **ISO 27701:2019** | Privacy Information Management | Data privacy |

---

## Available Skills

| # | Skill | Command | Purpose |
|---|-------|---------|---------|
| 1 | Generic Gap Analysis | `/iso-gap` | Multi-standard gap analysis |
| 2 | ISO 9001 QMS | `/iso-9001` | Quality management system |
| 3 | ISO 27001 ISMS | `/iso-27001` | Information security |
| 4 | ISO 42001 AIMS | `/iso-42001` | AI management system |
| 5 | ISO 14001 EMS | `/iso-14001` | Environmental management |
| 6 | ISO 45001 OH&S | `/iso-45001` | Health and safety |
| 7 | ISO 22301 BCMS | `/iso-22301` | Business continuity |
| 8 | Audit Preparation | `/iso-audit-prep` | Certification audit prep |
| 9 | Document Control | `/iso-doc-control` | Documentation management |
| 10 | Internal Audit | `/iso-internal-audit` | Internal audit program |

---

## ISO High-Level Structure (HLS)

All ISO management system standards follow the same structure (Annex SL):

| Clause | Title | Description |
|--------|-------|-------------|
| 1 | Scope | Standard applicability |
| 2 | Normative References | Referenced documents |
| 3 | Terms and Definitions | Key terminology |
| **4** | **Context of the Organization** | Internal/external issues, stakeholders, scope |
| **5** | **Leadership** | Commitment, policy, roles |
| **6** | **Planning** | Risks, opportunities, objectives |
| **7** | **Support** | Resources, competence, awareness, communication, documentation |
| **8** | **Operation** | Operational planning and control |
| **9** | **Performance Evaluation** | Monitoring, internal audit, management review |
| **10** | **Improvement** | Nonconformity, corrective action, continual improvement |

---

## Skill 1: Generic Gap Analysis (`/iso-gap`)

### Purpose
Conduct gap analysis against any ISO management system standard.

### Gap Analysis Process

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                         ISO GAP ANALYSIS PROCESS                            │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  1. SCOPE           2. ASSESS           3. SCORE           4. REMEDIATE    │
│  ───────────        ──────────          ─────────          ────────────    │
│  Define scope       Review each         Score each         Prioritize       │
│  Select standard    clause/control      requirement        Create roadmap   │
│                     against evidence                       Assign owners    │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Gap Scoring Scale

| Score | Status | Description | Evidence |
|-------|--------|-------------|----------|
| **0** | Not Implemented | No evidence of implementation | None |
| **1** | Planned | Implementation planned, not started | Plans documented |
| **2** | Partially Implemented | Some implementation, significant gaps | Partial evidence |
| **3** | Largely Implemented | Mostly complete, minor gaps | Most evidence |
| **4** | Fully Implemented | Complete implementation | Full evidence |
| **5** | Optimized | Continuous improvement demonstrated | Improvement records |

### Gap Priority Classification

| Priority | Criteria | Timeline |
|----------|----------|----------|
| **Critical** | Certification blocker, legal requirement | Immediate (0-1 month) |
| **High** | Major nonconformity likely | Short-term (1-3 months) |
| **Medium** | Minor nonconformity likely | Medium-term (3-6 months) |
| **Low** | Observation/improvement opportunity | Long-term (6-12 months) |

### Output Format

```
═══════════════════════════════════════════════════════════════════════════════
ISO GAP ANALYSIS REPORT
Standard: [ISO XXXXX:YYYY]
Organization: [Name]
Scope: [Defined scope]
Date: [Date]
═══════════════════════════════════════════════════════════════════════════════

OVERALL COMPLIANCE: [XX]%

SUMMARY BY CLAUSE:
─────────────────────────────────────────────────────────────────────────────
│ Clause │ Title                    │ Score │ Compliance │ Gaps │ Priority │
├────────┼──────────────────────────┼───────┼────────────┼──────┼──────────┤
│ 4      │ Context of Organization  │ 3.2   │ 80%        │ 3    │ Medium   │
│ 5      │ Leadership               │ 3.5   │ 87%        │ 2    │ Low      │
│ 6      │ Planning                 │ 2.8   │ 70%        │ 5    │ High     │
│ 7      │ Support                  │ 3.0   │ 75%        │ 4    │ Medium   │
│ 8      │ Operation                │ 2.5   │ 62%        │ 6    │ High     │
│ 9      │ Performance Evaluation   │ 2.2   │ 55%        │ 7    │ Critical │
│ 10     │ Improvement              │ 2.0   │ 50%        │ 4    │ High     │
─────────────────────────────────────────────────────────────────────────────
│ TOTAL  │                          │ 2.7   │ 68%        │ 31   │          │

COMPLIANCE VISUALIZATION:
─────────────────────────────────────────────────────────────────────────────
Clause 4  ████████████████░░░░  80%
Clause 5  █████████████████░░░  87%
Clause 6  ██████████████░░░░░░  70%
Clause 7  ███████████████░░░░░  75%
Clause 8  ████████████░░░░░░░░  62%
Clause 9  ███████████░░░░░░░░░  55%
Clause 10 ██████████░░░░░░░░░░  50%
─────────────────────────────────────────────────────────────────────────────

CRITICAL GAPS (Must Address):
─────────────────────────────────────────────────────────────────────────────
1. [GAP-001] Clause 9.2 - No internal audit program established
   Current: 0 (Not implemented)
   Required: 4 (Fully implemented)
   Impact: Certification will not be granted
   Remediation: Establish internal audit program, train auditors
   Owner: [TBD] | Due: [Date]

2. [GAP-002] Clause 9.3 - Management review not conducted
   Current: 1 (Planned)
   Required: 4 (Fully implemented)
   Impact: Major nonconformity
   Remediation: Conduct management review, document outputs
   Owner: [TBD] | Due: [Date]

HIGH PRIORITY GAPS:
─────────────────────────────────────────────────────────────────────────────
[List of high priority gaps...]

MEDIUM PRIORITY GAPS:
─────────────────────────────────────────────────────────────────────────────
[List of medium priority gaps...]

LOW PRIORITY GAPS:
─────────────────────────────────────────────────────────────────────────────
[List of low priority gaps...]

═══════════════════════════════════════════════════════════════════════════════
REMEDIATION ROADMAP
═══════════════════════════════════════════════════════════════════════════════

PHASE 1: CRITICAL GAPS (Month 1-2)
─────────────────────────────────────────────────────────────────────────────
• Establish internal audit program
• Conduct first management review
• [Other critical items]

PHASE 2: HIGH PRIORITY GAPS (Month 2-4)
─────────────────────────────────────────────────────────────────────────────
• [List of high priority items]

PHASE 3: MEDIUM PRIORITY GAPS (Month 4-6)
─────────────────────────────────────────────────────────────────────────────
• [List of medium priority items]

PHASE 4: OPTIMIZATION (Month 6-9)
─────────────────────────────────────────────────────────────────────────────
• [List of improvements]

CERTIFICATION TIMELINE:
─────────────────────────────────────────────────────────────────────────────
Gap Closure:           [Date]
Internal Audit:        [Date]
Management Review:     [Date]
Stage 1 Audit:         [Date]
Stage 2 Audit:         [Date]
Certification:         [Date]

ESTIMATED EFFORT: [X] person-months
ESTIMATED COST: $[X]

═══════════════════════════════════════════════════════════════════════════════
```

---

## Skill 2: ISO 9001 QMS (`/iso-9001`)

### Purpose
Implement ISO 9001:2015 Quality Management System.

### ISO 9001:2015 Key Requirements

| Clause | Key Requirements |
|--------|------------------|
| 4.1 | Understand internal/external issues |
| 4.2 | Understand stakeholder needs |
| 4.3 | Determine QMS scope |
| 4.4 | Establish QMS and processes |
| 5.1 | Leadership commitment |
| 5.2 | Quality policy |
| 5.3 | Roles, responsibilities, authorities |
| 6.1 | Risk-based thinking |
| 6.2 | Quality objectives |
| 6.3 | Planning changes |
| 7.1 | Resources (people, infrastructure, environment) |
| 7.2 | Competence |
| 7.3 | Awareness |
| 7.4 | Communication |
| 7.5 | Documented information |
| 8.1 | Operational planning and control |
| 8.2 | Customer requirements |
| 8.3 | Design and development |
| 8.4 | External providers |
| 8.5 | Production and service provision |
| 8.6 | Release of products/services |
| 8.7 | Control of nonconforming outputs |
| 9.1 | Monitoring, measurement, analysis |
| 9.2 | Internal audit |
| 9.3 | Management review |
| 10.1 | Improvement - general |
| 10.2 | Nonconformity and corrective action |
| 10.3 | Continual improvement |

### Required Documentation

| Document | Clause | Purpose |
|----------|--------|---------|
| QMS Scope | 4.3 | Define QMS boundaries |
| Quality Policy | 5.2 | Statement of quality commitment |
| Quality Objectives | 6.2 | Measurable goals |
| Quality Manual | - | System overview (optional but recommended) |
| Process Maps | 4.4 | Process definitions |
| Procedures | Various | How to perform activities |
| Work Instructions | Various | Detailed task instructions |
| Forms & Records | Various | Evidence of conformity |

---

## Skill 3: ISO 27001 ISMS (`/iso-27001`)

### Purpose
Implement ISO 27001:2022 Information Security Management System.

### ISO 27001:2022 Structure

**Main Body (Clauses 4-10):** Management system requirements
**Annex A:** 93 controls in 4 categories

### Annex A Control Categories (ISO 27001:2022)

| Category | # Controls | Examples |
|----------|------------|----------|
| A.5 Organizational | 37 | Policies, roles, responsibilities |
| A.6 People | 8 | Screening, training, termination |
| A.7 Physical | 14 | Secure areas, equipment security |
| A.8 Technological | 34 | Access control, cryptography, malware |

### Statement of Applicability (SoA)

The SoA documents:
- All Annex A controls
- Whether each is applicable
- Justification for inclusion/exclusion
- Implementation status

```
═══════════════════════════════════════════════════════════════════════════════
STATEMENT OF APPLICABILITY (SoA)
Organization: [Name]
ISMS Scope: [Scope]
Date: [Date]
═══════════════════════════════════════════════════════════════════════════════

│ Control │ Title                    │ Applicable │ Implemented │ Justification │
├─────────┼──────────────────────────┼────────────┼─────────────┼───────────────┤
│ A.5.1   │ Policies for info sec    │ Yes        │ Yes         │ Required      │
│ A.5.2   │ Info sec roles           │ Yes        │ Yes         │ Required      │
│ A.5.3   │ Segregation of duties    │ Yes        │ Partial     │ Required      │
│ ...     │ ...                      │ ...        │ ...         │ ...           │
│ A.8.34  │ Protection of systems    │ No         │ N/A         │ No ICS/SCADA  │
─────────────────────────────────────────────────────────────────────────────

SUMMARY:
Total Controls: 93
Applicable: 85
Implemented: 72
Partial: 8
Not Implemented: 5
Not Applicable: 8

═══════════════════════════════════════════════════════════════════════════════
```

---

## Skill 4: ISO 42001 AIMS (`/iso-42001`)

### Purpose
Implement ISO 42001:2023 AI Management System.

*Note: Detailed content covered in AIG service line skill `/aig-iso42001-gap`*

### Key Requirements

- AI policy and objectives
- AI risk assessment and treatment
- AI system lifecycle management
- Data quality and governance
- Human oversight mechanisms
- Transparency and explainability
- Third-party AI management

---

## Skill 5: ISO 14001 EMS (`/iso-14001`)

### Purpose
Implement ISO 14001:2015 Environmental Management System.

### Key Environmental Requirements

| Clause | Key Requirements |
|--------|------------------|
| 4.1 | Environmental context |
| 4.2 | Interested parties (regulators, community) |
| 6.1.2 | Environmental aspects and impacts |
| 6.1.3 | Compliance obligations |
| 6.2 | Environmental objectives |
| 7.2 | Environmental competence |
| 8.1 | Operational control (pollution prevention) |
| 8.2 | Emergency preparedness |
| 9.1.2 | Compliance evaluation |

### Environmental Aspects Assessment

| Aspect | Impact | Significance | Control |
|--------|--------|--------------|---------|
| Air emissions | Air pollution | High | Emission controls |
| Wastewater | Water pollution | High | Treatment plant |
| Waste generation | Land pollution | Medium | Waste management |
| Energy use | Resource depletion | Medium | Efficiency programs |
| Chemical storage | Spill risk | High | Containment, procedures |

---

## Skill 6: ISO 45001 OH&S (`/iso-45001`)

### Purpose
Implement ISO 45001:2018 Occupational Health and Safety Management System.

### Key OH&S Requirements

| Clause | Key Requirements |
|--------|------------------|
| 5.4 | Worker consultation and participation |
| 6.1.2 | Hazard identification and risk assessment |
| 6.1.3 | Legal requirements |
| 8.1.2 | Eliminating hazards (hierarchy of controls) |
| 8.2 | Emergency preparedness |
| 9.1.2 | Incident investigation |
| 10.2 | Incident reporting and corrective action |

### Hierarchy of Controls

```
Most Effective
      ▲
      │  1. ELIMINATION - Remove the hazard
      │  2. SUBSTITUTION - Replace with less hazardous
      │  3. ENGINEERING - Isolate people from hazard
      │  4. ADMINISTRATIVE - Change how people work
      │  5. PPE - Protect the worker
      ▼
Least Effective
```

---

## Skill 7: ISO 22301 BCMS (`/iso-22301`)

### Purpose
Implement ISO 22301:2019 Business Continuity Management System.

### Key BC Requirements

| Element | Description |
|---------|-------------|
| Business Impact Analysis (BIA) | Identify critical processes, dependencies |
| Risk Assessment | Threats that could disrupt operations |
| Business Continuity Strategy | Recovery approach and resources |
| Business Continuity Plans | Documented response procedures |
| Exercise Program | Test and validate plans |
| Maintenance | Keep plans current |

### BIA Template

| Process | RPO | RTO | Impact (1-5) | Dependencies | Priority |
|---------|-----|-----|--------------|--------------|----------|
| Order Processing | 4 hrs | 8 hrs | 5 | ERP, Email | Critical |
| Customer Support | 1 hr | 2 hrs | 4 | CRM, Phone | High |
| Payroll | 24 hrs | 48 hrs | 3 | HR System | Medium |

**RPO:** Recovery Point Objective (max data loss)
**RTO:** Recovery Time Objective (max downtime)

---

## Skill 8: Audit Preparation (`/iso-audit-prep`)

### Purpose
Prepare organization for ISO certification audit.

### Certification Audit Process

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    ISO CERTIFICATION AUDIT PROCESS                          │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  STAGE 1 AUDIT              STAGE 2 AUDIT              SURVEILLANCE        │
│  (Documentation Review)      (Implementation Audit)     (Annual)            │
│  ──────────────────         ────────────────────       ─────────────        │
│  • Scope confirmation       • Process verification     • Sample review      │
│  • Documentation review     • Staff interviews         • Continued          │
│  • Readiness assessment     • Evidence examination       compliance         │
│  • Plan Stage 2             • Findings/NCs             • Improvement        │
│                                                                             │
│        2-4 weeks gap                                    Every 12 months     │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Audit Readiness Checklist

```
DOCUMENTATION READINESS:
□ Management system manual/documentation
□ Policy statements
□ Objectives and targets
□ Procedures for all required processes
□ Records demonstrating implementation
□ Internal audit reports
□ Management review records
□ Corrective action records

IMPLEMENTATION READINESS:
□ Staff trained and aware
□ Processes operating as documented
□ Records being maintained
□ KPIs being monitored
□ Internal audits conducted
□ Management review conducted
□ Corrective actions closed

LOGISTICS:
□ Audit schedule confirmed
□ Key personnel available
□ Meeting rooms booked
□ Evidence packages prepared
□ Opening meeting presentation ready
□ Guide/escort assigned
```

### Audit Finding Types

| Type | Definition | Impact |
|------|------------|--------|
| **Major NC** | Systematic failure or absence of required element | Certificate not issued/suspended |
| **Minor NC** | Isolated failure, doesn't affect system integrity | Must correct within timeframe |
| **Observation** | Opportunity for improvement, not a requirement | Consider for improvement |
| **Positive** | Good practice noted | Recognition |

---

## Skill 9: Document Control (`/iso-doc-control`)

### Purpose
Manage ISO management system documentation.

### Document Hierarchy

```
Level 1: POLICY
         │
Level 2: MANUAL
         │
Level 3: PROCEDURES
         │
Level 4: WORK INSTRUCTIONS
         │
Level 5: FORMS & RECORDS
```

### Document Control Requirements (ISO 7.5)

| Requirement | Description |
|-------------|-------------|
| Identification | Document ID, title, version |
| Format | Consistent look and feel |
| Review/Approval | Authority to approve |
| Distribution | Controlled access |
| Storage | Secure, accessible |
| Version Control | Track changes |
| Retention | How long to keep |
| Disposal | Secure destruction |

### Document Numbering Convention

```
[PREFIX]-[CATEGORY]-[NUMBER]-[VERSION]

Example: Omega-QMS-PRO-001-V2.0

PREFIX:     Omega (Company)
CATEGORY:   QMS (Quality), ISMS (Security), EMS (Environmental)
TYPE:       POL (Policy), MAN (Manual), PRO (Procedure), WI (Work Instruction), FRM (Form)
NUMBER:     001, 002, etc.
VERSION:    V1.0, V1.1, V2.0
```

---

## Skill 10: Internal Audit (`/iso-internal-audit`)

### Purpose
Establish and manage internal audit program.

### Internal Audit Process

```
1. ANNUAL PLAN          2. PREPARATION         3. EXECUTION
   ────────────            ───────────            ─────────
   Audit schedule          Audit criteria         Opening meeting
   Auditor assignment      Audit checklist        Interviews
   Resources               Document review        Evidence collection
                                                  Closing meeting

4. REPORTING            5. FOLLOW-UP           6. PROGRAM REVIEW
   ─────────               ──────────             ──────────────
   Findings documented     Corrective actions     Effectiveness
   NC classification       Verification           Auditor performance
   Report distribution     Close-out              Program improvement
```

### Audit Checklist Template

```
═══════════════════════════════════════════════════════════════════════════════
INTERNAL AUDIT CHECKLIST
Standard: [ISO XXXXX:YYYY]
Clause: [X.X]
Auditor: [Name]
Date: [Date]
═══════════════════════════════════════════════════════════════════════════════

│ # │ Requirement           │ Question                        │ Evidence │ Finding │
├───┼───────────────────────┼─────────────────────────────────┼──────────┼─────────┤
│ 1 │ 9.2.1 Internal audit  │ Is there an audit program?      │          │         │
│   │                       │ Are audits planned?             │          │         │
│   │                       │ Are auditors competent?         │          │         │
├───┼───────────────────────┼─────────────────────────────────┼──────────┼─────────┤
│ 2 │ 9.2.2 Audit process   │ Are audit criteria defined?     │          │         │
│   │                       │ Is auditor independence ensured?│          │         │
│   │                       │ Are results reported?           │          │         │

═══════════════════════════════════════════════════════════════════════════════
```

---

## Integration with Other Skills

| Skill | Integration |
|-------|-------------|
| `/omega-budget` | Fee calculation for ISO engagements |
| `/doc-gen` | Generate ISO documentation |
| `/aig-iso42001-gap` | Detailed ISO 42001 assessment |
| `/proposal` | ISO certification proposal content |

---

## Certification Bodies (Reference)

| Body | Accreditation | Regions |
|------|---------------|---------|
| BSI | UKAS | Global |
| Bureau Veritas | Various | Global |
| DNV | Various | Global |
| SGS | Various | Global |
| TÜV | DAkkS | Global |
| LRQA | UKAS | Global |

---

*Service Line: ISO (Certification Preparation)*
*Version: 1.0*
*Last Updated: 2026-02-02*


---

## Additional Skill: iso-22301-bcm

### Command: `/omega-skills:iso-22301-bcm` (v4.2.1)

### Purpose
Prepare for ISO 22301 BCM certification: BIA, BCP, exercise program, audit readiness.

### Inputs required
```yaml
client:
  name: "Client Name"
context:
  scope: "in-scope description"
  constraints: ["regulatory / commercial constraints"]
```

### Methodology
1. Frame the request against ISO Certification domain conventions.
2. Pull required inputs from engagement brain and external sources.
3. Apply the iso-22301-bcm method using the relevant subagent.
4. Synthesize into deliverable with recommendations + risks.
5. Validate via `/omega:verify-quality`.

### Output shape
Omega-branded iso-22301-bcm deliverable in `05_Deliverables_Final/`.

### Quality checklist
- Pyramid Principle structure
- Source citations on all data
- Quantified impact where the analysis supports it


---

## Additional Skill: iso-37001-anti-bribery

### Command: `/omega-skills:iso-37001-anti-bribery` (v4.2.1)

### Purpose
Prepare for ISO 37001 anti-bribery management system certification: due diligence, controls, training.

### Inputs required
```yaml
client:
  name: "Client Name"
context:
  scope: "in-scope description"
  constraints: ["regulatory / commercial constraints"]
```

### Methodology
1. Frame the request against ISO Certification domain conventions.
2. Pull required inputs from engagement brain and external sources.
3. Apply the iso-37001-anti-bribery method using the relevant subagent.
4. Synthesize into deliverable with recommendations + risks.
5. Validate via `/omega:verify-quality`.

### Output shape
Omega-branded iso-37001-anti-bribery deliverable in `05_Deliverables_Final/`.

### Quality checklist
- Pyramid Principle structure
- Source citations on all data
- Quantified impact where the analysis supports it
