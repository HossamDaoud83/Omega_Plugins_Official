---
name: coe
description: Competency Center Solutions skills - KPI frameworks, BI dashboards, data architecture
---

# Competency Center Solutions (COE) Service Line Skills

**Service Line Code:** COE
**Description:** Data architecture, KPI frameworks, BI dashboards, insight generation, data pipelines
**Version:** 1.0
**Last Updated:** 2026-02-02

---

## Service Line Overview

Competency Center Solutions helps organizations build data and analytics capabilities:
- KPI Framework Design
- Business Intelligence & Dashboards
- Data Architecture & Governance
- Analytics Center of Excellence
- Performance Management Systems

---

## Available Skills

| # | Skill | Command | Purpose |
|---|-------|---------|---------|
| 1 | KPI Framework Designer | `/coe-kpi` | Design MECE KPI framework |
| 2 | Dashboard Blueprint | `/coe-dashboard` | Design BI dashboard specifications |
| 3 | Data Architecture Review | `/coe-data-arch` | Review and recommend data architecture |
| 4 | COE Operating Model | `/coe-model` | Design Center of Excellence |
| 5 | Data Quality Assessment | `/coe-data-quality` | Assess data quality dimensions |
| 6 | Analytics Maturity Assessment | `/coe-analytics-maturity` | Assess analytics capabilities |
| 7 | Data Governance Framework | `/coe-data-gov` | Design data governance |
| 8 | Metric Dictionary Builder | `/coe-metrics` | Build standardized metrics |

---

## Skill 1: KPI Framework Designer (`/coe-kpi`)

### Purpose
Design comprehensive, MECE (Mutually Exclusive, Collectively Exhaustive) KPI frameworks.

### KPI Framework Principles

**SMART KPIs:**
| Principle | Description |
|-----------|-------------|
| **S**pecific | Clear, well-defined metric |
| **M**easurable | Quantifiable with available data |
| **A**chievable | Realistic targets |
| **R**elevant | Aligned to business objectives |
| **T**ime-bound | Defined measurement period |

### KPI Hierarchy

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           KPI HIERARCHY                                     │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  LEVEL 1: STRATEGIC KPIs (Executive/Board)                                  │
│  ──────────────────────────────────────────                                 │
│  • Revenue Growth, Profit Margin, Market Share, Customer Satisfaction       │
│                          │                                                  │
│                          ↓                                                  │
│  LEVEL 2: TACTICAL KPIs (Department/Function)                               │
│  ────────────────────────────────────────────                               │
│  • Sales Pipeline, Conversion Rate, Cost per Unit, NPS by Segment          │
│                          │                                                  │
│                          ↓                                                  │
│  LEVEL 3: OPERATIONAL KPIs (Team/Process)                                   │
│  ─────────────────────────────────────────                                  │
│  • Calls per Day, Processing Time, Error Rate, First Contact Resolution    │
│                          │                                                  │
│                          ↓                                                  │
│  LEVEL 4: LEADING INDICATORS                                                │
│  ───────────────────────────                                                │
│  • Website Visits, Email Opens, Training Completion, Pipeline Activity     │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Balanced Scorecard Framework

| Perspective | Focus | Sample KPIs |
|-------------|-------|-------------|
| **Financial** | Shareholder value | Revenue, Profit, ROI, Cash Flow |
| **Customer** | Customer satisfaction | NPS, Retention, CSAT, Market Share |
| **Process** | Operational excellence | Efficiency, Quality, Cycle Time |
| **Learning** | Growth capability | Training, Innovation, Employee Engagement |

### KPI Definition Template

```
═══════════════════════════════════════════════════════════════════════════════
KPI DEFINITION
═══════════════════════════════════════════════════════════════════════════════

KPI Name:           [Name]
KPI ID:             [KPI-XXX]
Category:           [Financial / Customer / Process / Learning]
Level:              [Strategic / Tactical / Operational]

DEFINITION:
─────────────────────────────────────────────────────────────────────────────
Description:        [What this KPI measures]
Business Question:  [What question does this answer?]
Formula:            [Numerator / Denominator × 100]

MEASUREMENT:
─────────────────────────────────────────────────────────────────────────────
Unit:               [%, $, #, days, etc.]
Data Source:        [System/database]
Frequency:          [Daily / Weekly / Monthly / Quarterly]
Owner:              [Role responsible]

TARGETS:
─────────────────────────────────────────────────────────────────────────────
│ Period    │ Target │ Stretch │ Minimum │
├───────────┼────────┼─────────┼─────────┤
│ Q1 2026   │ 85%    │ 90%     │ 75%     │
│ Q2 2026   │ 88%    │ 92%     │ 78%     │
│ Q3 2026   │ 90%    │ 95%     │ 80%     │
│ Q4 2026   │ 92%    │ 97%     │ 82%     │

THRESHOLDS:
─────────────────────────────────────────────────────────────────────────────
🟢 Green (On Target):    ≥ 90% of target
🟡 Yellow (At Risk):     70-89% of target
🔴 Red (Off Target):     < 70% of target

RELATED KPIs:
─────────────────────────────────────────────────────────────────────────────
• [Related KPI 1] - [Relationship]
• [Related KPI 2] - [Relationship]

═══════════════════════════════════════════════════════════════════════════════
```

