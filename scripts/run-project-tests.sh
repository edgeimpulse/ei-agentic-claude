#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR=$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)
cd "$ROOT_DIR"

ENV_FILE=.env.test
if [ ! -f "$ENV_FILE" ]; then
  echo "Error: $ENV_FILE not found. Create it from .env.test and keep it out of version control." >&2
  exit 2
fi

# Load env file without printing secrets
set -o allexport
source "$ENV_FILE"
set +o allexport

echo "[run-project-tests] Building project to generate runtime artifacts..."

# Build TypeScript to dist so Node can run compiled JS
npm run build

# Default timeout (seconds) for each CLI invocation to avoid hangs
TIMEOUT="${TIMEOUT:-60}"
timeout_exec() {
  perl -e 'alarm shift @ARGV; exec @ARGV' "$@"
}

echo "[run-project-tests] Using project IDs (not displaying API key):"
echo " - PROJECT_888999_ID=${PROJECT_888999_ID}"
echo " - PROJECT_888996_ID=${PROJECT_888996_ID}"
echo " - PROJECT_888995_ID=${PROJECT_888995_ID}"

FAIL=0

run_get_project() {
  local pid=$1
  echo "[run-project-tests] Querying project ${pid}..."
  # Optionally run inside Docker for isolated test runs
  if [ "${RUN_IN_DOCKER:-}" = "true" ]; then
    CONTAINER=test-project-runner-$$
    echo "[run-project-tests] Starting helper container ${CONTAINER}..."
    docker run --rm -d --name "${CONTAINER}" \
      -e EI_API_KEY="${EI_API_KEY}" \
      -e ORG_EI_API_KEY="${ORG_EI_API_KEY:-}" \
      -e PROJECT_888999_ID="${PROJECT_888999_ID}" \
      -e PROJECT_888996_ID="${PROJECT_888996_ID}" \
      -e PROJECT_888995_ID="${PROJECT_888995_ID}" \
      ei-agentic-claude:latest tail -f /dev/null >/dev/null
    if docker exec "${CONTAINER}" sh -c "perl -e 'alarm ${TIMEOUT}; exec @ARGV' node dist/cli.js get-project --api-key '${EI_API_KEY}' --params '{\"projectId\": \"${pid}\"}'" >/tmp/run-project-output.json 2>/tmp/run-project-err.log; then
      echo "[run-project-tests] OK: ${pid} -> output saved to /tmp/run-project-output.json"
      docker rm -f "${CONTAINER}" >/dev/null 2>&1 || true
    else
      echo "[run-project-tests] ERROR querying ${pid}; see /tmp/run-project-err.log" >&2
      cat /tmp/run-project-err.log >&2 || true
      docker rm -f "${CONTAINER}" >/dev/null 2>&1 || true
      FAIL=1
    fi
  else
    # Use the generated CLI command locally; do not print the API key
    if timeout_exec "$TIMEOUT" node dist/cli.js get-project --api-key "$EI_API_KEY" --params "{\"projectId\": \"${pid}\"}" >/tmp/run-project-output.json 2>/tmp/run-project-err.log; then
      echo "[run-project-tests] OK: ${pid} -> output saved to /tmp/run-project-output.json"
    else
      echo "[run-project-tests] ERROR querying ${pid}; see /tmp/run-project-err.log" >&2
      cat /tmp/run-project-err.log >&2 || true
      FAIL=1
    fi
  fi
}

run_get_project "$PROJECT_888999_ID"
run_get_project "$PROJECT_888996_ID"
run_get_project "$PROJECT_888995_ID"

if [ "$FAIL" -ne 0 ]; then
  echo "[run-project-tests] One or more project queries failed." >&2
  exit 3
fi

echo "[run-project-tests] All project queries completed successfully."
