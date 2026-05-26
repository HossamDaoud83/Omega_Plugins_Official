---
name: omega-consultation-budget
description: Calculate Omega consulting fees using 5 methods (T&M, Value-Based, Fixed, Comparable, Effort-Based)
---

# Omega-Consultation-Budget

Calculate Omega consulting engagement fees using multiple methodologies and return averaged recommendations.

## Skill Metadata

- **Name:** Omega-Consultation-Budget
- **Command:** `/omega-budget`
- **Category:** Financial Planning
- **Version:** 1.0
- **Author:** Omega Business Consulting

## What This Skill Does

1. Reads engagement data (deliverables, project value, timeline, complexity)
2. Calculates fees using 5 different methodologies
3. Applies risk and complexity adjustments
4. Returns 3 averaged fee recommendations (Low/Base/High)
5. Generates client-ready fee proposal summary

## When to Use

- At engagement setup to establish commercial terms
- When client asks "How much will this cost?"
- Before sending proposal to client
- When reviewing/adjusting engagement scope

## Instructions for Claude

When `/omega-budget` is invoked:

### Step 1: Load Engagement Data

Read these files to extract inputs:

```
project.json                                    → Project value, timeline, service line
00_Engagement_Management/deliverables_tracker.json → Deliverables list, complexity
00_Engagement_Management/scope_document.md      → Scope details
00_Engagement_Management/risk_register.md       → Risk factors
```

### Step 2: Extract Key Variables

| Variable | Source | Example |
|----------|--------|---------|
| `PROJECT_VALUE` | project.json → project_details.project_value | $55,000,000 |
| `DURATION_WEEKS` | project.json → timeline.duration_weeks | 8 |
| `DELIVERABLE_COUNT` | deliverables_tracker.json → total_deliverables | 7 |
| `SERVICE_LINE` | project.json → engagement.service_line | MAR |
| `INDUSTRY` | project.json → engagement.industry | Maritime |
| `RISK_COUNT_CRITICAL` | risk_register.md → Critical count | 6 |
| `RISK_COUNT_HIGH` | risk_register.md → High count | 11 |
| `CLIENT_SIZE` | project.json → client.size | Large Enterprise |
| `ENGAGEMENT_TYPE` | project.json → engagement.engagement_type | BOT Advisory |

### Step 3: Apply 5 Calculation Methods

---

#### METHOD 1: Time & Materials (T&M)

**Formula:**
```
T&M_FEE = Σ (Hours_per_Role × Hourly_Rate) × (1 + Overhead%) + Expenses
```

**Hourly Rates by Role (USD - MENA Market):**

| Role | Low | Standard | Premium |
|------|-----|----------|---------|
| Partner/Director | $200 | $275 | $350 |
| Senior Consultant | $140 | $175 | $220 |
| Consultant | $100 | $125 | $160 |
| Analyst | $70 | $90 | $115 |
| Subject Matter Expert | $200 | $275 | $350 |

**Hours Estimation by Deliverable Type:**

| Deliverable Type | Partner | Sr. Cons | Consultant | Analyst | SME | Total |
|------------------|---------|----------|------------|---------|-----|-------|
| Document Analysis | 2 | 4 | 8 | 16 | 0 | 30 |
| Gap Analysis | 1 | 2 | 4 | 4 | 0 | 11 |
| Formal Letter/Report | 1 | 2 | 2 | 2 | 0 | 7 |
| Financial Model | 8 | 20 | 30 | 40 | 16 | 114 |
| Risk Assessment | 4 | 12 | 16 | 20 | 8 | 60 |
| Strategic Recommendation | 6 | 10 | 8 | 8 | 4 | 36 |
| Bid/Proposal Preparation | 8 | 16 | 24 | 32 | 8 | 88 |
| Process Design | 4 | 10 | 16 | 12 | 4 | 46 |
| Training/Workshop | 4 | 8 | 8 | 4 | 4 | 28 |
| Implementation Support | 6 | 16 | 24 | 20 | 8 | 74 |

**Overhead & Margin:** 20-30%
**Expenses:** 5-10% of labor cost

**Calculation:**
```
1. Map each deliverable to type
2. Sum hours by role across all deliverables
3. Multiply hours × rate for each role
4. Add overhead (25%) and expenses (7%)
```

---

