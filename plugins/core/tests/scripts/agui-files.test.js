// Smoke test: AGUI Next.js skeleton has expected routes and lib files (v2.0 — markdown-first).

const fs = require('fs');
const path = require('path');
const { test } = require('node:test');
const assert = require('node:assert');

const A = path.resolve(__dirname, '..', '..', 'scripts', 'agui');

const REQUIRED = [
  'package.json',
  'tsconfig.json',
  'next.config.js',
  'tailwind.config.js',
  'postcss.config.js',
  'app/layout.tsx',
  'app/page.tsx',
  'app/globals.css',
  'app/portfolio/page.tsx',
  'app/instincts/page.tsx',
  'app/engagement/[id]/page.tsx',
  'lib/project-registry.ts',
  'lib/agent-bridge.ts',
];

for (const f of REQUIRED) {
  test(`agui/${f} exists`, () => {
    assert.ok(fs.existsSync(path.join(A, f)), `missing: ${f}`);
  });
}

test('package.json declares Next.js 15', () => {
  const pkg = JSON.parse(fs.readFileSync(path.join(A, 'package.json'), 'utf8'));
  assert.ok(pkg.dependencies.next.startsWith('15.'));
});

test('agent-bridge exposes markdown brain readers', () => {
  const src = fs.readFileSync(path.join(A, 'lib/agent-bridge.ts'), 'utf8');
  assert.ok(src.includes('export function readEngagementInstincts'));
  assert.ok(src.includes('export function readCentralInstincts'));
  assert.ok(src.includes('export function defaultCentralPath'));
});

test('agent-bridge has no FastAPI fetches', () => {
  const src = fs.readFileSync(path.join(A, 'lib/agent-bridge.ts'), 'utf8');
  assert.ok(!src.includes('fetchGraph'), 'fetchGraph should be removed');
  assert.ok(!src.includes('subscribeGraph'), 'subscribeGraph should be removed');
  // FastAPI may appear in a comment ("v2.0 — no FastAPI"); guard against actual fetch usage
  assert.ok(!/\bfetch\(`?https?:\/\//.test(src), 'no HTTP fetches should remain');
});

test('project-registry discovers ~/Omega_Projects', () => {
  const src = fs.readFileSync(path.join(A, 'lib/project-registry.ts'), 'utf8');
  assert.ok(src.includes('Omega_Projects'));
});

test('project-registry has no api_port/api_url references', () => {
  const src = fs.readFileSync(path.join(A, 'lib/project-registry.ts'), 'utf8');
  assert.ok(!src.includes('api_port'), 'api_port should be removed');
  assert.ok(!src.includes('api_url'), 'api_url should be removed');
});

test('layout has no /graph nav link', () => {
  const src = fs.readFileSync(path.join(A, 'app/layout.tsx'), 'utf8');
  assert.ok(!src.includes('href="/graph"'), 'Graph tab link should be removed');
});
