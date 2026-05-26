# Verify Quality Command

## Purpose
Run quality gate verification before marking a deliverable complete.

## Execution Steps

### 1. Identify Deliverable
Get current deliverable from context or session_state.json

### 2. Load Acceptance Criteria
From deliverables_tracker.json:
- Get all acceptance_criteria items
- Get output_format requirement
- Get output_location

### 3. Check Each Criterion
For each acceptance criterion:
```
[ ] Criterion text
    Status: [Met | Partial | Not Met]
    Evidence: [Where this is demonstrated]
```

### 4. Validate Output Format
Check deliverable matches required format:
- Document type correct
- Structure complete
- Formatting professional

### 5. Validate Output Location
Confirm file exists in specified `output_location`

### 6. Run Service Line Quality Checks
Based on engagement service_line:

**Strategy (STR):**
- [ ] Market data sourced and cited
- [ ] Strategic options MECE
- [ ] Competitive analysis included
- [ ] Financial implications addressed

**Operations (OPS):**
- [ ] Baseline metrics documented
- [ ] Process maps validated
- [ ] ROI/savings calculated
- [ ] Implementation feasibility assessed

**Digital (DIG):**
- [ ] Maturity assessment complete
- [ ] Architecture reviewed
- [ ] Security/compliance addressed
- [ ] Integration points identified

**Finance (FIN):**
- [ ] Numbers reconciled
- [ ] Assumptions documented
- [ ] Sensitivity analysis done
- [ ] Sources cited

**Change (CHG):**
- [ ] Stakeholder impact assessed
- [ ] Resistance points addressed
- [ ] Training needs identified
- [ ] Communication plan included

**AI Governance (AIG):**
- [ ] ISO 42001 alignment checked
- [ ] Bias/fairness addressed
- [ ] Risk assessment complete
- [ ] Accountability defined

**Data Analytics (DAT):**
- [ ] Data quality verified
- [ ] Methodology documented
- [ ] Visualizations clear
- [ ] Insights actionable

**Risk (RSK):**
- [ ] Risk register complete
- [ ] Controls mapped
- [ ] Compliance gaps documented
- [ ] Remediation prioritized

### 7. Check Pyramid Principle
- [ ] Leads with recommendation/answer
- [ ] 3-5 supporting arguments
- [ ] Evidence for each argument
- [ ] Clear next steps

## Output
```
═══════════════════════════════════════════════════════════════
QUALITY GATE VERIFICATION
Deliverable: [D0XX] [Title]
═══════════════════════════════════════════════════════════════

ACCEPTANCE CRITERIA: [X/Y Met]
[✓] Criterion 1
[✓] Criterion 2
[✗] Criterion 3 - [What's missing]

OUTPUT FORMAT: [Pass | Fail]
[Details]

OUTPUT LOCATION: [Pass | Fail]
[File path]

SERVICE LINE QUALITY: [X/Y Met]
[✓] Check 1
[✗] Check 2 - [Issue]

PYRAMID STRUCTURE: [Pass | Fail]
[Details]

───────────────────────────────────────────────────────────────
OVERALL: [PASS | FAIL]

[If FAIL:]
REQUIRED ACTIONS:
1. [Action to address gap]
2. [Action to address gap]
```

## Gate Rules
- ALL acceptance criteria must be met
- Output format must match
- File must be in correct location
- Service line checks: minimum 80% pass
- Cannot mark complete until PASS
