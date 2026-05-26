---
name: edu
description: Education Solutions skills - K-12 performance, curriculum analytics, accreditation
---

# EDU - Education Solutions Skills

## Service Line Overview

**Code:** EDU
**Full Name:** Education Solutions
**Fee Modifier:** 1.00
**Description:** K-12 performance management, curriculum analytics, higher ed faculty evaluation, accreditation

---

## Skills Index

| # | Skill | Command | Purpose |
|---|-------|---------|---------|
| 1 | K-12 Performance Dashboard | `/edu-k12-perf` | Design K-12 performance metrics and dashboards |
| 2 | Curriculum Analytics | `/edu-curriculum` | Analyze curriculum effectiveness |
| 3 | Faculty Evaluation Framework | `/edu-faculty-eval` | Design faculty evaluation systems |
| 4 | Accreditation Gap Analysis | `/edu-accreditation` | Gap analysis for accreditation standards |
| 5 | Student Success Metrics | `/edu-student-success` | Define student success KPIs |
| 6 | LMS Assessment | `/edu-lms` | Assess Learning Management System needs |
| 7 | Academic Calendar Optimizer | `/edu-calendar` | Optimize academic scheduling |
| 8 | FERPA Compliance Check | `/edu-ferpa` | Verify FERPA compliance |

---

## Skill 1: K-12 Performance Dashboard

### Command: `/edu-k12-perf`

### Purpose
Design comprehensive K-12 performance metrics and dashboards for school districts, covering academic achievement, attendance, behavior, and operational efficiency.

### Inputs Required
```yaml
district_name: "School District Name"
district_size:
  schools: 25
  students: 15000
  teachers: 800
grade_levels: "K-12|K-8|9-12"
current_data_systems:
  sis: "PowerSchool|Infinite Campus|Other"
  assessment: "State Assessment System"
  finance: "Financial System"
stakeholders:
  - "District Leadership"
  - "Principals"
  - "Teachers"
  - "Board"
  - "Parents"
focus_areas:
  - "Academic Achievement"
  - "Attendance"
  - "Behavior"
  - "Teacher Effectiveness"
  - "Financial"
```

### K-12 Performance Framework

#### Performance Domains

| Domain | Description | Key Metrics |
|--------|-------------|-------------|
| **Academic** | Student learning outcomes | Proficiency, growth, gaps |
| **Attendance** | Student presence | Chronic absence, truancy |
| **Behavior** | School climate, discipline | Incidents, suspensions |
| **College/Career** | Post-secondary readiness | Graduation, enrollment |
| **Operations** | District efficiency | Finance, staffing, facilities |

#### Academic Metrics by Level

**Elementary (K-5)**
| Metric | Description | Target |
|--------|-------------|--------|
| Reading Proficiency | % at/above grade level | > 70% |
| Math Proficiency | % at/above grade level | > 70% |
| Reading Growth | % meeting growth target | > 60% |
| Math Growth | % meeting growth target | > 60% |

**Middle School (6-8)**
| Metric | Description | Target |
|--------|-------------|--------|
| ELA Proficiency | % proficient on state test | > 65% |
| Math Proficiency | % proficient on state test | > 60% |
| Course Completion | % completing core courses | > 95% |
| On-Track Indicator | Credits + attendance + behavior | > 80% |

**High School (9-12)**
| Metric | Description | Target |
|--------|-------------|--------|
| Graduation Rate | 4-year cohort rate | > 90% |
| College Enrollment | % enrolled within 1 year | > 65% |
| ACT/SAT Proficiency | % meeting benchmarks | > 50% |
| AP/IB Participation | % taking advanced courses | > 30% |

### Output: K-12 Dashboard Design

