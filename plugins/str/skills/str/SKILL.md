---
name: str
description: Corporate Business Advisory skills - market intelligence, financial modeling, operations
---

# STR - Corporate Business Advisory Skills

## Service Line Overview

**Code:** STR
**Full Name:** Corporate Business Advisory
**Fee Modifier:** 1.10
**Description:** Market intelligence, financial modeling, operations excellence, organizational design

---

## Skills Index

| # | Skill | Command | Purpose |
|---|-------|---------|---------|
| 1 | Market Analysis | `/str-market` | Conduct comprehensive market analysis |
| 2 | Competitive Intelligence | `/str-competitive` | Analyze competitive landscape |
| 3 | Financial Modeling | `/str-financial-model` | Build financial models and projections |
| 4 | Operations Assessment | `/str-ops-assess` | Assess operational efficiency |
| 5 | Organizational Design | `/str-org-design` | Design organizational structures |
| 6 | M&A Due Diligence | `/str-ma-dd` | Support M&A due diligence |
| 7 | Strategic Planning | `/str-planning` | Facilitate strategic planning |
| 8 | Cost Optimization | `/str-cost-opt` | Identify cost optimization opportunities |

---

## Skill 1: Market Analysis

### Command: `/str-market`

### Purpose
Conduct comprehensive market analysis including market sizing, segmentation, trends, and growth projections.

### Inputs Required
```yaml
market_scope:
  industry: "Industry Name"
  geography: "Global|Regional|Country"
  segments: ["Segment 1", "Segment 2"]
analysis_type: "entry|expansion|assessment"
client_position:
  current_share: 5
  target_segments: ["Segment A"]
data_sources:
  - "Industry reports"
  - "Government statistics"
  - "Trade associations"
time_horizon: "3-5 years"
```

### Market Analysis Framework

#### Analysis Components

| Component | Description | Deliverable |
|-----------|-------------|-------------|
| **Market Sizing** | TAM, SAM, SOM calculation | Size estimates |
| **Segmentation** | Customer/product segments | Segment profiles |
| **Trends** | Market drivers and shifts | Trend analysis |
| **Growth** | Historical and projected | Growth forecasts |
| **Competitive** | Market structure | Competitive map |

#### Market Sizing Approaches

| Approach | Method | Best For |
|----------|--------|----------|
| **Top-Down** | Total market → segments | Established markets |
| **Bottom-Up** | Units × price × customers | New markets |
| **Value Chain** | Analyze each stage | B2B markets |
| **Analogous** | Similar market proxy | Emerging markets |

### Output: Market Analysis Report

```markdown
# Market Analysis Report
## [Industry/Market Name]
### Date: [Date]

## Executive Summary

**Total Addressable Market:** $[X]B
**Serviceable Market:** $[X]B
**Target Market:** $[X]B
**CAGR (5-year):** [X]%
**Key Insight:** [Main finding]

## Market Overview

### Market Definition
[Clear definition of market boundaries]

### Market Size

#### Total Addressable Market (TAM)
| Segment | 2025 | 2026 | 2027 | 2028 | 2029 | CAGR |
|---------|------|------|------|------|------|------|
| [Segment 1] | $[X] | $[X] | $[X] | $[X] | $[X] | [X]% |
| [Segment 2] | $[X] | $[X] | $[X] | $[X] | $[X] | [X]% |
| **Total** | $[X] | $[X] | $[X] | $[X] | $[X] | [X]% |

#### Serviceable Addressable Market (SAM)
| Geography | Size | % of TAM | Growth |
|-----------|------|----------|--------|
| [Region 1] | $[X] | [X]% | [X]% |
| [Region 2] | $[X] | [X]% | [X]% |

#### Serviceable Obtainable Market (SOM)
| Segment | Size | Rationale |
|---------|------|-----------|
| [Target] | $[X] | [Why achievable] |

### Market Sizing Methodology
```
TAM Calculation:
[Number of potential customers] × [Average revenue per customer]
= [Total] × $[X] = $[TAM]

SAM Calculation:
[TAM] × [Geographic filter] × [Segment filter]
= $[TAM] × [X]% × [X]% = $[SAM]

SOM Calculation:
[SAM] × [Realistic capture rate]
= $[SAM] × [X]% = $[SOM]
```

## Market Segmentation

### Segmentation Framework
| Dimension | Segments | Size Distribution |
|-----------|----------|-------------------|
| Customer Type | [Segments] | [%] |
| Geography | [Regions] | [%] |
| Product/Service | [Categories] | [%] |
| Price Point | [Tiers] | [%] |

### Segment Profiles

#### Segment A: [Name]
| Attribute | Description |
|-----------|-------------|
| Size | $[X] ([X]% of market) |
| Growth | [X]% CAGR |
| Key Characteristics | [Description] |
| Customer Needs | [Needs] |
| Competitive Intensity | [H/M/L] |
| Attractiveness | [H/M/L] |

## Market Trends

### Macro Trends (PESTEL)

| Category | Trend | Impact | Timeframe |
|----------|-------|--------|-----------|
| Political | [Trend] | [+/-] | [S/M/L] |
| Economic | [Trend] | [+/-] | [S/M/L] |
| Social | [Trend] | [+/-] | [S/M/L] |
| Technological | [Trend] | [+/-] | [S/M/L] |
| Environmental | [Trend] | [+/-] | [S/M/L] |
| Legal | [Trend] | [+/-] | [S/M/L] |

### Industry-Specific Trends

| Trend | Description | Impact | Opportunity/Threat |
|-------|-------------|--------|-------------------|
| [Trend 1] | [Description] | [H/M/L] | [O/T] |

## Growth Drivers & Inhibitors

### Growth Drivers
| Driver | Impact | Probability | Timeline |
|--------|--------|-------------|----------|
| [Driver] | [H/M/L] | [H/M/L] | [Years] |

### Growth Inhibitors
| Inhibitor | Impact | Probability | Mitigation |
|-----------|--------|-------------|------------|
| [Inhibitor] | [H/M/L] | [H/M/L] | [Strategy] |

## Market Forecast

### Scenario Analysis
| Scenario | 2029 Size | CAGR | Key Assumptions |
|----------|-----------|------|-----------------|
| Base Case | $[X] | [X]% | [Assumptions] |
| Bull Case | $[X] | [X]% | [Assumptions] |
| Bear Case | $[X] | [X]% | [Assumptions] |

### Forecast Methodology
[Description of forecasting approach and key assumptions]

## Competitive Landscape

### Market Structure
| Metric | Value |
|--------|-------|
| Market Concentration (HHI) | [Score] |
| Top 5 Share | [%] |
| Number of Players | [#] |
| Entry Barriers | [H/M/L] |

### Key Players
| Company | Share | Positioning | Trend |
|---------|-------|-------------|-------|
| [Company] | [%] | [Position] | [↑↓→] |

## Strategic Implications

### Market Attractiveness Assessment
| Factor | Score (1-5) | Weight | Weighted |
|--------|-------------|--------|----------|
| Market Size | [X] | [X]% | [X] |
| Growth Rate | [X] | [X]% | [X] |
| Profitability | [X] | [X]% | [X] |
| Competition | [X] | [X]% | [X] |
| Entry Barriers | [X] | [X]% | [X] |
| **Total** | | 100% | **[X]** |

### Recommendations
1. [Recommendation]
2. [Recommendation]

## Appendices
### A. Data Sources
### B. Detailed Calculations
### C. Expert Interviews
```

