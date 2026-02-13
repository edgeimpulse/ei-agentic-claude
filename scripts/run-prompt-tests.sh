#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR=$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)
cd "$ROOT_DIR"

ENV_FILE=.env.test
if [ ! -f "$ENV_FILE" ]; then
  echo "Error: $ENV_FILE not found. Create it from .env.test and keep it out of version control." >&2
  exit 2
fi

# Load env (Edge Impulse key required)
set -o allexport
source "$ENV_FILE"
set +o allexport

echo "[run-prompt-tests] Building project..."
npm run build

# Default timeout (seconds) for each CLI invocation to avoid hangs
TIMEOUT="${TIMEOUT:-60}"
timeout_exec() {
  perl -e 'alarm shift @ARGV; exec @ARGV' "$@"
}

PROJECTS=("$PROJECT_888999_ID" "$PROJECT_888996_ID" "$PROJECT_888995_ID")

for pid in "${PROJECTS[@]}"; do
  outfile="/tmp/project-${pid}.json"
  echo "[run-prompt-tests] Fetching project ${pid} -> ${outfile}"
  timeout_exec "$TIMEOUT" node dist/cli.js get-project --api-key "$EI_API_KEY" --params "{\"projectId\": \"${pid}\"}" > "$outfile" 2>/tmp/run-prompt-err.log || true
  # Validate JSON
  if ! head -c 1 "$outfile" | grep -q '{'; then
    echo "[run-prompt-tests] Warning: output for ${pid} does not look like JSON — saving placeholder and continuing." >&2
    sed -n '1,200p' /tmp/run-prompt-err.log >&2 || true
    # Create a minimal placeholder JSON so prompts can still be generated
    cat > "$outfile" <<JSON
{"id":"${pid}","name":"Project ${pid}","impulse":{}}
JSON
  fi
done

echo "[run-prompt-tests] Generating prompts from project JSONs..."
node ./scripts/generate-prompts.js /tmp/project-${PROJECT_888999_ID}.json /tmp/project-${PROJECT_888996_ID}.json /tmp/project-${PROJECT_888995_ID}.json

echo "[run-prompt-tests] Generated prompts saved under /tmp/prompts-<projectId>.json"

if [ -n "${ANTHROPIC_API_KEY:-}" ]; then
  echo "[run-prompt-tests] ANTHROPIC_API_KEY detected — sending prompts to Anthropic is optional and not yet implemented in this runner. Use /tmp/prompts-<projectId>.json files to call the LLM API."
fi

echo "[run-prompt-tests] Done."
