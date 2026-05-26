---
name: enterprise-integration
description: Enterprise systems integration knowledge for consulting engagements. Use when working on ERP/HIS/LMS integration, API development, system architecture design, migration planning, or interoperability solutions. Covers integration patterns, platform selection, and implementation approaches.
---

# Enterprise Systems Integration Skill

## Overview

Provides specialized knowledge for enterprise integration engagements including architecture design, API strategy, platform selection, and migration planning across ERP, HIS, LMS, and other enterprise systems.

---

## Integration Assessment Framework

### System Inventory Template
| System | Type | Vendor | Data | Integrations | Priority |
|--------|------|--------|------|--------------|----------|
| [Name] | ERP/CRM/etc | [Vendor] | [Key entities] | [Count] | H/M/L |

### Integration Health Scorecard
| Dimension | Score (1-5) | Assessment |
|-----------|-------------|------------|
| Architecture | - | Pattern consistency |
| Performance | - | Latency, throughput |
| Reliability | - | Uptime, error rates |
| Security | - | Auth, encryption |
| Maintainability | - | Documentation, complexity |
| Scalability | - | Growth capacity |

### Technical Debt Assessment
```
Debt Categories:
├── Point-to-Point (count, complexity)
├── Legacy Protocols (FTP, SOAP-only)
├── Custom Code (maintenance burden)
├── Documentation Gaps (undocumented)
└── Security Issues (outdated auth)

Remediation Priority = Impact × Effort × Risk
```

---

## Integration Patterns

### Point-to-Point
```
┌────────┐         ┌────────┐
│System A├────────►│System B│
└────────┘         └────────┘
```
- **Use when:** Few integrations, simple requirements
- **Avoid when:** >5 systems, complex transformations

### Hub-and-Spoke (ESB)
```
              ┌────────┐
              │System A│
              └────┬───┘
                   │
┌────────┐    ┌────┴────┐    ┌────────┐
│System B├───►│   Hub   │◄───┤System C│
└────────┘    └────┬────┘    └────────┘
                   │
              ┌────┴───┐
              │System D│
              └────────┘
```
- **Use when:** Central orchestration, transformation needed
- **Platform examples:** MuleSoft, Boomi, TIBCO

### Event-Driven (Event Bus)
```
┌────────┐     ┌────────────────┐     ┌────────┐
│Producer├────►│   Event Bus    │◄────┤Consumer│
└────────┘     │   (Kafka/SNS)  │     └────────┘
               └────────────────┘
```
- **Use when:** Real-time, loose coupling, high volume
- **Platform examples:** Kafka, AWS EventBridge, Azure Event Grid

### API Gateway
```
┌────────┐     ┌─────────────┐     ┌────────┐
│External├────►│ API Gateway ├────►│Backend │
│Client  │     │ (Auth/Rate) │     │Services│
└────────┘     └─────────────┘     └────────┘
```
- **Use when:** External access, security, throttling needed
- **Platform examples:** Apigee, Kong, AWS API Gateway

---

## API Design Standards

### RESTful API Guidelines
```
Resource Naming:
GET    /api/v1/customers           # List
GET    /api/v1/customers/{id}      # Read
POST   /api/v1/customers           # Create
PUT    /api/v1/customers/{id}      # Update (full)
PATCH  /api/v1/customers/{id}      # Update (partial)
DELETE /api/v1/customers/{id}      # Delete

Response Codes:
200 OK           - Success
201 Created      - Resource created
400 Bad Request  - Client error
401 Unauthorized - Auth required
403 Forbidden    - No permission
404 Not Found    - Resource missing
500 Server Error - Server issue
```

### API Versioning Strategies
| Strategy | Example | Pros | Cons |
|----------|---------|------|------|
| URL Path | /v1/resource | Clear, cacheable | URL changes |
| Header | X-API-Version: 1 | Clean URLs | Hidden |
| Query | ?version=1 | Flexible | Caching issues |

### API Documentation Template
```yaml
API Specification:
  Name: [API Name]
  Version: [v1.0]
  Base URL: [https://api.example.com]

Endpoints:
  - Path: /resource
    Method: GET
    Description: [Purpose]
    Request:
      Headers: [Required headers]
      Parameters: [Query/Path params]
    Response:
      Success: [200 response schema]
      Errors: [Error codes and messages]
    Authentication: [OAuth/API Key]
    Rate Limit: [Requests per minute]
```

---

## Data Integration Patterns

### ETL vs ELT
| Aspect | ETL | ELT |
|--------|-----|-----|
| Transform location | Middleware | Target system |
| Best for | Structured, small-medium | Large volumes, cloud |
| Tools | Informatica, Talend | dbt, Snowflake |
| Flexibility | Pre-defined transforms | On-demand transforms |