```markdown
# K-12 Performance Dashboard Design
## [District Name]
### Version: 1.0 | Date: [Date]

## Dashboard Architecture

### Dashboard Hierarchy
```
District Executive Dashboard
├── School Performance Scorecards (per school)
│   ├── Academic Dashboard
│   ├── Attendance Dashboard
│   └── Behavior Dashboard
├── Teacher Effectiveness Dashboard
├── Equity Dashboard (subgroup analysis)
└── Financial/Operations Dashboard
```

## Metric Catalog

### Academic Achievement Metrics

| Metric ID | Metric Name | Definition | Formula | Source | Frequency |
|-----------|-------------|------------|---------|--------|-----------|
| ACAD-001 | ELA Proficiency | % students proficient/advanced | (Prof + Adv) / Tested × 100 | State Assessment | Annual |
| ACAD-002 | Math Proficiency | % students proficient/advanced | (Prof + Adv) / Tested × 100 | State Assessment | Annual |
| ACAD-003 | ELA Growth | % meeting growth target | Met Target / Tested × 100 | State Assessment | Annual |
| ACAD-004 | Math Growth | % meeting growth target | Met Target / Tested × 100 | State Assessment | Annual |
| ACAD-005 | Reading Level | % at grade level benchmark | At Level / Tested × 100 | MAP/iReady | 3x/year |

### Attendance Metrics

| Metric ID | Metric Name | Definition | Formula | Source | Frequency |
|-----------|-------------|------------|---------|--------|-----------|
| ATT-001 | ADA | Average Daily Attendance | Present / Enrolled × 100 | SIS | Daily |
| ATT-002 | Chronic Absence | % missing ≥10% of school | Chronic / Enrolled × 100 | SIS | Monthly |
| ATT-003 | Severe Chronic | % missing ≥20% of school | Severe / Enrolled × 100 | SIS | Monthly |
| ATT-004 | Truancy Rate | % unexcused absences | Unexcused / Total Abs × 100 | SIS | Monthly |

### Behavior/Climate Metrics

| Metric ID | Metric Name | Definition | Formula | Source | Frequency |
|-----------|-------------|------------|---------|--------|-----------|
| BEH-001 | Discipline Incidents | Incidents per 100 students | Incidents / Enrolled × 100 | SIS | Monthly |
| BEH-002 | Suspension Rate | % students suspended | Suspended / Enrolled × 100 | SIS | Monthly |
| BEH-003 | Expulsion Rate | % students expelled | Expelled / Enrolled × 100 | SIS | Annual |
| BEH-004 | Referral Rate | Office referrals per 100 | Referrals / Enrolled × 100 | PBIS System | Monthly |

### College & Career Readiness

| Metric ID | Metric Name | Definition | Formula | Source | Frequency |
|-----------|-------------|------------|---------|--------|-----------|
| CCR-001 | 4-Year Grad Rate | Cohort graduation rate | Graduates / Cohort × 100 | State | Annual |
| CCR-002 | 5-Year Grad Rate | Extended cohort rate | Grad (5yr) / Cohort × 100 | State | Annual |
| CCR-003 | Dropout Rate | % students dropping out | Dropouts / Enrolled × 100 | State | Annual |
| CCR-004 | College Enrollment | % enrolling in college | Enrolled / Grads × 100 | NSC | Annual |

## Dashboard Wireframes

### District Executive Dashboard
```
┌─────────────────────────────────────────────────────────────┐
│  [District Logo]  District Performance Dashboard   [Filters]│
├─────────────────────────────────────────────────────────────┤
│ ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐│
│ │ ELA     │ │ Math    │ │ Grad    │ │ ADA     │ │ Chronic ││
│ │ 72%     │ │ 68%     │ │ 91%     │ │ 94.5%   │ │ 12%     ││
│ │ ▲ +2%   │ │ ▲ +3%   │ │ ▼ -1%   │ │ ▲ +0.5% │ │ ▼ -2%   ││
│ └─────────┘ └─────────┘ └─────────┘ └─────────┘ └─────────┘│
├─────────────────────────────────────────────────────────────┤
│  School Performance Ranking                                  │
│  ┌──────────────────────────────────────────────────────┐  │
│  │ School          │ ELA  │ Math │ Attend │ Composite   │  │
│  │ Jefferson Elem  │ 85%  │ 82%  │ 96%    │ ★★★★★      │  │
│  │ Lincoln Middle  │ 72%  │ 70%  │ 94%    │ ★★★★☆      │  │
│  │ Washington HS   │ 68%  │ 65%  │ 92%    │ ★★★☆☆      │  │
│  └──────────────────────────────────────────────────────┘  │
├─────────────────────────────────────────────────────────────┤
│  Equity Analysis: Achievement Gaps by Subgroup              │
│  [Chart showing gaps between subgroups]                     │
└─────────────────────────────────────────────────────────────┘
```

### School Scorecard
```
┌─────────────────────────────────────────────────────────────┐
│  [School Name] Performance Scorecard          Year: [Year]  │
├─────────────────────────────────────────────────────────────┤
│  OVERALL RATING: ★★★★☆ (4/5)                               │
├─────────────────────────────────────────────────────────────┤
│  Academic Achievement          │  School Climate            │
│  ┌─────────────────────────┐  │  ┌─────────────────────┐   │
│  │ ELA: 78% ████████░░     │  │  │ ADA: 95% █████████░ │   │
│  │ Math: 72% ███████░░░    │  │  │ Chronic: 10% ██░░░░ │   │
│  │ Growth: 65% ██████░░░░  │  │  │ Climate: 82% ████░░ │   │
│  └─────────────────────────┘  │  └─────────────────────┘   │
├─────────────────────────────────────────────────────────────┤
│  Trend Analysis (3 Years)                                    │
│  [Line chart showing ELA, Math, Attendance trends]          │
├─────────────────────────────────────────────────────────────┤
│  Subgroup Performance                                        │
│  │ All │ ELL │ SPED │ FRL │ Black │ Hispanic │ White │     │
│  │ 75% │ 45% │ 35%  │ 62% │  58%  │   65%    │  82%  │     │
└─────────────────────────────────────────────────────────────┘
```

## Data Integration Requirements

### Source Systems
| System | Data Elements | Refresh | Integration |
|--------|---------------|---------|-------------|
| SIS | Demographics, attendance, grades | Daily | API/File |
| Assessment Platform | Benchmark scores | After each window | API |
| State Assessment | State test results | Annual | File upload |
| Behavior System | Incidents, referrals | Real-time | API |
| HR System | Teacher assignments | Weekly | File |

## Implementation Plan

### Phase 1: Foundation (Months 1-2)
- Data warehouse setup
- Core metric calculations
- District dashboard

### Phase 2: School Dashboards (Months 3-4)
- School scorecards
- Drill-down capabilities
- Automated reporting

### Phase 3: Advanced Analytics (Months 5-6)
- Predictive early warning
- Equity analysis
- Teacher effectiveness linkage
```

---

## Skill 2: Curriculum Analytics

### Command: `/edu-curriculum`

### Purpose
Analyze curriculum effectiveness including standards alignment, pacing, assessment correlation, and learning outcome achievement.

### Inputs Required
```yaml
institution_type: "K-12|higher_ed"
curriculum_scope:
  subject: "Math|ELA|Science|Social Studies|All"
  grade_levels: ["6", "7", "8"]
current_curriculum:
  name: "Curriculum Name"
  publisher: "Publisher"
  adoption_year: 2022
data_available:
  - "Standards alignment maps"
  - "Pacing guides"
  - "Assessment results"
  - "Teacher feedback"
analysis_focus:
  - "Standards coverage"
  - "Pacing effectiveness"
  - "Assessment alignment"
  - "Student outcomes"
```

