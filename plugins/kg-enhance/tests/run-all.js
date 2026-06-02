const fs = require('fs');
const path = require('path');
const { test } = require('node:test');
const assert = require('node:assert');

const ROOT = path.resolve(__dirname, '..');

test('plugin manifest is omega-kg-enhance', () => {
  const m = JSON.parse(fs.readFileSync(
    path.join(ROOT, '.claude-plugin/plugin.json'), 'utf8'
  ));
  assert.strictEqual(m.name, 'omega-kg-enhance');
  assert.ok(m.version);
});

test('all 4 v2.0 commands present', () => {
  const expected = ['doc-ingest', 'fact-check', 'version-diff', 'alias-merge'];
  for (const c of expected) {
    assert.ok(
      fs.existsSync(path.join(ROOT, 'commands', c + '.md')),
      `missing command: ${c}.md`
    );
  }
});

test('removed v1.x commands are gone', () => {
  for (const c of ['graph-query', 'brain-html']) {
    assert.ok(
      !fs.existsSync(path.join(ROOT, 'commands', c + '.md')),
      `${c}.md should be removed in v2.0`
    );
  }
});

test('all 3 v2.2 engagement-intelligence commands present', () => {
  const expected = ['trace', 'emerge', 'challenge'];
  for (const c of expected) {
    assert.ok(
      fs.existsSync(path.join(ROOT, 'commands', c + '.md')),
      `missing command: ${c}.md`
    );
  }
});

test('engagement-intelligence commands are read-only (no Write/Edit)', () => {
  for (const c of ['trace', 'emerge', 'challenge']) {
    const text = fs.readFileSync(path.join(ROOT, 'commands', c + '.md'), 'utf8');
    const fm = text.match(/allowed-tools:\s*(.+)/);
    assert.ok(fm, `${c}.md missing allowed-tools`);
    assert.ok(
      !/\b(Write|Edit|NotebookEdit)\b/.test(fm[1]),
      `${c}.md must be read-only — allowed-tools lists a write tool: ${fm[1]}`
    );
  }
});

test('fact-check skill present and valid frontmatter', () => {
  const skillPath = path.join(ROOT, 'skills', 'fact-check', 'SKILL.md');
  assert.ok(fs.existsSync(skillPath), 'fact-check SKILL.md missing');
  const text = fs.readFileSync(skillPath, 'utf8');
  assert.match(text, /^---\r?\nname:\s*fact-check/, 'frontmatter missing name=fact-check');
  assert.match(text, /description:/, 'frontmatter missing description');
});

test('SKILL.md present and valid frontmatter', () => {
  const skillPath = path.join(ROOT, 'skills', 'kg-enhance', 'SKILL.md');
  assert.ok(fs.existsSync(skillPath), 'SKILL.md missing');
  const text = fs.readFileSync(skillPath, 'utf8');
  assert.match(text, /^---\r?\nname:\s*kg-enhance/, 'frontmatter missing name=kg-enhance');
  assert.match(text, /description:/, 'frontmatter missing description');
});

test('quality standards rule present', () => {
  assert.ok(fs.existsSync(path.join(ROOT, 'rules', 'kg-quality-standards.md')));
});

test('seed entity aliases is valid JSON with EN/AR pairs', () => {
  const raw = fs.readFileSync(path.join(ROOT, 'assets', 'seed-entity-aliases.json'), 'utf8');
  const aliases = JSON.parse(raw);
  assert.ok(Object.keys(aliases).length >= 10, 'expected ≥10 seed aliases');
  const hasArabic = Object.values(aliases).some(variants =>
    variants.some(v => /[؀-ۿ]/.test(v))
  );
  assert.ok(hasArabic, 'no Arabic variants found in seed aliases');
});

test('every command file has frontmatter with description and allowed-tools', () => {
  const dir = path.join(ROOT, 'commands');
  for (const f of fs.readdirSync(dir).filter(f => f.endsWith('.md'))) {
    const text = fs.readFileSync(path.join(dir, f), 'utf8');
    assert.match(text, /^---\r?\n[\s\S]*?description:[\s\S]*?---/, `${f} missing frontmatter description`);
    assert.match(text, /allowed-tools:/, `${f} missing allowed-tools`);
  }
});
