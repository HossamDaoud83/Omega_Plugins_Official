#!/usr/bin/env node
// Instinct Writer — extracts session deltas from session_state.json + engagement_progress.md
// and writes a per-project instinct file under <engagement>/.brain/01_Instincts/.
//
// Schema: see docs/instinct-schema.md
// Per-project, NOT central. /omega:brain-sync handles sanitized cross-project sync.
//
// Inputs (CWD = engagement root):
//   - session_state.json (current session metadata)
//   - 00_Engagement_Management/engagement_progress.md (latest session entry)
//   - .brain/config.json (sanitizer config + project_id)
//   - .brain/01_Instincts/ (existing instincts; for confidence dedupe)
//
// Output: .brain/01_Instincts/INS-YYYY-NNN-<slug>.md
//
// Usage:
//   node instinct-writer.js [--engagement <path>] [--dry-run]
//   Auto-invoked by plugins/core/scripts/hooks/session-end.js

const fs = require('fs');
const path = require('path');
const { isHookDisabled } = require('../lib/utils');

const ARGS = parseArgs(process.argv.slice(2));
const ENGAGEMENT = ARGS.engagement || process.env.CLAUDE_PROJECT_DIR || process.cwd();
const DRY = ARGS['dry-run'] || false;

function parseArgs(argv) {
  const out = {};
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a.startsWith('--')) {
      const k = a.slice(2);
      const next = argv[i + 1];
      if (next && !next.startsWith('--')) { out[k] = next; i++; } else { out[k] = true; }
    }
  }
  return out;
}

function readJSON(p, fallback = null) {
  try { return JSON.parse(fs.readFileSync(p, 'utf8')); } catch { return fallback; }
}

function exists(p) { try { fs.accessSync(p); return true; } catch { return false; } }

function brainDir() { return path.join(ENGAGEMENT, '.brain'); }
function instinctsDir() { return path.join(brainDir(), '01_Instincts'); }

function brainConfig() {
  return readJSON(path.join(brainDir(), 'config.json'), {
    project_id: 'UNKNOWN',
    engagement_short_name: 'Unknown',
    central_sync_enabled: true,
    sanitizer_rules: {},
  });
}

function sessionState() {
  return readJSON(path.join(ENGAGEMENT, 'session_state.json'), { session_number: 1 });
}

function projectMeta() {
  return readJSON(path.join(ENGAGEMENT, 'project.json'), {});
}

function nextInstinctId(year) {
  if (!exists(instinctsDir())) return `INS-${year}-001`;
  const existing = fs.readdirSync(instinctsDir())
    .filter(f => f.startsWith(`INS-${year}-`))
    .map(f => parseInt(f.slice(`INS-${year}-`.length, `INS-${year}-`.length + 3), 10))
    .filter(n => !isNaN(n));
  const next = existing.length === 0 ? 1 : Math.max(...existing) + 1;
  return `INS-${year}-${String(next).padStart(3, '0')}`;
}

