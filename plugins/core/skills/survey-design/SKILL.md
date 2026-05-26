---
name: survey-design
description: Design surveys with valid question construction, scale choices, sampling, and analysis plan upfront.
---

# Survey Design

## When to use
When the engagement needs quantitative input from a stakeholder population — staff sentiment, customer NPS, maturity self-assessment, market sizing inputs.

## Survey types

| Type | Best for | Typical N | Sample method |
|---|---|---|---|
| NPS | Loyalty proxy | 100+ per segment | Census or random |
| CSAT | Single-touchpoint satisfaction | 30+ per touchpoint | All recent users |
| Pulse | Recurring sentiment | 50+ | Census |
| Maturity self-assessment | Capability scoring | One per role × org | Stratified |
| Conjoint | Trade-off preferences | 200+ | Targeted panel |
| Market sizing input | Market share, willingness-to-pay | Power-calculated | Random |

## Question design rules

1. **One concept per question.** "How satisfied are you with the speed and quality of support?" is broken — split it.
2. **No leading language.** "Don't you agree that…" → biases responses.
3. **No double negatives.** "Do you disagree that we should not…" → confuses.
4. **Match the scale to the construct.** Don't use a 1-5 scale for binary questions.
5. **Anchor extremes consistently.** Always 1=worst → 5=best, never flipped.
6. **Avoid "agree/disagree" on factual questions.** Ask the fact directly.
7. **Allow "don't know" / "not applicable".** Forced answers contaminate data.

## Scales

| Scale | Use when |
|---|---|
| Likert 1-5 | Attitude / agreement |
| Likert 1-7 | When more sensitivity is needed |
| Slider 0-100 | Magnitude / probability |
| Binary Yes/No | Factual or single-decision |
| NPS 0-10 | Loyalty (proper NPS construction only) |
| Ranking | Forced trade-off among ≤7 items |
| Constant sum | Allocation (e.g., 100 points across categories) |

## Sample size shortcuts

| Population | 95% conf, ±5% margin | 95% conf, ±10% margin |
|---|---|---|
| 100 | 80 | 49 |
| 500 | 217 | 81 |
| 1,000 | 278 | 88 |
| 10,000 | 370 | 96 |
| ∞ | 384 | 96 |

For small populations, aim census.

## Analysis plan (write BEFORE collecting)

- What's the headline metric (e.g., NPS, % top-2-box)?
- What segments will we cut by (role, tenure, geography)?
- What's the minimum cell size for a reportable cut (typically n≥30)?
- How will we handle low response rates (transparency, weighting, both)?
- What constitutes a "significant" finding (effect size, not just p-value)?

## Response rate boosters

- Sponsor email from a senior leader 24 hrs before launch
- Reminder at day 3 + day 6
- Estimated time disclosed upfront ("8 minutes")
- Mobile-friendly (test on phone)
- Explicit anonymity statement (and honor it)
- Show progress bar
- Close survey after the planned window — don't extend "to get more"

## Bias watchlist

- **Selection bias:** Who didn't take it, and how do they differ?
- **Acquiescence bias:** People say yes more than no — balance question polarity
- **Social desirability:** Anonymous + neutral framing reduces this
- **Response order:** Randomize multi-choice options
- **Sponsor effect:** Surveys "from the CEO" get inflated positive scores

## Quality bar

- Pilot test with 5-10 people; revise; THEN launch
- Sample plan documented before launch
- Analysis plan documented before launch
- Response rate disclosed in the report
- Cuts below cell-size threshold marked "indicative only"

## Integration

- Outputs feed `interview-synthesis` skill if open-text questions are present
- Survey data lands in engagement `.brain/survey_data/` with codebook
- Findings synthesized via `executive-storytelling` for the deliverable
