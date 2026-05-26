#!/usr/bin/env node
// omega-pmo — SessionStart hook. On Mondays, drafts the weekly status pack
// from the engagement's deliverables_tracker.json and project.json.
// Idempotent — won't overwrite an existing draft for the current week.

'use strict';

const fs = require('fs');
const path = require('path');

function isHookDisabled(name) {
  const disabled = (process.env.OMEGA_DISABLED_HOOKS || '').split(',').map(s => s.trim());
  return disabled.includes('all') || disabled.includes(name);
}

if (isHookDisabled('status-pack-weekly')) process.exit(0);

const ROOT = process.env.Omega_PROJECT_ROOT || process.cwd();
const today = new Date();
if (today.getDay() !== 1) process.exit(0); // Monday only

function isoWeek(d) {
  const date = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  date.setUTCDate(date.getUTCDate() + 4 - (date.getUTCDay() || 7));
  const yearStart = new Date(Date.UTC(date.getUTCFullYear(), 0, 1));
  const wn = Math.ceil(((date - yearStart) / 86400000 + 1) / 7);
  return `${date.getUTCFullYear()}-W${String(wn).padStart(2, '0')}`;
}

const week = isoWeek(today);
const outDir = path.join(ROOT, '00_Engagement_Management', 'status_packs');
const outFile = path.join(outDir, `${week}-status-pack.md`);

if (fs.existsSync(outFile)) process.exit(0);

let project = {};
const pj = path.join(ROOT, 'project.json');
if (fs.existsSync(pj)) {
  try { project = JSON.parse(fs.readFileSync(pj, 'utf8')); } catch {}
}

let tracker = [];
const tp = path.join(ROOT, '00_Engagement_Management', 'deliverables_tracker.json');
if (fs.existsSync(tp)) {
  try { tracker = JSON.parse(fs.readFileSync(tp, 'utf8')); } catch {}
}

const inFlight = (Array.isArray(tracker) ? tracker : (tracker.deliverables || []))
  .filter(d => d && d.status && !['done', 'cancelled'].includes(String(d.status).toLowerCase()))
  .slice(0, 8);

const projectName = project.engagement_short_name || project.project_id || path.basename(ROOT);
const owner = project.lead_consultant || 'TBD';

const body = `# Weekly Status Pack — ${projectName}

**Week of:** ${today.toISOString().slice(0, 10)} (${week})
**Owner:** ${owner}

## 1. Headline (3 bullets)
- TBD
- TBD
- TBD

## 2. Workstreams in flight (auto-extracted from tracker)
${inFlight.length ? inFlight.map(d => `- ${d.name || d.title || '(untitled)'} — status: ${d.status}, owner: ${d.owner || 'TBD'}`).join('\n') : '- (no in-flight deliverables found)'}

## 3. Decisions needed this week
| # | Decision | Owner | Due |
|---|---|---|---|
| 1 |  |  |  |

## 4. RAID summary
- Risks: TBD
- Actions: TBD
- Issues: TBD
- Dependencies: TBD

## 5. Looking ahead (next 2 weeks)
- TBD

## 6. Asks of steering committee
- TBD
`;

try {
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(outFile, body);
  console.error('[omega-pmo:status-pack-weekly] Drafted', path.relative(ROOT, outFile));
} catch (e) {
  console.error('[omega-pmo:status-pack-weekly] could not write status pack:', e.message);
}

process.exit(0);
