// Test: quality-gate.js blocks completion when criteria unmet
const { test } = require('node:test');
const assert = require('node:assert');
const { spawnSync } = require('child_process');
const path = require('path');
const fs = require('fs');
const os = require('os');

const HOOK = path.resolve(__dirname, '..', '..', 'scripts', 'hooks', 'quality-gate.js');

function makeWorkspace(deliverables) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'omega-qg-'));
  fs.mkdirSync(path.join(dir, '00_Engagement_Management'), { recursive: true });
  fs.writeFileSync(
    path.join(dir, '00_Engagement_Management', 'deliverables_tracker.json'),
    JSON.stringify({ deliverables })
  );
  return dir;
}

function runHook(cwd, file_path) {
  return spawnSync('node', [HOOK], {
    encoding: 'utf8',
    cwd,
    env: {
      ...process.env,
      Omega_PROJECT_ROOT: cwd,
      CLAUDE_HOOK_INPUT: JSON.stringify({
        tool: 'Edit',
        tool_input: { file_path },
      }),
    },
  });
}

test('quality-gate blocks when acceptance criteria unmet', () => {
  const dir = makeWorkspace([
    {
      id: 'D001', status: 'completed', quality_score: 90,
      acceptance_criteria: [
        { name: 'a', met: true },
        { name: 'b', met: false },
      ],
    },
  ]);
  const r = runHook(dir, path.join(dir, '00_Engagement_Management/deliverables_tracker.json'));
  assert.strictEqual(r.status, 2, 'should block with exit 2');
  assert.match(r.stderr, /QUALITY GATE FAILED/);
  assert.match(r.stderr, /1\/2 acceptance criteria unmet/);
  fs.rmSync(dir, { recursive: true, force: true });
});

test('quality-gate blocks when quality_score below threshold', () => {
  const dir = makeWorkspace([
    {
      id: 'D001', status: 'completed', quality_score: 60,
      acceptance_criteria: [{ name: 'a', met: true }],
    },
  ]);
  const r = runHook(dir, path.join(dir, '00_Engagement_Management/deliverables_tracker.json'));
  assert.strictEqual(r.status, 2);
  assert.match(r.stderr, /quality_score 60 < required 75/);
  fs.rmSync(dir, { recursive: true, force: true });
});

test('quality-gate passes when criteria met and score sufficient', () => {
  const dir = makeWorkspace([
    {
      id: 'D001', status: 'completed', quality_score: 88,
      acceptance_criteria: [{ name: 'a', met: true }, { name: 'b', met: true }],
    },
  ]);
  const r = runHook(dir, path.join(dir, '00_Engagement_Management/deliverables_tracker.json'));
  assert.strictEqual(r.status, 0);
  assert.match(r.stderr, /Quality gate passed/);
  fs.rmSync(dir, { recursive: true, force: true });
});

test('quality-gate banking profile requires peer review', () => {
  const dir = makeWorkspace([
    {
      id: 'D001', status: 'completed', quality_score: 90,
      acceptance_criteria: [{ name: 'a', met: true }],
      // peer_reviewed_by: missing
    },
  ]);
  const r = spawnSync('node', [HOOK], {
    encoding: 'utf8',
    cwd: dir,
    env: {
      ...process.env,
      Omega_PROJECT_ROOT: dir,
      OMEGA_HOOK_PROFILE: 'banking',
      CLAUDE_HOOK_INPUT: JSON.stringify({
        tool: 'Edit',
        tool_input: { file_path: path.join(dir, '00_Engagement_Management/deliverables_tracker.json') },
      }),
    },
  });
  assert.strictEqual(r.status, 2);
  assert.match(r.stderr, /peer review required/);
  fs.rmSync(dir, { recursive: true, force: true });
});
