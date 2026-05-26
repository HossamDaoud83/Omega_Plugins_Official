---
name: dig
description: Digital Transformation and Strategy skills - maturity assessment, roadmaps, change management
---

# Digital Transformation & Strategy (DIG) Service Line Skills

**Service Line Code:** DIG
**Description:** Strategic roadmaps, maturity assessments, change management, business case development
**Version:** 1.0
**Last Updated:** 2026-02-02

---

## Service Line Overview

Digital Transformation helps organizations leverage technology to:
- Transform business models and operations
- Improve customer experience
- Increase operational efficiency
- Drive innovation and competitive advantage
- Build digital capabilities

---

## Available Skills

| # | Skill | Command | Purpose |
|---|-------|---------|---------|
| 1 | Digital Maturity Assessment | `/dig-maturity` | Assess digital maturity level |
| 2 | Digital Roadmap Generator | `/dig-roadmap` | Create transformation roadmap |
| 3 | Business Case Builder | `/dig-business-case` | Build ROI-based business case |
| 4 | Technology Stack Analyzer | `/dig-tech-stack` | Analyze current vs target tech |
| 5 | Change Readiness Assessment | `/dig-change-ready` | Assess change readiness |
| 6 | Digital KPI Framework | `/dig-kpis` | Define digital transformation KPIs |

---

## Skill 1: Digital Maturity Assessment (`/dig-maturity`)

### Purpose
Assess an organization's digital maturity across 6 dimensions using a 5-level model.

### Digital Maturity Model (DMM)

```
Level 5: Digital Leader
         ↑
Level 4: Strategically Digital
         ↑
Level 3: Digital Performer
         ↑
Level 2: Digital Literate
         ↑
Level 1: Digital Beginner
```

### Assessment Dimensions

| Dimension | Weight | Description |
|-----------|--------|-------------|
| **Strategy** | 20% | Digital vision, roadmap, investment |
| **Customer** | 20% | Digital customer experience, channels |
| **Operations** | 20% | Process automation, efficiency |
| **Technology** | 15% | Infrastructure, platforms, tools |
| **Data & Analytics** | 15% | Data-driven decision making |
| **Culture & People** | 10% | Digital skills, mindset, leadership |

### Maturity Level Definitions

| Level | Score | Characteristics |
|-------|-------|-----------------|
| **1 - Digital Beginner** | 0-20% | Siloed digital initiatives, manual processes, limited digital skills |
| **2 - Digital Literate** | 21-40% | Basic automation, emerging digital channels, growing awareness |
| **3 - Digital Performer** | 41-60% | Integrated digital strategy, customer-centric digital, data analytics |
| **4 - Strategically Digital** | 61-80% | Digital-first mindset, advanced analytics, innovation culture |
| **5 - Digital Leader** | 81-100% | Industry benchmark, continuous innovation, ecosystem leadership |

### Assessment Criteria (Sample)

**Strategy (20%)**
| Criterion | Level 1 | Level 3 | Level 5 |
|-----------|---------|---------|---------|
| Digital Vision | None documented | Documented, partial alignment | Clear, organization-wide |
| Investment | Ad-hoc | Budgeted annually | Strategic portfolio |
| Leadership | Limited sponsorship | Executive champion | Board-level priority |

**Customer (20%)**
| Criterion | Level 1 | Level 3 | Level 5 |
|-----------|---------|---------|---------|
| Channels | Traditional only | Multi-channel | Omni-channel seamless |
| Experience | Fragmented | Consistent | Personalized, predictive |
| Engagement | Reactive | Proactive | Anticipatory |

**Operations (20%)**
| Criterion | Level 1 | Level 3 | Level 5 |
|-----------|---------|---------|---------|
| Automation | Manual processes | Partial automation | Intelligent automation |
| Efficiency | Limited metrics | Process KPIs | Real-time optimization |
| Integration | Siloed systems | Integrated core | End-to-end digital |

