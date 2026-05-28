---
description: Run a clause-by-clause ISO 42001:2023 gap analysis against the client's AI Management System and produce a Omega-branded gap report with severity-rated findings
allowed-tools: Read, Write, Edit, Glob, Grep, Bash
argument-hint: "[--scope <all|clauses-4-10|controls-only>]"
---

# /omega-aig:iso42001-gap

Produce a clause-by-clause ISO 42001:2023 gap analysis for the client's AI Management System, in the Omega-branded DOCX/PDF format ready to deliver. Each clause is scored 0–5 with evidence cited from ingested client documents, gaps are severity-rated, and the output ends with a 6-month certification roadmap.

Junior-friendly summary: *"Run this after `/omega:doc-ingest` on the client's AI inventory + governance docs. You'll get a deliverable a senior partner can sign off on with minor edits — not a rough draft."*

## When to run

- Discovery phase complete (client AI inventory, governance docs, sample policies ingested)
- Client has signed the engagement letter mentioning ISO 42001 readiness or certification
- Before drafting the certification roadmap (`/omega-aig:roadmap`) — gap report is the prerequisite
- Mid-engagement after major client doc updates (re-run; `/omega:version-diff` shows what shifted)
- Banking profile: every regulatory deliverable triggers peer review — schedule reviewer time before running

## Inputs

**Required:**
- `.brain/02_Entities/<DOC-ID>/_index.md` for at least: client AI inventory, AI governance policy (draft OK), board / risk committee structure document. Use `/omega:doc-ingest` first if any is missing.
- `project.json` with `service_lines: ["AIG"]` and `industry` populated.
- `plugins/aig/skills/aig/SKILL.md` — methodology (Claude loads contextually).

**Optional but improves quality:**
- Prior bias-test results (`/omega-aig:bias-test` output) — informs Clause 6.1 risk assessment scoring.
- Prior model-inventory artifact (`/omega-aig:inventory`) — informs Clause 8.1 operational controls scoring.
- Industry plugin loaded (e.g., `omega-ind-finserv`, `omega-ind-healthcare`) — adds sector-specific clause interpretation.
- Central instinct match: `/omega:gbrain query "ISO 42001 clause 5.2 healthcare approval delays"` surfaces prior engagement patterns to anticipate.

## Steps

1. **Verify context.** Read `project.json`; confirm `AIG` is in `service_lines`. If not, abort with a clear message. Read `.brain/config.json` to confirm `.brain/` is initialized.

2. **Confirm input documents are ingested.** Glob `.brain/02_Entities/*/_index.md`. Check that document types `AI Inventory`, `AI Policy` (or `Governance Policy`), and `Org Structure` (or `Board Charter`) are present. If any missing, prompt the consultant: *"Ingest <type> with /omega:doc-ingest before running gap analysis."*

3. **Load methodology.** Read `plugins/aig/skills/aig/SKILL.md`. Read `plugins/aig/rules/aig-quality-standards.md`. Read `plugins/core/assets/CPS_METHODOLOGY.md` for Pyramid Principle + MECE.

4. **Surface prior patterns from the brain.**
   - `gbrain query "ISO 42001 clause-by-clause gap analysis pattern" --preset balanced` — hybrid hit on central instincts + frameworks library + prior engagement summaries.
   - For each high-confidence (≥ 0.75) instinct returned, decide whether to bake it in as a starting hypothesis or a sidebar.

5. **Score each clause 0–5 with evidence cited.** Walk clauses 4 through 10 in order:

   | Clause | Topic | Score basis |
   |---|---|---|
   | 4 — Context | 4.1 internal/external issues; 4.2 stakeholders; 4.3 scope | Is the AIMS scope formally defined? Have AI-relevant stakeholders been mapped? |
   | 5 — Leadership | 5.1 commitment; 5.2 AI policy; 5.3 roles | Is the AI policy approved by the board? Are AIMS roles assigned with named owners? |
   | 6 — Planning | 6.1 risk + opportunity; 6.2 objectives; 6.3 changes | Is the AI risk register live? Do AIMS objectives have measurable KPIs? |
   | 7 — Support | 7.1 resources; 7.2 competence; 7.3 awareness; 7.4 communication; 7.5 documented information | Is there an AI competence framework? Is documented info versioned? |
   | 8 — Operation | 8.1 operational planning + control; impact assessment per Annex A | Are AI risk impact assessments run pre-deployment? |
   | 9 — Performance evaluation | 9.1 monitoring; 9.2 internal audit; 9.3 management review | Is AI performance monitored against the policy? Internal audit cadence defined? |
   | 10 — Improvement | 10.1 nonconformity + corrective action; 10.2 continual improvement | Is the AI nonconformity log live? |

   For each clause: cite specific evidence (entity wikilink + line ref) supporting the score. Use absolute slug paths: `[[02_Entities/DOC-X/<entity>|<display>]]`. **Never invent a citation** — if you can't find evidence, mark "not evidenced" and the gap severity rises.

