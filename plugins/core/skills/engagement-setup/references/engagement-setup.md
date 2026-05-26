# Engagement Setup Command

## Purpose
Initialize a new consulting engagement with all required artifacts and configuration.

## Trigger
First session when `deliverables_tracker.json` contains placeholder values.

## Execution Steps

### 1. Gather Engagement Information
Collect from user:
- Client name and industry
- Engagement name and code
- Service line (STR|OPS|DIG|FIN|CHG|AIG|DAT|RSK)
- Start and end dates
- Key stakeholders
- Primary objectives

### 2. Configure project.json
Update all placeholder fields with actual engagement data.

### 3. Initialize deliverables_tracker.json
- Set engagement metadata
- Configure workstreams appropriate to service line
- Add initial deliverables with acceptance criteria
- Set milestone dates

### 4. Create scope_document.md
Document:
- Problem statement
- In-scope / out-of-scope items
- Constraints and dependencies
- Assumptions

### 5. Initialize stakeholder_map.md
- Add known stakeholders
- Assign influence/support levels
- Document communication preferences

### 6. Create risk_register.md
- Identify initial risks
- Document mitigation strategies

### 7. Initialize engagement_progress.md
- Create Session 1 entry
- Document setup activities
- Set next session instructions

### 8. Initialize session_state.json
```json
{
  "session_number": 1,
  "engagement_name": "[NAME]",
  "current_phase": "Discovery",
  "current_deliverable": null,
  "blockers": [],
  "last_updated": "[TIMESTAMP]"
}
```

## Output
```
═══════════════════════════════════════════════════════════════
ENGAGEMENT SETUP COMPLETE
Engagement: [Name]
Client: [Client Name]
Service Line: [Code]
Deliverables: [Count] across [Count] workstreams
Milestones: [Count]
First Milestone: [Name] - [Date]
═══════════════════════════════════════════════════════════════
```

## Validation Checklist
- [ ] project.json configured
- [ ] deliverables_tracker.json populated
- [ ] scope_document.md complete
- [ ] stakeholder_map.md initialized
- [ ] risk_register.md created
- [ ] engagement_progress.md Session 1 logged
- [ ] session_state.json initialized
- [ ] GitHub repository created
- [ ] Dashboard registry updated

## GitHub Repository Setup

### 9. Create Project Repository
```bash
# Generate project code
PROJECT_ID="P00X"  # Auto-increment
CLIENT_CODE="APA"  # From client name
REPO_NAME="Project_${PROJECT_ID}_${CLIENT_CODE}"

# Initialize git repository
git init
git add -A
git commit -m "Initial setup: ${ENGAGEMENT_NAME}
Client: ${CLIENT_NAME}, Service: ${SERVICE_LINE}"

# Create GitHub repo (via GitHub CLI or API)
gh repo create "Omega-Projects/${REPO_NAME}" --private
git remote add origin "git@github.com:Omega-Projects/${REPO_NAME}.git"
git push -u origin main
```

### 10. Register in Dashboard
Add project to `Omega_Projects_Dashboard/data/projects_registry.json`:

```json
{
  "project_id": "P00X",
  "project_code": "APA_DIG_2025",
  "client_name": "[Client Name]",
  "engagement_name": "[Engagement Name]",
  "service_line": "[CODE]",
  "industry": "[CODE]",
  "github_repo": "Omega-Projects/Project_P00X_APA",
  "status": "active",
  "start_date": "[YYYY-MM-DD]",
  "target_end_date": "[YYYY-MM-DD]",
  "sponsor": "[Name]",
  "lead_partner": "[Partner Name]",
  "created_at": "[ISO_TIMESTAMP]"
}
```

Push dashboard update:
```bash
cd ../Omega_Projects_Dashboard
git add data/projects_registry.json
git commit -m "Add project P00X: ${CLIENT_NAME}"
git push origin main
```

## Output (Updated)
```
═══════════════════════════════════════════════════════════════
ENGAGEMENT SETUP COMPLETE
═══════════════════════════════════════════════════════════════
Project ID:     [P00X]
Engagement:     [Name]
Client:         [Client Name]
Service Line:   [Code] - [Name]
Industry:       [Code] - [Name]

Deliverables:   [Count] across [Count] workstreams
Milestones:     [Count]
First Milestone: [Name] - [Date]

GitHub:         Omega-Projects/Project_P00X_[CODE]
Dashboard:      ✅ Registered

Ready to begin. Run /project:session-start
═══════════════════════════════════════════════════════════════
```

## Conversation Flow (v1.2 default path)

The 8 steps above describe the deterministic flow (used when the consultant types `skip wizard, use defaults`). The default v1.2 flow is conversation-driven:

### Running picture

Claude maintains an internal state across the conversation:

```json
{
  "client": null,
  "industry": null,
  "service_lines": [],
  "scope": [],
  "regulatory": [],
  "languages": [],
  "budget_tier": null,
  "deliverables": []
}
```

### Turn-by-turn rules

1. Open with **one** question only (industry + client name).
2. After each consultant turn, update the running picture.
3. As soon as `industry` and ≥1 `service_lines` are set, invoke `/omega:recommend-plugins` inline. Surface the recommendation conversationally, not as a final dump.
4. Confirm inferences rather than asking — global bank client → premium tier; HIPAA in scope → add to `regulatory`; Saudi engagement → bilingual `[ar, en]`.
5. When all required fields are set OR the consultant says "go", present the summary and ask `yes / no / edit <field>`.
6. **Only on `yes`** invoke `setup-new-engagement.js` and write filesystem state.

### Commit gate contract

No filesystem mutations occur until the consultant confirms the summary. Edits to fields go back into the running picture and re-present the summary. This is a hard rule — there is no path through the conversation that writes folders or `project.json` without explicit confirmation.

### Escape hatch

`skip wizard, use defaults` at any turn → drop into the deterministic 8-step flow above.

`cancel` at any turn → exit with no filesystem changes.

### What goes where

- The conversation lives in the SKILL.md prompt
- The commit phase delegates to `plugins/core/scripts/setup-new-engagement.js` (unchanged from v1.0/v1.1)
- Plugin recommendations come from `/omega:recommend-plugins`, which has its own partial judgment-override loop and uses the deterministic engine at `plugins/core/scripts/recommender/recommend.js`

