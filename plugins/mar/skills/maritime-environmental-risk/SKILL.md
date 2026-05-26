---
name: maritime-environmental-risk
description: Execute comprehensive environmental and marine risk assessment for maritime projects
---

# Maritime Environmental Risk Assessment Skill

## Purpose

Execute a structured environmental risk assessment for maritime projects including ports, terminals, shipyards, and vessel operations.

## When to Use

- Conducting Environmental Impact Assessment (EIA) for maritime projects
- Developing Environmental Management Plans (EMP)
- Assessing compliance with MARPOL, BWM, and other marine environmental regulations
- Ship repair/shipyard environmental risk evaluation
- Port expansion or new terminal development environmental review
- Climate adaptation and sea level rise vulnerability assessment

## Prerequisites

**Required Information:**
- Project description (type, location, scale, timeline)
- Environmental baseline data (air, water, soil, ecology)
- Applicable regulations (international, regional, national, local)
- Stakeholder information (community, NGOs, regulatory agencies)

**Required Inputs:**
- Site location and layout drawings
- Process flow diagrams (if applicable)
- Emissions/discharge data (existing or projected)
- Waste generation estimates
- Regulatory permits and compliance history

## Execution Steps

### Step 1: Project Scoping

**Define Assessment Scope:**
1. Identify project type:
   - [ ] Port/terminal development or expansion
   - [ ] Shipyard construction or upgrade
   - [ ] Dredging operations
   - [ ] Vessel operations and emissions
   - [ ] Ship repair and maintenance
   - [ ] Bunkering infrastructure

2. Determine assessment depth:
   - [ ] Preliminary environmental review
   - [ ] Full Environmental Impact Assessment (EIA)
   - [ ] Environmental Management System (ISO 14001)
   - [ ] Regulatory compliance audit
   - [ ] Climate vulnerability assessment

3. Identify spatial and temporal boundaries:
   - Study area (direct, indirect, cumulative impact zones)
   - Assessment period (construction, operation, decommissioning)
   - Baseline data period

### Step 2: Regulatory Framework Analysis

**Identify Applicable Regulations:**

**International:**
- [ ] MARPOL 73/78 (Annexes I-VI)
- [ ] Ballast Water Management Convention
- [ ] Anti-Fouling Systems Convention
- [ ] Hong Kong Convention (Ship Recycling)
- [ ] IMO GHG Strategy and CII requirements

**Regional (Select Applicable):**
- [ ] EU: MSFD, WFD, IED, ETS, Sulfur Directive
- [ ] US: CWA, CAA, OPA 90, ESA, NEPA
- [ ] Other regional conventions (Barcelona, OSPAR, Helsinki)

**National/Local:**
- [ ] Flag state requirements
- [ ] Port state requirements
- [ ] Coastal zone management
- [ ] Protected areas and species

**Document Compliance Requirements:**
- Permits needed (air, water, waste, construction)
- Certification requirements
- Reporting obligations
- Inspection and audit schedules

### Step 3: Environmental Baseline Assessment

**Collect Baseline Data:**

**Air Quality:**
- Existing ambient air quality (PM2.5, PM10, NOx, SO2, CO, O3)
- Meteorological conditions (wind rose, temperature, precipitation)
- Emission sources (vessels, equipment, vehicles, industry)
- Air quality modeling (if required)

**Water Quality:**
- Physical parameters (temperature, turbidity, TSS, salinity)
- Chemical parameters (pH, DO, BOD/COD, nutrients, heavy metals, hydrocarbons)
- Biological indicators (fecal coliform, toxicity)
- Hydrodynamic modeling (currents, tides, mixing)

**Marine Ecology:**
- Benthic communities (species composition, density, diversity)
- Water column biology (phytoplankton, zooplankton, fish larvae)
- Fish and fisheries (commercial, recreational, subsistence)
- Protected species (marine mammals, sea turtles, seabirds)
- Critical habitats (coral reefs, seagrass, mangroves, wetlands)

**Sediment Quality:**
- Grain size distribution
- Chemical contamination (heavy metals, PAHs, PCBs, TBT)
- Toxicity testing (amphipod, bivalve)
- Dredging suitability classification

