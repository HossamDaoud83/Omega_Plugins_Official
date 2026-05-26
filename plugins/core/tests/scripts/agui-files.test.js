// Smoke test: AGUI Next.js skeleton has expected routes and lib files.

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
  'app/graph/page.tsx',
  'app/instincts/page.tsx',
  'app/engagement/[id]/page.tsx',
  'lib/project-registry.ts',
  'lib/agent-bridge.ts',
  // v1.3 brain-viz additions
  'lib/community-colors.ts',
  'lib/brain-pulse.ts',
  'components/GraphCanvas.tsx',
  'components/GraphTabShell.tsx',
  'components/CommunityListPanel.tsx',
  'components/GraphSearchBox.tsx',
  'components/GraphFilterControls.tsx',
  'components/NodeDetailPanel.tsx',
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

test('agent-bridge exposes fetchGraph + fetchInstincts + subscribeGraph', () => {
  const src = fs.readFileSync(path.join(A, 'lib/agent-bridge.ts'), 'utf8');
  assert.ok(src.includes('export async function fetchGraph'));
  assert.ok(src.includes('export async function fetchInstincts'));
  assert.ok(src.includes('export function subscribeGraph'));
});

test('agent-bridge exposes the v1.3 brain-viz fetchers', () => {
  const src = fs.readFileSync(path.join(A, 'lib/agent-bridge.ts'), 'utf8');
  assert.ok(src.includes('export async function fetchCommunities'));
  assert.ok(src.includes('export async function fetchNodeDetail'));
  assert.ok(src.includes('export async function fetchRecentActivity'));
  assert.ok(src.includes('export async function fetchLastQueryTrail'));
  assert.ok(src.includes('export async function fetchSearch'), 'missing v1.3.1 fetchSearch');
});

test('GraphTabShell does layered search (frontmatter + edges + BM25 + 1-hop)', () => {
  const src = fs.readFileSync(path.join(A, 'components/GraphTabShell.tsx'), 'utf8');
  assert.ok(src.includes('frontmatterById'), 'frontmatter map missing');
  assert.ok(src.includes('bm25Hits'), 'BM25 result state missing');
  assert.ok(src.includes('1-hop'), '1-hop expansion comment missing');
  assert.ok(src.includes('fetchSearch'), 'BM25 fetcher not wired');
});

test('GraphCanvas runs the baseline breathing animation', () => {
  const src = fs.readFileSync(path.join(A, 'components/GraphCanvas.tsx'), 'utf8');
  assert.ok(src.includes('breathing'), 'breathing comment missing');
  assert.ok(src.includes("transition('breathe')"), 'breathe transition not registered');
  assert.ok(src.includes('data-base-r'), 'data-base-r attribute missing');
});

test('community-colors palette has 12 colours', () => {
  const src = fs.readFileSync(path.join(A, 'lib/community-colors.ts'), 'utf8');
  const m = src.match(/COMMUNITY_PALETTE\s*=\s*\[([\s\S]*?)\]/);
  assert.ok(m, 'COMMUNITY_PALETTE not found');
  const hexes = (m[1].match(/#[0-9A-Fa-f]{6}/g) || []);
  assert.strictEqual(hexes.length, 12, `expected 12 palette colours, got ${hexes.length}`);
});

test('brain-pulse exposes the four confidence tiers', () => {
  const src = fs.readFileSync(path.join(A, 'lib/brain-pulse.ts'), 'utf8');
  assert.ok(src.includes('CONFIDENCE_TIERS'));
  assert.ok(src.includes('TRAIL_ITERATION_COLORS'));
  assert.ok(src.includes('confidenceTier'));
  assert.ok(src.includes('pulseDurationMs'));
});

test('GraphTabShell wires the new fetchers', () => {
  const src = fs.readFileSync(path.join(A, 'components/GraphTabShell.tsx'), 'utf8');
  assert.ok(src.includes('fetchCommunities'));
  assert.ok(src.includes('fetchRecentActivity'));
  assert.ok(src.includes('fetchLastQueryTrail'));
  assert.ok(src.includes('fetchNodeDetail'));
});

test('GraphCanvas accepts the v1.3 brain-viz props', () => {
  const src = fs.readFileSync(path.join(A, 'components/GraphCanvas.tsx'), 'utf8');
  assert.ok(src.includes('colorMode'));
  assert.ok(src.includes('recentEvents'));
  assert.ok(src.includes('queryTrail'));
  assert.ok(src.includes('confidenceById'));
  assert.ok(src.includes('selectedCommunityId'));
});

test('project-registry discovers ~/Omega_Projects', () => {
  const src = fs.readFileSync(path.join(A, 'lib/project-registry.ts'), 'utf8');
  assert.ok(src.includes('Omega_Projects'));
});