### Output Format

```
═══════════════════════════════════════════════════════════════════════════════
KPI FRAMEWORK
Organization: [Name]
Date: [Date]
═══════════════════════════════════════════════════════════════════════════════

FRAMEWORK OVERVIEW:
─────────────────────────────────────────────────────────────────────────────
Total KPIs:         [N]
Strategic:          [N]
Tactical:           [N]
Operational:        [N]

STRATEGY MAP:
─────────────────────────────────────────────────────────────────────────────
┌─────────────────────────────────────────────────────────────────────────────┐
│ FINANCIAL        │ Revenue Growth │ Profit Margin │ Cost Efficiency │       │
├──────────────────┼────────────────┼───────────────┼─────────────────┼───────┤
│ CUSTOMER         │ NPS            │ Retention     │ Market Share    │       │
├──────────────────┼────────────────┼───────────────┼─────────────────┼───────┤
│ PROCESS          │ Cycle Time     │ Quality       │ Automation Rate │       │
├──────────────────┼────────────────┼───────────────┼─────────────────┼───────┤
│ LEARNING         │ Training       │ Innovation    │ Engagement      │       │
└─────────────────────────────────────────────────────────────────────────────┘

KPI CATALOG:
─────────────────────────────────────────────────────────────────────────────
│ ID      │ KPI Name            │ Category │ Level     │ Owner    │ Freq  │
├─────────┼─────────────────────┼──────────┼───────────┼──────────┼───────┤
│ KPI-001 │ Revenue Growth      │ Finance  │ Strategic │ CFO      │ Monthly│
│ KPI-002 │ Net Promoter Score  │ Customer │ Strategic │ CMO      │ Quarterly│
│ KPI-003 │ Process Cycle Time  │ Process  │ Tactical  │ COO      │ Weekly │
│ ...     │ ...                 │ ...      │ ...       │ ...      │ ...   │

═══════════════════════════════════════════════════════════════════════════════
```

---

## Skill 2: Dashboard Blueprint (`/coe-dashboard`)

### Purpose
Design BI dashboard specifications with layout, visualizations, and interactivity.

### Dashboard Design Principles

| Principle | Description |
|-----------|-------------|
| **5-Second Rule** | Key message visible within 5 seconds |
| **Pyramid Structure** | Summary → Details → Drill-down |
| **Visual Hierarchy** | Most important KPIs prominent |
| **Consistent Design** | Unified colors, fonts, layouts |
| **Actionable Insights** | Data leads to decisions |

### Dashboard Layout Patterns

**Executive Dashboard:**
```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    [LOGO]  EXECUTIVE DASHBOARD  [Date]                      │
├─────────────────────────────────────────────────────────────────────────────┤
│ ┌───────────┐ ┌───────────┐ ┌───────────┐ ┌───────────┐                    │
│ │ Revenue   │ │ Profit    │ │ NPS       │ │ Efficiency│ ← KPI CARDS        │
│ │ $12.5M ▲ │ │ 22% ▲    │ │ 65 →     │ │ 87% ▲    │                    │
│ └───────────┘ └───────────┘ └───────────┘ └───────────┘                    │
├─────────────────────────────────────────────────────────────────────────────┤
│ ┌─────────────────────────────┐ ┌─────────────────────────────┐            │
│ │                             │ │                             │            │
│ │    REVENUE TREND            │ │    PERFORMANCE BY REGION    │ ← CHARTS  │
│ │    [Line Chart]             │ │    [Bar Chart]              │            │
│ │                             │ │                             │            │
│ └─────────────────────────────┘ └─────────────────────────────┘            │
├─────────────────────────────────────────────────────────────────────────────┤
│ ┌─────────────────────────────────────────────────────────────────────────┐│
│ │                        TOP 10 PERFORMERS                                ││ ← TABLE
│ │ [Data Table with sparklines]                                            ││
│ └─────────────────────────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────────────────────────┘
```