**Noise:**
- Baseline ambient noise levels (underwater and terrestrial)
- Sensitive receptors (marine mammals, residential areas)

**Socioeconomic:**
- Fisheries value and effort
- Tourism and recreation
- Coastal communities (demographics, environmental justice)
- Cultural and archaeological resources

**Climate:**
- Historical sea level trends
- Storm surge frequency and intensity
- Extreme weather events

**Create Baseline Report:**
- Executive summary with key findings
- Methodology and data sources
- Maps and visualizations
- Data tables and statistical analysis
- Identification of data gaps

### Step 4: Environmental Aspects and Impacts Identification

**Source-Pathway-Receptor Analysis:**

**For Each Project Phase (Construction, Operation, Decommissioning):**

**Air Emissions:**
| Source | Pollutant | Pathway | Receptor | Impact |
|--------|-----------|---------|----------|--------|
| Vessels at berth | NOx, SO2, PM | Atmospheric dispersion | Community, workers | Health, air quality degradation |
| Cargo handling equipment | PM, NOx | Atmospheric dispersion | Community | Air quality degradation |
| Dredging | PM (dust) | Wind dispersion | Community, workers | Health, nuisance |

**Water Discharges:**
| Source | Pollutant | Pathway | Receptor | Impact |
|--------|-----------|---------|----------|--------|
| Ballast water | Invasive species | Direct discharge | Marine ecosystem | Biodiversity loss |
| Bilge water | Oil, chemicals | Direct discharge | Marine water quality | Aquatic toxicity |
| Stormwater runoff | Sediment, metals, oil | Surface drainage | Coastal waters | Water quality degradation |
| Dredging | Suspended sediments | Resuspension | Benthic habitat | Smothering, turbidity |

**Waste Generation:**
| Source | Waste Type | Management | Receptor | Impact |
|--------|------------|------------|----------|--------|
| Vessel operations | Garbage, sewage | Collection, treatment, disposal | Waste facilities | Land use, contamination |
| Shipyard operations | Hazardous (paint, solvents) | Hazardous waste disposal | Soil, groundwater | Contamination |

**Noise and Vibration:**
| Source | Receptor | Impact |
|--------|----------|--------|
| Pile driving | Marine mammals | Hearing damage, behavioral disturbance |
| Cargo operations | Residential community | Sleep disturbance, stress |

**Other Aspects:**
- Habitat loss/alteration
- Visual impacts
- Light pollution (ecological impacts on sea turtles, seabirds)
- Accidental spills and releases
- Climate change (GHG emissions, sea level rise vulnerability)

**Develop Aspects Register:**
```
Aspect ID | Aspect | Impact | Phase | Likelihood | Consequence | Risk Score | Mitigation
----------|--------|--------|-------|------------|-------------|------------|------------
ENV-001 | Vessel SOx emissions | Air quality degradation | Operation | Likely (4) | Moderate (3) | 12 (Medium) | Shore power, low-sulfur fuel
ENV-002 | Oil spill from bunkering | Marine pollution | Operation | Unlikely (2) | Major (4) | 8 (Medium) | Containment boom, SOPEP
...
```

### Step 5: Impact Assessment and Evaluation

**Quantitative Assessment (Where Feasible):**

**Air Quality:**
- Emissions inventory (tons/year of NOx, SO2, PM, CO, VOC)
- Dispersion modeling (AERMOD, CALPUFF)
- Predicted ambient concentrations vs NAAQS/AAQS
- Health risk assessment (if required)

**Water Quality:**
- Effluent characterization (mg/L, kg/day)
- Dilution modeling (near-field, far-field)
- Predicted concentrations vs water quality standards
- Whole effluent toxicity (WET) testing

**Noise:**
- Source sound levels (dBA, dB re 1 μPa)
- Propagation modeling (terrestrial: ISO 9613, underwater: BELLHOP)
- Predicted levels at receptors vs criteria
- Marine mammal impact zones (PTS, TTS, behavioral)

