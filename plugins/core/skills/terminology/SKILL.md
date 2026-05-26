---
name: terminology
description: Manage client-specific terminology and glossary
---

# Terminology

Manage client-specific and industry-specific terminology.

## What This Does

1. Loads terminology dictionary
2. Adds new terms and definitions
3. Updates existing definitions
4. Ensures consistency across deliverables
5. Provides terminology reference

## Instructions for Claude

When this skill is invoked:

1. **Load Terminology Dictionary**
   - Check if `00_Engagement_Management/terminology.json` exists
   - If not, create new dictionary
   - Load existing terms

2. **Ask User Action**
   - View all terms
   - Add new term
   - Update existing term
   - Search for term
   - Export glossary for deliverable

3. **For Adding New Term**
   Capture:
   - Term
   - Definition
   - Context (where used)
   - Acronym (if applicable)
   - Source (industry standard, client-specific, regulatory)

4. **Maintain Terminology Categories**

   **Industry Terms (Maritime)**
   - IMO, MARPOL, SOLAS
   - Port operations terminology
   - Vessel types and classifications
   - Maritime regulations

   **Client-Specific Terms**
   - Client's internal terminology
   - Project-specific abbreviations
   - Stakeholder titles
   - System names

   **Omega Standard Terms**
   - Service line terminology
   - Consulting frameworks
   - Deliverable types

5. **Ensure Consistency**
   - Check for duplicates
   - Flag conflicting definitions
   - Recommend standard usage
   - Update previous deliverables if needed

6. **Export Glossary**
   - Generate markdown glossary
   - Format for inclusion in deliverables
   - Sort alphabetically
   - Include categories

7. **Save Updates**
   - Update `terminology.json`
   - Timestamp changes
   - Confirm save

## Terminology JSON Structure

```json
{
  "industry_terms": {
    "IMO": {
      "full_name": "International Maritime Organization",
      "definition": "...",
      "context": "Regulatory compliance"
    }
  },
  "client_terms": {
    "...": {}
  },
  "omega_terms": {
    "...": {}
  }
}
```

## Reference

See `.claude/skills/configuration/references/terminology.md` for detailed implementation.