function lastProgressEntry() {
  const p = path.join(ENGAGEMENT, '00_Engagement_Management', 'engagement_progress.md');
  if (!exists(p)) return null;
  const text = fs.readFileSync(p, 'utf8');
  // Sessions delimited by `### Session N`
  const matches = [...text.matchAll(/### Session (\d+)[\s\S]*?(?=### Session \d+|$)/g)];
  if (matches.length === 0) return null;
  return matches[matches.length - 1][0];
}

function extractInstinctCandidate(progressEntry, state, project, config) {
  // Heuristic v1: pull "Decisions Made" + "Work Completed" sections; return one instinct candidate.
  // (LLM-driven extraction can later replace this; the Stop hook prompts the model to do better.)
  const decisions = (progressEntry.match(/#### Decisions Made\s+([\s\S]*?)(?=####|$)/) || [])[1] || '';
  const completed = (progressEntry.match(/#### Work Completed\s+([\s\S]*?)(?=####|$)/) || [])[1] || '';
  const blockers  = (progressEntry.match(/#### Blockers & Dependencies\s+([\s\S]*?)(?=####|$)/) || [])[1] || '';

  // Surface line: first non-empty bullet from decisions, else completed.
  const surface = (decisions + '\n' + completed).split('\n')
    .map(l => l.replace(/^[-*]\s*/, '').trim())
    .filter(l => l && !/^None\b/i.test(l))[0] || `Session ${state.session_number} learning`;

  const slug = surface.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 60) || 'session-learning';
  return {
    surface,
    slug,
    decisions: decisions.trim(),
    completed: completed.trim(),
    blockers: blockers.trim(),
  };
}

function frontmatter({ id, project, config, candidate, state }) {
  const date = new Date().toISOString().split('T')[0];
  return [
    '---',
    `aliases: []`,
    `type: instinct`,
    `id: ${id}`,
    `date_extracted: ${date}`,
    `source_engagement: "[[${config.project_id}]]"`,
    `service_line: ${project.service_line || 'UNK'}`,
    `industry: ${project.industry || 'unspecified'}`,
    `confidence_score: 0.25`,
    `status: active`,
    `visibility: sanitizable`,
    `tags: [instinct, ${(project.service_line || 'unk').toLowerCase()}, ${(project.industry || 'unspecified').toLowerCase().replace(/[^a-z0-9]+/g, '-')}]`,
    `entities:`,
    `  frameworks: []`,
    `  risks: []`,
    `  deliverables: []`,
    `processed_by:`,
    `  agent: instinct-writer.js`,
    `  reviewer_node: pending`,
    `graph_sync: pending`,
    `central_sync: pending`,
    `schema_version: "1.0"`,
    '---',
  ].join('\n');
}

function body({ candidate, state, config }) {
  return `
# ${candidate.surface}

## Insight Summary

${candidate.surface}

## Context

- **Engagement:** ${config.engagement_short_name}
- **Session:** ${state.session_number}
- **Date:** ${new Date().toISOString().split('T')[0]}

## Trigger

${candidate.decisions || candidate.completed || '_(extracted from session log; refine in next session)_'}

${candidate.blockers ? `\n## Blockers Observed\n\n${candidate.blockers}\n` : ''}

## Refinement notes

This instinct was auto-extracted at session-end with confidence 0.25 (single observation). Confidence will increase as the same pattern recurs across sessions and engagements. Edit this file to refine the surface statement, add framework / risk / deliverable links in frontmatter, or downgrade visibility to \`project-only\` if it shouldn't sync to the central brain.
`;
}

function main() {
  if (isHookDisabled('instinct-writer')) {
    console.log('[instinct-writer] disabled via OMEGA_DISABLED_HOOKS');
    return;
  }
  if (!exists(brainDir())) {
    console.log('[instinct-writer] no .brain/ in', ENGAGEMENT, '— skipping (not a Omega engagement?)');
    return;
  }
  if (!exists(instinctsDir())) fs.mkdirSync(instinctsDir(), { recursive: true });

  const state = sessionState();
  const project = projectMeta();
  const config = brainConfig();

  const entry = lastProgressEntry();
  if (!entry) {
    console.log('[instinct-writer] no recent session entry in engagement_progress.md — skipping');
    return;
  }

  const candidate = extractInstinctCandidate(entry, state, project, config);
  const year = new Date().getFullYear();
  const id = nextInstinctId(year);
  const filename = `${id}-${candidate.slug}.md`;
  const out = path.join(instinctsDir(), filename);

  const content = frontmatter({ id, project, config, candidate, state }) + body({ candidate, state, config });

  if (DRY) {
    console.log('[instinct-writer] dry-run; would write:', out);
    console.log('---');
    console.log(content);
    return;
  }

  fs.writeFileSync(out, content);
  console.log(`[instinct-writer] wrote ${path.relative(ENGAGEMENT, out)} (confidence 0.25)`);
}

main();
