---
name: esi
description: Enterprise Systems Integration skills - ERP/HIS/LMS integration, API development
---

# ESI - Enterprise Systems Integration Skills

## Service Line Overview

**Code:** ESI
**Full Name:** Enterprise Systems Integration
**Fee Modifier:** 1.15
**Description:** ERP/HIS/LMS integration, API development, system architecture, migration planning

---

## Skills Index

| # | Skill | Command | Purpose |
|---|-------|---------|---------|
| 1 | Integration Assessment | `/esi-assess` | Evaluate current integration landscape |
| 2 | API Review | `/esi-api-review` | Audit existing APIs and interfaces |
| 3 | Architecture Review | `/esi-arch-review` | Assess system architecture |
| 4 | Migration Planning | `/esi-migration` | Plan system migrations |
| 5 | Data Mapping | `/esi-data-map` | Map data flows between systems |
| 6 | Integration Patterns | `/esi-patterns` | Recommend integration patterns |
| 7 | Vendor Evaluation | `/esi-vendor-eval` | Evaluate integration platforms/vendors |
| 8 | Cutover Planning | `/esi-cutover` | Plan go-live cutover activities |

---

## Skill 1: Integration Assessment

### Command: `/esi-assess`

### Purpose
Evaluate the current state of enterprise systems and integration landscape to identify gaps, risks, and optimization opportunities.

### Inputs Required
```yaml
organization_name: "Company Name"
assessment_scope: "full|department|specific_systems"
systems_in_scope:
  - name: "System Name"
    type: "ERP|CRM|HIS|LMS|WMS|TMS|Custom"
    vendor: "Vendor Name"
    version: "x.x"
    deployment: "on-premise|cloud|hybrid"
    users: 000
    criticality: "critical|high|medium|low"
current_integrations:
  - source: "System A"
    target: "System B"
    method: "API|file|database|manual"
    frequency: "real-time|hourly|daily|manual"
pain_points: ["Issue 1", "Issue 2"]
```

### Assessment Framework

#### Integration Maturity Model (5 Levels)

| Level | Name | Characteristics |
|-------|------|-----------------|
| 1 | Ad-hoc | Manual data transfer, no standards, inconsistent |
| 2 | Managed | Point-to-point integrations, some documentation |
| 3 | Defined | Integration patterns established, API standards |
| 4 | Measured | Centralized monitoring, SLAs, metrics tracked |
| 5 | Optimized | iPaaS/ESB, automated governance, self-service |

#### Assessment Dimensions

1. **Technical Architecture**
   - System inventory completeness
   - Integration topology (point-to-point vs hub)
   - Protocol diversity (REST, SOAP, SFTP, etc.)
   - Data format consistency

2. **Data Quality**
   - Master data management
   - Data consistency across systems
   - Duplicate detection
   - Data governance

3. **Security**
   - Authentication mechanisms
   - Authorization controls
   - Encryption (transit/rest)
   - Audit logging

4. **Operations**
   - Monitoring capabilities
   - Error handling
   - Recovery procedures
   - SLA compliance

5. **Governance**
   - Integration standards
   - Change management
   - Documentation
   - Ownership model

### Output: Integration Assessment Report

```markdown
# Integration Assessment Report
## [Organization Name]
### Assessment Date: [Date]

## Executive Summary
[High-level findings and recommendations]

## Integration Maturity Score
**Overall Maturity Level:** [1-5] - [Level Name]

| Dimension | Score (1-5) | Key Finding |
|-----------|-------------|-------------|
| Technical Architecture | X.X | [Finding] |
| Data Quality | X.X | [Finding] |
| Security | X.X | [Finding] |
| Operations | X.X | [Finding] |
| Governance | X.X | [Finding] |

## System Landscape

### Systems Inventory
| System | Type | Vendor | Criticality | Integration Count |
|--------|------|--------|-------------|-------------------|
| [Name] | [Type] | [Vendor] | [Crit] | [Count] |

### Integration Map
[Visual representation of system integrations]

## Gap Analysis

### Critical Gaps
| Gap | Impact | Urgency | Remediation |
|-----|--------|---------|-------------|
| [Gap] | [Impact] | [Urgency] | [Action] |

### Technical Debt
| Item | System | Risk Level | Estimated Effort |
|------|--------|------------|------------------|
| [Item] | [System] | [Risk] | [Days] |

## Recommendations

### Immediate (0-3 months)
1. [Recommendation]

### Short-term (3-6 months)
1. [Recommendation]

### Long-term (6-12 months)
1. [Recommendation]

## Roadmap
[Phased approach to integration modernization]
```

---

## Skill 2: API Review

### Command: `/esi-api-review`

### Purpose
Comprehensive audit of existing APIs including design, security, performance, and documentation quality.

### Inputs Required
```yaml
api_inventory:
  - name: "API Name"
    type: "REST|SOAP|GraphQL|gRPC"
    version: "v1.0"
    endpoint: "/api/v1/resource"
    authentication: "OAuth2|API-Key|Basic|JWT|None"
    documentation: "OpenAPI|WSDL|None"
    consumers: ["System A", "System B"]
    avg_calls_per_day: 10000
    avg_response_time_ms: 200
review_focus: "security|performance|design|all"
```

### API Assessment Criteria

#### 1. Design Quality (REST APIs)

