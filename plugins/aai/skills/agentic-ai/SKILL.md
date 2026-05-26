---
name: agentic-ai
description: Agentic AI and intelligent automation knowledge for consulting engagements. Use when working on process automation, multi-agent systems, RPA/IPA implementation, workflow automation, or custom AI solutions. Covers automation assessment, agent architecture, and implementation approaches.
---

# Agentic AI & Intelligent Automation Skill

## Overview

Provides specialized knowledge for automation and agentic AI engagements including opportunity assessment, agent design patterns, platform selection, and implementation approaches.

---

## Automation Assessment Framework

### Process Scoring Criteria
| Criterion | Weight | Score (1-5) | Description |
|-----------|--------|-------------|-------------|
| Volume | 20% | - | Transaction frequency |
| Standardization | 20% | - | Rule-based vs. judgment |
| Data Structure | 15% | - | Structured vs. unstructured |
| Stability | 15% | - | Process change frequency |
| Error Rate | 15% | - | Current quality issues |
| Strategic Value | 15% | - | Business criticality |

### Automation Suitability Matrix
```
                    High Volume
                        │
    ┌───────────────────┼───────────────────┐
    │   AUTOMATE NOW    │   OPTIMIZE FIRST  │
    │   (Quick Wins)    │   (Standardize)   │
High├───────────────────┼───────────────────┤
Rule│                   │                   │
Base│   EVALUATE ROI    │   LOW PRIORITY    │
    │   (Case-by-case)  │   (Manual OK)     │
    └───────────────────┼───────────────────┘
                    Low Volume
```

### ROI Calculation Template
```
Annual Benefit = (Hours Saved × Hourly Cost) + Error Reduction Value + Speed Value

Implementation Cost = License + Development + Training + Change Management

ROI = (Annual Benefit - Annual Cost) / Implementation Cost × 100

Payback Period = Implementation Cost / Annual Benefit
```

---

## Agent Design Patterns

### Single Agent Architecture
```
User Request
    │
    ▼
┌─────────────────────────────────────┐
│           AGENT                      │
│  ┌─────────────────────────────┐    │
│  │      Reasoning Engine        │    │
│  │   (LLM + System Prompt)      │    │
│  └─────────────────────────────┘    │
│              │                       │
│  ┌───────────┴───────────┐          │
│  ▼           ▼           ▼          │
│ Tool 1    Tool 2      Tool 3        │
│ (API)    (Database)  (Search)       │
└─────────────────────────────────────┘
    │
    ▼
Response
```

### Multi-Agent Patterns

**Supervisor Pattern:**
```
                 ┌──────────────┐
                 │  Supervisor  │
                 │    Agent     │
                 └──────┬───────┘
           ┌───────────┼───────────┐
           ▼           ▼           ▼
      ┌────────┐  ┌────────┐  ┌────────┐
      │ Worker │  │ Worker │  │ Worker │
      │ Agent 1│  │ Agent 2│  │ Agent 3│
      └────────┘  └────────┘  └────────┘
```

**Pipeline Pattern:**
```
Input → Agent 1 → Agent 2 → Agent 3 → Output
        (Extract)  (Transform) (Validate)
```

**Collaborative Pattern:**
```
┌────────────────────────────────────┐
│         Shared Context             │
└────────────────────────────────────┘
     ▲              ▲              ▲
     │              │              │
┌────────┐    ┌────────┐    ┌────────┐
│ Agent 1│◄──►│ Agent 2│◄──►│ Agent 3│
└────────┘    └────────┘    └────────┘
```

### Agent Component Checklist
- [ ] Clear goal definition
- [ ] Appropriate tool selection
- [ ] Memory strategy (short-term, long-term)
- [ ] Guardrails and constraints
- [ ] Error handling approach
- [ ] Human escalation triggers
- [ ] Logging and observability
- [ ] Testing strategy

---

## Automation Technology Stack

### By Automation Type
| Type | Technologies | Best For |
|------|--------------|----------|
| Task Automation | UiPath, Automation Anywhere, Power Automate | Desktop/web tasks |
| Workflow Automation | Camunda, Temporal, n8n | Process orchestration |
| Document Processing | ABBYY, Kofax, Azure Form Recognizer | Unstructured data |
| Integration | MuleSoft, Workato, Zapier | System connectivity |
| AI/ML | OpenAI, Anthropic, Hugging Face | Intelligent automation |

### Agent Framework Comparison
| Framework | Strengths | Best For |
|-----------|-----------|----------|
| LangChain | Ecosystem, flexibility | General purpose |
| Claude Agent SDK | Anthropic integration, simplicity | Claude-based agents |
| AutoGen | Multi-agent, Microsoft | Complex workflows |
| CrewAI | Role-based, simple | Team simulations |
| Semantic Kernel | Microsoft stack | Enterprise .NET |

---

## Implementation Approach

### Phase 1: Discovery (2-4 weeks)
- Process inventory and documentation
- Stakeholder interviews
- Volume and complexity analysis
- Technology assessment
- Quick win identification

### Phase 2: Design (3-6 weeks)
- Solution architecture
- Integration design
- Exception handling
- Security requirements
- Success metrics

### Phase 3: Build (4-12 weeks)
- Development sprints
- Unit testing
- Integration testing
- UAT preparation
- Documentation

### Phase 4: Deploy (2-4 weeks)
- Pilot deployment
- User training
- Hypercare support
- Performance monitoring
- Optimization

### Phase 5: Scale (Ongoing)
- Additional process automation
- Capability expansion
- COE maturation
- Continuous improvement

---

## Common Use Cases

### High-Value Automation Candidates
| Category | Examples |
|----------|----------|
| Finance | Invoice processing, reconciliation, reporting |
| HR | Onboarding, benefits administration, reporting |
| IT | Ticket routing, user provisioning, monitoring |
| Operations | Order processing, inventory updates, shipping |
| Customer Service | Query routing, FAQs, status updates |
| Compliance | Data validation, reporting, audit prep |

### Agent Use Cases
| Category | Examples |
|----------|----------|
| Research | Information gathering, summarization |
| Analysis | Data analysis, insight generation |
| Content | Document creation, communication drafts |
| Support | Customer inquiries, internal helpdesk |
| Coding | Code generation, review, debugging |
| Operations | Monitoring, alerting, remediation |

---

## Risk Mitigation

### Common Automation Risks
| Risk | Mitigation |
|------|------------|
| Scope creep | Fixed scope per phase, change control |
| Integration failures | Thorough API testing, fallback procedures |
| Data quality | Input validation, exception handling |
| User adoption | Change management, training, champions |
| Maintenance burden | Documentation, COE ownership |

### Agent Safety Controls
| Control | Implementation |
|---------|----------------|
| Output filtering | Content moderation, format validation |
| Action limits | Scope restrictions, approval gates |
| Rate limiting | Request throttling, cost controls |
| Audit logging | Complete action history |
| Human escalation | Confidence thresholds, sensitive triggers |

---

## Success Metrics

### Automation Metrics
| Metric | Target |
|--------|--------|
| Process time reduction | >70% |
| Error rate reduction | >90% |
| Cost per transaction | >50% reduction |
| Employee satisfaction | Increase |
| Automation coverage | % of eligible processes |

### Agent Metrics
| Metric | Target |
|--------|--------|
| Task completion rate | >95% |
| Accuracy | >98% |
| Response time | <X seconds |
| Escalation rate | <5% |
| User satisfaction | >4.0/5.0 |

---

## References

See `references/` folder for:
- Automation platform comparison
- Agent architecture examples
- ROI calculation templates
- Implementation checklists
