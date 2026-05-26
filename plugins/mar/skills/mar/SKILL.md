---
name: mar
description: Maritime Industry Solutions skills - port operations, fleet management, IMO compliance
---

# MAR - Maritime Industry Solutions Skills

## Service Line Overview

**Code:** MAR
**Full Name:** Maritime Industry Solutions
**Fee Modifier:** 1.15
**Description:** Port operations, fleet management, maritime compliance (IMO, MARPOL, SOLAS)

---

## Skills Index

| # | Skill | Command | Purpose | Status |
|---|-------|---------|---------|--------|
| 1 | Port Operations Assessment | `/mar-port-ops` | Assess port operations efficiency | ✅ BUILT |
| 2 | Environmental Risk Assessment | `/mar-env-risk` | Maritime environmental risk assessment | ✅ BUILT |
| 3 | Fleet Management Analysis | `/mar-fleet` | Analyze fleet management efficiency | NEW |
| 4 | IMO Compliance Check | `/mar-imo` | Check IMO compliance status | NEW |
| 5 | MARPOL Gap Analysis | `/mar-marpol` | MARPOL compliance gap analysis | NEW |
| 6 | SOLAS Compliance | `/mar-solas` | SOLAS safety compliance check | NEW |
| 7 | Terminal Capacity Planning | `/mar-capacity` | Plan terminal capacity | NEW |
| 8 | Vessel Traffic Analysis | `/mar-traffic` | Analyze vessel traffic patterns | NEW |
| 9 | BOT/PPP Feasibility | `/mar-bot-feasibility` | Maritime BOT project feasibility | NEW |

---

## Skill 1: Port Operations Assessment

### Command: `/mar-port-ops`

**Status:** ✅ Already built as separate skill file

See: `.claude/skills/maritime-port-operations/SKILL.md`

---

## Skill 2: Environmental Risk Assessment

### Command: `/mar-env-risk`

**Status:** ✅ Already built as separate skill file

See: `.claude/skills/maritime-environmental-risk/SKILL.md`

---

## Skill 3: Fleet Management Analysis

### Command: `/mar-fleet`

### Purpose
Analyze fleet management efficiency including vessel utilization, maintenance, crewing, and operational performance.

### Inputs Required
```yaml
fleet_owner: "Company Name"
fleet_profile:
  total_vessels: 25
  vessel_types:
    - type: "Container"
      count: 10
      avg_age: 8
      capacity_teu: 4500
    - type: "Bulk Carrier"
      count: 15
      avg_age: 12
      capacity_dwt: 75000
operational_areas:
  - "Mediterranean"
  - "Red Sea"
  - "Arabian Gulf"
current_performance:
  utilization_rate: 75
  voyage_days: 280
  port_days: 85
analysis_focus:
  - "Vessel utilization"
  - "Maintenance efficiency"
  - "Crewing optimization"
  - "Fuel consumption"
  - "Commercial performance"
```

### Fleet Management Framework

#### Performance Dimensions

| Dimension | Key Metrics | Target Range |
|-----------|-------------|--------------|
| **Utilization** | Sea days, port days, idle days | > 85% utilization |
| **Maintenance** | MTBF, PMS compliance, dry dock efficiency | > 95% PMS |
| **Crewing** | Manning efficiency, certification, retention | < 10% turnover |
| **Fuel** | Consumption vs design, CII rating | Top quartile |
| **Commercial** | TCE, voyage margin, fixture rate | Above market |

#### Fleet KPIs

| KPI | Formula | Benchmark |
|-----|---------|-----------|
| Fleet Utilization | (Sea Days + Port Days) / Calendar Days | > 90% |
| Voyage Efficiency | Revenue Days / Available Days | > 85% |
| Technical Availability | Operating Days / Calendar Days | > 98% |
| PMS Compliance | Completed Tasks / Scheduled Tasks | > 95% |
| Crew Stability | Retained Crew / Total Crew | > 90% |
| Fuel Efficiency | MT/Nautical Mile | Vs design |

### Output: Fleet Management Assessment

```markdown
# Fleet Management Assessment
## [Fleet Owner Name]
### Assessment Date: [Date]

## Executive Summary

**Overall Fleet Health:** [Excellent|Good|Fair|Poor]
**Fleet Utilization:** [X]%
**Technical Availability:** [X]%
**Key Issues:** [Count]
**Optimization Potential:** $[X]M annually

## Fleet Profile

### Fleet Composition
| Vessel Type | Count | Avg Age | Avg Capacity | Total Capacity |
|-------------|-------|---------|--------------|----------------|
| Container | [#] | [Yrs] | [TEU] | [TEU] |
| Bulk Carrier | [#] | [Yrs] | [DWT] | [DWT] |
| Tanker | [#] | [Yrs] | [DWT] | [DWT] |
| **Total** | [#] | [Yrs] | - | - |

### Fleet Age Profile
| Age Range | Count | % of Fleet | Condition |
|-----------|-------|------------|-----------|
| 0-5 years | [#] | [%] | [Good/Fair/Poor] |
| 5-10 years | [#] | [%] | [Good/Fair/Poor] |
| 10-15 years | [#] | [%] | [Good/Fair/Poor] |
| 15+ years | [#] | [%] | [Good/Fair/Poor] |

### Trading Areas
| Region | Vessels | % of Fleet | Revenue Share |
|--------|---------|------------|---------------|
| [Region] | [#] | [%] | [%] |

## Operational Performance

### Utilization Analysis
| Metric | Current | Target | Gap | Benchmark |
|--------|---------|--------|-----|-----------|
| Sea Days | [Days] | [Days] | [+/-] | [Benchmark] |
| Port Days | [Days] | [Days] | [+/-] | [Benchmark] |
| Idle Days | [Days] | [Days] | [+/-] | [Benchmark] |
| Utilization Rate | [%] | [%] | [+/-] | [Benchmark] |

### Utilization by Vessel
| Vessel | Type | Utilization | Days Idle | Issue |
|--------|------|-------------|-----------|-------|
| [Name] | [Type] | [%] | [Days] | [Issue] |

### Voyage Performance
| Metric | Current | Target | Industry Avg |
|--------|---------|--------|--------------|
| Avg Voyage Duration | [Days] | [Days] | [Days] |
| Port Turnaround | [Hours] | [Hours] | [Hours] |
| Ballast Ratio | [%] | [%] | [%] |
| Voyage Efficiency | [%] | [%] | [%] |

## Technical Performance

### Maintenance Metrics
| Metric | Current | Target | Trend |
|--------|---------|--------|-------|
| PMS Compliance | [%] | 95% | [↑↓→] |
| Overdue Work Orders | [#] | 0 | [↑↓→] |
| Critical Defects | [#] | 0 | [↑↓→] |
| Technical Availability | [%] | 98% | [↑↓→] |

### Dry Dock Performance
| Vessel | Last Dry Dock | Next Due | Days in Dock | Budget vs Actual |
|--------|---------------|----------|--------------|------------------|
| [Name] | [Date] | [Date] | [Days] | [+/-]% |

### Class Status
| Vessel | Class Society | Survey Status | Next Survey |
|--------|---------------|---------------|-------------|
| [Name] | [Class] | [Current/Overdue] | [Date] |

## Crewing Analysis

### Manning Overview
| Category | Required | Actual | Variance |
|----------|----------|--------|----------|
| Officers | [#] | [#] | [+/-] |
| Ratings | [#] | [#] | [+/-] |
| Trainees | [#] | [#] | [+/-] |
| **Total** | [#] | [#] | [+/-] |

### Crew Metrics
| Metric | Current | Target | Benchmark |
|--------|---------|--------|-----------|
| Turnover Rate | [%] | < 10% | [%] |
| Certification Compliance | [%] | 100% | 100% |
| Training Hours/Crew | [Hrs] | [Target] | [Benchmark] |
| LTIF | [Rate] | 0 | [Industry] |

### Nationality Mix
| Nationality | Officers | Ratings | % of Fleet |
|-------------|----------|---------|------------|
| [Country] | [#] | [#] | [%] |

## Fuel Performance

### Consumption Analysis
| Vessel Type | Design | Actual | Variance | CII Rating |
|-------------|--------|--------|----------|------------|
| [Type] | [MT/day] | [MT/day] | [+/-]% | [A-E] |

### Fuel Cost Impact
| Factor | Impact | Annual Cost |
|--------|--------|-------------|
| Over-consumption | [MT] | $[X]M |
| Speed optimization | [Potential] | $[X]M |
| Hull condition | [Fouling %] | $[X]M |

### Environmental Compliance
| Metric | Current | 2026 Req | Status |
|--------|---------|----------|--------|
| Fleet CII Rating | [Avg] | [Target] | [On track/At risk] |
| Vessels A/B rated | [%] | 100% | [Gap] |
| EEXI Compliance | [%] | 100% | [Gap] |

## Commercial Performance

### Revenue Metrics
| Metric | Current | Target | Market |
|--------|---------|--------|--------|
| Avg TCE | $[X]/day | $[X]/day | $[X]/day |
| Voyage Margin | [%] | [%] | [%] |
| Charter Coverage | [%] | [%] | - |

### Charter Performance
| Charter Type | Vessels | Avg Rate | vs Market |
|--------------|---------|----------|-----------|
| Time Charter | [#] | $[X]/day | [+/-]% |
| Voyage Charter | [#] | $[X]/day | [+/-]% |
| Spot | [#] | $[X]/day | [+/-]% |

## Recommendations

### Quick Wins (0-6 months)
| # | Recommendation | Savings/Benefit | Effort |
|---|----------------|-----------------|--------|
| 1 | [Recommendation] | $[X]/year | [L/M/H] |

### Medium-term (6-12 months)
| # | Recommendation | Savings/Benefit | Effort |
|---|----------------|-----------------|--------|
| 1 | [Recommendation] | $[X]/year | [L/M/H] |

### Strategic (12+ months)
| # | Recommendation | Savings/Benefit | Effort |
|---|----------------|-----------------|--------|
| 1 | [Recommendation] | $[X]/year | [L/M/H] |

## Fleet Renewal Recommendations

| Vessel | Age | Condition | Recommendation | Timeline |
|--------|-----|-----------|----------------|----------|
| [Name] | [Yrs] | [G/F/P] | [Keep/Sell/Scrap] | [Date] |

## Implementation Roadmap

### Phase 1: Foundation
- Establish KPI tracking
- Address critical maintenance
- Crew retention program

### Phase 2: Optimization
- Fuel efficiency initiatives
- Voyage optimization
- Maintenance planning

### Phase 3: Transformation
- Fleet renewal strategy
- Digital fleet management
- Decarbonization pathway
```