| Criterion | Best Practice | Weight |
|-----------|---------------|--------|
| Resource Naming | Nouns, plural, lowercase | 10% |
| HTTP Methods | Proper use of GET/POST/PUT/DELETE | 15% |
| Status Codes | Appropriate HTTP codes | 10% |
| Versioning | URL or header versioning | 10% |
| Pagination | Consistent pagination pattern | 10% |
| Filtering/Sorting | Query parameter standards | 10% |
| Error Handling | Consistent error response format | 15% |
| HATEOAS | Hypermedia links (optional) | 5% |
| Idempotency | Safe retry behavior | 15% |

#### 2. Security Assessment

| Check | Description | Severity |
|-------|-------------|----------|
| Authentication | Valid auth mechanism | Critical |
| Authorization | Role-based access control | Critical |
| Input Validation | Sanitization, type checking | High |
| Rate Limiting | Throttling implemented | High |
| TLS/SSL | HTTPS only, TLS 1.2+ | Critical |
| Sensitive Data | No PII in URLs/logs | Critical |
| CORS | Proper CORS configuration | Medium |
| API Keys | Key rotation, not in code | High |

#### 3. Performance Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| Response Time (P50) | < 200ms | Average response |
| Response Time (P95) | < 500ms | 95th percentile |
| Response Time (P99) | < 1000ms | 99th percentile |
| Availability | > 99.9% | Uptime percentage |
| Error Rate | < 0.1% | 4xx + 5xx responses |
| Throughput | Varies | Requests/second capacity |

#### 4. Documentation Quality

| Element | Required | Score |
|---------|----------|-------|
| OpenAPI/Swagger Spec | Yes | 20% |
| Authentication Guide | Yes | 15% |
| Error Code Reference | Yes | 15% |
| Example Requests | Yes | 15% |
| Example Responses | Yes | 15% |
| Rate Limit Info | Yes | 10% |
| Changelog | Yes | 10% |

### Output: API Audit Report

```markdown
# API Audit Report
## [Organization Name]
### Audit Date: [Date]

## Executive Summary
- APIs Reviewed: [Count]
- Overall Health Score: [X/100]
- Critical Issues: [Count]
- High Priority: [Count]

## API Portfolio Overview

| API | Type | Version | Health Score | Status |
|-----|------|---------|--------------|--------|
| [Name] | REST | v2.1 | 85/100 | Healthy |

## Detailed Findings

### API: [API Name]

#### Design Quality: [X/100]
| Criterion | Score | Finding |
|-----------|-------|---------|
| [Criterion] | [Score] | [Finding] |

#### Security Assessment: [Pass/Fail]
| Check | Status | Finding |
|-------|--------|---------|
| Authentication | [Pass/Fail] | [Details] |

#### Performance: [X/100]
| Metric | Current | Target | Status |
|--------|---------|--------|--------|
| P50 Response | [X]ms | 200ms | [Met/Not Met] |

#### Documentation: [X/100]
| Element | Status | Notes |
|---------|--------|-------|
| OpenAPI Spec | [Yes/No] | [Notes] |

## Recommendations by Priority

### Critical (Immediate)
1. [Security issue]

### High (Within 30 days)
1. [Performance issue]

### Medium (Within 90 days)
1. [Design improvement]

## API Governance Recommendations
[Recommendations for API standards and governance]
```

---

## Skill 3: Architecture Review

### Command: `/esi-arch-review`

### Purpose
Assess enterprise system architecture for scalability, resilience, security, and alignment with business needs.

### Inputs Required
```yaml
architecture_scope: "enterprise|domain|application"
architecture_documentation:
  - type: "context|container|component|deployment"
    available: true|false
technology_stack:
  frontend: ["React", "Angular"]
  backend: ["Java", "Node.js", ".NET"]
  database: ["PostgreSQL", "MongoDB", "Oracle"]
  messaging: ["Kafka", "RabbitMQ", "Azure Service Bus"]
  integration: ["MuleSoft", "Azure APIM", "Custom"]
deployment_model: "on-premise|cloud|hybrid"
cloud_provider: "AWS|Azure|GCP|None"
non_functional_requirements:
  availability: "99.9%"
  response_time: "< 500ms"
  data_retention: "7 years"
  concurrent_users: 10000
```

### Architecture Assessment Framework

#### 1. C4 Model Review

| Level | Diagram | Assessment Focus |
|-------|---------|------------------|
| Context | System Context | External actors, system boundaries |
| Container | Container | Applications, databases, services |
| Component | Component | Internal structure of containers |
| Code | Class/Sequence | Implementation patterns |

#### 2. Quality Attributes (ISO 25010)

| Attribute | Sub-characteristics | Weight |
|-----------|---------------------|--------|
| **Performance** | Time behavior, Resource utilization | 15% |
| **Reliability** | Maturity, Availability, Fault tolerance | 20% |
| **Security** | Confidentiality, Integrity, Authentication | 20% |
| **Maintainability** | Modularity, Reusability, Analyzability | 15% |
| **Scalability** | Horizontal, Vertical, Elasticity | 15% |
| **Compatibility** | Interoperability, Co-existence | 10% |
| **Portability** | Adaptability, Installability | 5% |

#### 3. Architecture Patterns Assessment