---

## Skill 2: Competitive Intelligence

### Command: `/str-competitive`

### Purpose
Analyze competitive landscape including competitor profiles, positioning, strengths/weaknesses, and competitive dynamics.

### Inputs Required
```yaml
client_company: "Client Name"
competitors:
  - name: "Competitor 1"
    type: "direct|indirect|potential"
  - name: "Competitor 2"
analysis_dimensions:
  - "Market position"
  - "Products/services"
  - "Pricing"
  - "Go-to-market"
  - "Financial performance"
competitive_questions:
  - "Who are the key competitors?"
  - "What are their strategies?"
```

### Competitive Analysis Framework

#### Porter's Five Forces

| Force | Analysis Focus |
|-------|----------------|
| **Rivalry** | Competitor intensity, market concentration |
| **Buyers** | Customer power, switching costs |
| **Suppliers** | Supplier concentration, input importance |
| **Substitutes** | Alternative solutions, threat level |
| **New Entrants** | Entry barriers, threat likelihood |

### Output: Competitive Intelligence Report

```markdown
# Competitive Intelligence Report
## [Client Name]
### Date: [Date]

## Executive Summary

**Competitive Position:** [Leader|Challenger|Follower|Niche]
**Key Competitors:** [Top 3]
**Competitive Advantage:** [Primary advantage]
**Strategic Threat Level:** [High|Medium|Low]

## Competitive Landscape Overview

### Market Position Map
```
                    High Price
                        │
    Premium             │            Luxury
    [Competitor A]      │        [Competitor B]
                        │
Low ────────────────────┼──────────────────── High
Quality                 │                    Quality
                        │
    Budget              │           Value
    [Competitor C]      │      [CLIENT] ←Target
                        │
                    Low Price
```

### Market Share Analysis
| Company | Revenue | Share | Trend | YoY Growth |
|---------|---------|-------|-------|------------|
| [Company 1] | $[X]M | [X]% | [↑↓→] | [X]% |
| [Company 2] | $[X]M | [X]% | [↑↓→] | [X]% |
| [Client] | $[X]M | [X]% | [↑↓→] | [X]% |
| Others | $[X]M | [X]% | [↑↓→] | [X]% |

## Porter's Five Forces Analysis

### Overall Industry Attractiveness: [High|Medium|Low]

| Force | Intensity | Trend | Key Factors |
|-------|-----------|-------|-------------|
| Rivalry | [H/M/L] | [↑↓→] | [Factors] |
| Buyer Power | [H/M/L] | [↑↓→] | [Factors] |
| Supplier Power | [H/M/L] | [↑↓→] | [Factors] |
| Substitutes | [H/M/L] | [↑↓→] | [Factors] |
| New Entrants | [H/M/L] | [↑↓→] | [Factors] |

## Competitor Profiles

### Competitor A: [Name]

#### Company Overview
| Attribute | Value |
|-----------|-------|
| Headquarters | [Location] |
| Founded | [Year] |
| Employees | [#] |
| Revenue | $[X]M |
| Market Share | [X]% |

#### Strategic Profile
| Dimension | Assessment |
|-----------|------------|
| Strategy Type | [Cost Leader/Differentiator/Focused] |
| Target Segments | [Segments] |
| Value Proposition | [Proposition] |
| Core Capabilities | [Capabilities] |

#### Product/Service Comparison
| Product | [Competitor] | [Client] | Advantage |
|---------|--------------|----------|-----------|
| [Product 1] | [Features] | [Features] | [Who wins] |

#### SWOT Analysis
| Strengths | Weaknesses |
|-----------|------------|
| [Strength] | [Weakness] |

| Opportunities | Threats |
|---------------|---------|
| [Opportunity] | [Threat] |

#### Recent Moves
| Date | Action | Implication |
|------|--------|-------------|
| [Date] | [Action] | [Impact] |

---

### Competitor B: [Name]
[Same format as above]

---

## Competitive Comparison Matrix

### Product/Service Features
| Feature | Weight | [Client] | [Comp A] | [Comp B] | [Comp C] |
|---------|--------|----------|----------|----------|----------|
| [Feature 1] | [X]% | [Score] | [Score] | [Score] | [Score] |
| [Feature 2] | [X]% | [Score] | [Score] | [Score] | [Score] |
| **Total** | 100% | **[X]** | **[X]** | **[X]** | **[X]** |

### Pricing Comparison
| Offering | [Client] | [Comp A] | [Comp B] | Market Avg |
|----------|----------|----------|----------|------------|
| [Product] | $[X] | $[X] | $[X] | $[X] |

### Go-to-Market Comparison
| Dimension | [Client] | [Comp A] | [Comp B] |
|-----------|----------|----------|----------|
| Channels | [Channels] | [Channels] | [Channels] |
| Sales Model | [Model] | [Model] | [Model] |
| Marketing | [Approach] | [Approach] | [Approach] |

## Competitive Dynamics

### Strategic Groups
| Group | Characteristics | Members |
|-------|-----------------|---------|
| [Group 1] | [Characteristics] | [Companies] |
| [Group 2] | [Characteristics] | [Companies] |

### Anticipated Competitive Moves
| Competitor | Likely Move | Timing | Impact on Client |
|------------|-------------|--------|------------------|
| [Comp A] | [Move] | [When] | [Impact] |

## Strategic Recommendations

### Competitive Positioning
[Recommended positioning strategy]

### Offensive Strategies
| Strategy | Target | Expected Outcome |
|----------|--------|------------------|
| [Strategy] | [Competitor/Segment] | [Outcome] |

### Defensive Strategies
| Threat | Response | Priority |
|--------|----------|----------|
| [Threat] | [Response] | [H/M/L] |

## Appendices
### A. Competitor Financial Summary
### B. News Monitoring Summary
### C. Win/Loss Analysis
```

---

## Skill 3: Financial Modeling

### Command: `/str-financial-model`

### Purpose
Build comprehensive financial models including projections, valuations, and scenario analysis.

### Inputs Required
```yaml
model_type: "three_statement|dcf|lbo|merger|project_finance"
company_name: "Company Name"
historical_data:
  years: 3
  available: ["Income Statement", "Balance Sheet", "Cash Flow"]
projection_period: 5
scenarios:
  - "Base"
  - "Upside"
  - "Downside"
key_assumptions:
  revenue_growth: 10
  gross_margin: 40
  opex_ratio: 25
```

### Financial Modeling Framework

#### Model Types

| Model Type | Use Case | Key Outputs |
|------------|----------|-------------|
| **Three Statement** | Operational planning | P&L, BS, CF projections |
| **DCF** | Intrinsic valuation | Enterprise value, equity value |
| **LBO** | PE acquisition | IRR, MOIC, debt paydown |
| **Merger** | M&A analysis | Accretion/dilution, synergies |
| **Project Finance** | Infrastructure | NPV, IRR, DSCR |

### Output: Financial Model Documentation

