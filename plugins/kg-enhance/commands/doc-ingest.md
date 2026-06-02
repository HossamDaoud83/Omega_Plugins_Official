---
description: Ingest a client document in any format (PDF, DOCX, PPTX, MD, image), auto-convert to markdown via Marker OCR, extract typed entities, write them to the engagement brain, and detect supersession of prior versions
allowed-tools: Read, Bash, Write, Edit, Grep
argument-hint: "<path-to-document>  (PDF, DOCX, PPTX, MD, JPG, PNG)"
---

# /omega:doc-ingest

Ingest a client document in **any format** into the engagement brain. Auto-converts PDF/DOCX/PPTX to markdown using Marker (GPU OCR, Arabic-capable) when available, falling back to pandoc. Extracts entities (Client, Framework, Regulation, Person, Deliverable, Risk, Money, Date, System, Document), writes each as markdown to `.brain/02_Entities/<DOC-ID>/`, detects supersession of prior versions via frontmatter scan, and writes an audit trail. Idempotent — same file produces the same `DOC-ID`.

Junior-friendly summary: *"Pass any document — PDF, Word, PowerPoint, even Arabic scans. The skill converts it automatically and teaches the brain what's inside."*

## When to run

- Client sends a new briefing, RFP, requirements document, or scanned contract (any format)
- A revised version of a prior document arrives — supersession is auto-detected
- Reviewing a regulation, standard, or framework PDF (no manual pre-conversion needed)
- Mid-engagement, before `/omega:verify-quality` on a deliverable that cites this document (Check 8 needs the entities indexed)

## Inputs

**Required:**
- Any document file: `.md`, `.pdf`, `.docx`, `.pptx`, `.xlsx`, `.jpg`, `.png` — conversion is automatic.
- A scaffolded engagement workspace (`.brain/config.json` must exist).

**Optional:**
- `version:` and `received_date:` in document frontmatter (recommended for supersession detection, auto-added to converted files).
- `.brain/alias_overrides.json` — engagement-specific EN/AR aliases (used by step 5).

## Converter availability

| Tool | Formats | Arabic OCR | Install |
|---|---|---|---|
| **Marker** (preferred) | PDF, images (via 1-page-PDF) | ✅ GPU-accelerated Surya | `py -3.13 -m pip install marker-pdf` |
| **python-docx** | DOCX | ❌ text layer only | `pip install python-docx` |
| **python-pptx** | PPTX | ❌ text layer only | `pip install python-pptx` |
| **PIL/Pillow** | PNG/JPG → 1-page PDF (feeds Marker) | ✅ via Marker | `pip install Pillow` |
| **pandoc** (fallback) | DOCX, PPTX, MD | ❌ No OCR | system package |
| **Direct read** | MD only | n/a | built-in |

> **Reality check:** most `marker-pdf` installs ship **only** the PDF converter — `marker.converters.docx`, `.pptx`, and `.image` are frequently absent (`ModuleNotFoundError`), and `pandoc` is often not installed. So this skill does **not** rely on Marker for non-PDF types. It reads docx/pptx with python-docx/python-pptx and OCRs images by rendering them to a 1-page PDF (PIL) and feeding Marker's PDF path. Each converter is independent — a missing one only disables its own type.

See `plugins/kg-enhance/docs/marker-setup.md` for full installation guide.

## Steps

