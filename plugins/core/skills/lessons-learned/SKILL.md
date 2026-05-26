---
name: lessons-learned
description: Capture and document end-of-engagement lessons learned
---

# Lessons Learned

Capture end-of-engagement learnings for knowledge base.

## What This Does

1. Facilitates lessons learned capture
2. Documents what went well and what didn't
3. Records key challenges and solutions
4. Provides recommendations for future engagements
5. Saves to knowledge base

## Instructions for Claude

When this skill is invoked:

1. **Guide User Through Capture**

   Ask about each category:

   **What Went Well**
   - Successes and wins
   - Effective approaches
   - Client satisfaction points
   - Team performance highlights

   **What Could Be Improved**
   - Challenges encountered
   - Process inefficiencies
   - Communication gaps
   - Tools/methods that didn't work well

   **Key Challenges**
   - Technical challenges
   - Organizational challenges
   - Client-related challenges
   - Resource constraints
   - How challenges were overcome

   **Recommendations for Future**
   - Process improvements
   - Tools to use/avoid
   - Client management tips
   - Industry-specific insights
   - Service line best practices

   **Client Feedback**
   - Explicit feedback received
   - Observed reactions
   - Satisfaction indicators
   - Relationship outcomes

2. **Generate Lessons Learned Document**

   Create structured markdown document:
   - Engagement identification
   - Client and industry context
   - Service line
   - Engagement duration and scope
   - All captured learnings organized by category

3. **Save to Multiple Locations**
   - `00_Engagement_Management/Lessons_Learned.md`
   - `.claude/skills/knowledge-management/` (for future reference)

4. **Offer Knowledge Base Save**
   - Ask if user wants to save to organizational KB
   - Use `/kb-save` if confirmed
   - Tag appropriately (service line, industry, engagement type)

## Reference

See `.claude/skills/engagement-setup/references/lessons-learned.md` for detailed implementation.