```markdown
# Financial Model Documentation
## [Company/Project Name]
### Model Version: 1.0 | Date: [Date]

## Model Overview

### Purpose
[Description of model purpose and use cases]

### Model Type
**Primary:** [Three Statement / DCF / LBO / Other]

### Key Outputs
| Output | Base Case | Upside | Downside |
|--------|-----------|--------|----------|
| Revenue (Year 5) | $[X]M | $[X]M | $[X]M |
| EBITDA (Year 5) | $[X]M | $[X]M | $[X]M |
| Enterprise Value | $[X]M | $[X]M | $[X]M |
| IRR | [X]% | [X]% | [X]% |

## Historical Analysis

### Income Statement Summary
| Metric | Year -3 | Year -2 | Year -1 | CAGR |
|--------|---------|---------|---------|------|
| Revenue | $[X] | $[X] | $[X] | [X]% |
| Gross Profit | $[X] | $[X] | $[X] | [X]% |
| EBITDA | $[X] | $[X] | $[X] | [X]% |
| Net Income | $[X] | $[X] | $[X] | [X]% |

### Margin Analysis
| Margin | Year -3 | Year -2 | Year -1 | Trend |
|--------|---------|---------|---------|-------|
| Gross Margin | [X]% | [X]% | [X]% | [↑↓→] |
| EBITDA Margin | [X]% | [X]% | [X]% | [↑↓→] |
| Net Margin | [X]% | [X]% | [X]% | [↑↓→] |

## Key Assumptions

### Revenue Assumptions
| Driver | Year 1 | Year 2 | Year 3 | Year 4 | Year 5 | Rationale |
|--------|--------|--------|--------|--------|--------|-----------|
| Revenue Growth | [X]% | [X]% | [X]% | [X]% | [X]% | [Rationale] |
| Price Change | [X]% | [X]% | [X]% | [X]% | [X]% | [Rationale] |
| Volume Growth | [X]% | [X]% | [X]% | [X]% | [X]% | [Rationale] |

### Cost Assumptions
| Driver | Year 1 | Year 2 | Year 3 | Year 4 | Year 5 | Rationale |
|--------|--------|--------|--------|--------|--------|-----------|
| COGS % | [X]% | [X]% | [X]% | [X]% | [X]% | [Rationale] |
| OpEx % | [X]% | [X]% | [X]% | [X]% | [X]% | [Rationale] |
| D&A % | [X]% | [X]% | [X]% | [X]% | [X]% | [Rationale] |

### Capital Assumptions
| Driver | Value | Rationale |
|--------|-------|-----------|
| CapEx % of Revenue | [X]% | [Rationale] |
| Working Capital Days | [X] | [Rationale] |
| Tax Rate | [X]% | [Rationale] |

### Valuation Assumptions (DCF)
| Assumption | Value | Rationale |
|------------|-------|-----------|
| WACC | [X]% | [Calculation] |
| Terminal Growth | [X]% | [Rationale] |
| Exit Multiple | [X]x | [Comparable] |

## Projected Financials

### Income Statement Projections
| Line Item | Year 1 | Year 2 | Year 3 | Year 4 | Year 5 |
|-----------|--------|--------|--------|--------|--------|
| Revenue | $[X] | $[X] | $[X] | $[X] | $[X] |
| COGS | ($[X]) | ($[X]) | ($[X]) | ($[X]) | ($[X]) |
| **Gross Profit** | $[X] | $[X] | $[X] | $[X] | $[X] |
| Operating Expenses | ($[X]) | ($[X]) | ($[X]) | ($[X]) | ($[X]) |
| **EBITDA** | $[X] | $[X] | $[X] | $[X] | $[X] |
| D&A | ($[X]) | ($[X]) | ($[X]) | ($[X]) | ($[X]) |
| **EBIT** | $[X] | $[X] | $[X] | $[X] | $[X] |
| Interest | ($[X]) | ($[X]) | ($[X]) | ($[X]) | ($[X]) |
| **EBT** | $[X] | $[X] | $[X] | $[X] | $[X] |
| Taxes | ($[X]) | ($[X]) | ($[X]) | ($[X]) | ($[X]) |
| **Net Income** | $[X] | $[X] | $[X] | $[X] | $[X] |

### Balance Sheet Projections
| Line Item | Year 1 | Year 2 | Year 3 | Year 4 | Year 5 |
|-----------|--------|--------|--------|--------|--------|
| Cash | $[X] | $[X] | $[X] | $[X] | $[X] |
| Receivables | $[X] | $[X] | $[X] | $[X] | $[X] |
| Inventory | $[X] | $[X] | $[X] | $[X] | $[X] |
| **Current Assets** | $[X] | $[X] | $[X] | $[X] | $[X] |
| PP&E | $[X] | $[X] | $[X] | $[X] | $[X] |
| **Total Assets** | $[X] | $[X] | $[X] | $[X] | $[X] |
| Payables | $[X] | $[X] | $[X] | $[X] | $[X] |
| Debt | $[X] | $[X] | $[X] | $[X] | $[X] |
| **Total Liabilities** | $[X] | $[X] | $[X] | $[X] | $[X] |
| **Equity** | $[X] | $[X] | $[X] | $[X] | $[X] |

### Cash Flow Projections
| Line Item | Year 1 | Year 2 | Year 3 | Year 4 | Year 5 |
|-----------|--------|--------|--------|--------|--------|
| Net Income | $[X] | $[X] | $[X] | $[X] | $[X] |
| D&A | $[X] | $[X] | $[X] | $[X] | $[X] |
| Working Capital Change | ($[X]) | ($[X]) | ($[X]) | ($[X]) | ($[X]) |
| **Operating Cash Flow** | $[X] | $[X] | $[X] | $[X] | $[X] |
| CapEx | ($[X]) | ($[X]) | ($[X]) | ($[X]) | ($[X]) |
| **Free Cash Flow** | $[X] | $[X] | $[X] | $[X] | $[X] |

## Valuation Analysis

### DCF Valuation
| Component | Value |
|-----------|-------|
| PV of FCF (Years 1-5) | $[X]M |
| Terminal Value | $[X]M |
| PV of Terminal Value | $[X]M |
| **Enterprise Value** | $[X]M |
| Less: Debt | ($[X]M) |
| Plus: Cash | $[X]M |
| **Equity Value** | $[X]M |
| Shares Outstanding | [X]M |
| **Value per Share** | $[X] |

### Sensitivity Analysis
| | WACC -1% | Base WACC | WACC +1% |
|---|---------|-----------|----------|
| **Growth -0.5%** | $[X] | $[X] | $[X] |
| **Base Growth** | $[X] | $[X] | $[X] |
| **Growth +0.5%** | $[X] | $[X] | $[X] |

### Comparable Analysis
| Company | EV/Revenue | EV/EBITDA | P/E |
|---------|------------|-----------|-----|
| [Comp 1] | [X]x | [X]x | [X]x |
| [Comp 2] | [X]x | [X]x | [X]x |
| **Median** | [X]x | [X]x | [X]x |
| **Implied Value** | $[X]M | $[X]M | $[X]M |

## Scenario Analysis

### Scenario Definitions
| Scenario | Key Assumptions | Probability |
|----------|-----------------|-------------|
| Base | [Assumptions] | [X]% |
| Upside | [Assumptions] | [X]% |
| Downside | [Assumptions] | [X]% |

### Scenario Outputs
| Metric | Downside | Base | Upside |
|--------|----------|------|--------|
| Year 5 Revenue | $[X]M | $[X]M | $[X]M |
| Year 5 EBITDA | $[X]M | $[X]M | $[X]M |
| Enterprise Value | $[X]M | $[X]M | $[X]M |
| IRR | [X]% | [X]% | [X]% |

## Model Limitations & Risks

### Key Risks
| Risk | Impact | Mitigation |
|------|--------|------------|
| [Risk] | [H/M/L] | [Approach] |

### Model Limitations
1. [Limitation]
2. [Limitation]

## Appendices
### A. WACC Calculation
### B. Comparable Company Details
### C. Detailed Schedules
```

