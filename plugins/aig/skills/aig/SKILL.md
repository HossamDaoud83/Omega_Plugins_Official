---
name: aig
description: AI Governance and Management skills - ISO 42001, AI ethics, model risk
---

# AI Governance & Management (AIG) Service Line Skills

**Service Line Code:** AIG
**Description:** ISO 42001:2023, AI readiness, governance frameworks, bias testing, policy development
**Version:** 1.0
**Last Updated:** 2026-02-02

---

## Service Line Overview

AI Governance helps organizations implement responsible AI practices through:
- AI Management System (ISO 42001:2023)
- AI Risk Management
- Ethical AI Frameworks
- Model Governance & Documentation
- Regulatory Compliance (EU AI Act, etc.)

---

## Available Skills

| # | Skill | Command | Purpose |
|---|-------|---------|---------|
| 1 | AI Readiness Assessment | `/aig-readiness` | Assess organization's AI readiness |
| 2 | ISO 42001 Gap Analysis | `/aig-iso42001-gap` | Gap analysis against ISO 42001:2023 |
| 3 | AI Risk Assessment | `/aig-risk` | Identify and assess AI-specific risks |
| 4 | Bias Testing Framework | `/aig-bias-test` | Design bias testing approach |
| 5 | AI Policy Generator | `/aig-policy` | Generate AI governance policies |
| 6 | AI Ethics Framework | `/aig-ethics` | Develop responsible AI guidelines |
| 7 | Model Risk Management | `/aig-mrm` | Model risk management framework |
| 8 | AI Inventory Manager | `/aig-inventory` | Catalog and classify AI systems |

---

## Skill 1: AI Readiness Assessment (`/aig-readiness`)

### Purpose
Assess an organization's readiness to adopt, deploy, and govern AI systems across 6 dimensions.

### Assessment Dimensions

| Dimension | Weight | Description |
|-----------|--------|-------------|
| Strategy & Vision | 15% | AI strategy alignment with business goals |
| Data & Infrastructure | 20% | Data quality, availability, and tech infrastructure |
| Talent & Skills | 20% | AI/ML expertise and training programs |
| Governance & Ethics | 20% | Policies, oversight, and ethical frameworks |
| Processes & Operations | 15% | AI development lifecycle and MLOps |
| Culture & Change | 10% | Organizational readiness for AI adoption |

### Maturity Levels

| Level | Score | Description |
|-------|-------|-------------|
| 1 - Initial | 0-20% | Ad-hoc AI initiatives, no formal governance |
| 2 - Developing | 21-40% | Pilot projects, emerging governance |
| 3 - Defined | 41-60% | Documented processes, governance framework |
| 4 - Managed | 61-80% | Metrics-driven, consistent governance |
| 5 - Optimizing | 81-100% | Continuous improvement, industry leader |

### Assessment Questions (Sample)

**Strategy & Vision (15%)**
1. Does the organization have a documented AI strategy? (0-5)
2. Is AI strategy aligned with business objectives? (0-5)
3. Is there executive sponsorship for AI initiatives? (0-5)
4. Are AI investment priorities defined? (0-5)

**Data & Infrastructure (20%)**
1. Is data quality measured and monitored? (0-5)
2. Is data infrastructure scalable for AI workloads? (0-5)
3. Are data governance policies in place? (0-5)
4. Is there a data catalog or metadata management? (0-5)

**Talent & Skills (20%)**
1. Does the organization have AI/ML specialists? (0-5)
2. Is there an AI training program for employees? (0-5)
3. Are AI roles and responsibilities defined? (0-5)
4. Is there a plan to address AI skill gaps? (0-5)

**Governance & Ethics (20%)**
1. Is there an AI governance framework? (0-5)
2. Are AI ethics principles documented? (0-5)
3. Is there an AI ethics committee or review board? (0-5)
4. Are AI risks formally assessed and managed? (0-5)

**Processes & Operations (15%)**
1. Is there a standard AI development lifecycle? (0-5)
2. Are MLOps practices implemented? (0-5)
3. Is model versioning and documentation required? (0-5)
4. Are AI systems monitored for drift and performance? (0-5)

