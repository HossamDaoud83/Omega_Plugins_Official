#!/usr/bin/env node
// Confidence Tracker — scans local + central instinct stores for recurrence of patterns.
// Bumps confidence_score when the same pattern (matched by service_line + industry + surface similarity)
// recurs across sessions or projects.
//
// Confidence ladder:
//   1 obs  → 0.25
//   2 obs  → 0.50
//   3 obs  → 0.75
//   4+ obs → 0.92
//
// Cross-project matches weight 1.5x (each match counts as 1.5 observations).
//
// Usage:
//   node confidence-tracker.js [--engagement <path>] [--central <path>]
//   Auto-invoked at session-start to surface high-confidence reusables.

const fs = require('fs');
const path = require('path');

const ARGS = parseArgs(process.argv.slice(2));
const ENGAGEMENT = ARGS.engagement || process.env.CLAUDE_PROJECT_DIR || process.cwd();
const CENTRAL = ARGS.central || '/mnt/d/Obsidian Notes Taken';

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

function exists(p) { try { fs.accessSync(p); return true; } catch { return false; } }

function readFM(content) {
  const m = content.match(/^---\n([\s\S]+?)\n---/);
  if (!m) return {};
  const out = {};
  for (const line of m[1].split('\n')) {
    const kv = line.match(/^(\w+):\s*(.+)$/);
    if (kv) out[kv[1]] = kv[2].replace(/^["']|["']$/g, '');
  }
  return out;
}

function readInstincts(dir) {
  if (!exists(dir)) return [];
  return fs.readdirSync(dir)
    .filter(f => f.endsWith('.md') && f.startsWith('INS-'))
    .map(f => {
      const content = fs.readFileSync(path.join(dir, f), 'utf8');
      const fm = readFM(content);
      const surface = (content.match(/^# (.+)$/m) || [])[1] || '';
      return { file: f, fm, surface };
    });
}

function similar(a, b) {
  // Naive Jaccard on word sets >= 4 chars; symmetric.
  const ws = s => new Set(s.toLowerCase().split(/\W+/).filter(w => w.length >= 4));
  const A = ws(a), B = ws(b);
  if (A.size === 0 || B.size === 0) return 0;
  const inter = [...A].filter(x => B.has(x)).length;
  const union = new Set([...A, ...B]).size;
  return inter / union;
}

function tier(score) {
  if (score >= 4) return 0.92;
  if (score >= 3) return 0.75;
  if (score >= 2) return 0.50;
  return 0.25;
}

function main() {
  const local  = readInstincts(path.join(ENGAGEMENT, '.brain', '01_Instincts'));
  const center = readInstincts(path.join(CENTRAL, '01_Instincts_Aggregated'));

  if (local.length === 0) {
    console.log('[confidence-tracker] no local instincts yet — nothing to score');
    return;
  }

  const reusables = [];

  for (const inst of local) {
    const sl = inst.fm.service_line;
    const ind = inst.fm.industry;
    const surface = inst.surface;

    // Local recurrence: other local instincts with same service_line+industry and surface similarity > 0.4
    const localMatches = local.filter(o =>
      o.file !== inst.file &&
      o.fm.service_line === sl &&
      o.fm.industry === ind &&
      similar(o.surface, surface) > 0.4
    ).length;

    // Central recurrence: aggregated instincts in central brain with same service_line+industry and similarity > 0.4
    const centralMatches = center.filter(o =>
      o.fm.service_line === sl &&
      o.fm.industry === ind &&
      similar(o.surface, surface) > 0.4
    ).length;

    const obsCount = 1 + localMatches + centralMatches * 1.5;
    const newConfidence = tier(obsCount);

    if (newConfidence >= 0.75 && (centralMatches > 0 || localMatches >= 2)) {
      reusables.push({
        id: inst.fm.id,
        surface,
        service_line: sl,
        industry: ind,
        local_obs: localMatches + 1,
        central_obs: centralMatches,
        confidence: newConfidence,
      });
    }
  }

  if (reusables.length === 0) {
    console.log('[confidence-tracker] no high-confidence reusable patterns yet');
    return;
  }

  console.log('\n=== High-confidence patterns from prior sessions ===');
  for (const r of reusables) {
    const src = r.central_obs > 0
      ? `cross-project: ${r.central_obs} obs`
      : `local: ${r.local_obs} obs`;
    console.log(`  • [${r.id}] ${r.surface}`);
    console.log(`    confidence ${r.confidence.toFixed(2)} (${src}) — ${r.service_line}/${r.industry}`);
  }
  console.log('');
}

if (require.main === module) main();

module.exports = { similar, tier, readInstincts };
