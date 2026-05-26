# Auto Status Report Command

Generate a weekly status report automatically from engagement data.

## Trigger
`/project:auto-status-report` or when asked to "generate status report"

## Data Sources

Pull data from:
1. `project.json` - Engagement metadata, milestones
2. `00_Engagement_Management/deliverables_tracker.json` - Deliverable status
3. `00_Engagement_Management/engagement_progress.md` - Recent session notes
4. `00_Engagement_Management/risk_register.md` - Active risks and issues
5. `session_state.json` (project root) - Context and decisions

---

## Execution Steps

### Step 1: Read Engagement Data
```
Read project.json:
- Extract client_name, engagement_name
- Get current phase
- Get milestone dates
- Calculate overall health status
```

### Step 2: Compile Deliverable Status
```
Read deliverables_tracker.json:
- List all deliverables with status
- Calculate % complete for each
- Identify overdue items
- Flag items due in next 7 days
```

### Step 3: Extract Recent Accomplishments
```
Read engagement_progress.md:
- Find entries from last 7 days
- Extract accomplishments and outcomes
- Summarize key activities
```

### Step 4: Compile Risks and Issues
```
Read risk_register.md:
- List open/active risks
- List unresolved issues
- Identify any new items from past week
```

### Step 5: Generate Report

Use this format:

```markdown
# Weekly Status Report
**Engagement:** [engagement_name]
**Client:** [client_name]
**Week of:** [current_date]
**Prepared by:** [consultant]

---

## Executive Summary

[3-sentence summary: Overall status, key accomplishment, attention items]

---

## Overall Status: [GREEN/YELLOW/RED]

| Dimension | Status | Commentary |
|-----------|--------|------------|
| Schedule | [G/Y/R] | [Auto-generated from milestone dates] |
| Scope | [G/Y/R] | [From recent notes] |
| Budget | [G/Y/R] | [If available] |
| Quality | [G/Y/R] | [From recent reviews] |

---

## Deliverable Progress

| Deliverable | Due Date | Status | % Complete |
|-------------|----------|--------|------------|
| [From tracker] | [date] | [status] | [progress]% |

**Overdue:** [List any overdue items]
**Due Next Week:** [List items due in 7 days]

---

## Key Accomplishments This Week

[Auto-extracted from engagement_progress.md - last 7 days]

- [Accomplishment 1]
- [Accomplishment 2]
- [Accomplishment 3]

---

## Planned Activities Next Week

[Based on deliverable dates and recent context]

- [Activity 1] - [Owner if known]
- [Activity 2]
- [Activity 3]

---

## Risks and Issues

### Open Issues
| ID | Description | Impact | Resolution |
|----|-------------|--------|------------|
| [From risk_register] | | | |

### Active Risks
| ID | Description | Likelihood | Impact | Mitigation |
|----|-------------|------------|--------|------------|
| [From risk_register] | | | | |

---

## Decisions Required

[Any pending decisions from session notes]

---

## Next Steps

1. [Next step 1]
2. [Next step 2]
3. [Next step 3]

---

*Report generated: [timestamp]*
```

---

## Output Location

Save to: `06_Client_Communications/status_reports/status_report_[YYYY-MM-DD].md`

---

## Automation Logic

### Status Calculation Rules

**Schedule Status:**
- GREEN: All milestones on track
- YELLOW: Any milestone < 7 days from due with < 90% complete
- RED: Any milestone overdue

**Deliverable Status:**
- GREEN: All on track or complete
- YELLOW: Any at risk
- RED: Any overdue or blocked

**Overall Status:**
- RED if any dimension is RED
- YELLOW if any dimension is YELLOW
- GREEN if all GREEN

---

## Example Usage

```
User: Generate a status report for this week

Claude: 
1. Reads project.json for engagement details
2. Reads deliverables_tracker.json for status
3. Reads engagement_progress.md for recent activities
4. Reads risk_register.md for risks/issues
5. Generates formatted report
6. Saves to status_reports folder
7. Presents report to user
```

---

## Notes

- Always verify data freshness before generating
- Highlight any data gaps in the report
- Offer to update tracker if data seems stale
- Include timestamp for audit trail
