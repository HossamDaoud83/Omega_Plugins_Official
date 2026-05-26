---
name: hlt
description: Healthcare Digital Solutions skills - clinical workflows, HIS, HIPAA compliance
---

# HLT - Healthcare Digital Solutions Skills

## Service Line Overview

**Code:** HLT
**Full Name:** Healthcare Digital Solutions
**Fee Modifier:** 1.20
**Description:** Clinical workflow optimization, HIS implementation (HL7/FHIR), HIPAA compliance

---

## Skills Index

| # | Skill | Command | Purpose |
|---|-------|---------|---------|
| 1 | Clinical Workflow Analysis | `/hlt-workflow` | Analyze and optimize clinical workflows |
| 2 | HIS Requirements | `/hlt-his-req` | Gather HIS implementation requirements |
| 3 | HL7/FHIR Mapping | `/hlt-hl7-fhir` | Map data to healthcare interoperability standards |
| 4 | HIPAA Gap Analysis | `/hlt-hipaa-gap` | HIPAA compliance gap analysis |
| 5 | Patient Journey Mapping | `/hlt-patient-journey` | Map patient journey touchpoints |
| 6 | Interoperability Assessment | `/hlt-interop` | Assess healthcare system interoperability |
| 7 | Clinical KPI Framework | `/hlt-clinical-kpis` | Define clinical performance metrics |
| 8 | Telehealth Readiness | `/hlt-telehealth` | Assess telehealth readiness |

---

## Skill 1: Clinical Workflow Analysis

### Command: `/hlt-workflow`

### Purpose
Analyze existing clinical workflows to identify inefficiencies, bottlenecks, and optimization opportunities while ensuring patient safety and care quality.

### Inputs Required
```yaml
organization_name: "Hospital/Clinic Name"
department: "Emergency|Inpatient|Outpatient|Surgery|Radiology|Lab|Pharmacy"
workflow_scope:
  - name: "Patient Registration"
  - name: "Triage Assessment"
  - name: "Physician Consultation"
current_state:
  paper_based: true|false
  ehr_system: "Epic|Cerner|Meditech|Other|None"
  integration_level: "none|partial|full"
pain_points:
  - "Long wait times"
  - "Documentation burden"
  - "Communication gaps"
```

### Clinical Workflow Analysis Framework

#### Workflow Categories

| Category | Examples | Key Metrics |
|----------|----------|-------------|
| Patient Flow | Registration, triage, discharge | Throughput, wait times |
| Clinical Documentation | Notes, orders, results | Time to document, completeness |
| Medication Management | Prescribing, dispensing, admin | Error rates, turnaround |
| Diagnostic Services | Lab, imaging, pathology | TAT, accuracy |
| Care Coordination | Referrals, handoffs, transitions | Communication delays |

#### Analysis Dimensions

1. **Time Analysis**
   - Cycle time (total process time)
   - Value-added time vs wait time
   - Bottleneck identification
   - Peak load patterns

2. **Quality Analysis**
   - Error rates and types
   - Rework frequency
   - Compliance gaps
   - Patient safety events

3. **Resource Analysis**
   - Staff utilization
   - Equipment utilization
   - Space constraints
   - Technology gaps

4. **Patient Experience**
   - Wait times at each step
   - Communication touchpoints
   - Information gaps
   - Satisfaction drivers

### Output: Clinical Workflow Assessment

```markdown
# Clinical Workflow Analysis Report
## [Organization Name] - [Department]
### Assessment Date: [Date]

## Executive Summary
[High-level findings and key recommendations]

## Current State Analysis

### Workflow Map
```
[Process flow diagram]
Patient Arrival → Registration → Triage → [Wait] →
Consultation → [Wait] → Diagnostics → [Wait] →
Treatment → Discharge
```

### Time Analysis
| Step | Avg Duration | Wait Time | Value-Added | Bottleneck |
|------|--------------|-----------|-------------|------------|
| Registration | 15 min | 5 min | 10 min | No |
| Triage | 10 min | 20 min | 10 min | Yes |

### Efficiency Metrics
| Metric | Current | Benchmark | Gap |
|--------|---------|-----------|-----|
| Door-to-Doctor | 45 min | 30 min | +50% |
| Length of Stay | 4.2 hrs | 3.0 hrs | +40% |
| Documentation Time | 35% | 25% | +10% |

## Pain Points Identified

| # | Pain Point | Impact | Root Cause | Priority |
|---|------------|--------|------------|----------|
| 1 | [Issue] | [Impact] | [Cause] | Critical |

## Recommendations

### Quick Wins (0-3 months)
| # | Recommendation | Expected Impact | Effort |
|---|----------------|-----------------|--------|
| 1 | [Recommendation] | [Impact] | Low |

### Process Redesign (3-6 months)
| # | Recommendation | Expected Impact | Effort |
|---|----------------|-----------------|--------|
| 1 | [Recommendation] | [Impact] | Medium |

### Technology Enablement (6-12 months)
| # | Recommendation | Expected Impact | Effort |
|---|----------------|-----------------|--------|
| 1 | [Recommendation] | [Impact] | High |

## Future State Workflow
[Optimized process flow diagram]

## Implementation Roadmap
[Phased approach with milestones]
```

---

## Skill 2: HIS Requirements

### Command: `/hlt-his-req`

### Purpose
Gather and document comprehensive requirements for Hospital Information System (HIS) selection or implementation.

### Inputs Required
```yaml
organization_type: "hospital|clinic|health_system|specialty"
bed_count: 250
annual_patient_volume: 50000
current_systems:
  - name: "Current HIS"
    vendor: "Vendor"
    age_years: 10
    satisfaction: "low|medium|high"
departments_in_scope:
  - "Registration"
  - "Clinical"
  - "Billing"
  - "Pharmacy"
  - "Laboratory"
  - "Radiology"
integration_requirements:
  - "Lab Information System"
  - "PACS"
  - "Pharmacy System"
```

### HIS Requirements Framework

#### Module Categories

| Module | Sub-modules | Priority |
|--------|-------------|----------|
| **Patient Management** | ADT, Scheduling, Registration | Critical |
| **Clinical** | EMR, CPOE, Clinical Documentation | Critical |
| **Revenue Cycle** | Billing, Claims, Collections | Critical |
| **Ancillary** | Lab, Radiology, Pharmacy | High |
| **Administrative** | HR, Finance, Supply Chain | Medium |
| **Analytics** | Reporting, BI, Population Health | Medium |

#### Functional Requirements Template

