---
name: gov
description: Government and Public Sector skills - e-government, policy analysis, citizen services
---

# GOV - Government & Public Sector Skills

## Service Line Overview

**Code:** GOV
**Full Name:** Government & Public Sector
**Fee Modifier:** 0.85
**Description:** E-government services, policy analysis, transparency platforms, citizen services

---

## Skills Index

| # | Skill | Command | Purpose |
|---|-------|---------|---------|
| 1 | E-Government Assessment | `/gov-egov-assess` | Assess e-government maturity |
| 2 | Citizen Service Blueprint | `/gov-citizen-svc` | Design citizen service delivery |
| 3 | Policy Analysis Framework | `/gov-policy` | Analyze policy implications |
| 4 | Transparency Audit | `/gov-transparency` | Audit transparency and open data |
| 5 | Section 508 Compliance | `/gov-508` | Verify accessibility compliance |
| 6 | Procurement Support | `/gov-procurement` | Support government procurement |
| 7 | Stakeholder Engagement | `/gov-stakeholder` | Plan public stakeholder engagement |
| 8 | Regulatory Impact Assessment | `/gov-ria` | Assess regulatory impact |

---

## Skill 1: E-Government Assessment

### Command: `/gov-egov-assess`

### Purpose
Assess the maturity of government digital services and e-government capabilities using international frameworks and benchmarks.

### Inputs Required
```yaml
government_level: "federal|state|local|municipal|agency"
entity_name: "Government Entity Name"
population_served: 500000
current_services:
  - name: "Service Name"
    type: "informational|transactional|integrated"
    channel: "web|mobile|kiosk|in-person"
    digital_adoption: 45
assessment_scope:
  - "Service delivery"
  - "Infrastructure"
  - "Data & analytics"
  - "Citizen engagement"
  - "Governance"
benchmarks:
  - "UN E-Government Development Index"
  - "OECD Digital Government Index"
```

### E-Government Maturity Framework

#### UN EGDI Maturity Stages

| Stage | Name | Characteristics |
|-------|------|-----------------|
| 1 | **Emerging** | Basic web presence, limited info |
| 2 | **Enhanced** | More content, simple forms |
| 3 | **Transactional** | Online transactions, secure services |
| 4 | **Connected** | Integrated, proactive, personalized |

#### Assessment Dimensions

| Dimension | Focus Areas | Weight |
|-----------|-------------|--------|
| **Online Services** | Service availability, user experience | 30% |
| **Infrastructure** | Technology, connectivity, cloud | 20% |
| **Human Capital** | Digital skills, IT workforce | 15% |
| **Citizen Engagement** | Participation, feedback, co-creation | 15% |
| **Data & Analytics** | Open data, data-driven decisions | 10% |
| **Governance** | Strategy, policies, cybersecurity | 10% |

### Output: E-Government Assessment Report

```markdown
# E-Government Maturity Assessment
## [Government Entity Name]
### Assessment Date: [Date]

## Executive Summary

**Overall Maturity Level:** [Stage 1-4] - [Name]
**Overall Score:** [X/100]
**Key Strengths:** [Count]
**Critical Gaps:** [Count]
**Recommended Priority Actions:** [Count]

## Entity Profile

| Attribute | Value |
|-----------|-------|
| Government Level | [Level] |
| Population Served | [Number] |
| Current Services | [Count] |
| Digital Adoption Rate | [%] |
| IT Budget | $[Amount] |
| IT Staff | [Count] |

## Maturity Assessment

### Overall Maturity Score
```
Stage 4 (Connected)    │░░░░░░░░░░│
Stage 3 (Transactional)│████████░░│ ◄── Current: 3.2
Stage 2 (Enhanced)     │██████████│
Stage 1 (Emerging)     │██████████│
                       0    50   100
```

### Dimension Scores

| Dimension | Score | Level | Benchmark | Gap |
|-----------|-------|-------|-----------|-----|
| Online Services | [X/100] | [Stage] | [Benchmark] | [+/-] |
| Infrastructure | [X/100] | [Stage] | [Benchmark] | [+/-] |
| Human Capital | [X/100] | [Stage] | [Benchmark] | [+/-] |
| Citizen Engagement | [X/100] | [Stage] | [Benchmark] | [+/-] |
| Data & Analytics | [X/100] | [Stage] | [Benchmark] | [+/-] |
| Governance | [X/100] | [Stage] | [Benchmark] | [+/-] |

## Detailed Findings

### Online Services Assessment

#### Service Inventory
| Service | Type | Channel | Adoption | Score |
|---------|------|---------|----------|-------|
| [Service] | [Type] | [Channel] | [%] | [X/10] |

#### Service Gaps
| Gap | Impact | Priority |
|-----|--------|----------|
| [Gap] | [Impact] | [H/M/L] |

### Infrastructure Assessment

| Component | Status | Finding |
|-----------|--------|---------|
| Cloud Adoption | [%] | [Finding] |
| Network Coverage | [%] | [Finding] |
| Cybersecurity | [Score] | [Finding] |
| Interoperability | [Score] | [Finding] |

### Citizen Engagement Assessment

| Channel | Usage | Effectiveness |
|---------|-------|---------------|
| Website | [Visits/mo] | [Score] |
| Mobile App | [Downloads] | [Score] |
| Social Media | [Followers] | [Score] |
| Contact Center | [Calls/mo] | [Score] |

## Benchmarking

### Comparison to Peers
| Entity | Overall Score | Services | Infrastructure |
|--------|---------------|----------|----------------|
| [This Entity] | [Score] | [Score] | [Score] |
| [Peer 1] | [Score] | [Score] | [Score] |
| [Peer 2] | [Score] | [Score] | [Score] |

### International Benchmark
| Index | Score | Ranking | Percentile |
|-------|-------|---------|------------|
| UN EGDI | [Score] | [Rank] | [%] |
| OECD DGI | [Score] | [Rank] | [%] |

## Recommendations

### Quick Wins (0-6 months)
| # | Recommendation | Impact | Effort | Dimension |
|---|----------------|--------|--------|-----------|
| 1 | [Recommendation] | [H/M/L] | [H/M/L] | [Dim] |

### Strategic Initiatives (6-18 months)
| # | Recommendation | Impact | Effort | Dimension |
|---|----------------|--------|--------|-----------|
| 1 | [Recommendation] | [H/M/L] | [H/M/L] | [Dim] |

### Transformational (18+ months)
| # | Recommendation | Impact | Effort | Dimension |
|---|----------------|--------|--------|-----------|
| 1 | [Recommendation] | [H/M/L] | [H/M/L] | [Dim] |

## Digital Transformation Roadmap

### Phase 1: Foundation (Year 1)
- [Initiative]
- [Initiative]

### Phase 2: Enhancement (Year 2)
- [Initiative]
- [Initiative]

### Phase 3: Optimization (Year 3+)
- [Initiative]
- [Initiative]

## Investment Requirements

| Category | Year 1 | Year 2 | Year 3 | Total |
|----------|--------|--------|--------|-------|
| Infrastructure | $[X] | $[X] | $[X] | $[X] |
| Applications | $[X] | $[X] | $[X] | $[X] |
| Training | $[X] | $[X] | $[X] | $[X] |
| **Total** | $[X] | $[X] | $[X] | $[X] |
```

