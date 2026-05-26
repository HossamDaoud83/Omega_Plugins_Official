# Obsidian Vault Structure for Omega Knowledge Base

## Root Structure

```
Omega_Knowledge_Base/
│
├── 00_Index/                    # Navigation and discovery
├── 01_Frameworks/               # Consulting methodologies
├── 02_Industries/               # Industry-specific knowledge
├── 03_Templates/                # Reusable document templates
├── 04_Case_Studies/             # Anonymized engagement learnings
├── 05_Best_Practices/           # Operational excellence
├── 06_Research/                 # Market and technology insights
├── 07_Regulations/              # Compliance and regulatory
└── 99_Archive/                  # Deprecated content
```

---

## 00_Index - Maps of Content (MOCs)

Purpose: Central navigation hub for discovering knowledge

```
00_Index/
├── MOC_Home.md                  # Main dashboard
├── MOC_Frameworks.md            # All frameworks by service line
├── MOC_Industries.md            # Industry knowledge map
├── MOC_Templates.md             # Template catalog
├── MOC_Case_Studies.md          # Case study index
├── MOC_Regulations.md           # Regulatory reference map
└── MOC_Tools.md                 # Software and tool guides
```

### MOC Template
```markdown
---
title: Map of Content - [Topic]
type: moc
last_updated: [date]
---

# [Topic] Knowledge Map

## Overview
[Brief description of this knowledge area]

## Quick Links
- [[Most Used Resource 1]]
- [[Most Used Resource 2]]

## By Category

### [Category 1]
- [[Note 1]] - Brief description
- [[Note 2]] - Brief description

### [Category 2]
- [[Note 3]] - Brief description
```

---

## 01_Frameworks - Consulting Methodologies

```
01_Frameworks/
├── Strategy/
│   ├── Porter_Five_Forces.md
│   ├── SWOT_TOWS_Analysis.md
│   ├── BCG_Growth_Share_Matrix.md
│   ├── Ansoff_Matrix.md
│   ├── Blue_Ocean_Strategy.md
│   └── Strategic_Planning_Process.md
├── Operations/
│   ├── Lean_Six_Sigma.md
│   ├── Value_Stream_Mapping.md
│   ├── SIPOC_Framework.md
│   ├── 8_Wastes_DOWNTIME.md
│   └── Process_Maturity_Model.md
├── Digital/
│   ├── Digital_Maturity_Model.md
│   ├── TOGAF_Overview.md
│   ├── Cloud_Migration_Framework.md
│   ├── API_Strategy_Framework.md
│   └── Data_Strategy_Canvas.md
├── Finance/
│   ├── Business_Case_Framework.md
│   ├── DCF_Valuation_Guide.md
│   ├── Financial_Modeling_Standards.md
│   └── Cost_Benefit_Analysis.md
├── Change/
│   ├── ADKAR_Model.md
│   ├── Kotter_8_Steps.md
│   ├── Change_Impact_Assessment.md
│   ├── Stakeholder_Analysis.md
│   └── Communication_Planning.md
├── AI_Governance/
│   ├── ISO_42001_Overview.md
│   ├── AI_Risk_Framework.md
│   ├── Responsible_AI_Principles.md
│   ├── AI_Use_Case_Prioritization.md
│   └── Model_Governance_Framework.md
├── Data_Analytics/
│   ├── Data_Maturity_Model.md
│   ├── DAMA_DMBOK_Summary.md
│   ├── Analytics_Value_Chain.md
│   ├── Data_Governance_Framework.md
│   └── KPI_Development_Guide.md
└── Risk_Compliance/
    ├── COSO_ERM_Framework.md
    ├── Three_Lines_Model.md
    ├── Risk_Assessment_Methodology.md
    ├── Control_Framework_Design.md
    └── Compliance_Program_Elements.md
```

---

## 02_Industries - Sector Knowledge

