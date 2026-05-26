# Peer Review Command

Manages the peer review workflow for deliverables.

## Trigger
`/project:peer-review` or when asked to "submit for review" or "review deliverable"

---

## Review Workflow States

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        DELIVERABLE REVIEW WORKFLOW                          │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  ┌──────────┐    ┌───────────┐    ┌──────────┐    ┌──────────────────────┐  │
│  │ DRAFT    │───▶│ IN_REVIEW │───▶│ APPROVED │───▶│ DELIVERED            │  │
│  └──────────┘    └───────────┘    └──────────┘    └──────────────────────┘  │
│       │               │                                                     │
│       │               ▼                                                     │
│       │         ┌───────────┐                                               │
│       └─────────│ REVISION  │                                               │
│                 └───────────┘                                               │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Actions

### Submit for Review
```
/project:peer-review action=submit deliverable=[ID]
```

**Steps:**
1. Verify deliverable exists and is in `draft` or `in_progress` status
2. Run quality-gate checks automatically
3. Update status to `in_review`
4. Set `review_requested_date`
5. Assign reviewer (if specified)
6. Generate review checklist
7. Notify reviewer (if Slack configured)

**Tracker Update:**
```json
{
  "id": "D001",
  "status": "in_review",
  "review": {
    "requested_date": "2024-12-22",
    "requested_by": "[Author]",
    "reviewer": "[Reviewer Name]",
    "review_type": "peer|manager|client",
    "quality_score_pre": 75,
    "checklist_complete": false,
    "comments": []
  }
}
```

---

### Complete Review
```
/project:peer-review action=complete deliverable=[ID] decision=[approve|revise]
```

**If APPROVED:**
1. Update status to `approved`
2. Set `review_completed_date`
3. Record final quality score
4. Move to `05_Deliverables_Final/`
5. Update tracker with approval

**If REVISION REQUIRED:**
1. Update status to `revision_required`
2. Document required changes
3. Notify author
4. Track revision cycle count

**Tracker Update (Approved):**
```json
{
  "review": {
    "completed_date": "2024-12-23",
    "decision": "approved",
    "quality_score_final": 92,
    "reviewer_comments": "Strong analysis, clear recommendations",
    "revision_cycles": 0
  }
}
```

---

### Request Revision
```
/project:peer-review action=revise deliverable=[ID] comments="[Feedback]"
```

**Steps:**
1. Update status to `revision_required`
2. Add revision comments
3. Increment revision cycle counter
4. Notify author
5. Reset review checklist

---

## Review Checklist

### Standard Review Checklist
```markdown
## Deliverable Review Checklist

**Deliverable:** [ID] - [Title]
**Author:** [Name]
**Reviewer:** [Name]
**Review Date:** [Date]

### Content Quality
- [ ] Answers the core question/objective
- [ ] Analysis is complete and accurate
- [ ] Recommendations are actionable
- [ ] Evidence supports conclusions
- [ ] No factual errors identified

### Structure & Format
- [ ] Executive summary is compelling
- [ ] Pyramid principle applied (answer first)
- [ ] Logical flow throughout
- [ ] Appropriate level of detail
- [ ] Professional formatting

### Client Readiness
- [ ] Client-appropriate language
- [ ] No internal/confidential references
- [ ] Brand guidelines followed
- [ ] Spell-check completed
- [ ] All placeholders replaced

### Technical Accuracy
- [ ] Data sources cited
- [ ] Calculations verified
- [ ] Methodology documented
- [ ] Assumptions stated

### Overall Assessment
- [ ] Ready for client delivery
- [ ] Minor revisions needed
- [ ] Major revisions required

**Quality Score:** [0-100]

**Comments:**
[Detailed feedback]

**Decision:** [ ] Approved  [ ] Revisions Required
```

---

## Review Types

| Type | Reviewer | When Used |
|------|----------|-----------|
| Self-Review | Author | Before peer review |
| Peer Review | Team member | Standard deliverables |
| Manager Review | Engagement lead | Key deliverables |
| Client Review | Internal client contact | Before external delivery |
| Quality Review | QA specialist | High-stakes deliverables |

---

## Notification Templates

### Slack: Review Request
```
📋 *Review Request*

*Deliverable:* [Title]
*Author:* [Name]
*Due Date:* [Date]

Please review and provide feedback.
Link: [Path to deliverable]
```

### Slack: Review Complete
```
✅ *Review Complete*

*Deliverable:* [Title]
*Decision:* [Approved / Revisions Required]
*Quality Score:* [XX]/100

[Comments summary]
```

### Slack: Revision Required
```
🔄 *Revision Required*

*Deliverable:* [Title]
*Feedback:* [Summary]

Please address comments and resubmit.
```

---

## Metrics Tracked

| Metric | Description |
|--------|-------------|
| Review Cycle Time | Time from submission to decision |
| Revision Rate | % requiring revisions |
| Average Revisions | Cycles before approval |
| Quality Score Trend | Pre vs post review scores |
| Reviewer Workload | Reviews per reviewer |

---

## Integration with Tracker

Updates to `deliverables_tracker.json`:

```json
{
  "deliverables": [
    {
      "id": "D001",
      "title": "Current State Assessment",
      "status": "in_review",
      "progress": 100,
      "review": {
        "status": "pending",
        "requested_date": "2024-12-22",
        "reviewer": "Jane Smith",
        "review_type": "peer",
        "quality_score_pre": 78,
        "revision_count": 0
      }
    }
  ]
}
```