### Visualization Selection Guide

| Data Type | Best Visualization |
|-----------|-------------------|
| Single metric | KPI card, gauge |
| Trend over time | Line chart |
| Comparison | Bar chart |
| Part-to-whole | Pie chart, donut |
| Distribution | Histogram, box plot |
| Correlation | Scatter plot |
| Geographic | Map |
| Hierarchical | Treemap |

### Dashboard Specification Template

```
═══════════════════════════════════════════════════════════════════════════════
DASHBOARD SPECIFICATION
Dashboard Name: [Name]
Purpose: [Description]
Primary Audience: [Roles]
Refresh Frequency: [Real-time / Hourly / Daily]
═══════════════════════════════════════════════════════════════════════════════

LAYOUT:
─────────────────────────────────────────────────────────────────────────────
[ASCII Layout Diagram]

COMPONENTS:
─────────────────────────────────────────────────────────────────────────────
│ # │ Component      │ Type       │ Data Source │ KPIs          │ Filters │
├───┼────────────────┼────────────┼─────────────┼───────────────┼─────────┤
│ 1 │ Revenue Card   │ KPI Card   │ Finance DB  │ KPI-001       │ Period  │
│ 2 │ Trend Chart    │ Line Chart │ Finance DB  │ KPI-001,002   │ Period  │
│ 3 │ Regional Perf  │ Bar Chart  │ Sales DB    │ KPI-003       │ Region  │
│ 4 │ Top Performers │ Table      │ HR DB       │ Multiple      │ Dept    │

INTERACTIVITY:
─────────────────────────────────────────────────────────────────────────────
• Filters: Date range, Region, Department, Product
• Drill-down: Click region → see stores → see transactions
• Cross-filtering: Click bar → filters all visuals
• Export: PDF, Excel, Email subscription

DATA REQUIREMENTS:
─────────────────────────────────────────────────────────────────────────────
• Source systems: [List]
• ETL requirements: [Description]
• Data refresh: [Schedule]
• Historical data: [Months/Years]

═══════════════════════════════════════════════════════════════════════════════
```

---

## Skill 3: Data Architecture Review (`/coe-data-arch`)

### Purpose
Review and recommend data architecture improvements.

### Data Architecture Layers

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        DATA ARCHITECTURE LAYERS                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  CONSUMPTION      │ Dashboards │ Reports │ Apps │ AI/ML │ APIs │           │
│  ─────────────    └────────────┴─────────┴──────┴───────┴──────┘           │
│                                     ↑                                       │
│  SERVING          │ Data Marts │ OLAP Cubes │ Feature Store │              │
│  ────────         └────────────┴────────────┴───────────────┘              │
│                                     ↑                                       │
│  PROCESSING       │ ETL/ELT │ Data Pipelines │ Stream Processing │         │
│  ──────────       └─────────┴────────────────┴───────────────────┘         │
│                                     ↑                                       │
│  STORAGE          │ Data Warehouse │ Data Lake │ Lakehouse │               │
│  ───────          └────────────────┴───────────┴───────────┘               │
│                                     ↑                                       │
│  INGESTION        │ Batch │ Real-time │ CDC │ API │ Files │                │
│  ─────────        └───────┴───────────┴─────┴─────┴───────┘                │
│                                     ↑                                       │
│  SOURCES          │ ERP │ CRM │ IoT │ External │ Apps │                    │
│  ───────          └─────┴─────┴─────┴──────────┴──────┘                    │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Architecture Assessment Criteria

| Dimension | Assessment Areas |
|-----------|------------------|
| **Scalability** | Volume growth, concurrent users |
| **Performance** | Query response, processing time |
| **Reliability** | Availability, disaster recovery |
| **Security** | Access control, encryption |
| **Maintainability** | Complexity, documentation |
| **Cost** | Infrastructure, licensing, operations |

---

## Skill 4: COE Operating Model (`/coe-model`)

### Purpose
Design Center of Excellence operating model for data and analytics.

### COE Structure Options

| Model | Description | Best For |
|-------|-------------|----------|
| **Centralized** | Single team serves all | Consistency, control |
| **Federated** | Domain teams with coordination | Agility, domain expertise |
| **Hybrid** | Central standards, federated delivery | Balance |

### COE Functions