---

## Skill 4: IMO Compliance Check

### Command: `/mar-imo`

### Purpose
Comprehensive compliance assessment against International Maritime Organization conventions and regulations.

### Inputs Required
```yaml
assessment_scope: "vessel|fleet|company"
entity_name: "Entity Name"
vessel_type: "cargo|tanker|passenger|offshore"
flag_state: "Country"
trading_areas:
  - "International"
  - "ECA zones"
conventions_focus:
  - "SOLAS"
  - "MARPOL"
  - "STCW"
  - "MLC"
  - "ISM"
  - "ISPS"
current_certifications:
  - name: "SMC"
    expiry: "2027-03-15"
    status: "valid"
```

### IMO Convention Framework

#### Key IMO Conventions

| Convention | Full Name | Focus |
|------------|-----------|-------|
| **SOLAS** | Safety of Life at Sea | Ship safety, construction, equipment |
| **MARPOL** | Marine Pollution | Environmental protection |
| **STCW** | Standards of Training, Certification | Seafarer competency |
| **MLC** | Maritime Labour Convention | Seafarer welfare |
| **ISM** | International Safety Management | Safety management systems |
| **ISPS** | International Ship & Port Security | Security measures |
| **BWM** | Ballast Water Management | Invasive species prevention |
| **AFS** | Anti-Fouling Systems | Harmful coatings prevention |

#### Recent/Upcoming IMO Requirements

| Requirement | Convention | Effective Date | Impact |
|-------------|------------|----------------|--------|
| CII Ratings | MARPOL | 2023 | Annual rating A-E |
| EEXI | MARPOL | 2023 | Energy efficiency |
| Cyber Risk | ISM | 2021 | Cyber security |
| BWM Convention | BWM | 2024 | All vessels |

### Output: IMO Compliance Assessment

```markdown
# IMO Compliance Assessment
## [Entity Name]
### Assessment Date: [Date]

## Executive Summary

**Overall Compliance Status:** [Compliant|Minor Deficiencies|Major Deficiencies]
**Conventions Assessed:** [Count]
**Compliant:** [Count]
**Deficiencies Found:** [Count]
**Critical Issues:** [Count]

## Entity Profile

| Attribute | Value |
|-----------|-------|
| Entity Type | [Vessel/Fleet/Company] |
| Flag State | [Country] |
| Classification Society | [Class] |
| ISM Company | [Company] |
| Trading Areas | [Areas] |

## Certificate Status

### Statutory Certificates
| Certificate | Issuing Authority | Issue Date | Expiry | Status |
|-------------|-------------------|------------|--------|--------|
| International Tonnage | [Authority] | [Date] | [N/A] | [Valid] |
| Safety Management (SMC) | [Authority] | [Date] | [Date] | [Status] |
| Document of Compliance (DOC) | [Authority] | [Date] | [Date] | [Status] |
| ISSC | [Authority] | [Date] | [Date] | [Status] |
| Load Line | [Authority] | [Date] | [Date] | [Status] |
| IOPP | [Authority] | [Date] | [Date] | [Status] |
| AFS | [Authority] | [Date] | [Date] | [Status] |
| BWM | [Authority] | [Date] | [Date] | [Status] |

### Class Certificates
| Certificate | Class Society | Issue Date | Expiry | Status |
|-------------|---------------|------------|--------|--------|
| Class Certificate | [Class] | [Date] | [Date] | [Status] |
| Safety Equipment | [Class] | [Date] | [Date] | [Status] |
| Safety Construction | [Class] | [Date] | [Date] | [Status] |
| Safety Radio | [Class] | [Date] | [Date] | [Status] |

## Convention Compliance Assessment

### SOLAS Compliance

#### Chapter Overview
| Chapter | Subject | Status | Deficiencies |
|---------|---------|--------|--------------|
| I | General Provisions | [C/NC] | [#] |
| II-1 | Construction - Subdivision | [C/NC] | [#] |
| II-2 | Fire Protection | [C/NC] | [#] |
| III | Life-Saving Appliances | [C/NC] | [#] |
| IV | Radio Communications | [C/NC] | [#] |
| V | Safety of Navigation | [C/NC] | [#] |
| VI | Carriage of Cargoes | [C/NC] | [#] |
| VII | Dangerous Goods | [C/NC] | [#] |
| IX | ISM Code | [C/NC] | [#] |
| XI-1 | Ship Safety | [C/NC] | [#] |
| XI-2 | ISPS Code | [C/NC] | [#] |

#### SOLAS Deficiencies
| # | Chapter | Requirement | Finding | Severity | Deadline |
|---|---------|-------------|---------|----------|----------|
| 1 | [Ch] | [Requirement] | [Finding] | [Critical/Major/Minor] | [Date] |

---

### MARPOL Compliance

#### Annex Overview
| Annex | Subject | Applicable | Status | Deficiencies |
|-------|---------|------------|--------|--------------|
| I | Oil Pollution | [Y/N] | [C/NC] | [#] |
| II | Noxious Liquid Substances | [Y/N] | [C/NC] | [#] |
| III | Harmful Substances (Packaged) | [Y/N] | [C/NC] | [#] |
| IV | Sewage | [Y/N] | [C/NC] | [#] |
| V | Garbage | [Y/N] | [C/NC] | [#] |
| VI | Air Pollution | [Y/N] | [C/NC] | [#] |

#### EEXI & CII Status
| Metric | Required | Actual | Status |
|--------|----------|--------|--------|
| Attained EEXI | [Value] | [Value] | [Compliant/Non-compliant] |
| Current CII Rating | [A-E] | [Rating] | [On track/At risk] |
| Required CII (2026) | [Value] | [Projected] | [On track/At risk] |

#### MARPOL Deficiencies
| # | Annex | Requirement | Finding | Severity | Deadline |
|---|-------|-------------|---------|----------|----------|
| 1 | [Annex] | [Requirement] | [Finding] | [Severity] | [Date] |

---

### STCW Compliance

| Requirement | Status | Finding |
|-------------|--------|---------|
| Manning requirements | [C/NC] | [Finding] |
| Officer certificates | [C/NC] | [Finding] |
| Rating certificates | [C/NC] | [Finding] |
| Training records | [C/NC] | [Finding] |
| Rest hour compliance | [C/NC] | [Finding] |

---

### MLC Compliance

| Area | Status | Finding |
|------|--------|---------|
| Seafarer employment agreements | [C/NC] | [Finding] |
| Wages | [C/NC] | [Finding] |
| Hours of work/rest | [C/NC] | [Finding] |
| Accommodation | [C/NC] | [Finding] |
| Medical care | [C/NC] | [Finding] |
| Complaint procedures | [C/NC] | [Finding] |

---

### ISM Code Compliance

| Element | Status | Finding |
|---------|--------|---------|
| Safety & environmental policy | [C/NC] | [Finding] |
| Company responsibilities | [C/NC] | [Finding] |
| Designated Person Ashore | [C/NC] | [Finding] |
| Master's responsibility | [C/NC] | [Finding] |
| Resources and personnel | [C/NC] | [Finding] |
| Shipboard operations | [C/NC] | [Finding] |
| Emergency preparedness | [C/NC] | [Finding] |
| Reporting non-conformities | [C/NC] | [Finding] |
| Maintenance | [C/NC] | [Finding] |
| Documentation | [C/NC] | [Finding] |
| Internal audits | [C/NC] | [Finding] |
| Management review | [C/NC] | [Finding] |

---

### ISPS Code Compliance

| Requirement | Status | Finding |
|-------------|--------|---------|
| Ship Security Assessment | [C/NC] | [Finding] |
| Ship Security Plan | [C/NC] | [Finding] |
| Ship Security Officer | [C/NC] | [Finding] |
| Security training | [C/NC] | [Finding] |
| Security drills | [C/NC] | [Finding] |
| Security equipment | [C/NC] | [Finding] |

## Deficiency Summary

### By Severity
| Severity | Count | Required Action |
|----------|-------|-----------------|
| Critical | [#] | Immediate rectification |
| Major | [#] | Within 30 days |
| Minor | [#] | Within 90 days |
| Observation | [#] | Noted for improvement |

### By Convention
| Convention | Critical | Major | Minor | Total |
|------------|----------|-------|-------|-------|
| SOLAS | [#] | [#] | [#] | [#] |
| MARPOL | [#] | [#] | [#] | [#] |
| STCW | [#] | [#] | [#] | [#] |
| ISM | [#] | [#] | [#] | [#] |

## Corrective Action Plan

| # | Deficiency | Corrective Action | Owner | Due Date | Status |
|---|------------|-------------------|-------|----------|--------|
| 1 | [Deficiency] | [Action] | [Owner] | [Date] | [Status] |

## Upcoming Requirements

| Requirement | Convention | Effective Date | Current Status | Action Needed |
|-------------|------------|----------------|----------------|---------------|
| [Requirement] | [Conv] | [Date] | [Ready/Not Ready] | [Action] |

## Recommendations

### Critical (Immediate)
1. [Recommendation]

### High Priority (30 days)
1. [Recommendation]

### Medium Priority (90 days)
1. [Recommendation]
```

