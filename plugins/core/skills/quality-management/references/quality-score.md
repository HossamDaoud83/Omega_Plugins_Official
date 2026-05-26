# Quality Score Command

Calculates an objective quality score (0-100) for deliverables.

## Trigger
`/project:quality-score` or automatically during `/project:verify-quality`

---

## Scoring Framework

### Score Components

| Category | Weight | Max Points |
|----------|--------|------------|
| Content Quality | 40% | 40 |
| Structure & Format | 25% | 25 |
| Client Readiness | 20% | 20 |
| Technical Accuracy | 15% | 15 |
| **Total** | **100%** | **100** |

---

## Detailed Scoring Rubric

### Content Quality (40 points)

| Criterion | Points | Description |
|-----------|--------|-------------|
| Core Question Answered | 10 | Directly addresses the deliverable objective |
| Analysis Complete | 10 | All required dimensions covered |
| Recommendations Actionable | 10 | Clear, specific, implementable |
| Evidence-Based | 10 | Data and facts support conclusions |

**Scoring Guide:**
- 10: Exceeds expectations
- 8: Fully meets expectations
- 6: Mostly meets expectations
- 4: Partially meets expectations
- 2: Significant gaps
- 0: Not addressed

---

### Structure & Format (25 points)

| Criterion | Points | Description |
|-----------|--------|-------------|
| Executive Summary | 5 | Compelling, follows SCR format |
| Pyramid Structure | 5 | Answer first, details follow |
| Logical Flow | 5 | Clear progression, no gaps |
| Appropriate Detail | 5 | Right level for audience |
| Professional Formatting | 5 | Consistent, polished appearance |

**Scoring Guide:**
- 5: Excellent
- 4: Good
- 3: Acceptable
- 2: Needs improvement
- 1: Poor
- 0: Missing

---

### Client Readiness (20 points)

| Criterion | Points | Description |
|-----------|--------|-------------|
| Language Appropriate | 5 | No jargon without explanation |
| No Internal References | 5 | No confidential/internal content |
| Brand Compliant | 5 | Follows client/Omega guidelines |
| Error-Free | 5 | Spelling, grammar, formatting |

**Scoring Guide:**
- 5: Perfect
- 4: Minor issues (1-2)
- 3: Some issues (3-5)
- 2: Multiple issues (6-10)
- 1: Many issues (10+)
- 0: Not reviewed

---

### Technical Accuracy (15 points)

| Criterion | Points | Description |
|-----------|--------|-------------|
| Data Sources Cited | 5 | All data has attribution |
| Calculations Verified | 5 | Numbers are accurate |
| Methodology Sound | 5 | Approach is appropriate and documented |

**Scoring Guide:**
- 5: Verified, no issues
- 4: Minor concerns
- 3: Some uncertainty
- 2: Errors found
- 1: Major errors
- 0: Not verifiable

---

## Score Interpretation

| Score Range | Rating | Action |
|-------------|--------|--------|
| 90-100 | Excellent | Ready for delivery |
| 80-89 | Good | Minor polish needed |
| 70-79 | Acceptable | Review recommended |
| 60-69 | Needs Work | Revision required |
| 50-59 | Poor | Significant revision |
| Below 50 | Unacceptable | Major rework needed |

---

## Automatic Scoring Checks

The following can be auto-detected:

### Automated Checks (Approximate)
```
Content Quality:
- [ ] Word count meets minimum (based on deliverable type)
- [ ] Section headers present
- [ ] Recommendation section exists
- [ ] Data/evidence cited

Structure & Format:
- [ ] Executive summary present
- [ ] Pyramid structure (answer in first paragraph)
- [ ] Consistent heading levels
- [ ] Tables/visuals included where appropriate

Client Readiness:
- [ ] No placeholder text
- [ ] No internal references ([Omega], [Internal])
- [ ] Spell-check passed
- [ ] File named correctly

Technical Accuracy:
- [ ] Sources cited in footnotes/references
- [ ] Numbers formatted consistently
- [ ] Methodology section present
```

---

## Execution

### Score Single Deliverable
```
/project:quality-score deliverable=D001
```

**Output:**
```
═══════════════════════════════════════════════════════════════
QUALITY SCORE: D001 - Stakeholder Interview Summary
═══════════════════════════════════════════════════════════════

CONTENT QUALITY                                    [32/40]
├─ Core Question Answered         ████████░░  8/10
├─ Analysis Complete              ████████░░  8/10
├─ Recommendations Actionable     ████████░░  8/10
└─ Evidence-Based                 ████████░░  8/10

STRUCTURE & FORMAT                                 [22/25]
├─ Executive Summary              ████████░░  4/5
├─ Pyramid Structure              ██████████  5/5
├─ Logical Flow                   ████████░░  4/5
├─ Appropriate Detail             ████████░░  4/5
└─ Professional Formatting        ██████████  5/5

CLIENT READINESS                                   [18/20]
├─ Language Appropriate           ██████████  5/5
├─ No Internal References         ██████████  5/5
├─ Brand Compliant                ████████░░  4/5
└─ Error-Free                     ████████░░  4/5

TECHNICAL ACCURACY                                 [13/15]
├─ Data Sources Cited             ████████░░  4/5
├─ Calculations Verified          ████████░░  4/5
└─ Methodology Sound              ██████████  5/5

═══════════════════════════════════════════════════════════════
TOTAL SCORE: 85/100 (Good)
═══════════════════════════════════════════════════════════════

IMPROVEMENT AREAS:
1. Core Question - Add more specific response to primary objective
2. Brand Compliant - Update headers to match template
3. Data Sources - Add 2 missing citations

RECOMMENDATION: Ready for peer review with minor polish
═══════════════════════════════════════════════════════════════
```

---

### Score All Deliverables
```
/project:quality-score all=true
```

**Output:**
```
═══════════════════════════════════════════════════════════════
ENGAGEMENT QUALITY DASHBOARD
═══════════════════════════════════════════════════════════════

DELIVERABLE SCORES

│ ID    │ Title                          │ Score │ Rating     │
├───────┼────────────────────────────────┼───────┼────────────┤
│ D001  │ Stakeholder Interview Summary  │ 85    │ Good       │
│ D002  │ Current State Assessment       │ 78    │ Acceptable │
│ D003  │ Gap Analysis                   │ 92    │ Excellent  │

AVERAGE SCORE: 85 (Good)

QUALITY TRENDS:
├─ First Pass Approval Rate: 67%
├─ Average Revision Cycles: 0.8
└─ Deliverables Needing Revision: 1

═══════════════════════════════════════════════════════════════
```

---

## Integration

### Update Tracker
After scoring, update `deliverables_tracker.json`:
```json
{
  "id": "D001",
  "quality_score": 85,
  "score_breakdown": {
    "content": 32,
    "structure": 22,
    "client_readiness": 18,
    "technical": 13
  },
  "score_date": "2024-12-22"
}
```

### Update Engagement Metrics
```json
{
  "quality_metrics": {
    "average_quality_score": 85,
    "deliverables_requiring_revision": 1,
    "average_revision_cycles": 0.8,
    "first_pass_approval_rate": 0.67
  }
}
```
