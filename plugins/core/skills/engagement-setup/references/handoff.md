# Handoff Command

## Purpose
Generate comprehensive handoff documentation for session, phase, team, or engagement transitions.

## Handoff Types

### 1. Session Handoff
Between work sessions (automatic with session-end).

**Content:**
- Current deliverable status
- Work completed this session
- Immediate next steps
- Blockers or dependencies
- Key context for continuation

### 2. Phase Handoff
Transition between engagement phases.

**Content:**
- Phase summary and outcomes
- All deliverables status
- Lessons learned
- Recommendations for next phase
- Updated risks and issues
- Stakeholder feedback

### 3. Team Handoff
Transition between team members.

**Content:**
- Full engagement context
- Client relationship notes
- Stakeholder dynamics
- Work in progress details
- All open items
- Key decisions and rationale
- File and folder structure

### 4. Engagement Handoff
Transition to client or closing engagement.

**Content:**
- Executive summary
- All deliverables index
- Recommendations status
- Open items and next steps
- Lessons learned
- Knowledge transfer notes

## Execution Steps

### 1. Select Handoff Type
Determine scope of handoff.

### 2. Gather Context
Compile from:
- All management files
- Session history
- Risk register
- Stakeholder notes
- Deliverable files

### 3. Generate Handoff Document

**Session Handoff Template:**
```markdown
# Session Handoff
**Session:** [N]
**Date:** [Date]
**Prepared For:** Next Agent Session

## Current State
**Deliverable:** [D0XX] [Title]
**Status:** [status]
**Completion:** [X]%

## Work Completed
- [Item 1]
- [Item 2]

## Key Decisions Made
| Decision | Rationale | Impact |
|----------|-----------|--------|
| [Decision] | [Why] | [Effect] |

## Immediate Next Steps
1. [Step 1]
2. [Step 2]

## Open Items
- [ ] [Item 1]
- [ ] [Item 2]

## Blockers
- [Blocker if any]

## Context Notes
[Important context for next session]
```

**Phase Handoff Template:**
```markdown
# Phase Handoff: [Phase Name]
**Engagement:** [Name]
**Date:** [Date]

## Phase Summary
[Overview of phase objectives and outcomes]

## Deliverables Status
| ID | Title | Status | Notes |
|----|-------|--------|-------|
| D0XX | [Title] | [Status] | [Notes] |

## Key Findings
1. [Finding 1]
2. [Finding 2]

## Recommendations Carried Forward
1. [Recommendation 1]
2. [Recommendation 2]

## Lessons Learned
- [Lesson 1]
- [Lesson 2]

## Risks & Issues Status
| ID | Title | Status | Carry Forward |
|----|-------|--------|---------------|
| RISK-XXX | [Title] | [Status] | [Yes/No] |

## Stakeholder Feedback
[Summary of client feedback received]

## Next Phase Setup
- [Preparation item 1]
- [Preparation item 2]
```

**Team Handoff Template:**
```markdown
# Team Member Handoff
**Engagement:** [Name]
**From:** [Name]
**To:** [Name]
**Date:** [Date]

## Engagement Overview
[Brief context about the engagement]

## Current Status
**Phase:** [Phase]
**Overall Progress:** [X]%
**Health:** [Green/Yellow/Red]

## Client Relationship
**Primary Contact:** [Name]
**Communication Style:** [Notes]
**Key Preferences:** [Notes]

## Stakeholder Dynamics
[Political landscape and relationship notes]

## Work In Progress
| Deliverable | Status | Priority | Notes |
|-------------|--------|----------|-------|
| [D0XX] | [Status] | [Priority] | [Context] |

## Critical Context
1. [Important item 1]
2. [Important item 2]

## Open Decisions
| Decision | Status | Owner | Due |
|----------|--------|-------|-----|
| [Decision] | [Pending/Escalated] | [Name] | [Date] |

## File Structure Guide
[Key folders and important files]

## Recommendations for Continuation
1. [Recommendation 1]
2. [Recommendation 2]
```

**Engagement Handoff Template:**
```markdown
# Engagement Closeout Handoff
**Engagement:** [Name]
**Client:** [Client]
**Date:** [Date]

## Executive Summary
[2-3 paragraph summary of engagement]

## Objectives Achievement
| Objective | Status | Notes |
|-----------|--------|-------|
| [Objective 1] | [Achieved/Partial/Not Met] | [Notes] |

## Deliverables Index
| ID | Title | Location | Status |
|----|-------|----------|--------|
| D001 | [Title] | [Path] | Completed |

## Key Recommendations
1. [Recommendation 1] - [Status: Implemented/Pending]
2. [Recommendation 2] - [Status: Implemented/Pending]

## Open Items for Client
| Item | Priority | Recommended Action |
|------|----------|-------------------|
| [Item] | [Priority] | [Action] |

## Lessons Learned
### What Worked Well
- [Item 1]

### Areas for Improvement
- [Item 1]

## Knowledge Transfer
[Notes on knowledge transferred to client]

## Follow-up Opportunities
- [Potential future engagement 1]
- [Potential future engagement 2]

## Contacts
[Key contacts for follow-up questions]
```

### 4. Save Handoff
- Session: Update session_state.json
- Phase/Team/Engagement: Save to appropriate location

## Output
```
═══════════════════════════════════════════════════════════════
HANDOFF GENERATED
═══════════════════════════════════════════════════════════════

Type: [Session | Phase | Team | Engagement]
Document: [Filename if applicable]
Location: [Path if applicable]

Key Points for Recipient:
1. [Critical item 1]
2. [Critical item 2]
3. [Critical item 3]
```