---

## Skill 5: MARPOL Gap Analysis

### Command: `/mar-marpol`

### Purpose
Detailed gap analysis specifically for MARPOL (International Convention for the Prevention of Pollution from Ships) compliance.

### Inputs Required
```yaml
assessment_scope: "vessel|fleet"
vessel_details:
  name: "Vessel Name"
  type: "tanker|bulk|container|passenger"
  flag: "Country"
  gross_tonnage: 50000
  dwt: 80000
  built: 2015
annexes_applicable:
  - annex_i: true
  - annex_ii: false
  - annex_iii: true
  - annex_iv: true
  - annex_v: true
  - annex_vi: true
trading_areas:
  - "ECA zones"
  - "International waters"
```

### MARPOL Annex Structure

| Annex | Subject | Applicability |
|-------|---------|---------------|
| **I** | Oil | All ships |
| **II** | NLS | Chemical tankers |
| **III** | Harmful substances | Ships carrying packaged goods |
| **IV** | Sewage | Ships ≥ 400 GT or 15+ persons |
| **V** | Garbage | All ships |
| **VI** | Air pollution | All ships |

### Output: MARPOL Gap Analysis Report

```markdown
# MARPOL Gap Analysis
## [Vessel/Fleet Name]
### Assessment Date: [Date]

## Executive Summary

**Overall MARPOL Compliance:** [X]%
**Applicable Annexes:** [Count]
**Gaps Identified:** [Count]
**Critical Gaps:** [Count]
**Estimated Remediation Cost:** $[X]

## Vessel/Fleet Profile

| Attribute | Value |
|-----------|-------|
| Vessel Name | [Name] |
| IMO Number | [Number] |
| Vessel Type | [Type] |
| Flag State | [Flag] |
| Gross Tonnage | [GT] |
| Built | [Year] |

## Annex Applicability Matrix

| Annex | Subject | Applicable | Rationale |
|-------|---------|------------|-----------|
| I | Oil | [Y/N] | [Reason] |
| II | NLS | [Y/N] | [Reason] |
| III | Harmful Substances | [Y/N] | [Reason] |
| IV | Sewage | [Y/N] | [Reason] |
| V | Garbage | [Y/N] | [Reason] |
| VI | Air Pollution | [Y/N] | [Reason] |

## Annex I - Oil Pollution

### Certificate Status
| Certificate | Required | Available | Expiry | Status |
|-------------|----------|-----------|--------|--------|
| IOPP Certificate | [Y/N] | [Y/N] | [Date] | [Valid/Expired] |

### Equipment & Systems
| Requirement | Standard | Current Status | Gap |
|-------------|----------|----------------|-----|
| Oily Water Separator | 15 ppm | [Status] | [Y/N] |
| Oil Discharge Monitor | Reg 14 | [Status] | [Y/N] |
| Oil Record Book | Part I | [Status] | [Y/N] |
| Shipboard Oil Pollution Emergency Plan | Required | [Status] | [Y/N] |
| Double hull (tankers) | Reg 19 | [Status] | [Y/N] |

### Operational Compliance
| Requirement | Compliance | Evidence |
|-------------|------------|----------|
| Oil Record Book entries | [C/NC] | [Evidence] |
| Discharge limits (15 ppm) | [C/NC] | [Evidence] |
| No discharge in special areas | [C/NC] | [Evidence] |

### Gaps Identified
| # | Gap | Severity | Remediation | Cost |
|---|-----|----------|-------------|------|
| 1 | [Gap] | [Crit/Maj/Min] | [Action] | $[X] |

---

## Annex IV - Sewage

### Certificate Status
| Certificate | Required | Available | Status |
|-------------|----------|-----------|--------|
| ISPP Certificate | [Y/N] | [Y/N] | [Status] |

### Equipment & Systems
| Requirement | Standard | Current Status | Gap |
|-------------|----------|----------------|-----|
| Sewage Treatment Plant | Res. MEPC.227(64) | [Status] | [Y/N] |
| Holding Tank | If no STP | [Status] | [Y/N] |
| Discharge connection | Standard | [Status] | [Y/N] |

### Operational Compliance
| Requirement | Compliance | Evidence |
|-------------|------------|----------|
| STP operational | [C/NC] | [Evidence] |
| Discharge limits | [C/NC] | [Evidence] |
| Records maintained | [C/NC] | [Evidence] |

---

## Annex V - Garbage

### Garbage Management Plan
| Element | Required | Status |
|---------|----------|--------|
| Garbage Management Plan | Yes | [Available/Missing] |
| Garbage Record Book | Yes | [Available/Missing] |
| Placards displayed | Yes | [Available/Missing] |

### Discharge Provisions
| Garbage Type | Discharge Permitted | Current Practice | Compliant |
|--------------|---------------------|------------------|-----------|
| Food waste | Outside special areas, >12nm | [Practice] | [Y/N] |
| Cargo residues | Category dependent | [Practice] | [Y/N] |
| Plastics | NEVER | [Practice] | [Y/N] |

---

## Annex VI - Air Pollution

### Certificate Status
| Certificate | Required | Available | Status |
|-------------|----------|-----------|--------|
| IAPP Certificate | Yes | [Y/N] | [Status] |
| IEE Certificate | Yes | [Y/N] | [Status] |
| SEEMP | Yes | [Y/N] | [Status] |

### Fuel Requirements
| Requirement | Standard | Current | Compliant |
|-------------|----------|---------|-----------|
| Global Sulphur Cap | 0.50% | [%] | [Y/N] |
| ECA Sulphur | 0.10% | [%] | [Y/N] |
| Fuel oil sampling | Required | [Status] | [Y/N] |
| BDN retention | 3 years | [Status] | [Y/N] |

### Energy Efficiency
| Metric | Required | Attained | Status |
|--------|----------|----------|--------|
| EEXI | [Value] | [Value] | [Compliant/Gap] |
| CII Rating | [Target] | [Rating] | [Compliant/At Risk] |

### EEXI Compliance Options (if gap)
| Option | Technical Feasibility | Cost | Speed Impact |
|--------|----------------------|------|--------------|
| EPL | [H/M/L] | $[X] | [Knots] |
| Shaft Generator | [H/M/L] | $[X] | N/A |
| WASP | [H/M/L] | $[X] | N/A |

### CII Improvement Options
| Option | Estimated Improvement | Cost | Payback |
|--------|----------------------|------|---------|
| Hull coating | [%] | $[X] | [Years] |
| Propeller optimization | [%] | $[X] | [Years] |
| Speed reduction | [%] | $[X] | N/A |

---

## Gap Summary

### By Annex
| Annex | Critical | Major | Minor | Total |
|-------|----------|-------|-------|-------|
| I | [#] | [#] | [#] | [#] |
| IV | [#] | [#] | [#] | [#] |
| V | [#] | [#] | [#] | [#] |
| VI | [#] | [#] | [#] | [#] |
| **Total** | [#] | [#] | [#] | [#] |

## Remediation Plan

| # | Gap | Annex | Action | Cost | Timeline |
|---|-----|-------|--------|------|----------|
| 1 | [Gap] | [Ann] | [Action] | $[X] | [Date] |

### Total Remediation Cost
| Category | Cost |
|----------|------|
| Equipment | $[X] |
| Installation | $[X] |
| Certification | $[X] |
| **Total** | $[X] |

## Recommendations

1. [Recommendation]
2. [Recommendation]
```