### Output Format

```
═══════════════════════════════════════════════════════════════════════════════
DIGITAL MATURITY ASSESSMENT
Organization: [Name]
Industry: [Industry]
Date: [Date]
═══════════════════════════════════════════════════════════════════════════════

OVERALL MATURITY: Level [X] - [Level Name] ([XX]%)

MATURITY SPIDER CHART:
                    Strategy
                       ●
                      /│\
                     / │ \
          Culture ●────┼────● Customer
                   \   │   /
                    \  │  /
                     \ │ /
           Technology ●─●─● Operations
                       │
                Data & Analytics

DIMENSION SCORES:
─────────────────────────────────────────────────────────────────────────────
Strategy           ████████████████░░░░  80%  Level 4
Customer           ████████████░░░░░░░░  60%  Level 3
Operations         ██████████░░░░░░░░░░  50%  Level 3
Technology         ████████░░░░░░░░░░░░  40%  Level 2
Data & Analytics   ██████████████░░░░░░  70%  Level 4
Culture & People   ██████░░░░░░░░░░░░░░  30%  Level 2
─────────────────────────────────────────────────────────────────────────────
WEIGHTED AVERAGE:  ████████████░░░░░░░░  58%  Level 3

PEER COMPARISON:
─────────────────────────────────────────────────────────────────────────────
Your Organization: ████████████░░░░░░░░  58%
Industry Average:  ██████████░░░░░░░░░░  52%
Industry Leaders:  ████████████████████  85%

KEY STRENGTHS:
• [Strength 1]
• [Strength 2]
• [Strength 3]

PRIORITY IMPROVEMENT AREAS:
1. [Area 1] - Current: Level 2, Target: Level 4
2. [Area 2] - Current: Level 2, Target: Level 3
3. [Area 3] - Current: Level 3, Target: Level 4

RECOMMENDATIONS:
[Prioritized recommendations with expected impact]

═══════════════════════════════════════════════════════════════════════════════
```

---

## Skill 2: Digital Roadmap Generator (`/dig-roadmap`)

### Purpose
Create a phased digital transformation roadmap with initiatives, dependencies, and timeline.

### Roadmap Framework

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    DIGITAL TRANSFORMATION ROADMAP                           │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  HORIZON 1           HORIZON 2           HORIZON 3                          │
│  Foundation          Acceleration        Innovation                         │
│  (0-12 months)       (12-24 months)      (24-36 months)                    │
│                                                                             │
│  ┌─────────────┐    ┌─────────────┐    ┌─────────────┐                     │
│  │ Quick Wins  │ →  │ Core Trans. │ →  │ Advanced    │                     │
│  │ Foundation  │    │ Integration │    │ Innovation  │                     │
│  │ Enablers    │    │ Optimization│    │ Leadership  │                     │
│  └─────────────┘    └─────────────┘    └─────────────┘                     │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Initiative Categories

| Category | Horizon 1 | Horizon 2 | Horizon 3 |
|----------|-----------|-----------|-----------|
| **Customer** | Basic digital channels | Omni-channel integration | AI-powered personalization |
| **Operations** | Process automation | Intelligent workflows | Autonomous operations |
| **Technology** | Cloud migration | Platform modernization | Emerging tech adoption |
| **Data** | Data foundation | Advanced analytics | AI/ML at scale |
| **People** | Digital training | Change management | Digital-first culture |

### Initiative Prioritization Matrix

| Criteria | Weight | Scale |
|----------|--------|-------|
| Strategic Alignment | 25% | 1-5 |
| Business Value | 25% | 1-5 |
| Feasibility | 20% | 1-5 |
| Risk | 15% | 1-5 (inverse) |
| Time to Value | 15% | 1-5 |

