---
name: quality-management
description: Run quality checks, scoring, and gate verification on deliverables
---

# Quality Management Skill

## Description

Quality assurance and peer review for deliverables.

## Available Commands

```
/peer-review        - Manage peer review workflow
/quality-score      - Calculate deliverable quality score
```

## Instructions for Claude

### When user invokes `/peer-review`

See [references/peer-review.md](references/peer-review.md) for detailed instructions.

1. Manage peer review process:
   - Assign reviewer
   - Track review status
   - Capture feedback
   - Manage revisions
   - Close review cycle

### When user invokes `/quality-score`

See [references/quality-score.md](references/quality-score.md) for detailed instructions.

1. Calculate quality score (0-100) based on:
   - Acceptance criteria met (40 points)
   - Documentation quality (20 points)
   - Omega standards compliance (20 points)
   - Client-ready format (10 points)
   - Timeliness (10 points)
2. Provide score breakdown and recommendations
