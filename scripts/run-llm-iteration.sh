#!/usr/bin/env bash
set -euo pipefail

# Wrapper to run the LLM iteration using prompts in /tmp
if [ -f ./.env.test ]; then
  set -o allexport
  source ./.env.test
  set +o allexport
fi

if [ -z "${ANTHROPIC_API_KEY:-}" ]; then
  echo "Missing ANTHROPIC_API_KEY in environment or ./.env.test. Add it and retry." >&2
  exit 2
fi

node scripts/llm-runner.js