0. **Auto-convert to markdown** (skip if input is already `.md`):

   Detect the file extension of the argument path and route by type. Each branch is
   independent — a missing converter only disables its own type, never the whole run.

   | Ext | Converter | Notes |
   |---|---|---|
   | `.md` | direct read | no conversion |
   | `.pdf` | Marker `PdfConverter` `force_ocr=True` | Arabic embedded-font PDFs decoded via Surya OCR, not the corrupt text layer |
   | `.docx` | Marker `DocxConverter` → **fallback** python-docx | DocxConverter usually absent; python-docx extracts paragraphs (heading styles → `#`) + tables |
   | `.pptx` | python-pptx | one `## Slide N` per slide; shape text + tables |
   | `.png` `.jpg` `.jpeg` | PIL → 1-page PDF → Marker `force_ocr` | reuses the proven PDF OCR path since `marker.converters.image` is typically absent |

   Single robust snippet (load Marker models **once**, then route):
   ```bash
   py -3.13 -c "
   import os, hashlib
   path = r'<input_path>'
   ext  = os.path.splitext(path)[1].lower()
   out  = os.path.splitext(path)[0] + '_converted.md'

   def marker_pdf(p):
       from marker.converters.pdf import PdfConverter
       from marker.models import create_model_dict
       from marker.config.parser import ConfigParser
       from marker.output import text_from_rendered
       cfg = ConfigParser({'output_format':'markdown','languages':'ar,en','force_ocr':True})
       conv = PdfConverter(config=cfg.generate_config_dict(), artifact_dict=create_model_dict())
       md,_,_ = text_from_rendered(conv(p)); return md

   if ext == '.pdf':
       body = marker_pdf(path)
   elif ext in ('.png','.jpg','.jpeg'):
       from PIL import Image
       tmp = os.path.splitext(path)[0] + '_tmp.pdf'
       Image.open(path).convert('RGB').save(tmp, 'PDF')
       try: body = marker_pdf(tmp)
       finally:
           try: os.remove(tmp)
           except OSError: pass
   elif ext == '.docx':
       try:
           from marker.converters.docx import DocxConverter   # rarely present
           from marker.models import create_model_dict
           from marker.config.parser import ConfigParser
           from marker.output import text_from_rendered
           cfg = ConfigParser({'output_format':'markdown'})
           conv = DocxConverter(config=cfg.generate_config_dict(), artifact_dict=create_model_dict())
           body,_,_ = text_from_rendered(conv(path))
       except Exception:                                       # fallback: python-docx
           import docx
           d = docx.Document(path); lines = []
           for para in d.paragraphs:
               t = para.text.strip()
               if not t: continue
               s = (para.style.name or '').lower()
               if s.startswith('heading'):
                   n = ''.join(c for c in s if c.isdigit()); lines.append('#'*min(int(n or 2),6)+' '+t)
               else: lines.append(t)
           for tbl in d.tables:
               for row in tbl.rows:
                   lines.append('| ' + ' | '.join(c.text.strip().replace(chr(10),' ') for c in row.cells) + ' |')
               lines.append('')
           body = '\n\n'.join(lines)
   elif ext == '.pptx':
       from pptx import Presentation
       prs = Presentation(path); lines = []
       for i, sl in enumerate(prs.slides, 1):
           lines.append('## Slide %d' % i)
           for sh in sl.shapes:
               if sh.has_text_frame:
                   for pa in sh.text_frame.paragraphs:
                       t = ''.join(r.text for r in pa.runs).strip()
                       if t: lines.append(t)
               if getattr(sh, 'has_table', False):
                   for row in sh.table.rows:
                       lines.append('| ' + ' | '.join(c.text.strip().replace(chr(10),' ') for c in row.cells) + ' |')
       body = '\n\n'.join(lines)
   else:
       raise SystemExit('Unsupported extension: ' + ext)

   open(out, 'w', encoding='utf-8').write(body)
   print(out)
   "
   ```
   Use the printed `_converted.md` path for all subsequent steps. If even python-docx /
   python-pptx / Pillow are missing, fall back to `pandoc "<input>" -o "<stem>_pandoc.md"`
   (DOCX/PPTX only, no OCR); if that is also unavailable, abort:
   *"Cannot convert `<ext>` — install `marker-pdf` + `python-docx` + `python-pptx` + `Pillow`, or `pandoc`. See `plugins/kg-enhance/docs/marker-setup.md`."*

   **At scale (whole-directory ingest):** loading Marker models per file is wasteful
   (~50 s each). Use a batch driver that loads models once and loops with a resumable
   manifest — reference implementation bundled at `plugins/kg-enhance/scripts/brain_batch_ingest.py`
   (copy to your engagement `scripts/`; staged converted md under `.brain/_ingest_staging/`). Note Arabic OCR is slow (~20–90 s/page); a 90-file
   PDF corpus can run for hours — run it in the background.

   **Arabic PDF note:** OCR requires Marker. Pandoc cannot read PDFs; without Marker, abort
   for `.pdf` rather than emit a corrupt text layer.

   Log the converter used in the Step 11 summary output.

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
      Source: <original_path>  →  Converter: <Marker (force_ocr) | python-docx | python-pptx | PIL→Marker | pandoc | direct>
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

## Worked examples

**English DOCX (direct):**
```
$ /omega:doc-ingest documents/AlNoor_AI_Strategy_Brief_v2.md

✓ Ingested DOC-7E3F9A2B11
  Source: documents/AlNoor_AI_Strategy_Brief_v2.md  →  Converter: direct
  Title: Al-Noor AI Strategy Brief  Version: 2.0
  Entities written: 27 (4 new)  →  .brain/02_Entities/DOC-7E3F9A2B11/
  Supersedes: DOC-4A7B2C1D09 (significance: medium — 18% lines changed)
  ⚠ 1 deliverable in progress references content that changed. Re-verify quality.
```

**Arabic PDF (Marker force_ocr):**
```
$ /omega:doc-ingest 01_Discovery/data_collected/client_brief_arabic.pdf

  Converting: client_brief_arabic.pdf → Marker (force_ocr=True, languages=ar,en)...
✓ Ingested DOC-3C8A1F5D22
  Source: client_brief_arabic.pdf  →  Converter: Marker (force_ocr)
  Title: ملخص استراتيجية الذكاء الاصطناعي  Version: 1.0
  Entities written: 19 (19 new)  →  .brain/02_Entities/DOC-3C8A1F5D22/
  Supersedes: none
```

**Client DOCX received mid-engagement:**
```
$ /omega:doc-ingest 01_Discovery/data_collected/RFP_Phase2.docx

  Converting: RFP_Phase2.docx → Marker (languages=ar,en)...
✓ Ingested DOC-9B2E7C4F31
  Source: RFP_Phase2.docx  →  Converter: Marker
  Title: Phase 2 RFP — Digital Transformation  Version: 2.1
  Entities written: 34 (11 new)  →  .brain/02_Entities/DOC-9B2E7C4F31/
  Supersedes: DOC-1A4D8E2C07 (significance: high — 41% lines changed)
  ⚠ 3 deliverables in progress reference content that changed. Re-verify quality.

Next steps:
  /omega:version-diff "Phase 2 RFP — Digital Transformation"
  /omega:verify-quality 05_Deliverables_Final/D003_Roadmap.md
  /omega:fact-check 05_Deliverables_Final/D003_Roadmap.md
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
- The `cps-cyber/pii-scan.js` hook runs on the ingested document — fails if SSN/passport/IBAN patterns are not in entity context.
- Person entities also trigger `cps-people/pii-people.js` — fails if role isn't named.
- The `cps-risk/control-check.js` hook validates any extracted Risk entities have a `control_mapping` field.

## Related

- `/omega:version-diff <title>` — show change narrative for superseded documents
- `/omega:alias-merge` — bilingual (EN/AR) entity duplicate resolution
- `/omega:fact-check <deliverable>` — adversarially verify claims against indexed entities
- `/omega:gbrain query <q>` — hybrid retrieval over project + central
- Skill: `plugins/kg-enhance/skills/kg-enhance/SKILL.md`
- Rule: `plugins/kg-enhance/rules/document-ingestion.md`
