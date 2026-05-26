---
name: project-finance
description: Project finance modeling, bankability analysis, and investment assessment
---

# Project Finance

Advanced project finance and infrastructure investment expertise.

## What This Does

1. Develop financial models for capital-intensive projects
2. Structure project financing (debt, equity, mezzanine)
3. Conduct bankability assessments
4. Analyze investment returns (IRR, NPV, MOIC)
5. Perform sensitivity and scenario analysis
6. Prepare investment documentation

## Instructions for Claude

When this skill is invoked:

1. **Ask User Project Finance Need**
   - Financial model development
   - Financing structure design
   - Bankability assessment
   - Investment analysis (returns, sensitivities)
   - Risk analysis and allocation
   - Due diligence support
   - Investment documentation

2. **Gather Project Details**
   - Project type (port, energy, transport, etc.)
   - CAPEX requirements
   - Revenue model
   - Financing structure (debt/equity mix)
   - Key risks
   - Sponsor requirements

3. **Apply Project Finance Expertise**
   - Build/review financial model
   - Calculate key metrics (DSCR, LLCR, PLCR, IRR)
   - Assess bankability
   - Structure financing
   - Identify risks and mitigations
   - Prepare investment documents

4. **Deliver Analysis**
   - Financial model (Excel)
   - Investment memorandum
   - Bankability report
   - Sensitivity analysis
   - Risk matrix
   - Recommendations

## Overview

Specialized expertise for financing large-scale infrastructure and capital projects with long development cycles, substantial capital requirements, and complex risk allocation structures. Essential for port development, energy projects, transportation infrastructure, and similar capital-intensive ventures.

---

## Core Competencies

### Project Finance Fundamentals

| Concept | Description |
|---------|-------------|
| Non-Recourse Financing | Debt secured only by project assets and cash flows |
| Special Purpose Vehicle (SPV) | Ring-fenced legal entity for project ownership |
| Limited Recourse | Sponsor guarantees limited to specific circumstances |
| Project vs Corporate Finance | Cash flow-based vs balance sheet-based lending |
| Bankability | Project's ability to attract debt financing |

### Financing Structures

| Structure | Description | Use Case |
|-----------|-------------|----------|
| Senior Debt | Priority repayment, lower cost | Primary project funding |
| Mezzanine | Subordinated, higher returns | Gap financing |
| Equity Bridge | Short-term equity replacement | Construction phase |
| Standby Facilities | Contingent funding | Cost overrun protection |
| Working Capital | Operating liquidity | Operational phase |

---

## Financial Modeling Standards

### Model Architecture

```
1. Assumptions Sheet
   ├── Macroeconomic (inflation, FX, interest rates)
   ├── Technical (capacity, throughput, efficiency)
   ├── Commercial (prices, volumes, contracts)
   ├── Capital (CAPEX, timing, contingency)
   ├── Operating (OPEX, maintenance, overhead)
   └── Financing (debt terms, equity returns)

2. Construction Sheet
   ├── CAPEX breakdown by category
   ├── Construction schedule (S-curve)
   ├── Drawdown schedule
   ├── Interest during construction (IDC)
   └── Contingency allocation

3. Operations Sheet
   ├── Revenue projections
   ├── Operating costs
   ├── Working capital
   ├── Major maintenance/CAPEX
   └── Decommissioning (if applicable)

4. Debt Schedule
   ├── Drawdowns
   ├── Interest calculations
   ├── Principal repayments
   ├── DSRA contributions
   └── Cash sweep mechanisms

5. Financial Statements
   ├── Income Statement
   ├── Balance Sheet
   ├── Cash Flow Statement
   └── Sources & Uses

6. Returns Analysis
   ├── Project IRR
   ├── Equity IRR
   ├── NPV calculations
   ├── Payback period
   └── MOIC (Multiple on Invested Capital)

7. Sensitivity Analysis
   ├── Revenue drivers
   ├── Cost drivers
   ├── Financing terms
   └── Timing variations

8. Scenario Analysis
   ├── Base case
   ├── Upside case
   ├── Downside case
   └── Bank case (conservative)
```

### Key Metrics & Ratios

| Metric | Formula | Typical Threshold |
|--------|---------|-------------------|
| **DSCR** (Debt Service Coverage) | CFADS / Debt Service | Min 1.20x - 1.50x |
| **LLCR** (Loan Life Coverage) | NPV(CFADS) / Outstanding Debt | Min 1.30x - 1.50x |
| **PLCR** (Project Life Coverage) | NPV(Project CFADS) / Debt | Min 1.40x - 1.60x |
| **Debt/Equity** | Senior Debt / Equity | 70:30 to 80:20 |
| **Gearing** | Debt / (Debt + Equity) | 60% - 80% |
| **Interest Coverage** | EBITDA / Interest | Min 2.0x - 3.0x |