### Curriculum Analysis Framework

#### Analysis Dimensions

| Dimension | Questions Addressed | Data Sources |
|-----------|---------------------|--------------|
| **Alignment** | Does curriculum cover standards? | Alignment maps, crosswalks |
| **Rigor** | Does it meet cognitive demand? | DOK analysis, task review |
| **Pacing** | Is timing appropriate? | Pacing guides, completion rates |
| **Coherence** | Do units build logically? | Scope/sequence, progressions |
| **Assessment** | Do assessments match content? | Test blueprints, item analysis |
| **Outcomes** | Are students learning? | Achievement data, growth |

### Output: Curriculum Analysis Report

```markdown
# Curriculum Effectiveness Analysis
## [Subject]: Grades [X-Y]
### Analysis Date: [Date]

## Executive Summary

**Overall Effectiveness Rating:** [Exemplary|Effective|Developing|Ineffective]
**Key Findings:**
1. [Finding 1]
2. [Finding 2]

## Standards Alignment Analysis

### Coverage Analysis
| Standard Domain | Standards Count | Fully Covered | Partially | Not Covered |
|-----------------|-----------------|---------------|-----------|-------------|
| [Domain 1] | [Count] | [%] | [%] | [%] |
| [Domain 2] | [Count] | [%] | [%] | [%] |

### Depth of Knowledge Distribution
| DOK Level | Standards | Curriculum | Gap |
|-----------|-----------|------------|-----|
| DOK 1 (Recall) | [%] | [%] | [+/-] |
| DOK 2 (Skill) | [%] | [%] | [+/-] |
| DOK 3 (Strategic) | [%] | [%] | [+/-] |
| DOK 4 (Extended) | [%] | [%] | [+/-] |

## Pacing Analysis

### Unit Completion Rates
| Unit | Planned Days | Actual Avg | Variance | Completion Rate |
|------|--------------|------------|----------|-----------------|
| Unit 1 | [Days] | [Days] | [+/-] | [%] |

### Pacing Concerns
| Issue | Units Affected | Impact | Recommendation |
|-------|----------------|--------|----------------|
| [Issue] | [Units] | [Impact] | [Action] |

## Assessment Alignment

### Standards-to-Assessment Mapping
| Assessment | Standards Assessed | % of Standards | Depth Match |
|------------|-------------------|----------------|-------------|
| Unit Tests | [Count] | [%] | [Yes/No] |
| Benchmarks | [Count] | [%] | [Yes/No] |
| State Test | [Count] | [%] | [Yes/No] |

## Student Outcome Analysis

### Achievement by Unit
| Unit | Avg Score | Proficiency Rate | Comparison to Prior Year |
|------|-----------|------------------|-------------------------|
| Unit 1 | [Score] | [%] | [+/-] |

### Subgroup Performance
| Subgroup | Proficiency | Gap to All | Trend |
|----------|-------------|------------|-------|
| ELL | [%] | [-X%] | [↑↓→] |
| SPED | [%] | [-X%] | [↑↓→] |

## Recommendations

### Immediate Actions
1. [Action]

### Curriculum Revisions
1. [Revision]

### Professional Development Needs
1. [PD Topic]
```

---

## Skill 3: Faculty Evaluation Framework

### Command: `/edu-faculty-eval`

### Purpose
Design comprehensive faculty evaluation systems for K-12 or higher education including multiple measures, observation protocols, and professional growth components.

### Inputs Required
```yaml
institution_type: "K-12|higher_ed"
evaluation_purpose:
  - "Accountability"
  - "Professional growth"
  - "Tenure decisions"
  - "Merit pay"
current_system:
  name: "Current System Name"
  components: ["Observations", "Student surveys"]
  frequency: "annual|semi-annual"
requirements:
  state_mandated: true|false
  union_negotiated: true|false
  tenure_implications: true|false
measures_desired:
  - "Observations"
  - "Student outcomes"
  - "Student surveys"
  - "Professional responsibilities"
  - "Peer review"
```

### Faculty Evaluation Framework Components

#### K-12 Teacher Evaluation

| Component | Weight | Data Source |
|-----------|--------|-------------|
| Instructional Practice | 40-50% | Observations |
| Student Growth | 30-40% | Assessment data |
| Professional Responsibilities | 10-20% | Artifacts, participation |
| Student/Parent Feedback | 5-10% | Surveys |

#### Higher Ed Faculty Evaluation

| Component | Weight | Data Source |
|-----------|--------|-------------|
| Teaching Effectiveness | 40% | Observations, student evals |
| Scholarly Activity | 30% | Publications, grants |
| Service | 20% | Committee work, advising |
| Professional Development | 10% | Training, certifications |

### Output: Faculty Evaluation System Design

