// Test: session-start.js validates artifacts and surfaces handoff context
const { test } = require('node:test');
const assert = require('node:assert');
const { spawnSync } = require('child_process');
const path = require('path');
const fs = require('fs');
const os = require('os');

const HOOK = path.resolve(__dirname, '..', '..', 'scripts', 'hooks', 'session-start.js');

function makeFakeEngagement(overrides = {}) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'omega-test-'));
  fs.mkdirSync(path.join(dir, '00_Engagement_Management'), { recursive: true });
  fs.writeFileSync(path.join(dir, 'project.json'), JSON.stringify({ client: { name: 'TEST' }, engagement: { code: 'P000' } }));
  fs.writeFileSync(path.join(dir, 'session_state.json'),
    JSON.stringify({ session_number: 5, handoff_notes: 'Continue D002 from where we left off.', ...overrides }));
  for (const f of ['deliverables_tracker.json', 'engagement_progress.md', 'risk_register.md', 'stakeholder_map.md']) {
    fs.writeFileSync(path.join(dir, '00_Engagement_Management', f), f.endsWith('.json') ? '{}' : '#');
  }
  return dir;
}

function runHook(cwd, env = {}) {
  return spawnSync('node', [HOOK], {
    encoding: 'utf8',
    cwd,
    env: { ...process.env, Omega_PROJECT_ROOT: cwd, ...env },
  });
}

test('session-start surfaces handoff notes', () => {
  const dir = makeFakeEngagement();
  const r = runHook(dir);
  assert.strictEqual(r.status, 0);
  assert.match(r.stderr, /Handoff: Continue D002/);
  assert.match(r.stderr, /Session validation complete/);
  fs.rmSync(dir, { recursive: true, force: true });
});

test('session-start reports missing artifacts gracefully', () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'omega-empty-'));
  const r = runHook(dir);
  assert.strictEqual(r.status, 0); // non-blocking
  assert.match(r.stderr, /not a Omega engagement workspace|MISSING/);
  fs.rmSync(dir, { recursive: true, force: true });
});

test('session-start respects OMEGA_DISABLED_HOOKS=session-start', () => {
  const dir = makeFakeEngagement();
  const r = runHook(dir, { OMEGA_DISABLED_HOOKS: 'session-start' });
  assert.strictEqual(r.status, 0);
  assert.doesNotMatch(r.stderr, /Session validation/);
  fs.rmSync(dir, { recursive: true, force: true });
});

test('session-start banking profile shows reminder', () => {
  const dir = makeFakeEngagement();
  const r = runHook(dir, { OMEGA_HOOK_PROFILE: 'banking' });
  assert.match(r.stderr, /Profile: banking/);
  fs.rmSync(dir, { recursive: true, force: true });
});
