---
name: aai
description: Agentic AI and Intelligent Automation skills - process automation, RPA, multi-agent systems
---

# Agentic AI & Intelligent Automation (AAI) Service Line Skills

**Service Line Code:** AAI
**Description:** Process automation, workflow automation, custom AI solutions, multi-agent systems
**Version:** 1.0
**Last Updated:** 2026-02-02

---

## Service Line Overview

Agentic AI & Intelligent Automation helps organizations leverage automation technologies:
- Robotic Process Automation (RPA)
- Intelligent Process Automation (IPA)
- AI-Powered Agents & Assistants
- Hyperautomation Strategies
- Process Mining & Optimization

---

## Available Skills

| # | Skill | Command | Purpose |
|---|-------|---------|---------|
| 1 | Automation Assessment | `/aai-assess` | Identify automation opportunities |
| 2 | Process Mining Analysis | `/aai-process-mine` | Analyze processes for automation |
| 3 | RPA Feasibility Study | `/aai-rpa-feasibility` | Assess RPA feasibility and ROI |
| 4 | Agent Design Blueprint | `/aai-agent-design` | Design multi-agent AI systems |
| 5 | Automation ROI Calculator | `/aai-roi` | Calculate automation ROI |
| 6 | Bot Inventory Manager | `/aai-bot-inventory` | Manage RPA bot inventory |
| 7 | Hyperautomation Roadmap | `/aai-hyperauto` | Plan hyperautomation journey |
| 8 | Agent Guardrails Designer | `/aai-guardrails` | Design safety guardrails for AI agents |

---

## Skill 1: Automation Assessment (`/aai-assess`)

### Purpose
Identify and prioritize automation opportunities across the organization.

### Automation Opportunity Assessment (AOA) Framework

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    AUTOMATION OPPORTUNITY ASSESSMENT                        │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  1. DISCOVER         2. ASSESS          3. PRIORITIZE      4. ROADMAP      │
│  ──────────          ───────            ────────────       ─────────       │
│  Process inventory   Automation fit     Value vs effort    Implementation  │
│  Pain points         Complexity         Quick wins         Phased approach │
│  Volume/frequency    Technology match   Strategic impact   Resource plan   │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Automation Suitability Criteria

| Criterion | Weight | Score (1-5) | Description |
|-----------|--------|-------------|-------------|
| **Rule-Based** | 20% | | Process follows clear, documented rules |
| **Repetitive** | 15% | | High volume, frequent execution |
| **Stable** | 15% | | Process unlikely to change frequently |
| **Digital Inputs** | 15% | | Structured, digital data inputs |
| **Low Exception Rate** | 10% | | Few exceptions requiring human judgment |
| **High Volume** | 10% | | Significant transaction volume |
| **Time-Critical** | 10% | | Speed improvement adds value |
| **Error-Prone** | 5% | | Manual errors are costly |

### Automation Technology Selector

| Process Characteristics | Recommended Technology |
|------------------------|------------------------|
| Simple, rule-based, structured data | **RPA** (UiPath, Automation Anywhere, Blue Prism) |
| Document processing, unstructured data | **IDP** (Intelligent Document Processing) |
| Decision-making, complex rules | **BPM + Decision Engine** |
| Natural language, conversations | **Conversational AI** (Chatbots, Voice) |
| Predictive, pattern recognition | **ML/AI Models** |
| End-to-end process orchestration | **Hyperautomation Platform** |
| Autonomous task execution | **AI Agents** (Agentic AI) |

### Automation Complexity Matrix

```
                    HIGH COMPLEXITY
                          │
         Intelligent      │    AI/ML
         Automation       │    Solutions
         (IPA)            │    (Custom)
                          │
    ──────────────────────┼──────────────────────
                          │
         Basic RPA        │    Process
         (Attended)       │    Optimization
                          │    (No automation)
                          │
                    LOW COMPLEXITY
         LOW VOLUME ──────┴────── HIGH VOLUME
```

### Output Format

