#!/usr/bin/env bash
set -euo pipefail

# Applies LLM-suggested CLI commands saved by scripts/llm-runner.js
# Defaults to dry-run: to actually execute commands set APPLY_MODE=apply

ROOT_DIR=$(cd "$(dirname "$0")/.." && pwd)
cd "$ROOT_DIR"

set -o allexport
source ./.env.test 2>/dev/null || true
set +o allexport

APPLY_MODE=${APPLY_MODE:-dry}
PLACEHOLDER_LEARN_ID=${PLACEHOLDER_LEARN_ID:-}

OUT_DIR=outputs/apply-commands
mkdir -p "$OUT_DIR"

shopt -s nullglob
for f in outputs/apply-commands/*.sh; do
  echo "---"
  echo "Found suggestion: $f"
  cmd=$(sed -n '1,200p' "$f" | sed -n '1,200p' | tail -n +1)
  # perform simple placeholder replacement
  if [[ -n "$PLACEHOLDER_LEARN_ID" ]]; then
    cmd=$(echo "$cmd" | sed "s/<learnId>/$PLACEHOLDER_LEARN_ID/g")
  fi

  if [[ "$APPLY_MODE" = "apply" ]]; then
    echo "Executing: $cmd"
    eval "$cmd"
  else
    echo "Dry-run (to apply set APPLY_MODE=apply):"
    echo "$cmd"
  fi
done

echo "Done. Processed apply suggestions in $OUT_DIR"