**Culture & Change (10%)**
1. Is there organizational support for AI adoption? (0-5)
2. Are employees comfortable working with AI? (0-5)
3. Is there a change management plan for AI? (0-5)

### Output Format

```
═══════════════════════════════════════════════════════════════════════════════
AI READINESS ASSESSMENT REPORT
Organization: [Name]
Assessment Date: [Date]
Assessor: Omega Consulting
═══════════════════════════════════════════════════════════════════════════════

OVERALL READINESS SCORE: [XX]% - Level [N]: [Level Name]

DIMENSION SCORES:
─────────────────────────────────────────────────────────────────────────────
Strategy & Vision      ████████░░░░░░░░░░░░  40%  Developing
Data & Infrastructure  ██████████████░░░░░░  70%  Managed
Talent & Skills        ██████░░░░░░░░░░░░░░  30%  Developing
Governance & Ethics    ████░░░░░░░░░░░░░░░░  20%  Initial
Processes & Operations ████████████░░░░░░░░  60%  Defined
Culture & Change       ████████░░░░░░░░░░░░  40%  Developing
─────────────────────────────────────────────────────────────────────────────
WEIGHTED AVERAGE:      ████████░░░░░░░░░░░░  43%  Defined

KEY FINDINGS:
• [Finding 1]
• [Finding 2]
• [Finding 3]

PRIORITY RECOMMENDATIONS:
1. [Recommendation 1]
2. [Recommendation 2]
3. [Recommendation 3]

ROADMAP TO LEVEL [N+1]:
[Phased improvement plan]

═══════════════════════════════════════════════════════════════════════════════
```

---

## Skill 2: ISO 42001 Gap Analysis (`/aig-iso42001-gap`)

### Purpose
Assess compliance against ISO/IEC 42001:2023 - AI Management System standard.

### ISO 42001:2023 Structure

| Clause | Title | Requirements |
|--------|-------|--------------|
| 4 | Context of the Organization | 4.1-4.4 |
| 5 | Leadership | 5.1-5.3 |
| 6 | Planning | 6.1-6.3 |
| 7 | Support | 7.1-7.5 |
| 8 | Operation | 8.1-8.4 |
| 9 | Performance Evaluation | 9.1-9.3 |
| 10 | Improvement | 10.1-10.2 |
| Annex A | AI Controls (39 controls) | A.2-A.10 |
| Annex B | AI Objectives (9 categories) | B.2-B.10 |

### Annex A Control Categories

| Category | Controls | Description |
|----------|----------|-------------|
| A.2 | Policies for AI | AI policy requirements |
| A.3 | Internal Organization | Roles, responsibilities, competence |
| A.4 | Resources for AI Systems | Data, tools, infrastructure |
| A.5 | Assessing AI System Impacts | Impact assessment process |
| A.6 | AI System Lifecycle | Development, deployment, monitoring |
| A.7 | Data for AI Systems | Data management and quality |
| A.8 | Information for Interested Parties | Transparency and communication |
| A.9 | Use of AI Systems | Responsible use policies |
| A.10 | Third-Party Relationships | Vendor and partner management |

### Gap Assessment Scoring

| Score | Status | Description |
|-------|--------|-------------|
| 0 | Not Implemented | No evidence of implementation |
| 1 | Planned | Documented plan exists |
| 2 | Partially Implemented | Some implementation, not complete |
| 3 | Implemented | Fully implemented |
| 4 | Managed | Implemented and measured |
| 5 | Optimized | Continuous improvement |

### Output Format