| Req ID | Module | Requirement | Priority | MoSCoW |
|--------|--------|-------------|----------|--------|
| FR-001 | ADT | Real-time bed management | Critical | Must |
| FR-002 | EMR | Problem list with ICD-10 | Critical | Must |
| FR-003 | CPOE | Drug-drug interaction alerts | Critical | Must |

#### Non-Functional Requirements

| Category | Requirement | Target |
|----------|-------------|--------|
| Performance | Response time | < 2 seconds |
| Availability | Uptime | 99.9% |
| Scalability | Concurrent users | 500+ |
| Security | Authentication | MFA required |
| Compliance | Standards | HIPAA, HL7, FHIR |

### Output: HIS Requirements Specification

```markdown
# HIS Requirements Specification
## [Organization Name]
### Version: 1.0 | Date: [Date]

## 1. Introduction

### 1.1 Purpose
[Purpose of this requirements document]

### 1.2 Scope
| Attribute | Value |
|-----------|-------|
| Organization Type | [Type] |
| Bed Count | [Count] |
| Annual Volume | [Volume] |
| Users | [Count] |

### 1.3 Departments In Scope
- [Department 1]
- [Department 2]

## 2. Current State Assessment

### 2.1 Existing Systems
| System | Vendor | Function | Replace/Integrate |
|--------|--------|----------|-------------------|
| [System] | [Vendor] | [Function] | [Decision] |

### 2.2 Pain Points
| # | Issue | Impact | Priority |
|---|-------|--------|----------|
| 1 | [Issue] | [Impact] | [Priority] |

## 3. Functional Requirements

### 3.1 Patient Management
| ID | Requirement | Priority | Notes |
|----|-------------|----------|-------|
| PM-001 | Patient registration with demographics | Must | |
| PM-002 | Insurance verification | Must | |
| PM-003 | Appointment scheduling | Must | |

### 3.2 Clinical Documentation
| ID | Requirement | Priority | Notes |
|----|-------------|----------|-------|
| CD-001 | Structured clinical notes | Must | |
| CD-002 | Voice recognition support | Should | |

### 3.3 Computerized Provider Order Entry (CPOE)
| ID | Requirement | Priority | Notes |
|----|-------------|----------|-------|
| CP-001 | Medication orders | Must | |
| CP-002 | Lab orders | Must | |
| CP-003 | Clinical decision support | Must | |

### 3.4 Pharmacy
| ID | Requirement | Priority | Notes |
|----|-------------|----------|-------|
| PH-001 | Drug dispensing workflow | Must | |
| PH-002 | Formulary management | Must | |

### 3.5 Laboratory
| ID | Requirement | Priority | Notes |
|----|-------------|----------|-------|
| LB-001 | Order management | Must | |
| LB-002 | Results reporting | Must | |

### 3.6 Radiology
| ID | Requirement | Priority | Notes |
|----|-------------|----------|-------|
| RD-001 | RIS functionality | Must | |
| RD-002 | PACS integration | Must | |

### 3.7 Revenue Cycle
| ID | Requirement | Priority | Notes |
|----|-------------|----------|-------|
| RC-001 | Charge capture | Must | |
| RC-002 | Claims management | Must | |

## 4. Non-Functional Requirements

### 4.1 Performance
| Requirement | Target |
|-------------|--------|
| Page load time | < 2 sec |
| Report generation | < 30 sec |
| Concurrent users | 500+ |

### 4.2 Security & Compliance
| Requirement | Target |
|-------------|--------|
| HIPAA compliance | Full |
| Access control | RBAC |
| Audit logging | Complete |
| Encryption | AES-256 |

### 4.3 Integration
| System | Protocol | Priority |
|--------|----------|----------|
| Lab System | HL7 2.x | Must |
| PACS | DICOM | Must |
| HIE | FHIR R4 | Should |

## 5. Vendor Evaluation Criteria

| Criterion | Weight | Description |
|-----------|--------|-------------|
| Functionality | 30% | Feature coverage |
| Usability | 20% | User experience |
| Integration | 15% | Interoperability |
| Vendor Stability | 15% | Market position |
| Cost | 20% | TCO |

## 6. Implementation Considerations

### 6.1 Timeline Expectations
| Phase | Duration |
|-------|----------|
| Selection | 3-4 months |
| Implementation | 12-18 months |
| Go-Live | Phased |

### 6.2 Resource Requirements
| Role | FTE | Duration |
|------|-----|----------|
| Project Manager | 1.0 | Full |
| Clinical Lead | 0.5 | Full |
| IT Lead | 1.0 | Full |
```

---

## Skill 3: HL7/FHIR Mapping

### Command: `/hlt-hl7-fhir`

### Purpose
Map healthcare data to HL7 v2.x or FHIR R4 standards for interoperability between systems.

### Inputs Required
```yaml
mapping_direction: "source_to_hl7|source_to_fhir|hl7_to_fhir"
source_system:
  name: "Source System"
  data_format: "proprietary|hl7v2|fhir|csv|xml"
target_standard: "HL7v2.5|HL7v2.7|FHIR_R4"
data_domains:
  - "Patient Demographics"
  - "Encounters"
  - "Orders"
  - "Results"
  - "Medications"
  - "Allergies"
  - "Problems"
use_case: "ADT|ORM|ORU|MDM|SIU|Custom"
```

### Healthcare Interoperability Standards

#### HL7 v2.x Message Types

| Type | Name | Use Case |
|------|------|----------|
| ADT | Admit/Discharge/Transfer | Patient movements |
| ORM | Order Message | Lab/Rad orders |
| ORU | Observation Result | Lab results |
| RDE | Pharmacy Encoded Order | Medication orders |
| MDM | Medical Document | Documents |
| SIU | Scheduling | Appointments |
| DFT | Detailed Financial | Charges |

#### FHIR R4 Resources

| Resource | HL7v2 Equivalent | Use Case |
|----------|------------------|----------|
| Patient | PID segment | Demographics |
| Encounter | PV1 segment | Visits |
| Observation | OBX segment | Results |
| MedicationRequest | RXE segment | Prescriptions |
| DiagnosticReport | ORU message | Reports |
| AllergyIntolerance | AL1 segment | Allergies |
| Condition | DG1 segment | Diagnoses |

### Output: Interface Specification