| Pattern | When to Use | Assessment Criteria |
|---------|-------------|---------------------|
| Monolith | Simple apps, small teams | Deployment complexity, coupling |
| Microservices | Complex domains, scaling needs | Service boundaries, data ownership |
| Event-Driven | Async processing, decoupling | Event design, eventual consistency |
| Serverless | Variable workloads, cost optimization | Cold starts, vendor lock-in |
| Hybrid | Migration, gradual modernization | Integration complexity, consistency |

#### 4. Technical Debt Categories

| Category | Examples | Risk Level |
|----------|----------|------------|
| Architectural | Wrong patterns, over-engineering | High |
| Code | Duplication, complexity | Medium |
| Infrastructure | Outdated versions, manual processes | High |
| Documentation | Missing, outdated docs | Medium |
| Testing | Low coverage, manual testing | Medium |

### Output: Architecture Assessment Report

```markdown
# Architecture Assessment Report
## [Organization/System Name]
### Assessment Date: [Date]

## Executive Summary
**Architecture Health Score:** [X/100]
**Primary Concern:** [Key finding]
**Recommendation:** [Main recommendation]

## Architecture Overview

### Current State
[Description of current architecture with diagrams]

### C4 Diagrams
- Context Diagram: [Available/Missing]
- Container Diagram: [Available/Missing]
- Component Diagram: [Available/Missing]

## Quality Attribute Analysis

| Attribute | Score | Assessment | Risk |
|-----------|-------|------------|------|
| Performance | X/10 | [Finding] | [H/M/L] |
| Reliability | X/10 | [Finding] | [H/M/L] |
| Security | X/10 | [Finding] | [H/M/L] |
| Maintainability | X/10 | [Finding] | [H/M/L] |
| Scalability | X/10 | [Finding] | [H/M/L] |

## Pattern Assessment

### Current Patterns
| Pattern | Implementation | Fitness Score |
|---------|----------------|---------------|
| [Pattern] | [How used] | [X/10] |

### Recommended Patterns
| Current | Recommended | Rationale |
|---------|-------------|-----------|
| [Current] | [Target] | [Why] |

## Technical Debt Register

| ID | Category | Description | Impact | Effort | Priority |
|----|----------|-------------|--------|--------|----------|
| TD-001 | [Cat] | [Desc] | [H/M/L] | [Days] | [1-5] |

## Recommendations

### Quick Wins (< 1 month)
1. [Recommendation]

### Strategic Improvements (1-6 months)
1. [Recommendation]

### Transformational (6-18 months)
1. [Recommendation]

## Target Architecture
[Vision for future state with diagrams]
```

---

## Skill 4: Migration Planning

### Command: `/esi-migration`

### Purpose
Plan and structure system migration projects including legacy modernization, cloud migration, and platform changes.

### Inputs Required
```yaml
migration_type: "cloud|platform|version|consolidation|modernization"
source_system:
  name: "Current System"
  type: "ERP|CRM|Custom|Database"
  vendor: "Vendor Name"
  version: "x.x"
  data_volume_gb: 500
  user_count: 1000
  integrations: 25
target_system:
  name: "Target System"
  type: "Same|Different"
  vendor: "Vendor Name"
  version: "x.x"
  deployment: "cloud|on-premise|hybrid"
constraints:
  max_downtime_hours: 4
  budget: 500000
  timeline_months: 12
  compliance: ["GDPR", "PCI-DSS"]
```

### Migration Strategy Framework

#### Migration Approaches (6 Rs)

| Strategy | Description | When to Use | Risk |
|----------|-------------|-------------|------|
| **Rehost** | Lift-and-shift | Quick wins, no changes needed | Low |
| **Replatform** | Lift-tinker-shift | Minor optimization, managed services | Medium |
| **Refactor** | Re-architect | Major improvements, cloud-native | High |
| **Repurchase** | Replace with SaaS | COTS available, build vs buy | Medium |
| **Retire** | Decommission | No longer needed | Low |
| **Retain** | Keep as-is | Too complex/risky to migrate | Low |

#### Migration Phases

```
Phase 1: Assess (4-8 weeks)
├── Application discovery
├── Dependency mapping
├── Data profiling
├── Risk assessment
└── Strategy selection

Phase 2: Mobilize (4-6 weeks)
├── Team formation
├── Tooling setup
├── Environment provisioning
├── Training
└── Pilot selection

Phase 3: Migrate (Variable)
├── Wave planning
├── Data migration
├── Application migration
├── Integration testing
└── Performance testing

Phase 4: Optimize (Ongoing)
├── Performance tuning
├── Cost optimization
├── Security hardening
└── Operational excellence
```

#### Data Migration Approach

| Approach | Description | Downtime | Complexity |
|----------|-------------|----------|------------|
| Big Bang | All at once | High | Low |
| Phased | Incremental waves | Medium | Medium |
| Parallel Run | Dual operation | None | High |
| Hybrid | Combination | Low | Medium |

### Output: Migration Plan