```
02_Industries/
├── Healthcare/
│   ├── Healthcare_Overview.md
│   ├── HIPAA_Compliance_Guide.md
│   ├── EHR_Landscape.md
│   ├── Value_Based_Care.md
│   └── Healthcare_Trends_2024.md
├── Maritime/
│   ├── Maritime_Overview.md
│   ├── IMO_Conventions_Summary.md
│   ├── Port_Operations_Guide.md
│   ├── Decarbonization_Roadmap.md
│   └── Maritime_Digital_Transformation.md
├── Education/
│   ├── Education_Overview.md
│   ├── Accreditation_Guide.md
│   ├── EdTech_Landscape.md
│   ├── Enrollment_Management.md
│   └── Student_Success_Metrics.md
├── Government/
│   ├── Government_Overview.md
│   ├── Federal_Procurement_Guide.md
│   ├── FedRAMP_Overview.md
│   ├── Digital_Government_Strategy.md
│   └── Citizen_Services_Design.md
├── Financial_Services/
│   ├── Financial_Services_Overview.md
│   ├── Banking_Regulations_Summary.md
│   ├── Core_Banking_Systems.md
│   ├── Open_Banking_Guide.md
│   └── FinTech_Landscape.md
├── Manufacturing/
│   ├── Manufacturing_Overview.md
│   ├── Industry_4.0_Guide.md
│   ├── Lean_Manufacturing.md
│   ├── Supply_Chain_Resilience.md
│   └── Quality_Management_Systems.md
├── Retail/
│   ├── Retail_Overview.md
│   ├── Unified_Commerce_Guide.md
│   ├── Customer_Experience_Design.md
│   ├── Retail_Analytics.md
│   └── Omnichannel_Strategy.md
└── Energy/
    ├── Energy_Overview.md
    ├── Grid_Modernization.md
    ├── Renewable_Integration.md
    ├── Utility_Regulations.md
    └── Energy_Transition_Roadmap.md
```

---

## 03_Templates - Reusable Documents

```
03_Templates/
├── Documents/
│   ├── Executive_Summary_Template.md
│   ├── Assessment_Report_Template.md
│   ├── Business_Case_Template.md
│   ├── Roadmap_Template.md
│   ├── Status_Report_Template.md
│   └── Lessons_Learned_Template.md
├── Presentations/
│   ├── Steering_Committee_Template.md
│   ├── Kickoff_Presentation_Template.md
│   ├── Final_Presentation_Template.md
│   └── Workshop_Facilitation_Template.md
├── Analysis/
│   ├── SWOT_Template.md
│   ├── Gap_Analysis_Template.md
│   ├── Stakeholder_Map_Template.md
│   ├── Risk_Register_Template.md
│   └── Decision_Matrix_Template.md
└── Project_Management/
    ├── Project_Charter_Template.md
    ├── RACI_Template.md
    ├── Issue_Log_Template.md
    └── Change_Request_Template.md
```

---

## 04_Case_Studies - Anonymized Learnings

```
04_Case_Studies/
├── By_Service_Line/
│   ├── Strategy/
│   ├── Operations/
│   ├── Digital/
│   └── ...
├── By_Industry/
│   ├── Healthcare/
│   ├── Financial_Services/
│   └── ...
└── By_Outcome/
    ├── Success_Stories/
    └── Lessons_From_Challenges/
```

### Case Study Template
```markdown
---
title: [Anonymized Title]
type: case_study
service_line: [code]
industry: [industry]
engagement_size: [small|medium|large]
duration_weeks: [number]
date_completed: [YYYY-MM]
tags: [tag1, tag2]
---

# [Engagement Type] - [Industry]

## Context
[Anonymized description of client situation]

## Challenge
[Problem being solved]

## Approach
[Methodology and key activities]

## Solution
[What was delivered]

## Results
[Outcomes and metrics]

## Key Learnings
1. [Learning 1]
2. [Learning 2]
3. [Learning 3]

## Reusable Assets
- [[Asset 1]]
- [[Asset 2]]
```

---

## Linking Conventions

### Wikilinks
Use `[[Note Name]]` for internal links
Use `[[Note Name|Display Text]]` for custom link text
Use `[[Note Name#Heading]]` for section links

### Tags
- Service lines: `#service/strategy`, `#service/operations`
- Industries: `#industry/healthcare`, `#industry/maritime`
- Content types: `#type/framework`, `#type/template`
- Status: `#status/draft`, `#status/reviewed`

### Frontmatter Standards
All notes must include:
- `title`: Note title
- `type`: Content type
- `created`: Creation date
- `last_updated`: Last modification date
- `tags`: Relevant tags as array