```
═══════════════════════════════════════════════════════════════════════════════
ISO 42001:2023 GAP ANALYSIS REPORT
Organization: [Name]
Assessment Date: [Date]
═══════════════════════════════════════════════════════════════════════════════

OVERALL COMPLIANCE: [XX]%

CLAUSE COMPLIANCE:
─────────────────────────────────────────────────────────────────────────────
Clause 4: Context           ████████████████░░░░  80%  [X] gaps
Clause 5: Leadership        ████████████░░░░░░░░  60%  [X] gaps
Clause 6: Planning          ██████████░░░░░░░░░░  50%  [X] gaps
Clause 7: Support           ████████████████░░░░  80%  [X] gaps
Clause 8: Operation         ████████░░░░░░░░░░░░  40%  [X] gaps
Clause 9: Performance       ██████░░░░░░░░░░░░░░  30%  [X] gaps
Clause 10: Improvement      ████████░░░░░░░░░░░░  40%  [X] gaps
─────────────────────────────────────────────────────────────────────────────

ANNEX A CONTROLS:
─────────────────────────────────────────────────────────────────────────────
A.2 Policies               ████████████░░░░░░░░  60%
A.3 Organization           ██████████████░░░░░░  70%
A.4 Resources              ████████████████░░░░  80%
A.5 Impact Assessment      ██████░░░░░░░░░░░░░░  30%
A.6 Lifecycle              ████████░░░░░░░░░░░░  40%
A.7 Data                   ████████████░░░░░░░░  60%
A.8 Information            ████░░░░░░░░░░░░░░░░  20%
A.9 Use                    ██████████░░░░░░░░░░  50%
A.10 Third-Party           ██████░░░░░░░░░░░░░░  30%
─────────────────────────────────────────────────────────────────────────────

CRITICAL GAPS (Must Address):
1. [Gap 1] - Clause X.X
2. [Gap 2] - Clause X.X
3. [Gap 3] - Control A.X.X

MAJOR GAPS:
[List of major gaps]

MINOR GAPS:
[List of minor gaps]

REMEDIATION ROADMAP:
─────────────────────────────────────────────────────────────────────────────
Phase 1 (0-3 months): [Critical gap closure]
Phase 2 (3-6 months): [Major gap closure]
Phase 3 (6-9 months): [Minor gaps and optimization]
Phase 4 (9-12 months): [Certification readiness]

ESTIMATED EFFORT: [X] person-months
ESTIMATED COST: $[X]

═══════════════════════════════════════════════════════════════════════════════
```

---

## Skill 3: AI Risk Assessment (`/aig-risk`)

### Purpose
Identify, assess, and prioritize AI-specific risks using NIST AI RMF and ISO 42001 frameworks.

### AI Risk Categories

| Category | Description | Examples |
|----------|-------------|----------|
| **Technical** | Algorithm and model risks | Bias, drift, accuracy, robustness |
| **Data** | Data-related risks | Quality, privacy, security, bias |
| **Operational** | Deployment and use risks | Availability, performance, misuse |
| **Legal/Compliance** | Regulatory risks | GDPR, EU AI Act, sector-specific |
| **Ethical** | Societal impact risks | Fairness, transparency, accountability |
| **Strategic** | Business risks | Reputation, competitive, financial |

### Risk Assessment Matrix

| Probability | Impact: Negligible | Minor | Moderate | Major | Severe |
|-------------|-------------------|-------|----------|-------|--------|
| Almost Certain | Medium | High | High | Critical | Critical |
| Likely | Low | Medium | High | High | Critical |
| Possible | Low | Medium | Medium | High | High |
| Unlikely | Low | Low | Medium | Medium | High |
| Rare | Low | Low | Low | Medium | Medium |

### AI-Specific Risk Factors

**Bias & Fairness Risks**
- Training data bias
- Algorithmic bias
- Proxy discrimination
- Disparate impact

**Transparency Risks**
- Black-box models
- Unexplainable decisions
- Lack of audit trail

**Security Risks**
- Adversarial attacks
- Data poisoning
- Model theft
- Prompt injection

**Privacy Risks**
- Personal data in training
- Inference attacks
- Data leakage

### Output Format

