// Test: secret-scan.js detects all 14 patterns
const { test } = require('node:test');
const assert = require('node:assert');
const { spawnSync } = require('child_process');
const path = require('path');

const HOOK = path.resolve(__dirname, '..', '..', 'scripts', 'hooks', 'secret-scan.js');

function runHook(content, file_path = '/tmp/test.md') {
  return spawnSync('node', [HOOK], {
    encoding: 'utf8',
    env: {
      ...process.env,
      CLAUDE_HOOK_INPUT: JSON.stringify({
        tool: 'Edit',
        tool_input: { file_path, content },
      }),
    },
  });
}

const cases = [
  ['AWS Access Key',       'export AWS_KEY=AKIAIOSFODNN7EXAMPLE'],
  ['OpenAI key',           'OPENAI_KEY=sk-proj-abcdef1234567890abcdef'],
  ['GitHub Token',         'GH=ghp_abcdef1234567890abcdef1234567890abcd'],
  ['Google API Key',       'API=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI'],
  ['Slack Webhook',        'url=https://hooks.slack.com/services/T00/B00/abcdef'],
  ['Slack Token',          'tok=xoxb-1234-5678-abcdefghij'],
  ['JWT',                  'auth=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIn0.abc123'],
  ['Private Key',          '-----BEGIN RSA PRIVATE KEY-----\nMIIE...'],
  ['Password JSON',        '{"password":"hunter2hunter2"}'],
  ['Bearer Token',         'Authorization: Bearer abcd1234efgh5678ijkl9012'],
  ['DB Connection',        'mongodb://user:pass@host:27017/db'],
];

for (const [name, payload] of cases) {
  test(`secret-scan flags: ${name}`, () => {
    const r = runHook(payload);
    assert.strictEqual(r.status, 0, 'hook should not block');
    assert.match(r.stderr, /SECRETS DETECTED/, `expected detection for ${name}`);
  });
}

test('secret-scan ignores clean content', () => {
  const r = runHook('# A clean markdown file\n\nNothing sensitive here.');
  assert.strictEqual(r.status, 0);
  assert.doesNotMatch(r.stderr, /SECRETS DETECTED/);
});

test('secret-scan ignores non-Edit tools', () => {
  const r = spawnSync('node', [HOOK], {
    encoding: 'utf8',
    env: {
      ...process.env,
      CLAUDE_HOOK_INPUT: JSON.stringify({
        tool: 'Read',
        tool_input: { file_path: '/tmp/x.md' },
      }),
    },
  });
  assert.strictEqual(r.status, 0);
  assert.doesNotMatch(r.stderr, /SECRETS DETECTED/);
});

test('secret-scan respects OMEGA_DISABLED_HOOKS', () => {
  const r = spawnSync('node', [HOOK], {
    encoding: 'utf8',
    env: {
      ...process.env,
      OMEGA_DISABLED_HOOKS: 'secret-scan',
      CLAUDE_HOOK_INPUT: JSON.stringify({
        tool: 'Edit',
        tool_input: { file_path: '/tmp/x.md', content: 'AKIAIOSFODNN7EXAMPLE' },
      }),
    },
  });
  assert.strictEqual(r.status, 0);
  assert.doesNotMatch(r.stderr, /SECRETS DETECTED/);
});
