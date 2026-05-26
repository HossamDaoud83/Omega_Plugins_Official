---
name: knowledge-management
description: Manage Obsidian-based knowledge base integration
---

# Knowledge Management

Integrate with organizational knowledge base (Obsidian vault).

## What This Does

1. Search knowledge base for relevant frameworks and templates
2. Retrieve past work and case studies
3. Save new insights to knowledge base
4. Link engagement to organizational knowledge
5. Capture lessons learned for future use

## Instructions for Claude

When this skill is invoked:

1. **Ask User Action Needed**
   - Search knowledge base for content
   - Save content to knowledge base
   - Link engagement to KB resources
   - View KB structure

2. **For Search**
   - Get search query from user
   - Query Obsidian vault via MCP
   - Return relevant:
     - Frameworks
     - Templates
     - Case studies
     - Best practices
     - Industry insights
   - Format results with links

3. **For Save**
   - Get content type (framework, template, case study, best practice)
   - Get title and content
   - Add proper frontmatter (service line, industry, tags)
   - Save to appropriate vault location
   - Create bidirectional links

4. **For Link**
   - Create engagement note in vault
   - Link to relevant resources
   - Set up for lessons learned capture

## Overview

Integrates Omega consulting engagements with organizational knowledge bases, enabling:
- Retrieval of relevant frameworks and past work
- Storage of new insights and reusable assets
- Cross-engagement learning
- Institutional memory preservation

---

## Knowledge Sources

### 1. Obsidian Vault (Primary)
**Purpose:** Central knowledge repository for Omega
**Connection:** MCP server `obsidian` in `.mcp.json`

**Vault Structure:**
```
Omega_Knowledge_Base/
├── 00_Index/
│   ├── MOC_Frameworks.md          # Master index of frameworks
│   ├── MOC_Industries.md          # Industry knowledge map
│   ├── MOC_Methodologies.md       # Methodology references
│   └── MOC_Case_Studies.md        # Anonymized case studies
├── 01_Frameworks/
│   ├── Strategy/
│   ├── Operations/
│   ├── Digital/
│   ├── Finance/
│   ├── Change/
│   ├── AI_Governance/
│   ├── Data_Analytics/
│   └── Risk_Compliance/
├── 02_Industries/
│   ├── Healthcare/
│   ├── Maritime/
│   ├── Education/
│   ├── Government/
│   ├── Financial_Services/
│   ├── Manufacturing/
│   ├── Retail/
│   └── Energy/
├── 03_Templates/
│   ├── Documents/
│   ├── Presentations/
│   └── Analysis/
├── 04_Case_Studies/
│   └── [Anonymized engagement learnings]
├── 05_Best_Practices/
│   ├── Delivery/
│   ├── Client_Management/
│   └── Quality/
└── 06_Research/
    ├── Market_Trends/
    ├── Technology/
    └── Regulations/
```

### 2. Local Engagement Context
**Purpose:** Current engagement files and history
**Location:** Project workspace

### 3. External Sources (via web search)
**Purpose:** Current regulations, market data, benchmarks
**Access:** Web search tool

---

## Knowledge Operations

### Search Knowledge Base

**When to use:** Before starting any deliverable or analysis

**Query patterns:**
```
# Find frameworks for service line
"frameworks for digital transformation assessment"

# Find industry-specific guidance
"healthcare regulatory compliance checklist"

# Find similar past work
"current state assessment financial services"

# Find templates
"executive summary template strategy"
```

**Integration with Obsidian MCP:**
```javascript
// Search vault for relevant content
obsidian.search({
  query: "digital maturity assessment",
  vault: "Omega_Knowledge_Base",
  limit: 10
})
```

---

### Store New Knowledge

**When to use:** 
- After completing a deliverable with reusable content
- After capturing lessons learned
- When creating new frameworks or templates

**Knowledge types to store:**

