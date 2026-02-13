#!/usr/bin/env bash
set -euo pipefail

ISSUE_ID="${1:-unknown}"
OUT_DIR="outputs/triage/${ISSUE_ID}"
mkdir -p "${OUT_DIR}"

{
  echo "== System =="
  uname -a || true
  echo
  echo "== Node/NPM =="
  node -v || true
  npm -v || true
  echo
  echo "== Git =="
  git rev-parse HEAD || true
  git status --porcelain || true
  echo
  echo "== Env presence (no values) =="
  for k in EI_API_KEY ANTHROPIC_API_KEY; do
    if [ -n "${!k-}" ]; then echo "${k}=present"; else echo "${k}=missing"; fi
  done
} > "${OUT_DIR}/env.txt"

echo "Wrote: ${OUT_DIR}/env.txt"
echo "Next: append failing command output to ${OUT_DIR}/logs.txt (do not include secrets)."