```
═══════════════════════════════════════════════════════════════════════════════
AI RISK ASSESSMENT REPORT
Organization: [Name]
AI System: [System Name]
Assessment Date: [Date]
═══════════════════════════════════════════════════════════════════════════════

RISK SUMMARY:
─────────────────────────────────────────────────────────────────────────────
🔴 Critical: [X] risks
🟠 High:     [X] risks
🟡 Medium:   [X] risks
🟢 Low:      [X] risks
Total:       [X] risks identified

RISK HEAT MAP:
─────────────────────────────────────────────────────────────────────────────
              │ Negligible │ Minor │ Moderate │ Major │ Severe │
──────────────┼────────────┼───────┼──────────┼───────┼────────┤
Almost Certain│            │       │    2     │   1   │        │
Likely        │            │   1   │    3     │   2   │        │
Possible      │     1      │   2   │    4     │   1   │        │
Unlikely      │     2      │   3   │    2     │       │        │
Rare          │     1      │   1   │          │       │        │

TOP RISKS:
─────────────────────────────────────────────────────────────────────────────
1. [RISK-001] Training Data Bias
   Category: Data | Severity: Critical | Probability: Likely
   Impact: Discriminatory outcomes affecting protected groups
   Mitigation: Bias testing, diverse training data, fairness metrics
   Owner: [Name] | Due: [Date]

2. [RISK-002] Model Explainability
   Category: Technical | Severity: High | Probability: Possible
   Impact: Inability to explain decisions to regulators/users
   Mitigation: XAI techniques, model documentation, decision logs
   Owner: [Name] | Due: [Date]

[Continue for all high/critical risks...]

RISK REGISTER:
[Full risk register in table format]

MITIGATION PLAN:
[Prioritized mitigation actions]

═══════════════════════════════════════════════════════════════════════════════
```

---

## Skill 4: Bias Testing Framework (`/aig-bias-test`)

### Purpose
Design and execute bias testing for AI/ML models across protected characteristics.

### Protected Characteristics

| Characteristic | Examples | Regulations |
|----------------|----------|-------------|
| Race/Ethnicity | Skin color, national origin | Civil Rights, EU AI Act |
| Gender | Sex, gender identity | Gender equality laws |
| Age | Age groups | Age discrimination laws |
| Disability | Physical, mental disabilities | ADA, accessibility laws |
| Religion | Religious beliefs | Religious freedom laws |
| Socioeconomic | Income, education level | Fair lending, housing |

### Bias Metrics

| Metric | Formula | Target |
|--------|---------|--------|
| Demographic Parity | P(Ŷ=1\|A=0) = P(Ŷ=1\|A=1) | Ratio 0.8-1.2 |
| Equalized Odds | TPR and FPR equal across groups | Ratio 0.8-1.2 |
| Predictive Parity | PPV equal across groups | Ratio 0.8-1.2 |
| Calibration | P(Y=1\|Ŷ=s) equal across groups | Difference <5% |
| Individual Fairness | Similar individuals → similar outcomes | Distance metric |

### Bias Testing Process

```
1. Define Protected Attributes
   └── Identify characteristics to test

2. Prepare Test Data
   └── Ensure representative samples for each group

3. Run Baseline Predictions
   └── Generate predictions for all groups

4. Calculate Fairness Metrics
   └── Compute metrics across groups

5. Identify Disparities
   └── Flag metrics outside acceptable range

6. Root Cause Analysis
   └── Investigate sources of bias

7. Mitigation Recommendations
   └── Propose corrections

8. Document Results
   └── Create bias testing report
```

### Output Format

```
═══════════════════════════════════════════════════════════════════════════════
AI BIAS TESTING REPORT
Model: [Model Name]
Version: [Version]
Test Date: [Date]
═══════════════════════════════════════════════════════════════════════════════

OVERALL FAIRNESS SCORE: [XX]% - [PASS/FAIL/WARNING]

PROTECTED CHARACTERISTICS TESTED:
─────────────────────────────────────────────────────────────────────────────
☑ Gender (Male/Female)
☑ Age Groups (18-30, 31-50, 51-65, 65+)
☑ Ethnicity (Groups A, B, C, D)
☐ Disability (Not tested - data unavailable)

FAIRNESS METRICS:
─────────────────────────────────────────────────────────────────────────────
                    │ Gender │ Age    │ Ethnicity │ Target │ Status │
────────────────────┼────────┼────────┼───────────┼────────┼────────┤
Demographic Parity  │  0.92  │  0.85  │   0.78*   │ 0.8-1.2│ ⚠ WARN │
Equalized Odds (TPR)│  0.95  │  0.88  │   0.82    │ 0.8-1.2│ ✓ PASS │
Equalized Odds (FPR)│  0.91  │  0.79* │   0.84    │ 0.8-1.2│ ⚠ WARN │
Predictive Parity   │  0.98  │  0.92  │   0.89    │ 0.8-1.2│ ✓ PASS │

* Values outside acceptable range

DISPARITIES IDENTIFIED:
─────────────────────────────────────────────────────────────────────────────
1. [DISP-001] Ethnicity Group D has 22% lower positive prediction rate
   Metric: Demographic Parity = 0.78
   Root Cause: Under-representation in training data (3% vs 15% population)
   Recommendation: Augment training data, apply reweighting

2. [DISP-002] Age 65+ has higher false positive rate
   Metric: Equalized Odds (FPR) = 0.79
   Root Cause: Feature correlation with age-related variables
   Recommendation: Feature engineering, threshold adjustment

MITIGATION RECOMMENDATIONS:
─────────────────────────────────────────────────────────────────────────────
Priority 1: Address ethnicity disparity before production deployment
Priority 2: Monitor age-related FPR in production
Priority 3: Implement ongoing fairness monitoring

═══════════════════════════════════════════════════════════════════════════════
```

