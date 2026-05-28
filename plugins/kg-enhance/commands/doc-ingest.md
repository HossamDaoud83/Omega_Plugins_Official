---
description: Ingest a client document, extract typed entities, write them as markdown to the engagement brain, and detect supersession of prior versions
allowed-tools: Read, Bash, Write, Edit, Grep
argument-hint: "<path-to-markdown-document>"
---

# /omega:doc-ingest

Ingest a client-document MD file into the engagement brain. Extracts entities (Client, Framework, Regulation, Person, Deliverable, Risk, Money, Date, System, Document), writes each as markdown to `.brain/02_Entities/<DOC-ID>/`, detects supersession of prior versions via frontmatter scan, and writes an audit trail. Idempotent — same file produces the same `DOC-ID`.

Junior-friendly summary: *"This is how the brain learns what's in a client document. After this runs, you can ask Claude 'what does DOC-XXXX affect?' and get a useful answer."*

## When to run

- Client sends a new briefing, RFP, or requirements document
- A revised version of a prior document arrives — supersession is auto-detected
- Reviewing a regulation, standard, or framework PDF (convert to MD first via `pandoc`)
- Mid-engagement, before `/omega:verify-quality` on a deliverable that cites this document (Check 8 needs the entities indexed)

## Inputs

**Required:**
- A markdown file (UTF-8) of the document, with at minimum the frontmatter `doc_title:` and the body text. Convert from DOCX/PDF first if needed (`pandoc input.docx -o documents/<name>.md`).
- A scaffolded engagement workspace (`.brain/config.json` must exist).

**Optional:**
- `version:` and `received_date:` in document frontmatter (recommended for supersession detection).
- `.brain/alias_overrides.json` — engagement-specific EN/AR aliases (used by step 4).

## Steps

1. **Verify context.** Read `.brain/config.json` to confirm we are in an engagement workspace. If missing, abort with: *"Not a Omega engagement — run `/omega:engagement-setup` first."*

2. **Load the document.** Read the MD file from the path argument. Extract YAML frontmatter (`doc_title`, `version`, `received_date`) and body. If `doc_title` is missing, prompt the consultant for it before proceeding.

3. **Compute a deterministic `DOC-ID`** so re-ingest is idempotent:
   ```bash
   python3 -c "
   import hashlib
   doc_title = '<doc_title>'
   version   = '<version>'
   body      = open('<path_to_md>').read()
   sha_prefix = hashlib.sha256(body.encode()).hexdigest()[:12]
   doc_id = 'DOC-' + hashlib.md5((doc_title + '|' + version + '|' + sha_prefix).encode()).hexdigest()[:10].upper()
   print(doc_id)
   "
   ```

4. **Resolve aliases.** Load `~/.claude/plugins/omega-kg-enhance/assets/seed-entity-aliases.json` plus `.brain/alias_overrides.json` if present. Canonicalize every entity name found.

5. **Extract typed entities by judgment.** Read the body and identify each:
   - **Client** — organisations the document is from or to (frontmatter `type: client`)
   - **Framework** — ISO 42001, MARPOL, HIPAA, NIST AI RMF, etc. (`type: framework` — also create stub in `.brain/03_Frameworks/` if missing)
   - **Regulation** — laws, decrees, regulatory references
   - **Person** — named individuals with role (`type: person` — also create stub in `.brain/06_Persons/` with `visibility: project-only`)
   - **Deliverable** — D001, D002 references or named deliverables
   - **Risk** — stated risks or concerns (also stub in `.brain/05_Risks/` if novel)
   - **Money** — monetary values (preserve raw; sanitizer buckets at `/omega:brain-sync`)
   - **Date** — explicit dates relevant to commitments
   - **System** — named IT systems, ERP, HIS, etc.
   - **Document** — references to other documents

   For each: capture canonical name, type, language (en/ar), and ≤ 120-char surrounding context.

6. **Write the document index** at `.brain/02_Entities/<DOC-ID>/_index.md`:
   ```yaml
   ---
   id: <DOC-ID>
   type: document
   doc_title: <title>
   version: <version>
   received_at: <ISO date>
   ingested_at: <now ISO>
   entity_count: <N>
   mentions:
     - "[[03_Frameworks/iso-42001|ISO 42001]]"
     - "[[06_Persons/<slug>|<display>]]"
   ---
   # <doc_title> (v<version>)
   ## Entities mentioned
   - **<type>** [[<absolute-slug-path>|<display>]] (<lang>) — *<context>*
   ```
   **Wikilink convention (v4.1):** use absolute slug paths with display aliases: `[[03_Frameworks/iso-42001|ISO 42001]]`. Short-form `[[ISO 42001]]` silently produces zero typed-graph edges.

7. **Write one markdown file per entity** at `.brain/02_Entities/<DOC-ID>/<canonical-slug>.md`:
   ```yaml
   ---
   name: <canonical>
   type: <entity_type>
   language: <en|ar>
   extracted_from: "[[02_Entities/<DOC-ID>/_index|<title>]]"
   ---
   ## Context
   > <surrounding 120-char snippet>
   ```
   If the entity already has a file from a prior ingest, append a new `extracted_from:` entry (do not overwrite).