### Data Sync Patterns
| Pattern | Use Case | Latency |
|---------|----------|---------|
| Batch | Reporting, non-critical | Hours/Daily |
| Micro-batch | Near-real-time | Minutes |
| Real-time | Critical transactions | Seconds |
| Event-driven | State changes | Milliseconds |

### Data Mapping Template
| Source | Source Field | Target | Target Field | Transform | Notes |
|--------|--------------|--------|--------------|-----------|-------|
| [System] | [Field] | [System] | [Field] | [Logic] | [Notes] |

---

## Industry-Specific Integration

### Healthcare (HL7/FHIR)
```
HL7 v2.x Message Types:
├── ADT (Admit/Discharge/Transfer)
├── ORM (Orders)
├── ORU (Results)
├── SIU (Scheduling)
└── MDM (Documents)

FHIR Resources:
├── Patient, Practitioner, Organization
├── Encounter, Appointment
├── Observation, DiagnosticReport
├── MedicationRequest, Procedure
└── Claim, Coverage
```

### Education (LTI/SIS)
```
LTI (Learning Tools Interoperability):
├── LTI 1.3 (current standard)
├── Deep Linking
├── Names and Roles
├── Assignment and Grades
└── Proctoring Services

SIS Integration:
├── Student records sync
├── Enrollment updates
├── Grade passback
└── Identity federation
```

### Enterprise (ERP/CRM)
```
Common ERP Integrations:
├── Financial (GL, AP, AR)
├── HR (Employee, Payroll)
├── Supply Chain (Inventory, PO)
├── Manufacturing (BOM, Work Orders)
└── Sales (Orders, Quotes)

CRM Integrations:
├── Lead/Contact sync
├── Opportunity management
├── Activity logging
├── Quote-to-Cash
└── Customer 360
```

---

## Migration Planning

### Migration Approaches
| Approach | Description | Risk | Duration |
|----------|-------------|------|----------|
| Big Bang | All at once | High | Short |
| Phased | Module by module | Medium | Medium |
| Parallel | Run both, validate | Low | Long |
| Strangler | Gradual replacement | Low | Long |

### Cutover Checklist
- [ ] Data migration validated
- [ ] Integration testing complete
- [ ] Performance testing passed
- [ ] Security review approved
- [ ] Rollback procedures documented
- [ ] Support team trained
- [ ] Stakeholders notified
- [ ] Go/No-Go criteria defined
- [ ] Monitoring dashboards ready
- [ ] Hypercare plan in place

### Data Migration Template
```
Migration Phases:
1. Assess (Data profiling, quality analysis)
2. Design (Mapping, transformation rules)
3. Build (ETL development, testing)
4. Validate (Reconciliation, UAT)
5. Execute (Cutover, verification)
6. Optimize (Performance tuning)
```

---

## Security Requirements

### Authentication Methods
| Method | Use Case | Security Level |
|--------|----------|----------------|
| API Key | Simple, internal | Low |
| OAuth 2.0 | Third-party, users | High |
| JWT | Stateless, microservices | Medium-High |
| mTLS | Service-to-service | High |
| SAML | Enterprise SSO | High |

### Security Checklist
- [ ] Authentication implemented
- [ ] Authorization (RBAC/ABAC) configured
- [ ] TLS 1.2+ enforced
- [ ] Sensitive data encrypted at rest
- [ ] API rate limiting enabled
- [ ] Input validation in place
- [ ] Logging and monitoring active
- [ ] Secrets management implemented
- [ ] Security scanning automated
- [ ] Penetration testing completed

---

## Platform Selection Criteria

### Evaluation Matrix
| Criterion | Weight | Platform A | Platform B |
|-----------|--------|------------|------------|
| Functionality | 25% | - | - |
| Scalability | 20% | - | - |
| Ease of Use | 15% | - | - |
| Cost (TCO) | 15% | - | - |
| Vendor Support | 10% | - | - |
| Security | 10% | - | - |
| Integration Ecosystem | 5% | - | - |

### Total Cost of Ownership
```
TCO = License + Implementation + Operations + Training + Exit Costs

Annual Costs:
├── License/Subscription
├── Infrastructure
├── Development/Maintenance
├── Support/Training
└── Hidden (Integration, Data, Change)
```

---

## Success Metrics

### Integration KPIs
| Metric | Target |
|--------|--------|
| Uptime | >99.9% |
| Latency (P95) | <500ms |
| Error rate | <0.1% |
| Throughput | Meet SLA |
| Time to deploy | <2 weeks |
| Integration reuse | >50% |

---

## References

See `references/` folder for:
- Platform comparison matrices
- API design templates
- Data mapping examples
- Migration checklists
