---
name: competency-center
description: Competency Center and Business Intelligence knowledge for consulting engagements. Use when working on data architecture, KPI frameworks, dashboards, BI implementation, or analytics enablement. Covers COE establishment, metric design, visualization best practices, and data platform selection.
---

# Competency Center Solutions Skill

## Overview

Provides specialized knowledge for competency center and business intelligence engagements including data architecture design, KPI framework development, dashboard creation, and analytics operating model establishment.

---

## KPI Framework Development

### KPI Definition Template
```
KPI Name: [Name]
Business Owner: [Role]
Definition: [Clear, unambiguous description]
Formula: [Numerator / Denominator]
Unit: [%, $, #, etc.]
Frequency: [Daily/Weekly/Monthly/Quarterly]
Data Source: [System(s)]
Target: [Value and rationale]
Threshold: Red < [X] < Yellow < [Y] < Green
Trend Direction: Higher is Better / Lower is Better
Related KPIs: [Dependencies]
```

### KPI Categories Framework
```
Strategic KPIs
├── Lagging indicators
├── Outcome-focused
└── Board/Executive level

Operational KPIs
├── Leading indicators
├── Process-focused
└── Management level

Diagnostic KPIs
├── Root cause indicators
├── Drill-down metrics
└── Analyst level
```

### Balanced Scorecard Alignment
| Perspective | Focus | Example KPIs |
|-------------|-------|--------------|
| Financial | Shareholder value | Revenue, Margin, ROIC |
| Customer | Value proposition | NPS, Retention, CSAT |
| Process | Operational excellence | Cycle time, Quality, Cost |
| Learning | Innovation capability | Training, Patents, Engagement |

### KPI Hierarchy (Driver Tree)
```
        ┌─────────────┐
        │   Revenue   │
        └──────┬──────┘
       ┌───────┴───────┐
  ┌────┴────┐    ┌────┴────┐
  │ Volume  │    │  Price  │
  └────┬────┘    └────┬────┘
┌──────┼──────┐  ┌────┴────┐
│Customers│Units│ │Mix│Rate│
└──────────────┘ └─────────┘
```

---

## Dashboard Design Principles

### Information Hierarchy
```
Dashboard Layout (Z-Pattern Reading):
┌────────────────────────────────────┐
│ HEADLINE KPIs (1-3 key metrics)    │ ← First glance
├────────────────────────────────────┤
│ TRENDS           │ COMPARISONS     │ ← Context
├────────────────────────────────────┤
│ DETAIL TABLES / DRILL-DOWN         │ ← Analysis
└────────────────────────────────────┘
```

### Visual Selection Guide
| Data Type | Best Visual | Avoid |
|-----------|-------------|-------|
| Single metric | Card/KPI tile | Pie chart |
| Trend over time | Line chart | Bar chart |
| Category comparison | Bar chart | Pie chart (>5 items) |
| Part-to-whole | Stacked bar, treemap | 3D pie |
| Distribution | Histogram, box plot | Line chart |
| Correlation | Scatter plot | Line chart |
| Geographic | Map | Table |

### Dashboard Checklist
- [ ] Purpose clearly defined (monitor/analyze/explore)
- [ ] Target audience identified
- [ ] Maximum 7 metrics per view
- [ ] Visual hierarchy established
- [ ] Color used meaningfully (not decoratively)
- [ ] Drill-down paths defined
- [ ] Filters intuitive and minimal
- [ ] Mobile view considered
- [ ] Performance optimized (<3 sec load)
- [ ] Accessibility compliance checked

### Color Usage Guidelines
```
Semantic Colors:
├── Green: Good/Positive/On track
├── Yellow/Amber: Warning/Caution
├── Red: Bad/Negative/Critical
├── Blue: Neutral/Informational
└── Gray: Secondary/Disabled

Avoid:
├── More than 5 colors per visual
├── Color as only differentiator (accessibility)
├── Bright/saturated colors for large areas
└── Red-green only (colorblind users)
```

---

## Data Architecture Patterns

### Data Warehouse Architecture (Kimball)
```
Source Systems → Staging → Data Warehouse → Data Marts → BI Tools
                    ↓
              Dimension Tables ←→ Fact Tables
              (Who, What, Where)  (Measures)
```

### Dimensional Modeling
**Fact Table Design:**
```
fact_sales
├── date_key (FK)
├── customer_key (FK)
├── product_key (FK)
├── store_key (FK)
├── quantity (Measure)
├── revenue (Measure)
├── cost (Measure)
└── profit (Measure)
```

**Dimension Table Design:**
```
dim_customer
├── customer_key (PK)
├── customer_id (Natural key)
├── customer_name
├── segment
├── region
├── effective_date
├── end_date
└── is_current (SCD Type 2)
```

### Modern Data Architecture (Lakehouse)
```
┌──────────────────────────────────────────┐
│              Bronze Layer                 │
│        (Raw data, as-is ingestion)        │
├──────────────────────────────────────────┤
│              Silver Layer                 │
│     (Cleaned, conformed, validated)       │
├──────────────────────────────────────────┤
│               Gold Layer                  │
│    (Business-ready, aggregated, modeled)  │
└──────────────────────────────────────────┘
```

---

## Data Quality Framework

### Data Quality Dimensions
| Dimension | Definition | Measurement |
|-----------|------------|-------------|
| Accuracy | Data correctly represents reality | Error rate |
| Completeness | All required data present | % populated |
| Consistency | Same data across systems | Match rate |
| Timeliness | Data current and available | Latency |
| Validity | Data conforms to rules | Validation pass rate |
| Uniqueness | No duplicate records | Duplicate rate |