---

## Skill 2: Citizen Service Blueprint

### Command: `/gov-citizen-svc`

### Purpose
Design citizen-centric service delivery models that improve service quality, accessibility, and efficiency across channels.

### Inputs Required
```yaml
service_scope: "single|multiple|enterprise"
services_in_scope:
  - name: "Service Name"
    current_channels: ["in-person", "phone"]
    volume_annual: 50000
    avg_processing_time: "5 days"
    satisfaction_score: 3.2
citizen_segments:
  - "General public"
  - "Businesses"
  - "Seniors"
  - "Non-English speakers"
improvement_goals:
  - "Reduce processing time"
  - "Improve satisfaction"
  - "Increase digital adoption"
constraints:
  budget: 500000
  timeline_months: 18
```

### Citizen Service Design Framework

#### Service Design Principles

| Principle | Description | Application |
|-----------|-------------|-------------|
| **Citizen-Centric** | Design around citizen needs | User research, personas |
| **Once-Only** | Don't ask for info already known | Data sharing, integration |
| **Digital by Default** | Digital first, alternatives available | Multi-channel approach |
| **Accessibility** | Usable by everyone | WCAG compliance |
| **Transparency** | Clear status, expectations | Tracking, communication |
| **Privacy by Design** | Protect citizen data | Data minimization |

#### Service Delivery Channels

| Channel | Use Cases | Citizen Preference |
|---------|-----------|-------------------|
| Digital Portal | Transactions, info, tracking | High volume, routine |
| Mobile App | On-the-go, notifications | Younger demographics |
| Contact Center | Complex, emotional | Immediate assistance |
| In-Person | High-value, vulnerable | Personal interaction |
| Chatbot/AI | FAQ, simple queries | 24/7 availability |

### Output: Citizen Service Blueprint

```markdown
# Citizen Service Blueprint
## [Service Name]
### Version: 1.0 | Date: [Date]

## Service Overview

| Attribute | Current | Target |
|-----------|---------|--------|
| Annual Volume | [Count] | [Count] |
| Processing Time | [Time] | [Time] |
| Cost per Transaction | $[X] | $[X] |
| Satisfaction Score | [Score]/5 | [Score]/5 |
| Digital Adoption | [%] | [%] |

## Citizen Journey

### Persona: [Persona Name]
| Attribute | Value |
|-----------|-------|
| Age | [Range] |
| Tech Savvy | [Low/Medium/High] |
| Channel Preference | [Channel] |
| Goals | [Goals] |
| Pain Points | [Pain points] |

### Current Journey Map

| Stage | Citizen Action | Touchpoint | Emotion | Pain Points |
|-------|----------------|------------|---------|-------------|
| Awareness | Learns of need | [Touch] | [Emotion] | [Pain] |
| Research | Finds requirements | [Touch] | [Emotion] | [Pain] |
| Application | Submits request | [Touch] | [Emotion] | [Pain] |
| Processing | Waits for decision | [Touch] | [Emotion] | [Pain] |
| Resolution | Receives outcome | [Touch] | [Emotion] | [Pain] |
| Follow-up | Questions/appeals | [Touch] | [Emotion] | [Pain] |

### Future Journey Map

| Stage | Citizen Action | Touchpoint | Improvement |
|-------|----------------|------------|-------------|
| Awareness | Proactive notification | Push notification | Pre-emptive service |
| Research | Self-service portal | Website | Clear requirements |
| Application | Online submission | Portal | Digital forms |
| Processing | Real-time tracking | Portal/SMS | Transparency |
| Resolution | Digital delivery | Portal/Email | Instant outcome |
| Follow-up | Self-service FAQ | Chatbot | 24/7 support |

## Service Blueprint

### Front Stage (Citizen-Facing)

```
┌─────────────────────────────────────────────────────────────┐
│ CITIZEN ACTIONS                                             │
├─────────────────────────────────────────────────────────────┤
│ Visit → Search → Start → Fill → Upload → Submit → Track    │
│ Portal  Info    App     Form   Docs     App      Status    │
└─────────────────────────────────────────────────────────────┘
         │         │       │       │        │         │
┌─────────────────────────────────────────────────────────────┐
│ LINE OF INTERACTION                                          │
├─────────────────────────────────────────────────────────────┤
│ FRONT STAGE (Visible to Citizen)                            │
│ Portal  Search  Account Forms  Upload   Submit  Dashboard   │
│ UI      Results Auth    UI     Handler  Confirm Tracker     │
└─────────────────────────────────────────────────────────────┘
         │         │       │       │        │         │
┌─────────────────────────────────────────────────────────────┐
│ LINE OF VISIBILITY                                           │
├─────────────────────────────────────────────────────────────┤
│ BACK STAGE (Not Visible)                                    │
│ CMS     Index   IAM     Forms  Storage  Queue    Status     │
│ Content Search  AuthN   Engine S3/Blob  Manager  Engine     │
└─────────────────────────────────────────────────────────────┘
         │         │       │       │        │         │
