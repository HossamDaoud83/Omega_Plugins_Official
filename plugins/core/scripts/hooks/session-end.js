#!/usr/bin/env node
// Omega @cps/core — Stop hook (session end)
// Verifies state files updated, persists session_state.json delta,
// triggers instinct extraction (Phase 4), creates git commit (if configured).
// Non-blocking advisory — never aborts the session.

const path = require('path');
const fs = require('fs');
const { execFileSync } = require('child_process');
const {
  PROJECT_ROOT, exists, readJSON, writeJSON, readText, appendText,
  isHookDisabled, logToStderr,
} = require(path.join(__dirname, '..', 'lib', 'utils.js'));

if (isHookDisabled('session-end')) process.exit(0);

const stateRoot = exists('session_state.json')
  ? 'session_state.json'
  : '.claude/memory/session_state.json';

const state = readJSON(stateRoot);
if (!state) {
  logToStderr('⚠️ No session_state.json — skipping session-end persistence');
  process.exit(0);
}

// 1. Bump session timestamp
state.last_updated = new Date().toISOString();
writeJSON(stateRoot, state);
logToStderr(`✅ session_state.json updated (last_updated: ${state.last_updated})`);

// 2. Trigger instinct extraction (Phase 4 — only runs if writer is present)
const brainConfig = path.join(PROJECT_ROOT, '.brain', 'config.json');
const writerScript = path.join(__dirname, '..', 'obsidian', 'instinct-writer.js');
if (fs.existsSync(brainConfig) && fs.existsSync(writerScript)) {
  try {
    execFileSync('node', [writerScript], { stdio: 'inherit', cwd: PROJECT_ROOT });
  } catch (e) {
    logToStderr(`⚠️ Instinct extraction failed (non-fatal): ${e.message}`);
  }
}

// 3. Audit trail — append a session-end marker to engagement_progress.md if missing
const progressPath = '00_Engagement_Management/engagement_progress.md';
if (exists(progressPath)) {
  const progress = readText(progressPath) || '';
  const sessionN = state.session_number ?? state.stats?.total_sessions ?? '?';
  const marker = `<!-- session-end-hook ${state.last_updated} session=${sessionN} -->`;
  if (!progress.includes(marker)) {
    appendText(progressPath, `\n\n${marker}\n`);
  }
}

// 4. GBrain: sync new instincts + re-extract typed graph (v4.1, soft-fail)
// Runs AFTER instinct-writer.js wrote new markdown to .brain/01_Instincts/.
// Soft-fails if Bun/GBrain not installed — never block session-end.
if (!isHookDisabled('gbrain-sync')) {
  try {
    const brain = path.join(PROJECT_ROOT, '.brain');
    if (fs.existsSync(path.join(brain, 'gbrain.db'))) {
      execFileSync('gbrain', ['sync'], { cwd: brain, stdio: 'ignore', timeout: 10000 });
      execFileSync('gbrain', ['extract', 'links', '--source', 'db'], { cwd: brain, stdio: 'ignore', timeout: 10000 });
      logToStderr('🧠 GBrain: synced + typed graph refreshed');
    }
  } catch (e) {
    // Soft-fail — GBrain absent or sync errored. Markdown stays canonical.
  }
}

logToStderr('✅ Session end persistence complete');
process.exit(0);
