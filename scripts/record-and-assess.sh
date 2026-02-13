#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR=$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)
cd "$ROOT_DIR"

ENV_FILE=.env.test
if [ ! -f "$ENV_FILE" ]; then
  echo "Error: $ENV_FILE not found. Create it from .env.test and keep it out of version control." >&2
  exit 2
fi

# Load env
set -o allexport
source "$ENV_FILE"
set +o allexport

TIMESTAMP=$(date -u +%Y%m%dT%H%M%SZ)

OUTDIR=outputs/assessments
mkdir -p "$OUTDIR"

PROJECTS=("$PROJECT_888999_ID" "$PROJECT_888996_ID" "$PROJECT_888995_ID")

echo "[record-and-assess] Building project..."
npm run build

for pid in "${PROJECTS[@]}"; do
  safe=$(echo "$pid" | tr ':' '_' | tr '/' '_')
  workdir="$OUTDIR/${safe}_${TIMESTAMP}"
  mkdir -p "$workdir"

  before="$workdir/before.json"
  after="$workdir/after.json"
  report="$workdir/assessment.json"

  echo "[record-and-assess] Fetching baseline for ${pid} -> ${before}"
  node dist/cli.js get-project --api-key "$EI_API_KEY" --params "{\"projectId\": \"${pid}\"}" > "$before" 2>/tmp/record-err.log || true
  # Validate JSON; if invalid or empty, write placeholder so assessment can continue
  if ! node -e "const fs=require('fs'); try{const j=JSON.parse(fs.readFileSync(process.argv[1],'utf8')); console.log('ok');}catch(e){process.exit(1);} " "$before" 2>/dev/null; then
    echo "[record-and-assess] Baseline output invalid or empty; writing placeholder"
    cat > "$before" <<JSON
{"id":"${pid}","name":"Project ${pid}","impulse":{}}
JSON
  fi

  echo "[record-and-assess] --- BASELINE saved. You can run apply commands now (or let script run none)."
  # For automated runs we take a short pause to allow manual/automated interventions
  sleep 1

  # No automatic apply by default. If user sets APPLY_CLI env var, run it.
  if [ -n "${APPLY_CLI:-}" ]; then
    echo "[record-and-assess] Running apply command: ${APPLY_CLI}"
    eval "$APPLY_CLI" || echo "apply command failed" >&2
  fi

  echo "[record-and-assess] Fetching post-change snapshot for ${pid} -> ${after}"
  node dist/cli.js get-project --api-key "$EI_API_KEY" --params "{\"projectId\": \"${pid}\"}" > "$after" 2>/tmp/record-err2.log || true
  if ! node -e "const fs=require('fs'); try{const j=JSON.parse(fs.readFileSync(process.argv[1],'utf8')); console.log('ok');}catch(e){process.exit(1);} " "$after" 2>/dev/null; then
    echo "[record-and-assess] After snapshot invalid or empty; writing placeholder"
    cat > "$after" <<JSON
{"id":"${pid}","name":"Project ${pid}","impulse":{}}
JSON
  fi

  echo "[record-and-assess] Running assessment..."
  node ./scripts/assess.js "$before" "$after" "$report"
done

echo "[record-and-assess] All assessments written to $OUTDIR"