┌─────────────────────────────────────────────────────────────┐
│ SUPPORT PROCESSES                                            │
│ Data Verification │ Rules Engine │ Case Mgmt │ Analytics   │
│ External Systems  │ Workflow     │ Reporting │ Audit       │
└─────────────────────────────────────────────────────────────┘
```

### Channel Strategy

| Channel | Services | Target Users | Hours |
|---------|----------|--------------|-------|
| Portal | All | All citizens | 24/7 |
| Mobile | High-volume | Mobile users | 24/7 |
| Phone | Complex, appeals | All | 8am-6pm |
| In-Person | Vulnerable, complex | Seniors, special needs | 9am-5pm |
| Chat | FAQ, simple | Digital-native | 24/7 (bot), 8am-8pm (agent) |

## Service Requirements

### Functional Requirements
| Req ID | Requirement | Priority |
|--------|-------------|----------|
| FR-001 | Online application submission | Must |
| FR-002 | Real-time status tracking | Must |
| FR-003 | Document upload capability | Must |
| FR-004 | Payment processing | Should |
| FR-005 | Appointment scheduling | Should |

### Non-Functional Requirements
| Requirement | Target |
|-------------|--------|
| Availability | 99.9% |
| Response Time | < 3 sec |
| Accessibility | WCAG 2.1 AA |
| Mobile Support | Responsive |
| Languages | [Languages] |

## Implementation Roadmap

### Phase 1: Digital Foundation (Months 1-6)
- Online portal development
- Basic application submission
- Account management

### Phase 2: Enhancement (Months 7-12)
- Status tracking
- Document management
- Payment integration

### Phase 3: Optimization (Months 13-18)
- AI-assisted processing
- Proactive notifications
- Continuous improvement

## Success Metrics

| Metric | Baseline | Target | Timeline |
|--------|----------|--------|----------|
| Processing Time | [Current] | [Target] | [Date] |
| Digital Adoption | [%] | [%] | [Date] |
| Satisfaction | [Score] | [Score] | [Date] |
| Cost per Transaction | $[X] | $[X] | [Date] |
```

---

## Skill 3: Policy Analysis Framework

### Command: `/gov-policy`

### Purpose
Provide structured framework for analyzing policy implications, alternatives, and recommendations.

### Inputs Required
```yaml
policy_area: "Policy Area"
policy_type: "regulatory|legislative|administrative|program"
analysis_type: "ex-ante|ex-post|comparative"
stakeholders:
  - "Stakeholder Group 1"
  - "Stakeholder Group 2"
policy_question: "What is the key policy question?"
alternatives:
  - "Status quo"
  - "Alternative 1"
  - "Alternative 2"
evaluation_criteria:
  - "Effectiveness"
  - "Efficiency"
  - "Equity"
  - "Feasibility"
```

### Policy Analysis Framework

#### Policy Analysis Steps

| Step | Description | Output |
|------|-------------|--------|
| 1. Define Problem | Clarify the issue | Problem statement |
| 2. Assemble Evidence | Research and data | Evidence base |
| 3. Construct Alternatives | Policy options | Options matrix |
| 4. Select Criteria | Evaluation standards | Criteria weights |
| 5. Predict Outcomes | Impact assessment | Projections |
| 6. Confront Tradeoffs | Compare options | Tradeoff matrix |
| 7. Decide | Recommendation | Decision memo |
| 8. Tell Your Story | Communication | Policy brief |

#### Evaluation Criteria

| Criterion | Description | Measures |
|-----------|-------------|----------|
| **Effectiveness** | Achieves objectives | Goal attainment |
| **Efficiency** | Cost-benefit ratio | ROI, cost per outcome |
| **Equity** | Fair distribution | Impact on groups |
| **Feasibility** | Can be implemented | Political, technical |
| **Sustainability** | Long-term viability | Resource requirements |

### Output: Policy Analysis Report

```markdown
# Policy Analysis Report
## [Policy Title]
### Date: [Date]

## Executive Summary

**Policy Question:** [Question]
**Recommendation:** [Recommended alternative]
**Key Finding:** [Main insight]

## 1. Problem Definition

### Problem Statement
[Clear, concise statement of the problem]

### Problem Magnitude
| Indicator | Value | Trend |
|-----------|-------|-------|
| [Indicator] | [Value] | [↑↓→] |

### Root Causes
1. [Cause 1]
2. [Cause 2]

### Who is Affected
| Group | Impact | Size |
|-------|--------|------|
| [Group] | [Impact] | [#] |

## 2. Evidence Base

### Data Sources
| Source | Type | Relevance |
|--------|------|-----------|
| [Source] | [Type] | [H/M/L] |

### Key Statistics
| Statistic | Value | Source |
|-----------|-------|--------|
| [Stat] | [Value] | [Source] |

### Research Findings
| Study | Finding | Strength |
|-------|---------|----------|
| [Study] | [Finding] | [Strong/Moderate/Weak] |

## 3. Policy Alternatives

### Alternative A: Status Quo
**Description:** [Current approach]
**Mechanism:** [How it works]
**Expected Outcomes:** [Outcomes]

### Alternative B: [Name]
**Description:** [Approach]
**Mechanism:** [How it works]
**Expected Outcomes:** [Outcomes]

### Alternative C: [Name]
**Description:** [Approach]
**Mechanism:** [How it works]
**Expected Outcomes:** [Outcomes]

## 4. Evaluation Criteria

| Criterion | Weight | Definition |
|-----------|--------|------------|
| Effectiveness | 30% | [Definition] |
| Efficiency | 25% | [Definition] |
| Equity | 20% | [Definition] |
| Feasibility | 15% | [Definition] |
| Sustainability | 10% | [Definition] |

## 5. Analysis of Alternatives

### Effectiveness Analysis
| Alternative | Score | Evidence |
|-------------|-------|----------|
| A: Status Quo | [X/10] | [Evidence] |
| B: [Name] | [X/10] | [Evidence] |
| C: [Name] | [X/10] | [Evidence] |

### Cost-Benefit Analysis
| Alternative | Costs | Benefits | Net Benefit | B/C Ratio |
|-------------|-------|----------|-------------|-----------|
| A | $[X] | $[X] | $[X] | [X] |
| B | $[X] | $[X] | $[X] | [X] |
| C | $[X] | $[X] | $[X] | [X] |

### Equity Analysis
| Alternative | Impact on [Group 1] | Impact on [Group 2] |
|-------------|---------------------|---------------------|
| A | [Impact] | [Impact] |
| B | [Impact] | [Impact] |
| C | [Impact] | [Impact] |

### Feasibility Analysis
| Alternative | Political | Technical | Administrative | Financial |
|-------------|-----------|-----------|----------------|-----------|
| A | [H/M/L] | [H/M/L] | [H/M/L] | [H/M/L] |
| B | [H/M/L] | [H/M/L] | [H/M/L] | [H/M/L] |
| C | [H/M/L] | [H/M/L] | [H/M/L] | [H/M/L] |

## 6. Tradeoff Matrix

| Alternative | Effect. | Effic. | Equity | Feas. | Sust. | **Total** |
|-------------|---------|--------|--------|-------|-------|-----------|
| Weight | 30% | 25% | 20% | 15% | 10% | 100% |
| A: Status Quo | [X] | [X] | [X] | [X] | [X] | **[X]** |
| B: [Name] | [X] | [X] | [X] | [X] | [X] | **[X]** |
| C: [Name] | [X] | [X] | [X] | [X] | [X] | **[X]** |

## 7. Recommendation

### Recommended Alternative: [Name]

**Rationale:**
1. [Reason 1]
2. [Reason 2]
3. [Reason 3]

**Implementation Considerations:**
- [Consideration 1]
- [Consideration 2]

**Risks and Mitigations:**
| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| [Risk] | [H/M/L] | [H/M/L] | [Action] |

## 8. Implementation Plan

| Phase | Activities | Timeline | Resources |
|-------|------------|----------|-----------|
| Design | [Activities] | [Time] | [Resources] |
| Pilot | [Activities] | [Time] | [Resources] |
| Rollout | [Activities] | [Time] | [Resources] |
| Evaluation | [Activities] | [Time] | [Resources] |

## Appendices

### A. Stakeholder Analysis
| Stakeholder | Interest | Position | Influence |
|-------------|----------|----------|-----------|
| [Stakeholder] | [Interest] | [Support/Oppose] | [H/M/L] |

### B. Assumptions and Limitations
- [Assumption/Limitation]
```

