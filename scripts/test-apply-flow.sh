#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR=$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)
cd "$ROOT_DIR"

echo "[test-apply-flow] Ensuring prompts exist..."
npm run prompt:test

echo "[test-apply-flow] Running simulated LLM runner..."
node scripts/llm-runner-sim.js

echo "[test-apply-flow] Listing simulated responses and apply scripts:"
ls -la outputs/llm-responses || true
ls -la outputs/apply-commands || true

echo "[test-apply-flow] Dry-run apply of simulated suggestions:"
./scripts/apply-llm-suggestions.sh

echo "[test-apply-flow] Done. Inspect outputs/apply-commands and outputs/llm-responses"