| Type | Location | Format |
|------|----------|--------|
| Framework | `01_Frameworks/[ServiceLine]/` | Markdown with YAML frontmatter |
| Template | `03_Templates/` | Markdown or original format |
| Case Study | `04_Case_Studies/` | Anonymized markdown |
| Best Practice | `05_Best_Practices/` | Markdown note |
| Industry Insight | `02_Industries/[Industry]/` | Markdown note |

**Frontmatter template:**
```yaml
---
title: [Title]
type: [framework|template|case_study|best_practice|insight]
service_line: [STR|OPS|DIG|FIN|CHG|AIG|DAT|RSK]
industry: [industry code]
created: [date]
last_updated: [date]
author: [name]
tags: [tag1, tag2, tag3]
related: [[Related Note 1]], [[Related Note 2]]
---
```

---

### Link Engagement to Knowledge Base

**At engagement start:**
1. Query knowledge base for relevant content
2. Create engagement note in vault linking to resources
3. Set up bidirectional links

**At engagement end:**
1. Extract reusable assets
2. Create/update case study entry
3. Update framework notes with new learnings
4. Link lessons learned to best practices

---

## Integration Commands

### `/project:kb-search`
Search knowledge base for relevant content.

```
/project:kb-search query="digital transformation assessment healthcare"
```

**Output:**
```
═══════════════════════════════════════════════════════════════
KNOWLEDGE BASE SEARCH RESULTS
═══════════════════════════════════════════════════════════════

Query: "digital transformation assessment healthcare"

FRAMEWORKS (3 results)
1. [[Digital Maturity Assessment Framework]]
   - Service Line: DIG
   - Relevance: High
   - Summary: 5-level maturity model for digital capabilities

2. [[Healthcare Digital Transformation Playbook]]
   - Service Line: DIG, Industry: Healthcare
   - Relevance: High
   - Summary: Industry-specific guidance for healthcare DT

3. [[HIMSS EMRAM Model Reference]]
   - Industry: Healthcare
   - Relevance: Medium
   - Summary: Electronic medical record adoption model

TEMPLATES (2 results)
1. [[Digital Assessment Report Template]]
2. [[Healthcare IT Roadmap Template]]

CASE STUDIES (1 result)
1. [[Case Study - Regional Health System DT]]
   - Anonymized case from similar engagement

═══════════════════════════════════════════════════════════════
```

### `/project:kb-save`
Save content to knowledge base.

```
/project:kb-save type=framework title="Custom Maturity Model" content=[content]
```

### `/project:kb-link`
Link current engagement to knowledge base resources.

```
/project:kb-link resources=["Digital Maturity Framework", "Healthcare Playbook"]
```

---

## Automated Knowledge Capture

### During Engagement

**Pre-session hook enhancement:**
- Query knowledge base for relevant content based on current deliverable
- Surface applicable frameworks and past work

**Post-session hook enhancement:**
- Identify potential reusable content created
- Prompt for knowledge base updates

### At Engagement Close

**Lessons learned command enhancement:**
- Automatically extract:
  - New frameworks developed
  - Modified templates
  - Industry insights gained
  - Process improvements identified
- Create knowledge base entries
- Update case study index

---

## Knowledge Quality Standards

### For Frameworks
- Must be tested on at least one engagement
- Include application guidance
- Document limitations and assumptions
- Link to related frameworks

### For Templates
- Must be client-ready format
- Include usage instructions
- Version controlled
- Industry/service line tagged

### For Case Studies
- Fully anonymized (no client names, dates, locations)
- Focus on approach and learnings
- Include success metrics
- Document challenges and solutions

### For Best Practices
- Actionable and specific
- Supported by evidence
- Regularly reviewed and updated
- Tagged for discoverability

---

## References

See `references/` folder for:
- `obsidian-structure.md` - Detailed vault organization
- `tagging-taxonomy.md` - Standard tags and categories
- `knowledge-lifecycle.md` - Content maintenance process
