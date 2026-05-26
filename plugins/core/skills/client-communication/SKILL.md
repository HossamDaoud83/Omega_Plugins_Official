---
name: client-communication
description: Draft and manage client communications
---

# Client Communication

Draft professional client communications (emails, letters, memos).

## What This Does

1. Asks communication type and purpose
2. Loads relevant engagement context
3. Drafts professional communication with Omega tone
4. Saves to client communications folder
5. Offers to generate as DOCX

## Instructions for Claude

When this skill is invoked:

1. **Ask Communication Type**
   - Status update
   - Request for information
   - Deliverable submission
   - Meeting request
   - Issue escalation
   - Other

2. **Load Context**
   - Recent progress from `00_Engagement_Management/engagement_progress.md`
   - Current deliverables from tracker
   - Open blockers/risks from risk register
   - Stakeholder info from stakeholder map

3. **Draft Communication**
   Structure:
   - Clear subject line
   - Professional greeting
   - Executive summary (2-3 sentences)
   - Key points (bullets)
   - Next steps / call to action
   - Professional closing
   - Omega signature block

4. **Omega Tone Guidelines**
   - Professional but approachable
   - Clear and concise
   - Data-driven
   - Action-oriented
   - Anticipate client needs
   - Proactive problem-solving

5. **Save Draft**
   - Save markdown to `06_Client_Communications/`
   - Filename: `YYYY-MM-DD_[Type]_[Subject].md`

6. **Offer DOCX Generation**
   - Ask if user wants DOCX version
   - Use document generator with Omega branding
   - Save to same folder

## Avoid

- Jargon without explanation
- Passive voice
- Vague statements
- Excuses without solutions

## Reference

See `.claude/skills/risk-communication/references/client-communication.md` for detailed implementation.
