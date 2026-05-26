---
name: kb-search
description: Search organizational knowledge base for relevant content
---

# Knowledge Base Search

Search organizational knowledge base for relevant content.

## What This Does

1. Searches knowledge base (Obsidian vault)
2. Finds similar engagements, templates, best practices
3. Returns relevant results with context
4. Helps leverage organizational knowledge

## Instructions for Claude

When this skill is invoked:

1. **Ask Search Intent**
   - Similar engagements (same industry/service line)
   - Best practices for specific topic
   - Templates for deliverable type
   - Lessons learned from past projects
   - Industry-specific insights
   - Methodologies and frameworks

2. **Build Search Query**
   Based on intent and current engagement context:
   - Service line: MAR
   - Industry: Maritime
   - Current deliverable type
   - Specific topic/keywords

3. **Execute Search**
   - Use Obsidian MCP server if configured
   - Search `.claude/skills/knowledge-management/` folder
   - Search past engagement folders (if accessible)
   - Filter by relevance

4. **Return Results**
   Display:
   - Result title and type
   - Relevance score
   - Key excerpt/summary
   - Source location
   - Last updated date

5. **Offer to Load Content**
   - Ask if user wants full content from any result
   - Read and display selected content
   - Suggest how to apply to current engagement

## Search Categories

- Engagement summaries
- Deliverable templates
- Analysis frameworks
- Industry insights
- Service line methodologies
- Lessons learned
- Best practices
- Client management tips

## Reference

See `.claude/skills/knowledge-base/references/kb-search.md` for detailed implementation.