```markdown
# Migration Plan
## [Project Name]
### Version: 1.0 | Date: [Date]

## Executive Summary
**Migration Type:** [Type]
**Source:** [System] → **Target:** [System]
**Timeline:** [X months]
**Budget:** $[Amount]
**Strategy:** [Chosen R]

## Scope

### In Scope
- [Item 1]
- [Item 2]

### Out of Scope
- [Item 1]

## Current State Analysis

### Source System Profile
| Attribute | Value |
|-----------|-------|
| Data Volume | [X] GB |
| Users | [X] |
| Integrations | [X] |
| Customizations | [X] |

### Dependency Map
[Visual representation of dependencies]

## Migration Strategy

### Approach: [Strategy Name]
**Rationale:** [Why this approach]

### Wave Plan
| Wave | Systems | Users | Data (GB) | Timeline |
|------|---------|-------|-----------|----------|
| 1 | [Systems] | [Users] | [GB] | [Dates] |
| 2 | [Systems] | [Users] | [GB] | [Dates] |

## Data Migration

### Approach: [Big Bang/Phased/Parallel]

### Data Categories
| Category | Volume | Migration Method | Validation |
|----------|--------|------------------|------------|
| Master Data | [GB] | [Method] | [Validation] |
| Transactional | [GB] | [Method] | [Validation] |
| Historical | [GB] | [Method] | [Validation] |

### Data Quality Rules
| Rule | Source Field | Validation | Action on Fail |
|------|--------------|------------|----------------|
| [Rule] | [Field] | [Validation] | [Action] |

## Cutover Plan
[Detailed cutover activities - see /esi-cutover]

## Risk Register
| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| [Risk] | [H/M/L] | [H/M/L] | [Mitigation] |

## Resource Plan
| Role | Count | Duration | Source |
|------|-------|----------|--------|
| Project Manager | 1 | Full | Internal |
| Technical Lead | 1 | Full | Internal |
| Developers | [X] | [Duration] | [Source] |

## Timeline
[Gantt chart or milestone view]

## Success Criteria
| Criterion | Target | Measurement |
|-----------|--------|-------------|
| Data Accuracy | > 99.9% | Reconciliation |
| Downtime | < [X] hours | Clock time |
| Performance | Same or better | Benchmark |
```

---

## Skill 5: Data Mapping

### Command: `/esi-data-map`

### Purpose
Document and analyze data flows between systems including field-level mappings, transformations, and data lineage.

### Inputs Required
```yaml
mapping_scope: "integration|migration|audit"
source_system:
  name: "Source System"
  schema_available: true|false
  data_dictionary: true|false
target_system:
  name: "Target System"
  schema_available: true|false
entities_in_scope:
  - name: "Customer"
    source_table: "CUST_MASTER"
    target_table: "customers"
    record_count: 50000
transformation_complexity: "simple|moderate|complex"
```

### Data Mapping Framework

#### Mapping Types

| Type | Description | Example |
|------|-------------|---------|
| Direct | 1:1 field mapping | source.name → target.name |
| Transformation | Apply function | UPPER(source.name) → target.name |
| Concatenation | Combine fields | source.first + source.last → target.fullname |
| Split | Separate field | source.address → target.street, city, zip |
| Lookup | Reference table | source.code → lookup → target.description |
| Default | Fixed value | NULL → target.status = 'ACTIVE' |
| Conditional | Business rules | IF source.type = 'A' THEN... |
| Derived | Calculated | source.qty * source.price → target.total |

#### Data Quality Dimensions

| Dimension | Description | Measurement |
|-----------|-------------|-------------|
| Completeness | All required data present | % non-null |
| Accuracy | Data is correct | % matching reference |
| Consistency | Same across systems | % matching |
| Timeliness | Data is current | Age of data |
| Validity | Conforms to rules | % passing validation |
| Uniqueness | No duplicates | % unique records |

### Output: Data Mapping Specification

```markdown
# Data Mapping Specification
## [Integration/Migration Name]
### Version: 1.0 | Date: [Date]

## Overview
**Source:** [System Name]
**Target:** [System Name]
**Purpose:** [Integration/Migration]
**Entities:** [Count]

## Entity Mappings

### Entity: [Entity Name]

#### Source-Target Overview
| Attribute | Source | Target |
|-----------|--------|--------|
| Table/Object | [Name] | [Name] |
| Record Count | [Count] | [Expected] |
| Key Field(s) | [Fields] | [Fields] |

#### Field Mapping

| # | Source Field | Source Type | Target Field | Target Type | Mapping Type | Transformation | Required | Notes |
|---|--------------|-------------|--------------|-------------|--------------|----------------|----------|-------|
| 1 | customer_id | VARCHAR(20) | id | UUID | Transform | UUID_GENERATE(customer_id) | Y | PK |
| 2 | cust_name | VARCHAR(100) | name | VARCHAR(255) | Direct | - | Y | - |
| 3 | addr_line1 | VARCHAR(50) | street | VARCHAR(100) | Direct | - | N | - |
| 4 | - | - | created_at | TIMESTAMP | Default | CURRENT_TIMESTAMP | Y | System |

#### Transformation Rules

**TR-001: [Rule Name]**
- Source: `[field]`
- Target: `[field]`
- Logic:
```
[Transformation logic/pseudocode]
```
- Example:
  - Input: [example input]
  - Output: [example output]

#### Lookup Tables

| Lookup Name | Source Value | Target Value |
|-------------|--------------|--------------|
| status_map | 'A' | 'ACTIVE' |
| status_map | 'I' | 'INACTIVE' |

#### Business Rules

| Rule ID | Description | Logic |
|---------|-------------|-------|
| BR-001 | [Description] | [Logic] |

## Data Quality Rules

### Pre-Migration Validation
| Rule | Field(s) | Validation | Action |
|------|----------|------------|--------|
| DQ-001 | customer_id | NOT NULL | Reject |
| DQ-002 | email | Valid format | Default |

### Post-Migration Reconciliation
| Check | Query/Method | Expected |
|-------|--------------|----------|
| Record Count | COUNT(*) | Match ± 0 |
| Sum Check | SUM(amount) | Match ± 0.01 |

## Data Lineage
[Visual lineage diagram]

## Change Log
| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | [Date] | [Name] | Initial |
```