```
                    HIGH
                      │
         Quick Wins   │   Strategic
         (Do First)   │   (Plan & Invest)
                      │
    FEASIBILITY ──────┼────────────────────
                      │
         Fill-ins     │   Major Projects
         (Do if time) │   (Evaluate carefully)
                      │
                    LOW
                    LOW ──── IMPACT ──── HIGH
```

### Output Format

```
═══════════════════════════════════════════════════════════════════════════════
DIGITAL TRANSFORMATION ROADMAP
Organization: [Name]
Created: [Date]
Horizon: 36 months
═══════════════════════════════════════════════════════════════════════════════

VISION: [Digital transformation vision statement]

STRATEGIC OBJECTIVES:
1. [Objective 1]
2. [Objective 2]
3. [Objective 3]

═══════════════════════════════════════════════════════════════════════════════
HORIZON 1: FOUNDATION (Months 1-12)
Theme: Build digital foundation and capture quick wins
Investment: $[X]M | Expected Value: $[Y]M
═══════════════════════════════════════════════════════════════════════════════

INITIATIVES:
─────────────────────────────────────────────────────────────────────────────
│ ID    │ Initiative              │ Category  │ Duration │ Investment │ Value │
├───────┼─────────────────────────┼───────────┼──────────┼────────────┼───────┤
│ H1-01 │ Cloud Migration Phase 1 │ Technology│ 6 months │ $500K      │ $1.2M │
│ H1-02 │ Customer Portal Launch  │ Customer  │ 4 months │ $300K      │ $800K │
│ H1-03 │ RPA Quick Wins          │ Operations│ 3 months │ $150K      │ $400K │
│ H1-04 │ Data Platform MVP       │ Data      │ 6 months │ $400K      │ $600K │
│ H1-05 │ Digital Skills Training │ People    │ Ongoing  │ $100K      │ N/A   │
─────────────────────────────────────────────────────────────────────────────

GANTT CHART:
─────────────────────────────────────────────────────────────────────────────
           │ M1 │ M2 │ M3 │ M4 │ M5 │ M6 │ M7 │ M8 │ M9 │M10 │M11 │M12 │
───────────┼────┼────┼────┼────┼────┼────┼────┼────┼────┼────┼────┼────┤
H1-01      │████│████│████│████│████│████│    │    │    │    │    │    │
H1-02      │    │████│████│████│████│    │    │    │    │    │    │    │
H1-03      │████│████│████│    │    │    │    │    │    │    │    │    │
H1-04      │    │    │████│████│████│████│████│████│    │    │    │    │
H1-05      │████│████│████│████│████│████│████│████│████│████│████│████│
─────────────────────────────────────────────────────────────────────────────

MILESTONES:
• M3: RPA Quick Wins Complete
• M6: Cloud Migration Phase 1 Complete, Customer Portal Live
• M9: Data Platform MVP Complete
• M12: Horizon 1 Review

═══════════════════════════════════════════════════════════════════════════════
HORIZON 2: ACCELERATION (Months 13-24)
[Similar structure...]

═══════════════════════════════════════════════════════════════════════════════
HORIZON 3: INNOVATION (Months 25-36)
[Similar structure...]

═══════════════════════════════════════════════════════════════════════════════
INVESTMENT SUMMARY
═══════════════════════════════════════════════════════════════════════════════

│ Horizon   │ Investment │ Expected Value │ ROI    │
├───────────┼────────────┼────────────────┼────────┤
│ Horizon 1 │ $1.45M     │ $3.0M          │ 107%   │
│ Horizon 2 │ $2.80M     │ $6.5M          │ 132%   │
│ Horizon 3 │ $3.50M     │ $10.0M         │ 186%   │
├───────────┼────────────┼────────────────┼────────┤
│ TOTAL     │ $7.75M     │ $19.5M         │ 152%   │

═══════════════════════════════════════════════════════════════════════════════
```

---

## Skill 3: Business Case Builder (`/dig-business-case`)

### Purpose
Build comprehensive ROI-based business case for digital initiatives.

