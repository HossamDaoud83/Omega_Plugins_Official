# Client Communication Command

## Purpose
Generate professional client communications from templates.

## Communication Types

### 1. Status Report
Weekly/bi-weekly engagement status update.

**Template:**
```markdown
# Status Report: [Engagement Name]
**Period:** [Start Date] - [End Date]
**Prepared By:** Omega Team

## Executive Summary
[2-3 sentence overview of progress and key highlights]

## Progress Summary
| Metric | This Period | Cumulative |
|--------|-------------|------------|
| Deliverables Completed | X | Y |
| Milestones Achieved | X | Y |
| Issues Resolved | X | Y |

## Key Accomplishments
- [Accomplishment 1]
- [Accomplishment 2]

## Upcoming Activities
- [Activity 1] - Target: [Date]
- [Activity 2] - Target: [Date]

## Risks & Issues
| Item | Status | Impact | Mitigation |
|------|--------|--------|------------|
| [Item] | [Status] | [Impact] | [Action] |

## Decisions Required
- [Decision needed] - Required by: [Date]

## Next Steps
1. [Next step 1]
2. [Next step 2]
```

### 2. Deliverable Submission
Cover memo for deliverable submission.

**Template:**
```markdown
# Deliverable Submission: [Deliverable Title]
**Date:** [Date]
**To:** [Client Contact]
**From:** Omega Team

## Summary
[Brief description of what is being delivered]

## Attached Documents
1. [Document 1] - [Description]
2. [Document 2] - [Description]

## Key Findings/Recommendations
- [Finding/Recommendation 1]
- [Finding/Recommendation 2]

## Review Request
Please review by [Date]. We will schedule a walkthrough session upon your confirmation.

## Questions/Discussion Points
- [Point 1]
- [Point 2]
```

### 3. Meeting Request
Request for client meeting.

**Template:**
```markdown
# Meeting Request: [Topic]
**Date:** [Proposed Date]
**Duration:** [Duration]
**Location:** [Location/Virtual Link]

## Purpose
[Clear statement of meeting objective]

## Agenda
1. [Item 1] - [Duration]
2. [Item 2] - [Duration]
3. [Item 3] - [Duration]

## Required Attendees
- [Name, Role]
- [Name, Role]

## Pre-Work
- [Any materials to review]

## Expected Outcomes
- [Outcome 1]
- [Outcome 2]
```

### 4. Escalation Notice
Formal escalation communication.

**Template:**
```markdown
# Escalation Notice
**Date:** [Date]
**Priority:** [Critical | High]
**To:** [Steering Committee / Sponsor]

## Issue Summary
[Clear, concise description of the issue]

## Impact
- **Timeline:** [Impact on schedule]
- **Scope:** [Impact on deliverables]
- **Budget:** [Cost implications]

## Root Cause
[What caused this issue]

## Options
| Option | Pros | Cons | Recommendation |
|--------|------|------|----------------|
| [Option 1] | [Pros] | [Cons] | |
| [Option 2] | [Pros] | [Cons] | Recommended |

## Decision Required
[Specific decision needed]
**Required By:** [Date]

## Recommendation
[Omega recommendation with rationale]
```

### 5. Weekly Report Email
Brief email format for routine updates.

**Template:**
```
Subject: [Engagement Name] - Weekly Update [Date]

Hi [Name],

Quick update on this week's progress:

COMPLETED:
• [Item 1]
• [Item 2]

IN PROGRESS:
• [Item 1] - [X]% complete
• [Item 2] - [X]% complete

NEXT WEEK:
• [Planned activity 1]
• [Planned activity 2]

ATTENTION NEEDED:
• [Any items requiring client input]

Let me know if you have any questions.

Best regards,
[Omega Team]
```

## Execution Steps

### 1. Select Communication Type
Choose from available templates.

### 2. Gather Information
Pull relevant data from:
- deliverables_tracker.json
- engagement_progress.md
- risk_register.md
- stakeholder_map.md

### 3. Generate Draft
Apply template with engagement data.

### 4. Review and Refine
Check for:
- Accuracy of information
- Appropriate tone
- Complete information
- Action items clear

### 5. Save to Communications Folder
Save to `06_Client_Communications/` with appropriate subfolder:
- status_reports/
- meeting_notes/
- presentations/

## Output
```
═══════════════════════════════════════════════════════════════
COMMUNICATION GENERATED
═══════════════════════════════════════════════════════════════

Type: [Type]
File: [Filename]
Location: [Path]

REVIEW CHECKLIST:
[ ] Information accurate
[ ] Tone appropriate
[ ] Actions clear
[ ] Recipients correct

Ready to send after review.
```
