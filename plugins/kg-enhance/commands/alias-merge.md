---
description: Detect EN/AR (or other bilingual) duplicate entities, propose merges, and apply consultant-confirmed merges across the engagement brain
allowed-tools: Read, Bash, Write, Edit
argument-hint: ""
---

# /omega-kg-enhance:alias-merge

Identify probable cross-language duplicates in the markdown entity collection and propose merges to a canonical name. Apply only after consultant confirmation.

v2.0 — markdown-first. Entities live as `.md` files in `.brain/02_Entities/<DOC-ID>/`; the merge operation rewrites the canonical `name:` frontmatter and updates wikilinks across the brain.

## Steps

1. **Load existing aliases.**
   - Central seed: `~/.claude/plugins/omega-kg-enhance/assets/seed-entity-aliases.json`
   - Engagement overrides: `.brain/alias_overrides.json` (create if missing)

2. **Pull entity inventory** by scanning markdown frontmatter:
   ```bash
   grep -rh "^name:" .brain/02_Entities/ | sed 's/^name: *//' | sort -u
   ```
   Also read `type:` and `language:` from each entity file (`grep -A2 "^name:"` or a small Python helper that parses the frontmatter blocks).

3. **Group by language.** Detect Arabic by the presence of any Unicode codepoint in U+0600..U+06FF; otherwise treat as English.

4. **Propose merges by judgment.** For each English-Arabic pair you suspect refers to the same entity, propose a merge. Strong signals:
   - Phonetic transliteration ("Omega Consulting" ↔ "كور باث ستراتيجيس")
   - Direct translation of a known framework ("ISO 42001" ↔ "آيزو 42001")
   - Same role + similar context ("Marine Pollution Convention" ↔ "اتفاقية تلوث البحار")

5. **Present proposals** as a numbered list:
   ```
   Proposed merges:
   1. EN: "Omega Consulting"  ↔  AR: "كور باث ستراتيجيس"  (canonical: Omega Consulting)
   2. EN: "ISO 42001"              ↔  AR: "آيزو 42001"          (canonical: ISO 42001)
   ...

   Reply with the numbers to confirm (e.g., "1,2" or "all"), or "none".
   ```

6. **Apply confirmed merges.** For each confirmed pair:
   - Add to `.brain/alias_overrides.json` under the canonical key
   - In every entity markdown that names the alias, rewrite the `name:` frontmatter to the canonical form
   - Rewrite all wikilinks across `.brain/` (and `00_Engagement_Management/` if affected):
     ```bash
     # Replace [[<alias>]] with [[<canonical>]] in every markdown file
     grep -rl "\[\[<alias>\]\]" .brain/ 00_Engagement_Management/ \
       | xargs -I{} sed -i 's/\[\[<alias>\]\]/[[<canonical>]]/g' {}
     ```
   - If the alias had its own entity `.md` file (e.g., `<alias-slug>.md`), delete it (its content has been merged into the canonical file's `extracted_from:` list).
   - After the batch, run `node tools/validate-obsidian-brain.js --engagement <path>` to confirm no broken wikilinks remain.

7. **Print summary** of applied merges and updated files.

## Worked example

```
$ /omega:alias-merge

Proposed merges (scanning .brain/02_Entities/ for EN/AR duplicates):
1. EN: "Al-Noor Health Group"  ↔  AR: "مجموعة النور الصحية"   (canonical: Al-Noor Health Group)
2. EN: "ISO 42001"             ↔  AR: "آيزو 42001"            (canonical: ISO 42001)
3. EN: "JAWDA"                 ↔  AR: "جودة"                  (canonical: JAWDA)
4. EN: "Dr. Khalid Al-Rashed"  ↔  AR: "د. خالد الراشد"        (canonical: Dr. Khalid Al-Rashed)

Reply with numbers to confirm (e.g., "1,2,3" or "all"), or "none".

> all

✓ Applied 4 merges
  - alias_overrides.json updated (12 entries total)
  - 23 wikilinks repointed across .brain/01_Instincts/ and 02_Entities/
  - 4 alias-only entity files deleted (content merged into canonical files)
  - Validation: clean (run: node tools/validate-obsidian-brain.js --engagement .)

Next steps:
  /omega:gbrain extract-links   # refresh typed-graph after the renames
```

## Output destination

| Path | Change |
|---|---|
| `.brain/alias_overrides.json` | Updated (new aliases appended, JSON re-sorted) |
| `.brain/02_Entities/<DOC-ID>/<entity-slug>.md` | `name:` frontmatter rewritten to canonical; alias-only files deleted |
| `.brain/01_Instincts/*.md` | Wikilinks repointed (`[[alias]]` → `[[canonical]]`) |
| Other markdown referencing merged entities | Wikilinks repointed in place |
| `.brain/audit.log` | Append entry: `<ISO> alias-merge merged=<N> deleted=<K>` |

## Quality criteria

- NEVER auto-apply without consultant confirmation.
- Updates are idempotent (re-running produces no further changes).
- `alias_overrides.json` is valid UTF-8 JSON, sorted keys.
- No data loss: all wikilinks repointed before deleting the alias's entity file.
- Validation pass clean after merge (no orphan wikilinks).
- After merge, `gbrain extract-links --source db` is recommended to refresh the typed graph with the new canonical names. The `gbrain-sync` PostToolUse hook auto-handles per-file updates but a final `extract-links` ensures the graph is consistent.

## Banking profile

In banking profile, alias merges involving Person entities (`type: person`) require an explicit second confirmation: *"This will rewrite N references to a named person across instincts. Confirm role-mapping is documented in .brain/06_Persons/?"* Prevents accidental PII drift.

## Related

- `/omega:doc-ingest <path>` — alias resolution happens during ingest (uses `alias_overrides.json`)
- `/omega:gbrain extract-links` — refresh typed graph after merges
- `/omega:brain-sync` — sanitizer uses canonical names; merge first, sync second
- Asset: `~/.claude/plugins/omega-kg-enhance/assets/seed-entity-aliases.json` (shared baseline)