---

## Skill 4: Transparency Audit

### Command: `/gov-transparency`

### Purpose
Audit government transparency practices including open data, FOIA compliance, public meetings, and proactive disclosure.

### Inputs Required
```yaml
entity_name: "Government Entity"
audit_scope:
  - "Open data"
  - "FOIA/Public records"
  - "Public meetings"
  - "Financial transparency"
  - "Proactive disclosure"
current_practices:
  open_data_portal: true|false
  foia_online: true|false
  meeting_recordings: true|false
  budget_transparency: "basic|detailed|comprehensive"
benchmarks:
  - "Open Government Partnership"
  - "Sunshine Laws"
  - "FOIA Best Practices"
```

### Transparency Assessment Framework

#### Transparency Dimensions

| Dimension | Focus | Examples |
|-----------|-------|----------|
| **Proactive Disclosure** | Publish without request | Policies, budgets, contracts |
| **Reactive Disclosure** | Respond to requests | FOIA, public records |
| **Open Data** | Machine-readable data | Datasets, APIs |
| **Participatory** | Citizen involvement | Public comment, meetings |
| **Accountability** | Performance tracking | Metrics, audits, reports |

### Output: Transparency Audit Report

```markdown
# Government Transparency Audit
## [Entity Name]
### Audit Date: [Date]

## Executive Summary

**Overall Transparency Score:** [X/100]
**Rating:** [Exemplary|Strong|Adequate|Needs Improvement|Poor]
**Key Strengths:** [List]
**Critical Gaps:** [List]

## Audit Scope

| Dimension | Included | Weight |
|-----------|----------|--------|
| Proactive Disclosure | ✓ | 25% |
| FOIA/Public Records | ✓ | 25% |
| Open Data | ✓ | 20% |
| Public Meetings | ✓ | 15% |
| Financial Transparency | ✓ | 15% |

## Detailed Findings

### Proactive Disclosure (Score: X/100)

#### Required Disclosures
| Item | Status | Quality | Location |
|------|--------|---------|----------|
| Organizational chart | [Yes/No] | [H/M/L] | [URL] |
| Contact information | [Yes/No] | [H/M/L] | [URL] |
| Policies & procedures | [Yes/No] | [H/M/L] | [URL] |
| Annual reports | [Yes/No] | [H/M/L] | [URL] |
| Budget documents | [Yes/No] | [H/M/L] | [URL] |
| Contract awards | [Yes/No] | [H/M/L] | [URL] |
| Meeting minutes | [Yes/No] | [H/M/L] | [URL] |

### FOIA/Public Records (Score: X/100)

#### Process Assessment
| Criterion | Status | Finding |
|-----------|--------|---------|
| Online request submission | [Yes/No] | [Finding] |
| Request tracking | [Yes/No] | [Finding] |
| Response timeliness | [X days avg] | [vs. requirement] |
| Fee transparency | [Yes/No] | [Finding] |
| Appeal process | [Clear/Unclear] | [Finding] |

#### Performance Metrics
| Metric | Value | Benchmark |
|--------|-------|-----------|
| Requests received | [#] | N/A |
| Average response time | [Days] | [Requirement] |
| Requests granted | [%] | > 80% |
| Requests denied | [%] | < 15% |
| Appeals | [#] | Minimal |

### Open Data (Score: X/100)

#### Open Data Portal
| Criterion | Status | Finding |
|-----------|--------|---------|
| Portal exists | [Yes/No] | [URL] |
| Dataset count | [#] | [Benchmark] |
| Update frequency | [Frequency] | [Assessment] |
| Machine-readable formats | [%] | > 80% |
| API availability | [Yes/No] | [Finding] |
| License clarity | [Clear/Unclear] | [Finding] |

#### High-Value Datasets
| Dataset | Available | Format | Quality |
|---------|-----------|--------|---------|
| Budget | [Yes/No] | [Format] | [H/M/L] |
| Spending | [Yes/No] | [Format] | [H/M/L] |
| Contracts | [Yes/No] | [Format] | [H/M/L] |
| Permits | [Yes/No] | [Format] | [H/M/L] |
| Crime | [Yes/No] | [Format] | [H/M/L] |

### Public Meetings (Score: X/100)

| Criterion | Status | Finding |
|-----------|--------|---------|
| Meeting notices published | [Yes/No] | [Timing] |
| Agendas available in advance | [Yes/No] | [Timing] |
| Minutes published | [Yes/No] | [Timing] |
| Recordings available | [Yes/No] | [Format] |
| Remote participation | [Yes/No] | [Method] |
| Public comment period | [Yes/No] | [Process] |

### Financial Transparency (Score: X/100)

| Criterion | Status | Finding |
|-----------|--------|---------|
| Budget published | [Yes/No] | [Detail level] |
| Checkbook-level spending | [Yes/No] | [Finding] |
| Vendor payments | [Yes/No] | [Finding] |
| Salary information | [Yes/No] | [Finding] |
| Audit reports | [Yes/No] | [Finding] |
| Pension/benefit data | [Yes/No] | [Finding] |

## Benchmarking

### Comparison to Standards
| Standard | Score | Gap |
|----------|-------|-----|
| Open Government Partnership | [X/100] | [+/-] |
| Sunshine Index | [X/100] | [+/-] |
| FOIA Best Practices | [X/100] | [+/-] |

## Recommendations

### High Priority
| # | Recommendation | Impact | Effort |
|---|----------------|--------|--------|
| 1 | [Recommendation] | [H/M/L] | [H/M/L] |

### Medium Priority
| # | Recommendation | Impact | Effort |
|---|----------------|--------|--------|
| 1 | [Recommendation] | [H/M/L] | [H/M/L] |

## Improvement Roadmap

| Phase | Focus | Timeline |
|-------|-------|----------|
| 1 | FOIA process improvements | 0-6 months |
| 2 | Open data expansion | 6-12 months |
| 3 | Proactive disclosure | 12-18 months |
```