```
═══════════════════════════════════════════════════════════════════════════════
AUTOMATION OPPORTUNITY ASSESSMENT
Organization: [Name]
Assessment Date: [Date]
Processes Assessed: [N]
═══════════════════════════════════════════════════════════════════════════════

EXECUTIVE SUMMARY:
─────────────────────────────────────────────────────────────────────────────
Total Processes Assessed:     [N]
High Automation Potential:    [N] ([X]%)
Medium Automation Potential:  [N] ([X]%)
Low Automation Potential:     [N] ([X]%)
Not Suitable:                 [N] ([X]%)

Estimated Annual Savings:     $[X]M
Estimated FTE Savings:        [X] FTEs
Estimated Implementation:     $[X]K - $[X]K

AUTOMATION OPPORTUNITIES (Prioritized):
─────────────────────────────────────────────────────────────────────────────
│ Rank │ Process               │ Score │ Technology │ Savings  │ Effort │ Priority │
├──────┼───────────────────────┼───────┼────────────┼──────────┼────────┼──────────┤
│ 1    │ Invoice Processing    │ 92%   │ RPA + IDP  │ $450K/yr │ Medium │ Quick Win│
│ 2    │ Employee Onboarding   │ 88%   │ RPA        │ $280K/yr │ Low    │ Quick Win│
│ 3    │ Report Generation     │ 85%   │ RPA        │ $180K/yr │ Low    │ Quick Win│
│ 4    │ Customer Inquiries    │ 78%   │ Chatbot    │ $320K/yr │ High   │ Strategic│
│ 5    │ Fraud Detection       │ 75%   │ ML Model   │ $600K/yr │ High   │ Strategic│
─────────────────────────────────────────────────────────────────────────────

QUICK WINS (High Value, Low Effort):
─────────────────────────────────────────────────────────────────────────────
1. [Process 1] - Est. 4 weeks, $50K investment, $280K annual savings
2. [Process 2] - Est. 6 weeks, $75K investment, $180K annual savings
3. [Process 3] - Est. 3 weeks, $30K investment, $120K annual savings

STRATEGIC INITIATIVES (High Value, High Effort):
─────────────────────────────────────────────────────────────────────────────
1. [Process 1] - Est. 16 weeks, $250K investment, $600K annual savings
2. [Process 2] - Est. 12 weeks, $180K investment, $450K annual savings

═══════════════════════════════════════════════════════════════════════════════
```

---

## Skill 2: Process Mining Analysis (`/aai-process-mine`)

### Purpose
Analyze event logs to discover actual process flows and identify optimization opportunities.

### Process Mining Capabilities

| Capability | Description | Output |
|------------|-------------|--------|
| **Discovery** | Automatically discover process models from logs | Process map |
| **Conformance** | Compare actual vs designed process | Deviation report |
| **Enhancement** | Identify bottlenecks and improvements | Optimization recommendations |

### Process Mining Metrics

| Metric | Formula | Target |
|--------|---------|--------|
| Throughput Time | End timestamp - Start timestamp | Minimize |
| Cycle Efficiency | Value-add time / Total time | >80% |
| Rework Rate | Rework loops / Total cases | <5% |
| Automation Rate | Automated steps / Total steps | Maximize |
| First-Time-Right | Cases without rework / Total cases | >95% |

### Output Format

```
═══════════════════════════════════════════════════════════════════════════════
PROCESS MINING ANALYSIS
Process: [Process Name]
Analysis Period: [Start Date] to [End Date]
Cases Analyzed: [N]
═══════════════════════════════════════════════════════════════════════════════

PROCESS DISCOVERY:
─────────────────────────────────────────────────────────────────────────────
[ASCII Process Flow Diagram]

Start → Task A → Task B → Decision → Task C → End
                    ↓              ↗
                Task D → Task E →─┘
                    ↓
                Rework Loop (15%)

PROCESS METRICS:
─────────────────────────────────────────────────────────────────────────────
│ Metric              │ Current  │ Benchmark │ Gap    │ Status │
├─────────────────────┼──────────┼───────────┼────────┼────────┤
│ Avg Throughput Time │ 4.5 days │ 2.0 days  │ -2.5d  │ 🔴     │
│ Cycle Efficiency    │ 45%      │ 80%       │ -35%   │ 🔴     │
│ Rework Rate         │ 15%      │ 5%        │ +10%   │ 🟠     │
│ Automation Rate     │ 20%      │ 70%       │ -50%   │ 🔴     │
│ First-Time-Right    │ 72%      │ 95%       │ -23%   │ 🟠     │
─────────────────────────────────────────────────────────────────────────────

BOTTLENECKS IDENTIFIED:
─────────────────────────────────────────────────────────────────────────────
1. Task B: Avg wait time 1.8 days (resource constraint)
2. Decision Point: 25% cases require escalation
3. Task D-E Loop: 15% rework rate

AUTOMATION OPPORTUNITIES:
─────────────────────────────────────────────────────────────────────────────
• Task A: 95% rule-based, RPA candidate
• Task C: Document processing, IDP candidate
• Decision: 60% can be automated with business rules

═══════════════════════════════════════════════════════════════════════════════
```