---

## Skill 5: AI Policy Generator (`/aig-policy`)

### Purpose
Generate comprehensive AI governance policies tailored to organization needs.

### Policy Templates

| Policy | Description | Audience |
|--------|-------------|----------|
| AI Governance Policy | Overall AI governance framework | All employees |
| AI Ethics Policy | Responsible AI principles | AI developers, users |
| AI Risk Management Policy | Risk identification and mitigation | Risk, compliance |
| AI Data Policy | Data use for AI systems | Data teams, AI teams |
| AI Vendor Policy | Third-party AI procurement | Procurement, legal |
| AI Acceptable Use Policy | Rules for using AI tools | End users |
| AI Model Documentation Policy | Model documentation requirements | AI developers |
| AI Incident Response Policy | Handling AI-related incidents | IT, security |

### Policy Structure

```markdown
# [POLICY NAME]

## 1. Purpose
[Why this policy exists]

## 2. Scope
[Who and what this policy covers]

## 3. Definitions
[Key terms defined]

## 4. Policy Statements
### 4.1 [Principle 1]
[Policy details]

### 4.2 [Principle 2]
[Policy details]

## 5. Roles and Responsibilities
[Who is responsible for what]

## 6. Compliance
[How compliance is measured]

## 7. Exceptions
[Exception process]

## 8. Related Documents
[Links to related policies]

## 9. Review and Updates
[Review schedule]

## Document Control
- Version: [X.X]
- Effective Date: [Date]
- Owner: [Role]
- Approved By: [Name/Role]
- Next Review: [Date]
```

---

## Skill 6: AI Ethics Framework (`/aig-ethics`)

### Purpose
Develop responsible AI guidelines based on established ethical principles.

### Core AI Ethics Principles

| Principle | Description | Implementation |
|-----------|-------------|----------------|
| **Fairness** | AI treats all individuals equitably | Bias testing, diverse data |
| **Transparency** | AI decisions are explainable | XAI, documentation |
| **Accountability** | Clear ownership of AI outcomes | Governance structure |
| **Privacy** | Respect for personal data | Privacy by design |
| **Safety** | AI operates safely and reliably | Testing, monitoring |
| **Human Oversight** | Humans retain control | HITL, override capabilities |
| **Beneficence** | AI creates positive impact | Impact assessment |

### Ethics Review Checklist

```
□ Has the AI system been tested for bias?
□ Can the AI's decisions be explained to affected individuals?
□ Is there a clear owner accountable for the AI's outcomes?
□ Does the AI comply with privacy regulations?
□ Has the AI been tested for safety and reliability?
□ Can humans override or intervene in AI decisions?
□ Has the societal impact been assessed?
□ Are there feedback mechanisms for affected stakeholders?
□ Is there a process for ongoing monitoring?
□ Has the AI been reviewed by an ethics committee?
```

---

## Skill 7: Model Risk Management (`/aig-mrm`)

### Purpose
Implement model risk management framework for AI/ML models.