---

## Skill 4: Operations Assessment

### Command: `/str-ops-assess`

### Purpose
Assess operational efficiency across processes, resources, and performance to identify improvement opportunities.

### Inputs Required
```yaml
assessment_scope: "enterprise|division|function|process"
organization_name: "Organization Name"
focus_areas:
  - "Process efficiency"
  - "Resource utilization"
  - "Quality"
  - "Cost structure"
  - "Technology"
current_metrics:
  revenue: 100000000
  employees: 500
  operating_margin: 15
benchmarks:
  - "Industry average"
  - "Best-in-class"
```

### Operations Assessment Framework

#### Assessment Dimensions

| Dimension | Focus Areas | Key Metrics |
|-----------|-------------|-------------|
| **Process** | Efficiency, cycle time, quality | Lead time, defect rate |
| **Resource** | Labor, equipment, facilities | Utilization, productivity |
| **Cost** | Direct, indirect, overhead | Cost per unit, cost ratios |
| **Quality** | Conformance, customer satisfaction | Yield, NPS |
| **Technology** | Automation, digitization | Digital maturity |

### Output: Operations Assessment Report

```markdown
# Operations Assessment Report
## [Organization Name]
### Date: [Date]

## Executive Summary

**Overall Operational Health:** [Excellent|Good|Fair|Poor]
**Efficiency Score:** [X/100]
**Cost Optimization Potential:** $[X]M ([X]% of OpEx)
**Key Findings:** [Top 3 findings]

## Current State Overview

### Organization Profile
| Metric | Value | Industry Avg | Gap |
|--------|-------|--------------|-----|
| Revenue | $[X]M | - | - |
| Employees | [#] | - | - |
| Revenue/Employee | $[X]K | $[X]K | [+/-]% |
| Operating Margin | [X]% | [X]% | [+/-]% |
| Asset Turnover | [X]x | [X]x | [+/-]x |

### Cost Structure
| Category | Amount | % of Revenue | Benchmark | Gap |
|----------|--------|--------------|-----------|-----|
| COGS | $[X]M | [X]% | [X]% | [+/-]% |
| Labor | $[X]M | [X]% | [X]% | [+/-]% |
| Materials | $[X]M | [X]% | [X]% | [+/-]% |
| Overhead | $[X]M | [X]% | [X]% | [+/-]% |
| SG&A | $[X]M | [X]% | [X]% | [+/-]% |

## Process Efficiency Analysis

### Process Performance
| Process | Cycle Time | Efficiency | Quality | Score |
|---------|------------|------------|---------|-------|
| [Process 1] | [Time] | [%] | [%] | [X/10] |
| [Process 2] | [Time] | [%] | [%] | [X/10] |

### Value Stream Analysis
| Activity | Time | Value-Add | Non-VA | Wait |
|----------|------|-----------|--------|------|
| [Activity] | [Time] | [%] | [%] | [%] |

**Value-Add Ratio:** [X]% (Target: >25%)

### Bottleneck Analysis
| Bottleneck | Location | Impact | Root Cause |
|------------|----------|--------|------------|
| [Bottleneck] | [Where] | [Impact] | [Cause] |

## Resource Utilization

### Labor Productivity
| Metric | Current | Benchmark | Gap |
|--------|---------|-----------|-----|
| Output per Hour | [X] | [X] | [+/-]% |
| Revenue per FTE | $[X]K | $[X]K | [+/-]% |
| Overtime % | [X]% | [X]% | [+/-]% |
| Absenteeism | [X]% | [X]% | [+/-]% |

### Equipment Utilization
| Equipment | Capacity | Actual | Utilization | OEE |
|-----------|----------|--------|-------------|-----|
| [Equipment] | [Cap] | [Act] | [%] | [%] |

**Overall Equipment Effectiveness (OEE):** [X]%
- Availability: [X]%
- Performance: [X]%
- Quality: [X]%

### Facility Utilization
| Facility | Area | Utilized | Utilization |
|----------|------|----------|-------------|
| [Facility] | [sqm] | [sqm] | [%] |

## Quality Analysis

### Quality Metrics
| Metric | Current | Target | Gap |
|--------|---------|--------|-----|
| First Pass Yield | [X]% | [X]% | [+/-]% |
| Defect Rate | [X]% | [X]% | [+/-]% |
| Customer Complaints | [#/mo] | [#/mo] | [+/-] |
| Returns Rate | [X]% | [X]% | [+/-]% |

### Cost of Quality
| Category | Amount | % of Revenue |
|----------|--------|--------------|
| Prevention | $[X] | [X]% |
| Appraisal | $[X] | [X]% |
| Internal Failure | $[X] | [X]% |
| External Failure | $[X] | [X]% |
| **Total CoQ** | $[X] | [X]% |

## Benchmarking

### Peer Comparison
| Metric | [Company] | Peer Avg | Best-in-Class | Gap to Best |
|--------|-----------|----------|---------------|-------------|
| [Metric 1] | [Value] | [Value] | [Value] | [Gap] |

### Maturity Assessment
| Capability | Current | Target | Gap |
|------------|---------|--------|-----|
| Process Standardization | [1-5] | [1-5] | [Gap] |
| Continuous Improvement | [1-5] | [1-5] | [Gap] |
| Digital/Automation | [1-5] | [1-5] | [Gap] |
| Performance Management | [1-5] | [1-5] | [Gap] |

## Improvement Opportunities

### Cost Reduction Opportunities
| Opportunity | Annual Savings | Investment | Payback |
|-------------|----------------|------------|---------|
| [Opportunity 1] | $[X]M | $[X]M | [X] mo |
| [Opportunity 2] | $[X]M | $[X]M | [X] mo |
| **Total** | $[X]M | $[X]M | - |

### Efficiency Improvements
| Opportunity | Current | Target | Impact |
|-------------|---------|--------|--------|
| [Improvement] | [Current] | [Target] | [Impact] |

## Recommendations

### Quick Wins (0-6 months)
| # | Recommendation | Savings | Effort |
|---|----------------|---------|--------|
| 1 | [Recommendation] | $[X] | [L/M/H] |

### Medium-term (6-12 months)
| # | Recommendation | Savings | Effort |
|---|----------------|---------|--------|
| 1 | [Recommendation] | $[X] | [L/M/H] |

### Transformational (12+ months)
| # | Recommendation | Savings | Effort |
|---|----------------|---------|--------|
| 1 | [Recommendation] | $[X] | [L/M/H] |

## Implementation Roadmap

### Phase 1: Foundation
- [Initiative]
- [Initiative]

### Phase 2: Optimization
- [Initiative]
- [Initiative]

### Phase 3: Transformation
- [Initiative]
- [Initiative]
```

---

## Skill 5: Organizational Design

### Command: `/str-org-design`

### Purpose
Design organizational structures, roles, reporting relationships, and governance to support business strategy.