### Business Case Components

| Section | Content |
|---------|---------|
| Executive Summary | Problem, solution, investment, returns |
| Current State | Pain points, costs, inefficiencies |
| Proposed Solution | What, how, technology |
| Benefits | Quantified benefits, intangibles |
| Costs | CAPEX, OPEX, one-time, ongoing |
| Financial Analysis | NPV, IRR, Payback, ROI |
| Risks | Risk assessment and mitigation |
| Implementation | Timeline, resources, governance |

### Benefit Categories

**Quantifiable Benefits**
| Category | Examples | Measurement |
|----------|----------|-------------|
| Revenue Increase | New customers, upsell, retention | $ revenue |
| Cost Reduction | Labor, materials, overhead | $ savings |
| Efficiency Gains | Time savings, productivity | FTE equivalent |
| Risk Reduction | Compliance, errors, downtime | $ avoided costs |

**Qualitative Benefits**
| Category | Examples |
|----------|----------|
| Customer Experience | Satisfaction, NPS improvement |
| Employee Experience | Engagement, retention |
| Brand & Reputation | Market perception |
| Strategic Positioning | Competitive advantage |

### Financial Analysis

**Net Present Value (NPV)**
```
NPV = Σ (CFt / (1+r)^t) - Initial Investment

Where:
- CFt = Cash flow in year t
- r = Discount rate
- t = Year
```

**Internal Rate of Return (IRR)**
```
IRR = Rate where NPV = 0
```

**Payback Period**
```
Payback = Year when cumulative cash flow becomes positive
```

**Return on Investment (ROI)**
```
ROI = (Total Benefits - Total Costs) / Total Costs × 100%
```

### Output Format

```
═══════════════════════════════════════════════════════════════════════════════
DIGITAL TRANSFORMATION BUSINESS CASE
Initiative: [Name]
Prepared for: [Organization]
Date: [Date]
═══════════════════════════════════════════════════════════════════════════════

EXECUTIVE SUMMARY
─────────────────────────────────────────────────────────────────────────────
Problem:      [Current pain point / opportunity]
Solution:     [Proposed digital solution]
Investment:   $[X] over [Y] years
Net Benefit:  $[Z] over [Y] years
ROI:          [XX]%
Payback:      [X.X] years
Recommendation: [PROCEED / DEFER / REJECT]

═══════════════════════════════════════════════════════════════════════════════
FINANCIAL SUMMARY
═══════════════════════════════════════════════════════════════════════════════

                    │ Year 0  │ Year 1  │ Year 2  │ Year 3  │ Year 4  │ Year 5 │
────────────────────┼─────────┼─────────┼─────────┼─────────┼─────────┼────────┤
BENEFITS            │         │         │         │         │         │        │
 Revenue Increase   │    -    │  $200K  │  $400K  │  $600K  │  $750K  │  $900K │
 Cost Savings       │    -    │  $150K  │  $300K  │  $350K  │  $400K  │  $450K │
 Risk Avoidance     │    -    │   $50K  │   $75K  │  $100K  │  $100K  │  $100K │
────────────────────┼─────────┼─────────┼─────────┼─────────┼─────────┼────────┤
 Total Benefits     │    -    │  $400K  │  $775K  │ $1.05M  │ $1.25M  │ $1.45M │
────────────────────┼─────────┼─────────┼─────────┼─────────┼─────────┼────────┤
COSTS               │         │         │         │         │         │        │
 Implementation     │ ($500K) │ ($200K) │    -    │    -    │    -    │    -   │
 Operations         │    -    │ ($100K) │ ($110K) │ ($120K) │ ($130K) │ ($140K)│
 Maintenance        │    -    │  ($50K) │  ($55K) │  ($60K) │  ($65K) │  ($70K)│
────────────────────┼─────────┼─────────┼─────────┼─────────┼─────────┼────────┤
 Total Costs        │ ($500K) │ ($350K) │ ($165K) │ ($180K) │ ($195K) │ ($210K)│
────────────────────┼─────────┼─────────┼─────────┼─────────┼─────────┼────────┤
NET CASH FLOW       │ ($500K) │   $50K  │  $610K  │  $870K  │ $1.06M  │ $1.24M │
CUMULATIVE          │ ($500K) │ ($450K) │  $160K  │ $1.03M  │ $2.09M  │ $3.33M │

─────────────────────────────────────────────────────────────────────────────
FINANCIAL METRICS (10% discount rate):
─────────────────────────────────────────────────────────────────────────────
NPV (5 years):     $2.15M
IRR:               85%
Payback Period:    1.7 years
ROI (5 years):     290%
─────────────────────────────────────────────────────────────────────────────

═══════════════════════════════════════════════════════════════════════════════
SENSITIVITY ANALYSIS
═══════════════════════════════════════════════════════════════════════════════

│ Scenario          │ NPV     │ IRR   │ Payback │
├───────────────────┼─────────┼───────┼─────────┤
│ Best Case (+20%)  │ $2.85M  │ 110%  │ 1.3 yrs │
│ Base Case         │ $2.15M  │ 85%   │ 1.7 yrs │
│ Worst Case (-20%) │ $1.45M  │ 60%   │ 2.2 yrs │
│ Break-even        │ $0      │ 10%   │ 5.0 yrs │

═══════════════════════════════════════════════════════════════════════════════
RISKS & MITIGATION
═══════════════════════════════════════════════════════════════════════════════

│ Risk                  │ Probability │ Impact │ Mitigation          │
├───────────────────────┼─────────────┼────────┼─────────────────────┤
│ Implementation delays │ Medium      │ Medium │ Phased approach     │
│ Adoption challenges   │ High        │ High   │ Change management   │
│ Technology failure    │ Low         │ High   │ Vendor SLAs         │
│ Scope creep           │ Medium      │ Medium │ Governance process  │

═══════════════════════════════════════════════════════════════════════════════
```

