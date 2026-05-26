---
name: engagement-setup
description: Initialize new client engagement via a conversation-driven wizard that recommends plugins as it goes, with a confirm-then-commit gate before any filesystem changes.
---

# Engagement Setup

Initialize a new consulting engagement (first-time setup only) through a **conversation-driven wizard** that interleaves question-asking with plugin recommendations. No filesystem state changes until the consultant explicitly confirms.

## What This Does

1. Detects if this is a first run
2. Conducts a turn-by-turn conversation, asking only what's still ambiguous
3. Maintains an internal running picture of the engagement
4. Surfaces `/omega:recommend-plugins` recommendations as facts emerge — not at the end
5. Commits filesystem state (folders, `project.json`, `session_state.json`) only after explicit consultant confirmation
6. Falls back to a deterministic 8-step flow when the consultant types `skip wizard, use defaults`

## Instructions for Claude

### 0. First-Run Detection

Check whether `00_Engagement_Management/deliverables_tracker.json` contains placeholders. If not first run, warn the user and exit. Otherwise proceed.

### 1. Open the conversation

Ask **one** question, not all eight:

> "What's the client name and industry for this engagement?"

Do not ask for service line, regulatory exposure, languages, or budget tier yet.

### 2. Maintain a running picture

Across turns, hold an internal state object:

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

After each consultant turn, fill in whatever was answered, then decide what to ask next.

### 3. Recommend as you go (the agentic step)

As soon as `industry` and at least one `service_lines` entry are known, invoke `/omega:recommend-plugins` inline. That command already has a partial judgment-override loop — let it run. Surface the recommendation conversationally:

> "Got it — healthcare + AIG. The recommender suggests `omega-bundle-healthcare` plus `omega-aig` and `omega-cyber` for HIPAA/ISO 42001 work. Does the engagement also need ESG or financial-due-diligence add-ons, or are we strictly on the AI-governance side?"

Do not dump the full recommendation table at this stage — embed it in the dialogue. The consultant can ask "show me the full recommendation" to see the table form.

### 4. Confirm inferences instead of asking

If the running picture allows a reasonable inference, **state it and confirm** rather than ask:

- Global bank client + STR service line → "I'll assume premium budget tier given the client size — say if that's wrong."
- HIPAA appearing in scope → "Adding `regulatory: hipaa` automatically — confirm if you also need GDPR."
- Bilingual deliverables in a Saudi engagement → "Setting `languages: [ar, en]` — let me know if EN-only."

This keeps the conversation short for experienced consultants without forcing newer ones to know what to specify.

### 5. Confirm-then-commit gate

When the running picture is complete (all required fields filled OR consultant explicitly says "go"), present a summary:

```
Engagement summary:
  Client:         <name>
  Industry:       <code>
  Service lines:  <list>
  Scope:          <list>
  Regulatory:     <list>
  Languages:      <list>
  Budget tier:    <tier>
  Recommended plugins: <bundle + add-ons>

Ready to commit? (yes / no / edit <field>)
```

**Only after the consultant says `yes`** do you:

1. Write the running picture into `project.json` (using the Node script logic; see step 6)
2. Invoke `plugins/core/scripts/setup-new-engagement.js` to create folders and management files
3. Initialize `.claude/memory/session_state.json`

Until that gate, **no filesystem mutations**. If the consultant says `edit budget_tier` or any other field, update the running picture and re-present the summary.

### 6. Commit phase (delegated to the Node script)

Once confirmed, delegate to `plugins/core/scripts/setup-new-engagement.js`. The script implementation is unchanged from v1.0/v1.1 — it expects a populated `project.json` and produces the standard folder tree:

```
00_Engagement_Management/
01_Discovery_Phase/
02_Analysis_Phase/
03_Recommendations_Phase/
04_Implementation_Support/
05_Deliverables_Final/
06_Client_Communications/
07_Governance_Oversight/
```

It also initializes:
- `deliverables_tracker.json` with deliverables from `project.json`
- `engagement_progress.md` with a session-0 entry
- `risk_register.md` empty template
- `stakeholder_map.md` with client contacts
- `scope_document.md` from `project.json` scope
- `.claude/memory/session_state.json` with `session_number: 0`

### 7. Output engagement summary

Display initialization confirmation: engagement details, folder structure created, files initialized, next step (`run /omega:session-start`).

## Escape hatch — deterministic flow

If at any point the consultant types `skip wizard, use defaults`, fall back to the v1.0/v1.1 flow:

1. Read `project.json` as-is (consultant has populated it manually)
2. Skip the conversation, skip the running-picture, skip the inline recommendation
3. Go directly to step 6 (delegate to Node script)
4. Output the summary

This preserves backward compatibility for consultants who want determinism, scripted setup runs, or CI-driven scaffolding.

## Loop terminator

The conversation terminates when **any** of:

- The consultant confirms the summary with `yes` → proceed to commit
- The consultant types `skip wizard, use defaults` → fall back to deterministic flow
- The consultant types `cancel` → exit without filesystem changes

There is no fixed iteration cap because the conversation is human-driven, but the **commit gate is the only path that mutates state**. Any drift in the conversation simply means more turns — never accidental writes.

## Reference

See [references/engagement-setup.md](references/engagement-setup.md) for the deterministic step-by-step (used by the escape hatch) and the conversation flow contract.