### Cash Flow Definitions

| Term | Definition |
|------|------------|
| **CFADS** | Cash Flow Available for Debt Service |
| **EBITDA** | Earnings Before Interest, Tax, Depreciation, Amortization |
| **Free Cash Flow** | Operating CF - CAPEX - Working Capital Changes |
| **Distributable Cash** | CFADS - Debt Service - Reserve Contributions |

---

## Port & Terminal Financial Models

### Revenue Models

| Model Type | Description | Risk Allocation |
|------------|-------------|-----------------|
| **Take-or-Pay** | Minimum guaranteed payment regardless of use | Low volume risk |
| **Throughput-Based** | Payment per unit handled | Moderate volume risk |
| **Hybrid** | Minimum + variable component | Shared risk |
| **Capacity Payment** | Fixed payment for availability | Low volume risk |
| **Concession Fee** | % of revenue to grantor | Shared risk |

### Port-Specific Metrics

| Metric | Description | Typical Range |
|--------|-------------|---------------|
| TEU/meter | Container productivity | 800-1,500 TEU/m/year |
| Berth Utilization | Time berth is occupied | 50-70% |
| Vessel Turnaround | Time in port | 12-48 hours |
| Dwell Time | Container time at terminal | 3-7 days |
| Crane Productivity | Moves per hour | 25-40 moves/hr |

### Tariff Structure Components

| Component | Description |
|-----------|-------------|
| Wharfage | Per unit cargo handling |
| Stevedoring | Loading/unloading charges |
| Storage | Time-based yard fees |
| Vessel Charges | Berth occupancy fees |
| Pilotage & Towage | Navigation services |
| Documentation | Administrative fees |

---

## Oil Terminal Financial Specifics

### Revenue Drivers

| Driver | Description |
|--------|-------------|
| **Throughput Volume** | m³ or barrels handled |
| **Storage Capacity** | Tank capacity utilization |
| **Tank Turnover** | Times filled per year |
| **API Gravity** | Oil quality factor |
| **Service Mix** | Import vs export vs blending |

### Tariff Components

| Service | Basis | Typical Range |
|---------|-------|---------------|
| Pipeline Throughput | $/m³ or $/barrel | $0.50 - $2.00/m³ |
| Storage | $/m³/month | $2.00 - $5.00/m³/month |
| Loading/Unloading | $/m³ | $0.30 - $1.00/m³ |
| Heating | $/m³ (for heavy crude) | $0.50 - $1.50/m³ |
| Blending | $/m³ | $1.00 - $3.00/m³ |

### Take-or-Pay Contract Structure

```
Revenue = Max(Actual Volume × Tariff, Guaranteed Minimum)

Where:
- Guaranteed Minimum = Take-or-Pay % × Contracted Capacity × Tariff
- Take-or-Pay % typically 70-90%
- Contract tenor typically 10-20 years
```

---

## Risk Analysis Framework

### Project Risk Categories

| Category | Key Risks | Mitigation |
|----------|-----------|------------|
| **Construction** | Cost overrun, delay | Fixed-price EPC, contingency, liquidated damages |
| **Completion** | Technical failure | Performance guarantees, testing protocols |
| **Market/Volume** | Demand shortfall | Take-or-pay contracts, diversification |
| **Operating** | Cost inflation, inefficiency | O&M contracts, benchmarking |
| **Financial** | Interest rate, FX | Hedging, matching currencies |
| **Political** | Expropriation, policy change | Political risk insurance, government guarantees |
| **Regulatory** | License, tariff changes | Concession protections, arbitration |
| **Force Majeure** | Natural disaster, war | Insurance, contract provisions |

### Sensitivity Analysis Parameters

| Parameter | Test Range | Impact On |
|-----------|------------|-----------|
| Revenue/Tariff | ±10-20% | IRR, DSCR |
| CAPEX | +10-30% | Equity returns, gearing |
| OPEX | ±10-15% | CFADS, DSCR |
| Construction Delay | 6-12 months | IDC, IRR |
| Interest Rate | ±100-200 bps | Debt service, DSCR |
| Exchange Rate | ±10-20% | USD revenues vs local costs |
| Volume | ±10-30% | Revenue, all metrics |

---

## Financing Documentation

### Key Project Finance Documents

| Document | Purpose |
|----------|---------|
| Information Memorandum (IM) | Marketing document for lenders |
| Financial Model | Quantitative analysis tool |
| Term Sheet | Summary of financing terms |
| Facility Agreement | Detailed loan documentation |
| Security Documents | Collateral and guarantees |
| Direct Agreements | Lender step-in rights |
| Intercreditor Agreement | Priority among lenders |
| Sponsor Support Agreement | Equity commitment documentation |

