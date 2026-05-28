#!/usr/bin/env node
// Omega @cps/core — SessionStart hook
// Validates engagement artifacts, surfaces stale blockers, alerts on milestones,
// loads handoff notes from session_state.json. Non-blocking (always exits 0).

const path = require('path');
const fs = require('fs');
const { execFileSync } = require('child_process');
const {
  PROJECT_ROOT, REQUIRED_ARTIFACTS, exists, readJSON, daysBetween,
  getProfile, isHookDisabled, logToStderr,
} = require(path.join(__dirname, '..', 'lib', 'utils.js'));

if (isHookDisabled('session-start')) process.exit(0);

const profile = getProfile();

// 1. Validate artifacts
const missing = REQUIRED_ARTIFACTS.filter(f => !exists(f));
if (missing.length === REQUIRED_ARTIFACTS.length) {
  logToStderr('❌ This is not a Omega engagement workspace.');
  logToStderr('   Run /omega:engagement-setup to initialize, or change directory.');
  process.exit(0);
}
if (missing.length > 0) {
  missing.forEach(f => logToStderr(`❌ MISSING: ${f}`));
  logToStderr('   Run /omega:engagement-setup to repair.');
  process.exit(0);
}

// 2. Stale blockers (>3 days)
const tracker = readJSON('00_Engagement_Management/deliverables_tracker.json') || {};
const deliverables = tracker.deliverables || [];
const blocked = deliverables.filter(d =>
  d.status === 'blocked' && d.last_updated && daysBetween(d.last_updated) > 3
);
blocked.forEach(d => {
  const days = daysBetween(d.last_updated);
  logToStderr(`⚠️ STALE BLOCKER: ${d.id} "${d.title}" blocked ${days} days`);
});

// 3. Approaching milestones (<5 days)
const milestones = tracker.milestones || [];
const now = Date.now();
const FIVE_DAYS = 5 * 24 * 60 * 60 * 1000;
const approaching = milestones.filter(m =>
  m.status === 'pending' && m.target_date &&
  new Date(m.target_date).getTime() - now < FIVE_DAYS &&
  new Date(m.target_date).getTime() - now > 0
);
approaching.forEach(m => {
  const daysLeft = Math.floor((new Date(m.target_date).getTime() - now) / (24 * 60 * 60 * 1000));
  logToStderr(`⏰ MILESTONE: "${m.name}" due in ${daysLeft} days`);
});

// 4. Handoff notes
const state = readJSON('session_state.json') || readJSON('.claude/memory/session_state.json') || {};
if (state.handoff_notes) {
  const note = String(state.handoff_notes).slice(0, 240);
  logToStderr(`📋 Handoff: ${note}${state.handoff_notes.length > 240 ? '…' : ''}`);
}

// 5. Banking profile reminder
if (profile === 'banking') {
  logToStderr(`🏦 Profile: banking (peer review required, Opus escalation enabled)`);
}

// 6. Surface high-confidence reusable patterns from prior sessions (Phase 4)
const tracker2 = path.join(__dirname, '..', 'obsidian', 'confidence-tracker.js');
if (fs.existsSync(tracker2) && fs.existsSync(path.join(PROJECT_ROOT, '.brain'))) {
  try {
    const out = execFileSync('node', [tracker2], { encoding: 'utf8', cwd: PROJECT_ROOT });
    if (out.trim()) process.stderr.write(out);
  } catch (e) {
    // Non-fatal — confidence tracking is advisory
  }
}

// 7. GBrain: incremental re-import of central as read-only (v4.1, soft-fail)
// Respects gbrain.config.json: central_refresh.on_session_start = true.
// Soft-fails if Bun/GBrain not installed — does NOT block session.
if (!isHookDisabled('gbrain-refresh-central')) {
  try {
    const brain = path.join(PROJECT_ROOT, '.brain');
    const gbCfgPath = path.join(brain, 'gbrain.config.json');
    if (fs.existsSync(gbCfgPath) && fs.existsSync(path.join(brain, 'gbrain.db'))) {
      const gbCfg = readJSON('.brain/gbrain.config.json') || {};
      const wantRefresh = gbCfg.central_refresh && gbCfg.central_refresh.on_session_start !== false;
      const centralSrc = (gbCfg.sources || []).find(s => s.mode === 'ro');
      if (wantRefresh && centralSrc && centralSrc.path && fs.existsSync(centralSrc.path)) {
        execFileSync('gbrain', ['import', centralSrc.path, '--read-only', '--no-embed'], {
          cwd: brain, stdio: 'ignore', timeout: 5000,
        });
        logToStderr('🧠 GBrain: central re-imported (read-only)');
      }
    }
  } catch (e) {
    // Soft-fail: GBrain not installed, or import errored. Never block session.
  }
}

// 8. GBrain inbox triage advisory (v4.1) — surface unprocessed quick-captures
if (!isHookDisabled('gbrain-inbox-triage')) {
  try {
    const inbox = path.join(PROJECT_ROOT, '.brain', 'inbox');
    if (fs.existsSync(inbox)) {
      const items = fs.readdirSync(inbox).filter(f => f.endsWith('.md') && !f.startsWith('README'));
      if (items.length > 0) {
        logToStderr(`📥 GBrain inbox: ${items.length} unprocessed item${items.length === 1 ? '' : 's'} — triage at session-end or run /omega:gbrain status`);
      }
    }
  } catch (e) { /* advisory */ }
}

logToStderr('✅ Session validation complete');
process.exit(0);