```markdown
# Healthcare Interface Specification
## [Interface Name]
### Version: 1.0 | Date: [Date]

## 1. Interface Overview

| Attribute | Value |
|-----------|-------|
| Source System | [System Name] |
| Target System | [System Name] |
| Standard | [HL7v2.x / FHIR R4] |
| Direction | [Inbound/Outbound/Bidirectional] |
| Trigger | [Event/Scheduled/On-Demand] |

## 2. Message/Resource Scope

### Messages Supported
| Message Type | Event | Direction | Frequency |
|--------------|-------|-----------|-----------|
| ADT^A01 | Admit | Outbound | Real-time |
| ADT^A08 | Update | Outbound | Real-time |
| ORU^R01 | Results | Inbound | Real-time |

## 3. Detailed Mapping

### ADT^A01 - Patient Admit

#### MSH Segment (Message Header)
| Field | Element | Source Field | Transform | Example |
|-------|---------|--------------|-----------|---------|
| MSH-3 | Sending App | Config | Static | "HIS" |
| MSH-4 | Sending Facility | Config | Static | "FACILITY1" |
| MSH-7 | Message DateTime | System | yyyyMMddHHmmss | "20260202120000" |
| MSH-9 | Message Type | Config | Static | "ADT^A01" |
| MSH-10 | Control ID | System | UUID | "MSG123456" |

#### PID Segment (Patient Identification)
| Field | Element | Source Field | Transform | Example |
|-------|---------|--------------|-----------|---------|
| PID-3 | Patient ID | patient.mrn | Direct | "MRN12345" |
| PID-5 | Patient Name | patient.name | XPN format | "DOE^JOHN^M" |
| PID-7 | DOB | patient.dob | yyyyMMdd | "19800115" |
| PID-8 | Sex | patient.gender | Lookup | "M" |
| PID-11 | Address | patient.address | XAD format | "123 MAIN ST^^CITY^ST^12345" |

#### PV1 Segment (Patient Visit)
| Field | Element | Source Field | Transform | Example |
|-------|---------|--------------|-----------|---------|
| PV1-2 | Patient Class | visit.type | Lookup | "I" (Inpatient) |
| PV1-3 | Location | visit.location | PL format | "UNIT1^ROOM101^BED-A" |
| PV1-7 | Attending Dr | visit.physician | XCN format | "12345^SMITH^JOHN^MD" |
| PV1-44 | Admit DateTime | visit.admit_dt | yyyyMMddHHmmss | "20260202120000" |

### FHIR Alternative: Patient Resource

```json
{
  "resourceType": "Patient",
  "id": "[patient.id]",
  "identifier": [{
    "system": "urn:oid:2.16.840.1.113883.19.5",
    "value": "[patient.mrn]"
  }],
  "name": [{
    "family": "[patient.lastName]",
    "given": ["[patient.firstName]", "[patient.middleName]"]
  }],
  "gender": "[patient.gender -> male|female|other|unknown]",
  "birthDate": "[patient.dob -> YYYY-MM-DD]",
  "address": [{
    "line": ["[patient.address.street]"],
    "city": "[patient.address.city]",
    "state": "[patient.address.state]",
    "postalCode": "[patient.address.zip]"
  }]
}
```

## 4. Code Mappings (Lookup Tables)

### Gender Mapping
| Source | HL7 | FHIR | Description |
|--------|-----|------|-------------|
| Male | M | male | Male |
| Female | F | female | Female |
| Unknown | U | unknown | Unknown |

### Patient Class Mapping
| Source | HL7 PV1-2 | Description |
|--------|-----------|-------------|
| Inpatient | I | Inpatient |
| Outpatient | O | Outpatient |
| Emergency | E | Emergency |

## 5. Validation Rules

| Rule ID | Field | Validation | Action |
|---------|-------|------------|--------|
| VAL-001 | PID-3 | Required, non-empty | Reject |
| VAL-002 | PID-5 | Required, valid XPN | Reject |
| VAL-003 | PID-7 | Valid date format | Default |

## 6. Error Handling

| Error Code | Description | Action |
|------------|-------------|--------|
| AE | Application Error | Log, retry |
| AR | Application Reject | Log, alert |
| CR | Commit Reject | Log, escalate |

## 7. Testing Scenarios

| # | Scenario | Input | Expected |
|---|----------|-------|----------|
| 1 | Valid admit | Complete ADT^A01 | ACK^A01 AA |
| 2 | Missing MRN | ADT^A01 no PID-3 | ACK^A01 AE |
```

---

## Skill 4: HIPAA Gap Analysis

### Command: `/hlt-hipaa-gap`

### Purpose
Assess compliance with HIPAA Privacy Rule, Security Rule, and Breach Notification Rule requirements.

### Inputs Required
```yaml
organization_type: "covered_entity|business_associate|hybrid"
organization_size: "small|medium|large"
assessment_scope: "full|privacy|security|breach"
current_state:
  risk_assessment_date: "2025-01-15"
  policies_last_updated: "2024-06-01"
  training_completed: true
  incidents_last_year: 2
  baa_inventory: true
ephi_locations:
  - "EHR System"
  - "Email"
  - "Mobile Devices"
  - "Paper Records"
```

### HIPAA Assessment Framework

#### HIPAA Rule Structure

| Rule | Focus | Key Requirements |
|------|-------|------------------|
| **Privacy Rule** | PHI Use/Disclosure | Notice, Authorization, Minimum Necessary |
| **Security Rule** | ePHI Safeguards | Administrative, Physical, Technical |
| **Breach Notification** | Incident Response | Notification timelines, documentation |

#### Security Rule Safeguards

**Administrative Safeguards (§164.308)**
| Standard | Implementation Specifications |
|----------|------------------------------|
| Security Management | Risk analysis, Risk management, Sanctions, Review |
| Assigned Responsibility | Security official designation |
| Workforce Security | Authorization, Clearance, Termination |
| Information Access | Access authorization, Access management |
| Security Awareness | Training, Login monitoring, Password management |
| Security Incidents | Response procedures |
| Contingency Plan | Data backup, Disaster recovery, Emergency mode |
| Evaluation | Periodic evaluation |
| BAA | Business associate contracts |

**Physical Safeguards (§164.310)**
| Standard | Implementation Specifications |
|----------|------------------------------|
| Facility Access | Contingency operations, Facility security, Access control |
| Workstation Use | Workstation use policies |
| Workstation Security | Physical safeguards |
| Device Controls | Disposal, Media re-use, Accountability, Backup |

**Technical Safeguards (§164.312)**
| Standard | Implementation Specifications |
|----------|------------------------------|
| Access Control | Unique user ID, Emergency access, Auto logoff, Encryption |
| Audit Controls | Audit logs and examination |
| Integrity | Mechanism to authenticate ePHI |
| Authentication | Person or entity authentication |
| Transmission Security | Integrity controls, Encryption |

### Output: HIPAA Gap Analysis Report

