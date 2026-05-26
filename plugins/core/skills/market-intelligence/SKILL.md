---
name: market-intelligence
description: Source triangulation, primary vs secondary research, competitive intelligence ethics, source ranking.
---

# Market Intelligence

## When to use
For market sizing, competitive positioning, M&A target screening, regulatory horizon scanning, or any "what's happening in this market" question.

## Source hierarchy (most → least credible)

1. **Primary research** (interviews, surveys you conduct) — fresh, defensible, expensive
2. **Regulator / government data** (filings, gazettes, statistics offices) — authoritative, often lagged
3. **Industry association data** (trade groups, standards bodies) — domain-specific, sometimes biased
4. **Tier-1 analyst reports** (Gartner, IDC, Forrester, Bain reports) — pricey, paywalled, biased toward sponsors
5. **Public company filings** (10-K, annual reports, investor decks) — audited financials
6. **Trade press** (Reuters, Bloomberg, FT, sector-specific outlets) — current, varying quality
7. **Vendor / consultant content** (white papers, blog posts) — useful for vocabulary, not numbers
8. **Wikipedia / aggregator sites** — entry point only, never citation

## Triangulation

A claim becomes credible when supported by ≥3 independent sources. "Independent" means:
- Different methodologies (survey + filings + interview)
- Different organizations (no co-authorship)
- Different timestamps (cross-validates "is this still true")

If you only have one source, FLAG it as single-source.

## Top-down vs bottom-up market sizing

- **Top-down**: Total industry → segments → addressable. Quick, lower precision, prone to overcounting.
- **Bottom-up**: Customers × ARPU. Slower, higher precision, depends on customer count quality.
- **Best practice**: Do both. Triangulate. If they're >30% apart, dig in — usually one assumption is wrong.

## Competitive intelligence ethics

PERMITTED:
- Public filings, investor calls, press releases
- Patent searches
- Job postings (signals priorities and capacity)
- Conference talks, published case studies
- Buying / using competitor's product as a customer

PROHIBITED:
- Misrepresenting identity to extract info
- Encouraging competitor employees to breach NDA
- Bribing for confidential data
- Industrial espionage of any kind
- Hacking, social engineering against competitor staff

When in doubt, document the source path. If you can't say where it came from in writing, you shouldn't use it.

## Source ranking template

For every key claim:

| Claim | Source | Type | Date | Confidence | Triangulation |
|---|---|---|---|---|---|
| TAM = $4.2B | Gartner Q3 2025 | Tier-1 analyst | 2025-09 | Med | Cross-check w/ IDC |
| Top 3 competitors hold 67% share | 10-K filings (3 cos) | Public filings | 2024 FY | High | Triangulated |
| Avg deal size = $250K | One sales VP interview | Primary | 2026-04 | Low | NEED MORE INTERVIEWS |

## Pricing of paid sources

- Gartner / IDC report: $3-8K per report
- Statista: $200-500 per chart-set
- Crunchbase Pro: $50-100/mo per seat
- Pitchbook: $$$ enterprise (deal teams only)
- Capital IQ / Refinitiv: $$$ enterprise
- Always check what client already has access to before purchasing

## Quality bar

- Every numeric claim has a source citation (footnote or inline)
- Single-source claims explicitly labeled
- Claims older than 18 months flagged as "may be stale"
- Citations include source name + date + URL or doc ID
- Confidential sources noted as "interview, role only" — not name

## Common failure modes

- Aggregator sites cited (use the underlying source)
- Vendor content cited as independent research
- Cherry-picking the source that supports the desired conclusion
- Treating "everyone knows" as a citation
- Using a 2019 number in a 2026 deliverable without flagging

## Integration

- Pair with `omega-ai-research` plugin for AI-assisted source triangulation
- Pair with `omega-ai-regs` for regulatory horizon scanning specifically
- Outputs feed market sizing in `omega-str:market` and `omega-finance` deliverables
