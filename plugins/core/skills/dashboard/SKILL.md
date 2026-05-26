---
name: dashboard
description: Display comprehensive CLI dashboard showing project status, budget, risks, blockers, deliverables, and timeline
---

# Dashboard

Display comprehensive CLI dashboard showing project status, budget, risks, blockers, deliverables, and timeline.

## What This Does

1. Aggregates data from all project management files
2. Displays visual ASCII dashboard with progress bars
3. Shows health indicators, risk counts, and blockers
4. Calculates days remaining for milestones and deadlines
5. Provides at-a-glance project status

## Instructions for Claude

When this skill is invoked:

### 1. Load Data Sources

Read these files in order:
- `session_state.json` - Session info, blockers, health
- `project.json` - Project config, budget, timeline
- `00_Engagement_Management/deliverables_tracker.json` - Deliverable status
- `00_Engagement_Management/risk_register.md` - Risk counts
- `00_Engagement_Management/engagement_progress.md` - Progress history

### 2. Calculate Metrics

**Health Status:**
```
GREEN  = No blockers + on schedule + <3 high risks + no overdue milestones
YELLOW = Minor blockers OR milestone <5 days OR 3-5 high risks OR data gaps
RED    = Critical blockers OR milestone overdue OR >5 high risks OR project at risk
```

**Days Remaining:**
```
Days Remaining = Target Date - Current Date
- Positive: "X days"
- Zero: "TODAY"
- Negative: "X days OVERDUE"
- Unknown: "TBD" or "BLOCKED"
```

**Progress Bar (20 chars wide):**
```
████████████░░░░░░░░  60%
```

### 3. Output Dashboard

Display ASCII dashboard with these sections:

```
╔══════════════════════════════════════════════════════════════════════════════╗
║  [PROJECT_CODE] - [PROJECT_NAME]                                             ║
║  Session: [N] | Phase: [PHASE] | Health: [●] [STATUS]                       ║
║  Client: [CLIENT_NAME]                                                       ║
╠══════════════════════════════════════════════════════════════════════════════╣
║  BUDGET STATUS                                                               ║
║  Total: $[X]  |  Consumed: $[Y] [████░░░░] [Z]%  |  Remaining: $[R]         ║
║  Burn Rate: $[N]/day                                                         ║
╠══════════════════════════════════════════════════════════════════════════════╣
║  DELIVERABLES                                                                ║
║  ✅ Completed:   [N] ([X]%)  [list...]                                       ║
║  🔄 In Progress: [N] ([X]%)  [list...]                                       ║
║  ⏳ Pending:     [N] ([X]%)  [list...]                                       ║
║  🚫 Blocked:     [N] ([X]%)  [list...]                                       ║
║  Overall: [████████████░░░░░░░░] [X]%                                        ║
╠══════════════════════════════════════════════════════════════════════════════╣
║  RISK STATUS                                                                 ║
║  🔴 Critical: [N]  🟠 High: [N]  🟡 Medium: [N]  🟢 Low: [N]                 ║
║  Total Open: [N] | Risk Score: [X] | Trend: [↑/↓/→]                         ║
╠══════════════════════════════════════════════════════════════════════════════╣
║  BLOCKERS                                                                    ║
║  [BLK-001] [Description] - [N] days | Impact: [HIGH/MED/LOW]                ║
║  [BLK-002] [Description] - [N] days | Impact: [HIGH/MED/LOW]                ║
╠══════════════════════════════════════════════════════════════════════════════╣
║  CURRENT DELIVERABLE                                                         ║
║  [D0XX] [Title]                                                              ║
║  Status: [STATUS] | Priority: [PRIORITY]                                     ║
║  Progress: [████████░░░░░░░░░░░░] [X]%                                       ║
║  Acceptance Criteria: [X/Y] met | Days Remaining: [N]                        ║
╠══════════════════════════════════════════════════════════════════════════════╣
║  MILESTONES                                                                  ║
║  [M1] [Name]     [████████████████████] 100%  ✅ Complete                    ║
║  [M2] [Name]     [████████░░░░░░░░░░░░]  40%  🟡 5 days                      ║
║  [M3] [Name]     [░░░░░░░░░░░░░░░░░░░░]   0%  ⏳ 15 days                     ║
╠══════════════════════════════════════════════════════════════════════════════╣
║  PROJECT TIMELINE                                                            ║
║  Start: [DATE] | Days Elapsed: [N] | Bid Deadline: [DATE] ([N] days)        ║
║  Project Value: $[X] | Key Data: [STATUS]                                    ║
╠══════════════════════════════════════════════════════════════════════════════╣
║  RECENT UPDATES                                                              ║
║  • [Document/change description]                                             ║
║  • [Document/change description]                                             ║
╠══════════════════════════════════════════════════════════════════════════════╣
║  Last Updated: [TIMESTAMP] | Next Milestone: [N] days | Bid: [N] days       ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

### 4. Section Details

**Header:**
- Project name and code
- Session number, current phase
- Health indicator with color emoji
- Client name

**Budget Status:**
- Total budget, consumed with progress bar
- Remaining amount, burn rate

**Deliverables Progress:**
- Count and percentage for each status
- List deliverable IDs
- Overall progress bar

**Risk Status:**
- Count by severity (Critical/High/Medium/Low)
- Total open, weighted risk score
- Trend indicator

**Blockers:**
- Active blocker ID and description
- Days since identified
- Impact level

**Current Deliverable:**
- ID, title, status, priority
- Progress bar
- Acceptance criteria progress
- Days to target

**Milestones:**
- All milestones with progress bars
- Days remaining
- Status (On Track/At Risk/Blocked/Overdue)

**Timeline:**
- Start date, days elapsed
- Bid deadline with countdown
- Project value

**Recent Updates:**
- New documents received
- Key changes since last session

**Footer:**
- Last updated timestamp
- Countdown to next milestone
- Countdown to bid deadline

## Reference

Use box drawing characters: ╔═╗║╚╝┌─┐│└┘
Use status emojis: 🔴🟠🟡🟢 ✅ 🔄 ⏳ 🚫
Progress bars: █ (filled) ░ (empty)