#### METHOD 2: Value-Based Pricing

**Formula:**
```
VALUE_FEE = PROJECT_VALUE × Fee_Percentage
```

**Fee Percentages by Service Type:**

| Service Type | Low % | Standard % | Premium % |
|--------------|-------|------------|-----------|
| Feasibility Study | 0.10% | 0.15% | 0.25% |
| Due Diligence | 0.15% | 0.25% | 0.40% |
| Transaction Advisory | 0.20% | 0.35% | 0.50% |
| Full Bid Support | 0.25% | 0.40% | 0.60% |
| Strategy Consulting | 0.05% | 0.10% | 0.15% |
| Implementation Support | 0.15% | 0.25% | 0.35% |
| ISO Certification | 0.02% | 0.04% | 0.06% |

**For BOT/PPP Advisory (combined services):**
- Feasibility + Bid Support = 0.35% - 0.85%

**Calculation:**
```
1. Identify service types in scope
2. Sum applicable percentages
3. Multiply by PROJECT_VALUE
4. Apply client size discount if applicable
```

---

#### METHOD 3: Fixed Fee Structure

**Formula:**
```
FIXED_FEE = Σ (Phase_Base_Fee × Complexity_Multiplier)
```

**Phase Base Fees (USD):**

| Phase | Small (<$10M) | Medium ($10-50M) | Large ($50-200M) | Mega (>$200M) |
|-------|---------------|------------------|------------------|---------------|
| Discovery | $8,000 | $15,000 | $25,000 | $40,000 |
| Analysis | $15,000 | $35,000 | $60,000 | $100,000 |
| Recommendations | $5,000 | $10,000 | $18,000 | $30,000 |
| Implementation Support | $10,000 | $20,000 | $35,000 | $60,000 |
| Bid Preparation | $8,000 | $20,000 | $35,000 | $55,000 |

**Complexity Multipliers:**

| Factor | Low (0.8) | Standard (1.0) | High (1.2) | Very High (1.5) |
|--------|-----------|----------------|------------|-----------------|
| Technical Complexity | Simple process | Standard | Multiple systems | Cutting-edge tech |
| Stakeholder Count | <5 | 5-10 | 10-20 | >20 |
| Data Availability | All available | Mostly available | Gaps exist | Major gaps |
| Timeline Pressure | Relaxed | Normal | Tight | Urgent |
| Geographic Scope | Single site | Regional | National | International |

**Calculation:**
```
1. Determine project size tier
2. Map engagement phases
3. Sum base fees for each phase
4. Calculate average complexity multiplier
5. Multiply total by complexity multiplier
```

---

#### METHOD 4: Comparable Engagement Pricing

**Formula:**
```
COMPARABLE_FEE = Average(Similar_Past_Engagements) × Adjustment_Factor
```

**Omega Reference Engagements (Anonymized):**

| Engagement Type | Project Value | Fee Charged | Fee % | Duration |
|-----------------|---------------|-------------|-------|----------|
| Port Feasibility (Egypt) | $45M | $72,000 | 0.16% | 10 weeks |
| Dry Port BOT (MENA) | $60M | $95,000 | 0.16% | 12 weeks |
| Container Terminal (Africa) | $120M | $180,000 | 0.15% | 16 weeks |
| Logistics Zone (Egypt) | $30M | $55,000 | 0.18% | 8 weeks |
| Maritime Strategy (Gulf) | $80M | $110,000 | 0.14% | 10 weeks |

**Adjustment Factors:**

| Factor | Multiplier Range |
|--------|------------------|
| Egypt vs Gulf market | 0.7 - 0.85 |
| New client vs repeat | 1.0 - 0.9 |
| Competitive bid situation | 0.85 - 0.95 |
| Sole source | 1.0 - 1.15 |
| Expedited timeline | 1.1 - 1.3 |
| Reduced scope | 0.7 - 0.9 |

**Calculation:**
```
1. Find 3-5 comparable engagements
2. Calculate average fee and fee %
3. Apply adjustment factors for current engagement
4. Return adjusted comparable fee
```

---

#### METHOD 5: Effort-Based Complexity Scoring

**Formula:**
```
EFFORT_FEE = Base_Rate × Effort_Points × Duration_Factor
```

**Base Rate:** $1,000 per effort point

**Effort Points by Deliverable:**