6. **Severity-rate gaps.** For each clause scoring < 4:
   - **High** — required by ISO 42001 and missing OR a documented practice contradicts the standard
   - **Medium** — partially evidenced; clause requires more documentation or operationalization
   - **Low** — adequate but improvement opportunities exist
   Output severity counts at the top of the report.

7. **MECE check on the gap list.** Confirm gaps don't overlap and together cover the clause universe. If two gaps speak to the same root cause, merge.

8. **Compose the deliverable (Pyramid Principle).**
   - **Recommendation** (top): "Achieve ISO 42001 certification readiness in [N] months via [3–5 priority workstreams]"
   - **Supporting arguments** (3–5): the priority workstreams, each tied to clause clusters
   - **Evidence** (clause-by-clause matrix): the full gap table

9. **Generate the branded artifact.** Call `/omega:doc-gen` to render DOCX/PDF with Omega branding:
   - File: `05_Deliverables_Final/D<NNN>_ISO42001_Gap_Report_<client-slug>_v<rev>.docx`
   - Sections per Omega standard: Cover · Executive Summary · Methodology · Clause-by-clause Findings · Severity Summary · Roadmap · Appendix (evidence index)
   - Confidence-level annotations on each clause score (HIGH / MEDIUM / LOW based on evidence density)

10. **Run the quality gate.**
    ```
    /omega:verify-quality 05_Deliverables_Final/D<NNN>_ISO42001_Gap_Report_*.docx
    /omega:fact-check    05_Deliverables_Final/D<NNN>_ISO42001_Gap_Report_*.md
    ```
    Both must pass before advancing tracker status. Check 4 (service-line quality standards) verifies ISO 42001 alignment + bias-test reference. Check 8 (markdown-traceable claims) verifies every cited evidence trace.

11. **Update the tracker.** Use `/omega:update-tracker` to set the deliverable's `status` and `quality_score`. Quality gate will block if score < threshold (75 standard / 85 banking).

12. **Extract instinct (auto).** `/omega:session-end` will auto-extract any pattern noticed during this run (e.g., "Banking client board approvals on AI policy take 4 weeks vs 2 weeks for healthcare" — central learning).

## Output

| Path | Content |
|---|---|
| `05_Deliverables_Final/D<NNN>_ISO42001_Gap_Report_<client>_v<rev>.docx` | Omega-branded DOCX (primary deliverable) |
| `05_Deliverables_Final/D<NNN>_ISO42001_Gap_Report_<client>_v<rev>.pdf` | PDF render (for client portal) |
| `05_Deliverables_Final/D<NNN>_ISO42001_Gap_Report_<client>_v<rev>.md` | Source markdown (Claude-friendly; basis for fact-check) |
| `05_Deliverables_Final/D<NNN>_ISO42001_Evidence_Index.xlsx` | Excel: clause → score → evidence reference (auditor-friendly) |
| `.brain/audit.log` | One line: `<ISO> aig-iso42001-gap D<NNN> overall=<score>%` |

## Worked example (excerpt)

