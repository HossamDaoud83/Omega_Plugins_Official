# Lessons Learned Command

Captures and documents lessons learned at engagement conclusion.

## Trigger
`/project:lessons-learned` or at engagement close-out

---

## Purpose

Extract insights from the engagement to:
- Improve future engagements
- Build organizational knowledge base
- Identify reusable assets
- Document client-specific insights

---

## Execution Steps

### Step 1: Gather Data Sources

Read and analyze:
```
1. project.json - Engagement configuration
2. engagement_progress.md - All session notes
3. deliverables_tracker.json - Deliverable history
4. risk_register.md - Risks and issues encountered
5. 06_Client_Communications/ - Status reports, meeting notes
```

### Step 2: Analysis Categories

Analyze data across these dimensions:

| Category | What to Capture |
|----------|-----------------|
| What Worked Well | Successful approaches, tools, techniques |
| What Could Improve | Challenges, inefficiencies, gaps |
| Client Insights | Client-specific learnings |
| Reusable Assets | Templates, frameworks, content to reuse |
| Process Improvements | Workflow enhancements |
| Technical Learnings | Industry/domain knowledge gained |

### Step 3: Generate Report

---

## Output Template

```markdown
# Lessons Learned Report

**Engagement:** [Name]
**Client:** [Client Name]
**Duration:** [Start Date] - [End Date]
**Service Line:** [Code] - [Name]
**Industry:** [Industry]
**Prepared:** [Date]

---

## Executive Summary

[2-3 paragraph summary of key learnings and recommendations]

---

## Engagement Performance Metrics

### Delivery Performance
| Metric | Value | Benchmark |
|--------|-------|-----------|
| Total Deliverables | [X] | - |
| On-Time Delivery Rate | [X%] | >90% |
| First Pass Approval Rate | [X%] | >80% |
| Average Quality Score | [X] | >80 |
| Revision Cycles (avg) | [X] | <1.5 |

### Risk Management
| Metric | Value |
|--------|-------|
| Risks Identified | [X] |
| Risks Materialized | [X] |
| Issues Resolved | [X] |

### Client Satisfaction
| Dimension | Rating |
|-----------|--------|
| Overall Satisfaction | [1-5] |
| Communication | [1-5] |
| Quality of Work | [1-5] |
| Responsiveness | [1-5] |

---

## What Worked Well

### Approach & Methodology
1. [Successful approach 1]
   - Context: [When/why used]
   - Impact: [Result achieved]
   - Recommendation: [How to replicate]

2. [Successful approach 2]
   - Context: [When/why used]
   - Impact: [Result achieved]
   - Recommendation: [How to replicate]

### Tools & Techniques
- [Tool/technique 1]: [How it helped]
- [Tool/technique 2]: [How it helped]

### Team & Collaboration
- [Collaboration success 1]
- [Collaboration success 2]

---

## What Could Improve

### Challenges Encountered
1. [Challenge 1]
   - Impact: [How it affected the engagement]
   - Root Cause: [Why it happened]
   - Recommendation: [How to prevent/address]

2. [Challenge 2]
   - Impact: [How it affected the engagement]
   - Root Cause: [Why it happened]
   - Recommendation: [How to prevent/address]

### Process Gaps
- [Gap 1]: [Improvement suggestion]
- [Gap 2]: [Improvement suggestion]

### Resource/Skill Gaps
- [Gap 1]: [Training/hiring recommendation]

---

## Client-Specific Insights

### Client Culture & Dynamics
- [Insight about decision-making]
- [Insight about communication preferences]
- [Key stakeholder observations]

### Client Technical Environment
- [Systems/technology notes]
- [Integration considerations]
- [Data quality observations]

### Relationship Notes
- [Key relationships built]
- [Potential future opportunities]
- [Sensitive areas to be aware of]

---

## Reusable Assets Created

### Templates
| Asset | Description | Location |
|-------|-------------|----------|
| [Template 1] | [Description] | [Path] |
| [Template 2] | [Description] | [Path] |

### Frameworks
| Asset | Description | Applicability |
|-------|-------------|---------------|
| [Framework 1] | [Description] | [When to use] |

### Content
| Asset | Description | Reuse Potential |
|-------|-------------|-----------------|
| [Content 1] | [Description] | [Where applicable] |

---

## Process Improvement Recommendations

### For Future Engagements
1. [Recommendation 1]
   - Priority: [High/Medium/Low]
   - Effort: [Low/Medium/High]
   - Owner: [Role/Team]

2. [Recommendation 2]
   - Priority: [High/Medium/Low]
   - Effort: [Low/Medium/High]
   - Owner: [Role/Team]

### For Omega Methodology
- [Methodology enhancement 1]
- [Methodology enhancement 2]

### For Tools & Templates
- [Tool/template improvement 1]
- [Tool/template improvement 2]

---

## Knowledge Transfer

### Industry Knowledge Gained
- [Technical knowledge 1]
- [Regulatory knowledge 1]
- [Market knowledge 1]

### Skills Developed
- [Skill 1]
- [Skill 2]

---

## Follow-Up Actions

| Action | Owner | Due Date | Status |
|--------|-------|----------|--------|
| [Action 1] | [Name] | [Date] | Pending |
| [Action 2] | [Name] | [Date] | Pending |

---

## Appendix

### A. Key Decisions Log
[Summary of major decisions made]

### B. Risk Register Summary
[Summary of risks and outcomes]

### C. Deliverable Quality Summary
[Scores and trends]

---

*Report Generated: [Timestamp]*
*Confidential - Internal Use Only*
```

---

## Output Location

Save to: `00_Engagement_Management/lessons_learned_[YYYY-MM-DD].md`

---

## Knowledge Base Integration

### Extract for Knowledge Base

After generating report, create summary for Obsidian:

```markdown
---
tags: [lessons-learned, [industry], [service-line]]
client: [anonymized reference]
engagement_type: [type]
date: [date]
---

# [Engagement Type] - Key Learnings

## Summary
[Brief description]

## Key Takeaways
1. [Takeaway 1]
2. [Takeaway 2]
3. [Takeaway 3]

## Reusable Assets
- [[Asset 1]]
- [[Asset 2]]

## Related
- [[Similar Engagement 1]]
- [[Industry Notes]]
```

Save to: Obsidian vault via MCP integration

---

## Automated Insights Extraction

The command automatically identifies:

### From engagement_progress.md
- Recurring themes in session notes
- Blockers that appeared multiple times
- Successful approaches mentioned

### From deliverables_tracker.json
- Deliverables requiring multiple revisions
- On-time vs late deliveries
- Quality score patterns

### From risk_register.md
- Risks that materialized
- Effective mitigations
- Unaddressed risks

---

## Example Usage

```
User: Generate lessons learned for this engagement

Claude:
1. Reads all engagement data sources
2. Analyzes patterns and themes
3. Calculates metrics
4. Generates comprehensive report
5. Saves to engagement folder
6. Creates knowledge base entry (if Obsidian configured)
7. Presents summary to user
```