```markdown
# HIPAA Compliance Gap Analysis
## [Organization Name]
### Assessment Date: [Date]

## Executive Summary

**Overall Compliance Score:** [X]%
**Risk Level:** [High|Medium|Low]
**Critical Gaps:** [Count]
**High Priority Gaps:** [Count]

### Compliance by Rule
| Rule | Score | Status |
|------|-------|--------|
| Privacy Rule | [X]% | [Status] |
| Security Rule | [X]% | [Status] |
| Breach Notification | [X]% | [Status] |

## Assessment Scope

| Attribute | Value |
|-----------|-------|
| Organization Type | [Type] |
| Assessment Date | [Date] |
| Last Risk Assessment | [Date] |
| ePHI Locations | [Count] |

## Detailed Findings

### Privacy Rule Compliance

#### Notice of Privacy Practices
| Requirement | Status | Gap | Priority |
|-------------|--------|-----|----------|
| NPP available to patients | [Met/Gap] | [Description] | [H/M/L] |
| NPP acknowledgment documented | [Met/Gap] | [Description] | [H/M/L] |

#### Authorization Requirements
| Requirement | Status | Gap | Priority |
|-------------|--------|-----|----------|
| Valid authorization elements | [Met/Gap] | [Description] | [H/M/L] |
| Authorization tracking | [Met/Gap] | [Description] | [H/M/L] |

### Security Rule Compliance

#### Administrative Safeguards
| Standard | Requirement | Status | Gap | Priority |
|----------|-------------|--------|-----|----------|
| §164.308(a)(1) | Risk Analysis | [Met/Gap] | [Desc] | [H/M/L] |
| §164.308(a)(1) | Risk Management | [Met/Gap] | [Desc] | [H/M/L] |
| §164.308(a)(2) | Security Official | [Met/Gap] | [Desc] | [H/M/L] |
| §164.308(a)(3) | Workforce Security | [Met/Gap] | [Desc] | [H/M/L] |
| §164.308(a)(4) | Access Management | [Met/Gap] | [Desc] | [H/M/L] |
| §164.308(a)(5) | Security Training | [Met/Gap] | [Desc] | [H/M/L] |
| §164.308(a)(6) | Incident Procedures | [Met/Gap] | [Desc] | [H/M/L] |
| §164.308(a)(7) | Contingency Plan | [Met/Gap] | [Desc] | [H/M/L] |
| §164.308(a)(8) | Evaluation | [Met/Gap] | [Desc] | [H/M/L] |
| §164.308(b)(1) | BAA Contracts | [Met/Gap] | [Desc] | [H/M/L] |

#### Physical Safeguards
| Standard | Requirement | Status | Gap | Priority |
|----------|-------------|--------|-----|----------|
| §164.310(a)(1) | Facility Access | [Met/Gap] | [Desc] | [H/M/L] |
| §164.310(b) | Workstation Use | [Met/Gap] | [Desc] | [H/M/L] |
| §164.310(c) | Workstation Security | [Met/Gap] | [Desc] | [H/M/L] |
| §164.310(d)(1) | Device Controls | [Met/Gap] | [Desc] | [H/M/L] |

#### Technical Safeguards
| Standard | Requirement | Status | Gap | Priority |
|----------|-------------|--------|-----|----------|
| §164.312(a)(1) | Access Control | [Met/Gap] | [Desc] | [H/M/L] |
| §164.312(b) | Audit Controls | [Met/Gap] | [Desc] | [H/M/L] |
| §164.312(c)(1) | Integrity | [Met/Gap] | [Desc] | [H/M/L] |
| §164.312(d) | Authentication | [Met/Gap] | [Desc] | [H/M/L] |
| §164.312(e)(1) | Transmission Security | [Met/Gap] | [Desc] | [H/M/L] |

### Breach Notification Compliance

| Requirement | Status | Gap | Priority |
|-------------|--------|-----|----------|
| Breach detection procedures | [Met/Gap] | [Desc] | [H/M/L] |
| Risk assessment process | [Met/Gap] | [Desc] | [H/M/L] |
| Individual notification (60 days) | [Met/Gap] | [Desc] | [H/M/L] |
| HHS notification | [Met/Gap] | [Desc] | [H/M/L] |
| Media notification (>500) | [Met/Gap] | [Desc] | [H/M/L] |

## Remediation Plan

### Critical Priority (0-30 days)
| # | Gap | Remediation | Owner | Due Date |
|---|-----|-------------|-------|----------|
| 1 | [Gap] | [Action] | [Owner] | [Date] |

### High Priority (30-90 days)
| # | Gap | Remediation | Owner | Due Date |
|---|-----|-------------|-------|----------|
| 1 | [Gap] | [Action] | [Owner] | [Date] |

### Medium Priority (90-180 days)
| # | Gap | Remediation | Owner | Due Date |
|---|-----|-------------|-------|----------|
| 1 | [Gap] | [Action] | [Owner] | [Date] |

## Risk Register

| Risk | Likelihood | Impact | Score | Mitigation |
|------|------------|--------|-------|------------|
| [Risk] | [H/M/L] | [H/M/L] | [Score] | [Action] |

## Appendix: Evidence Checklist

| Item | Required | Provided | Status |
|------|----------|----------|--------|
| Risk Assessment Report | Yes | [Y/N] | [Status] |
| Policies & Procedures | Yes | [Y/N] | [Status] |
| Training Records | Yes | [Y/N] | [Status] |
| BAA Inventory | Yes | [Y/N] | [Status] |
| Incident Log | Yes | [Y/N] | [Status] |
```

---

## Skill 5: Patient Journey Mapping

### Command: `/hlt-patient-journey`

### Purpose
Map the complete patient journey across touchpoints to identify experience gaps and improvement opportunities.

### Inputs Required
```yaml
journey_type: "emergency|elective|chronic|preventive"
patient_persona:
  name: "Persona Name"
  age: 45
  condition: "Cardiac"
  tech_savvy: "low|medium|high"
journey_scope:
  start: "Symptom onset"
  end: "Follow-up care"
touchpoints_included:
  - "Pre-visit"
  - "Arrival"
  - "Registration"
  - "Clinical care"
  - "Discharge"
  - "Post-visit"
data_sources:
  - "Patient surveys"
  - "Process observations"
  - "Staff interviews"
```

### Patient Journey Framework

#### Journey Stages

| Stage | Description | Key Touchpoints |
|-------|-------------|-----------------|
| **Awareness** | Recognition of need | Symptoms, research |
| **Access** | Finding care | Scheduling, referral |
| **Arrival** | Facility entry | Parking, wayfinding |
| **Intake** | Registration | Forms, verification |
| **Care Delivery** | Clinical services | Exams, procedures |
| **Transition** | Moving between | Handoffs, transfers |
| **Departure** | Leaving facility | Discharge, instructions |
| **Follow-up** | Ongoing care | Results, appointments |