### Model Risk Management Framework

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                      MODEL RISK MANAGEMENT LIFECYCLE                        │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  ┌──────────┐   ┌──────────┐   ┌──────────┐   ┌──────────┐   ┌──────────┐ │
│  │ Inventory│ → │ Tiering  │ → │ Validation│ → │ Approval │ → │ Monitoring│ │
│  └──────────┘   └──────────┘   └──────────┘   └──────────┘   └──────────┘ │
│       ↑                                                            │        │
│       └────────────────────────────────────────────────────────────┘        │
│                              Continuous Review                              │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Model Tiering

| Tier | Criteria | Validation Rigor | Review Frequency |
|------|----------|------------------|------------------|
| Tier 1 (High) | Material financial impact, regulatory | Full independent validation | Annual |
| Tier 2 (Medium) | Moderate impact, operational | Focused validation | 18 months |
| Tier 3 (Low) | Low impact, internal use | Self-assessment | 24 months |

### Model Documentation (Model Card)

```markdown
# Model Card: [Model Name]

## Model Details
- Name: [Name]
- Version: [X.X]
- Type: [Classification/Regression/etc.]
- Owner: [Team/Individual]
- Tier: [1/2/3]

## Intended Use
- Primary use case: [Description]
- Users: [Who uses this model]
- Out-of-scope uses: [What it shouldn't be used for]

## Training Data
- Source: [Data sources]
- Size: [Number of records]
- Date range: [Time period]
- Known limitations: [Data limitations]

## Performance Metrics
- Accuracy: [XX%]
- Precision: [XX%]
- Recall: [XX%]
- AUC-ROC: [X.XX]

## Fairness Metrics
- [Metric 1]: [Value]
- [Metric 2]: [Value]

## Limitations & Risks
- [Limitation 1]
- [Limitation 2]
- [Risk 1]

## Monitoring
- Drift detection: [Method]
- Performance threshold: [Criteria for retraining]
- Alert contacts: [Who to notify]
```

---

## Skill 8: AI Inventory Manager (`/aig-inventory`)

### Purpose
Catalog and classify all AI systems within the organization.

### AI System Classification

**By Risk Level (EU AI Act)**

| Risk Level | Examples | Requirements |
|------------|----------|--------------|
| Unacceptable | Social scoring, real-time biometric ID | Prohibited |
| High | Credit scoring, recruitment, medical devices | Full compliance |
| Limited | Chatbots, emotion recognition | Transparency |
| Minimal | Spam filters, recommendation systems | No requirements |

**By Use Case**

| Category | Examples |
|----------|----------|
| Customer-Facing | Chatbots, recommendation engines, pricing |
| Internal Operations | Forecasting, automation, analytics |
| Decision Support | Risk assessment, fraud detection |
| Autonomous | Self-driving, trading algorithms |

### AI Inventory Template

```json
{
  "ai_system_id": "AI-001",
  "name": "Customer Churn Prediction Model",
  "description": "Predicts customer churn probability",
  "status": "production",
  "risk_level": "high",
  "eu_ai_act_classification": "high_risk",
  "business_owner": "Marketing Director",
  "technical_owner": "Data Science Lead",
  "deployment_date": "2025-06-15",
  "last_validation": "2026-01-10",
  "next_review": "2026-07-10",
  "model_type": "gradient_boosting",
  "training_data": "Customer transactions 2020-2025",
  "inputs": ["transaction_history", "demographics", "engagement"],
  "outputs": ["churn_probability", "risk_segment"],
  "users": ["marketing_team", "retention_team"],
  "integrations": ["crm_system", "marketing_automation"],
  "documentation": "/docs/models/churn_model_v2.md",
  "bias_testing": {
    "last_test": "2026-01-10",
    "result": "pass",
    "next_test": "2026-04-10"
  },
  "monitoring": {
    "drift_detection": true,
    "performance_alerts": true,
    "threshold": "accuracy < 0.85"
  }
}
```

### Inventory Dashboard Output

