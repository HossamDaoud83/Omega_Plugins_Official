# Session End Command

## Purpose

Complete session with proper documentation, artifact updates, and handoff generation.

## CRITICAL: ALWAYS RUN THIS COMMAND

**Run `/project:session-end` at the conclusion of EVERY consulting session.**

Without this command:

- Session work is not persisted to memory
- Next session loses context and continuity
- Handoff notes are not generated
- Progress tracking becomes incomplete

## Trigger

End of each work session. Run AFTER `/project:verify-quality` if deliverable is being marked complete.

## Execution Steps

### 1. Verify Work Saved

Check that all created/modified files are saved to correct locations:

- Work products in appropriate phase folders
- Final deliverables in `05_Deliverables_Final/`
- Communications in `06_Client_Communications/`

### 2. Update deliverables_tracker.json

For worked deliverable:

- Update `status`
- Update `completion_percentage`
- Update `last_updated`
- Add `review_notes` if applicable

### 3. Append to engagement_progress.md

Create session entry:

```markdown
### Session [N]
**Timestamp:** [ISO_TIMESTAMP]
**Type:** Execution
**Duration:** ~XX minutes
**Deliverable:** [ID] - [Title]

#### Work Completed
- [Completed item 1]
- [Completed item 2]

#### Decisions Made
- [Decision with rationale]

#### Next Agent Instructions
1. [Instruction 1]
2. [Instruction 2]

#### Blockers & Dependencies
- [Any blockers or "None"]
```

### 4. Update risk_register.md

If applicable:

- Add new risks identified
- Update risk statuses
- Document issue resolutions

### 5. Update session_state.json

```json
{
  "session_number": N,
  "engagement_name": "[NAME]",
  "current_phase": "[Phase]",
  "current_deliverable": "[D0XX]",
  "deliverable_status": "[status]",
  "blockers": [],
  "handoff_notes": "[Key context for next session]",
  "last_updated": "[TIMESTAMP]",
  "stats": {
    "total_sessions": N,
    "deliverables_completed": X,
    "deliverables_in_progress": Y
  }
}
```

### 6. Generate Handoff Notes

Capture:

- What was accomplished
- Current state of deliverable
- Next steps needed
- Any context future agent needs

## Output

```json
{
  "session_number": N,
  "session_complete": true,
  "deliverable_worked": "D0XX",
  "deliverable_title": "Title",
  "status_achieved": "in_progress|in_review|completed",
  "acceptance_criteria_met": "X/Y",
  "files_created": ["file1.md", "file2.json"],
  "tracker_updated": true,
  "progress_log_appended": true,
  "memory_updated": true,
  "next_session_priority": "D0YY",
  "handoff_notes": "Key context for next session"
}
```

## Validation Checklist

- [ ] All work saved to correct folders
- [ ] deliverables_tracker.json updated
- [ ] engagement_progress.md appended
- [ ] session_state.json updated
- [ ] Handoff notes capture key context

---

## 7. Git Commit & Push (REQUIRED)

**CRITICAL: After all updates verified, EXECUTE these Git commands:**

### Commit Message Format

```
Session S[N]: D[XXX] [status] ([score]/100)
[summary of key accomplishment]
```

### Commands to Execute

```bash
git add -A
git commit -m "Session S[N]: D[XXX] [status] - [brief summary]"
git push origin main
```

### Example

```bash
git add -A
git commit -m "Session S003: D001 complete (91/100) - stakeholder interviews consolidated"
git push origin main
```

**Note:** Replace `[N]`, `[XXX]`, `[status]`, and `[summary]` with actual session values.

After successful push, confirm:

```
✅ Changes committed and pushed to GitHub
```