### Inputs Required
```yaml
design_scope: "enterprise|division|function"
organization_name: "Organization Name"
current_state:
  employees: 500
  structure_type: "functional|divisional|matrix|flat"
  spans_of_control: "narrow|medium|wide"
design_drivers:
  - "Growth"
  - "Efficiency"
  - "Agility"
  - "Customer focus"
constraints:
  - "Budget limitations"
  - "Union considerations"
```

### Organizational Design Framework

#### Design Principles

| Principle | Description | Application |
|-----------|-------------|-------------|
| **Strategy Alignment** | Structure follows strategy | Link to business model |
| **Span of Control** | Manageable reporting | 5-8 direct reports typical |
| **Clear Accountability** | Single point ownership | RACI clarity |
| **Decision Rights** | Authority matches responsibility | Empowerment framework |
| **Minimal Layers** | Reduce hierarchy | Flat where possible |

### Output: Organizational Design Document

```markdown
# Organizational Design Document
## [Organization Name]
### Version: 1.0 | Date: [Date]

## Executive Summary

**Design Scope:** [Scope]
**Structure Type:** [Type]
**Key Changes:** [Summary]
**Implementation Timeline:** [Months]

## Strategic Context

### Business Strategy
[Summary of business strategy driving org design]

### Design Objectives
1. [Objective 1]
2. [Objective 2]

### Design Principles
| Principle | Application |
|-----------|-------------|
| [Principle] | [How applied] |

## Current State Analysis

### Current Structure
[Organization chart or description]

### Current Metrics
| Metric | Current | Benchmark |
|--------|---------|-----------|
| Total Headcount | [#] | - |
| Management Layers | [#] | 4-6 |
| Avg Span of Control | [#] | 5-8 |
| Manager:Employee Ratio | 1:[X] | 1:6-8 |
| HR:Employee Ratio | 1:[X] | 1:75-100 |

### Current State Issues
| Issue | Impact | Root Cause |
|-------|--------|------------|
| [Issue] | [Impact] | [Cause] |

## Future State Design

### Proposed Structure

```
[CEO]
├── [Function 1]
│   ├── [Sub-function A]
│   └── [Sub-function B]
├── [Function 2]
│   ├── [Sub-function C]
│   └── [Sub-function D]
└── [Function 3]
```

### Structure Rationale
| Design Choice | Rationale |
|---------------|-----------|
| [Choice] | [Why] |

### Role Definitions

#### [Role Title]
| Attribute | Description |
|-----------|-------------|
| Purpose | [Role purpose] |
| Reports To | [Reporting line] |
| Direct Reports | [#] |
| Key Responsibilities | [List] |
| Decision Authority | [Scope] |
| Key Relationships | [Internal/External] |
| Success Metrics | [KPIs] |

### Span of Control Analysis
| Level | Current Span | Proposed Span | Change |
|-------|--------------|---------------|--------|
| Executive | [#] | [#] | [+/-] |
| Senior Manager | [#] | [#] | [+/-] |
| Manager | [#] | [#] | [+/-] |

### Headcount Impact
| Area | Current | Proposed | Change |
|------|---------|----------|--------|
| [Function] | [#] | [#] | [+/-] |
| **Total** | [#] | [#] | [+/-] |

## Governance Model

### Decision Rights Matrix
| Decision Type | Decide | Approve | Consult | Inform |
|---------------|--------|---------|---------|--------|
| [Decision] | [Role] | [Role] | [Role] | [Role] |

### Committee Structure
| Committee | Purpose | Members | Frequency |
|-----------|---------|---------|-----------|
| [Committee] | [Purpose] | [Members] | [Frequency] |

### Escalation Path
```
Level 1: [Role] - [Scope]
    ↓
Level 2: [Role] - [Scope]
    ↓
Level 3: [Role] - [Scope]
```

## Implementation Plan

### Transition Approach
| Phase | Activities | Duration |
|-------|------------|----------|
| Design | Finalize structure, roles | [Weeks] |
| Announce | Communication, selection | [Weeks] |
| Implement | Role assignments, transitions | [Weeks] |
| Stabilize | Support, adjustment | [Weeks] |

### Change Management
| Activity | Timing | Owner |
|----------|--------|-------|
| Leadership alignment | Week [X] | [Owner] |
| Employee communication | Week [X] | [Owner] |
| Manager training | Week [X] | [Owner] |
| Role transitions | Week [X] | [Owner] |

### Risk Mitigation
| Risk | Mitigation |
|------|------------|
| [Risk] | [Action] |

## Success Metrics

| Metric | Current | Target | Timeline |
|--------|---------|--------|----------|
| Employee Engagement | [Score] | [Score] | [Date] |
| Decision Speed | [Time] | [Time] | [Date] |
| Span of Control | [Ratio] | [Ratio] | [Date] |
| Manager Effectiveness | [Score] | [Score] | [Date] |
```

---

## Skill 6: M&A Due Diligence

### Command: `/str-ma-dd`

### Purpose
Support M&A due diligence process including commercial, operational, and strategic assessment of targets.

### Inputs Required
```yaml
transaction_type: "acquisition|merger|divestiture|joint_venture"
target_company: "Target Name"
deal_rationale:
  - "Market expansion"
  - "Capability acquisition"
  - "Synergies"
diligence_scope:
  - "Commercial"
  - "Operational"
  - "Financial"
  - "Legal"
  - "IT"
  - "HR"
timeline:
  diligence_weeks: 6
  exclusivity_end: "2026-04-15"
```

### Due Diligence Framework

#### Diligence Workstreams

| Workstream | Focus | Key Questions |
|------------|-------|---------------|
| **Commercial** | Market, customers, competition | Sustainable revenue? |
| **Operational** | Processes, capabilities, assets | Scalable operations? |
| **Financial** | Financials, working capital | Quality of earnings? |
| **Legal** | Contracts, litigation, IP | Material liabilities? |
| **Tax** | Structure, exposures | Tax risks? |
| **IT** | Systems, security, technical debt | Integration complexity? |
| **HR** | People, culture, compensation | Retention risks? |

### Output: Due Diligence Report