---

## Skill 6: SOLAS Compliance

### Command: `/mar-solas`

### Purpose
Comprehensive SOLAS (Safety of Life at Sea) compliance assessment covering construction, equipment, operations, and safety management.

### Inputs Required
```yaml
vessel_name: "Vessel Name"
vessel_type: "cargo|passenger|tanker|bulk"
vessel_details:
  gross_tonnage: 50000
  length: 200
  built: 2015
  flag: "Country"
  class: "Classification Society"
assessment_focus:
  - "Life-saving appliances"
  - "Fire protection"
  - "Navigation"
  - "Radio communications"
  - "ISM Code"
  - "ISPS Code"
```

### SOLAS Chapter Structure

| Chapter | Subject | Key Requirements |
|---------|---------|------------------|
| I | General | Application, surveys, certificates |
| II-1 | Construction | Subdivision, stability, machinery |
| II-2 | Fire Protection | Detection, suppression, structural |
| III | Life-Saving | Lifeboats, rafts, PPE |
| IV | Radio | GMDSS, communications |
| V | Navigation | Equipment, routeing, reporting |
| VI | Cargoes | Grain, dangerous goods |
| VII | Dangerous Goods | Classification, segregation |
| IX | ISM Code | Safety management |
| XI-1 | Ship Safety | Surveys, PSC |
| XI-2 | ISPS Code | Security |

### Output: SOLAS Compliance Report

```markdown
# SOLAS Compliance Assessment
## [Vessel Name]
### Assessment Date: [Date]

## Executive Summary

**Overall SOLAS Compliance:** [X]%
**Chapters Assessed:** [Count]
**Deficiencies:** [Count]
**Critical Safety Issues:** [Count]

## Vessel Profile

| Attribute | Value |
|-----------|-------|
| Vessel Name | [Name] |
| IMO Number | [Number] |
| Call Sign | [Sign] |
| Vessel Type | [Type] |
| Flag State | [Flag] |
| Classification | [Class] |
| Gross Tonnage | [GT] |
| Built | [Year] |
| Keel Laid | [Date] |

## Certificate Status

| Certificate | Required | Issued | Expiry | Status |
|-------------|----------|--------|--------|--------|
| Cargo Ship Safety Construction | Yes | [Date] | [Date] | [Valid] |
| Cargo Ship Safety Equipment | Yes | [Date] | [Date] | [Valid] |
| Cargo Ship Safety Radio | Yes | [Date] | [Date] | [Valid] |
| Safety Management Certificate | Yes | [Date] | [Date] | [Valid] |
| International Ship Security | Yes | [Date] | [Date] | [Valid] |

## Chapter-by-Chapter Assessment

### Chapter II-1: Construction - Subdivision and Stability

| Requirement | Regulation | Status | Finding |
|-------------|------------|--------|---------|
| Subdivision & stability info | Reg 5-1 | [C/NC] | [Finding] |
| Intact stability | Reg 22 | [C/NC] | [Finding] |
| Damage stability | Reg 25 | [C/NC] | [Finding] |
| Watertight doors | Reg 13 | [C/NC] | [Finding] |
| Bilge pumping | Reg 35 | [C/NC] | [Finding] |
| Machinery installations | Reg 26-41 | [C/NC] | [Finding] |
| Steering gear | Reg 29 | [C/NC] | [Finding] |

### Chapter II-2: Fire Protection

| Requirement | Regulation | Status | Finding |
|-------------|------------|--------|---------|
| Structural fire protection | Reg 9 | [C/NC] | [Finding] |
| Fire detection | Reg 7 | [C/NC] | [Finding] |
| Fire extinction | Reg 10 | [C/NC] | [Finding] |
| Fire-fighting equipment | Reg 10 | [C/NC] | [Finding] |
| Fire control plan | Reg 15 | [C/NC] | [Finding] |
| Fireman's outfit | Reg 10.10 | [C/NC] | [Finding] |
| Fire drills | Reg 15 | [C/NC] | [Finding] |

#### Fire Equipment Inventory
| Equipment | Required | Onboard | Condition | Expiry |
|-----------|----------|---------|-----------|--------|
| Fire extinguishers | [#] | [#] | [G/F/P] | [Date] |
| Fire hoses | [#] | [#] | [G/F/P] | - |
| Fireman's outfits | [#] | [#] | [G/F/P] | [Date] |
| BA sets | [#] | [#] | [G/F/P] | [Date] |
| Fixed CO2 system | [Y/N] | [Y/N] | [G/F/P] | [Date] |

### Chapter III: Life-Saving Appliances

| Requirement | Regulation | Status | Finding |
|-------------|------------|--------|---------|
| Lifeboats | Reg 31 | [C/NC] | [Finding] |
| Life rafts | Reg 31 | [C/NC] | [Finding] |
| Rescue boats | Reg 31.1 | [C/NC] | [Finding] |
| Life jackets | Reg 32 | [C/NC] | [Finding] |
| Immersion suits | Reg 32.3 | [C/NC] | [Finding] |
| Lifebuoys | Reg 32 | [C/NC] | [Finding] |
| Line throwing apparatus | Reg 32 | [C/NC] | [Finding] |
| Muster list | Reg 37 | [C/NC] | [Finding] |
| Drills & training | Reg 19 | [C/NC] | [Finding] |

#### LSA Inventory
| Equipment | Required | Onboard | Capacity | Service Due |
|-----------|----------|---------|----------|-------------|
| Lifeboats | [#] | [#] | [Persons] | [Date] |
| Life rafts | [#] | [#] | [Persons] | [Date] |
| Life jackets | [#] | [#] | - | [Date] |
| Immersion suits | [#] | [#] | - | [Date] |
| Lifebuoys | [#] | [#] | - | - |
| EPIRB | [#] | [#] | - | [Date] |
| SART | [#] | [#] | - | [Date] |

### Chapter IV: Radio Communications (GMDSS)

| Requirement | Regulation | Status | Finding |
|-------------|------------|--------|---------|
| Radio installations | Reg 6-12 | [C/NC] | [Finding] |
| VHF radio | Reg 7.1 | [C/NC] | [Finding] |
| MF radio | Reg 9 | [C/NC] | [Finding] |
| EPIRB | Reg 7.1 | [C/NC] | [Finding] |
| SART | Reg 7.1 | [C/NC] | [Finding] |
| Navtex | Reg 7.1 | [C/NC] | [Finding] |
| Inmarsat | Reg 10 | [C/NC] | [Finding] |
| Radio log | Reg 17 | [C/NC] | [Finding] |

### Chapter V: Safety of Navigation

| Requirement | Regulation | Status | Finding |
|-------------|------------|--------|---------|
| Voyage planning | Reg 34 | [C/NC] | [Finding] |
| Nautical publications | Reg 27 | [C/NC] | [Finding] |
| Navigational equipment | Reg 19 | [C/NC] | [Finding] |
| AIS | Reg 19.2 | [C/NC] | [Finding] |
| VDR | Reg 20 | [C/NC] | [Finding] |
| LRIT | Reg 19-1 | [C/NC] | [Finding] |
| ECDIS | Reg 19.2 | [C/NC] | [Finding] |
| Radar | Reg 19.2 | [C/NC] | [Finding] |
| Bridge visibility | Reg 22 | [C/NC] | [Finding] |

### Chapter IX: ISM Code

| Element | Status | Finding |
|---------|--------|---------|
| Safety & environmental policy | [C/NC] | [Finding] |
| Company responsibilities | [C/NC] | [Finding] |
| DPA designated | [C/NC] | [Finding] |
| Master's authority | [C/NC] | [Finding] |
| Resources & personnel | [C/NC] | [Finding] |
| Shipboard operations | [C/NC] | [Finding] |
| Emergency preparedness | [C/NC] | [Finding] |
| Non-conformity reporting | [C/NC] | [Finding] |
| Maintenance | [C/NC] | [Finding] |
| Documentation | [C/NC] | [Finding] |
| Internal audits | [C/NC] | [Finding] |
| Management review | [C/NC] | [Finding] |

### Chapter XI-2: ISPS Code

| Requirement | Status | Finding |
|-------------|--------|---------|
| Ship Security Assessment | [C/NC] | [Finding] |
| Ship Security Plan | [C/NC] | [Finding] |
| Ship Security Officer | [C/NC] | [Finding] |
| CSO designated | [C/NC] | [Finding] |
| Security levels procedures | [C/NC] | [Finding] |
| Security training | [C/NC] | [Finding] |
| Security drills | [C/NC] | [Finding] |
| Security records | [C/NC] | [Finding] |

## Deficiency Summary

| Chapter | Critical | Major | Minor | Observations |
|---------|----------|-------|-------|--------------|
| II-1 | [#] | [#] | [#] | [#] |
| II-2 | [#] | [#] | [#] | [#] |
| III | [#] | [#] | [#] | [#] |
| IV | [#] | [#] | [#] | [#] |
| V | [#] | [#] | [#] | [#] |
| IX | [#] | [#] | [#] | [#] |
| XI-2 | [#] | [#] | [#] | [#] |
| **Total** | [#] | [#] | [#] | [#] |

## Corrective Actions

| # | Deficiency | Chapter | Action | Owner | Due | Status |
|---|------------|---------|--------|-------|-----|--------|
| 1 | [Deficiency] | [Ch] | [Action] | [Owner] | [Date] | [Status] |

## Recommendations

1. [Recommendation]
2. [Recommendation]
```