#### Experience Dimensions

| Dimension | Description | Metrics |
|-----------|-------------|---------|
| Functional | Getting the job done | Wait times, outcomes |
| Emotional | How patients feel | Anxiety, confidence |
| Accessibility | Ease of access | Availability, barriers |
| Communication | Information exchange | Clarity, timeliness |

### Output: Patient Journey Map

```markdown
# Patient Journey Map
## [Journey Name]: [Patient Type]
### Date: [Date]

## Journey Overview

**Journey Type:** [Type]
**Duration:** [Start] to [End]
**Key Pain Points:** [Count]
**Opportunities:** [Count]

## Patient Persona

| Attribute | Value |
|-----------|-------|
| Name | [Persona Name] |
| Age | [Age] |
| Condition | [Condition] |
| Tech Comfort | [Level] |
| Goals | [What patient wants to achieve] |
| Concerns | [What patient worries about] |

## Journey Map

### Stage 1: Awareness & Research
```
Timeline: [Duration]
Touchpoints: Website, Dr. Google, Phone
```

| Touchpoint | Action | Thinking | Feeling | Pain Points | Opportunities |
|------------|--------|----------|---------|-------------|---------------|
| Symptom onset | Notices symptoms | "What's wrong?" | Worried | Uncertainty | Symptom checker |
| Online search | Researches condition | "Is this serious?" | Anxious | Conflicting info | Trusted content |

### Stage 2: Access & Scheduling

| Touchpoint | Action | Thinking | Feeling | Pain Points | Opportunities |
|------------|--------|----------|---------|-------------|---------------|
| Phone call | Calls for appointment | "How soon can I be seen?" | Impatient | Long hold times | Online scheduling |
| Scheduling | Books appointment | "Will this time work?" | Relieved | Limited availability | Self-service portal |

### Stage 3: Arrival & Registration

| Touchpoint | Action | Thinking | Feeling | Pain Points | Opportunities |
|------------|--------|----------|---------|-------------|---------------|
| Parking | Finds parking | "Where do I go?" | Frustrated | Confusing signage | Mobile wayfinding |
| Registration | Checks in | "Not this again" | Annoyed | Redundant forms | Pre-registration |

### Stage 4: Clinical Care

| Touchpoint | Action | Thinking | Feeling | Pain Points | Opportunities |
|------------|--------|----------|---------|-------------|---------------|
| Waiting room | Waits | "How much longer?" | Anxious | No updates | Wait time display |
| Exam room | Sees provider | "Will they listen?" | Hopeful | Rushed feeling | Extended time slots |
| Testing | Gets tests | "What are they looking for?" | Nervous | No explanation | Real-time education |

### Stage 5: Discharge & Follow-up

| Touchpoint | Action | Thinking | Feeling | Pain Points | Opportunities |
|------------|--------|----------|---------|-------------|---------------|
| Discharge | Receives instructions | "What do I do next?" | Overwhelmed | Information overload | Digital instructions |
| Results | Gets results | "What does this mean?" | Anxious | Delay in communication | Patient portal alerts |

## Emotional Journey Curve

```
     High  |                    *
Emotion    |        *          / \
           |       / \        /   \     *
           |      /   \      /     \   / \
           |  *  /     \    /       \_/   \___
     Low   |___*________\__/______________________
              Awareness  Arrival  Care  Discharge  Follow-up
```

## Pain Point Analysis

| # | Pain Point | Stage | Severity | Impact | Root Cause |
|---|------------|-------|----------|--------|------------|
| 1 | Long wait without updates | Care | High | Anxiety | No system |
| 2 | Redundant paperwork | Arrival | Medium | Frustration | No integration |

## Opportunities

| # | Opportunity | Stage | Effort | Impact | Quick Win |
|---|-------------|-------|--------|--------|-----------|
| 1 | Digital check-in | Arrival | Medium | High | No |
| 2 | Wait time display | Care | Low | High | Yes |

## Recommendations

### Immediate (0-3 months)
1. [Recommendation]

### Short-term (3-6 months)
1. [Recommendation]

### Long-term (6-12 months)
1. [Recommendation]

## Metrics to Track

| Metric | Current | Target | Frequency |
|--------|---------|--------|-----------|
| Patient Satisfaction | [Score] | [Target] | Monthly |
| Net Promoter Score | [Score] | [Target] | Quarterly |
| Wait Time (avg) | [Time] | [Target] | Weekly |
```

---

## Skill 6: Interoperability Assessment

### Command: `/hlt-interop`

### Purpose
Assess healthcare organization's interoperability capabilities and readiness for health information exchange.

### Inputs Required
```yaml
organization_name: "Organization Name"
systems_inventory:
  - name: "System Name"
    type: "EHR|LIS|RIS|PIS|ADT"
    vendor: "Vendor"
    hl7_capable: true|false
    fhir_capable: true|false
current_exchanges:
  - partner: "Partner Name"
    type: "HIE|Direct|Custom"
    direction: "bidirectional|send|receive"
regulatory_requirements:
  - "CMS Interoperability"
  - "Information Blocking"
  - "TEFCA"
```

### Interoperability Maturity Model

| Level | Name | Characteristics |
|-------|------|-----------------|
| 1 | **Foundational** | Non-electronic, fax/mail |
| 2 | **Structural** | Standard formats (HL7 2.x) |
| 3 | **Semantic** | Coded data, common vocabularies |
| 4 | **Organizational** | Governance, trust frameworks |
| 5 | **Optimized** | Real-time, patient-mediated |

### Assessment Dimensions

| Dimension | Focus Areas |
|-----------|-------------|
| **Technical** | Standards support, APIs, connectivity |
| **Semantic** | Vocabularies, code sets, data quality |
| **Process** | Workflows, governance, monitoring |
| **Policy** | Consent, privacy, data sharing agreements |

### Output: Interoperability Assessment Report