```markdown
# M&A Due Diligence Report
## [Target Company Name]
### Date: [Date] | CONFIDENTIAL

## Executive Summary

**Transaction Type:** [Type]
**Deal Rationale:** [Rationale]
**Overall Assessment:** [Proceed|Proceed with Conditions|Do Not Proceed]
**Valuation Range:** $[X]M - $[X]M
**Key Issues:** [Top 3]
**Synergy Potential:** $[X]M

## Deal Overview

### Transaction Summary
| Attribute | Value |
|-----------|-------|
| Target | [Company Name] |
| Seller | [Seller] |
| Transaction Type | [Type] |
| Indicated Value | $[X]M |
| Structure | [Stock/Asset] |
| Expected Close | [Date] |

### Strategic Rationale
| Rationale | Priority | Validation |
|-----------|----------|------------|
| [Rationale 1] | [H/M/L] | [Validated/At Risk] |

## Target Overview

### Company Profile
| Attribute | Value |
|-----------|-------|
| Founded | [Year] |
| Headquarters | [Location] |
| Employees | [#] |
| Revenue (LTM) | $[X]M |
| EBITDA (LTM) | $[X]M |
| Key Products/Services | [List] |
| Key Customers | [List] |

## Diligence Findings

### Commercial Due Diligence

#### Market Position
| Metric | Value | Assessment |
|--------|-------|------------|
| Market Share | [%] | [Strong/Adequate/Weak] |
| Market Growth | [%] | [Attractive/Moderate/Declining] |
| Competitive Position | [Rank] | [Leader/Challenger/Follower] |

#### Customer Analysis
| Metric | Value | Risk Level |
|--------|-------|------------|
| Customer Concentration (Top 10) | [%] | [H/M/L] |
| Customer Retention | [%] | [H/M/L] |
| Contract Renewals | [%] | [H/M/L] |

**Key Findings:**
- [Finding 1]
- [Finding 2]

**Red Flags:**
- [Red Flag]

---

### Operational Due Diligence

#### Operations Assessment
| Area | Status | Issues |
|------|--------|--------|
| Facilities | [Good/Fair/Poor] | [Issues] |
| Equipment | [Good/Fair/Poor] | [Issues] |
| Supply Chain | [Good/Fair/Poor] | [Issues] |
| Quality | [Good/Fair/Poor] | [Issues] |

#### Capacity Analysis
| Metric | Current | Potential |
|--------|---------|-----------|
| Utilization | [%] | [%] |
| Capacity | [Units] | [Units] |

**Key Findings:**
- [Finding]

---

### Financial Due Diligence

#### Quality of Earnings
| Adjustment | Amount | Description |
|------------|--------|-------------|
| Reported EBITDA | $[X]M | Per management |
| [Adjustment 1] | ($[X]M) | [Description] |
| [Adjustment 2] | $[X]M | [Description] |
| **Adjusted EBITDA** | $[X]M | **Normalized** |

#### Working Capital
| Component | Actual | Normalized | PEG |
|-----------|--------|------------|-----|
| Receivables | $[X]M | $[X]M | $[X]M |
| Inventory | $[X]M | $[X]M | $[X]M |
| Payables | ($[X]M) | ($[X]M) | ($[X]M) |
| **NWC** | $[X]M | $[X]M | $[X]M |

#### Historical Financials
| Metric | Year -2 | Year -1 | LTM |
|--------|---------|---------|-----|
| Revenue | $[X]M | $[X]M | $[X]M |
| Gross Margin | [%] | [%] | [%] |
| EBITDA | $[X]M | $[X]M | $[X]M |
| EBITDA Margin | [%] | [%] | [%] |

---

### IT Due Diligence

#### Systems Assessment
| System | Vendor | Age | Condition | Integration |
|--------|--------|-----|-----------|-------------|
| ERP | [Vendor] | [Yrs] | [G/F/P] | [Easy/Moderate/Complex] |
| CRM | [Vendor] | [Yrs] | [G/F/P] | [Easy/Moderate/Complex] |

#### Technical Debt
| Item | Severity | Remediation Cost |
|------|----------|------------------|
| [Item] | [H/M/L] | $[X] |

---

### HR Due Diligence

#### Workforce Analysis
| Metric | Value | Concern |
|--------|-------|---------|
| Total Employees | [#] | - |
| Turnover Rate | [%] | [H/M/L] |
| Key Person Risk | [#] | [H/M/L] |
| Union Representation | [%] | [H/M/L] |

#### Compensation Analysis
| Level | Target vs Market | Gap |
|-------|------------------|-----|
| Executive | [%] | [+/-] |
| Professional | [%] | [+/-] |
| Hourly | [%] | [+/-] |

## Synergy Analysis

### Revenue Synergies
| Synergy | Annual Value | Confidence | Timeline |
|---------|--------------|------------|----------|
| Cross-sell | $[X]M | [H/M/L] | Year [X] |
| Geographic | $[X]M | [H/M/L] | Year [X] |
| **Total Revenue** | $[X]M | | |

### Cost Synergies
| Synergy | Annual Value | Confidence | Timeline |
|---------|--------------|------------|----------|
| Headcount | $[X]M | [H/M/L] | Year [X] |
| Procurement | $[X]M | [H/M/L] | Year [X] |
| Facility | $[X]M | [H/M/L] | Year [X] |
| **Total Cost** | $[X]M | | |

### Integration Costs
| Category | One-Time Cost |
|----------|---------------|
| Severance | $[X]M |
| IT Integration | $[X]M |
| Rebranding | $[X]M |
| **Total** | $[X]M |

## Valuation Implications

### Valuation Summary
| Methodology | Value Range |
|-------------|-------------|
| DCF | $[X]M - $[X]M |
| Comparable Transactions | $[X]M - $[X]M |
| LBO | $[X]M - $[X]M |
| **Indicated Range** | $[X]M - $[X]M |

### Price Adjustments
| Item | Adjustment |
|------|------------|
| QoE Adjustments | ($[X]M) |
| Working Capital | ($[X]M) |
| Synergy Value | $[X]M |
| Integration Costs | ($[X]M) |

## Risk Summary

### Deal Risks
| Risk | Severity | Mitigation |
|------|----------|------------|
| [Risk] | [Critical/High/Medium/Low] | [Action] |

### Deal Breakers
- [Issue requiring resolution before proceed]

## Recommendations

### Proceed/No-Proceed
**Recommendation:** [Proceed with conditions]

### Conditions
1. [Condition]
2. [Condition]

### Negotiation Points
| Point | Position | Rationale |
|-------|----------|-----------|
| Price | [Position] | [Why] |
| Structure | [Position] | [Why] |
| Rep & Warranties | [Position] | [Why] |

## Next Steps
1. [Action]
2. [Action]
```

---

## Skill 7: Strategic Planning

### Command: `/str-planning`

### Purpose
Facilitate strategic planning process including vision development, strategic analysis, goal setting, and implementation planning.

### Inputs Required
```yaml
planning_scope: "corporate|business_unit|functional"
planning_horizon: "3-5 years"
organization_name: "Organization Name"
current_situation:
  revenue: 100000000
  market_position: "challenger"
  key_challenges: ["Challenge 1", "Challenge 2"]
planning_approach: "facilitated|consultant-led|hybrid"
stakeholders:
  - "Executive team"
  - "Board"
  - "Key managers"
```

### Strategic Planning Framework

#### Planning Process

| Phase | Activities | Output |
|-------|------------|--------|
| 1. Assessment | Situation analysis, SWOT | Current state |
| 2. Direction | Vision, mission, values | Strategic intent |
| 3. Strategy | Strategic options, choices | Strategy statement |
| 4. Goals | Objectives, measures | Strategic goals |
| 5. Initiatives | Projects, programs | Implementation plan |
| 6. Execution | Governance, monitoring | Execution system |

### Output: Strategic Plan

