---
name: select-deliverable
description: Select next priority deliverable for current session
---

# Select Deliverable

Choose the next deliverable to work on based on priorities and dependencies.

## What This Does

1. Reads deliverables tracker
2. Analyzes priorities, dependencies, and milestones
3. Recommends highest priority deliverable
4. Updates session state with selected deliverable

## Instructions for Claude

When this skill is invoked:

1. **Read Deliverables Tracker**
   - Load `00_Engagement_Management/deliverables_tracker.json`

2. **Filter by Status**
   - Priority 1: `not_started` with dependencies met
   - Priority 2: `in_progress`
   - Priority 3: `blocked` (show blockers)

3. **Consider Factors**
   - Milestone deadlines
   - Dependencies (upstream/downstream)
   - Current phase alignment
   - Team capacity
   - Critical path items

4. **Display Options**
   Show deliverables in priority order with:
   - ID and title
   - Status
   - Priority level
   - Dependencies status
   - Days to related milestone
   - Acceptance criteria count

5. **Recommend & Select**
   - Highlight top recommendation with rationale
   - Let user choose or accept recommendation
   - Update `.claude/memory/session_state.json` with selection

## Reference

See `.claude/skills/deliverable-management/references/select-deliverable.md` for detailed implementation.
