---
name: quality-score
description: Calculate comprehensive deliverable quality score
---

# Quality Score

Calculate deliverable quality score (0-100) with detailed breakdown.

## What This Does

1. Evaluates deliverable against quality criteria
2. Calculates numerical score (0-100)
3. Provides detailed breakdown by category
4. Gives actionable recommendations
5. Documents score in tracker

## Instructions for Claude

When this skill is invoked:

1. **Load Deliverable**
   - Get current deliverable from session state
   - Load deliverable details and outputs

2. **Calculate Score by Category**

   **Acceptance Criteria (40 points)**
   - Score each criterion (met=full points, partial=half, not met=0)
   - Average across all criteria
   - Scale to 40 points

   **Documentation Quality (20 points)**
   - Completeness: 7 points
   - Clarity: 7 points
   - Professional formatting: 6 points

   **Omega Standards Compliance (20 points)**
   - Branding applied: 5 points
   - Methodology followed: 10 points
   - Quality frameworks used: 5 points

   **Client-Ready Format (10 points)**
   - No draft markers: 3 points
   - Proper file locations: 3 points
   - Appropriate format (DOCX/PDF): 4 points

   **Timeliness (10 points)**
   - Early: 10 points
   - On time: 8 points
   - 1-3 days late: 5 points
   - >3 days late: 0 points

3. **Calculate Total Score**
   - Sum all categories
   - Round to nearest integer
   - Classify result:
     - 90-100: Excellent
     - 80-89: Good
     - 70-79: Acceptable
     - Below 70: Needs Work

4. **Provide Recommendations**
   - List areas scoring below threshold
   - Specific actions to improve score
   - Priority order for improvements

5. **Document Score**
   - Update deliverable in tracker with quality_score
   - Add scoring notes
   - Save timestamp

## Reference

See `.claude/skills/quality-management/references/quality-score.md` for detailed implementation.
