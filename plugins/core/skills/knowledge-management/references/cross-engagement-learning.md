# Cross-Engagement Learning System

## Purpose

Capture, aggregate, and surface learnings that span multiple engagements to:
- Identify patterns across clients and industries
- Improve methodologies based on repeated experience
- Prevent repeated mistakes
- Accelerate future engagements

---

## Learning Categories

### 1. Methodology Learnings
Insights about how Omega approaches work in practice

**Capture when:**
- A framework works better than expected
- A framework needs modification
- New approach discovered
- Standard approach fails

**Example:**
```yaml
type: methodology_learning
framework: Digital Maturity Assessment
learning: "Adding a 'quick wins' identification step in Discovery accelerates client buy-in"
evidence_count: 4  # Number of engagements confirming this
first_observed: 2024-03
last_confirmed: 2024-11
confidence: high
action: Update Digital Maturity Assessment framework with Step 2b
```

---

### 2. Industry Patterns
Recurring themes within specific industries

**Capture when:**
- Same challenge appears across clients
- Industry-specific solution proves effective
- Regulatory pattern identified
- Technology trend confirmed

**Example:**
```yaml
type: industry_pattern
industry: healthcare
pattern: "Legacy HIS integration is the #1 blocker for digital transformation"
frequency: "Observed in 6 of 8 healthcare engagements"
typical_solution: "Phased migration with API abstraction layer"
related_engagements: [anonymized references]
```

---

### 3. Client Dynamics
Patterns in client behavior and engagement dynamics

**Capture when:**
- Stakeholder pattern repeats
- Change resistance pattern identified
- Communication approach proves effective
- Governance structure impacts success

**Example:**
```yaml
type: client_dynamics
pattern: "IT-Business alignment gaps"
observation: "Separate IT and Business sponsors lead to scope conflicts"
mitigation: "Joint steering committee with shared KPIs from Week 1"
success_rate: "85% when mitigation applied"
```

---

### 4. Delivery Learnings
Operational insights about engagement execution

**Capture when:**
- Timeline estimate proves consistently off
- Resource model needs adjustment
- Quality issue recurs
- Process improvement identified

**Example:**
```yaml
type: delivery_learning
area: timeline
learning: "Discovery phase takes 20% longer when client data quality is poor"
indicator: "Request data catalog in pre-engagement"
adjustment: "Add 1 week buffer if no data catalog exists"
```

---

## Aggregation Process

### Automatic Aggregation

At each engagement close:
1. Extract learnings from lessons_learned.md
2. Match to existing patterns in knowledge base
3. Increment evidence count for confirmed patterns
4. Flag new patterns for review

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ CROSS-ENGAGEMENT LEARNING AGGREGATION                                       │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  Engagement 1 ─┐                                                            │
│                │                                                            │
│  Engagement 2 ─┼──▶ Pattern Recognition ──▶ Knowledge Base                  │
│                │         Engine                  │                          │
│  Engagement N ─┘                                 │                          │
│                                                  ▼                          │
│                                           ┌─────────────┐                   │
│                                           │ Aggregated  │                   │
│                                           │  Patterns   │                   │
│                                           └─────────────┘                   │
│                                                  │                          │
│                                                  ▼                          │
│                                           Future Engagements                │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

### Pattern Recognition Triggers

**New Pattern (Threshold: 2)**
```
When same learning appears in 2 engagements:
  → Create pattern entry
  → Tag as "emerging"
  → Add to watch list
```

**Confirmed Pattern (Threshold: 4)**
```
When pattern confirmed in 4 engagements:
  → Upgrade to "confirmed"
  → Update related frameworks
  → Add to pre-engagement checklist
```

**Best Practice (Threshold: 6)**
```
When pattern has 6+ confirmations with high success:
  → Promote to best practice
  → Add to training materials
  → Update methodologies
```

---

## Surfacing Learnings

### At Engagement Start

Query patterns for:
- Matching industry
- Matching service line
- Similar engagement size
- Related challenges

```
═══════════════════════════════════════════════════════════════
RELEVANT CROSS-ENGAGEMENT LEARNINGS
═══════════════════════════════════════════════════════════════

Based on: Healthcare | Digital Transformation | Mid-market

CONFIRMED PATTERNS (High Confidence)
───────────────────────────────────────────────────────────────
1. Legacy HIS Integration Challenges
   Evidence: 6 engagements | Success Rate: 78%
   Recommendation: Plan API abstraction early
   
2. Clinical Staff Change Resistance
   Evidence: 5 engagements | Success Rate: 85%
   Recommendation: Include clinical champions from Day 1

EMERGING PATTERNS (Monitor)
───────────────────────────────────────────────────────────────
1. Data Governance Gaps
   Evidence: 2 engagements | Confidence: Medium
   Watch for: No data catalog, unclear ownership

DELIVERY INSIGHTS
───────────────────────────────────────────────────────────────
• Discovery typically takes 6-8 weeks (not 4)
• Expect 2-3 steering committee reschedules
• Budget 20% buffer for data quality issues

═══════════════════════════════════════════════════════════════
```

### During Analysis

Surface relevant patterns when analyzing:
- Gap analysis results
- Stakeholder feedback
- Risk identification

### At Recommendations

Show what worked in similar situations:
- Solution approaches
- Implementation sequences
- Change management tactics

---

## Learning Maintenance

### Quarterly Review
- Review all emerging patterns
- Validate confirmed patterns still hold
- Archive outdated learnings
- Update confidence scores

### Annual Refresh
- Full pattern validation
- Methodology updates based on learnings
- Training material updates
- Framework revisions

---

## Integration Points

### With Lessons Learned Command
```
/project:lessons-learned

→ Generates engagement learnings
→ Matches to existing patterns
→ Updates pattern evidence
→ Creates new pattern entries
→ Flags for cross-engagement review
```

### With KB Search Command
```
/project:kb-search query="healthcare digital transformation"

→ Returns standard results
→ ALSO returns matching patterns
→ Surfaces relevant cross-engagement insights
```

### With Pre-Session Hook
```
At session start:

→ Load engagement context
→ Query patterns for context
→ Surface relevant insights
→ Add to session brief
```