### Data Quality Scorecard
```
Overall Score: [85%]

By Dimension:
├── Accuracy: 90%
├── Completeness: 85%
├── Consistency: 80%
├── Timeliness: 95%
├── Validity: 88%
└── Uniqueness: 92%

By Critical Data Element:
├── Customer ID: 99%
├── Revenue: 95%
├── Date: 100%
└── Product Code: 88%
```

### Data Quality Rules Template
| Rule ID | Data Element | Rule Type | Rule Definition | Threshold |
|---------|--------------|-----------|-----------------|-----------|
| DQ-001 | Email | Format | Valid email pattern | 100% |
| DQ-002 | Revenue | Range | > 0 and < $10M | 99.9% |
| DQ-003 | Date | Completeness | Not null | 100% |

---

## COE Operating Model

### COE Structure Options
```
Centralized COE:
├── Single team serves entire organization
├── Consistent standards and governance
├── Resource efficiency
└── May create bottleneck

Federated COE:
├── Central standards, distributed execution
├── Business unit analysts embedded
├── Flexibility with governance
└── Balance of control and agility

Hybrid COE:
├── Core team for platform/standards
├── Embedded analysts for business
├── Community of practice
└── Most common model
```

### COE Service Catalog
| Service | Description | SLA |
|---------|-------------|-----|
| Dashboard Development | New dashboard creation | 2-4 weeks |
| Report Request | Standard report creation | 1 week |
| Ad-hoc Analysis | One-time analysis | 3-5 days |
| Data Integration | New source onboarding | 4-6 weeks |
| Training | BI tool training | Scheduled |
| Support | Break-fix, questions | 24-48 hours |

### COE Roles
| Role | Responsibilities |
|------|------------------|
| COE Lead | Strategy, stakeholder management |
| Data Architect | Data modeling, platform design |
| BI Developer | Dashboard/report development |
| Data Engineer | ETL, data pipelines |
| Data Analyst | Analysis, insights, support |
| Data Steward | Quality, governance, definitions |

---

## Platform Selection

### BI Platform Comparison Matrix
| Criterion | Power BI | Tableau | Qlik | Looker |
|-----------|----------|---------|------|--------|
| Visualization | Good | Excellent | Good | Good |
| Self-Service | Excellent | Good | Good | Fair |
| Governance | Good | Good | Excellent | Excellent |
| Embedded | Good | Good | Good | Excellent |
| Cost | Low | High | Medium | High |
| Learning Curve | Low | Medium | Medium | High |

### Data Platform Comparison
| Criterion | Snowflake | Databricks | BigQuery | Redshift |
|-----------|-----------|------------|----------|----------|
| Ease of Use | Excellent | Good | Excellent | Good |
| Performance | Excellent | Excellent | Excellent | Good |
| ML Integration | Good | Excellent | Good | Good |
| Cost Model | Usage | Compute | Usage | Provisioned |
| Data Sharing | Excellent | Good | Good | Fair |

### TCO Calculation Template
```
Total Cost of Ownership (5 Year):

Year 0 (Implementation):
├── License/Subscription: $X
├── Implementation Services: $X
├── Infrastructure: $X
├── Training: $X
└── Change Management: $X

Annual (Years 1-5):
├── License/Subscription: $X
├── Infrastructure/Hosting: $X
├── Maintenance/Support: $X
├── Internal Resources: $X
└── Enhancements: $X

Total TCO: $XXX
Cost per User: $XXX
```

---

## Industry-Specific Metrics

### Healthcare
| Metric | Formula |
|--------|---------|
| ALOS | Total Patient Days / Discharges |
| CMI | Sum(DRG Weights) / Discharges |
| Readmission Rate | Readmissions / Total Admits |
| Bed Utilization | Occupied Beds / Available Beds |
| HCAHPS | Survey score composite |

### Education
| Metric | Formula |
|--------|---------|
| Retention Rate | Returning Students / Prior Enrollment |
| Graduation Rate | Graduates / Starting Cohort |
| Net Tuition Revenue | Gross Tuition - Institutional Aid |
| Discount Rate | Institutional Aid / Gross Tuition |
| Yield | Enrolled / Admitted |

### Financial Services
| Metric | Formula |
|--------|---------|
| Cost-to-Income | Operating Costs / Operating Income |
| NIM | (Interest Income - Interest Expense) / Assets |
| NPL Ratio | Non-Performing Loans / Total Loans |
| CAC | Sales & Marketing / New Customers |
| LTV | Average Revenue per Customer × Lifetime |

### Manufacturing
| Metric | Formula |
|--------|---------|
| OEE | Availability × Performance × Quality |
| First Pass Yield | Good Units / Total Units |
| Scrap Rate | Scrapped Units / Total Units |
| On-Time Delivery | On-Time Orders / Total Orders |
| Inventory Turns | COGS / Average Inventory |

---

## Implementation Approach

### Phase 1: Foundation (4-6 weeks)
- Requirements gathering
- Architecture design
- Platform selection/setup
- Governance framework

### Phase 2: Build (6-10 weeks)
- Data integration
- Data modeling
- Dashboard development
- Security configuration

### Phase 3: Deploy (2-4 weeks)
- User acceptance testing
- Training delivery
- Go-live support
- Documentation

### Phase 4: Sustain (Ongoing)
- Adoption monitoring
- Continuous improvement
- New use cases
- Capability building

---

## References

See `references/` folder for:
- KPI templates by industry
- Dashboard examples
- Data model patterns
- Platform comparison details