---

## Skill 5: Section 508 Compliance

### Command: `/gov-508`

### Purpose
Verify compliance with Section 508 of the Rehabilitation Act and WCAG 2.1 accessibility standards for government digital content.

### Inputs Required
```yaml
assessment_scope:
  - "Websites"
  - "Mobile applications"
  - "Documents"
  - "Software applications"
  - "Kiosks"
assets_in_scope:
  - url: "https://example.gov"
    type: "website"
  - name: "Mobile App"
    type: "mobile"
compliance_level: "WCAG 2.1 AA"
testing_approach:
  - "Automated scanning"
  - "Manual testing"
  - "Assistive technology testing"
```

### Section 508 Framework

#### WCAG 2.1 Principles (POUR)

| Principle | Description | Guidelines |
|-----------|-------------|------------|
| **Perceivable** | Info presentable to users | Text alternatives, captions, adaptable |
| **Operable** | UI navigable | Keyboard, time, seizures, navigable |
| **Understandable** | Info understandable | Readable, predictable, input assist |
| **Robust** | Compatible with tech | Parsing, name/role/value |

#### WCAG 2.1 Level AA Requirements

| Guideline | Criteria Count |
|-----------|----------------|
| 1.1 Text Alternatives | 1 |
| 1.2 Time-based Media | 5 |
| 1.3 Adaptable | 5 |
| 1.4 Distinguishable | 10 |
| 2.1 Keyboard Accessible | 4 |
| 2.2 Enough Time | 2 |
| 2.3 Seizures | 1 |
| 2.4 Navigable | 7 |
| 2.5 Input Modalities | 4 |
| 3.1 Readable | 2 |
| 3.2 Predictable | 3 |
| 3.3 Input Assistance | 4 |
| 4.1 Compatible | 2 |

### Output: Section 508 Compliance Report

```markdown
# Section 508 Accessibility Assessment
## [Entity Name]
### Assessment Date: [Date]

## Executive Summary

**Overall Compliance Level:** [Full|Substantial|Partial|Non-Compliant]
**WCAG 2.1 AA Conformance:** [%]
**Critical Issues:** [Count]
**Total Issues:** [Count]

## Assessment Scope

| Asset | Type | URL/Name |
|-------|------|----------|
| [Asset] | [Website/App/Doc] | [Location] |

## Compliance Summary

### By WCAG Principle
| Principle | Pass | Fail | % Compliant |
|-----------|------|------|-------------|
| Perceivable | [#] | [#] | [%] |
| Operable | [#] | [#] | [%] |
| Understandable | [#] | [#] | [%] |
| Robust | [#] | [#] | [%] |

### By Severity
| Severity | Count | Definition |
|----------|-------|------------|
| Critical | [#] | Blocks access completely |
| Serious | [#] | Significant barrier |
| Moderate | [#] | Some difficulty |
| Minor | [#] | Slight inconvenience |

## Detailed Findings

### Critical Issues
| # | Issue | WCAG | Location | Impact | Remediation |
|---|-------|------|----------|--------|-------------|
| 1 | [Issue] | [Criterion] | [Page/Element] | [Impact] | [Fix] |

### Serious Issues
| # | Issue | WCAG | Location | Impact | Remediation |
|---|-------|------|----------|--------|-------------|
| 1 | [Issue] | [Criterion] | [Page/Element] | [Impact] | [Fix] |

## Testing Results by Guideline

### 1. Perceivable

#### 1.1 Text Alternatives
| Criterion | Status | Issues Found |
|-----------|--------|--------------|
| 1.1.1 Non-text Content | [Pass/Fail] | [Count] |

**Issues:**
- [Issue description with location]

#### 1.2 Time-based Media
| Criterion | Status | Issues Found |
|-----------|--------|--------------|
| 1.2.1 Audio-only/Video-only | [Pass/Fail/N/A] | [Count] |
| 1.2.2 Captions | [Pass/Fail/N/A] | [Count] |
| 1.2.3 Audio Description | [Pass/Fail/N/A] | [Count] |

#### 1.3 Adaptable
| Criterion | Status | Issues Found |
|-----------|--------|--------------|
| 1.3.1 Info and Relationships | [Pass/Fail] | [Count] |
| 1.3.2 Meaningful Sequence | [Pass/Fail] | [Count] |
| 1.3.3 Sensory Characteristics | [Pass/Fail] | [Count] |

#### 1.4 Distinguishable
| Criterion | Status | Issues Found |
|-----------|--------|--------------|
| 1.4.1 Use of Color | [Pass/Fail] | [Count] |
| 1.4.3 Contrast (Minimum) | [Pass/Fail] | [Count] |
| 1.4.4 Resize Text | [Pass/Fail] | [Count] |
| 1.4.5 Images of Text | [Pass/Fail] | [Count] |

### 2. Operable

#### 2.1 Keyboard Accessible
| Criterion | Status | Issues Found |
|-----------|--------|--------------|
| 2.1.1 Keyboard | [Pass/Fail] | [Count] |
| 2.1.2 No Keyboard Trap | [Pass/Fail] | [Count] |

#### 2.4 Navigable
| Criterion | Status | Issues Found |
|-----------|--------|--------------|
| 2.4.1 Bypass Blocks | [Pass/Fail] | [Count] |
| 2.4.2 Page Titled | [Pass/Fail] | [Count] |
| 2.4.3 Focus Order | [Pass/Fail] | [Count] |
| 2.4.4 Link Purpose | [Pass/Fail] | [Count] |
| 2.4.6 Headings and Labels | [Pass/Fail] | [Count] |

### 3. Understandable

#### 3.1 Readable
| Criterion | Status | Issues Found |
|-----------|--------|--------------|
| 3.1.1 Language of Page | [Pass/Fail] | [Count] |
| 3.1.2 Language of Parts | [Pass/Fail] | [Count] |

#### 3.3 Input Assistance
| Criterion | Status | Issues Found |
|-----------|--------|--------------|
| 3.3.1 Error Identification | [Pass/Fail] | [Count] |
| 3.3.2 Labels or Instructions | [Pass/Fail] | [Count] |
| 3.3.3 Error Suggestion | [Pass/Fail] | [Count] |

### 4. Robust

#### 4.1 Compatible
| Criterion | Status | Issues Found |
|-----------|--------|--------------|
| 4.1.1 Parsing | [Pass/Fail] | [Count] |
| 4.1.2 Name, Role, Value | [Pass/Fail] | [Count] |

## Remediation Plan

### Immediate (Critical Issues)
| Issue | Fix | Owner | Due |
|-------|-----|-------|-----|
| [Issue] | [Action] | [Owner] | [Date] |

### Short-term (Serious Issues)
| Issue | Fix | Owner | Due |
|-------|-----|-------|-----|
| [Issue] | [Action] | [Owner] | [Date] |

### Medium-term (Moderate Issues)
| Issue | Fix | Owner | Due |
|-------|-----|-------|-----|
| [Issue] | [Action] | [Owner] | [Date] |

## Testing Methodology

### Tools Used
| Tool | Purpose |
|------|---------|
| [Tool] | [Purpose] |

### Manual Testing
| Test | Method |
|------|--------|
| Keyboard navigation | Tab through all interactive elements |
| Screen reader | NVDA/JAWS/VoiceOver testing |
| Color contrast | Manual verification of color pairs |

## Recommendations

### Process Improvements
1. [Recommendation]

### Training Needs
1. [Training topic]

### Governance
1. [Policy recommendation]
```