**GHG Emissions:**
- Scope 1, 2, 3 inventory (tons CO2e/year)
- Carbon intensity (gCO2/TEU, gCO2/ton cargo)
- Comparison to industry benchmarks

**Qualitative Assessment:**
- Ecological impact significance (negligible, minor, moderate, major)
- Reversibility (reversible, partially reversible, irreversible)
- Spatial extent (localized, regional, widespread)
- Duration (temporary, medium-term, permanent)

**Cumulative Impact Assessment:**
- Identify other past, present, reasonably foreseeable projects
- Assess combined impacts on shared receptors
- Determine incremental contribution vs baseline and cumulative total

**Alternatives Analysis:**
- No-action alternative (baseline)
- Alternative locations
- Alternative designs/technologies
- Alternative construction methods
- Comparative impact assessment
- Identify environmentally preferable alternative

### Step 6: Mitigation Measures Development

**Apply Mitigation Hierarchy:**

**1. Avoidance:**
- Avoid sensitive habitats (site selection)
- Avoid temporal windows (breeding/nesting seasons)
- Avoid protected areas

**2. Minimization:**
- Reduce project footprint
- Optimize vessel routing (away from marine mammal areas)
- Implement best management practices (BMPs)

**3. Rectification:**
- Erosion and sediment control
- Spill containment and cleanup
- Stormwater treatment

**4. Reduction:**
- Shore power for vessels
- Electric/hybrid cargo handling equipment
- Low-sulfur fuel or scrubbers
- Ballast water treatment systems
- Noise barriers and insulation

**5. Compensation:**
- Habitat restoration or creation (wetlands, reefs)
- Marine mammal monitoring and mitigation
- Community benefit programs

**Design-Phase Mitigation:**
- Secondary containment for fuel/chemical storage
- Oil-water separators
- Waste segregation and recycling facilities
- Stormwater BMPs (retention ponds, bioswales)
- Energy-efficient design (LED lighting, building insulation)

**Construction-Phase Mitigation:**
- Erosion and sediment control plan
- Dust suppression (water sprays, wind screens)
- Construction hours limits (noise restrictions)
- Marine mammal observers (for pile driving)
- Turbidity monitoring and silt curtains (dredging)
- Spill kits and trained personnel

**Operational-Phase Mitigation:**
- Standard operating procedures (SOPs)
- Preventive maintenance programs
- Environmental training for personnel
- Environmental inspections and audits
- Incident reporting and investigation
- Continuous improvement programs

**Emergency Response and Preparedness:**
- Spill Prevention, Control, and Countermeasure (SPCC) Plan
- Shipboard Oil Pollution Emergency Plan (SOPEP)
- Emergency contacts and notification procedures
- Spill response equipment (booms, skimmers, sorbents)
- Drills and exercises (quarterly, annual)

### Step 7: Monitoring and Management Plan

**Environmental Monitoring Plan:**

**Construction Monitoring:**
| Parameter | Location | Frequency | Method | Action Level | Responsibility |
|-----------|----------|-----------|--------|--------------|----------------|
| Turbidity | 100m from dredge | Continuous | Optical sensor | >50 NTU above background | Environmental monitor |
| Air quality (PM10) | Site boundary | Daily | High-volume sampler | 150 μg/m³ (24-hr avg) | EHS manager |
| Noise | Community boundary | Weekly | Sound level meter | 55 dBA (day), 45 dBA (night) | Contractor |

**Operational Monitoring:**
| Parameter | Location | Frequency | Method | Limit | Responsibility |
|-----------|----------|-----------|--------|-------|----------------|
| Stormwater pH | Outfall 001 | Each discharge event | Grab sample, pH meter | 6.0-9.0 | Operations |
| Ballast water discharge | Vessel discharge points | Each discharge | D-2 sampling | IMO D-2 standard | Port authority |
| Ambient air quality | Fence line station | Continuous | Automated analyzers | NAAQS/AAQS | EHS manager |
| GHG emissions | Facility-wide | Annual | Emission factors, activity data | Track vs target | Sustainability manager |