---

## Skill 3: RPA Feasibility Study (`/aai-rpa-feasibility`)

### Purpose
Assess technical and business feasibility of RPA implementation.

### Feasibility Assessment Dimensions

| Dimension | Weight | Criteria |
|-----------|--------|----------|
| **Technical Fit** | 30% | System compatibility, data structure, stability |
| **Business Value** | 30% | Cost savings, time savings, quality improvement |
| **Implementation Risk** | 20% | Complexity, change management, dependencies |
| **Strategic Alignment** | 20% | Digital strategy, scalability, future-proofing |

### RPA Business Case Template

```
═══════════════════════════════════════════════════════════════════════════════
RPA FEASIBILITY STUDY
Process: [Process Name]
Date: [Date]
═══════════════════════════════════════════════════════════════════════════════

CURRENT STATE:
─────────────────────────────────────────────────────────────────────────────
• Volume: [X] transactions/month
• FTEs Involved: [X]
• Avg Processing Time: [X] minutes/transaction
• Error Rate: [X]%
• Annual Cost: $[X]

PROPOSED RPA SOLUTION:
─────────────────────────────────────────────────────────────────────────────
• Bot Type: Attended / Unattended
• Platform: [UiPath / Automation Anywhere / Blue Prism]
• Bots Required: [X]
• Automation Coverage: [X]%

FINANCIAL ANALYSIS:
─────────────────────────────────────────────────────────────────────────────
COSTS:
│ Item                    │ Year 0   │ Year 1   │ Year 2   │ Year 3   │
├─────────────────────────┼──────────┼──────────┼──────────┼──────────┤
│ Software Licenses       │ $50,000  │ $30,000  │ $30,000  │ $30,000  │
│ Development             │ $80,000  │ $20,000  │ $10,000  │ $10,000  │
│ Infrastructure          │ $15,000  │ $5,000   │ $5,000   │ $5,000   │
│ Support & Maintenance   │ -        │ $15,000  │ $15,000  │ $15,000  │
├─────────────────────────┼──────────┼──────────┼──────────┼──────────┤
│ Total Costs             │ $145,000 │ $70,000  │ $60,000  │ $60,000  │

BENEFITS:
│ Item                    │ Year 0   │ Year 1   │ Year 2   │ Year 3   │
├─────────────────────────┼──────────┼──────────┼──────────┼──────────┤
│ Labor Savings           │ -        │ $180,000 │ $200,000 │ $220,000 │
│ Error Reduction         │ -        │ $25,000  │ $30,000  │ $35,000  │
│ Faster Processing       │ -        │ $15,000  │ $20,000  │ $25,000  │
├─────────────────────────┼──────────┼──────────┼──────────┼──────────┤
│ Total Benefits          │ -        │ $220,000 │ $250,000 │ $280,000 │

NET BENEFIT:              ($145,000) │ $150,000 │ $190,000 │ $220,000 │
CUMULATIVE:               ($145,000) │ $5,000   │ $195,000 │ $415,000 │

─────────────────────────────────────────────────────────────────────────────
ROI (3 years): 186%
Payback Period: 11 months
NPV (10%): $312,000

RECOMMENDATION: ✅ PROCEED

═══════════════════════════════════════════════════════════════════════════════
```

---

## Skill 4: Agent Design Blueprint (`/aai-agent-design`)

### Purpose
Design AI agents and multi-agent systems for autonomous task execution.