---

## Skill 7: Terminal Capacity Planning

### Command: `/mar-capacity`

### Purpose
Plan and optimize terminal capacity including berth allocation, yard utilization, equipment requirements, and throughput forecasting.

### Inputs Required
```yaml
terminal_name: "Terminal Name"
terminal_type: "container|multipurpose|bulk|liquid"
current_capacity:
  annual_throughput: 500000
  berth_length: 800
  yard_area: 200000
  equipment:
    - type: "STS Cranes"
      count: 4
    - type: "RTGs"
      count: 12
forecast_requirements:
  target_year: 2030
  projected_demand: 1000000
  vessel_sizes: ["8000 TEU", "14000 TEU"]
constraints:
  land_availability: "limited"
  budget: 200000000
```

### Terminal Capacity Framework

#### Capacity Components

| Component | Description | Key Factors |
|-----------|-------------|-------------|
| **Berth Capacity** | Ship handling | Length, depth, crane productivity |
| **Yard Capacity** | Container storage | Area, stacking height, dwell time |
| **Gate Capacity** | Truck processing | Lanes, transaction time |
| **Equipment Capacity** | Handling productivity | Count, reliability, utilization |

#### Capacity Calculation Methods

| Method | Formula | Application |
|--------|---------|-------------|
| Berth | (Hours × Moves/hr × Days × Utilization) / TEU factor | Quay productivity |
| Yard | (Slots × Turns per year) / Peak factor | Storage capacity |
| Gate | (Lanes × Hours × Trucks/hr) × TEU/truck | Landside capacity |

### Output: Terminal Capacity Planning Report

```markdown
# Terminal Capacity Planning Study
## [Terminal Name]
### Date: [Date]

## Executive Summary

**Current Capacity:** [X] TEU/year
**Projected Demand (2030):** [X] TEU/year
**Capacity Gap:** [X] TEU/year
**Investment Required:** $[X]M
**Recommended Phasing:** [Phases]

## Terminal Profile

### Current Configuration
| Attribute | Current |
|-----------|---------|
| Terminal Type | [Type] |
| Total Area | [ha] |
| Quay Length | [m] |
| Water Depth | [m] |
| Annual Throughput | [TEU/MT] |
| Utilization | [%] |

### Current Equipment
| Equipment | Count | Capacity | Age | Condition |
|-----------|-------|----------|-----|-----------|
| STS Cranes | [#] | [Moves/hr] | [Yrs] | [G/F/P] |
| RTGs | [#] | [Moves/hr] | [Yrs] | [G/F/P] |
| Terminal Tractors | [#] | - | [Yrs] | [G/F/P] |
| Reach Stackers | [#] | - | [Yrs] | [G/F/P] |

## Demand Forecast

### Volume Projections
| Year | Throughput | Growth | Vessel Calls | Avg Parcel |
|------|------------|--------|--------------|------------|
| 2025 | [TEU] | [%] | [#] | [TEU] |
| 2026 | [TEU] | [%] | [#] | [TEU] |
| 2027 | [TEU] | [%] | [#] | [TEU] |
| 2028 | [TEU] | [%] | [#] | [TEU] |
| 2029 | [TEU] | [%] | [#] | [TEU] |
| 2030 | [TEU] | [%] | [#] | [TEU] |

### Vessel Size Trends
| Vessel Class | Current Mix | 2030 Mix | LOA | Beam | Draft |
|--------------|-------------|----------|-----|------|-------|
| Feeder | [%] | [%] | [m] | [m] | [m] |
| Panamax | [%] | [%] | [m] | [m] | [m] |
| Post-Panamax | [%] | [%] | [m] | [m] | [m] |
| ULCV | [%] | [%] | [m] | [m] | [m] |

## Capacity Analysis

### Berth Capacity
| Parameter | Current | 2030 Required | Gap |
|-----------|---------|---------------|-----|
| Quay Length | [m] | [m] | [m] |
| Water Depth | [m] | [m] | [m] |
| Crane Intensity | [per 100m] | [per 100m] | [#] |
| Productivity | [Moves/hr] | [Moves/hr] | [+/-] |
| Berth Capacity | [TEU/yr] | [TEU/yr] | [Gap] |
| Berth Occupancy | [%] | [Target %] | [+/-] |

**Berth Capacity Calculation:**
```
Annual Berth Capacity = (Quay Length / Avg Berth) ×
                        (Hours/Year × Occupancy) ×
                        (Moves/Hour × TEU Factor)
Current: [Calculation]
Required: [Calculation]
```

### Yard Capacity
| Parameter | Current | 2030 Required | Gap |
|-----------|---------|---------------|-----|
| Gross Yard Area | [ha] | [ha] | [ha] |
| Net Stacking Area | [ha] | [ha] | [ha] |
| Ground Slots | [TEU] | [TEU] | [TEU] |
| Stacking Height | [Tiers] | [Tiers] | [Tiers] |
| Slot Capacity | [TEU] | [TEU] | [TEU] |
| Dwell Time | [Days] | [Days] | [Days] |
| Yard Capacity | [TEU/yr] | [TEU/yr] | [Gap] |

**Yard Capacity Calculation:**
```
Annual Yard Capacity = (Ground Slots × Stacking Height ×
                        Utilization × 365) / Dwell Time