**Ecological Monitoring:**
- Marine water quality (quarterly)
- Benthic community surveys (annual)
- Protected species observations (sightings log)
- Invasive species surveillance (quarterly)

**Compliance Monitoring:**
- Permit condition tracking
- Regulatory inspection findings
- Training completion records
- Audit findings and corrective actions

**Adaptive Management:**
- If monitoring shows exceedances or unexpected impacts:
  1. Investigate cause
  2. Implement additional mitigation
  3. Increase monitoring frequency
  4. Notify stakeholders/agencies as required
  5. Document and report

### Step 8: Reporting and Documentation

**Environmental Impact Assessment Report Structure:**

**1. Executive Summary** (5-10 pages)
- Project overview
- Key environmental sensitivities
- Significant impacts identified
- Mitigation measures summary
- Regulatory compliance summary
- Conclusion and recommendations

**2. Introduction**
- Project background and need
- EIA objectives and scope
- Regulatory framework
- Assessment methodology
- Report organization

**3. Project Description** (20-30 pages)
- Location and setting
- Project components and layout
- Construction methods and schedule
- Operational characteristics (throughput, vessel types, equipment)
- Utilities and infrastructure
- Workforce requirements
- Decommissioning considerations

**4. Environmental Baseline** (50-100 pages)
- Study area definition
- Physical environment (climate, air, water, geology, soils)
- Biological environment (marine, terrestrial, protected species)
- Socioeconomic environment
- Existing environmental conditions and quality

**5. Impact Assessment** (50-100 pages)
- Methodology and significance criteria
- Construction impacts
- Operational impacts
- Decommissioning impacts
- Cumulative impacts
- Transboundary impacts (if applicable)
- Climate change impacts (project vulnerability, GHG emissions)

**6. Alternatives Analysis** (20-40 pages)
- No-action alternative
- Alternative sites/locations
- Alternative designs and technologies
- Alternative construction methods
- Comparative assessment
- Rationale for selected alternative

**7. Mitigation Measures** (30-50 pages)
- Mitigation hierarchy application
- Design mitigation
- Construction mitigation (by impact category)
- Operational mitigation (by impact category)
- Monitoring and adaptive management
- Residual impacts after mitigation

**8. Environmental Management Plan** (30-50 pages)
- Environmental policy and objectives
- Organization and responsibilities
- Training and awareness
- Operational controls and procedures
- Emergency preparedness and response
- Monitoring and inspection
- Reporting and communication
- Audit and review
- Continual improvement

**9. Stakeholder Engagement** (10-20 pages)
- Engagement process and activities
- Issues raised and responses
- Ongoing engagement commitments
- Grievance mechanism

**10. Regulatory Compliance** (10-20 pages)
- Permits and approvals required
- Compliance demonstration
- Submittal schedule and responsibilities

**11. Conclusion**
- Summary of findings
- Residual impact significance
- Compliance with regulations and standards
- Path forward and recommendations

**12. References**

**13. Technical Appendices**
- Baseline data tables
- Modeling reports (air, water, noise)
- Species lists and survey data
- Stakeholder consultation records
- Permits and correspondence

**Supporting Documents:**
- Environmental Management Plan (EMP)
- Spill Prevention, Control, and Countermeasure (SPCC) Plan
- Emergency Response Plan
- Waste Management Plan
- Monitoring and Surveillance Plan

### Step 9: Stakeholder Review and Regulatory Submission

**Internal Review:**
- Technical review (environmental, engineering, operations)
- Legal review (regulatory compliance)
- Senior management approval

**External Review:**
- Client review and approval
- Third-party expert review (if required)
- Lender environmental and social due diligence

**Public Consultation:**
- Public notice and comment period (per regulatory requirements)
- Public meetings or hearings
- Response to comments document

**Regulatory Submission:**
- Completeness check (all required sections and appendices)
- Transmittal letter and forms
- Electronic and hard copy submission (per agency requirements)
- Submission tracking and status monitoring

**Regulatory Review Process:**
- Adequacy review (agency determines if complete)
- Technical review (agency and stakeholder comments)
- Supplemental information requests (respond within timeframe)
- Draft permit or determination
- Final permit or approval