```markdown
# Healthcare Interoperability Assessment
## [Organization Name]
### Assessment Date: [Date]

## Executive Summary

**Interoperability Maturity Level:** [1-5] - [Name]
**Overall Readiness Score:** [X/100]
**Critical Gaps:** [Count]

## Current State Analysis

### System Inventory
| System | Type | Vendor | HL7 v2 | FHIR | APIs |
|--------|------|--------|--------|------|------|
| [Name] | [Type] | [Vendor] | [Y/N] | [Y/N] | [Y/N] |

### Current Exchanges
| Partner | Type | Direction | Standards | Volume |
|---------|------|-----------|-----------|--------|
| [Name] | [HIE/Direct] | [Dir] | [HL7/FHIR] | [/day] |

## Maturity Assessment

### Technical Interoperability
| Criterion | Score | Evidence |
|-----------|-------|----------|
| HL7 v2 messaging | [X/10] | [Details] |
| FHIR R4 capability | [X/10] | [Details] |
| API availability | [X/10] | [Details] |
| Security protocols | [X/10] | [Details] |

### Semantic Interoperability
| Criterion | Score | Evidence |
|-----------|-------|----------|
| ICD-10 adoption | [X/10] | [Details] |
| SNOMED CT usage | [X/10] | [Details] |
| LOINC for labs | [X/10] | [Details] |
| RxNorm for meds | [X/10] | [Details] |

### Process Interoperability
| Criterion | Score | Evidence |
|-----------|-------|----------|
| Data governance | [X/10] | [Details] |
| Interface monitoring | [X/10] | [Details] |
| Error handling | [X/10] | [Details] |
| Change management | [X/10] | [Details] |

## Regulatory Compliance

### CMS Interoperability Rule
| Requirement | Status | Gap |
|-------------|--------|-----|
| Patient access API | [Met/Gap] | [Details] |
| Provider directory API | [Met/Gap] | [Details] |
| Payer-to-payer exchange | [Met/Gap] | [Details] |

### Information Blocking
| Exception | Applicable | Documented |
|-----------|------------|------------|
| Preventing harm | [Y/N] | [Y/N] |
| Privacy | [Y/N] | [Y/N] |
| Security | [Y/N] | [Y/N] |
| Infeasibility | [Y/N] | [Y/N] |

### TEFCA Readiness
| Requirement | Status | Gap |
|-------------|--------|-----|
| QHIN connectivity | [Status] | [Gap] |
| Common Agreement | [Status] | [Gap] |

## Gap Analysis

| # | Gap | Category | Impact | Priority |
|---|-----|----------|--------|----------|
| 1 | [Gap] | [Technical/Semantic/Process] | [Impact] | [H/M/L] |

## Roadmap

### Phase 1: Foundation (0-6 months)
- [ ] [Action item]

### Phase 2: Enhancement (6-12 months)
- [ ] [Action item]

### Phase 3: Optimization (12-18 months)
- [ ] [Action item]
```

---

## Skill 7: Clinical KPI Framework

### Command: `/hlt-clinical-kpis`

### Purpose
Design a comprehensive clinical KPI framework covering quality, safety, efficiency, and patient experience.

### Inputs Required
```yaml
organization_type: "hospital|clinic|health_system"
focus_areas:
  - "Quality"
  - "Safety"
  - "Efficiency"
  - "Patient Experience"
  - "Financial"
departments:
  - "Emergency"
  - "Inpatient"
  - "Surgery"
  - "Outpatient"
regulatory_programs:
  - "CMS Quality Programs"
  - "Joint Commission"
  - "Leapfrog"
current_reporting:
  dashboards: true|false
  frequency: "daily|weekly|monthly"
```

### Clinical KPI Categories

| Category | Focus | Example Metrics |
|----------|-------|-----------------|
| **Quality** | Clinical outcomes | Mortality, readmissions, complications |
| **Safety** | Patient harm prevention | Falls, infections, medication errors |
| **Efficiency** | Resource utilization | LOS, throughput, OR utilization |
| **Experience** | Patient satisfaction | HCAHPS, NPS, complaints |
| **Access** | Care availability | Wait times, appointment availability |
| **Financial** | Cost management | Cost per case, revenue cycle |

### Output: Clinical KPI Framework

```markdown
# Clinical KPI Framework
## [Organization Name]
### Version: 1.0 | Date: [Date]

## Framework Overview

### Balanced Scorecard Approach
| Perspective | Focus | Weight |
|-------------|-------|--------|
| Quality & Safety | Clinical outcomes, patient harm | 35% |
| Patient Experience | Satisfaction, engagement | 25% |
| Efficiency | Operations, throughput | 25% |
| Financial | Sustainability | 15% |

## KPI Catalog

### Quality Metrics

| KPI | Definition | Formula | Target | Frequency |
|-----|------------|---------|--------|-----------|
| 30-Day Readmission Rate | % patients readmitted within 30 days | (Readmissions / Discharges) x 100 | < 15% | Monthly |
| Mortality Rate | Deaths per 1000 discharges | (Deaths / Discharges) x 1000 | < Benchmark | Monthly |
| Surgical Site Infection | SSI per 100 procedures | (SSI / Procedures) x 100 | < 1% | Monthly |
| Sepsis Bundle Compliance | % sepsis patients with bundle | (Compliant / Total Sepsis) x 100 | > 95% | Monthly |

### Safety Metrics

| KPI | Definition | Formula | Target | Frequency |
|-----|------------|---------|--------|-----------|
| Patient Falls | Falls per 1000 patient days | (Falls / Patient Days) x 1000 | < 3.0 | Monthly |
| Falls with Injury | Injury falls per 1000 patient days | (Injury Falls / Patient Days) x 1000 | < 0.5 | Monthly |
| CLABSI Rate | Central line infections per 1000 line days | (CLABSI / Line Days) x 1000 | 0 | Monthly |
| CAUTI Rate | Catheter infections per 1000 catheter days | (CAUTI / Cath Days) x 1000 | 0 | Monthly |
| Medication Errors | Errors per 1000 doses | (Errors / Doses) x 1000 | < 1.0 | Monthly |

### Efficiency Metrics

| KPI | Definition | Formula | Target | Frequency |
|-----|------------|---------|--------|-----------|
| Average Length of Stay | Mean inpatient days | Total Days / Discharges | < Benchmark | Weekly |
| ED Throughput | Time from arrival to disposition | Median minutes | < 180 min | Daily |
| OR Utilization | % of scheduled OR time used | (Actual / Scheduled) x 100 | > 80% | Weekly |
| Bed Turnover | Discharges per bed | Discharges / Beds | > 4.0/mo | Monthly |
| Door-to-Balloon | STEMI treatment time | Median minutes | < 90 min | Monthly |

### Patient Experience Metrics

| KPI | Definition | Formula | Target | Frequency |
|-----|------------|---------|--------|-----------|
| Overall Rating | HCAHPS 9/10 rating | % Top Box | > 75% | Quarterly |
| Recommend Hospital | HCAHPS definitely recommend | % Top Box | > 75% | Quarterly |
| Communication - Nurses | HCAHPS nurse communication | % Top Box | > 80% | Quarterly |
| Communication - Doctors | HCAHPS doctor communication | % Top Box | > 80% | Quarterly |
| Pain Management | HCAHPS pain well controlled | % Top Box | > 70% | Quarterly |
| Net Promoter Score | Likelihood to recommend | (Promoters - Detractors) | > 50 | Monthly |

### Access Metrics

| KPI | Definition | Formula | Target | Frequency |
|-----|------------|---------|--------|-----------|
| ED Wait Time | Arrival to provider | Median minutes | < 30 min | Daily |
| Appointment Availability | Days to next available | Median days | < 7 days | Weekly |
| No-Show Rate | Missed appointments | (No-shows / Scheduled) x 100 | < 10% | Weekly |

### Financial Metrics

| KPI | Definition | Formula | Target | Frequency |
|-----|------------|---------|--------|-----------|
| Cost per Case | Average cost per discharge | Total Cost / Discharges | < Budget | Monthly |
| Revenue per Adjusted Discharge | Revenue per case mix adjusted discharge | Revenue / Adj Discharges | > Budget | Monthly |
| Days in AR | Average collection time | AR / (Revenue/365) | < 45 days | Monthly |

## Department-Specific KPIs

### Emergency Department
| KPI | Target | Frequency |
|-----|--------|-----------|
| Door-to-Doctor | < 30 min | Daily |
| Left Without Being Seen | < 2% | Daily |
| ED Boarding Hours | < 2 hrs | Daily |

### Surgical Services
| KPI | Target | Frequency |
|-----|--------|-----------|
| Case Cancellation Rate | < 5% | Weekly |
| First Case On-Time Start | > 90% | Daily |
| Surgical Site Infection | < 1% | Monthly |

## Dashboard Design

### Executive Dashboard (Monthly)
- Quality composite score
- Safety event trends
- Financial performance
- Patient experience trends

### Operational Dashboard (Daily/Weekly)
- ED throughput metrics
- Bed availability
- OR utilization
- Staffing levels

### Quality Dashboard (Monthly)
- Core measure performance
- Infection rates
- Readmission rates
- Mortality indices

## Data Sources & Governance

| Metric Category | Primary Source | Secondary Source | Owner |
|-----------------|----------------|------------------|-------|
| Quality | EHR/Clinical | Claims | CMO |
| Safety | Incident System | EHR | CNO |
| Efficiency | ADT/Operations | EHR | COO |
| Experience | Survey Vendor | Complaints | CNO |
| Financial | Revenue Cycle | GL | CFO |

## Implementation Roadmap

### Phase 1: Foundation (Months 1-3)
- [ ] Validate data sources
- [ ] Build core dashboards
- [ ] Train leadership

### Phase 2: Expansion (Months 4-6)
- [ ] Department-level KPIs
- [ ] Automated reporting
- [ ] Benchmark integration

### Phase 3: Optimization (Months 7-12)
- [ ] Predictive analytics
- [ ] Real-time alerts
- [ ] Performance improvement integration
```