| Function | Responsibilities |
|----------|-----------------|
| **Strategy** | Roadmap, priorities, investment |
| **Standards** | Methods, tools, best practices |
| **Delivery** | Projects, support, solutions |
| **Enablement** | Training, documentation, community |
| **Governance** | Policies, compliance, quality |

### COE Operating Model Template

```
═══════════════════════════════════════════════════════════════════════════════
CENTER OF EXCELLENCE OPERATING MODEL
COE Name: [Data & Analytics COE]
Date: [Date]
═══════════════════════════════════════════════════════════════════════════════

MISSION:
─────────────────────────────────────────────────────────────────────────────
[Mission statement]

STRUCTURE:
─────────────────────────────────────────────────────────────────────────────
Model: [Centralized / Federated / Hybrid]

                    ┌─────────────────┐
                    │   COE Leader    │
                    └────────┬────────┘
                             │
        ┌────────────────────┼────────────────────┐
        │                    │                    │
┌───────┴───────┐   ┌───────┴───────┐   ┌───────┴───────┐
│   Platform    │   │   Analytics   │   │   Governance  │
│     Team      │   │     Team      │   │     Team      │
└───────────────┘   └───────────────┘   └───────────────┘

ROLES & RESPONSIBILITIES:
─────────────────────────────────────────────────────────────────────────────
│ Role              │ FTE │ Responsibilities                    │
├───────────────────┼─────┼─────────────────────────────────────┤
│ COE Leader        │ 1   │ Strategy, stakeholder management    │
│ Data Architect    │ 1   │ Architecture, standards             │
│ Data Engineer     │ 2   │ Pipelines, infrastructure           │
│ BI Developer      │ 2   │ Dashboards, reports                 │
│ Data Analyst      │ 2   │ Analysis, insights                  │
│ Data Governance   │ 1   │ Policies, quality, compliance       │
─────────────────────────────────────────────────────────────────────────────
Total:                9 FTEs

SERVICES CATALOG:
─────────────────────────────────────────────────────────────────────────────
• Dashboard Development
• Report Automation
• Data Integration
• Analytics Consulting
• Training & Enablement
• Data Quality Management

═══════════════════════════════════════════════════════════════════════════════
```

---

## Skill 5: Data Quality Assessment (`/coe-data-quality`)

### Purpose
Assess data quality across standard dimensions.

### Data Quality Dimensions

| Dimension | Definition | Measurement |
|-----------|------------|-------------|
| **Accuracy** | Data correctly represents reality | Error rate, validation |
| **Completeness** | All required data is present | Null rate, coverage |
| **Consistency** | Data is consistent across sources | Matching rate |
| **Timeliness** | Data is current and available | Freshness, latency |
| **Validity** | Data conforms to rules/formats | Conformance rate |
| **Uniqueness** | No unwanted duplicates | Duplicate rate |

### Data Quality Scorecard

```
═══════════════════════════════════════════════════════════════════════════════
DATA QUALITY ASSESSMENT
Dataset: [Name]
Assessment Date: [Date]
Records Assessed: [N]
═══════════════════════════════════════════════════════════════════════════════

OVERALL SCORE: [XX]% - [GOOD / ACCEPTABLE / POOR]

DIMENSION SCORES:
─────────────────────────────────────────────────────────────────────────────
Accuracy       ████████████████░░░░  80%  🟢
Completeness   ██████████████░░░░░░  70%  🟡
Consistency    ████████████████████  95%  🟢
Timeliness     ██████████████████░░  90%  🟢
Validity       ████████████░░░░░░░░  60%  🟠
Uniqueness     █████████████████░░░  85%  🟢
─────────────────────────────────────────────────────────────────────────────

ISSUES IDENTIFIED:
─────────────────────────────────────────────────────────────────────────────
1. [Field X] - 30% null values (Completeness)
2. [Field Y] - Invalid format in 15% of records (Validity)
3. [Field Z] - Inconsistent with source system (Consistency)

RECOMMENDATIONS:
─────────────────────────────────────────────────────────────────────────────
1. Implement validation rules at source
2. Add data quality checks to ETL pipeline
3. Create data steward role for ongoing monitoring

═══════════════════════════════════════════════════════════════════════════════
```

---

## Skill 6: Analytics Maturity Assessment (`/coe-analytics-maturity`)

### Purpose
Assess organization's analytics maturity level.

### Analytics Maturity Model

