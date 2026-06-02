---
description: Reconstruct how a theme, recommendation, or client position evolved across the engagement timeline — first appearance, framing shifts, turning points, current standing
allowed-tools: Read, Bash, Grep, Glob
argument-hint: "<theme or recommendation to trace>"
---

# /omega:trace

Reconstruct the **chronological arc** of an idea across the whole engagement: when a theme, finding, recommendation, or client position first appeared, how its framing shifted, where it turned (you changed direction, added nuance, or dropped it), and where it stands now. Answers the question every consultant faces mid-engagement: *"How did we actually get to this recommendation?"*

This is the **theme-level** companion to `/omega:version-diff`. `version-diff` traces a single *document's* version chain; `trace` follows an *idea* as it moves across interviews, findings, meetings, instincts, and deliverable drafts — sources `version-diff` never touches.

## When to use

- Before writing a recommendation, to show the evidence trail that led to it
- When a client asks "why are we recommending this?" and you need the provenance
- During handoff, so the next consultant sees how thinking evolved, not just the conclusion
- When you suspect a position drifted without anyone deciding it should

## Arguments

- **`<theme>`** (required) — the idea to trace. Free text: a recommendation (`"vendor consolidation"`), a finding (`"data quality gaps"`), a client position (`"appetite for cloud migration"`), or a risk (`"regulatory exposure"`). Substring and synonym matching is expected — be generous when searching.

## Steps

This command is **read-only**. Never write to `.brain/` or any engagement folder.

1. **Expand the search terms.** From the argument, derive 3–6 synonyms / related phrasings and canonical entity names. If `assets/seed-entity-aliases.json` is present, pull aliases (incl. EN/AR) for any matched entity so a bilingual engagement traces across both languages. If GBrain is installed, prefer `gbrain search "<theme + synonyms>"` for BM25-ranked recall before falling back to grep.

2. **Gather dated mentions across all engagement surfaces.** Search each source and capture, per hit, the **date**, the **source path**, and a short **verbatim excerpt**:
   - `.brain/01_Instincts/*.md` — instincts carry timestamps; the richest signal
   - `.brain/02_Entities/**/*.md` — entity pages and `DOC-*/_index.md` (`received_at` frontmatter dates the source)
   - `.brain/04_Versions/*.md` — diff narratives (when the theme changed inside a document)
   - `01_Discovery/interview_notes/`, `01_Discovery/current_state_analysis/`
   - `02_Analysis/findings/`, `02_Analysis/gap_analysis/`, `02_Analysis/benchmarking/`
   - `03_Recommendations/` (options_analysis, business_case, roadmap)
   - `06_Client_Communications/meeting_notes/`, `status_reports/`
   - `05_Deliverables_Final/` (current drafts — where the theme landed)

   Example sweep:
   ```bash
   grep -rEin "vendor consolidat|single vendor|rationali[sz]e suppliers" \
     .brain/01_Instincts .brain/02_Entities .brain/04_Versions \
     01_Discovery 02_Analysis 03_Recommendations 06_Client_Communications 05_Deliverables_Final
   ```

3. **Order chronologically** (oldest → newest). Date each hit from frontmatter (`date`, `received_at`, `captured_at`, `meeting_date`) or, failing that, the file mtime — and **say which** you used so the timeline's confidence is legible.

4. **Detect turning points.** Walk the ordered hits and flag where the *framing* changed, not just where the theme recurred:
   - **Introduced** — first appearance, and from which source (interview? client doc? our analysis?)
   - **Reframed** — the language or scope shifted (quote both the before and after)
   - **Reinforced** — new evidence strengthened it
   - **Contested** — a source pushed back or contradicted it
   - **Dropped / dormant** — it stops appearing after a date (call this out — silent disappearance is itself a finding)

5. **Map the link graph.** List other themes/entities this one co-occurs with or wikilinks to (`[[...]]`), so the reader sees what it connects to.

6. **State current standing.** Based on the most recent mentions and any deliverable in `05_Deliverables_Final/`, where does the idea stand now — adopted, still open, abandoned? Note if the latest mention predates recent activity (it may be stale).

## Output

Render as a plain-text timeline (renders cleanly in both terminal and Obsidian — avoid wide tables):

```
## Trace: "<theme>"

  2026-04-12  [introduced]   01_Discovery/interview_notes/cfo-interview.md
              "We're bleeding margin across 14 overlapping SaaS contracts."

  2026-04-21  [reinforced]   .brain/01_Instincts/2026-04-21-saas-sprawl.md
              "Pattern: clients underestimate license sprawl by ~30%."

  2026-05-03  [reframed]     02_Analysis/findings/vendor-spend.md
              was: "consolidate vendors"  →  now: "consolidate the top-5 spend
              categories only — the long tail isn't worth the switching cost."

  2026-05-19  [contested]    06_Client_Communications/meeting_notes/steerco.md
              "IT pushed back: 3 of the 5 are locked in multi-year contracts."

  2026-05-28  [current]      05_Deliverables_Final/D004_Cost_Roadmap.md (DRAFT)
              Recommendation now scoped to 2 categories, phased over 3 quarters.

Connected themes:  [[shadow IT]]  [[procurement governance]]  [[FY27 opex target]]
Dates from:  frontmatter (6 hits), file mtime (1 hit — flagged)

## Reading
The idea narrowed twice — from "all vendors" to "top-5" to "2 categories" —
each time in response to a constraint (switching cost, then contract lock-in).
The current draft reflects the narrowed scope. No mention after 2026-05-28.
```

Close with a 2–4 line **Reading**: the shape of the arc in plain language (where it narrowed, reversed, or stalled), drawn only from the quoted evidence.

## Quality criteria

- Every timeline entry has a **date, a source path, and a verbatim quote** — the consultant's own words, never paraphrased into the quote slot.
- Turning points distinguish *reframing* from mere *repetition* — a list of "mentioned here, here, here" is not a trace.
- A theme that **disappears** is reported, not silently omitted.
- Date provenance (frontmatter vs mtime) is stated so the reader can weight the timeline.
- Read-only — no writes anywhere.
- If fewer than 2 dated mentions exist, say so plainly ("not enough history to trace — the engagement brain has only N mention(s)") rather than manufacturing an arc.

## Output destination

Read-only — prints to stdout. To persist for a handoff or a "why we recommended this" appendix, copy into `06_Client_Communications/trace_<theme-slug>_<date>.md`.

## Related

- `/omega:version-diff <doc-title>` — the document-level companion (single doc's version chain)
- `/omega:emerge` — surfaces themes you *haven't* traced or written up yet
- `/omega:gbrain query "history of <theme>"` — interactive hybrid retrieval over the same sources