---

## Skill 6: Integration Patterns

### Command: `/esi-patterns`

### Purpose
Recommend and design appropriate integration patterns based on requirements, constraints, and industry best practices.

### Inputs Required
```yaml
integration_requirement:
  source: "System A"
  target: "System B"
  data_type: "master|transactional|reference|event"
  volume: "low|medium|high|very_high"
  frequency: "real-time|near-real-time|batch|on-demand"
  direction: "unidirectional|bidirectional"
constraints:
  latency_requirement: "< 1s|< 1min|< 1hr|flexible"
  availability: "99.9%|99.5%|99%"
  ordering: "required|preferred|not_required"
  exactly_once: true|false
existing_infrastructure:
  esb: "MuleSoft|Azure APIM|None"
  messaging: "Kafka|RabbitMQ|Azure Service Bus|None"
  api_gateway: "Kong|Apigee|None"
```

### Enterprise Integration Patterns (EIP) Catalog

#### Messaging Patterns

| Pattern | Description | Use Case |
|---------|-------------|----------|
| Message Channel | Communication pipe | Any message exchange |
| Point-to-Point | Single consumer | Commands, requests |
| Publish-Subscribe | Multiple consumers | Events, notifications |
| Request-Reply | Synchronous call | API calls, queries |
| Message Router | Conditional routing | Dynamic destinations |
| Message Filter | Selective processing | Conditional handling |
| Splitter | Divide message | Batch processing |
| Aggregator | Combine messages | Correlation |
| Content Enricher | Add data | Lookup augmentation |
| Content Filter | Remove data | Security, simplification |

#### Integration Styles

| Style | Description | Pros | Cons |
|-------|-------------|------|------|
| **File Transfer** | Shared files | Simple, decoupled | Latency, no standards |
| **Shared Database** | Common DB | Simple, consistent | Coupling, scaling |
| **Remote Procedure** | API calls | Real-time, standards | Tight coupling |
| **Messaging** | Async messages | Decoupled, reliable | Complexity |

#### API Patterns

| Pattern | Description | Use Case |
|---------|-------------|----------|
| REST | Resource-based HTTP | CRUD operations |
| GraphQL | Query language | Flexible queries |
| gRPC | Binary RPC | High performance |
| WebSocket | Bidirectional | Real-time updates |
| Webhook | Push notifications | Event callbacks |

### Output: Integration Pattern Recommendation

```markdown
# Integration Pattern Recommendation
## [Integration Name]
### Date: [Date]

## Requirements Summary
| Attribute | Requirement |
|-----------|-------------|
| Source | [System] |
| Target | [System] |
| Data Type | [Type] |
| Volume | [Volume] |
| Frequency | [Frequency] |
| Direction | [Direction] |
| Latency | [Requirement] |

## Recommended Pattern

### Primary Pattern: [Pattern Name]

**Pattern Category:** [Messaging/API/File/Database]

**Rationale:**
[Why this pattern fits the requirements]

### Architecture Diagram
```
[ASCII or reference to diagram]
```

### Pattern Components

| Component | Technology | Purpose |
|-----------|------------|---------|
| Producer | [Tech] | [Purpose] |
| Channel | [Tech] | [Purpose] |
| Consumer | [Tech] | [Purpose] |

### Implementation Specification

#### Message/API Design
```json
{
  "pattern": "[pattern]",
  "schema": {
    // Schema definition
  }
}
```

#### Error Handling
| Scenario | Handling | Retry Policy |
|----------|----------|--------------|
| Timeout | [Action] | [Policy] |
| Invalid Data | [Action] | [Policy] |
| System Down | [Action] | [Policy] |

#### Monitoring Points
| Metric | Threshold | Alert |
|--------|-----------|-------|
| Latency | [ms] | [Action] |
| Error Rate | [%] | [Action] |
| Queue Depth | [count] | [Action] |

## Alternative Patterns Considered

| Pattern | Pros | Cons | Why Not |
|---------|------|------|---------|
| [Alt 1] | [Pros] | [Cons] | [Reason] |
| [Alt 2] | [Pros] | [Cons] | [Reason] |

## Implementation Roadmap

### Phase 1: Foundation
- [ ] Infrastructure setup
- [ ] Security configuration

### Phase 2: Development
- [ ] Producer implementation
- [ ] Consumer implementation
- [ ] Error handling

### Phase 3: Testing
- [ ] Integration testing
- [ ] Performance testing
- [ ] Failover testing

### Phase 4: Deployment
- [ ] Staged rollout
- [ ] Monitoring setup
- [ ] Documentation
```

---

## Skill 7: Vendor Evaluation

### Command: `/esi-vendor-eval`

### Purpose
Evaluate and compare integration platform vendors (iPaaS, ESB, API Management) for enterprise needs.

