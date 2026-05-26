---
name: peer-review
description: Manage peer review workflow for deliverables
---

# Peer Review

Manage peer review workflow for deliverables.

## What This Does

1. Initiates peer review for deliverable
2. Tracks review status
3. Captures reviewer feedback
4. Manages revision cycles
5. Closes review when complete

## Instructions for Claude

When this skill is invoked:

1. **Initiate Review**
   - Get current deliverable from session state
   - Ask for reviewer name/role
   - Create review tracking entry

2. **Manage Review Workflow**

   **States:**
   - `pending_review` - Waiting for reviewer
   - `in_review` - Reviewer is reviewing
   - `revisions_requested` - Changes needed
   - `revisions_complete` - Changes made, re-review needed
   - `approved` - Review complete, approved

3. **Capture Feedback**

   Document in review log:
   - Reviewer name and role
   - Review date
   - Feedback provided
   - Required changes
   - Optional suggestions
   - Approval status

4. **Track Revisions**
   - List changes requested
   - Document changes made
   - Track revision iterations
   - Update deliverable status in tracker

5. **Close Review**
   - Confirm all feedback addressed
   - Get final approval
   - Update deliverable to `in_review` → `completed`
   - Archive review documentation

6. **Save Review Documentation**
   - Create review log in deliverable folder
   - Update deliverables tracker with review notes
   - Document in engagement progress

## Peer Review Quality Criteria

- Technical accuracy
- Completeness vs scope
- Client-ready formatting
- Omega standards compliance
- Clarity and readability
- Supporting evidence
- Recommendations actionability

## Reference

See `.claude/skills/quality-management/references/peer-review.md` for detailed implementation.