```markdown
# Faculty Evaluation System Design
## [Institution Name]
### Version: 1.0 | Date: [Date]

## System Overview

### Evaluation Purpose
- [Primary purpose]
- [Secondary purpose]

### Evaluation Cycle
| Activity | Timeline | Responsible Party |
|----------|----------|-------------------|
| Goal Setting | August | Teacher + Evaluator |
| Observation 1 | Oct-Nov | Evaluator |
| Mid-Year Review | January | Teacher + Evaluator |
| Observation 2 | Feb-Mar | Evaluator |
| Summative Evaluation | May | Evaluator |

## Evaluation Components

### Component 1: Instructional Practice (50%)

#### Observation Framework
Based on: [Danielson/Marzano/State Framework]

| Domain | Weight | Elements |
|--------|--------|----------|
| Planning & Preparation | 25% | Knowledge, outcomes, resources |
| Classroom Environment | 25% | Respect, culture, management |
| Instruction | 30% | Communication, questioning, engagement |
| Professional Responsibilities | 20% | Reflection, communication, growth |

#### Observation Protocol
| Type | Frequency | Duration | Notice |
|------|-----------|----------|--------|
| Formal | 2/year | 45-60 min | 24-48 hrs |
| Informal | 4+/year | 15-20 min | Unannounced |
| Walkthrough | Ongoing | 5-10 min | Unannounced |

#### Rating Scale
| Rating | Definition | Score |
|--------|------------|-------|
| Distinguished | Consistently exceeds expectations | 4 |
| Proficient | Consistently meets expectations | 3 |
| Developing | Partially meets expectations | 2 |
| Ineffective | Does not meet expectations | 1 |

### Component 2: Student Growth (35%)

#### Growth Measures
| Measure | Applicability | Weight |
|---------|---------------|--------|
| State Assessment Growth | Tested grades/subjects | 20% |
| Student Learning Objectives | All teachers | 10% |
| Common Assessments | Where available | 5% |

#### SLO Process
1. Teacher identifies learning goal
2. Sets measurable target
3. Determines assessment method
4. Evaluator approves
5. End-of-year measurement
6. Rating determination

#### SLO Rating Scale
| % Meeting Target | Rating |
|------------------|--------|
| > 90% | Distinguished |
| 70-89% | Proficient |
| 50-69% | Developing |
| < 50% | Ineffective |

### Component 3: Professional Responsibilities (15%)

#### Indicators
| Indicator | Evidence | Weight |
|-----------|----------|--------|
| Attendance/Punctuality | Records | 3% |
| Professional Learning | PD hours, collaboration | 4% |
| Communication | Parent contact, responsiveness | 4% |
| Compliance | Deadlines, requirements | 4% |

## Summative Rating Calculation

### Composite Score Formula
```
Final Score = (Instruction × 0.50) + (Growth × 0.35) + (Professional × 0.15)
```

### Rating Thresholds
| Composite Score | Final Rating |
|-----------------|--------------|
| 3.5 - 4.0 | Distinguished |
| 2.5 - 3.49 | Proficient |
| 1.5 - 2.49 | Developing |
| 1.0 - 1.49 | Ineffective |

## Consequences & Support

### By Rating Level
| Rating | Tenure Status | Support | Consequences |
|--------|---------------|---------|--------------|
| Distinguished | Maintained | Leadership opportunities | Recognition |
| Proficient | Maintained | Standard PD | None |
| Developing | Review | Improvement plan | Monitoring |
| Ineffective | At risk | Intensive support | Non-renewal possible |

## Implementation

### Training Requirements
| Role | Training | Duration |
|------|----------|----------|
| Evaluators | Certification program | 40 hours |
| Teachers | System orientation | 4 hours |
| Principals | Calibration sessions | 8 hours/year |

### Appeals Process
1. Informal discussion with evaluator
2. Written appeal to principal
3. District review panel
4. Superintendent decision (final)
```

---

## Skill 4: Accreditation Gap Analysis

### Command: `/edu-accreditation`

### Purpose
Conduct gap analysis against accreditation standards for K-12 schools or higher education institutions.

### Inputs Required
```yaml
institution_type: "K-12|community_college|university"
accrediting_body: "AdvancED|WASC|HLC|SACSCOC|AACSB|ABET"
current_status:
  accredited: true|false
  last_review: "2022-03-15"
  next_review: "2027-03-15"
focus_areas:
  - "All standards"
  - "Specific standards"
evidence_available:
  - "Self-study documents"
  - "Previous reports"
  - "Institutional data"
```

### Accreditation Standards Reference

#### Regional Accreditors (Higher Ed)

| Accreditor | Region | Focus |
|------------|--------|-------|
| HLC | North Central | Mission, integrity, resources |
| SACSCOC | Southern | Core requirements, standards |
| MSCHE | Middle States | Requirements of affiliation |
| NWCCU | Northwest | Eligibility, standards |
| NECHE | New England | Standards for accreditation |
| WASC | Western | Core competencies, review |

#### Specialized Accreditors

| Accreditor | Discipline | Key Standards |
|------------|------------|---------------|
| AACSB | Business | Learning, impact, engagement |
| ABET | Engineering | Student outcomes, curriculum |
| NCATE/CAEP | Education | Content, clinical, impact |
| ACBSP | Business | Leadership, outcomes, process |

### Output: Accreditation Gap Analysis Report

