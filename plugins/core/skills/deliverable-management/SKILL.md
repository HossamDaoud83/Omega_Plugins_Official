---
name: deliverable-management
description: Manage deliverable lifecycle, status updates, and completion tracking
---

# Deliverable Management Skill

## Description

Manage deliverables - select, verify quality, update tracker.

## Available Commands

### Select Next Deliverable
```
/select-deliverable
```

### Verify Quality
```
/verify-quality
```

### Update Tracker
```
/update-tracker
```

No `/project:` prefix needed!

---

## Instructions for Claude

### When user invokes `/select-deliverable`

See [references/select-deliverable.md](references/select-deliverable.md) for detailed instructions.

1. Read `00_Engagement_Management/deliverables_tracker.json`
2. Filter deliverables by status:
   - Priority 1: `not_started` with dependencies met
   - Priority 2: `in_progress`
   - Priority 3: `blocked` (show blockers)
3. Display options in priority order
4. Consider:
   - Milestone deadlines
   - Dependencies
   - Current phase
   - Team capacity
5. Let user choose or recommend highest priority

### When user invokes `/verify-quality`

See [references/verify-quality.md](references/verify-quality.md) for detailed instructions.

1. Read current deliverable from `.claude/memory/session_state.json`
2. Load deliverable details from tracker
3. Check all acceptance criteria:
   - [ ] All criteria met
   - [ ] Outputs in correct location
   - [ ] Client-ready format
   - [ ] Omega branding applied
   - [ ] Documentation complete
4. Run quality checklist for service line (MAR)
5. Calculate quality score (0-100)
6. Provide pass/fail recommendation
7. If fail, list gaps to address

### When user invokes `/update-tracker`

See [references/update-tracker.md](references/update-tracker.md) for detailed instructions.

1. Read `00_Engagement_Management/deliverables_tracker.json`
2. Ask what to update:
   - Deliverable status
   - Completion percentage
   - Review notes
   - Blocker status
3. Validate changes
4. Update tracker JSON
5. Save file
6. Confirm update complete

---

## Deliverable Statuses

- `not_started` - Not yet begun
- `in_progress` - Currently working
- `in_review` - Quality check pending
- `completed` - All criteria met
- `blocked` - Cannot proceed (dependencies)

## Quality Score Ranges

- **90-100**: Excellent - Exceeds expectations
- **80-89**: Good - Meets all criteria
- **70-79**: Acceptable - Minor improvements needed
- **Below 70**: Needs work - Significant gaps

---

**Engagement:** ENG-MAR-2026-001
**Client:** Red Sea Marine for Sea Transport
