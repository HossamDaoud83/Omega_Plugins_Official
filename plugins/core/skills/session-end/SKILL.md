---
name: session-end
description: Complete session with documentation, state updates, and handoff notes
---

# Session End

End current consulting session with proper documentation and git commit.

## What This Does

1. Verifies all work is saved in correct locations
2. Updates deliverables tracker
3. Appends session entry to engagement progress
4. Updates session state for next session
5. Creates git commit with proper format
6. Pushes to GitHub
7. **Syncs a sanitized snapshot to the Omega Portfolio Dashboard** (if enabled)
8. **Commits + pushes the dashboard data repo** so Vercel rebuilds

## Instructions for Claude

When this skill is invoked:

### 1. Verify Work Saved

Check all files are in correct locations:
- Work products in phase folders (01-04)
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

### 5. Git Commit and Push

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

### 6. Sync to Portfolio Dashboard (Vercel)

After the project git push succeeds, sync a sanitized snapshot to the dashboard so the live site updates within ~60 seconds.

**Step 6.1 — Check if sync is enabled**

Read `.claude/memory/session_state.json` → `dashboard_sync.enabled`.

- If `false` or missing → skip the rest of Step 6
- If `true` → continue

**Step 6.2 — Generate the snapshot**

Run the extractor script:

```bash
python3 scripts/sync_to_dashboard.py
```

Default dashboard path: `/mnt/d/Python Projects/Omega Dashboard/Omega_Dashboard`. Override with `--dashboard-path` if the dashboard repo lives elsewhere.

The script writes a fresh `data/projects/<P00X>.json` in the dashboard repo — sanitized (handoff notes capped at 2000 chars, no client-confidential raw data), structured with engagement + session + deliverables + risks + KPIs.

**Step 6.3 — Commit + push the dashboard data**

```bash
cd "/mnt/d/Python Projects/Omega Dashboard/Omega_Dashboard"
git add data/projects/<P00X>.json
git commit -m "sync: <P00X> session <N>

<Engagement name> — <current phase>
Session <N> · <deliverable> (<status>)
Health: <color> · Deliverables <X>/<Y> · Risks <N> open"
git push origin main
cd -  # back to project
```

**Step 6.4 — Verify**

Vercel webhook picks up the push and rebuilds automatically (~60s). Confirm the dashboard shows the new session number at your deployed URL (default: `omega-projects-dashboard.vercel.app`).

**Step 6.5 — Update last_synced**

Update `.claude/memory/session_state.json`:

```json
"dashboard_sync": {
  "enabled": true,
  "data_repo": "https://github.com/HossamDaoud83/Omega-Projects",
  "last_synced": "<ISO timestamp just used>"
}
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
  "dashboard_synced": true,
  "dashboard_url": "https://omega-projects-dashboard.vercel.app/projects/[P00X]",
  "next_session_priority": "[D0YY]",
  "handoff_notes": "[Brief handoff]"
}
```

## Dashboard Sync — enabling the first time

On the first execution session of a new engagement:

1. Run `/engagement-setup` to populate `project.json` with the engagement code (`P00X`)
2. Edit `.claude/memory/session_state.json`:
   ```json
   "dashboard_sync": {
     "enabled": true,
     "data_repo": "https://github.com/HossamDaoud83/Omega-Projects",
     "last_synced": null
   }
   ```
3. Confirm dashboard repo is cloned locally at `/mnt/d/Python Projects/Omega Dashboard/Omega_Dashboard` (or pass `--dashboard-path` to the script)
4. Run `python3 scripts/sync_to_dashboard.py --dry-run` to verify extraction before the first real sync
5. Subsequent `/session-end` calls will auto-sync

## Reference

See `.claude/skills/session-management/references/session-end.md` for detailed implementation.
