---
type: rule
scope: omega-core
priority: critical
---

# Omega Protected Fields

These fields require client approval to modify. The `quality-gate.js` hook flags unauthorized changes.

## In `project.json`

- `client.name`
- `client.industry`
- `engagement.name`
- `engagement.code`
- `engagement.service_line`
- `timeline.start_date`
- `timeline.end_date`
- `budget.total`
- `budget.type`

## In `00_Engagement_Management/deliverables_tracker.json`

For each deliverable:
- `id`
- `title`
- `description`
- `acceptance_criteria` (array)
- `due_date`

For each milestone:
- `id`
- `name`
- `target_date`
- `payment_percentage`
- `payment_amount`
- `deliverables_required`

## Procedure for an authorized change

1. Document the change request in `04 Decisions Log` (Obsidian project tracking)
2. Obtain client written approval (email, signed change request)
3. Update the field
4. Append to `engagement_progress.md` with `Decision:` marker
5. Re-run `/omega:verify-quality` to clear the flag

## Engagement scope drift detection

Changes to `engagement.scope`, `engagement.deliverables_count`, or addition of new milestones without retiring old ones are treated as scope drift and surfaced in the next `/omega:session-start` output.
