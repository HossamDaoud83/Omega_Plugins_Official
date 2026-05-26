# Risk Assessment Command

## Purpose
Add, update, or review risks and issues in the risk register.

## Risk Categories
- Schedule: Timeline and deadline risks
- Scope: Scope creep, requirements changes
- Resource: Team availability, skills gaps
- Technical: Technology challenges, integration issues
- Client: Client responsiveness, decision delays
- External: Market changes, regulatory, third parties

## Priority Matrix
```
              IMPACT
           Low  Med  High
P    Low  | L  | L  | M  |
R    Med  | L  | M  | H  |
O    High | M  | H  | H  |
B
```

## Execution Steps

### 1. Select Mode
- ADD: Create new risk/issue
- UPDATE: Modify existing risk/issue
- REVIEW: Generate risk summary

### 2. Add New Risk
Collect:
- Title
- Category
- Description
- Probability (High/Medium/Low)
- Impact (High/Medium/Low)
- Mitigation strategy
- Owner
- Trigger indicators

Generate ID: RISK-[NNN]

### 3. Add New Issue
Collect:
- Title
- Category
- Description
- Root cause
- Impact
- Resolution plan
- Owner
- Related risk (if any)

Generate ID: ISSUE-[NNN]

### 4. Update Existing
Valid status transitions:
- Risk: Open → Mitigating → Mitigated → Closed
- Issue: Active → Resolving → Resolved

Add update entry with date and notes.

### 5. Check Escalation Criteria
Escalate if:
- Critical priority issue
- High probability + High impact risk
- Blocker >3 days unresolved
- Multiple related risks materializing

### 6. Update risk_register.md
- Add new entries
- Update existing entries
- Update summary counts

## Output (Review Mode)
```
═══════════════════════════════════════════════════════════════
RISK ASSESSMENT SUMMARY
═══════════════════════════════════════════════════════════════

RISK STATUS:
| Category | Open | Mitigating | Mitigated | Closed |
|----------|------|------------|-----------|--------|
| Schedule | X | X | X | X |
| Scope | X | X | X | X |
...

HIGH PRIORITY RISKS:
1. [RISK-XXX] [Title] - [Status]
   Mitigation: [Summary]
   Owner: [Name]

ACTIVE ISSUES:
1. [ISSUE-XXX] [Title] - [Status]
   Resolution: [Summary]
   Owner: [Name]

ESCALATION REQUIRED:
- [Item requiring escalation]

RECOMMENDATIONS:
1. [Risk mitigation recommendation]
2. [Issue resolution recommendation]
```

## Output (Add/Update Mode)
```
═══════════════════════════════════════════════════════════════
RISK/ISSUE [Added | Updated]
═══════════════════════════════════════════════════════════════

ID: [RISK-XXX | ISSUE-XXX]
Title: [Title]
Category: [Category]
Priority: [High | Medium | Low]
Status: [Status]
Owner: [Name]

[If update:]
Previous Status: [status]
New Status: [status]
Update: [Description of change]
```
