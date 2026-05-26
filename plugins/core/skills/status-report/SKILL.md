---
name: status-report
description: Auto-generate weekly engagement status report
---

# Status Report

Generate weekly status report for client.

## What This Does

1. Gathers data from all engagement tracking files
2. Generates comprehensive weekly status report
3. Formats as markdown with optional DOCX/PDF
4. Saves to client communications folder

## Instructions for Claude

When this skill is invoked:

1. **Gather Data From**
   - `.claude/memory/session_state.json`
   - `00_Engagement_Management/deliverables_tracker.json`
   - `00_Engagement_Management/risk_register.md`
   - `00_Engagement_Management/engagement_progress.md`
   - `project.json` (milestones, budget)

2. **Generate Report Sections**

   **Executive Summary** (2-3 sentences)
   - Overall status (Green/Yellow/Red)
   - Key accomplishments this week
   - Critical items needing attention

   **Progress This Week**
   - Deliverables completed
   - Deliverables advanced
   - Key decisions made
   - Sessions completed

   **Deliverables Status**
   Table with:
   - Deliverable ID and Title
   - Status
   - % Complete
   - Target Date
   - Health (On Track / At Risk / Blocked)

   **Upcoming Milestones** (next 2 weeks)
   - Milestone name
   - Target date
   - Days remaining
   - Dependencies

   **Risks & Issues**
   - Open risks (Critical/High priority)
   - Open issues
   - Mitigation actions in progress

   **Action Items for Client**
   - Items requiring client input/approval
   - Decisions needed
   - Resources requested

   **Next Week Plan**
   - Deliverables to be worked
   - Expected completions
   - Meetings/reviews scheduled

3. **Format Report**
   - Use markdown formatting
   - Include Omega header
   - Date range covered
   - Engagement reference number

4. **Save Report**
   - Save to `06_Client_Communications/`
   - Filename: `YYYY-MM-DD_Weekly_Status_Report.md`

5. **Offer Document Generation**
   - Ask if user wants DOCX/PDF version
   - Generate with Omega branding if requested

## Reference

See `.claude/skills/risk-communication/references/status-report.md` for detailed implementation.