```markdown
# Accreditation Gap Analysis
## [Institution Name]
### Accrediting Body: [Name]
### Analysis Date: [Date]

## Executive Summary

**Overall Readiness Level:** [Strong|Adequate|Concerns|Not Ready]
**Standards Fully Met:** [X/Y] ([%])
**Standards Partially Met:** [X]
**Standards Not Met:** [X]
**Estimated Remediation Timeline:** [X months]

## Accreditation Timeline

| Milestone | Date | Status |
|-----------|------|--------|
| Last Visit | [Date] | Complete |
| Mid-Cycle Review | [Date] | [Status] |
| Self-Study Due | [Date] | [Status] |
| Site Visit | [Date] | Scheduled |

## Standards Assessment

### Standard 1: [Standard Name]

**Standard Text:** [Full standard language]

**Assessment:** [Met|Partially Met|Not Met]

**Evidence Reviewed:**
- [Evidence 1]
- [Evidence 2]

**Findings:**
| Requirement | Status | Evidence | Gap |
|-------------|--------|----------|-----|
| [Req 1] | [Met/Gap] | [Evidence] | [Gap description] |

**Recommendations:**
1. [Recommendation]

---

### Standard 2: [Standard Name]
[Same format as above]

---

## Gap Summary Matrix

| Standard | Met | Partial | Not Met | Priority |
|----------|-----|---------|---------|----------|
| Standard 1 | ✓ | | | - |
| Standard 2 | | ✓ | | High |
| Standard 3 | | | ✓ | Critical |

## Remediation Plan

### Critical Gaps (Immediate Action)
| Gap | Standard | Action | Owner | Due Date |
|-----|----------|--------|-------|----------|
| [Gap] | [Std] | [Action] | [Owner] | [Date] |

### High Priority (3-6 months)
| Gap | Standard | Action | Owner | Due Date |
|-----|----------|--------|-------|----------|
| [Gap] | [Std] | [Action] | [Owner] | [Date] |

### Medium Priority (6-12 months)
| Gap | Standard | Action | Owner | Due Date |
|-----|----------|--------|-------|----------|
| [Gap] | [Std] | [Action] | [Owner] | [Date] |

## Evidence Collection Plan

| Standard | Required Evidence | Current Status | Action Needed |
|----------|-------------------|----------------|---------------|
| [Std] | [Evidence] | [Have/Need] | [Action] |

## Self-Study Preparation Timeline

| Phase | Activities | Timeline |
|-------|------------|----------|
| Planning | Committee formation, training | Months 1-2 |
| Data Collection | Evidence gathering, analysis | Months 3-8 |
| Drafting | Write self-study chapters | Months 9-14 |
| Review | Internal review, revision | Months 15-16 |
| Submission | Final document, QA | Month 17 |
| Site Visit | Preparation, visit | Month 18 |

## Resource Requirements

| Resource | Purpose | Estimated Cost |
|----------|---------|----------------|
| Accreditation Coordinator | Project management | $[Amount]/year |
| Consultant Support | Gap remediation | $[Amount] |
| Data Systems | Evidence management | $[Amount] |
| Site Visit Preparation | Logistics, materials | $[Amount] |
```

---

## Skill 5: Student Success Metrics

### Command: `/edu-student-success`

### Purpose
Define comprehensive student success metrics covering academic achievement, persistence, engagement, and post-graduation outcomes.

### Inputs Required
```yaml
institution_type: "K-12|community_college|university"
student_population:
  total: 10000
  undergraduate: 8000
  graduate: 2000
  online_percentage: 25
current_metrics:
  - "Retention rate"
  - "Graduation rate"
  - "GPA"
success_framework: "completion_agenda|holistic|custom"
focus_areas:
  - "Retention"
  - "Completion"
  - "Equity"
  - "Post-graduation"
```

### Student Success Framework

#### Higher Education Success Metrics

| Category | Metrics | Timeframe |
|----------|---------|-----------|
| **Enrollment** | Yield, FTE, headcount | Semester |
| **Persistence** | Fall-to-fall retention | Annual |
| **Progress** | Credits earned, DFW rates | Semester |
| **Completion** | Graduation rates (4/6 yr) | Annual |
| **Post-Grad** | Employment, grad school | 1-5 years |

### Output: Student Success Metric Framework

```markdown
# Student Success Metrics Framework
## [Institution Name]
### Version: 1.0 | Date: [Date]

## Framework Overview

### Student Success Definition
[Institution's definition of student success]

### Guiding Principles
1. Student-centered approach
2. Equity-minded metrics
3. Leading and lagging indicators
4. Actionable data

## Metric Catalog

### Enrollment & Access Metrics

| Metric | Definition | Formula | Target | Frequency |
|--------|------------|---------|--------|-----------|
| Enrollment Headcount | Total enrolled students | Unduplicated count | [Target] | Semester |
| FTE Enrollment | Full-time equivalents | Credit hours / 15 | [Target] | Semester |
| Yield Rate | Admits who enroll | Enrolled / Admitted | > 30% | Annual |
| Pell Recipients | % receiving Pell grants | Pell / Total | [Target] | Annual |

### Persistence & Retention Metrics

| Metric | Definition | Formula | Target | Frequency |
|--------|------------|---------|--------|-----------|
| First-Year Retention | Fall-to-fall return | Returned / Cohort | > 80% | Annual |
| Sophomore Retention | Year 2 to Year 3 | Returned / Year 2 | > 85% | Annual |
| Course Completion | % courses completed | Completed / Attempted | > 85% | Semester |
| Credit Momentum | 30+ credits Year 1 | Earned 30+ / Cohort | > 50% | Annual |

### Academic Progress Metrics

| Metric | Definition | Formula | Target | Frequency |
|--------|------------|---------|--------|-----------|
| Good Standing | % in good standing | Good / Total | > 85% | Semester |
| DFW Rate | % D/F/W grades | DFW / Grades | < 15% | Semester |
| GPA Average | Mean cumulative GPA | Sum GPA / Students | > 2.75 | Semester |
| Credit Accumulation | Avg credits per semester | Credits / Students | > 14 | Semester |

### Completion Metrics

| Metric | Definition | Formula | Target | Frequency |
|--------|------------|---------|--------|-----------|
| 4-Year Grad Rate | % graduating in 4 years | Grads (4yr) / Cohort | > 50% | Annual |
| 6-Year Grad Rate | % graduating in 6 years | Grads (6yr) / Cohort | > 65% | Annual |
| Transfer Rate | % transferring out | Transfers / Cohort | Monitor | Annual |
| Completion Rate | Any completion (grad/transfer) | (Grad + Trans) / Cohort | > 70% | Annual |

### Equity Metrics

| Metric | Definition | Formula | Target | Frequency |
|--------|------------|---------|--------|-----------|
| Equity Gap - Retention | Gap between groups | Group A - Group B | < 5% | Annual |
| Equity Gap - Graduation | Gap between groups | Group A - Group B | < 5% | Annual |
| Pell Graduation | Pell recipient grad rate | Pell Grads / Pell Cohort | > 55% | Annual |
| URM Graduation | URM student grad rate | URM Grads / URM Cohort | > 60% | Annual |

### Post-Graduation Metrics

| Metric | Definition | Formula | Target | Frequency |
|--------|------------|---------|--------|-----------|
| Employment Rate | % employed within 1 year | Employed / Grads | > 85% | Annual |
| Salary - Entry | Median starting salary | Median of salaries | [Target] | Annual |
| Graduate School | % pursuing graduate study | Grad School / Grads | > 20% | Annual |
| Loan Default | 3-year cohort default rate | Defaults / Repayment | < 5% | Annual |

## Early Alert Indicators

### Risk Factors
| Factor | Threshold | Intervention |
|--------|-----------|--------------|
| GPA < 2.0 | After first semester | Academic coaching |
| Attendance < 80% | Any point | Outreach call |
| 0 credits earned | First semester | Intrusive advising |
| Financial hold | Any point | Financial aid counseling |

## Dashboard Recommendations

### Executive Dashboard
- Enrollment funnel
- Retention trends
- Graduation rates
- Equity gaps

### Advisor Dashboard
- Individual student risk scores
- Early alert triggers
- Caseload metrics
- Intervention tracking

### Student Dashboard
- Degree progress
- GPA trend
- Remaining requirements
- Financial aid status
```