### Inputs Required
```yaml
evaluation_scope: "iPaaS|ESB|API-Management|Full-Stack"
requirements:
  must_have:
    - "On-premise deployment option"
    - "SAP integration"
  nice_to_have:
    - "Low-code development"
    - "AI/ML capabilities"
  constraints:
    budget_annual: 200000
    deployment: "cloud|on-premise|hybrid"
    region: "MENA|EU|US"
current_landscape:
  existing_tools: ["Tool1", "Tool2"]
  skill_availability: "strong|moderate|limited"
vendors_to_evaluate:
  - "MuleSoft"
  - "Dell Boomi"
  - "Microsoft Azure Integration"
  - "Workato"
```

### Vendor Evaluation Framework

#### Evaluation Categories (Weighted)

| Category | Weight | Description |
|----------|--------|-------------|
| Functional Capabilities | 25% | Features, connectors, protocols |
| Technical Architecture | 20% | Scalability, performance, deployment |
| Ease of Use | 15% | Development experience, learning curve |
| Security & Compliance | 15% | Certifications, encryption, access control |
| Vendor Viability | 10% | Market position, financials, roadmap |
| Total Cost of Ownership | 10% | Licensing, infrastructure, personnel |
| Support & Ecosystem | 5% | Documentation, community, partners |

#### Functional Capabilities Criteria

| Criterion | Description | Max Score |
|-----------|-------------|-----------|
| Pre-built Connectors | Number and quality of connectors | 10 |
| Custom Development | SDK, APIs, extensibility | 10 |
| Data Transformation | Mapping, transformation capabilities | 10 |
| Process Orchestration | Workflow, BPM capabilities | 10 |
| Event Processing | Real-time, streaming support | 10 |
| API Management | Full lifecycle management | 10 |
| B2B/EDI | EDI, B2B gateway capabilities | 10 |
| Master Data | MDM capabilities | 10 |

#### Major iPaaS Vendors Reference

| Vendor | Strength | Consideration |
|--------|----------|---------------|
| MuleSoft | Enterprise features, Salesforce | Cost, complexity |
| Dell Boomi | Ease of use, MDM | Limited on-prem |
| Microsoft Azure | Microsoft ecosystem | Azure lock-in |
| Workato | Automation, low-code | Enterprise scale |
| Informatica | Data management | Learning curve |
| SnapLogic | AI, performance | Niche market |
| Celigo | NetSuite, e-commerce | SMB focus |
| Jitterbit | Speed, flexibility | Smaller ecosystem |

### Output: Vendor Evaluation Report

```markdown
# Integration Vendor Evaluation
## [Client Name]
### Evaluation Date: [Date]

## Executive Summary
**Recommended Vendor:** [Vendor Name]
**Runner-up:** [Vendor Name]
**Rationale:** [Summary rationale]

## Requirements Summary

### Must-Have Requirements
| # | Requirement | Weight |
|---|-------------|--------|
| 1 | [Requirement] | Critical |

### Nice-to-Have Requirements
| # | Requirement | Weight |
|---|-------------|--------|
| 1 | [Requirement] | High |

## Vendors Evaluated
1. [Vendor 1]
2. [Vendor 2]
3. [Vendor 3]

## Detailed Scoring

### Overall Scores
| Vendor | Functional | Technical | Ease of Use | Security | Viability | TCO | Support | **Total** |
|--------|------------|-----------|-------------|----------|-----------|-----|---------|-----------|
| [V1] | X.X | X.X | X.X | X.X | X.X | X.X | X.X | **X.X** |
| [V2] | X.X | X.X | X.X | X.X | X.X | X.X | X.X | **X.X** |

### Category Breakdown

#### Functional Capabilities
| Criterion | [V1] | [V2] | [V3] | Notes |
|-----------|------|------|------|-------|
| Connectors | X/10 | X/10 | X/10 | [Notes] |

#### Technical Architecture
| Criterion | [V1] | [V2] | [V3] | Notes |
|-----------|------|------|------|-------|
| Scalability | X/10 | X/10 | X/10 | [Notes] |

## Total Cost of Ownership (5-Year)

| Cost Component | [V1] | [V2] | [V3] |
|----------------|------|------|------|
| License (Year 1) | $XXX | $XXX | $XXX |
| License (Years 2-5) | $XXX | $XXX | $XXX |
| Implementation | $XXX | $XXX | $XXX |
| Infrastructure | $XXX | $XXX | $XXX |
| Training | $XXX | $XXX | $XXX |
| Support | $XXX | $XXX | $XXX |
| **Total 5-Year TCO** | **$XXX** | **$XXX** | **$XXX** |

## Strengths & Weaknesses

### [Vendor 1]
| Strengths | Weaknesses |
|-----------|------------|
| [Strength] | [Weakness] |

## Reference Checks
| Vendor | Reference | Industry | Feedback |
|--------|-----------|----------|----------|
| [V1] | [Company] | [Industry] | [Summary] |

## Recommendation

### Primary Recommendation: [Vendor Name]

**Rationale:**
1. [Reason 1]
2. [Reason 2]

**Implementation Considerations:**
- [Consideration 1]
- [Consideration 2]

### Alternative: [Vendor Name]
**When to Consider:**
- [Scenario]

## Next Steps
1. Proof of Concept with [Vendor]
2. Contract negotiation
3. Implementation planning
```

---

## Skill 8: Cutover Planning