```markdown
# Strategic Plan
## [Organization Name]
### Planning Horizon: [Years]
### Date: [Date]

## Executive Summary

**Vision:** [Vision statement]
**Strategic Theme:** [Overarching theme]
**Key Strategies:** [3-5 strategies]
**Expected Outcomes:** [Key outcomes]

## Part 1: Strategic Context

### Mission, Vision, Values

**Mission:** [Why we exist]

**Vision:** [What we aspire to become]

**Values:**
1. [Value 1] - [Description]
2. [Value 2] - [Description]

### Current Situation

#### Performance Summary
| Metric | Current | 3-Year Trend |
|--------|---------|--------------|
| Revenue | $[X]M | [Trend] |
| Profitability | [X]% | [Trend] |
| Market Share | [X]% | [Trend] |
| Customer Satisfaction | [Score] | [Trend] |

#### Market Position
[Description of current market position]

### SWOT Analysis

| Strengths | Weaknesses |
|-----------|------------|
| • [Strength 1] | • [Weakness 1] |
| • [Strength 2] | • [Weakness 2] |

| Opportunities | Threats |
|---------------|---------|
| • [Opportunity 1] | • [Threat 1] |
| • [Opportunity 2] | • [Threat 2] |

### Key Strategic Issues
1. [Issue 1]
2. [Issue 2]
3. [Issue 3]

## Part 2: Strategic Direction

### Strategic Aspirations

| Dimension | Current | [Year +3] | [Year +5] |
|-----------|---------|-----------|-----------|
| Revenue | $[X]M | $[X]M | $[X]M |
| Market Position | [Position] | [Position] | [Position] |
| Geographic Reach | [Current] | [Target] | [Target] |

### Strategic Choices

#### Where to Play
| Dimension | Choice | Rationale |
|-----------|--------|-----------|
| Markets | [Markets] | [Why] |
| Customers | [Segments] | [Why] |
| Geographies | [Regions] | [Why] |
| Products/Services | [Offerings] | [Why] |

#### How to Win
| Dimension | Approach | Rationale |
|-----------|----------|-----------|
| Value Proposition | [Proposition] | [Why] |
| Competitive Advantage | [Advantage] | [Why] |
| Business Model | [Model] | [Why] |

## Part 3: Strategic Pillars

### Strategic Pillar 1: [Name]

**Objective:** [What we will achieve]

**Rationale:** [Why this matters]

**Key Initiatives:**
1. [Initiative A]
2. [Initiative B]

**Success Metrics:**
| Metric | Baseline | Target | Timeline |
|--------|----------|--------|----------|
| [Metric] | [Current] | [Target] | [Year] |

---

### Strategic Pillar 2: [Name]
[Same format]

---

### Strategic Pillar 3: [Name]
[Same format]

## Part 4: Goals & Objectives

### Strategic Objectives (Balanced Scorecard)

#### Financial Perspective
| Objective | Measure | Target | Timeline |
|-----------|---------|--------|----------|
| [Objective] | [KPI] | [Target] | [Year] |

#### Customer Perspective
| Objective | Measure | Target | Timeline |
|-----------|---------|--------|----------|
| [Objective] | [KPI] | [Target] | [Year] |

#### Internal Process Perspective
| Objective | Measure | Target | Timeline |
|-----------|---------|--------|----------|
| [Objective] | [KPI] | [Target] | [Year] |

#### Learning & Growth Perspective
| Objective | Measure | Target | Timeline |
|-----------|---------|--------|----------|
| [Objective] | [KPI] | [Target] | [Year] |

## Part 5: Implementation

### Initiative Portfolio

| Initiative | Pillar | Owner | Timeline | Investment | Priority |
|------------|--------|-------|----------|------------|----------|
| [Initiative] | [#] | [Name] | [Dates] | $[X] | [H/M/L] |

### Resource Requirements

| Category | Year 1 | Year 2 | Year 3 | Total |
|----------|--------|--------|--------|-------|
| CapEx | $[X] | $[X] | $[X] | $[X] |
| OpEx | $[X] | $[X] | $[X] | $[X] |
| FTEs | [#] | [#] | [#] | - |

### Implementation Roadmap

```
Year 1: Foundation
├── Q1: [Initiatives]
├── Q2: [Initiatives]
├── Q3: [Initiatives]
└── Q4: [Initiatives]

Year 2: Acceleration
├── [Initiatives]

Year 3: Optimization
├── [Initiatives]
```

## Part 6: Governance & Monitoring

### Governance Structure

| Forum | Purpose | Frequency | Participants |
|-------|---------|-----------|--------------|
| Strategy Review | Progress, decisions | Quarterly | Exec team |
| Initiative Steering | Project oversight | Monthly | Sponsors |
| Board Update | Strategic update | Quarterly | Board |

### Monitoring & Reporting

| Report | Content | Frequency | Owner |
|--------|---------|-----------|-------|
| Strategy Scorecard | KPI dashboard | Monthly | Strategy |
| Initiative Status | Project updates | Bi-weekly | PMO |
| Risk Report | Risk tracking | Monthly | Risk |

### Risk Management

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| [Risk] | [H/M/L] | [H/M/L] | [Action] |

## Appendices
### A. Detailed Initiative Plans
### B. Financial Projections
### C. Organization Implications
```

---

## Skill 8: Cost Optimization

### Command: `/str-cost-opt`

### Purpose
Identify and prioritize cost optimization opportunities across the organization while maintaining operational effectiveness.

### Inputs Required
```yaml
optimization_scope: "enterprise|division|function"
organization_name: "Organization Name"
cost_baseline:
  total_costs: 50000000
  categories:
    - name: "Personnel"
      amount: 25000000
    - name: "Facilities"
      amount: 5000000
    - name: "Technology"
      amount: 8000000
target_reduction: 15
constraints:
  - "No layoffs"
  - "Maintain service levels"
  - "Preserve strategic capabilities"
```

### Cost Optimization Framework

#### Cost Categories

| Category | Typical Opportunities |
|----------|----------------------|
| **Personnel** | Spans, layers, productivity, outsourcing |
| **Procurement** | Consolidation, negotiation, demand |
| **Real Estate** | Footprint, utilization, remote work |
| **Technology** | Rationalization, cloud, automation |
| **G&A** | Travel, marketing, professional services |
| **Operations** | Process efficiency, waste reduction |

#### Optimization Levers

| Lever | Description | Typical Savings |
|-------|-------------|-----------------|
| **Eliminate** | Stop doing entirely | High |
| **Standardize** | One way of working | Medium |
| **Consolidate** | Combine activities | Medium |
| **Automate** | Technology enablement | Medium-High |
| **Outsource** | Third-party delivery | Medium |
| **Renegotiate** | Better terms | Low-Medium |

### Output: Cost Optimization Report