---

## Skill 6: Procurement Support

### Command: `/gov-procurement`

### Purpose
Support government procurement processes including requirements development, RFP creation, evaluation criteria, and vendor selection.

### Inputs Required
```yaml
procurement_type: "goods|services|technology|construction"
estimated_value: 500000
procurement_method: "RFP|RFQ|IFB|sole_source"
timeline:
  rfp_release: "2026-03-01"
  proposals_due: "2026-04-15"
  award_target: "2026-06-01"
requirements_status: "draft|final"
evaluation_approach: "lowest_price|best_value|qualifications"
```

### Output: Procurement Documentation

```markdown
# Procurement Support Package
## [Project Name]
### Date: [Date]

## Procurement Summary

| Attribute | Value |
|-----------|-------|
| Procurement Type | [Type] |
| Estimated Value | $[Amount] |
| Method | [RFP/RFQ/IFB] |
| Contract Type | [Fixed/T&M/Cost Plus] |
| Contract Duration | [Duration] |

## Requirements Specification

### Scope of Work
[Detailed description of requirements]

### Technical Requirements
| Req ID | Requirement | Priority | Mandatory |
|--------|-------------|----------|-----------|
| TR-001 | [Requirement] | [H/M/L] | [Y/N] |

### Functional Requirements
| Req ID | Requirement | Priority | Mandatory |
|--------|-------------|----------|-----------|
| FR-001 | [Requirement] | [H/M/L] | [Y/N] |

### Performance Requirements
| Metric | Requirement | Measurement |
|--------|-------------|-------------|
| [Metric] | [Requirement] | [How measured] |

## Evaluation Criteria

### Technical Evaluation (XX points)
| Criterion | Points | Description |
|-----------|--------|-------------|
| Technical Approach | [#] | [Description] |
| Experience | [#] | [Description] |
| Past Performance | [#] | [Description] |
| Key Personnel | [#] | [Description] |

### Cost/Price Evaluation (XX points)
| Criterion | Points | Description |
|-----------|--------|-------------|
| Total Price | [#] | [Description] |
| Price Realism | [#] | [Description] |

### Evaluation Scoring Guide
| Score | Description |
|-------|-------------|
| 5 - Exceptional | Exceeds requirements, innovative |
| 4 - Good | Exceeds requirements |
| 3 - Acceptable | Meets requirements |
| 2 - Marginal | Partially meets requirements |
| 1 - Unacceptable | Does not meet requirements |

## RFP Outline

1. Introduction and Purpose
2. Background
3. Scope of Work
4. Technical Requirements
5. Proposal Instructions
6. Evaluation Criteria
7. Contract Terms
8. Attachments

## Procurement Timeline

| Milestone | Date |
|-----------|------|
| RFP Release | [Date] |
| Pre-Proposal Conference | [Date] |
| Questions Due | [Date] |
| Answers Posted | [Date] |
| Proposals Due | [Date] |
| Evaluation Period | [Dates] |
| Interviews (if needed) | [Dates] |
| Selection | [Date] |
| Contract Award | [Date] |
| Performance Start | [Date] |
```

---

## Skill 7: Stakeholder Engagement

### Command: `/gov-stakeholder`

### Purpose
Plan and execute public stakeholder engagement for government initiatives including community meetings, public comment periods, and participatory processes.

### Inputs Required
```yaml
initiative_name: "Initiative Name"
engagement_purpose:
  - "Inform"
  - "Consult"
  - "Involve"
  - "Collaborate"
  - "Empower"
stakeholder_groups:
  - name: "Group Name"
    size: 5000
    interest: "high|medium|low"
    influence: "high|medium|low"
timeline:
  start: "2026-02-15"
  end: "2026-05-15"
engagement_methods:
  - "Public meetings"
  - "Online surveys"
  - "Focus groups"
constraints:
  budget: 50000
  languages: ["English", "Spanish"]
```

### IAP2 Spectrum of Engagement

| Level | Goal | Promise |
|-------|------|---------|
| **Inform** | Provide information | Keep you informed |
| **Consult** | Obtain feedback | Listen and acknowledge |
| **Involve** | Work with public | Reflect concerns in decisions |
| **Collaborate** | Partner in decisions | Incorporate advice |
| **Empower** | Place decision with public | Implement your decision |

### Output: Stakeholder Engagement Plan

```markdown
# Stakeholder Engagement Plan
## [Initiative Name]
### Version: 1.0 | Date: [Date]

## Overview

### Initiative Summary
[Brief description of the initiative]

### Engagement Objectives
1. [Objective 1]
2. [Objective 2]

### IAP2 Level
**Primary Level:** [Inform/Consult/Involve/Collaborate/Empower]
**Promise to Stakeholders:** [Promise statement]

## Stakeholder Analysis

### Stakeholder Map
```
              High Influence
                    │
    Keep Satisfied  │  Key Players
         ┌──────────┼──────────┐
         │    ●A    │    ●B    │
