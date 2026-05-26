---
description: Extract entities from a client document and write them into the engagement knowledge graph
allowed-tools: Read, Bash, Write, Edit, Grep
---

# /omega:doc-ingest

Extract entities from a client-document MD file (already produced by Claude Code's earlier extraction step) and write them into the engagement's knowledge graph at `.brain/graph.db`. Detect supersession of prior versions. Writes audit trail.

## Steps

1. **Verify context.** Read `.brain/config.json` to confirm we are in an engagement workspace. If missing, abort with a clear message.

2. **Load the document.** Read the MD file from the path argument with the Read tool. Extract YAML frontmatter (doc_title, version, received_date) and body.

3. **Compute deterministic IDs.** Generate:
   - `doc_id = "DOC-" + md5(doc_title + "|" + version + "|" + sha256(body)[:12])[:10].upper()`
   - For each entity: `ent_id = entity canonical name itself` (matches existing entities table where `name` is the primary key)
   Use Python's built-in `hashlib` (always available):
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

4. **Resolve aliases.** Load `~/.claude/plugins/omega-kg-enhance/assets/seed-entity-aliases.json` plus engagement-local `.brain/alias_overrides.json` if present. For every entity name found, replace with canonical form when an alias matches.

5. **Identify entities by judgment.** Read the document body and identify:
   - **Client** — organisations the document is from or to
   - **Framework** — ISO 42001, MARPOL, HIPAA, NIST AI RMF, etc.
   - **Regulation** — laws, decrees, regulatory references
   - **Person** — named individuals with role
   - **Deliverable** — D001, D002 references or named deliverables
   - **Risk** — explicitly stated risks or concerns
   - **Money** — monetary values (preserve as-is; sanitizer buckets these later)
   - **Date** — explicit dates relevant to commitments
   - **System** — named IT systems, ERP, HIS, etc.
   - **Document** — references to other documents
   For each, capture: canonical name, type, language (en/ar), and ≤120-char surrounding context.

6. **Write entity reference MD.** Create `.brain/02_Entities/<doc_id>.md` with:
   ```yaml
   ---
   id: <doc_id>
   type: document
   doc_title: <title>
   version: <version>
   received_at: <ISO date>
   ingested_at: <now ISO>
   entity_count: <N>
   ---
   ```
   Body: list of entities as `- **<type>**: [[<canonical>]] (<lang>)\n  *<context>*`.

7. **Persist to graph.db using Python's built-in sqlite3.** Run via Bash — parameterized queries prevent any quoting issues:
   ```bash
   python3 << 'PYEOF'
   import sqlite3
   conn = sqlite3.connect('.brain/graph.db')
   doc_id = '<doc_id>'
   entities = [('<entity_name>', '<entity_type>'), ...]  # one tuple per extracted entity
   conn.execute("INSERT OR IGNORE INTO entities (name, type) VALUES (?, ?)", (doc_id, 'Document'))
   for name, etype in entities:
       conn.execute("INSERT OR IGNORE INTO entities (name, type) VALUES (?, ?)", (name, etype))
       conn.execute("INSERT OR IGNORE INTO edges (source, edge, target) VALUES (?, ?, ?)", (name, 'EXTRACTED_FROM', doc_id))
       conn.execute("INSERT OR IGNORE INTO edges (source, edge, target) VALUES (?, ?, ?)", (doc_id, 'MENTIONS', name))
   conn.commit()
   conn.close()
   PYEOF
   ```
   Use parameterized `?` placeholders for all values — never string-format entity names into SQL.

8. **Detect supersession.** Query graph.db for prior documents with same `doc_title`:
   ```bash
   python3 -c "
   import sqlite3
   conn = sqlite3.connect('.brain/graph.db')
   rows = conn.execute(\"SELECT name FROM entities WHERE type='Document' AND name LIKE 'DOC-%'\").fetchall()
   for r in rows: print(r[0])
   conn.close()
   "
   ```
   For each candidate, read its `.brain/02_Entities/<doc_id>.md` and compare frontmatter `doc_title`. If a match exists with different `<doc_id>`:
   - Insert SUPERSEDES edge:
     ```bash
     python3 -c "
     import sqlite3; conn = sqlite3.connect('.brain/graph.db')
     conn.execute('INSERT OR IGNORE INTO edges (source, edge, target) VALUES (?, ?, ?)', ('<new_doc_id>', 'SUPERSEDES', '<old_doc_id>'))
     conn.commit(); conn.close()
     "
     ```
   - Compute diff significance by line-diffing the two entity MDs:
     - >30% lines changed → `high`
     - 10-30% → `medium`
     - <10% → `low`
   - Write narrative to `.brain/04_Versions/<new_doc_id>_supersedes_<old_doc_id>.md` with frontmatter (significance, change_summary) and bullet-list of meaningful changes.

9. **Append audit log.** Append to `.brain/01_Instincts/audit.log`:
   ```
   <ISO timestamp> doc-ingest <doc_id> entities=<N> supersedes=<old_doc_id|none>
   ```

10. **Print summary** to stdout:
    ```
    ✓ Ingested <doc_id>
      Title: <title>  Version: <version>
      Entities: <N> total (<K> new, <K-N> already known)
      Edges added: <E>
      Supersedes: <old_doc_id|none> (<significance>)
    ```

## Quality criteria

- Same MD file ingested twice produces same `<doc_id>` (deterministic).
- Re-ingesting is idempotent (`INSERT OR IGNORE` prevents duplicates).
- Every entity has a non-empty canonical name.
- Edge count matches `2 * entity_count` (EXTRACTED_FROM + MENTIONS per entity) plus 0 or 1 SUPERSEDES.
- No client identifiers leaked into central brain (sanitizer at `/omega:brain-sync` handles this; this command stays per-project).