### Lender Requirements (Bankability Checklist)

- [ ] Proven technology
- [ ] Experienced sponsors
- [ ] Creditworthy offtakers
- [ ] Long-term contracts
- [ ] Adequate DSCR cushion
- [ ] Completion guarantees
- [ ] Political risk mitigation
- [ ] Environmental compliance
- [ ] Legal enforceability
- [ ] Insurance coverage
- [ ] Independent engineer review
- [ ] Legal advisor due diligence

---

## IFC/DFI Standards

### IFC Performance Standards

| Standard | Focus |
|----------|-------|
| PS1 | Assessment and Management of ESG Risks |
| PS2 | Labor and Working Conditions |
| PS3 | Resource Efficiency and Pollution Prevention |
| PS4 | Community Health, Safety, and Security |
| PS5 | Land Acquisition and Involuntary Resettlement |
| PS6 | Biodiversity Conservation |
| PS7 | Indigenous Peoples |
| PS8 | Cultural Heritage |

### Equator Principles

- Apply to projects >$10M capital cost
- Environmental and social risk categorization (A/B/C)
- E&S impact assessment required
- Independent review for Category A
- Ongoing monitoring and reporting

---

## Valuation Methods for Infrastructure

### DCF Methodology

```
Project Value = Σ [CFt / (1 + r)^t]

Where:
- CFt = Free cash flow in year t
- r = WACC or required return
- t = year number
```

### WACC Calculation

```
WACC = (E/V × Re) + (D/V × Rd × (1-T))

Where:
- E = Market value of equity
- D = Market value of debt
- V = E + D
- Re = Cost of equity (CAPM: Rf + β × MRP)
- Rd = Cost of debt
- T = Tax rate
```

### Infrastructure Discount Rates (Typical)

| Project Type | Equity IRR Target | WACC Range |
|--------------|-------------------|------------|
| Regulated Utilities | 8-12% | 5-8% |
| Contracted Infrastructure | 10-15% | 6-9% |
| Merchant Infrastructure | 15-20% | 8-12% |
| Greenfield Projects | 15-25% | 9-14% |
| Emerging Markets | +3-5% premium | +2-4% premium |

---

## Quality Checklist

### Financial Model Audit

- [ ] Assumptions clearly documented and sourced
- [ ] Circular references properly handled
- [ ] All inputs flow to single assumptions sheet
- [ ] Error checks included (balance sheet balances, etc.)
- [ ] Scenario switches functional
- [ ] Sensitivity tables correctly linked
- [ ] Time periods consistent
- [ ] Currency conversions accurate
- [ ] Inflation indexation applied correctly
- [ ] Debt sculpting achieves target DSCR
- [ ] Tax calculations verified
- [ ] Depreciation schedules accurate
- [ ] Working capital logic correct
- [ ] Terminal value (if any) reasonable

### Investment Committee Presentation

- [ ] Executive summary with clear recommendation
- [ ] Investment thesis articulated
- [ ] Key risks and mitigations
- [ ] Base/upside/downside scenarios
- [ ] Comparison to hurdle rates
- [ ] Exit strategy (if relevant)
- [ ] Governance/monitoring plan

---

## Terminology Quick Reference

| Term | Definition |
|------|------------|
| SPV | Special Purpose Vehicle |
| EPC | Engineering, Procurement, Construction |
| O&M | Operations & Maintenance |
| IDC | Interest During Construction |
| DSRA | Debt Service Reserve Account |
| CFADS | Cash Flow Available for Debt Service |
| DSCR | Debt Service Coverage Ratio |
| LLCR | Loan Life Coverage Ratio |
| ToP | Take-or-Pay |
| CoD | Cost of Debt |
| CoE | Cost of Equity |
| FID | Final Investment Decision |
| FC | Financial Close |
| COD | Commercial Operations Date |
| BOT | Build-Operate-Transfer |
| PPP | Public-Private Partnership |

---

## Integration with Other Skills

| Skill | Integration Point |
|-------|-------------------|
| Maritime Industry | Port operations metrics, terminology |
| Energy Industry | Oil terminal specifics, regulations |
| Consulting Frameworks | MECE analysis, issue trees |
| Document Generation | Financial model outputs, reports |
| Risk & Compliance | Risk register, mitigation tracking |

---

## References

See `references/` folder for:
- Port financial model template
- Oil terminal tariff benchmarks
- DSCR sensitivity analysis examples
- IFC E&S standards detail
- Sample term sheets