Low      │          │          │ High
Interest ├──────────┼──────────┤ Interest
         │    ●C    │    ●D    │
         │  Monitor │Keep Informed│
         └──────────┼──────────┘
                    │
              Low Influence
```

### Stakeholder Register
| Group | Interest | Influence | Engagement Level | Key Concerns |
|-------|----------|-----------|------------------|--------------|
| [Group] | [H/M/L] | [H/M/L] | [Level] | [Concerns] |

## Engagement Strategy

### By Stakeholder Group

| Group | Method | Frequency | Responsible |
|-------|--------|-----------|-------------|
| [Group] | [Methods] | [Frequency] | [Owner] |

### Engagement Methods

| Method | Description | Audience | Timeline |
|--------|-------------|----------|----------|
| Public Meetings | Town halls | General public | [Dates] |
| Online Survey | Web-based feedback | All | [Dates] |
| Focus Groups | Small group discussions | Targeted | [Dates] |
| Comment Period | Formal written comments | All | [Dates] |

## Engagement Schedule

| Activity | Date | Location | Target Audience |
|----------|------|----------|-----------------|
| [Activity] | [Date] | [Location] | [Audience] |

## Communication Plan

### Key Messages
1. [Message 1]
2. [Message 2]

### Communication Channels
| Channel | Audience | Content Type | Frequency |
|---------|----------|--------------|-----------|
| Website | All | Updates, materials | Ongoing |
| Email | Subscribers | Notices, updates | As needed |
| Social Media | Engaged public | Highlights, events | Weekly |
| Press Releases | Media | Major milestones | As needed |

## Feedback Management

### Input Collection
| Source | Method | Processing |
|--------|--------|------------|
| Meetings | Notes, recordings | Summarize, theme |
| Surveys | Online platform | Analyze, report |
| Comments | Written submissions | Categorize, respond |

### Response Commitment
- Acknowledge all input within [X] days
- Publish summary of input received
- Explain how input influenced decisions
- Provide final decision rationale

## Accessibility & Equity

### Language Access
| Language | Materials | Interpretation |
|----------|-----------|----------------|
| English | ✓ | ✓ |
| [Language] | ✓ | ✓ |

### Accessibility
- All venues ADA accessible
- Materials in accessible formats
- ASL interpretation available on request
- Virtual participation options

### Equity Considerations
- Meetings at varied times/locations
- Childcare provided at public meetings
- Transportation assistance available
- Targeted outreach to underserved communities

## Evaluation

### Success Metrics
| Metric | Target | Measurement |
|--------|--------|-------------|
| Meeting attendance | [#] | Headcount |
| Survey responses | [#] | Response count |
| Demographic representation | [%] | Survey demographics |
| Satisfaction with process | [Score] | Exit survey |

## Budget

| Item | Amount |
|------|--------|
| Meeting venues | $[X] |
| Materials/printing | $[X] |
| Translation/interpretation | $[X] |
| Online tools | $[X] |
| Outreach | $[X] |
| **Total** | $[X] |

## Roles & Responsibilities

| Role | Responsibilities | Person |
|------|------------------|--------|
| Project Lead | Overall coordination | [Name] |
| Communications | Messaging, outreach | [Name] |
| Logistics | Events, materials | [Name] |
| Analysis | Input processing | [Name] |
```

---

## Skill 8: Regulatory Impact Assessment

### Command: `/gov-ria`

### Purpose
Conduct regulatory impact assessment (RIA) to evaluate the potential effects of proposed regulations on economy, society, and environment.

### Inputs Required
```yaml
regulation_title: "Regulation Title"
regulatory_agency: "Agency Name"
regulation_type: "new|amendment|repeal"
policy_objective: "Policy objective"
assessment_scope:
  - "Economic impact"
  - "Small business impact"
  - "Environmental impact"
  - "Social impact"
affected_entities:
  - "Businesses"
  - "Individuals"
  - "Government"
alternatives_considered:
  - "No action"
  - "Alternative 1"
  - "Alternative 2"
```

### RIA Framework

#### RIA Components

| Component | Purpose | Key Questions |
|-----------|---------|---------------|
| **Problem Definition** | Why regulate? | What market failure? |
| **Objectives** | What to achieve? | Measurable outcomes? |
| **Alternatives** | Other options? | Regulatory vs non-regulatory |
| **Impact Analysis** | Who affected, how? | Costs, benefits, distribution |
| **Consultation** | Stakeholder input | Who consulted, what learned? |
| **Recommendation** | Best option | Justified selection |

### Output: Regulatory Impact Assessment

