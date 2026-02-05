#!/bin/sh
# POSIX-compatible prompt test runner for use inside minimal containers
set -eu
ROOT_DIR=$(cd "$(dirname "$0")/.." && pwd)
cd "$ROOT_DIR"

echo "[run-prompt-tests-sh] Ensuring built artifacts..."
if [ -d dist ]; then
  echo "[run-prompt-tests-sh] Found existing /app/dist — skipping build"
else
  echo "[run-prompt-tests-sh] Building project (dist not found)..."
  npm run build
fi

if [ -z "${PROJECT_888999_ID:-}" ] || [ -z "${PROJECT_888996_ID:-}" ] || [ -z "${PROJECT_888995_ID:-}" ]; then
  echo "One or more PROJECT_* env vars missing; ensure .env.test is mounted into /app/.env.test" >&2
  exit 2
fi

echo "[run-prompt-tests-sh] Fetching projects..."
node dist/cli.js get-project --api-key "$EI_API_KEY" --params "{\"projectId\": \"$PROJECT_888999_ID\"}" > "/tmp/project-$PROJECT_888999_ID.json" 2>/tmp/run-prompt-err.log || true
node dist/cli.js get-project --api-key "$EI_API_KEY" --params "{\"projectId\": \"$PROJECT_888996_ID\"}" > "/tmp/project-$PROJECT_888996_ID.json" 2>/tmp/run-prompt-err.log || true
node dist/cli.js get-project --api-key "$EI_API_KEY" --params "{\"projectId\": \"$PROJECT_888995_ID\"}" > "/tmp/project-$PROJECT_888995_ID.json" 2>/tmp/run-prompt-err.log || true

# Ensure files minimally valid JSON
for f in /tmp/project-*.json; do
  if [ ! -f "$f" ]; then
    echo "Missing expected project file: $f" >&2
    exit 1
  fi
  first=$(dd if="$f" bs=1 count=1 2>/dev/null || true)
  case "$first" in
    '{') ;;
    *) echo "Warning: $f does not start with '{' - placeholder will be created" >&2; pid=$(basename "$f" | sed -E 's/^project-(.*)\.json$/\1/'); cat > "$f" <<JSON
{"id":"$pid","name":"Project $pid","impulse":{}}
JSON
  esac
done

echo "[run-prompt-tests-sh] Generating prompts..."
node ./scripts/generate-prompts.js /tmp/project-$PROJECT_888999_ID.json /tmp/project-$PROJECT_888996_ID.json /tmp/project-$PROJECT_888995_ID.json

echo "[run-prompt-tests-sh] Done. Prompts in /tmp"
