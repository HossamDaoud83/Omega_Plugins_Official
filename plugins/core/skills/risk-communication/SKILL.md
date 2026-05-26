---
name: risk-communication
description: Manage risk escalation and stakeholder communication
---

# Risk & Communication Management Skill

## Description

Manage risks and client communications.

## Available Commands

### Update Risk Register
```
/risk-assessment
```

### Draft Client Communication
```
/client-communication
```

### Generate Status Report
```
/status-report
```

No `/project:` prefix needed!

---

## Instructions for Claude

### When user invokes `/risk-assessment`

See [references/risk-assessment.md](references/risk-assessment.md) for detailed instructions.

1. Read `00_Engagement_Management/risk_register.md`
2. Review current risks and issues
3. Ask user what to update:
   - Add new risk/issue
   - Update existing risk status
   - Add mitigation actions
   - Close resolved items
4. For new risks, capture:
   - Description
   - Impact (Critical/High/Medium/Low)
   - Probability (High/Medium/Low)
   - Mitigation strategy
   - Owner
   - Target resolution date
5. Update risk_register.md
6. Update risk summary in session_state.json
7. Alert if any critical/high risks need escalation

### When user invokes `/client-communication`

See [references/client-communication.md](references/client-communication.md) for detailed instructions.

1. Ask communication type:
   - Status update
   - Request for information
   - Deliverable submission
   - Meeting request
   - Issue escalation
2. Load context:
   - Recent progress from engagement_progress.md
   - Current deliverables from tracker
   - Open blockers/risks
3. Draft professional communication:
   - Clear subject line
   - Executive summary
   - Key points (bullets)
   - Next steps / call to action
   - Professional closing
4. Use Omega tone: consultative, clear, actionable
5. Save draft to `06_Client_Communications/`
6. Offer to generate as DOCX using document generator

### When user invokes `/status-report`

See [references/status-report.md](references/status-report.md) for detailed instructions.

1. Gather data from:
   - `.claude/memory/session_state.json`
   - `00_Engagement_Management/deliverables_tracker.json`
   - `00_Engagement_Management/risk_register.md`
   - `00_Engagement_Management/engagement_progress.md`
2. Generate weekly status report with:
   - **Executive Summary** (2-3 sentences)
   - **Progress This Week** (accomplishments)
   - **Deliverables Status** (on track / at risk)
   - **Upcoming Milestones** (next 2 weeks)
   - **Risks & Issues** (open items)
   - **Action Items** (for client)
   - **Next Week Plan**
3. Format as markdown
4. Offer to generate as DOCX/PDF
5. Save to `06_Client_Communications/`

---

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

## Communication Tone Guidelines

**Omega Standard:**
- Professional but approachable
- Clear and concise
- Data-driven
- Action-oriented
- Anticipate client needs
- Proactive problem-solving

**Avoid:**
- Jargon without explanation
- Passive voice
- Vague statements
- Excuses without solutions

---

**Engagement:** ENG-MAR-2026-001
**Client:** Red Sea Marine for Sea Transport
