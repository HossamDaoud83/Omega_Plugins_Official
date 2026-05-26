---
name: kb-save
description: Save content to organizational knowledge base
---

# Knowledge Base Save

Save valuable content to organizational knowledge base.

## What This Does

1. Captures valuable content from engagement
2. Formats for knowledge base
3. Tags appropriately for future retrieval
4. Saves to knowledge management system

## Instructions for Claude

When this skill is invoked:

1. **Ask What to Save**
   - Completed deliverable
   - Key insight or finding
   - Lesson learned
   - Template or framework
   - Analysis approach
   - Client management tip

2. **Capture Metadata**
   - Title
   - Type (deliverable/insight/lesson/template/framework)
   - Service line
   - Industry
   - Engagement reference
   - Date created
   - Author/consultant

3. **Format Content**

   **For Deliverables:**
   - Anonymize client-specific information
   - Keep methodology and approach
   - Include key findings/recommendations template
   - Document tools/frameworks used

   **For Insights/Lessons:**
   - Context (what was the situation)
   - Insight/learning
   - Application (how to use in future)
   - Tags for discoverability

   **For Templates:**
   - Purpose and use case
   - Instructions for customization
   - Example/sample
   - Best practices

4. **Tag Appropriately**
   - Service line (MAR, DIG, AIG, etc.)
   - Industry (Maritime, Healthcare, etc.)
   - Type (template, analysis, lesson, framework)
   - Keywords (specific topics)

5. **Save to Knowledge Base**
   - Save to `.claude/skills/knowledge-management/library/`
   - Filename: `[YYYY-MM-DD]_[Type]_[Title].md`
   - If Obsidian configured, save to vault as well

6. **Confirm Save**
   - Show save location
   - Display tags applied
   - Confirm searchable via `/kb-search`

## Reference

See `.claude/skills/knowledge-base/references/kb-save.md` for detailed implementation.