**Timeline Tracking:**
- Expected review duration (varies by jurisdiction and project complexity)
- Critical path dependencies (project schedule impacts)
- Proactive communication with agencies

## Output Deliverables

### Core Deliverables

1. **Environmental Impact Assessment (EIA) Report**
   - Format: Word document (50-300 pages depending on project scale)
   - Location: `02_Analysis/environmental_impact/`
   - Quality criteria: Regulatory compliance, technical adequacy, clear writing

2. **Environmental Aspects and Impacts Register**
   - Format: Excel spreadsheet
   - Location: `02_Analysis/environmental_impact/`
   - Contains: All identified aspects, impacts, risk scores, mitigation

3. **Environmental Management Plan (EMP)**
   - Format: Word document (30-80 pages)
   - Location: `04_Implementation/environmental_management/`
   - Operational procedures and monitoring programs

4. **Environmental Monitoring Plan**
   - Format: Word or Excel
   - Location: `04_Implementation/environmental_management/`
   - Parameters, locations, frequency, methods, action levels

5. **Baseline Environmental Data Report**
   - Format: Word document with data tables
   - Location: `01_Discovery/environmental_baseline/`
   - Air, water, ecology, noise, socioeconomic data

### Supporting Deliverables

6. **Regulatory Compliance Matrix**
   - Format: Excel spreadsheet
   - All applicable regulations, requirements, compliance status

7. **Stakeholder Engagement Record**
   - Meetings, comments, responses, grievances

8. **Permits and Approvals Register**
   - Required permits, submission dates, status, conditions

9. **GHG Inventory and Reduction Plan**
   - Scope 1, 2, 3 emissions; reduction targets and strategies

10. **Climate Vulnerability Assessment** (if applicable)
    - Sea level rise, storm surge, adaptation measures

## Quality Checklist

- [ ] All applicable international, regional, national, and local regulations identified
- [ ] Baseline data adequate, recent (<2 years), and from credible sources
- [ ] Study area appropriately defined (direct, indirect, cumulative impact zones)
- [ ] Source-pathway-receptor approach applied systematically
- [ ] Impact significance criteria clearly defined and consistently applied
- [ ] Quantitative assessment conducted where feasible (emissions, modeling)
- [ ] Alternatives analysis includes no-action and at least 2 other alternatives
- [ ] Mitigation hierarchy applied (avoid, minimize, rectify, reduce, compensate)
- [ ] Residual impacts after mitigation assessed and disclosed
- [ ] Cumulative impacts assessed (other projects identified and combined impacts evaluated)
- [ ] Climate change considered (project GHG emissions, vulnerability to SLR/extreme weather)
- [ ] Monitoring plan includes parameters, locations, frequency, methods, action levels
- [ ] Environmental management plan includes procedures, responsibilities, training
- [ ] Emergency response capability demonstrated (SPCC, SOPEP, spill equipment)
- [ ] Stakeholder engagement documented (public consultation, issues raised, responses)
- [ ] Regulatory submission requirements met (format, content, copies)
- [ ] Third-party review or certification obtained if required
- [ ] Financial provisions addressed (environmental bonds, insurance, cleanup funds)
- [ ] Decommissioning and closure liabilities considered
- [ ] Report professionally formatted with clear executive summary
- [ ] All data sources cited, maps and figures legible and properly labeled

## Integration with Other Skills

- Use `/kb-search` to find past environmental assessments and lessons learned
- Use `/verify-quality` before finalizing EIA report
- Use `/client-communication` to draft stakeholder engagement materials
- Use `/risk-assessment` to integrate environmental risks into project risk register
- Use `/document-generation` to create EIA report with Omega branding

## References

- IMO MARPOL Consolidated Edition (latest)
- Ballast Water Management Convention (BWM)
- US EPA EIA Guidelines
- EU EIA Directive (2014/52/EU)
- PIANC Environmental Guidelines for Ports and Waterways
- ISO 14001:2015 Environmental Management Systems
- IFC Performance Standards (PS3: Resource Efficiency and Pollution Prevention, PS6: Biodiversity)