Current: [Calculation]
Required: [Calculation]
```

### Gate Capacity
| Parameter | Current | 2030 Required | Gap |
|-----------|---------|---------------|-----|
| Gate Lanes | [#] | [#] | [#] |
| Operating Hours | [hrs/day] | [hrs/day] | - |
| Transaction Time | [min] | [min] | [min] |
| Trucks/Day | [#] | [#] | [Gap] |
| Gate Capacity | [TEU/yr] | [TEU/yr] | [Gap] |

### Equipment Capacity
| Equipment | Current | 2030 Required | Gap |
|-----------|---------|---------------|-----|
| STS Cranes | [#] | [#] | [#] |
| RTGs/RMGs | [#] | [#] | [#] |
| Terminal Tractors | [#] | [#] | [#] |
| Reach Stackers | [#] | [#] | [#] |

## Capacity Expansion Options

### Option A: Incremental Expansion
| Component | Description | Cost | Capacity Add |
|-----------|-------------|------|--------------|
| Additional Cranes | [#] STS cranes | $[X]M | [TEU/yr] |
| RTG Addition | [#] RTGs | $[X]M | [TEU/yr] |
| Yard Densification | Increase stacking | $[X]M | [TEU/yr] |
| **Total** | | $[X]M | [TEU/yr] |

### Option B: Major Expansion
| Component | Description | Cost | Capacity Add |
|-----------|-------------|------|--------------|
| Quay Extension | [m] additional | $[X]M | [TEU/yr] |
| Yard Expansion | [ha] additional | $[X]M | [TEU/yr] |
| New Cranes | [#] STS + [#] RTG | $[X]M | [TEU/yr] |
| **Total** | | $[X]M | [TEU/yr] |

### Option C: Automation
| Component | Description | Cost | Capacity Add |
|-----------|-------------|------|--------------|
| Automated stacking | ASC system | $[X]M | [TEU/yr] |
| Automated gates | OCR + kiosks | $[X]M | [Efficiency] |
| TOS upgrade | New software | $[X]M | [Efficiency] |
| **Total** | | $[X]M | [TEU/yr] |

## Option Comparison

| Criterion | Option A | Option B | Option C |
|-----------|----------|----------|----------|
| Capital Cost | $[X]M | $[X]M | $[X]M |
| Capacity Increase | [TEU] | [TEU] | [TEU] |
| Cost per TEU | $[X] | $[X] | $[X] |
| Implementation Time | [Months] | [Months] | [Months] |
| Operational Impact | [L/M/H] | [L/M/H] | [L/M/H] |
| Flexibility | [L/M/H] | [L/M/H] | [L/M/H] |

## Recommended Plan

### Phased Development

#### Phase 1: [Year]-[Year]
| Investment | Cost | Capacity |
|------------|------|----------|
| [Investment] | $[X]M | +[X] TEU |
| **Total Phase 1** | $[X]M | +[X] TEU |

#### Phase 2: [Year]-[Year]
| Investment | Cost | Capacity |
|------------|------|----------|
| [Investment] | $[X]M | +[X] TEU |
| **Total Phase 2** | $[X]M | +[X] TEU |

### Capacity vs Demand Projection
```
Capacity │        ┌────────────Phase 2
(TEU)    │  ┌─────┤
         │──┤     │ Phase 1
         │  │     │
         │  │ Current
         └──┴─────┴────────────────────
            2025  2028  2030  Year
```

## Financial Analysis

### Investment Summary
| Phase | CapEx | Timeline |
|-------|-------|----------|
| Phase 1 | $[X]M | [Years] |
| Phase 2 | $[X]M | [Years] |
| **Total** | $[X]M | [Years] |

### Return Analysis
| Metric | Value |
|--------|-------|
| NPV (10-year) | $[X]M |
| IRR | [%] |
| Payback Period | [Years] |

## Risks & Mitigation

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| [Risk] | [H/M/L] | [H/M/L] | [Action] |

## Recommendations

1. [Recommendation]
2. [Recommendation]
```

---

## Skill 8: Vessel Traffic Analysis

### Command: `/mar-traffic`

### Purpose
Analyze vessel traffic patterns for port planning, navigation safety, and capacity assessment.

### Inputs Required
```yaml
analysis_area: "port|channel|fairway|anchorage"
location:
  name: "Location Name"
  coordinates: "lat/long"
analysis_period:
  start: "2025-01-01"
  end: "2025-12-31"
data_sources:
  - "AIS data"
  - "Port records"
  - "VTS data"
analysis_focus:
  - "Traffic density"
  - "Vessel mix"
  - "Peak patterns"
  - "Safety assessment"
```

### Vessel Traffic Framework

#### Traffic Analysis Dimensions

| Dimension | Metrics | Application |
|-----------|---------|-------------|
| **Volume** | Vessel calls, movements | Capacity planning |
| **Composition** | Size, type mix | Infrastructure needs |
| **Temporal** | Peaks, seasonality | Resource planning |
| **Spatial** | Routes, density | Safety, channel design |
| **Safety** | Incidents, near-misses | Risk assessment |

### Output: Vessel Traffic Analysis Report

```markdown
# Vessel Traffic Analysis
## [Location Name]
### Analysis Period: [Start] to [End]

## Executive Summary

**Total Vessel Movements:** [Count]
**Average Daily Movements:** [Count]
**Peak Day Movements:** [Count]
**Largest Vessel:** [LOA] m / [DWT] DWT
**Key Finding:** [Main insight]

## Analysis Overview

### Study Area
| Attribute | Value |
|-----------|-------|
| Location | [Name] |
| Coordinates | [Lat/Long] |
| Analysis Type | [Port/Channel/etc.] |
| Period | [Dates] |
| Data Source | [AIS/Port Records] |

## Traffic Volume Analysis

### Annual Summary
| Metric | Value | YoY Change |
|--------|-------|------------|
| Total Movements | [#] | [+/-]% |
| Vessel Calls | [#] | [+/-]% |
| Avg Movements/Day | [#] | [+/-]% |
| Peak Day | [Date] | [#] movements |

### Monthly Distribution
| Month | Movements | % of Total | vs Avg |
|-------|-----------|------------|--------|
| January | [#] | [%] | [+/-]% |
| February | [#] | [%] | [+/-]% |
| [Continue...] |

### Seasonal Patterns
| Season | Movements | Peak Month | Notes |
|--------|-----------|------------|-------|
| Q1 | [#] | [Month] | [Notes] |
| Q2 | [#] | [Month] | [Notes] |
| Q3 | [#] | [Month] | [Notes] |
| Q4 | [#] | [Month] | [Notes] |

## Vessel Composition

### By Vessel Type
| Type | Count | % of Total | Avg Size | Max Size |
|------|-------|------------|----------|----------|
| Container | [#] | [%] | [TEU] | [TEU] |
| Bulk Carrier | [#] | [%] | [DWT] | [DWT] |
| Tanker | [#] | [%] | [DWT] | [DWT] |
| General Cargo | [#] | [%] | [DWT] | [DWT] |
| Passenger | [#] | [%] | [GT] | [GT] |
| Other | [#] | [%] | - | - |

### By Vessel Size
| Size Category | LOA Range | Count | % of Total |
|---------------|-----------|-------|------------|
| Small | < 100m | [#] | [%] |
| Medium | 100-200m | [#] | [%] |
| Large | 200-300m | [#] | [%] |
| Very Large | 300-400m | [#] | [%] |
| Ultra Large | > 400m | [#] | [%] |

### By Flag State
| Flag | Count | % of Total |
|------|-------|------------|
| [Flag 1] | [#] | [%] |
| [Flag 2] | [#] | [%] |
| [Others] | [#] | [%] |

## Temporal Patterns

### Daily Distribution
| Hour | Movements | % of Daily |
|------|-----------|------------|
| 00:00-04:00 | [#] | [%] |
| 04:00-08:00 | [#] | [%] |
| 08:00-12:00 | [#] | [%] |
| 12:00-16:00 | [#] | [%] |
| 16:00-20:00 | [#] | [%] |
| 20:00-24:00 | [#] | [%] |

### Peak Analysis
| Metric | Value | When |
|--------|-------|------|
| Peak Hour | [#] movements | [Time] |
| Peak Day | [#] movements | [Weekday] |
| Peak Month | [#] movements | [Month] |

### Day of Week Pattern
| Day | Movements | vs Avg |
|-----|-----------|--------|
| Monday | [#] | [+/-]% |
| Tuesday | [#] | [+/-]% |
| [Continue...] |

## Spatial Analysis

### Traffic Density Map
```
[ASCII representation or reference to map]

High Density ████  Medium ▓▓▓▓  Low ░░░░

          N
          │
    ┌─────┼─────┐
    │░░░░░│█████│ Approach Channel
    │░░░▓▓│█████│
    │░░▓▓▓│▓▓▓▓▓│ Port Basin
    │░░░▓▓│▓▓▓▓▓│
    └─────┴─────┘
