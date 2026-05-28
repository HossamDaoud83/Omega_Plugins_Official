#!/usr/bin/env node
// Omega @cps/core — PostToolUse hook (v4.1)
// When Claude edits a markdown file inside .brain/, incrementally sync the
// GBrain PGLite index so subsequent queries see the change immediately.
//
// Soft-fail by design: if Bun/GBrain isn't installed, or the engagement hasn't
// been gbrain-initialized, this hook is a no-op. Markdown remains canonical.
//
// Reads tool input from stdin (Claude Code PostToolUse contract).
//   { "tool_name": "Edit"|"Write"|"NotebookEdit", "tool_input": {...} }

const path = require('path');
const fs = require('fs');
const { execFileSync } = require('child_process');
const {
  PROJECT_ROOT, isHookDisabled, logToStderr,
} = require(path.join(__dirname, '..', 'lib', 'utils.js'));

if (isHookDisabled('gbrain-sync')) process.exit(0);

let payload;
try {
  const stdin = fs.readFileSync(0, 'utf8');
  payload = stdin ? JSON.parse(stdin) : {};
} catch (e) {
  process.exit(0); // no payload — nothing to do
}

const tool = payload.tool_name || '';
const input = payload.tool_input || {};
if (!['Edit', 'Write', 'NotebookEdit'].includes(tool)) process.exit(0);

// Find target file path (different keys per tool)
const targetPath = input.file_path || input.path || input.notebook_path || '';
if (!targetPath) process.exit(0);

// Only act on edits inside .brain/
const brain = path.join(PROJECT_ROOT, '.brain');
const absTarget = path.isAbsolute(targetPath) ? targetPath : path.join(PROJECT_ROOT, targetPath);
if (!absTarget.startsWith(brain)) process.exit(0);

// Skip .gitkeep, README, and the gbrain.db/ folder
const rel = path.relative(brain, absTarget);
if (rel.startsWith('gbrain.db') || rel.startsWith('.obsidian') || rel.endsWith('.gitkeep')) process.exit(0);

// Confirm GBrain init has happened (presence of gbrain.db/)
if (!fs.existsSync(path.join(brain, 'gbrain.db'))) process.exit(0);

// Run `gbrain sync` (incremental, cheap when nothing changed)
try {
  execFileSync('gbrain', ['sync'], { cwd: brain, stdio: 'ignore', timeout: 5000 });
  // Optionally refresh typed graph if the edit was inside a slug folder
  if (/^(01_Instincts|03_Frameworks|05_Risks|06_Persons|07_Engagements)[\\/]/.test(rel)) {
    execFileSync('gbrain', ['extract', 'links', '--source', 'db'], {
      cwd: brain, stdio: 'ignore', timeout: 5000,
    });
  }
} catch (e) {
  // Soft-fail. Markdown is canonical; DB will catch up on next sync.
}

process.exit(0);
