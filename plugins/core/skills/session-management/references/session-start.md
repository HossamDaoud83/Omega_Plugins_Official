# Session Start Command

## Purpose
Initialize an execution session with full context loading and priority recommendation.

## Trigger
Every session after engagement setup.

## Execution Steps

### 1. Load Memory State
Read `session_state.json` (project root):
- Session number (increment)
- Last deliverable worked
- Active blockers
- Handoff notes from previous session

### 2. Read Management Files
In order:
1. `project.json`
2. `00_Engagement_Management/deliverables_tracker.json`
3. `00_Engagement_Management/engagement_progress.md`
4. `00_Engagement_Management/risk_register.md`
5. `00_Engagement_Management/stakeholder_map.md`

### 3. Check Blockers
- List all items with `status: "blocked"`
- Flag stale blockers (>3 days old)
- Escalate critical blockers

### 4. Check Milestones
- Calculate days to each pending milestone
- Alert if any milestone <5 days away
- Flag overdue milestones

### 5. Calculate Health Status
```
GREEN: No blockers, on schedule, all criteria met
YELLOW: Minor blockers OR milestone <5 days OR dependencies pending
RED: Critical blockers OR milestone overdue OR >2 deliverables blocked
```

### 6. Recommend Priority Deliverable
Priority algorithm:
1. Blocked items with resolved dependencies
2. Critical priority items
3. Items on critical path to next milestone
4. Items with all dependencies complete
5. High priority items

### 7. Load Service Line Context
Based on engagement service_line, reference:
- Service line subagent
- Relevant frameworks
- Quality standards

## Output
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

## Validation
- All management files readable
- Memory state loaded
- Service line subagent available
