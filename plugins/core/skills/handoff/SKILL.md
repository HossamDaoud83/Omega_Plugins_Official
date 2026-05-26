---
name: handoff
description: Generate comprehensive handoff documentation for engagement transition
---

# Handoff

Generate comprehensive handoff documentation for next consultant.

## What This Does

1. Gathers current engagement state
2. Summarizes work completed to date
3. Documents pending deliverables
4. Lists open risks and issues
5. Provides clear next steps
6. Creates handoff document

## Instructions for Claude

When this skill is invoked:

1. **Gather Engagement State**
   - Load all management files
   - Load session history
   - Load current deliverable status
   - Load risks and issues
   - Load stakeholder information

2. **Generate Handoff Document**

   **Section 1: Engagement Overview**
   - Client and engagement reference
   - Service line and industry
   - Start date, current date, end date
   - Budget status (spent vs remaining)
   - Overall health (Green/Yellow/Red)

   **Section 2: Work Completed to Date**
   - Deliverables completed (list with dates)
   - Key decisions made
   - Client meetings held
   - Documents delivered

   **Section 3: Current Status**
   - Deliverables in progress (with % complete)
   - Current phase
   - Last session summary
   - Files and locations

   **Section 4: Pending Deliverables**
   - Not started deliverables
   - Dependencies and blockers
   - Priority order
   - Target dates

   **Section 5: Open Risks & Issues**
   - Critical/High risks
   - Mitigation actions in progress
   - Issues requiring attention
   - Escalations needed

   **Section 6: Stakeholder Context**
   - Key contacts
   - Communication preferences
   - Recent interactions
   - Relationship notes

   **Section 7: Next Steps for Incoming Consultant**
   - Immediate priorities (next session)
   - Upcoming milestones
   - Decisions needed from client
   - Recommended approach

   **Section 8: Context & Notes**
   - Important background
   - Client preferences
   - Lessons learned so far
   - Watch-outs

3. **Save Handoff Document**
   - Save to `00_Engagement_Management/`
   - Filename: `YYYY-MM-DD_Handoff_Documentation.md`
   - Also generate DOCX version

## Reference

See `.claude/skills/engagement-setup/references/handoff.md` for detailed implementation.
