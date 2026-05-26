---
name: update-tracker
description: Update deliverables tracker with progress and status changes
---

# Update Tracker

Manually update deliverables tracker with status, progress, or notes.

## What This Does

1. Reads current deliverables tracker
2. Asks user what to update
3. Validates changes
4. Updates tracker JSON
5. Confirms update complete

## Instructions for Claude

When this skill is invoked:

1. **Read Current Tracker**
   - Load `00_Engagement_Management/deliverables_tracker.json`
   - Display current deliverable statuses

2. **Ask What to Update**
   Options:
   - Deliverable status
   - Completion percentage
   - Review notes
   - Blocker status
   - Dependencies
   - Target date

3. **Validate Changes**
   - Status transitions valid (not_started → in_progress → in_review → completed)
   - Completion % matches status
   - Dependencies exist
   - Dates are valid

4. **Update Tracker**
   - Make requested changes
   - Update `last_updated` timestamp
   - Save file

5. **Confirm Update**
   - Show before/after comparison
   - Confirm changes saved

## Deliverable Statuses

- `not_started` - Not yet begun
- `in_progress` - Currently working
- `in_review` - Quality check pending
- `completed` - All criteria met
- `blocked` - Cannot proceed (dependencies)

## Reference

See `.claude/skills/deliverable-management/references/update-tracker.md` for detailed implementation.