| Deliverable Type | Simple | Standard | Complex | Very Complex |
|------------------|--------|----------|---------|--------------|
| Analysis Report | 3 | 5 | 8 | 12 |
| Financial Model | 8 | 12 | 18 | 25 |
| Risk Assessment | 4 | 7 | 10 | 15 |
| Strategy Document | 5 | 8 | 12 | 18 |
| Implementation Plan | 6 | 10 | 15 | 22 |
| Training Program | 3 | 5 | 8 | 12 |
| Bid Package | 8 | 12 | 18 | 25 |

**Duration Factor:**
- < 4 weeks: 1.2 (rush premium)
- 4-8 weeks: 1.0 (standard)
- 8-12 weeks: 0.95 (efficiency)
- > 12 weeks: 0.9 (long-term discount)

**Calculation:**
```
1. Score each deliverable's complexity (1-4 scale)
2. Look up effort points
3. Sum total effort points
4. Apply duration factor
5. Multiply by base rate
```

---

### Step 4: Apply Risk Adjustment

**Risk Premium Formula:**
```
RISK_ADJUSTED_FEE = BASE_FEE × (1 + Risk_Premium%)
```

**Risk Premium Calculation:**
```
Risk_Premium% = (Critical_Risks × 2% + High_Risks × 1% + Medium_Risks × 0.5%)
                × Engagement_Risk_Factor

Engagement Risk Factors:
- New market/geography: +5%
- Government client: +3%
- Tight deadline: +5%
- Missing data/blockers: +3%
- Currency risk (EGP): +2%
```

---

### Step 5: Calculate Averages

**Three-Method Average (Primary):**
```
PRIMARY_AVG = (T&M_FEE + VALUE_FEE + FIXED_FEE) / 3
```

**Five-Method Average (Comprehensive):**
```
COMPREHENSIVE_AVG = (T&M_FEE + VALUE_FEE + FIXED_FEE + COMPARABLE_FEE + EFFORT_FEE) / 5
```

**Weighted Average (Recommended):**
```
WEIGHTED_AVG = (T&M_FEE × 0.30) + (VALUE_FEE × 0.20) + (FIXED_FEE × 0.25)
             + (COMPARABLE_FEE × 0.15) + (EFFORT_FEE × 0.10)
```

---

### Step 6: Generate Output

Display results in this format:

```
═══════════════════════════════════════════════════════════════════════════════
Omega CONSULTATION BUDGET ESTIMATE
Engagement: [ENGAGEMENT_NAME]
Client: [CLIENT_NAME]
Generated: [DATE]
═══════════════════════════════════════════════════════════════════════════════

INPUT PARAMETERS
─────────────────────────────────────────────────────────────────────────────
Project Value:        $[X]M
Duration:             [X] weeks
Deliverables:         [X] items
Service Line:         [CODE]
Risk Profile:         [X] Critical / [X] High / [X] Medium
Complexity Score:     [X]/10

═══════════════════════════════════════════════════════════════════════════════
METHOD RESULTS
═══════════════════════════════════════════════════════════════════════════════

┌──────────────────────────┬──────────────┬──────────────┬──────────────┐
│ Method                   │ Low          │ Base         │ High         │
├──────────────────────────┼──────────────┼──────────────┼──────────────┤
│ 1. Time & Materials      │ $[X]         │ $[X]         │ $[X]         │
│ 2. Value-Based (% of PV) │ $[X] ([X]%)  │ $[X] ([X]%)  │ $[X] ([X]%)  │
│ 3. Fixed Fee Structure   │ $[X]         │ $[X]         │ $[X]         │
│ 4. Comparable Pricing    │ $[X]         │ $[X]         │ $[X]         │
│ 5. Effort-Based Scoring  │ $[X]         │ $[X]         │ $[X]         │
├──────────────────────────┼──────────────┼──────────────┼──────────────┤
│ Risk Adjustment          │ +[X]%        │ +[X]%        │ +[X]%        │
├──────────────────────────┼──────────────┼──────────────┼──────────────┤
│ 3-METHOD AVERAGE         │ $[X]         │ $[X]         │ $[X]         │
│ 5-METHOD AVERAGE         │ $[X]         │ $[X]         │ $[X]         │
│ WEIGHTED AVERAGE         │ $[X]         │ $[X]         │ $[X]         │
└──────────────────────────┴──────────────┴──────────────┴──────────────┘

═══════════════════════════════════════════════════════════════════════════════
RECOMMENDED FEE
═══════════════════════════════════════════════════════════════════════════════

┌─────────────────────────────────────────────────────────────────────────────┐
│  CONSERVATIVE (Low):     $[X]                                               │
│  RECOMMENDED (Base):     $[X]  ◄── USE THIS FOR PROPOSAL                   │
│  PREMIUM (High):         $[X]                                               │
└─────────────────────────────────────────────────────────────────────────────┘

Fee as % of Project Value: [X]%
Effective Hourly Rate: $[X]/hr (based on [X] estimated hours)

═══════════════════════════════════════════════════════════════════════════════
PAYMENT STRUCTURE OPTIONS
═══════════════════════════════════════════════════════════════════════════════

OPTION A: Milestone-Based (Recommended)
─────────────────────────────────────────────────────────────────────────────
Phase 1: [Name]          [X]%    $[X]     Due: [Milestone]
Phase 2: [Name]          [X]%    $[X]     Due: [Milestone]
Phase 3: [Name]          [X]%    $[X]     Due: [Milestone]
Phase 4: [Name]          [X]%    $[X]     Due: [Milestone]
─────────────────────────────────────────────────────────────────────────────
TOTAL                    100%    $[X]

OPTION B: Fixed + Success Fee
─────────────────────────────────────────────────────────────────────────────
Base Fee:                        $[X]     (covers all deliverables)
Success Fee (if bid won):        [X]%     of contract value = $[X] potential
─────────────────────────────────────────────────────────────────────────────

OPTION C: Retainer + Time & Materials
─────────────────────────────────────────────────────────────────────────────
Monthly Retainer:                $[X]/month × [X] months = $[X]
T&M Cap:                         $[X] (not to exceed)
─────────────────────────────────────────────────────────────────────────────

═══════════════════════════════════════════════════════════════════════════════
ASSUMPTIONS & NOTES
═══════════════════════════════════════════════════════════════════════════════

• Estimate based on current scope; changes may require adjustment
• Rates are for MENA market; international rates +20-40%
• Excludes: travel expenses, third-party costs, taxes
• Valid for: 30 days from generation date
• Risk factors applied: [list factors]

═══════════════════════════════════════════════════════════════════════════════
```

---

## Additional Calculation Methods (For Reference)

### Method 6: ROI-Based Pricing (Advanced)

For engagements with measurable client ROI:
```
ROI_FEE = Expected_Client_Benefit × Share_Percentage

Example: If Omega helps client save $5M through optimization
Fee = $5M × 10% = $500,000
```

### Method 7: Daily Rate Model (Simple)

```
DAILY_FEE = Team_Size × Average_Daily_Rate × Working_Days

Average Daily Rates:
- Partner: $2,000-2,800/day
- Senior Consultant: $1,200-1,600/day
- Consultant: $800-1,200/day
- Analyst: $500-800/day
```

---

## Example Calculation

**Engagement:** Beni Suef Container Terminal BOT Advisory
**Project Value:** $55,000,000
**Deliverables:** 7
**Duration:** 8-10 weeks
**Risks:** 6 Critical, 11 High

```
Method 1 (T&M):        $69,775  (346 hrs × blended rate + overhead)
Method 2 (Value):      $82,500  ($55M × 0.15%)
Method 3 (Fixed):      $80,000  (Discovery $15K + Analysis $35K + Rec $10K + Bid $20K)
Method 4 (Comparable): $88,000  (Based on similar port feasibility)
Method 5 (Effort):     $76,000  (76 effort points × $1,000)

Risk Adjustment: +8% (6 critical × 2% - adjusted for Egypt)

3-Method Average:      $77,425 → Risk-adjusted: $83,619
5-Method Average:      $79,255 → Risk-adjusted: $85,595
Weighted Average:      $77,888 → Risk-adjusted: $84,119

RECOMMENDED: $80,000 - $85,000 (rounded)
```

---

## File Output

After calculation, optionally save results to:
```
00_Engagement_Management/budget_estimate_[DATE].json
```

---

## Related Skills

- `/dashboard` - View engagement status including budget
- `/update-tracker` - Update deliverables and budget status
- `/session-end` - Close session with budget notes
