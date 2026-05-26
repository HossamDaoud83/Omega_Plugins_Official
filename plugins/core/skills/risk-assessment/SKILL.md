---
name: risk-assessment
description: Assess and update engagement risk register
---

# Risk Assessment

Update risk register with new risks, issues, or mitigation actions.

## What This Does

1. Reads current risk register
2. Captures new risks/issues or updates existing
3. Assesses impact and probability
4. Updates mitigation strategies
5. Alerts on critical/high risks

## Instructions for Claude

When this skill is invoked:

1. **Read Risk Register**
   - Load `00_Engagement_Management/risk_register.md`
   - Review current risks and issues

2. **Ask What to Update**
   - Add new risk/issue
   - Update existing risk status
   - Add mitigation actions
   - Close resolved items

3. **For New Risks, Capture**
   - Description (clear, specific)
   - Impact (Critical/High/Medium/Low)
   - Probability (High/Medium/Low)
   - Mitigation strategy
   - Owner
   - Target resolution date

4. **Update Risk Register**
   - Add/update entries in markdown table
   - Update status (Open/In Progress/Closed)
   - Add mitigation actions with dates

5. **Update Session State**
   - Update risk summary in `.claude/memory/session_state.json`
   - Count open risks by severity

6. **Alert on Critical Risks**
   - Flag any Critical/High risks
   - Recommend escalation if needed

## Risk Assessment Criteria

### Impact Levels
- **Critical**: Threatens project success, budget, or timeline
- **High**: Significant impact on deliverables or client satisfaction
- **Medium**: Moderate impact, manageable with mitigation
- **Low**: Minor impact, can be absorbed

### Probability Levels
- **High**: >70% chance of occurring
- **Medium**: 30-70% chance
- **Low**: <30% chance

## Reference

See `.claude/skills/risk-communication/references/risk-assessment.md` for detailed implementation.