### Agent Architecture Components

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                         AI AGENT ARCHITECTURE                               │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  ┌─────────────┐    ┌─────────────┐    ┌─────────────┐                     │
│  │   PERCEIVE  │ →  │    REASON   │ →  │     ACT     │                     │
│  │   (Input)   │    │   (Decide)  │    │   (Output)  │                     │
│  └─────────────┘    └─────────────┘    └─────────────┘                     │
│        ↑                   │                   │                            │
│        │                   ↓                   │                            │
│        │            ┌─────────────┐            │                            │
│        │            │   MEMORY    │            │                            │
│        │            │  (Context)  │            │                            │
│        │            └─────────────┘            │                            │
│        │                   ↑                   │                            │
│        └───────────────────┴───────────────────┘                            │
│                        FEEDBACK                                             │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Agent Types

| Type | Description | Use Cases |
|------|-------------|-----------|
| **Reactive** | Responds to current input only | Simple automation, alerts |
| **Deliberative** | Plans ahead, reasons about goals | Task planning, scheduling |
| **Learning** | Improves from experience | Personalization, optimization |
| **Collaborative** | Works with other agents | Complex workflows, orchestration |

### Multi-Agent System Design

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                      MULTI-AGENT SYSTEM                                     │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│                    ┌─────────────────┐                                      │
│                    │  ORCHESTRATOR   │                                      │
│                    │     AGENT       │                                      │
│                    └────────┬────────┘                                      │
│                             │                                               │
│         ┌───────────────────┼───────────────────┐                          │
│         │                   │                   │                          │
│  ┌──────┴──────┐    ┌──────┴──────┐    ┌──────┴──────┐                    │
│  │  RESEARCH   │    │   ANALYSIS  │    │   ACTION    │                    │
│  │   AGENT     │    │    AGENT    │    │   AGENT     │                    │
│  └─────────────┘    └─────────────┘    └─────────────┘                    │
│         │                   │                   │                          │
│         └───────────────────┴───────────────────┘                          │
│                             │                                               │
│                    ┌────────┴────────┐                                      │
│                    │   SHARED MEMORY │                                      │
│                    │   & KNOWLEDGE   │                                      │
│                    └─────────────────┘                                      │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Agent Design Template

```
═══════════════════════════════════════════════════════════════════════════════
AI AGENT DESIGN BLUEPRINT
Agent Name: [Name]
Purpose: [Description]
Date: [Date]
═══════════════════════════════════════════════════════════════════════════════

AGENT PROFILE:
─────────────────────────────────────────────────────────────────────────────
Name:           [Agent Name]
Type:           [Reactive / Deliberative / Learning / Collaborative]
Role:           [Primary function]
Autonomy Level: [1-5 scale]

CAPABILITIES:
─────────────────────────────────────────────────────────────────────────────
INPUTS (Perceive):
• [Input 1]: [Description, format, source]
• [Input 2]: [Description, format, source]

REASONING (Decide):
• [Decision 1]: [Logic, conditions, rules]
• [Decision 2]: [Logic, conditions, rules]

OUTPUTS (Act):
• [Action 1]: [Description, target, format]
• [Action 2]: [Description, target, format]

TOOLS AVAILABLE:
─────────────────────────────────────────────────────────────────────────────
• [Tool 1]: [Description, when to use]
• [Tool 2]: [Description, when to use]
• [Tool 3]: [Description, when to use]

GUARDRAILS:
─────────────────────────────────────────────────────────────────────────────
• [Constraint 1]: [What the agent cannot do]
• [Constraint 2]: [Required approvals]
• [Constraint 3]: [Escalation triggers]

═══════════════════════════════════════════════════════════════════════════════
```

---

## Skill 5: Automation ROI Calculator (`/aai-roi`)

### Purpose
Calculate comprehensive ROI for automation initiatives.

### ROI Components

**Cost Components:**
| Category | Items |
|----------|-------|
| Software | Licenses, subscriptions |
| Development | Design, build, test, deploy |
| Infrastructure | Servers, cloud, network |
| Operations | Support, maintenance, monitoring |
| Change Management | Training, communication |

**Benefit Components:**
| Category | Items |
|----------|-------|
| Labor Savings | FTE reduction, redeployment |
| Time Savings | Faster processing, reduced wait |
| Quality Improvement | Error reduction, consistency |
| Compliance | Audit trail, accuracy |
| Revenue | Faster time-to-market, capacity |

### ROI Calculation