| Level | Name | Characteristics |
|-------|------|-----------------|
| 1 | **Reporting** | Basic reports, spreadsheets, historical data |
| 2 | **Analysis** | Ad-hoc analysis, BI dashboards, KPI tracking |
| 3 | **Insights** | Advanced analytics, statistical analysis, segmentation |
| 4 | **Prediction** | Predictive models, forecasting, ML |
| 5 | **Prescription** | Optimization, automated decisions, AI |

### Assessment Dimensions

| Dimension | Level 1 | Level 3 | Level 5 |
|-----------|---------|---------|---------|
| **Data** | Siloed, manual | Integrated, governed | Real-time, AI-ready |
| **Technology** | Spreadsheets | BI platform | ML/AI platform |
| **People** | No analysts | BI team | Data science team |
| **Process** | Ad-hoc | Standardized | Automated |
| **Culture** | Gut-based | Data-informed | Data-driven |

---

## Skill 7: Data Governance Framework (`/coe-data-gov`)

### Purpose
Design comprehensive data governance framework.

### Data Governance Components

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                     DATA GOVERNANCE FRAMEWORK                               │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │                    GOVERNANCE STRUCTURE                              │   │
│  │  Data Council → Data Stewards → Data Custodians → Data Users        │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                    │                                        │
│  ┌─────────────┬─────────────┬─────┴─────┬─────────────┬─────────────┐    │
│  │   POLICIES  │  STANDARDS  │  PROCESSES│   METRICS   │    TOOLS    │    │
│  ├─────────────┼─────────────┼───────────┼─────────────┼─────────────┤    │
│  │ Data Policy │ Naming      │ Data      │ Quality     │ Data        │    │
│  │ Privacy     │ Modeling    │ Lifecycle │ Compliance  │ Catalog     │    │
│  │ Security    │ Quality     │ Access    │ Usage       │ Lineage     │    │
│  │ Retention   │ Metadata    │ Issue Mgmt│ Coverage    │ Glossary    │    │
│  └─────────────┴─────────────┴───────────┴─────────────┴─────────────┘    │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Data Governance Roles

| Role | Responsibilities |
|------|-----------------|
| **Data Owner** | Business accountability, approve access |
| **Data Steward** | Define rules, monitor quality |
| **Data Custodian** | Technical implementation, security |
| **Data User** | Consume data per policies |

---

## Skill 8: Metric Dictionary Builder (`/coe-metrics`)

### Purpose
Build standardized metric definitions and calculations.

### Metric Dictionary Template

```
═══════════════════════════════════════════════════════════════════════════════
METRIC DICTIONARY
Organization: [Name]
Version: [X.X]
Date: [Date]
═══════════════════════════════════════════════════════════════════════════════

│ Metric ID │ Name           │ Definition                    │ Formula      │
├───────────┼────────────────┼───────────────────────────────┼──────────────┤
│ MET-001   │ Revenue        │ Total sales value             │ SUM(Sales)   │
│ MET-002   │ Gross Margin   │ Revenue minus COGS            │ (Rev-COGS)/Rev│
│ MET-003   │ Customer Count │ Unique paying customers       │ COUNT(DISTINCT)│
│ MET-004   │ Conversion Rate│ Orders / Visitors             │ Orders/Visits │
│ MET-005   │ Churn Rate     │ Lost customers / Total        │ Lost/Total    │

DETAILED DEFINITIONS:
─────────────────────────────────────────────────────────────────────────────

MET-001: Revenue
───────────────────────────
Definition: Total monetary value of all completed sales transactions
Formula: SUM(transaction_amount) WHERE status = 'completed'
Unit: USD
Source: Sales Database
Granularity: Transaction level
Aggregation: SUM
Filters: Exclude returns, cancellations
Owner: Finance
Last Updated: 2026-01-15

═══════════════════════════════════════════════════════════════════════════════
```

---

## Key Frameworks Referenced

| Framework | Description |
|-----------|-------------|
| DMBOK | Data Management Body of Knowledge |
| Balanced Scorecard | Strategic KPI framework |
| DAMA | Data governance framework |
| Gartner Analytics Maturity | Analytics assessment |

---

## Integration with Other Skills

| Skill | Integration |
|-------|-------------|
| `/omega-budget` | Fee calculation for COE engagements |
| `/dig-maturity` | Link to digital maturity assessment |
| `/doc-gen` | Generate COE documentation |
| `/iso-27001` | Data security requirements |

---

*Service Line: COE (Competency Center Solutions)*
*Version: 1.0*
*Last Updated: 2026-02-02*