---

## Skill 8: Telehealth Readiness

### Command: `/hlt-telehealth`

### Purpose
Assess organizational readiness for telehealth services including technology, workflow, regulatory, and patient engagement.

### Inputs Required
```yaml
organization_name: "Organization Name"
current_state:
  telehealth_active: true|false
  platforms_used: ["Platform1"]
  visit_types: ["Urgent", "Follow-up"]
  volume_monthly: 500
planned_expansion:
  - "Behavioral health"
  - "Chronic care"
  - "Specialty consults"
patient_population:
  avg_age: 55
  rural_percentage: 30
  tech_literacy: "low|medium|high"
```

### Telehealth Readiness Dimensions

| Dimension | Focus Areas | Weight |
|-----------|-------------|--------|
| **Technology** | Platform, devices, connectivity | 25% |
| **Clinical** | Workflows, protocols, appropriateness | 25% |
| **Operational** | Scheduling, billing, support | 20% |
| **Regulatory** | Licensing, privacy, consent | 15% |
| **Patient** | Access, engagement, digital literacy | 15% |

### Output: Telehealth Readiness Assessment

```markdown
# Telehealth Readiness Assessment
## [Organization Name]
### Assessment Date: [Date]

## Executive Summary

**Overall Readiness Score:** [X/100]
**Readiness Level:** [Emerging|Developing|Established|Optimized]
**Key Gaps:** [Count]
**Priority Actions:** [Count]

## Readiness Scores by Dimension

| Dimension | Score | Status |
|-----------|-------|--------|
| Technology | [X/100] | [Status] |
| Clinical | [X/100] | [Status] |
| Operational | [X/100] | [Status] |
| Regulatory | [X/100] | [Status] |
| Patient | [X/100] | [Status] |

## Current State Analysis

### Telehealth Program Status
| Attribute | Value |
|-----------|-------|
| Program Active | [Yes/No] |
| Monthly Volume | [Volume] |
| Visit Types | [Types] |
| Platform(s) | [Names] |
| Provider Participation | [%] |

## Detailed Assessment

### Technology Readiness
| Criterion | Score | Evidence | Gap |
|-----------|-------|----------|-----|
| Video platform | [X/10] | [Details] | [Gap] |
| EHR integration | [X/10] | [Details] | [Gap] |
| Device availability | [X/10] | [Details] | [Gap] |
| Bandwidth/connectivity | [X/10] | [Details] | [Gap] |
| Technical support | [X/10] | [Details] | [Gap] |

### Clinical Readiness
| Criterion | Score | Evidence | Gap |
|-----------|-------|----------|-----|
| Clinical protocols | [X/10] | [Details] | [Gap] |
| Visit appropriateness criteria | [X/10] | [Details] | [Gap] |
| Provider training | [X/10] | [Details] | [Gap] |
| Quality monitoring | [X/10] | [Details] | [Gap] |
| Care coordination | [X/10] | [Details] | [Gap] |

### Operational Readiness
| Criterion | Score | Evidence | Gap |
|-----------|-------|----------|-----|
| Scheduling workflow | [X/10] | [Details] | [Gap] |
| Patient intake | [X/10] | [Details] | [Gap] |
| Billing/coding | [X/10] | [Details] | [Gap] |
| Staff training | [X/10] | [Details] | [Gap] |
| Performance metrics | [X/10] | [Details] | [Gap] |

### Regulatory Readiness
| Criterion | Score | Evidence | Gap |
|-----------|-------|----------|-----|
| State licensure | [X/10] | [Details] | [Gap] |
| HIPAA compliance | [X/10] | [Details] | [Gap] |
| Informed consent | [X/10] | [Details] | [Gap] |
| Prescribing policies | [X/10] | [Details] | [Gap] |
| Documentation standards | [X/10] | [Details] | [Gap] |

### Patient Readiness
| Criterion | Score | Evidence | Gap |
|-----------|-------|----------|-----|
| Digital literacy | [X/10] | [Details] | [Gap] |
| Device access | [X/10] | [Details] | [Gap] |
| Broadband access | [X/10] | [Details] | [Gap] |
| Patient education | [X/10] | [Details] | [Gap] |
| Digital divide solutions | [X/10] | [Details] | [Gap] |

## Gap Analysis

| # | Gap | Dimension | Impact | Priority | Effort |
|---|-----|-----------|--------|----------|--------|
| 1 | [Gap] | [Dim] | [H/M/L] | [H/M/L] | [H/M/L] |

## Recommendations

### Quick Wins (0-30 days)
| # | Recommendation | Owner | Impact |
|---|----------------|-------|--------|
| 1 | [Recommendation] | [Owner] | [Impact] |

### Short-term (1-3 months)
| # | Recommendation | Owner | Impact |
|---|----------------|-------|--------|
| 1 | [Recommendation] | [Owner] | [Impact] |

### Long-term (3-12 months)
| # | Recommendation | Owner | Impact |
|---|----------------|-------|--------|
| 1 | [Recommendation] | [Owner] | [Impact] |

## Implementation Roadmap

### Phase 1: Foundation
- Platform optimization
- Core protocol development
- Provider training

### Phase 2: Expansion
- New visit types
- Specialty programs
- Patient outreach

### Phase 3: Optimization
- Advanced analytics
- AI-assisted triage
- Remote monitoring integration

## Success Metrics

| Metric | Baseline | Target | Timeline |
|--------|----------|--------|----------|
| Monthly visits | [Current] | [Target] | [Date] |
| Provider adoption | [Current] | [Target] | [Date] |
| Patient satisfaction | [Current] | [Target] | [Date] |
| No-show rate | [Current] | [Target] | [Date] |
```

