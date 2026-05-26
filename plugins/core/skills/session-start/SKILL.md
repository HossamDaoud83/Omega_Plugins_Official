---
name: session-start
description: Start a new consulting session with full context loading
---

# Session Start

Start a new consulting session with full context loading.

## What This Does

1. Loads engagement context from all state files
2. Displays session initialization header
3. Reviews handoff notes from previous session
4. Suggests next steps based on priorities
5. Readies workspace for work

## Instructions for Claude

When this skill is invoked:

1. **Load Memory State**
   - Read `.claude/memory/session_state.json`
   - Increment session number
   - Load handoff notes from previous session

2. **Read Management Files** (in order):
   - `project.json`
   - `00_Engagement_Management/deliverables_tracker.json`
   - `00_Engagement_Management/engagement_progress.md`
   - `00_Engagement_Management/risk_register.md`
   - `00_Engagement_Management/stakeholder_map.md`

3. **Check Blockers**
   - List all items with `status: "blocked"`
   - Flag stale blockers (>3 days old)
   - Escalate critical blockers

4. **Check Milestones**
   - Calculate days to each pending milestone
   - Alert if any milestone <5 days away
   - Flag overdue milestones

5. **Calculate Health Status**
   - GREEN: No blockers, on schedule, all criteria met
   - YELLOW: Minor blockers OR milestone <5 days OR dependencies pending
   - RED: Critical blockers OR milestone overdue OR >2 deliverables blocked

6. **Recommend Priority Deliverable**
   Priority algorithm:
   - Blocked items with resolved dependencies
   - Critical priority items
   - Items on critical path to next milestone
   - Items with all dependencies complete
   - High priority items

7. **Output Session Header**

```
═══════════════════════════════════════════════════════════════
SESSION [N] INITIALIZED
Type: Execution
Engagement: [Name]
Client: [Client Name]
Service Line: [Code]
Phase: [Phase]
Focus: [Deliverable ID - Title]
Health: [Green | Yellow | Red]
Blockers: [Count] | Risks: [Count Open] | Days to Next Milestone: [N]
═══════════════════════════════════════════════════════════════

CONTEXT FROM PREVIOUS SESSION:
[Handoff notes]

RECOMMENDED PRIORITY:
[D0XX] [Title]
Reason: [Why this is priority]
Dependencies: [All met | Pending: X]
Acceptance Criteria: [X items]

ALERTS:
- [Any blockers, milestone warnings, or issues]
```

## Reference

See `.claude/skills/session-management/references/session-start.md` for detailed implementation.
