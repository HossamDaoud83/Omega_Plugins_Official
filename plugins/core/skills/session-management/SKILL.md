---
name: session-management
description: Manage session lifecycle, state persistence, and continuity
---

# Session Management Skill

## Description

Manage consulting session lifecycle - start sessions, end sessions with proper documentation.

## Available Commands

### Start Session
```
/session-start
```

### End Session
```
/session-end
```

No `/project:` prefix needed!

## What This Does

1. Updates `.claude/memory/session_state.json`
2. Appends to `00_Engagement_Management/engagement_progress.md`
3. Updates `00_Engagement_Management/deliverables_tracker.json`
4. Generates handoff notes for next session
5. Creates git commit with proper format
6. Pushes to GitHub

## Instructions for Claude

### When user invokes `/session-start`

See [references/session-start.md](references/session-start.md) for detailed instructions.

1. Load engagement context from all state files
2. Display session initialization header
3. Review handoff notes from previous session
4. Suggest next steps based on priorities
5. Ready to begin work

### When user invokes `/session-end`

See [references/session-end.md](references/session-end.md) for detailed instructions.

### 1. Verify Work Saved

Check all files are in correct locations:
- Work products in phase folders
- Final deliverables in `05_Deliverables_Final/`
- Communications in `06_Client_Communications/`

### 2. Update Deliverables Tracker

Read and update `00_Engagement_Management/deliverables_tracker.json`:
- Update `status`
- Update `completion_percentage`
- Update `last_updated`
- Add `review_notes` if applicable

### 3. Append to Engagement Progress

Read current session number from `.claude/memory/session_state.json`.

Append to `00_Engagement_Management/engagement_progress.md`:

```markdown
### Session [N]
**Timestamp:** [ISO_TIMESTAMP]
**Type:** Execution
**Duration:** ~XX minutes
**Deliverable:** [ID] - [Title]

#### Work Completed
- [List accomplishments]

#### Decisions Made
- [Key decisions with rationale]

#### Next Agent Instructions
1. [What next session should do]

#### Blockers & Dependencies
- [Any blockers or "None"]
```

### 4. Update Session State

Update `.claude/memory/session_state.json`:

```json
{
  "session_number": [N+1],
  "last_updated": "[TIMESTAMP]",
  "current_deliverable": "[Current or next]",
  "deliverable_status": "[status]",
  "handoff_notes": "[Context for next session]",
  "stats": {
    "total_sessions": [N],
    "deliverables_completed": [X],
    "deliverables_in_progress": [Y]
  }
}
```

### 5. Generate Handoff Summary

Create concise handoff covering:
- Session accomplishments
- Current deliverable state
- Next steps needed
- Context for next session

### 6. Git Commit and Push

Execute:

```bash
git add -A
git commit -m "Session S[N]: [Deliverable] [status] - [brief summary]

Work completed:
- [Key accomplishment 1]
- [Key accomplishment 2]

Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>"

git push origin main
```

### 7. Output Confirmation

Display:

```json
{
  "session_number": [N],
  "session_complete": true,
  "deliverable_worked": "[D0XX]",
  "status_achieved": "[status]",
  "files_updated": ["deliverables_tracker.json", "engagement_progress.md", "session_state.json"],
  "git_pushed": true,
  "next_session_priority": "[D0YY]",
  "handoff_notes": "[Brief handoff]"
}
```

## Validation Checklist

Before completing:

- [ ] All work saved to correct folders
- [ ] `deliverables_tracker.json` updated
- [ ] `engagement_progress.md` appended
- [ ] `.claude/memory/session_state.json` updated
- [ ] Handoff notes capture key context
- [ ] Git commit created and pushed

---

**Engagement:** ENG-MAR-2026-001
**Client:** Red Sea Marine for Sea Transport