---

## Service Line Integration

### Fee Modifier
**HLT Base Modifier:** 1.20 (applied to standard rates)

### Typical Engagement Phases

| Phase | Duration | Deliverables |
|-------|----------|--------------|
| Assessment | 3-4 weeks | Workflow analysis, gap assessments |
| Design | 4-6 weeks | Requirements, journey maps, KPI frameworks |
| Implementation | Variable | System configuration, integration |
| Optimization | Ongoing | Performance monitoring, continuous improvement |

### Cross-Skill Workflows

```
HIS Implementation:
/hlt-workflow → /hlt-his-req → /hlt-hl7-fhir →
/hlt-interop → /esi-migration → /esi-cutover

HIPAA Compliance Program:
/hlt-hipaa-gap → /iso-gap (27001) → /iso-doc-control →
/hlt-workflow → Training

Patient Experience Initiative:
/hlt-patient-journey → /hlt-workflow → /coe-kpi →
/coe-dashboard → /hlt-telehealth

Clinical Quality Program:
/hlt-clinical-kpis → /coe-dashboard → /hlt-workflow →
Quality improvement cycles
```

### Integration with Other Service Lines

| Service Line | Integration Point |
|--------------|-------------------|
| ESI | HIS implementation, HL7/FHIR integration |
| ISO | ISO 27001 for healthcare security |
| COE | Clinical dashboards, KPI frameworks |
| DIG | Healthcare digital transformation |
| AIG | AI in clinical decision support |

---

## Regulatory Reference

### Key Healthcare Regulations

| Regulation | Focus | Applicability |
|------------|-------|---------------|
| HIPAA | Privacy & Security | All covered entities |
| HITECH | EHR adoption, breach notification | All covered entities |
| 21st Century Cures | Interoperability, information blocking | All providers |
| CMS CoP | Conditions of Participation | Medicare providers |
| Joint Commission | Accreditation standards | Accredited facilities |
| State regulations | Licensing, telehealth, consent | Varies by state |

### Healthcare Vocabulary Standards

| Standard | Use Case |
|----------|----------|
| ICD-10-CM | Diagnosis coding |
| ICD-10-PCS | Procedure coding (inpatient) |
| CPT | Procedure coding (outpatient) |
| SNOMED CT | Clinical terminology |
| LOINC | Lab and clinical observations |
| RxNorm | Medication terminology |
| NDC | Drug identification |

---

## Templates & Artifacts

All HLT deliverables should use standard Omega branding via:
- `/doc-gen` for document generation
- `assets/omega-branding.json` for styling
- `scripts/omega-document-generator.js` for automation

### Standard Artifacts by Skill

| Skill | Primary Artifact | Format |
|-------|------------------|--------|
| /hlt-workflow | Clinical Workflow Report | DOCX/PDF |
| /hlt-his-req | HIS Requirements Spec | DOCX |
| /hlt-hl7-fhir | Interface Specification | DOCX/PDF |
| /hlt-hipaa-gap | HIPAA Gap Analysis | DOCX/PDF |
| /hlt-patient-journey | Patient Journey Map | PPTX/PDF |
| /hlt-interop | Interoperability Assessment | DOCX/PDF |
| /hlt-clinical-kpis | KPI Framework | XLSX/DOCX |
| /hlt-telehealth | Telehealth Assessment | DOCX/PDF |


---

## Additional Skill: population-health

### Command: `/omega-skills:population-health` (v4.2.1)

### Purpose
Design population health management program: stratification, care management, social determinants.

### Inputs required
```yaml
client:
  name: "Client Name"
context:
  scope: "in-scope description"
  constraints: ["regulatory / commercial constraints"]
```

### Methodology
1. Frame the request against Healthcare Strategy domain conventions.
2. Pull required inputs from engagement brain and external sources.
3. Apply the population-health method using the relevant subagent.
4. Synthesize into deliverable with recommendations + risks.
5. Validate via `/omega:verify-quality`.

### Output shape
Omega-branded population-health deliverable in `05_Deliverables_Final/`.

### Quality checklist
- Pyramid Principle structure
- Source citations on all data
- Quantified impact where the analysis supports it


---

## Additional Skill: value-based-care

### Command: `/omega-skills:value-based-care` (v4.2.1)

### Purpose
Transition from fee-for-service to value-based-care: contracts, attribution, risk adjustment.

### Inputs required
```yaml
client:
  name: "Client Name"
context:
  scope: "in-scope description"
  constraints: ["regulatory / commercial constraints"]
```

### Methodology
1. Frame the request against Healthcare Strategy domain conventions.
2. Pull required inputs from engagement brain and external sources.
3. Apply the value-based-care method using the relevant subagent.
4. Synthesize into deliverable with recommendations + risks.
5. Validate via `/omega:verify-quality`.

### Output shape
Omega-branded value-based-care deliverable in `05_Deliverables_Final/`.

### Quality checklist
- Pyramid Principle structure
- Source citations on all data
- Quantified impact where the analysis supports it