---

## Skill 6: LMS Assessment

### Command: `/edu-lms`

### Purpose
Assess Learning Management System capabilities, usage, and alignment with institutional needs for selection or optimization.

### Inputs Required
```yaml
assessment_type: "selection|optimization|review"
current_lms:
  name: "Canvas|Blackboard|Moodle|D2L|None"
  years_in_use: 5
  satisfaction: "low|medium|high"
institution_profile:
  students: 15000
  faculty: 500
  online_programs: 25
  hybrid_courses: 150
requirements_priority:
  - "Ease of use"
  - "Mobile access"
  - "Integration capabilities"
  - "Analytics"
  - "Accessibility"
```

### LMS Evaluation Framework

#### Evaluation Categories

| Category | Weight | Focus Areas |
|----------|--------|-------------|
| **Functionality** | 25% | Features, tools, content |
| **Usability** | 20% | User experience, adoption |
| **Integration** | 20% | SIS, tools, standards |
| **Support** | 15% | Training, help, community |
| **Cost** | 10% | Licensing, implementation |
| **Compliance** | 10% | Accessibility, privacy |

### Output: LMS Assessment Report

```markdown
# LMS Assessment Report
## [Institution Name]
### Assessment Date: [Date]

## Executive Summary

**Assessment Type:** [Selection/Optimization/Review]
**Current LMS:** [Name]
**Recommendation:** [Continue/Replace/Optimize]
**Overall Score:** [X/100]

## Current State Analysis

### Usage Statistics
| Metric | Value | Benchmark |
|--------|-------|-----------|
| Active Courses | [Count] | [Benchmark] |
| Faculty Adoption | [%] | > 90% |
| Student Logins/Day | [Count] | [Benchmark] |
| Mobile Usage | [%] | > 40% |
| Tool Utilization | [%] | > 60% |

### Feature Usage
| Feature | Usage Rate | Satisfaction |
|---------|------------|--------------|
| Content Delivery | [%] | [Rating] |
| Assignments | [%] | [Rating] |
| Discussions | [%] | [Rating] |
| Quizzes | [%] | [Rating] |
| Gradebook | [%] | [Rating] |
| Analytics | [%] | [Rating] |

## Requirements Analysis

### Functional Requirements
| Requirement | Priority | Current Status | Gap |
|-------------|----------|----------------|-----|
| Intuitive interface | Must | [Met/Gap] | [Description] |
| Mobile app | Must | [Met/Gap] | [Description] |
| Video integration | Must | [Met/Gap] | [Description] |
| Advanced analytics | Should | [Met/Gap] | [Description] |
| Proctoring integration | Should | [Met/Gap] | [Description] |

### Integration Requirements
| System | Requirement | Current Status |
|--------|-------------|----------------|
| SIS | Roster sync | [Met/Gap] |
| Authentication | SSO | [Met/Gap] |
| Publisher Content | LTI | [Met/Gap] |
| Video Platform | Integration | [Met/Gap] |
| Accessibility | VPAT | [Met/Gap] |

## Stakeholder Feedback

### Faculty Survey Results (n=[X])
| Dimension | Score | Comments |
|-----------|-------|----------|
| Ease of Use | [X/5] | [Summary] |
| Reliability | [X/5] | [Summary] |
| Support | [X/5] | [Summary] |
| Features | [X/5] | [Summary] |

### Student Survey Results (n=[X])
| Dimension | Score | Comments |
|-----------|-------|----------|
| Navigation | [X/5] | [Summary] |
| Mobile Experience | [X/5] | [Summary] |
| Communication | [X/5] | [Summary] |

## Vendor Comparison (if selection)

| Criterion | [LMS 1] | [LMS 2] | [LMS 3] |
|-----------|---------|---------|---------|
| Functionality | [X/10] | [X/10] | [X/10] |
| Usability | [X/10] | [X/10] | [X/10] |
| Integration | [X/10] | [X/10] | [X/10] |
| Support | [X/10] | [X/10] | [X/10] |
| Cost | [X/10] | [X/10] | [X/10] |
| **Total** | [X/50] | [X/50] | [X/50] |

## Recommendations

### Immediate Actions
1. [Action]

### Optimization Opportunities
1. [Opportunity]

### Long-term Considerations
1. [Consideration]

## Implementation Plan (if change)

| Phase | Activities | Timeline |
|-------|------------|----------|
| Planning | Requirements, vendor selection | Months 1-3 |
| Pilot | Limited rollout | Months 4-6 |
| Training | Faculty/staff training | Months 5-8 |
| Migration | Content migration | Months 6-10 |
| Go-Live | Full deployment | Month 11 |
| Support | Post-launch optimization | Months 12+ |
```

