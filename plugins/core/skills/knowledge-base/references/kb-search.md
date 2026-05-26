# Knowledge Base Search Command

Search organizational knowledge base for relevant content.

## Trigger
`/project:kb-search` or when asked to "find frameworks", "search knowledge base", "look up past work"

---

## Parameters

| Parameter | Required | Description |
|-----------|----------|-------------|
| `query` | Yes | Search terms |
| `type` | No | Filter by type: framework, template, case_study, best_practice |
| `service_line` | No | Filter by service line code |
| `industry` | No | Filter by industry |
| `limit` | No | Max results (default: 10) |

---

## Execution

### Step 1: Parse Query
Extract:
- Keywords
- Type filter (if specified)
- Service line filter (if specified)
- Industry filter (if specified)

### Step 2: Search Sources

**Primary: Obsidian Vault (if configured)**
```
Use Obsidian MCP server to search vault:
- Full-text search on query
- Filter by frontmatter tags
- Return matching notes with relevance score
```

**Secondary: Local Skills**
```
Search .claude/skills/ folders:
- SKILL.md files
- Reference documents
- Subagent files
```

**Tertiary: Engagement History**
```
If searching for case studies or past work:
- Search lessons learned reports
- Search deliverables in 05_Deliverables_Final/
```

### Step 3: Rank Results
Score based on:
- Query term matches (40%)
- Type match (20%)
- Service line match (20%)
- Industry match (20%)

### Step 4: Present Results

---

## Output Format

```
═══════════════════════════════════════════════════════════════
KNOWLEDGE BASE SEARCH
═══════════════════════════════════════════════════════════════
Query: "[query]"
Filters: [type] | [service_line] | [industry]
Results: [X] found

───────────────────────────────────────────────────────────────
FRAMEWORKS
───────────────────────────────────────────────────────────────

1. [Framework Name]
   Location: 01_Frameworks/[ServiceLine]/[file]
   Service Line: [code] | Industry: [if applicable]
   Summary: [Brief description]
   Relevance: ████████░░ 85%
   
   Quick View:
   > [First 2-3 lines of content]

2. [Framework Name]
   ...

───────────────────────────────────────────────────────────────
TEMPLATES
───────────────────────────────────────────────────────────────

1. [Template Name]
   Location: 03_Templates/[folder]/[file]
   Format: [Document type]
   Summary: [Brief description]
   Relevance: ████████░░ 80%

───────────────────────────────────────────────────────────────
CASE STUDIES
───────────────────────────────────────────────────────────────

1. [Case Study Title]
   Location: 04_Case_Studies/[folder]/[file]
   Service Line: [code] | Industry: [industry]
   Engagement Size: [size] | Duration: [weeks] weeks
   Summary: [Brief description]
   Relevance: ███████░░░ 75%

───────────────────────────────────────────────────────────────
BEST PRACTICES
───────────────────────────────────────────────────────────────

1. [Best Practice Title]
   Location: 05_Best_Practices/[folder]/[file]
   Category: [category]
   Summary: [Brief description]
   Relevance: ██████░░░░ 65%

═══════════════════════════════════════════════════════════════

RECOMMENDED FOR THIS ENGAGEMENT:
Based on current context ([service_line], [industry]):
• [[Most Relevant Framework]]
• [[Most Relevant Template]]

To load a resource, say: "Load [Resource Name]"
═══════════════════════════════════════════════════════════════
```

---

## Contextual Search

When query is empty, automatically search based on:
1. Current engagement service line
2. Current engagement industry
3. Current deliverable type
4. Phase of engagement

```
/project:kb-search

→ Detects: DIG service line, Healthcare industry, Assessment phase
→ Automatically searches: "digital assessment healthcare"
→ Returns relevant frameworks, templates, case studies
```

---

## Integration with Workflow

### At Deliverable Start
```
Before starting [D001 - Current State Assessment]:
  1. Auto-search: "current state assessment [industry]"
  2. Present relevant frameworks
  3. Offer to load applicable templates
```

### At Analysis Phase
```
Before analysis work:
  1. Auto-search: "gap analysis [service_line]"
  2. Present analytical frameworks
  3. Surface similar past analyses
```

### When Creating Recommendations
```
Before recommendations:
  1. Auto-search: "recommendations [industry] [service_line]"
  2. Show successful approaches from case studies
  3. Present roadmap templates
```

---

## Example Queries

```
# Find digital transformation frameworks
/project:kb-search query="digital maturity assessment"

# Find healthcare-specific templates
/project:kb-search query="assessment" industry=healthcare type=template

# Find similar past engagements
/project:kb-search query="operations improvement" type=case_study service_line=OPS

# Find all strategy frameworks
/project:kb-search type=framework service_line=STR

# Contextual search (uses current engagement context)
/project:kb-search
```

---

## Error Handling

### No Results Found
```
═══════════════════════════════════════════════════════════════
KNOWLEDGE BASE SEARCH
═══════════════════════════════════════════════════════════════
Query: "[query]"
Results: 0 found

No exact matches found. Suggestions:
• Try broader search terms
• Remove filters
• Check spelling

Related searches that might help:
• "[alternative query 1]"
• "[alternative query 2]"

Or create new content:
/project:kb-save to add new knowledge
═══════════════════════════════════════════════════════════════
```

### Obsidian Not Configured
```
⚠️ Obsidian integration not configured.

Searching local skills and templates only.
To enable full knowledge base:
1. Configure Obsidian MCP in .mcp.json
2. Set OBSIDIAN_VAULT_PATH to your vault location

[Continue with local search results]
```
