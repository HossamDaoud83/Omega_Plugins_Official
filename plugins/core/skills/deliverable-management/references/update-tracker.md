# Update Tracker Command

## Purpose
Update deliverable status and engagement tracking information.

## Status Transitions
```
not_started → in_progress → in_review → completed
                    ↓
                 blocked → in_progress (when unblocked)
```

## Execution Steps

### 1. Identify Target
Specify deliverable ID to update (e.g., D001)

### 2. Validate Transition
Check transition is valid:
- not_started → in_progress (always allowed)
- in_progress → in_review (requires work output exists)
- in_review → completed (requires quality gate pass)
- any → blocked (requires blocker documentation)
- blocked → in_progress (requires blocker resolution)

### 3. Update Fields
In deliverables_tracker.json:
```json
{
  "status": "[new_status]",
  "completion_percentage": [0-100],
  "last_updated": "[ISO_TIMESTAMP]",
  "review_notes": "[notes if applicable]"
}
```

### 4. Update Workstream Status
Recalculate workstream status:
- not_started: all deliverables not_started
- in_progress: any deliverable in_progress/in_review
- completed: all deliverables completed

### 5. Update Engagement Totals
Recalculate:
- total_deliverables
- completed_deliverables

### 6. Check Milestone Impact
If deliverable is in milestone.deliverables_required:
- Update milestone status if all required complete
- Alert if milestone at risk

### 7. Log Decision
Add to decisions_log:
```json
{
  "date": "[ISO_TIMESTAMP]",
  "deliverable": "D0XX",
  "from_status": "[old]",
  "to_status": "[new]",
  "reason": "[reason for change]"
}
```

## Bulk Update Mode
For multiple deliverables:
```
/project:update-tracker D001:in_progress D002:blocked D003:completed
```

## Output
```
═══════════════════════════════════════════════════════════════
TRACKER UPDATED
═══════════════════════════════════════════════════════════════

DELIVERABLE: [D0XX] [Title]
Previous Status: [status]
New Status: [status]
Completion: [X]%

WORKSTREAM: [WS0X] [Name]
Status: [status]

ENGAGEMENT PROGRESS:
Completed: [X] / [Y] deliverables
Progress: [X]%

MILESTONE IMPACT:
[M0X] [Name]: [Status/Impact]
```