```

### Route Analysis
| Route | Movements | % of Total | Avg Transit Time |
|-------|-----------|------------|------------------|
| [Route A] | [#] | [%] | [Hours] |
| [Route B] | [#] | [%] | [Hours] |

### Anchorage Utilization
| Anchorage | Avg Occupancy | Avg Stay | Max Vessels |
|-----------|---------------|----------|-------------|
| [Area A] | [%] | [Days] | [#] |
| [Area B] | [%] | [Days] | [#] |

## Safety Analysis

### Incident Summary
| Incident Type | Count | Severity |
|---------------|-------|----------|
| Collisions | [#] | [High/Med/Low] |
| Groundings | [#] | [High/Med/Low] |
| Near Misses | [#] | [High/Med/Low] |
| Other | [#] | [High/Med/Low] |

### High-Risk Areas
| Location | Risk Type | Frequency | Mitigation |
|----------|-----------|-----------|------------|
| [Area] | [Type] | [#/year] | [Action] |

### Encounter Analysis
| Scenario | Frequency | Risk Level |
|----------|-----------|------------|
| Overtaking | [#/day] | [L/M/H] |
| Head-on | [#/day] | [L/M/H] |
| Crossing | [#/day] | [L/M/H] |

## Forecast & Projections

### Traffic Forecast
| Year | Projected Movements | Growth | Basis |
|------|---------------------|--------|-------|
| 2026 | [#] | [%] | [Basis] |
| 2027 | [#] | [%] | [Basis] |
| 2028 | [#] | [%] | [Basis] |
| 2029 | [#] | [%] | [Basis] |
| 2030 | [#] | [%] | [Basis] |

### Vessel Size Trends
| Year | Avg LOA | Max LOA | Avg DWT |
|------|---------|---------|---------|
| Current | [m] | [m] | [DWT] |
| 2030 | [m] | [m] | [DWT] |

## Recommendations

### Capacity Planning
1. [Recommendation]

### Safety Improvements
1. [Recommendation]

### Operational Efficiency
1. [Recommendation]
```

---

## Skill 9: BOT/PPP Feasibility

### Command: `/mar-bot-feasibility`

### Purpose
Assess feasibility of maritime Build-Operate-Transfer (BOT) and Public-Private Partnership (PPP) projects including ports, terminals, and related infrastructure.

### Inputs Required
```yaml
project_name: "Project Name"
project_type: "port|terminal|marina|logistics_zone"
project_scope:
  location: "Location"
  area_hectares: 100
  facilities:
    - "Container terminal"
    - "Breakwater"
    - "Access road"
concession_terms:
  period_years: 30
  structure: "BOT|BOOT|ROT|BTO"
financial_parameters:
  capex_estimate: 500000000
  target_irr: 15
  debt_equity: "70:30"
risk_factors:
  - "Demand uncertainty"
  - "Construction risk"
  - "Political risk"
```

### BOT/PPP Framework

#### PPP Structures

| Structure | Description | Risk Allocation |
|-----------|-------------|-----------------|
| **BOT** | Build-Operate-Transfer | High private, return at end |
| **BOOT** | Build-Own-Operate-Transfer | Private ownership during concession |
| **BOO** | Build-Own-Operate | No transfer, perpetual ownership |
| **BTO** | Build-Transfer-Operate | Transfer immediately, operate |
| **ROT** | Rehabilitate-Operate-Transfer | Existing infrastructure |

#### Feasibility Dimensions

| Dimension | Assessment Focus |
|-----------|------------------|
| **Technical** | Engineering, design, construction |
| **Commercial** | Market, demand, competition |
| **Financial** | Returns, bankability, debt service |
| **Legal/Regulatory** | Framework, permits, contracts |
| **Environmental** | Impact, mitigation, permits |
| **Social** | Community, employment, displacement |
| **Risk** | Identification, allocation, mitigation |

### Output: BOT/PPP Feasibility Study

```markdown
# BOT/PPP Feasibility Study
## [Project Name]
### Date: [Date] | CONFIDENTIAL

## Executive Summary

**Project:** [Name]
**Location:** [Location]
**Structure:** [BOT/BOOT/etc.]
**Concession Period:** [Years]
**Total Investment:** $[X]M
**Project IRR:** [X]%
**Feasibility Assessment:** [Viable|Marginal|Not Viable]
**Key Risks:** [Top 3]

## Project Overview

### Project Description
[Comprehensive description of the project]

### Project Scope
| Component | Description | Cost Estimate |
|-----------|-------------|---------------|
| [Component 1] | [Description] | $[X]M |
| [Component 2] | [Description] | $[X]M |
| **Total** | | $[X]M |

### Project Rationale
[Why this project is needed]

### Concession Structure
| Parameter | Value |
|-----------|-------|
| Structure | [BOT/BOOT/etc.] |
| Concession Period | [Years] |
| Construction Period | [Years] |
| Operations Period | [Years] |
| Handback Requirements | [Requirements] |

## Technical Feasibility

### Site Assessment
| Factor | Assessment | Score |
|--------|------------|-------|
| Location | [Assessment] | [1-5] |
| Geotechnical | [Assessment] | [1-5] |
| Marine conditions | [Assessment] | [1-5] |
| Access | [Assessment] | [1-5] |
| Utilities | [Assessment] | [1-5] |

### Engineering Considerations
| Aspect | Description | Risk |
|--------|-------------|------|
| Design complexity | [Description] | [L/M/H] |
| Construction method | [Description] | [L/M/H] |
| Technology | [Description] | [L/M/H] |
| Local capacity | [Description] | [L/M/H] |

### Technical Score: [X/5]

## Commercial Feasibility

### Market Analysis
| Metric | Current | Forecast (Year 10) | CAGR |
|--------|---------|-------------------|------|
| Market Size | [Units] | [Units] | [%] |
| [Project] Share | [%] | [%] | - |
| Throughput | [Units] | [Units] | [%] |

### Demand Forecast
| Year | Throughput | Revenue | Growth |
|------|------------|---------|--------|
| 1 | [Units] | $[X]M | - |
| 5 | [Units] | $[X]M | [%] |
| 10 | [Units] | $[X]M | [%] |
| 15 | [Units] | $[X]M | [%] |

### Competitive Analysis
| Competitor | Capacity | Market Share | Strengths |
|------------|----------|--------------|-----------|
| [Competitor] | [Capacity] | [%] | [Strengths] |

### Tariff Analysis
| Service | Current Market | Proposed | vs Market |
|---------|----------------|----------|-----------|
| [Service] | $[X] | $[X] | [+/-]% |

### Commercial Score: [X/5]

## Financial Feasibility

### Capital Costs (CAPEX)
| Category | Cost ($M) | % of Total |
|----------|-----------|------------|
| Land/Concession | [X] | [%] |
| Civil Works | [X] | [%] |
| Marine Works | [X] | [%] |
| Equipment | [X] | [%] |
| Buildings | [X] | [%] |
| Contingency | [X] | [%] |
| IDC | [X] | [%] |
| **Total CAPEX** | [X] | 100% |

### Operating Costs (OPEX)
| Category | Annual ($M) | % of Revenue |
|----------|-------------|--------------|
| Personnel | [X] | [%] |
| Utilities | [X] | [%] |
| Maintenance | [X] | [%] |
| Insurance | [X] | [%] |
| Concession Fee | [X] | [%] |
| **Total OPEX** | [X] | [%] |

### Revenue Projections
| Year | Volume | Tariff | Revenue | EBITDA |
|------|--------|--------|---------|--------|
| 1 | [Units] | $[X] | $[X]M | $[X]M |
| 5 | [Units] | $[X] | $[X]M | $[X]M |
| 10 | [Units] | $[X] | $[X]M | $[X]M |

### Financing Structure
| Source | Amount ($M) | % | Terms |
|--------|-------------|---|-------|
| Senior Debt | [X] | [%] | [Terms] |
| Mezzanine | [X] | [%] | [Terms] |
| Equity | [X] | [%] | [Terms] |
| **Total** | [X] | 100% | - |

### Financial Returns
| Metric | Value | Benchmark | Assessment |
|--------|-------|-----------|------------|
| Project IRR | [%] | [%] | [Above/Below] |
| Equity IRR | [%] | [%] | [Above/Below] |
| NPV (@[X]%) | $[X]M | >0 | [Pass/Fail] |
| Payback Period | [Years] | [Years] | [Pass/Fail] |
| DSCR (min) | [X] | 1.3x | [Pass/Fail] |
| DSCR (avg) | [X] | 1.5x | [Pass/Fail] |

### Sensitivity Analysis
| Variable | Base | -20% | +20% | Impact |
|----------|------|------|------|--------|
| CAPEX | [IRR]% | [IRR]% | [IRR]% | [H/M/L] |
| Revenue | [IRR]% | [IRR]% | [IRR]% | [H/M/L] |
| OPEX | [IRR]% | [IRR]% | [IRR]% | [H/M/L] |
| Tariff | [IRR]% | [IRR]% | [IRR]% | [H/M/L] |

### Financial Score: [X/5]

## Legal & Regulatory Feasibility

### Legal Framework
| Aspect | Status | Assessment |
|--------|--------|------------|
| PPP Law | [Exists/Pending] | [Favorable/Neutral/Unfavorable] |
| Sector Regulation | [Description] | [Assessment] |
| Foreign Investment | [Allowed/Restricted] | [Assessment] |
| Dispute Resolution | [Mechanism] | [Assessment] |

### Required Permits
| Permit | Authority | Status | Timeline |
|--------|-----------|--------|----------|
| [Permit] | [Authority] | [Obtained/Pending] | [Months] |

### Contractual Framework
| Document | Status | Key Terms |
|----------|--------|-----------|
| Concession Agreement | [Draft/Template] | [Key terms] |
| Direct Agreement | [Required/Not needed] | [Terms] |
| Government Support | [Required/Not needed] | [Type] |

### Legal Score: [X/5]

## Environmental & Social Feasibility

### Environmental Assessment
| Impact Category | Significance | Mitigation |
|-----------------|--------------|------------|
| Marine ecosystem | [H/M/L] | [Measures] |
| Air quality | [H/M/L] | [Measures] |
| Noise | [H/M/L] | [Measures] |
| Water quality | [H/M/L] | [Measures] |

### Social Assessment
| Impact Category | Significance | Mitigation |
|-----------------|--------------|------------|
| Employment | [Positive] | [Jobs created] |
| Displacement | [H/M/L] | [RAP if needed] |
| Community | [H/M/L] | [Engagement plan] |

### E&S Score: [X/5]

## Risk Assessment

### Risk Matrix
| Risk | Probability | Impact | Score | Allocation |
|------|-------------|--------|-------|------------|
| Construction delay | [H/M/L] | [H/M/L] | [1-9] | [Private/Public/Shared] |
| Cost overrun | [H/M/L] | [H/M/L] | [1-9] | [Private/Public/Shared] |
| Demand shortfall | [H/M/L] | [H/M/L] | [1-9] | [Private/Public/Shared] |
| Political/regulatory | [H/M/L] | [H/M/L] | [1-9] | [Private/Public/Shared] |
| Currency | [H/M/L] | [H/M/L] | [1-9] | [Private/Public/Shared] |
| Force majeure | [H/M/L] | [H/M/L] | [1-9] | [Private/Public/Shared] |

### Risk Mitigation Measures
| Risk | Mitigation | Mechanism |
|------|------------|-----------|
| [Risk] | [Measure] | [Contract/Insurance/etc.] |

### Government Support Required
| Support Type | Justification | Impact on Returns |
|--------------|---------------|-------------------|
| [Support] | [Why needed] | [IRR impact] |

## Overall Feasibility Assessment

### Dimension Scores
| Dimension | Score (1-5) | Weight | Weighted |
|-----------|-------------|--------|----------|
| Technical | [X] | 20% | [X] |
| Commercial | [X] | 25% | [X] |
| Financial | [X] | 30% | [X] |
| Legal | [X] | 10% | [X] |
| Environmental/Social | [X] | 10% | [X] |
| Risk | [X] | 5% | [X] |
| **Overall** | | 100% | **[X]** |

### Assessment Summary
| Criterion | Assessment |
|-----------|------------|
| Overall Score | [X/5] |
| Feasibility | [Viable/Marginal/Not Viable] |
| Bankability | [Bankable/Conditional/Not Bankable] |
| Recommendation | [Proceed/Modify/Reject] |

## Recommendations

### Conditions for Proceeding
1. [Condition]
2. [Condition]

### Required Government Support
1. [Support measure]
2. [Support measure]

### Next Steps
1. [Action]
2. [Action]

## Appendices
### A. Financial Model Summary
### B. Technical Drawings (Reference)
### C. Legal Framework Summary
### D. Risk Register
```