---

## Skill 7: Academic Calendar Optimizer

### Command: `/edu-calendar`

### Purpose
Analyze and optimize academic calendar structure for instructional time, student success, and operational efficiency.

### Inputs Required
```yaml
calendar_type: "semester|quarter|trimester|year-round"
institution_type: "K-12|higher_ed"
current_structure:
  terms_per_year: 2
  weeks_per_term: 16
  instructional_days: 175
constraints:
  state_requirements: "180 instructional days"
  union_contracts: true
  facility_sharing: false
optimization_goals:
  - "Maximize instructional time"
  - "Align with community needs"
  - "Support student success"
  - "Operational efficiency"
```

### Output: Calendar Optimization Report

```markdown
# Academic Calendar Optimization
## [Institution Name]
### Analysis Date: [Date]

## Current Calendar Analysis

### Structure Overview
| Attribute | Current | Benchmark |
|-----------|---------|-----------|
| Calendar Type | [Type] | [Common] |
| Terms/Year | [#] | [#] |
| Instructional Days | [#] | [Standard] |
| Start Date | [Date] | [Range] |
| End Date | [Date] | [Range] |

### Compliance Check
| Requirement | Standard | Current | Status |
|-------------|----------|---------|--------|
| Instructional Days | [#] | [#] | [Met/Gap] |
| Instructional Hours | [#] | [#] | [Met/Gap] |
| Teacher Contract Days | [#] | [#] | [Met/Gap] |

## Analysis Findings

### Instructional Time Distribution
| Month | Instructional Days | Events/Breaks |
|-------|-------------------|---------------|
| August | [#] | [Events] |
| September | [#] | [Events] |
[Continue for all months]

### Break Analysis
| Break | Current Length | Impact | Recommendation |
|-------|----------------|--------|----------------|
| Fall Break | [Days] | [Impact] | [Recommendation] |
| Winter Break | [Days] | [Impact] | [Recommendation] |
| Spring Break | [Days] | [Impact] | [Recommendation] |

### Issues Identified
| Issue | Impact | Priority |
|-------|--------|----------|
| [Issue] | [Impact] | [H/M/L] |

## Optimization Scenarios

### Scenario A: [Name]
| Attribute | Current | Proposed | Change |
|-----------|---------|----------|--------|
| Start Date | [Date] | [Date] | [Days] |
| End Date | [Date] | [Date] | [Days] |
| Fall Break | [Days] | [Days] | [Change] |

**Pros:** [Benefits]
**Cons:** [Drawbacks]
**Stakeholder Impact:** [Analysis]

### Scenario B: [Name]
[Same format]

## Recommendation

**Recommended Scenario:** [A/B/C]

**Rationale:**
1. [Reason]
2. [Reason]

**Implementation Considerations:**
- [Consideration]
```

---

## Skill 8: FERPA Compliance Check

### Command: `/edu-ferpa`

### Purpose
Verify compliance with Family Educational Rights and Privacy Act (FERPA) requirements for student record protection.

### Inputs Required
```yaml
institution_type: "K-12|higher_ed"
assessment_scope: "full|targeted"
areas_in_scope:
  - "Student records management"
  - "Directory information"
  - "Third-party disclosures"
  - "Technology systems"
current_practices:
  annual_notification: true
  opt_out_process: true
  disclosure_log: true
  training_program: true
recent_issues:
  - "None"
```

### FERPA Requirements Framework

#### Core FERPA Rights

| Right | Description | Institution Responsibility |
|-------|-------------|---------------------------|
| **Inspect & Review** | Access to education records | Provide within 45 days |
| **Amendment** | Request record corrections | Process for challenges |
| **Consent** | Control over disclosures | Prior written consent |
| **Complaint** | File complaints with DoE | Inform students of process |

#### Permissible Disclosures (Without Consent)

| Exception | Description | Requirements |
|-----------|-------------|--------------|
| School Officials | Legitimate educational interest | Define in policy |
| Directory Information | Public information | Annual notice, opt-out |
| Health/Safety | Emergency situations | Document circumstances |
| Judicial Order | Court orders, subpoenas | Notify if possible |
| Financial Aid | Aid determination | Direct relationship |

### Output: FERPA Compliance Assessment

