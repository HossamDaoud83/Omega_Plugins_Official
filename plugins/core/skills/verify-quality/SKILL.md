---
name: verify-quality
description: Run quality gate verification before marking deliverable complete
---

# Verify Quality

Run quality gate verification on current deliverable before marking complete.

## What This Does

1. Loads current deliverable details
2. Checks all acceptance criteria
3. Runs service-line specific quality checklist
4. Calculates quality score (0-100)
5. Provides pass/fail recommendation with gaps

## Instructions for Claude

When this skill is invoked:

1. **Load Deliverable Context**
   - Read current deliverable from `.claude/memory/session_state.json`
   - Load deliverable details from `00_Engagement_Management/deliverables_tracker.json`

2. **Check Acceptance Criteria**
   - [ ] All acceptance criteria met
   - [ ] Outputs in correct folder location
   - [ ] Client-ready format (no drafts)
   - [ ] Omega branding applied (if applicable)
   - [ ] Documentation complete
   - [ ] Peer review completed (if required)

3. **Service Line Quality Check (MAR)**
   - [ ] IMO/MARPOL compliance verified
   - [ ] Maritime industry standards met
   - [ ] Port operations specifics addressed
   - [ ] Safety requirements validated
   - [ ] Feasibility analysis complete

4. **Calculate Quality Score (0-100)**
   - Acceptance criteria met: 40 points
   - Documentation quality: 20 points
   - Omega standards compliance: 20 points
   - Client-ready format: 10 points
   - Timeliness: 10 points

5. **Provide Recommendation**
   - **90-100**: Excellent - Exceeds expectations
   - **80-89**: Good - Meets all criteria, can mark complete
   - **70-79**: Acceptable - Minor improvements recommended
   - **Below 70**: Needs work - Must address gaps before completion

6. **Output Results**
   Show score breakdown, pass/fail status, and specific gaps to address if failing.

## Reference

See `.claude/skills/deliverable-management/references/verify-quality.md` for detailed implementation.