---

## Service Line Integration

### Fee Modifier
**MAR Base Modifier:** 1.15 (applied to standard rates)

### Typical Engagement Phases

| Phase | Duration | Deliverables |
|-------|----------|--------------|
| Assessment | 3-4 weeks | Current state, gap analysis |
| Design | 4-8 weeks | Feasibility, planning |
| Implementation | Variable | Support, monitoring |
| Compliance | Ongoing | Audits, certification support |

### Cross-Skill Workflows

```
New Port Development:
/mar-bot-feasibility → /mar-capacity → /mar-traffic →
/mar-env-risk → /mar-port-ops → Implementation

Fleet Optimization:
/mar-fleet → /mar-imo → /mar-marpol →
/mar-solas → Improvement plan

Compliance Program:
/mar-imo → /mar-marpol → /mar-solas →
Gap remediation → Certification

Terminal Expansion:
/mar-capacity → /mar-traffic → /str-financial-model →
/mar-port-ops → Development
```

### Integration with Other Service Lines

| Service Line | Integration Point |
|--------------|-------------------|
| STR | Financial modeling for maritime projects |
| ESI | Port system integration (TOS, PCS) |
| ISO | Maritime quality/environmental management |
| GOV | Port authority advisory |
| DIG | Maritime digital transformation |

---

## Templates & Artifacts

All MAR deliverables should use standard Omega branding via:
- `/doc-gen` for document generation
- `assets/omega-branding.json` for styling
- `scripts/omega-document-generator.js` for automation

### Standard Artifacts by Skill

| Skill | Primary Artifact | Format |
|-------|------------------|--------|
| /mar-port-ops | Port Operations Assessment | DOCX/PDF |
| /mar-env-risk | Environmental Risk Assessment | DOCX/PDF |
| /mar-fleet | Fleet Management Assessment | DOCX/PDF |
| /mar-imo | IMO Compliance Report | DOCX/PDF |
| /mar-marpol | MARPOL Gap Analysis | DOCX/PDF |
| /mar-solas | SOLAS Compliance Report | DOCX/PDF |
| /mar-capacity | Terminal Capacity Study | DOCX/PDF |
| /mar-traffic | Vessel Traffic Analysis | DOCX/PDF |
| /mar-bot-feasibility | BOT Feasibility Study | DOCX/PDF |


---

## Additional Skill: port-digitalization

### Command: `/omega-skills:port-digitalization` (v4.2.1)

### Purpose
Design port digitalization program: PCS, smart ports, IoT, predictive analytics.

### Inputs required
```yaml
client:
  name: "Client Name"
context:
  scope: "in-scope description"
  constraints: ["regulatory / commercial constraints"]
```

### Methodology
1. Frame the request against Maritime Strategy domain conventions.
2. Pull required inputs from engagement brain and external sources.
3. Apply the port-digitalization method using the relevant subagent.
4. Synthesize into deliverable with recommendations + risks.
5. Validate via `/omega:verify-quality`.

### Output shape
Omega-branded port-digitalization deliverable in `05_Deliverables_Final/`.

### Quality checklist
- Pyramid Principle structure
- Source citations on all data
- Quantified impact where the analysis supports it


---

## Additional Skill: fleet-decarbonization

### Command: `/omega-skills:fleet-decarbonization` (v4.2.1)

### Purpose
Plan fleet decarbonization pathway: dual-fuel, ammonia/methanol, slow steaming, port-side power.

### Inputs required
```yaml
client:
  name: "Client Name"
context:
  scope: "in-scope description"
  constraints: ["regulatory / commercial constraints"]
```

### Methodology
1. Frame the request against Maritime Strategy domain conventions.
2. Pull required inputs from engagement brain and external sources.
3. Apply the fleet-decarbonization method using the relevant subagent.
4. Synthesize into deliverable with recommendations + risks.
5. Validate via `/omega:verify-quality`.

### Output shape
Omega-branded fleet-decarbonization deliverable in `05_Deliverables_Final/`.

### Quality checklist
- Pyramid Principle structure
- Source citations on all data
- Quantified impact where the analysis supports it