8. **Detect supersession.** Scan `.brain/02_Entities/*/_index.md` for prior documents with the same `doc_title` but a different `id`. For each match:
   - Add `supersedes: <old_DOC-ID>` to the new `_index.md` frontmatter
   - Compute diff significance by comparing line counts: >30% changed → `high`; 10–30% → `medium`; <10% → `low`
   - Write narrative to `.brain/04_Versions/<new>_supersedes_<old>.md`:
     ```yaml
     ---
     new_doc_id: <new>
     old_doc_id: <old>
     significance: <high|medium|low>
     ---
     ## Summary
     <one-line change summary>
     ## Meaningful changes
     - <bullet>
     ```
   - Cross-reference any in-progress deliverables that mention entities in this document — flag them as needing re-verify.

9. **Append audit log** to `.brain/audit.log`:
   ```
   <ISO timestamp> doc-ingest <DOC-ID> entities=<N> supersedes=<old|none>
   ```

10. **GBrain sync.** The `gbrain-sync` PostToolUse hook auto-indexes everything written above. No manual sync needed. Confirm with `/omega:gbrain status` — page count should increase by `N+1` (entities + index).

11. **Print summary:**
    ```
    ✓ Ingested <DOC-ID>
      Title: <title>  Version: <version>
      Entities written: <N> (<K> new)  →  .brain/02_Entities/<DOC-ID>/
      Supersedes: <old_DOC-ID|none> (<significance>)
      ⚠ <M> deliverable(s) in progress reference content that changed. Re-verify quality.
    ```

12. **Recommend next steps.** If supersession detected with significance ≥ medium, suggest:
    - `/omega:version-diff "<doc_title>"` to see the full change narrative
    - `/omega:verify-quality <affected-deliverable>` for each flagged deliverable
    - `/omega:fact-check <affected-deliverable>` to confirm claims still hold

## Output

| Path | What it contains |
|---|---|
| `.brain/02_Entities/<DOC-ID>/_index.md` | Document index, entity list, supersession frontmatter |
| `.brain/02_Entities/<DOC-ID>/<entity-slug>.md` × N | One file per entity with context snippet |
| `.brain/03_Frameworks/<slug>.md` (when new) | Stub for any framework referenced for the first time |
| `.brain/05_Risks/<slug>.md` (when new) | Stub for any risk referenced for the first time |
| `.brain/06_Persons/<slug>.md` (when new) | Stub for any person (PII, project-only) |
| `.brain/04_Versions/<new>_supersedes_<old>.md` | Diff narrative when supersession detected |
| `.brain/audit.log` | Append-only audit trail |

## Worked example

```
$ /omega:doc-ingest documents/AlNoor_AI_Strategy_Brief_v2.md

✓ Ingested DOC-7E3F9A2B11
  Title: Al-Noor AI Strategy Brief  Version: 2.0
  Entities written: 27 (4 new)  →  .brain/02_Entities/DOC-7E3F9A2B11/
    Clients: Al-Noor Health Group (en), مجموعة النور الصحية (ar)
    Frameworks: ISO 42001, HIPAA, JAWDA  (stubs at .brain/03_Frameworks/)
    Systems: Oracle HIS, Cerner EMR, PACS
    Risks: Data residency, Model explainability  (stubs at .brain/05_Risks/)
    Persons: Dr. Khalid Al-Rashed (CIO), Eng. Sara Younes (IT Lead)  (project-only)
  Supersedes: DOC-4A7B2C1D09 (significance: medium — 18% lines changed)
  Diff narrative: .brain/04_Versions/DOC-7E3F9A2B11_supersedes_DOC-4A7B2C1D09.md
  ⚠ 1 deliverable in progress references content that changed. Re-verify quality.

Next steps:
  /omega:version-diff "Al-Noor AI Strategy Brief"
  /omega:verify-quality 05_Deliverables_Final/D002_ISO42001_Gap_Report.md
  /omega:fact-check 05_Deliverables_Final/D002_ISO42001_Gap_Report.md
```

## Quality criteria

- Same MD file ingested twice → identical `<DOC-ID>` (deterministic hash).
- Re-ingest is idempotent (entity files append `extracted_from:`, never overwrite).
- Every entity markdown has non-empty `name:` + a backlink to `_index.md`.
- All wikilinks use absolute slug paths with display aliases — short-form is rejected by `node tools/validate-obsidian-brain.js`.
- Person entities default `visibility: project-only` — never sanitized as-is; `/omega:brain-sync` maps to role tokens.
- Supersession significance is computed deterministically (line-count diff, not LLM judgment).
- `audit.log` appended on every run.

## Quality gate

After `/omega:doc-ingest`:
- Run `node tools/validate-obsidian-brain.js --engagement <path>` to confirm wikilinks resolve.
- For each flagged deliverable: `/omega:verify-quality <deliverable>` → `/omega:fact-check <deliverable>`. Quality Gate Check 8 (markdown-traceable claims) will use the freshly indexed entities.

## Banking profile

In banking profile (`OMEGA_HOOK_PROFILE=banking`):
- The `omega-cyber/pii-scan.js` hook runs on the ingested document — fails if SSN/passport/IBAN patterns are not in entity context.
- Person entities also trigger `omega-people/pii-people.js` — fails if role isn't named.
- The `omega-risk/control-check.js` hook validates any extracted Risk entities have a `control_mapping` field.

## Related

- `/omega:version-diff <title>` — show change narrative for superseded documents
- `/omega:alias-merge` — bilingual (EN/AR) entity duplicate resolution
- `/omega:fact-check <deliverable>` — adversarially verify claims against indexed entities
- `/omega:gbrain query <q>` — hybrid retrieval over project + central
- Skill: `plugins/kg-enhance/skills/kg-enhance/SKILL.md`
- Rule: `plugins/kg-enhance/rules/document-ingestion.md`