```
ISO 42001:2023 Gap Analysis — Al-Noor Health Group
Engagement: P042 · Service line: AIG · Industry: Healthcare
Overall readiness: 42% (8 high · 6 medium · 4 low gaps)
Estimated time to certification: 6 months

Recommendation
  Al-Noor can achieve ISO 42001 readiness in 6 months by prioritizing
  three workstreams: (1) Formalize AI policy and obtain board approval
  (Clauses 5.2, 5.3); (2) Stand up the AI risk register against the
  Aidoc radiology system and the upcoming pathology AI (Clauses 6.1, 8.1);
  (3) Define monitoring KPIs and quarterly management review (Clauses 9.1, 9.3).

Clause-by-clause excerpt
  Clause 4.1 Context          ██░░░░  2/5   GAP: No formal AI context statement
                                            Evidence: [[02_Entities/DOC-7E.../org-structure|Org Structure v2]] §3
                                            Severity: medium
  Clause 5.2 AI Policy        █░░░░░  1/5   GAP: Draft exists, not approved
                                            Evidence: [[02_Entities/DOC-7E.../ai-policy-draft|AI Policy Draft]] L1
                                            Severity: HIGH
                                            Prior pattern: INS-CENTRAL-0047 — pre-circulating to legal cuts approval by 2 weeks
  Clause 6.1 Risk Assessment  ███░░░  3/5   PARTIAL: JAWDA risks mapped; ISO-specific risks not
                                            Severity: medium
  Clause 9.1 Monitoring       ██░░░░  2/5   GAP: No KPIs defined for AI models
                                            Severity: HIGH

Quality gate output
  Check 1 (acceptance criteria coverage)  9/10
  Check 2 (Pyramid Principle)             10/10
  Check 3 (MECE)                          9/10
  Check 4 (AIG quality standards)         9/10  — ISO 42001 alignment + bias-test reference present
  Check 5 (branding)                      10/10
  Check 6 (source citations)              8/10
  Check 7 (format validation)             10/10
  Check 8 (markdown-traceable claims)     9/10  — all evidence wikilinks resolve
  TOTAL: 92/100  ✓ PASSES (threshold: 75)
```

## Quality gate + fact-check integration

This command MUST be followed by:

```
/omega:verify-quality 05_Deliverables_Final/<file>.docx
/omega:fact-check     05_Deliverables_Final/<file>.md
```

The deliverable cannot be marked `completed` in `deliverables_tracker.json` without both passing (enforced by `quality-gate.js` hook, exit 2 if score < threshold).

## Banking profile escalation

In banking profile (`OMEGA_HOOK_PROFILE=banking`):
- **Threshold:** 85 (vs 75 standard).
- **Peer review required:** `/omega:peer-review` must assign a senior consultant before marking complete; their initials appear on the cover (Check 9).
- **Opus auto-escalation:** This command auto-escalates to `/model opus` for the analysis pass — quality-gate enforces this. Drop back to sonnet after with `/model sonnet`.
- **Additional hooks:** `omega-risk/control-check.js` validates each High-severity gap has a proposed control mapping; `omega-cyber/pii-scan.js` runs on the deliverable (no leaked PII).
- **Regulatory companion:** The report must reference at least one banking-specific regulation (Basel III governance principles, MAS FEAT, EU AI Act high-risk classification) where applicable.

## GBrain awareness

- Reads project + central via `gbrain query` in Step 4 — single hybrid call returns prior-engagement instincts ranked by service_line + industry filters.
- The `gbrain-sync` PostToolUse hook auto-indexes the generated DOCX-source markdown as it's written — Check 8 markdown-traceable claims uses the fresh index.
- All wikilinks in the deliverable use absolute slug paths with display aliases: `[[02_Entities/DOC-X/<entity>|<display>]]` and `[[03_Frameworks/iso-42001|ISO 42001]]`. Short-form wikilinks are rejected by `validate-obsidian-brain.js`.

## Related

- `/omega-aig:readiness` — overall AI governance readiness (broader, less clause-specific)
- `/omega-aig:risk` — AI risk register (companion deliverable for Clause 6.1)
- `/omega-aig:policy` — draft AI policy (companion for Clause 5.2)
- `/omega-aig:bias-test` — bias-testing evidence (companion for Clause 8.x)
- `/omega:doc-ingest` — required prerequisite
- `/omega:version-diff` — when client docs update mid-engagement
- Skill: `plugins/aig/skills/aig/SKILL.md`
- Rule: `plugins/aig/rules/aig-quality-standards.md`
- Standard: `docs/command-quality-standard.md`