```
ROI = (Total Benefits - Total Costs) / Total Costs × 100%

Payback Period = Initial Investment / Annual Net Benefits

NPV = Σ (Net Benefit_t / (1 + r)^t) - Initial Investment
```

---

## Skill 6: Bot Inventory Manager (`/aai-bot-inventory`)

### Purpose
Manage and monitor RPA bot portfolio.

### Bot Inventory Template

```json
{
  "bot_id": "BOT-001",
  "name": "Invoice Processing Bot",
  "status": "production",
  "type": "unattended",
  "platform": "UiPath",
  "process": "Accounts Payable",
  "owner": "Finance Team",
  "deployed_date": "2025-06-15",
  "last_run": "2026-02-01T23:00:00Z",
  "metrics": {
    "transactions_processed": 15420,
    "success_rate": 98.5,
    "avg_processing_time_sec": 45,
    "errors_last_30_days": 23
  },
  "schedule": "Daily 23:00-06:00",
  "dependencies": ["SAP", "Email Server", "SharePoint"],
  "documentation": "/docs/bots/invoice-bot.md"
}
```

---

## Skill 7: Hyperautomation Roadmap (`/aai-hyperauto`)

### Purpose
Plan organization-wide hyperautomation journey.

### Hyperautomation Maturity Model

| Level | Name | Characteristics |
|-------|------|-----------------|
| 1 | Task Automation | Individual task automation, RPA pilots |
| 2 | Process Automation | End-to-end process automation, scaling RPA |
| 3 | Intelligent Automation | AI/ML integration, IDP, decision automation |
| 4 | Autonomous Operations | Self-optimizing processes, minimal human intervention |
| 5 | Enterprise Intelligence | Organization-wide automation fabric, continuous learning |

---

## Skill 8: Agent Guardrails Designer (`/aai-guardrails`)

### Purpose
Design safety guardrails and constraints for AI agents.

### Guardrail Categories

| Category | Description | Examples |
|----------|-------------|----------|
| **Capability Limits** | What agent can/cannot do | No financial transactions >$10K |
| **Knowledge Boundaries** | Information access limits | No PII access without approval |
| **Action Constraints** | Restricted actions | No external communications |
| **Escalation Rules** | When to involve humans | Uncertainty >20%, edge cases |
| **Audit Requirements** | Logging and traceability | All decisions logged |

### Guardrail Template

```
═══════════════════════════════════════════════════════════════════════════════
AGENT GUARDRAILS SPECIFICATION
Agent: [Agent Name]
Version: [X.X]
Date: [Date]
═══════════════════════════════════════════════════════════════════════════════

CAPABILITY GUARDRAILS:
─────────────────────────────────────────────────────────────────────────────
ALLOWED:
✅ Read customer data for authorized purposes
✅ Generate reports and summaries
✅ Schedule meetings within business hours
✅ Send notifications to internal users

PROHIBITED:
❌ Delete any data
❌ Access financial systems directly
❌ Communicate with external parties
❌ Make decisions affecting >$10,000

ESCALATION TRIGGERS:
─────────────────────────────────────────────────────────────────────────────
• Confidence score <80%: Escalate to human review
• Request involves PII: Require manager approval
• Error rate >5%: Pause and alert operations
• Unknown request type: Escalate to supervisor agent

HUMAN-IN-THE-LOOP REQUIREMENTS:
─────────────────────────────────────────────────────────────────────────────
• All final decisions affecting customers require human approval
• Weekly review of agent actions by process owner
• Quarterly audit of guardrail effectiveness

═══════════════════════════════════════════════════════════════════════════════
```

---

## Key Frameworks Referenced

| Framework | Description |
|-----------|-------------|
| Automation Anywhere CoE | Center of Excellence model |
| UiPath Operating Model | RPA governance framework |
| Gartner Hyperautomation | Hyperautomation framework |
| IEEE P2863 | Organizational AI governance |

---

## Integration with Other Skills

| Skill | Integration |
|-------|-------------|
| `/omega-budget` | Fee calculation for AAI engagements |
| `/dig-maturity` | Link automation to digital maturity |
| `/aig-guardrails` | AI governance for agents |
| `/doc-gen` | Generate automation documentation |

---

*Service Line: AAI (Agentic AI & Intelligent Automation)*
*Version: 1.0*
*Last Updated: 2026-02-02*