```markdown
# Regulatory Impact Assessment
## [Regulation Title]
### Agency: [Agency Name]
### Date: [Date]

## Executive Summary

**Regulation:** [Title]
**Type:** [New/Amendment/Repeal]
**Recommendation:** [Proceed/Modify/Defer]
**Net Benefit:** $[Amount] over [Years]

## 1. Statement of Need

### Problem Definition
[Description of the problem requiring regulatory intervention]

### Market Failure
| Type | Description | Evidence |
|------|-------------|----------|
| [Type] | [Description] | [Evidence] |

### Current Situation
[Description of current regulatory environment]

### Consequences of Inaction
| Impact | Description | Magnitude |
|--------|-------------|-----------|
| [Impact] | [Description] | [H/M/L] |

## 2. Objectives

### Primary Objective
[Clear statement of regulatory objective]

### Secondary Objectives
1. [Objective]
2. [Objective]

### Performance Indicators
| Objective | Indicator | Baseline | Target |
|-----------|-----------|----------|--------|
| [Objective] | [Indicator] | [Current] | [Target] |

## 3. Regulatory Alternatives

### Alternative 0: No Action (Baseline)
**Description:** [Current state continues]
**Projected Outcomes:** [Outcomes]

### Alternative 1: [Name]
**Description:** [Approach]
**Mechanism:** [How it works]
**Expected Outcomes:** [Outcomes]

### Alternative 2: [Name]
**Description:** [Approach]
**Mechanism:** [How it works]
**Expected Outcomes:** [Outcomes]

### Alternative 3: Proposed Regulation
**Description:** [Proposed approach]
**Mechanism:** [How it works]
**Expected Outcomes:** [Outcomes]

## 4. Impact Analysis

### Economic Impact

#### Costs
| Category | Year 1 | Year 2-5 (Annual) | 10-Year Total |
|----------|--------|-------------------|---------------|
| Compliance costs | $[X] | $[X] | $[X] |
| Administrative costs | $[X] | $[X] | $[X] |
| Government costs | $[X] | $[X] | $[X] |
| **Total Costs** | $[X] | $[X] | $[X] |

#### Benefits
| Category | Year 1 | Year 2-5 (Annual) | 10-Year Total |
|----------|--------|-------------------|---------------|
| Health benefits | $[X] | $[X] | $[X] |
| Safety benefits | $[X] | $[X] | $[X] |
| Economic benefits | $[X] | $[X] | $[X] |
| **Total Benefits** | $[X] | $[X] | $[X] |

#### Net Impact
| Metric | Value |
|--------|-------|
| Net Present Value | $[X] |
| Benefit-Cost Ratio | [X]:1 |
| Break-even Year | Year [X] |

### Small Business Impact

| Impact Area | Number Affected | Cost per Entity | Total Cost |
|-------------|-----------------|-----------------|------------|
| Compliance | [#] | $[X] | $[X] |
| Reporting | [#] | $[X] | $[X] |
| Training | [#] | $[X] | $[X] |

**Small Business Flexibility Analysis:**
- [Alternative considered to reduce burden]
- [Exemption or tiered approach]

### Environmental Impact
| Impact | Direction | Magnitude | Evidence |
|--------|-----------|-----------|----------|
| [Impact] | [+/-] | [H/M/L] | [Source] |

### Social Impact
| Group | Impact | Direction | Magnitude |
|-------|--------|-----------|-----------|
| [Group] | [Impact] | [+/-] | [H/M/L] |

## 5. Alternative Comparison

| Criterion | Alt 0 | Alt 1 | Alt 2 | Alt 3 |
|-----------|-------|-------|-------|-------|
| Effectiveness | [Score] | [Score] | [Score] | [Score] |
| Efficiency | [Score] | [Score] | [Score] | [Score] |
| Equity | [Score] | [Score] | [Score] | [Score] |
| Feasibility | [Score] | [Score] | [Score] | [Score] |
| **Total** | [Score] | [Score] | [Score] | [Score] |

## 6. Consultation Summary

### Stakeholders Consulted
| Stakeholder | Method | Key Concerns |
|-------------|--------|--------------|
| [Stakeholder] | [Method] | [Concerns] |

### Input Received
| Theme | # Comments | Response |
|-------|------------|----------|
| [Theme] | [#] | [How addressed] |

## 7. Implementation & Enforcement

### Implementation Timeline
| Phase | Activities | Date |
|-------|------------|------|
| Publication | Final rule | [Date] |
| Effective | Rule takes effect | [Date] |
| Compliance | Full compliance required | [Date] |

### Enforcement Approach
| Violation | Consequence | Process |
|-----------|-------------|---------|
| [Violation] | [Consequence] | [Process] |

## 8. Monitoring & Evaluation

### Performance Metrics
| Metric | Baseline | Target | Frequency |
|--------|----------|--------|-----------|
| [Metric] | [Current] | [Target] | [Frequency] |

### Review Schedule
| Review | Date | Purpose |
|--------|------|---------|
| Implementation review | [Date] | Assess implementation |
| Impact evaluation | [Date] | Assess effectiveness |

## 9. Recommendation

**Recommended Alternative:** [Alternative #]

**Rationale:**
1. [Reason 1]
2. [Reason 2]
3. [Reason 3]

**Conditions/Caveats:**
- [Condition]

## Appendices

### A. Detailed Cost Calculations
### B. Stakeholder Comments
### C. Technical Analysis
### D. Legal Authority
```

---

## Service Line Integration

### Fee Modifier
**GOV Base Modifier:** 0.85 (government rate discount applied)

### Typical Engagement Phases

| Phase | Duration | Deliverables |
|-------|----------|--------------|
| Assessment | 3-4 weeks | Current state, gap analysis |
| Design | 4-6 weeks | Service blueprints, requirements |
| Implementation | Variable | System deployment, change mgmt |
| Evaluation | Ongoing | Performance monitoring, reporting |

### Cross-Skill Workflows

```
E-Government Transformation:
/gov-egov-assess → /dig-roadmap → /gov-citizen-svc →
/gov-508 → Implementation

Policy Development:
/gov-policy → /gov-stakeholder → /gov-ria →
/gov-transparency → Policy publication

Procurement Project:
/gov-procurement → /esi-vendor-eval → Contract award →
/gov-transparency (contract publication)

Accessibility Remediation:
/gov-508 → Remediation plan → Development →
/gov-508 (verification) → Compliance certification
```

### Integration with Other Service Lines

| Service Line | Integration Point |
|--------------|-------------------|
| DIG | Digital government transformation |
| ESI | Government system integration |
| COE | Government performance dashboards |
| ISO | Government quality/security management |
| EDU | Education department projects |
| HLT | Health department projects |

---

## Regulatory Reference

### Key Government Regulations/Standards

| Regulation/Standard | Focus | Applicability |
|---------------------|-------|---------------|
| Section 508 | Accessibility | Federal, contractors |
| FOIA | Public records | Federal, state equivalents |
| Privacy Act | Personal data | Federal agencies |
| FAR/DFAR | Procurement | Federal contracts |
| ADA | Accessibility | All government |
| Open Government | Transparency | Federal, state |
| Sunshine Laws | Public meetings | State/local |

### International Standards

| Standard | Focus | Organization |
|----------|-------|--------------|
| UN EGDI | E-government maturity | United Nations |
| OGP | Open government | Open Government Partnership |
| OECD DGI | Digital government | OECD |
| ISO 37001 | Anti-bribery | ISO |

---

## Templates & Artifacts

All GOV deliverables should use standard Omega branding via:
- `/doc-gen` for document generation
- `assets/omega-branding.json` for styling
- `scripts/omega-document-generator.js` for automation

### Standard Artifacts by Skill

| Skill | Primary Artifact | Format |
|-------|------------------|--------|
| /gov-egov-assess | E-Government Assessment | DOCX/PDF |
| /gov-citizen-svc | Service Blueprint | DOCX/PPTX |
| /gov-policy | Policy Analysis Report | DOCX/PDF |
| /gov-transparency | Transparency Audit | DOCX/PDF |
| /gov-508 | Accessibility Assessment | DOCX/PDF |
| /gov-procurement | RFP/Procurement Package | DOCX |
| /gov-stakeholder | Engagement Plan | DOCX/PDF |
| /gov-ria | Regulatory Impact Assessment | DOCX/PDF |