```markdown
# Cost Optimization Report
## [Organization Name]
### Date: [Date]

## Executive Summary

**Total Cost Base:** $[X]M
**Identified Savings:** $[X]M ([X]%)
**Quick Wins:** $[X]M
**Implementation Investment:** $[X]M
**Net Savings (3-Year):** $[X]M

## Cost Baseline Analysis

### Total Cost Structure
| Category | Amount | % of Total | vs. Benchmark |
|----------|--------|------------|---------------|
| Personnel | $[X]M | [X]% | [+/-]% |
| Technology | $[X]M | [X]% | [+/-]% |
| Facilities | $[X]M | [X]% | [+/-]% |
| Procurement | $[X]M | [X]% | [+/-]% |
| G&A | $[X]M | [X]% | [+/-]% |
| **Total** | $[X]M | 100% | - |

### Cost Trends
| Category | Year -2 | Year -1 | Current | CAGR |
|----------|---------|---------|---------|------|
| [Category] | $[X] | $[X] | $[X] | [X]% |

### Benchmarking
| Metric | [Company] | Industry Avg | Best Practice | Gap |
|--------|-----------|--------------|---------------|-----|
| Cost/Revenue | [X]% | [X]% | [X]% | [X]% |
| Cost/Employee | $[X]K | $[X]K | $[X]K | [X]% |

## Optimization Opportunities

### Summary by Category
| Category | Savings Potential | Effort | Priority |
|----------|-------------------|--------|----------|
| Personnel | $[X]M | [H/M/L] | [1-5] |
| Technology | $[X]M | [H/M/L] | [1-5] |
| Procurement | $[X]M | [H/M/L] | [1-5] |
| Facilities | $[X]M | [H/M/L] | [1-5] |
| G&A | $[X]M | [H/M/L] | [1-5] |
| **Total** | $[X]M | | |

### Detailed Opportunities

#### Personnel Optimization

| Opportunity | Savings | FTE Impact | Effort | Risk |
|-------------|---------|------------|--------|------|
| Span of control optimization | $[X]M | [#] | [H/M/L] | [H/M/L] |
| Process automation | $[X]M | [#] | [H/M/L] | [H/M/L] |
| Outsourcing non-core | $[X]M | [#] | [H/M/L] | [H/M/L] |
| **Subtotal** | $[X]M | [#] | | |

**Detail: Span of Control Optimization**
- Current State: [Description]
- Opportunity: [Description]
- Savings Calculation: [Calculation]
- Implementation: [Approach]
- Risks: [Risks]

---

#### Technology Optimization

| Opportunity | Savings | Effort | Risk |
|-------------|---------|--------|------|
| Application rationalization | $[X]M | [H/M/L] | [H/M/L] |
| Cloud migration | $[X]M | [H/M/L] | [H/M/L] |
| License optimization | $[X]M | [H/M/L] | [H/M/L] |
| **Subtotal** | $[X]M | | |

---

#### Procurement Optimization

| Opportunity | Savings | Effort | Risk |
|-------------|---------|--------|------|
| Contract renegotiation | $[X]M | [H/M/L] | [H/M/L] |
| Supplier consolidation | $[X]M | [H/M/L] | [H/M/L] |
| Demand management | $[X]M | [H/M/L] | [H/M/L] |
| **Subtotal** | $[X]M | | |

---

#### Facilities Optimization

| Opportunity | Savings | Effort | Risk |
|-------------|---------|--------|------|
| Footprint reduction | $[X]M | [H/M/L] | [H/M/L] |
| Hybrid work model | $[X]M | [H/M/L] | [H/M/L] |
| Energy efficiency | $[X]M | [H/M/L] | [H/M/L] |
| **Subtotal** | $[X]M | | |

---

#### G&A Optimization

| Opportunity | Savings | Effort | Risk |
|-------------|---------|--------|------|
| Travel policy | $[X]M | [H/M/L] | [H/M/L] |
| Marketing efficiency | $[X]M | [H/M/L] | [H/M/L] |
| Professional services | $[X]M | [H/M/L] | [H/M/L] |
| **Subtotal** | $[X]M | | |

## Prioritization Matrix

### Quick Wins (High Impact, Low Effort)
| # | Opportunity | Savings | Timeline |
|---|-------------|---------|----------|
| 1 | [Opportunity] | $[X]M | [Months] |

### Major Projects (High Impact, High Effort)
| # | Opportunity | Savings | Timeline |
|---|-------------|---------|----------|
| 1 | [Opportunity] | $[X]M | [Months] |

### Easy Wins (Low Impact, Low Effort)
| # | Opportunity | Savings | Timeline |
|---|-------------|---------|----------|
| 1 | [Opportunity] | $[X]M | [Months] |

### Reconsider (Low Impact, High Effort)
[List opportunities to defer or eliminate]

## Implementation Plan

### Phased Approach

| Phase | Focus | Savings | Timeline |
|-------|-------|---------|----------|
| 1: Quick Wins | [Focus areas] | $[X]M | Months 1-3 |
| 2: Core Program | [Focus areas] | $[X]M | Months 4-12 |
| 3: Transformation | [Focus areas] | $[X]M | Months 13-24 |

### Investment Requirements
| Category | Amount | Purpose |
|----------|--------|---------|
| Technology | $[X]M | Automation, migration |
| Severance | $[X]M | Workforce transition |
| Consulting | $[X]M | Implementation support |
| **Total** | $[X]M | |

### Savings Timeline
| Quarter | Run Rate Savings | Cumulative |
|---------|------------------|------------|
| Q1 | $[X]M | $[X]M |
| Q2 | $[X]M | $[X]M |
| Q3 | $[X]M | $[X]M |
| Q4 | $[X]M | $[X]M |

## Governance

### Program Structure
| Role | Responsibility | Name |
|------|----------------|------|
| Executive Sponsor | Oversight, decisions | [Name] |
| Program Lead | Day-to-day management | [Name] |
| Workstream Leads | Category delivery | [Names] |

### Tracking & Reporting
| Report | Frequency | Audience |
|--------|-----------|----------|
| Savings Tracker | Weekly | Program team |
| Executive Dashboard | Monthly | Leadership |
| Board Update | Quarterly | Board |

## Risk Management

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Employee morale | [H/M/L] | [H/M/L] | [Action] |
| Service disruption | [H/M/L] | [H/M/L] | [Action] |
| Implementation delays | [H/M/L] | [H/M/L] | [Action] |

## Appendices
### A. Detailed Opportunity Calculations
### B. Benchmarking Data
### C. Implementation Workplans
```

---

## Service Line Integration

### Fee Modifier
**STR Base Modifier:** 1.10 (applied to standard rates)

### Typical Engagement Phases

| Phase | Duration | Deliverables |
|-------|----------|--------------|
| Discovery | 2-3 weeks | Current state, data gathering |
| Analysis | 3-4 weeks | Assessment, modeling, options |
| Recommendations | 2-3 weeks | Strategy, implementation plan |
| Implementation Support | Variable | Execution support |

### Cross-Skill Workflows

```
Strategic Transformation:
/str-market → /str-competitive → /str-planning →
/str-org-design → /str-ops-assess → Implementation

M&A Advisory:
/str-competitive → /str-ma-dd → /str-financial-model →
Negotiation → /esi-assess → Integration

Cost Transformation:
/str-ops-assess → /str-cost-opt → /str-org-design →
/aai-assess → Implementation

Market Entry:
/str-market → /str-competitive → /str-financial-model →
/str-planning → Go-to-market execution
```

### Integration with Other Service Lines

| Service Line | Integration Point |
|--------------|-------------------|
| DIG | Digital strategy component |
| AAI | Automation in operations |
| COE | Performance dashboards |
| ESI | System integration in M&A |
| ISO | Quality management in operations |

---

## Templates & Artifacts

All STR deliverables should use standard Omega branding via:
- `/doc-gen` for document generation
- `assets/omega-branding.json` for styling
- `scripts/omega-document-generator.js` for automation

### Standard Artifacts by Skill

| Skill | Primary Artifact | Format |
|-------|------------------|--------|
| /str-market | Market Analysis Report | DOCX/PDF |
| /str-competitive | Competitive Intelligence Report | DOCX/PDF |
| /str-financial-model | Financial Model + Documentation | XLSX/DOCX |
| /str-ops-assess | Operations Assessment | DOCX/PDF |
| /str-org-design | Org Design Document | DOCX/PPTX |
| /str-ma-dd | Due Diligence Report | DOCX/PDF |
| /str-planning | Strategic Plan | DOCX/PPTX |
| /str-cost-opt | Cost Optimization Report | DOCX/PDF |