---

## Skill 4: Technology Stack Analyzer (`/dig-tech-stack`)

### Purpose
Analyze current technology landscape and recommend target architecture.

### Technology Assessment Areas

| Area | Components |
|------|------------|
| **Infrastructure** | Cloud, on-premise, hybrid, networking |
| **Applications** | ERP, CRM, custom apps, SaaS |
| **Data** | Databases, data warehouse, analytics |
| **Integration** | APIs, middleware, ESB |
| **Security** | IAM, encryption, monitoring |
| **DevOps** | CI/CD, containers, automation |

### Technology Maturity Assessment

| Level | Description | Characteristics |
|-------|-------------|-----------------|
| 1 - Legacy | End of life, high risk | Outdated, no vendor support |
| 2 - Aging | Nearing obsolescence | Limited updates, technical debt |
| 3 - Current | Modern and supported | Active development, vendor support |
| 4 - Leading | Latest generation | Cloud-native, best practices |
| 5 - Emerging | Cutting edge | Innovation, competitive advantage |

---

## Skill 5: Change Readiness Assessment (`/dig-change-ready`)

### Purpose
Assess organizational readiness for digital transformation change.

### Change Readiness Dimensions

| Dimension | Description | Weight |
|-----------|-------------|--------|
| Leadership | Executive sponsorship and vision | 25% |
| Culture | Openness to change, risk tolerance | 20% |
| Capacity | Resources and bandwidth for change | 20% |
| Capability | Skills and competencies | 20% |
| Communication | Change communication effectiveness | 15% |

### Readiness Levels

| Level | Score | Description | Recommendation |
|-------|-------|-------------|----------------|
| Not Ready | 0-40% | Significant barriers | Address fundamentals first |
| Partially Ready | 41-60% | Some readiness, gaps exist | Targeted interventions |
| Ready | 61-80% | Good foundation | Proceed with monitoring |
| Highly Ready | 81-100% | Strong readiness | Accelerate transformation |