### Command: `/esi-cutover`

### Purpose
Plan detailed go-live cutover activities for system migrations and integrations including rollback procedures.

### Inputs Required
```yaml
cutover_type: "big-bang|phased|parallel"
go_live_date: "2026-03-15"
systems_involved:
  - name: "System Name"
    role: "source|target|supporting"
    criticality: "critical|high|medium"
cutover_window:
  start: "Friday 22:00"
  end: "Monday 06:00"
  total_hours: 56
stakeholders:
  business_owner: "Name"
  it_lead: "Name"
  vendor_contacts: ["Name1", "Name2"]
rollback_triggers:
  - "Data reconciliation variance > 0.1%"
  - "Critical functionality failure"
```

### Cutover Planning Framework

#### Cutover Phases

| Phase | Duration | Activities |
|-------|----------|------------|
| Pre-Cutover | T-4 weeks | Rehearsal, checklist, communications |
| Freeze Period | T-1 week | Change freeze, final prep |
| Cutover Start | T-0 | Begin cutover activities |
| Data Migration | Variable | Extract, transform, load |
| Validation | 4-8 hours | Data and functional validation |
| Go/No-Go | 1 hour | Decision point |
| Go-Live | Variable | Enable production, user access |
| Hypercare | 1-2 weeks | Intensive support |

#### Go/No-Go Decision Framework

| Criterion | Weight | Pass Threshold |
|-----------|--------|----------------|
| Data Reconciliation | 30% | Variance < 0.01% |
| Critical Functions | 25% | 100% pass |
| Performance | 20% | Within 10% of baseline |
| Integration Health | 15% | All integrations active |
| Rollback Feasibility | 10% | < 4 hours to rollback |

### Output: Cutover Plan

```markdown
# Cutover Plan
## [Project Name]
### Version: 1.0 | Go-Live: [Date]

## Executive Summary
**Go-Live Date:** [Date]
**Cutover Window:** [Start] to [End] ([X] hours)
**Cutover Type:** [Big-Bang/Phased/Parallel]
**Risk Level:** [High/Medium/Low]

## Cutover Scope

### Systems
| System | Role | Owner | Contact |
|--------|------|-------|---------|
| [System] | [Role] | [Name] | [Phone/Email] |

### Data Scope
| Entity | Records | Migration Time | Validation |
|--------|---------|----------------|------------|
| [Entity] | [Count] | [Hours] | [Method] |

## Communication Plan

### Stakeholder Notifications
| When | Who | Method | Message |
|------|-----|--------|---------|
| T-2 weeks | All users | Email | Go-live announcement |
| T-1 week | Key users | Meeting | Final preparation |
| Go-live | All | Email/SMS | System live confirmation |

### War Room Setup
**Location:** [Physical/Virtual]
**Hours:** [Start] to [End]
**Access:** [Details]

## Detailed Cutover Schedule

### T-4 Weeks: Rehearsal
| Day | Activity | Owner | Duration |
|-----|----------|-------|----------|
| [Day] | Cutover rehearsal #1 | [Owner] | [Hours] |

### T-1 Week: Freeze & Final Prep
| Day | Activity | Owner | Duration |
|-----|----------|-------|----------|
| [Day] | Change freeze begins | [Owner] | - |
| [Day] | Final data backup | [Owner] | [Hours] |

### Cutover Weekend

#### Friday [Date]
| Time | Activity | Owner | Duration | Status |
|------|----------|-------|----------|--------|
| 22:00 | Cutover kickoff | PM | 15 min | |
| 22:15 | Disable source system access | [Owner] | 15 min | |
| 22:30 | Final data extract | [Owner] | 2 hrs | |
| 00:30 | Data transformation | [Owner] | 3 hrs | |

#### Saturday [Date]
| Time | Activity | Owner | Duration | Status |
|------|----------|-------|----------|--------|
| 03:30 | Data load - Batch 1 | [Owner] | 4 hrs | |
| 07:30 | Data load - Batch 2 | [Owner] | 4 hrs | |
| 11:30 | Data reconciliation | [Owner] | 3 hrs | |
| 14:30 | Functional testing | [Owner] | 4 hrs | |

#### Sunday [Date]
| Time | Activity | Owner | Duration | Status |
|------|----------|-------|----------|--------|
| 08:00 | Integration testing | [Owner] | 4 hrs | |
| 12:00 | Performance testing | [Owner] | 2 hrs | |
| 14:00 | **GO/NO-GO Decision** | Steering | 1 hr | |
| 15:00 | Enable user access | [Owner] | 1 hr | |
| 16:00 | Cutover complete | PM | - | |

## Validation Checklist

### Data Reconciliation
| Check | Source | Target | Variance | Status |
|-------|--------|--------|----------|--------|
| Record count - Customers | [X] | [X] | [%] | |
| Record count - Orders | [X] | [X] | [%] | |
| Sum - Order Value | $[X] | $[X] | [%] | |

### Functional Validation
| Test Case | Expected | Actual | Status |
|-----------|----------|--------|--------|
| TC-001: [Name] | [Expected] | | |
| TC-002: [Name] | [Expected] | | |

### Integration Validation
| Integration | Method | Status | Notes |
|-------------|--------|--------|-------|
| [System A ↔ B] | API call | | |

## Go/No-Go Criteria

### Decision Matrix
| Criterion | Weight | Threshold | Actual | Pass |
|-----------|--------|-----------|--------|------|
| Data Reconciliation | 30% | < 0.01% | | |
| Critical Functions | 25% | 100% | | |
| Performance | 20% | ± 10% | | |
| Integrations | 15% | 100% | | |
| Rollback Ready | 10% | Yes | | |
| **Total Score** | 100% | > 90% | | |

### Decision Authority
| Scenario | Decision | Authority |
|----------|----------|-----------|
| All criteria pass | GO | Project Manager |
| 1 criteria fails (non-critical) | GO with conditions | IT Director |
| Critical criteria fails | NO-GO | Steering Committee |

## Rollback Plan

### Rollback Triggers
- [ ] Data reconciliation variance > 0.1%
- [ ] Critical functionality failure
- [ ] Major integration failure
- [ ] Performance degradation > 50%
- [ ] Steering committee decision

### Rollback Procedure
| Step | Activity | Owner | Duration |
|------|----------|-------|----------|
| 1 | Disable target system access | [Owner] | 15 min |
| 2 | Restore source system backup | [Owner] | 2 hrs |
| 3 | Re-enable source system | [Owner] | 30 min |
| 4 | Validate source system | [Owner] | 1 hr |
| 5 | Notify stakeholders | PM | 15 min |
| **Total Rollback Time** | | | **~4 hrs** |

### Point of No Return
**Time:** [Sunday 12:00]
**Reason:** [Explain why rollback becomes impractical]

## Hypercare Plan

### Support Model (Weeks 1-2 Post Go-Live)
| Day | Support Hours | Team | Focus |
|-----|---------------|------|-------|
| Day 1-3 | 24/7 | Full team | Critical issues |
| Day 4-7 | 6:00-22:00 | Core team | High priority |
| Week 2 | Business hours | Reduced | All issues |

### Escalation Path
| Level | Response Time | Contact |
|-------|---------------|---------|
| L1 - Help Desk | 15 min | [Contact] |
| L2 - Application | 30 min | [Contact] |
| L3 - Technical | 1 hr | [Contact] |
| L4 - Vendor | Per SLA | [Contact] |

## Contacts

### War Room Contacts
| Role | Name | Phone | Email |
|------|------|-------|-------|
| Cutover Lead | [Name] | [Phone] | [Email] |
| Technical Lead | [Name] | [Phone] | [Email] |
| Business Lead | [Name] | [Phone] | [Email] |
| Vendor Contact | [Name] | [Phone] | [Email] |

## Appendices

### A. Pre-Cutover Checklist
- [ ] All development complete
- [ ] UAT signed off
- [ ] Production environment ready
- [ ] Backup verified
- [ ] Rollback tested
- [ ] Communication sent
- [ ] War room setup

### B. Post-Cutover Checklist
- [ ] All validations pass
- [ ] User access enabled
- [ ] Monitoring active
- [ ] Support team briefed
- [ ] Stakeholders notified
- [ ] Documentation updated
```