```
═══════════════════════════════════════════════════════════════════════════════
AI SYSTEMS INVENTORY
Organization: [Name]
As of: [Date]
═══════════════════════════════════════════════════════════════════════════════

SUMMARY:
─────────────────────────────────────────────────────────────────────────────
Total AI Systems: [XX]
├── Production:    [XX]
├── Development:   [XX]
├── Retired:       [XX]
└── Planned:       [XX]

BY RISK LEVEL:
─────────────────────────────────────────────────────────────────────────────
🔴 High Risk:      [XX] systems
🟡 Limited Risk:   [XX] systems
🟢 Minimal Risk:   [XX] systems

BY STATUS:
─────────────────────────────────────────────────────────────────────────────
✅ Compliant:      [XX] systems
⚠️ Review Due:     [XX] systems
❌ Non-Compliant:  [XX] systems

ATTENTION REQUIRED:
─────────────────────────────────────────────────────────────────────────────
1. [AI-003] Credit Scoring Model - Validation overdue by 30 days
2. [AI-007] Fraud Detection - Bias test failed, remediation needed
3. [AI-012] Recruitment Screener - Documentation incomplete

INVENTORY LIST:
[Full table of all AI systems]

═══════════════════════════════════════════════════════════════════════════════
```

---

## Key Frameworks Referenced

| Framework | Description | Link |
|-----------|-------------|------|
| ISO/IEC 42001:2023 | AI Management System | ISO |
| NIST AI RMF | AI Risk Management Framework | NIST |
| EU AI Act | European AI Regulation | EU |
| IEEE 7000 | Ethical AI Design | IEEE |
| OECD AI Principles | International AI Guidelines | OECD |

---

## Deliverable Templates

| Deliverable | Format | Template Location |
|-------------|--------|-------------------|
| AI Readiness Assessment | DOCX, PDF | templates/aig-readiness-report.md |
| ISO 42001 Gap Analysis | XLSX, PDF | templates/aig-iso42001-gap.md |
| AI Risk Register | XLSX | templates/aig-risk-register.xlsx |
| Bias Testing Report | PDF | templates/aig-bias-report.md |
| AI Governance Policy | DOCX | templates/aig-policy.md |
| AI Ethics Framework | DOCX | templates/aig-ethics.md |
| Model Documentation | MD | templates/aig-model-card.md |
| AI Inventory | XLSX | templates/aig-inventory.xlsx |

---

## Integration with Other Skills

| Skill | Integration |
|-------|-------------|
| `/omega-budget` | Fee calculation for AIG engagements |
| `/doc-gen` | Generate formatted deliverables |
| `/proposal` | AIG-specific proposal content |
| `/iso-42001` | Detailed ISO 42001 implementation |

---

*Service Line: AIG (AI Governance & Management)*
*Version: 1.0*
*Last Updated: 2026-02-02*


---

## Additional Skill: ai-incident-response

### Command: `/omega-skills:ai-incident-response` (v4.2.1)

### Purpose
Design AI incident response playbook for model failures, bias incidents, hallucinations, abuse.

### Inputs required
```yaml
client:
  name: "Client Name"
context:
  scope: "in-scope description"
  constraints: ["regulatory / commercial constraints"]
```

### Methodology
1. Frame the request against AI Governance domain conventions.
2. Pull required inputs from engagement brain and external sources.
3. Apply the ai-incident-response method using the relevant subagent.
4. Synthesize into deliverable with recommendations + risks.
5. Validate via `/omega:verify-quality`.

### Output shape
Omega-branded ai-incident-response deliverable in `05_Deliverables_Final/`.

### Quality checklist
- Pyramid Principle structure
- Source citations on all data
- Quantified impact where the analysis supports it


---

## Additional Skill: ai-bias-audit

### Command: `/omega-skills:ai-bias-audit` (v4.2.1)

### Purpose
Audit AI system for protected-class bias using fairness metrics (statistical parity, equal opportunity, etc.).

### Inputs required
```yaml
client:
  name: "Client Name"
context:
  scope: "in-scope description"
  constraints: ["regulatory / commercial constraints"]
```

### Methodology
1. Frame the request against AI Governance domain conventions.
2. Pull required inputs from engagement brain and external sources.
3. Apply the ai-bias-audit method using the relevant subagent.
4. Synthesize into deliverable with recommendations + risks.
5. Validate via `/omega:verify-quality`.

### Output shape
Omega-branded ai-bias-audit deliverable in `05_Deliverables_Final/`.

### Quality checklist
- Pyramid Principle structure
- Source citations on all data
- Quantified impact where the analysis supports it