### Output Format

```
═══════════════════════════════════════════════════════════════════════════════
CHANGE READINESS ASSESSMENT
Organization: [Name]
Change Initiative: [Digital Transformation]
Date: [Date]
═══════════════════════════════════════════════════════════════════════════════

OVERALL READINESS: [XX]% - [READY / PARTIALLY READY / NOT READY]

DIMENSION SCORES:
─────────────────────────────────────────────────────────────────────────────
Leadership       ████████████████░░░░  80%  Ready
Culture          ██████████░░░░░░░░░░  50%  Partially Ready
Capacity         ████████░░░░░░░░░░░░  40%  Partially Ready
Capability       ████████████░░░░░░░░  60%  Partially Ready
Communication    ██████████████░░░░░░  70%  Ready
─────────────────────────────────────────────────────────────────────────────

CHANGE READINESS ACTIONS:
─────────────────────────────────────────────────────────────────────────────
Priority 1: Build change capacity (current: 40%)
  - Resource allocation planning
  - Workload balancing
  - Change agent network

Priority 2: Address cultural barriers (current: 50%)
  - Risk tolerance workshops
  - Innovation incentives
  - Quick wins celebration

Priority 3: Develop capabilities (current: 60%)
  - Digital skills training
  - External expertise
  - Knowledge transfer

═══════════════════════════════════════════════════════════════════════════════
```

---

## Skill 6: Digital KPI Framework (`/dig-kpis`)

### Purpose
Define comprehensive KPI framework for measuring digital transformation success.

### Digital Transformation KPI Categories

| Category | Focus | Example KPIs |
|----------|-------|--------------|
| **Strategic** | Overall DT progress | Digital revenue %, DT ROI |
| **Customer** | Digital CX | Digital NPS, online conversion |
| **Operational** | Efficiency | Automation rate, process time |
| **Technology** | Tech performance | System uptime, deployment frequency |
| **People** | Digital capability | Digital skills index, adoption rate |
| **Financial** | Value delivered | Cost savings, revenue growth |

### Sample KPIs by Category

**Strategic KPIs**
| KPI | Formula | Target | Frequency |
|-----|---------|--------|-----------|
| Digital Revenue % | Digital revenue / Total revenue | 30% | Quarterly |
| DT Investment ROI | DT benefits / DT investment | 150% | Annual |
| Digital Maturity Score | Assessment score | Level 4 | Annual |

**Customer KPIs**
| KPI | Formula | Target | Frequency |
|-----|---------|--------|-----------|
| Digital Adoption Rate | Digital users / Total users | 75% | Monthly |
| Digital NPS | Net Promoter Score (digital) | 50+ | Quarterly |
| Online Conversion Rate | Conversions / Visitors | 5% | Weekly |
| Self-Service Rate | Self-service / Total interactions | 60% | Monthly |

**Operational KPIs**
| KPI | Formula | Target | Frequency |
|-----|---------|--------|-----------|
| Process Automation Rate | Automated steps / Total steps | 70% | Quarterly |
| Straight-Through Processing | STP transactions / Total | 85% | Monthly |
| Average Process Time | Time to complete process | -50% | Monthly |
| Digital Transaction Cost | Cost per digital transaction | -40% | Quarterly |

### Output Format

