# Knowledge Base Save Command

Save reusable content to the organizational knowledge base.

## Trigger
`/project:kb-save` or when asked to "save to knowledge base", "store this framework", "add to templates"

---

## Parameters

| Parameter | Required | Description |
|-----------|----------|-------------|
| `type` | Yes | framework, template, case_study, best_practice, insight |
| `title` | Yes | Title for the knowledge item |
| `content` | No | Content to save (or specify `source`) |
| `source` | No | File path to save from |
| `service_line` | No | Service line code |
| `industry` | No | Industry code |
| `tags` | No | Additional tags |

---

## Content Types

### Framework
Reusable methodology or analytical approach

**Required elements:**
- Overview/purpose
- When to use
- Step-by-step process
- Deliverables/outputs
- Related frameworks
- Examples

**Save location:** `01_Frameworks/[ServiceLine]/`

---

### Template
Reusable document structure

**Required elements:**
- Template purpose
- When to use
- Sections explained
- Customization guidance
- Format (Word, PPT, Excel)

**Save location:** `03_Templates/[Category]/`

---

### Case Study
Anonymized engagement learnings

**Required elements:**
- Context (anonymized)
- Challenge
- Approach
- Solution
- Results
- Key learnings
- Reusable assets

**Save location:** `04_Case_Studies/[Industry]/`

**CRITICAL: Anonymization checklist**
- [ ] No client name
- [ ] No specific locations
- [ ] No dates that could identify
- [ ] No confidential data
- [ ] No individual names
- [ ] Revenue/size generalized

---

### Best Practice
Operational excellence insight

**Required elements:**
- What to do
- Why it works
- When to apply
- Common mistakes to avoid
- Supporting evidence

**Save location:** `05_Best_Practices/[Category]/`

---

### Insight
Industry or domain knowledge

**Required elements:**
- Key insight
- Supporting data/evidence
- Implications for consulting
- Related topics
- Date captured (for freshness)

**Save location:** `02_Industries/[Industry]/` or `06_Research/`

---

## Execution

### Step 1: Validate Input
```
Check:
- Type is valid
- Title is provided
- Content or source is provided
- Required metadata for type
```

### Step 2: Format Content
```
Generate frontmatter:
---
title: [title]
type: [type]
service_line: [service_line]
industry: [industry]
created: [today]
last_updated: [today]
author: [from engagement]
tags: [tags]
engagement_source: [engagement_id] (for traceability)
---

Format content according to type template
```

### Step 3: Anonymize (if case study)
```
Scan content for:
- Client names → "[Client]" or "The Organization"
- Specific dates → "Q1 2024" or "Early 2024"
- Locations → "[Region]" or generalize
- Revenue figures → "Mid-market" or ranges
- Individual names → Roles only
```

### Step 4: Save to Knowledge Base
```
If Obsidian configured:
  - Use Obsidian MCP to create note
  - Add to appropriate folder
  - Update MOC index
  
If Obsidian not configured:
  - Save to .claude/knowledge_export/
  - Generate markdown file
  - Queue for manual import
```

### Step 5: Create Links
```
- Link to related content
- Update MOC files
- Add backlinks from related notes
```

---

## Output Format

```
═══════════════════════════════════════════════════════════════
KNOWLEDGE BASE SAVE
═══════════════════════════════════════════════════════════════

Content Type: [type]
Title: [title]

SAVE PREVIEW
───────────────────────────────────────────────────────────────
Location: [path]
Tags: [tag list]
Links: [[Related 1]], [[Related 2]]

Content:
[First 10 lines of formatted content]
...
───────────────────────────────────────────────────────────────

[If case study]
ANONYMIZATION CHECK
───────────────────────────────────────────────────────────────
✓ No client names detected
✓ No specific dates detected
✓ No individual names detected
⚠ Location reference found - generalized to "[Region]"
───────────────────────────────────────────────────────────────

Confirm save? (yes/no)
═══════════════════════════════════════════════════════════════
```

### After Save
```
═══════════════════════════════════════════════════════════════
✓ SAVED TO KNOWLEDGE BASE
═══════════════════════════════════════════════════════════════

Title: [title]
Location: [full path]
ID: [generated ID]

Updated:
• [[MOC_[Type]]] - Added entry
• [[Related Note]] - Added backlink

View at: [Obsidian link or file path]
═══════════════════════════════════════════════════════════════
```

---

## Example Usage

### Save a Framework
```
/project:kb-save type=framework title="Custom Maturity Model" service_line=DIG

[Paste or describe framework content]
```

### Save from File
```
/project:kb-save type=template title="Healthcare Assessment Template" source="05_Deliverables_Final/assessment_template.md"
```

### Save Case Study
```
/project:kb-save type=case_study title="Regional Health System Digital Transformation" industry=healthcare

[Engagement summary - will be anonymized]
```

---

## Automated Save Triggers

### At Deliverable Completion
```
After marking deliverable complete:
  "This deliverable contains potentially reusable content.
   Would you like to save to knowledge base?"
   
   Options:
   • Save as template
   • Extract framework
   • Skip
```

### At Lessons Learned
```
After generating lessons learned:
  Automatically extract:
  • New frameworks developed
  • Templates created
  • Best practices identified
  
  Prompt to save each item
```

### At Engagement Close
```
Generate case study entry:
  "Create case study from this engagement?"
  
  Auto-populate:
  • Context from project.json
  • Approach from engagement_progress.md
  • Results from deliverables
  • Learnings from lessons_learned.md
```
