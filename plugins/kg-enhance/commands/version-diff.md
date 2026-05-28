---
description: Show the full version chain for a client document — supersession links, diff narratives, affected deliverables
allowed-tools: Read, Bash, Grep
argument-hint: "<doc-title>"
---

# /omega:version-diff

For a given document title, return the full version chain (oldest to newest), the supersession links between them, the significance, the diff narrative, and any deliverables that depend on the changed content.

v2.0 — markdown-first. The version chain is read from `supersedes:` frontmatter in `.brain/02_Entities/<doc_id>/_index.md` files and from the diff narratives at `.brain/04_Versions/`.

## Steps

1. **Find document IDs by title.** List all `.brain/02_Entities/DOC-*/_index.md` files. Read each frontmatter; collect those whose `doc_title` matches the argument (case-insensitive substring OK).

2. **Order by `received_at`** (oldest → newest).

3. **Reconstruct the supersession chain from frontmatter.** Each newer `_index.md` carries `supersedes: <old_doc_id>`. Walk the chain by following these references.

4. **Read diff narratives.** For each pair, read `.brain/04_Versions/<new>_supersedes_<old>.md` (frontmatter has `significance`; body has the summary + bullets).

5. **Find affected deliverables.** Scan `.brain/01_Instincts/*.md` and `00_Engagement_Management/deliverables_tracker.json` for `informs`/`applies` wikilinks pointing at any entity in the document. Example grep:
   ```bash
   grep -rEn "\[\[<canonical_entity>\]\]|<doc_id>" .brain/01_Instincts/ 00_Engagement_Management/
   ```
   Cross-reference with deliverable status (`DRAFT`, `IN_REVIEW`, `COMPLETE`) from `deliverables_tracker.json`.

6. **Render the chain** as markdown:
   ```
   ## Version Chain: <Title>

     v1  <DOC-AAA>  received <date>  status: superseded
     v2  <DOC-BBB>  received <date>  status: active
          ↑ supersedes (significance: <high|medium|low>)
          Summary: <narrative>
          Affected deliverables: D003 (DRAFT), D007 (COMPLETE)
   ```

7. **Highlight risks.** If any deliverable is `DRAFT` or `IN_REVIEW` and references content that changed, print a warning at the top:
   ```
   ⚠ <N> deliverables in progress reference content that changed. Re-verify quality.
   ```

## Worked example

```
$ /omega:version-diff "Al-Noor AI Strategy Brief"

⚠ 1 deliverable in progress references content that changed. Re-verify quality.

## Version Chain: Al-Noor AI Strategy Brief

  v1  DOC-4A7B2C1D09  received 2026-05-05  status: superseded
  v2  DOC-7E3F9A2B11  received 2026-05-19  status: active
       ↑ supersedes (significance: medium — 18% lines changed)
       Summary: Added radiology AI vendor (Aidoc), expanded IT infrastructure
                section, added 3 new risk items (PACS-RIS integration, vendor
                lock-in, regulatory drift).
       Affected deliverables:
         D002 ISO 42001 Gap Report  (IN_PROGRESS) — re-verify recommended
         D003 Digital Roadmap        (DRAFT)       — re-verify recommended

Next steps:
  /omega:verify-quality 05_Deliverables_Final/D002_ISO42001_Gap_Report.md
  /omega:fact-check 05_Deliverables_Final/D002_ISO42001_Gap_Report.md
```

## Output destination

Read-only — output goes to stdout. No writes to `.brain/`. To persist (e.g. in a handoff pack), copy into `06_Client_Communications/version_chain_<doc-title>_<date>.md`.

## Quality criteria

- Handles 1–N versions (single version returns the document with no supersedes).
- Output renders cleanly in chat (use plain text + indent, not tables — Obsidian and terminals both display well).
- Risk warning fires only when there are draft/in-review deliverables on changed content.
- Read-only — never writes to the brain.

## Related

- `/omega:doc-ingest <path>` — re-ingest if you've received another version
- `/omega:verify-quality <deliverable>` — re-run after any superseded-content alert
- `/omega:gbrain query "changes in <doc title>"` — hybrid retrieval over diff narratives