---

## Service Line Integration

### Fee Modifier
**ESI Base Modifier:** 1.15 (applied to standard rates)

### Typical Engagement Phases

| Phase | Duration | Deliverables |
|-------|----------|--------------|
| Assessment | 2-4 weeks | Integration Assessment, API Review |
| Design | 3-6 weeks | Architecture Review, Pattern Recommendations |
| Planning | 2-4 weeks | Migration Plan, Data Mapping |
| Execution | Variable | Implementation (per pattern) |
| Cutover | 1-2 weeks | Cutover Plan, Go-Live Support |

### Cross-Skill Workflows

```
Full Integration Modernization:
/esi-assess → /esi-api-review → /esi-arch-review →
/esi-patterns → /esi-vendor-eval → /esi-migration →
/esi-data-map → /esi-cutover

System Migration:
/esi-assess → /esi-arch-review → /esi-migration →
/esi-data-map → /esi-cutover

New Integration:
/esi-patterns → /esi-api-review → /esi-data-map

Platform Selection:
/esi-assess → /esi-vendor-eval → /esi-arch-review
```

### Integration with Other Service Lines

| Service Line | Integration Point |
|--------------|-------------------|
| DIG | Digital transformation requiring system modernization |
| AAI | Automation requiring system integration |
| COE | Data pipelines, BI system integration |
| HLT | HIS/EMR integration, HL7/FHIR |
| MAR | Port system integration (TOS, VTMIS) |
| EDU | LMS integration, student systems |

---

## Templates & Artifacts

All ESI deliverables should use standard Omega branding via:
- `/doc-gen` for document generation
- `assets/omega-branding.json` for styling
- `scripts/omega-document-generator.js` for automation

### Standard Artifacts by Skill

| Skill | Primary Artifact | Format |
|-------|------------------|--------|
| /esi-assess | Integration Assessment Report | DOCX/PDF |
| /esi-api-review | API Audit Report | DOCX/PDF |
| /esi-arch-review | Architecture Assessment | DOCX/PDF |
| /esi-migration | Migration Plan | DOCX/PDF |
| /esi-data-map | Data Mapping Specification | XLSX/DOCX |
| /esi-patterns | Pattern Recommendation | DOCX |
| /esi-vendor-eval | Vendor Evaluation Report | DOCX/PDF |
| /esi-cutover | Cutover Plan | DOCX/XLSX |