```
═══════════════════════════════════════════════════════════════════════════════
DIGITAL TRANSFORMATION KPI FRAMEWORK
Organization: [Name]
Date: [Date]
═══════════════════════════════════════════════════════════════════════════════

KPI DASHBOARD:
─────────────────────────────────────────────────────────────────────────────
│ KPI                      │ Current │ Target │ Status │ Trend │
├──────────────────────────┼─────────┼────────┼────────┼───────┤
│ STRATEGIC                │         │        │        │       │
│ Digital Revenue %        │ 15%     │ 30%    │ 🟡     │ ↑     │
│ DT Investment ROI        │ 85%     │ 150%   │ 🟡     │ ↑     │
│ Digital Maturity         │ Level 3 │ Level 4│ 🟡     │ →     │
├──────────────────────────┼─────────┼────────┼────────┼───────┤
│ CUSTOMER                 │         │        │        │       │
│ Digital Adoption Rate    │ 55%     │ 75%    │ 🟡     │ ↑     │
│ Digital NPS              │ 35      │ 50+    │ 🟡     │ ↑     │
│ Online Conversion        │ 3.2%    │ 5%     │ 🟡     │ ↑     │
├──────────────────────────┼─────────┼────────┼────────┼───────┤
│ OPERATIONAL              │         │        │        │       │
│ Automation Rate          │ 45%     │ 70%    │ 🟠     │ ↑     │
│ Process Time Reduction   │ 25%     │ 50%    │ 🟡     │ ↑     │
─────────────────────────────────────────────────────────────────────────────

Status: 🟢 On Target | 🟡 Within Range | 🟠 At Risk | 🔴 Off Track
Trend: ↑ Improving | → Stable | ↓ Declining

═══════════════════════════════════════════════════════════════════════════════
```

---

## Key Frameworks Referenced

| Framework | Description | Use |
|-----------|-------------|-----|
| MIT Digital Maturity Model | 5-level maturity assessment | Maturity assessment |
| McKinsey Digital Quotient | Digital capability measurement | Benchmarking |
| Gartner Digital Business | Digital business transformation | Strategy |
| Kotter's 8 Steps | Change management | Change readiness |
| TOGAF | Enterprise architecture | Tech stack analysis |

---

## Integration with Other Skills

| Skill | Integration |
|-------|-------------|
| `/omega-budget` | Fee calculation for DIG engagements |
| `/doc-gen` | Generate formatted deliverables |
| `/proposal` | DIG-specific proposal content |
| `/dig-change-ready` → `/aai-assess` | Link to automation opportunities |

---

*Service Line: DIG (Digital Transformation & Strategy)*
*Version: 1.0*
*Last Updated: 2026-02-02*


---

## Additional Skill: target-operating-model

### Command: `/omega-skills:target-operating-model` (v4.2.1)

### Purpose
Design target operating model: capabilities, processes, technology, people, governance, locations.

### Inputs required
```yaml
client:
  name: "Client Name"
context:
  scope: "in-scope description"
  constraints: ["regulatory / commercial constraints"]
```

### Methodology
1. Frame the request against Digital Transformation domain conventions.
2. Pull required inputs from engagement brain and external sources.
3. Apply the target-operating-model method using the relevant subagent.
4. Synthesize into deliverable with recommendations + risks.
5. Validate via `/omega:verify-quality`.

### Output shape
Omega-branded target-operating-model deliverable in `05_Deliverables_Final/`.

### Quality checklist
- Pyramid Principle structure
- Source citations on all data
- Quantified impact where the analysis supports it


---

## Additional Skill: value-realization

### Command: `/omega-skills:value-realization` (v4.2.1)

### Purpose
Set up value-realization tracking: baseline, milestones, attribution, run-rate vs cumulative.

### Inputs required
```yaml
client:
  name: "Client Name"
context:
  scope: "in-scope description"
  constraints: ["regulatory / commercial constraints"]
```

### Methodology
1. Frame the request against Digital Transformation domain conventions.
2. Pull required inputs from engagement brain and external sources.
3. Apply the value-realization method using the relevant subagent.
4. Synthesize into deliverable with recommendations + risks.
5. Validate via `/omega:verify-quality`.

### Output shape
Omega-branded value-realization deliverable in `05_Deliverables_Final/`.

### Quality checklist
- Pyramid Principle structure
- Source citations on all data
- Quantified impact where the analysis supports it
