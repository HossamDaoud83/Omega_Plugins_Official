# Select Deliverable Command

## Purpose
Select the next priority deliverable based on dependencies, criticality, and timeline.

## Priority Scoring Algorithm

### Score Calculation
```
Base Score = Priority Weight + Dependency Score + Timeline Score + Blocker Resolution Score

Priority Weight:
- Critical: 100
- High: 75
- Medium: 50
- Low: 25

Dependency Score:
- All dependencies complete: +50
- No dependencies: +40
- Some dependencies complete: +20
- No dependencies complete: 0

Timeline Score:
- On critical path to milestone <5 days: +50
- On critical path to milestone <10 days: +30
- On critical path to milestone <20 days: +15
- Not on critical path: 0

Blocker Resolution Score:
- Was blocked, now unblocked: +25
- Never blocked: 0
```

### Exclusions
Do not select:
- Status = "completed"
- Status = "blocked" (unresolved)
- Dependencies not met

## Execution Steps

### 1. Load Tracker
Read `deliverables_tracker.json`

### 2. Calculate Scores
For each eligible deliverable:
- Calculate priority weight
- Check dependency status
- Calculate timeline impact
- Check blocker history

### 3. Rank Deliverables
Sort by total score descending

### 4. Validate Top Choice
Confirm:
- All required inputs available
- No blocking dependencies
- Acceptance criteria clear

## Output
```
═══════════════════════════════════════════════════════════════
DELIVERABLE PRIORITY RANKING
═══════════════════════════════════════════════════════════════

RECOMMENDED: [D0XX] [Title]
Score: [XXX]
Priority: [Critical|High|Medium|Low]
Dependencies: [All met | List pending]
Acceptance Criteria: [X items]
Output Location: [Path]

RATIONALE:
[Why this is the top priority]

───────────────────────────────────────────────────────────────
ALTERNATIVE OPTIONS:

2. [D0YY] [Title] - Score: [XXX]
   [Brief reason]

3. [D0ZZ] [Title] - Score: [XXX]
   [Brief reason]

───────────────────────────────────────────────────────────────
BLOCKED ITEMS (Cannot Select):

- [D0AA] [Title] - Blocked by: [Reason]
- [D0BB] [Title] - Waiting for: [Dependency]
```
