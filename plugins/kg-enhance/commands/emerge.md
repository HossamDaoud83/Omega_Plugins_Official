---
description: Engagement-wide gap finder — surface recurring themes, implied conclusions, and open questions the evidence supports but no deliverable has captured yet
allowed-tools: Read, Bash, Grep, Glob
argument-hint: "[optional: focus area, e.g. 'risks' or 'cost']"
---

# /omega:emerge

Scan the entire engagement brain for what the evidence **implies but no deliverable states**: themes that recur across interviews, documents, and meetings without a home; conclusions the findings point toward but nobody wrote down; patterns sitting across separate sources that haven't been connected; and questions the engagement keeps circling without answering.

This is the **engagement-wide** companion to `/omega:interview-synthesis`. interview-synthesis codes themes *within transcripts*; `emerge` scans *every* surface — interviews, ingested client docs, meeting notes, instincts, findings — and cross-checks against the deliverables tracker to find what's evidenced but **unaddressed**. It answers: *"What does this engagement already know that we haven't said yet?"*

## When to use

- Mid-engagement, after discovery and several ingests, when the brain has volume but the synthesis hasn't crystallized
- Before a synthesis workshop or steerco, to seed the "what are we actually finding" conversation
- When you sense the deliverables under-use the evidence you've gathered
- A consulting engagement front-loads its brain (kickoff docs, interviews) — so `emerge` becomes useful in week 1–2, far faster than a personal vault

## Arguments

- **`<focus area>`** (optional) — narrow the scan to a domain (`"risk"`, `"cost"`, `"technology"`, `"people"`). If omitted, scans everything.

## Steps

This command is **read-only**. Never write to `.brain/` or any engagement folder.

1. **Inventory the evidence base.** Enumerate the sources to scan (filter by focus area if given):
   - `.brain/01_Instincts/*.md`, `.brain/02_Entities/**/*.md`, `.brain/05_Risks/*.md`
   - `01_Discovery/interview_notes/`, `01_Discovery/current_state_analysis/`, `01_Discovery/extracted_data/`
   - `02_Analysis/findings/`, `02_Analysis/gap_analysis/`, `02_Analysis/benchmarking/`
   - `06_Client_Communications/meeting_notes/`
   If GBrain is installed, use `gbrain search`/`gbrain query` to cluster related passages faster than raw grep.

2. **Inventory what's already been said.** Read `00_Engagement_Management/deliverables_tracker.json` and list every deliverable (title + status) and the topics each covers. Also list the headings present in `05_Deliverables_Final/` and `03_Recommendations/`. This is the "already addressed" set — the baseline `emerge` measures gaps *against*.

3. **Detect the four signal types.** Scan the evidence base for:
   - **Recurring themes (3+ sources, no deliverable)** — a topic mentioned across ≥3 distinct source files that maps to **no** deliverable or recommendation heading. Count distinct sources, not distinct mentions in one file.
   - **Implied conclusions** — where multiple findings/instincts point the same direction but no document states the conclusion (e.g. three interviews complain about handoff delays + a finding shows queue backlog ⇒ implied "process bottleneck at handoff" that no deliverable names).
   - **Unconnected patterns** — the same phenomenon appearing in different domains, never linked (e.g. "latency" raised in IT *and* in customer-experience notes, never joined).
   - **Circling questions** — questions raised in meetings/interviews that recur but have no recorded answer or decision.

4. **Grade and evidence every finding.** For each, attach:
   - **Evidence**: the specific source files + a short quote from each (so the consultant can verify)
   - **Count**: how many distinct sources
   - **Confidence**: `strong signal` (3+ independent sources, consistent) / `weak hint` (2 sources or mixed)
   - **Says vs infers**: separate, explicitly, *what the brain literally records* from *what you are inferring from it*. Keep these in different labeled blocks — never blur them.

5. **Rank** by (confidence × consulting impact) and present the strongest first.

## Output

```
## Emerge — unaddressed signals  (focus: <area or "all">)

Evidence base: 38 sources scanned  ·  Already addressed: 6 deliverables, 4 recommendations

### 1. [strong signal · 5 sources] Handoff bottleneck between Sales and Delivery
   Brain says:
     - 01_Discovery/interview_notes/sales-lead.md  "deals sit for days after close"
     - 01_Discovery/interview_notes/delivery-mgr.md "we find out late, scramble to staff"
     - 02_Analysis/findings/cycle-time.md          "12-day median close→kickoff gap"
     - .brain/01_Instincts/2026-05-02-queue.md      "backlog concentrates at handoff"
     - 06_Client_Communications/meeting_notes/steerco.md "raised again, no owner"
   I infer:  a process-design gap at the Sales→Delivery boundary.
   Gap:      no deliverable or recommendation addresses handoff. Closest is
             D004 (Cost Roadmap) which touches staffing but not the handoff.

### 2. [weak hint · 2 sources] "Latency" links IT and CX — never connected
   Brain says:
     - 02_Analysis/findings/infra-review.md  "p95 API latency 1.8s"
     - 01_Discovery/interview_notes/cx-head.md "customers complain it 'feels slow'"
   I infer:  the CX complaint may be downstream of the infra latency — worth one query.
   Gap:      treated as two separate issues in two workstreams.

### Circling questions (raised repeatedly, no recorded answer)
   - "Who owns data quality?" — meeting_notes ×3, never decided
   - "Build vs buy for the portal?" — raised kickoff + steerco, no options analysis
```

End with a one-line honest scope note: how many sources were scanned and any that were skipped (e.g. binary/un-ingested files), so the coverage isn't overstated.

## Quality criteria

- **Says vs infers is never blurred** — every finding separates literal brain content (quoted, sourced) from your inference. This is the command's whole value; collapsing them makes it worthless.
- A "recurring theme" requires **3+ distinct source files**, not 3 mentions in one note.
- Every finding cross-checks the deliverables tracker — a theme already covered by a deliverable is **not** a gap and must be excluded (or noted as "partially addressed by Dxxx").
- Confidence labels are honest: `strong` only with multiple independent, consistent sources.
- Read-only — no writes anywhere.
- On a thin brain (< ~10 sources), say so: "too little material for reliable emergence — re-run after more discovery/ingestion" rather than over-reading noise.

## Output destination

Read-only — prints to stdout. To carry findings into synthesis, copy into `02_Analysis/findings/emergent_signals_<date>.md` and convert confirmed items into deliverables via `/omega:select-deliverable`.

## Related

- `/omega:interview-synthesis` — code themes *within* transcripts (this scans *across all* sources)
- `/omega:trace <theme>` — once `emerge` surfaces a theme, trace its history
- `/omega:select-deliverable` — promote a confirmed emergent signal into a planned deliverable
- `/omega:gbrain query "<focus area>"` — interactive hybrid retrieval to dig into a signal