```markdown
# FERPA Compliance Assessment
## [Institution Name]
### Assessment Date: [Date]

## Executive Summary

**Overall Compliance Level:** [Compliant|Substantially Compliant|Non-Compliant]
**Critical Gaps:** [Count]
**High Priority Findings:** [Count]
**Recommendations:** [Count]

## Compliance Assessment

### Annual Notification Requirements
| Requirement | Status | Evidence | Gap |
|-------------|--------|----------|-----|
| Annual FERPA notice published | [Met/Gap] | [Evidence] | [Description] |
| Notice includes all required elements | [Met/Gap] | [Evidence] | [Description] |
| Notice timing (before disclosure period) | [Met/Gap] | [Evidence] | [Description] |

### Directory Information
| Requirement | Status | Evidence | Gap |
|-------------|--------|----------|-----|
| Directory information defined | [Met/Gap] | [Evidence] | [Description] |
| Opt-out mechanism available | [Met/Gap] | [Evidence] | [Description] |
| Opt-out honored in all systems | [Met/Gap] | [Evidence] | [Description] |

### Access to Records
| Requirement | Status | Evidence | Gap |
|-------------|--------|----------|-----|
| Process for record requests | [Met/Gap] | [Evidence] | [Description] |
| 45-day response timeline | [Met/Gap] | [Evidence] | [Description] |
| Amendment request process | [Met/Gap] | [Evidence] | [Description] |
| Hearing process for denials | [Met/Gap] | [Evidence] | [Description] |

### Disclosure Controls
| Requirement | Status | Evidence | Gap |
|-------------|--------|----------|-----|
| Consent forms used | [Met/Gap] | [Evidence] | [Description] |
| Disclosure log maintained | [Met/Gap] | [Evidence] | [Description] |
| School official criteria defined | [Met/Gap] | [Evidence] | [Description] |
| Third-party agreements | [Met/Gap] | [Evidence] | [Description] |

### Technology & Security
| Requirement | Status | Evidence | Gap |
|-------------|--------|----------|-----|
| System access controls | [Met/Gap] | [Evidence] | [Description] |
| Data minimization | [Met/Gap] | [Evidence] | [Description] |
| Vendor agreements | [Met/Gap] | [Evidence] | [Description] |
| Data breach procedures | [Met/Gap] | [Evidence] | [Description] |

### Training & Awareness
| Requirement | Status | Evidence | Gap |
|-------------|--------|----------|-----|
| Staff training program | [Met/Gap] | [Evidence] | [Description] |
| Training documentation | [Met/Gap] | [Evidence] | [Description] |
| Annual refresher | [Met/Gap] | [Evidence] | [Description] |

## Findings Summary

| # | Finding | Severity | Requirement | Recommendation |
|---|---------|----------|-------------|----------------|
| 1 | [Finding] | [Critical/High/Medium/Low] | [Cite] | [Action] |

## Remediation Plan

### Critical (Immediate)
| Finding | Action | Owner | Due |
|---------|--------|-------|-----|
| [Finding] | [Action] | [Owner] | [Date] |

### High Priority (30 days)
| Finding | Action | Owner | Due |
|---------|--------|-------|-----|
| [Finding] | [Action] | [Owner] | [Date] |

### Medium Priority (90 days)
| Finding | Action | Owner | Due |
|---------|--------|-------|-----|
| [Finding] | [Action] | [Owner] | [Date] |

## Policy Recommendations

1. [Policy recommendation]
2. [Policy recommendation]

## Appendix: FERPA Quick Reference

### What is an Education Record?
Records directly related to a student maintained by the institution:
- Transcripts, grades
- Student schedules
- Financial aid records
- Disciplinary records

### What is NOT an Education Record?
- Sole possession records
- Law enforcement records
- Employment records (non-student status)
- Medical/treatment records
- Alumni records (post-attendance)
```

---

## Service Line Integration

### Fee Modifier
**EDU Base Modifier:** 1.00 (standard rates apply)

### Typical Engagement Phases

| Phase | Duration | Deliverables |
|-------|----------|--------------|
| Assessment | 2-4 weeks | Current state analysis, gap identification |
| Design | 3-6 weeks | Framework design, metric development |
| Implementation | Variable | System configuration, training |
| Monitoring | Ongoing | Dashboard management, continuous improvement |

### Cross-Skill Workflows

```
K-12 Performance Initiative:
/edu-k12-perf → /coe-kpi → /coe-dashboard →
/edu-curriculum → /edu-student-success

Higher Ed Accreditation:
/edu-accreditation → /edu-student-success →
/edu-faculty-eval → /edu-lms → Self-Study

LMS Implementation:
/edu-lms → /esi-assess → /esi-migration →
Training → /edu-curriculum

Student Success Initiative:
/edu-student-success → /coe-dashboard →
Early alert system → Intervention tracking
```

### Integration with Other Service Lines

| Service Line | Integration Point |
|--------------|-------------------|
| COE | KPI frameworks, dashboards |
| ESI | SIS/LMS integration |
| DIG | EdTech transformation |
| ISO | Quality management in education |
| HLT | Health sciences programs |

---

## Templates & Artifacts

All EDU deliverables should use standard Omega branding via:
- `/doc-gen` for document generation
- `assets/omega-branding.json` for styling
- `scripts/omega-document-generator.js` for automation

### Standard Artifacts by Skill

| Skill | Primary Artifact | Format |
|-------|------------------|--------|
| /edu-k12-perf | Dashboard Design Document | DOCX/PPTX |
| /edu-curriculum | Curriculum Analysis Report | DOCX/PDF |
| /edu-faculty-eval | Evaluation System Design | DOCX/PDF |
| /edu-accreditation | Gap Analysis Report | DOCX/PDF |
| /edu-student-success | Metrics Framework | XLSX/DOCX |
| /edu-lms | LMS Assessment Report | DOCX/PDF |
| /edu-calendar | Calendar Optimization Report | DOCX |
| /edu-ferpa | FERPA Compliance Assessment | DOCX/PDF |
