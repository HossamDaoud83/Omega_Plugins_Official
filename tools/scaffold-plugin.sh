#!/usr/bin/env bash
# Scaffold a new @omega/* plugin from plugins/_template/.
#
# Usage:
#   bash tools/scaffold-plugin.sh <plugin-name> "<description>" [category] [tier]
#
# Examples:
#   bash tools/scaffold-plugin.sh omega-pmo "Project management office tooling" capability standard
#   bash tools/scaffold-plugin.sh omega-ind-aerospace "Aerospace industry — MRO, ITAR, certs" industry specialized
#
# Arguments:
#   plugin-name : Full plugin name with omega- prefix (e.g., omega-pmo, omega-ind-aerospace)
#   description : One-line plugin description (used in plugin.json + marketplace.json)
#   category    : foundation | service-line | industry | capability (default: capability)
#   tier        : featured | standard | specialized (default: standard)
#
# What it does:
#   1. Copies plugins/_template/ → plugins/<folder>/  (folder = plugin-name minus 'omega-' prefix)
#   2. Patches plugins/<folder>/.claude-plugin/plugin.json (name + description)
#   3. Adds an entry to .claude-plugin/marketplace.json
#   4. Reminds you to run `bash tools/sync-to-plugins-repo.sh` to ship the new plugin

set -euo pipefail

if [[ $# -lt 2 ]]; then
  echo "Usage: $0 <plugin-name> \"<description>\" [category] [tier]"
  echo ""
  echo "  plugin-name  Full name including omega- prefix (e.g., omega-pmo, omega-ind-aerospace)"
  echo "  description  One-line description (quote it!)"
  echo "  category     foundation | service-line | industry | capability  (default: capability)"
  echo "  tier         featured | standard | specialized  (default: standard)"
  echo ""
  echo "Example:"
  echo "  $0 omega-pmo \"Project management office tooling\" capability standard"
  exit 1
fi

PLUGIN_NAME="$1"
DESCRIPTION="$2"
CATEGORY="${3:-capability}"
TIER="${4:-standard}"

case "$TIER" in
  featured|standard|specialized) ;;
  *)
    echo "ERROR: tier must be one of: featured, standard, specialized (got: $TIER)"
    exit 1
    ;;
esac

if [[ "$PLUGIN_NAME" != omega-* ]]; then
  echo "ERROR: plugin-name must start with 'omega-' (got: $PLUGIN_NAME)"
  exit 1
fi

case "$CATEGORY" in
  foundation|service-line|industry|capability) ;;
  *)
    echo "ERROR: category must be one of: foundation, service-line, industry, capability"
    echo "       (got: $CATEGORY)"
    exit 1
    ;;
esac

REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
TEMPLATE="$REPO_ROOT/plugins/_template"

# Folder name = plugin name without 'omega-' prefix
FOLDER="${PLUGIN_NAME#omega-}"
TARGET="$REPO_ROOT/plugins/$FOLDER"

if [[ ! -d "$TEMPLATE" ]]; then
  echo "ERROR: plugins/_template/ not found at $TEMPLATE"
  exit 1
fi

if [[ -e "$TARGET" ]]; then
  echo "ERROR: plugin folder already exists: $TARGET"
  exit 1
fi

MARKETPLACE="$REPO_ROOT/.claude-plugin/marketplace.json"
if [[ ! -f "$MARKETPLACE" ]]; then
  echo "ERROR: marketplace.json not found at $MARKETPLACE"
  exit 1
fi

# Check for duplicate in marketplace
if grep -q "\"name\": \"$PLUGIN_NAME\"" "$MARKETPLACE" 2>/dev/null; then
  echo "ERROR: $PLUGIN_NAME already listed in marketplace.json"
  exit 1
fi

echo "Scaffolding plugin: $PLUGIN_NAME"
echo "  Folder:   plugins/$FOLDER/"
echo "  Category: $CATEGORY"
echo "  Desc:     $DESCRIPTION"
echo ""

# 1. Copy template
cp -r "$TEMPLATE" "$TARGET"

# 2. Patch plugin.json  (path passed as argv so MSYS handles Windows path translation)
node -e "
  const fs = require('fs');
  const path = require('path');
  const [target, name, desc] = process.argv.slice(1);
  const p = path.join(target, '.claude-plugin', 'plugin.json');
  const j = JSON.parse(fs.readFileSync(p, 'utf8'));
  j.name = name;
  j.description = desc;
  fs.writeFileSync(p, JSON.stringify(j, null, 2) + '\n');
" "$TARGET" "$PLUGIN_NAME" "$DESCRIPTION"

# 3. Add entry to marketplace.json
node -e "
  const fs = require('fs');
  const [marketplacePath, name, folder, category, tier, desc] = process.argv.slice(1);
  const m = JSON.parse(fs.readFileSync(marketplacePath, 'utf8'));
  m.plugins.push({
    name,
    source: './plugins/' + folder,
    category,
    tier,
    version: '1.0.0',
    description: desc,
    dependencies: ['omega-core']
  });
  fs.writeFileSync(marketplacePath, JSON.stringify(m, null, 2) + '\n');
" "$MARKETPLACE" "$PLUGIN_NAME" "$FOLDER" "$CATEGORY" "$TIER" "$DESCRIPTION"

echo "  plugin.json patched"
echo "  marketplace.json updated (added $PLUGIN_NAME)"
echo ""
echo "═══════════════════════════════════════════════════════════════"
echo "Plugin scaffolded: $PLUGIN_NAME"
echo "═══════════════════════════════════════════════════════════════"
echo ""
echo "Next steps:"
echo "  1. Add commands/agents/skills under plugins/$FOLDER/"
echo "  2. Test:    npm test"
echo "  3. Sync to distribution repo:"
echo "       bash tools/sync-to-plugins-repo.sh"
echo ""
