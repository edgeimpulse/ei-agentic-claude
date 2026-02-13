---
name: ei-issue-triage
description: "Triage workflow for ei-agentic-claude issues: reproduce, collect logs safely, isolate root cause, propose patch and regression tests."
user-invocable: true
---

# EI Issue Triage

## Purpose
Standardize how issues in `ei-agentic-claude` are debugged, reproduced, and fixed without leaking secrets.

## Inputs (do not request secrets)
- Exact command(s) run
- Full error output + stack trace
- OS + Node version (`node -v`, `npm -v`)
- Whether running from TypeScript sources (ts-node) or `dist`
- Whether using CLI, MCP, or Docker

## Workflow
1. **Baseline**
   - `npm ci`
   - `npm run build`
   - `npm test`
   - Optional container smoke: `npm run docker:test`

2. **Reproduce**
   - Reduce to the smallest command/tool-call that triggers the issue.
   - Capture output to a local log file.

3. **Collect diagnostics safely**
   - Node/npm versions, git hash, and env var *presence only* (present/missing).
   - Do not dump `.env` or token values.

4. **Isolate category**
   - Parsing / command routing
   - Auth & headers
   - Generated client integrity
   - Sandbox/runtime
   - Rate limits / API contract drift
   - Docker packaging

5. **Fix plan**
   - File(s) to change and why
   - Minimal patch steps
   - Regression tests to add
   - Docs updates if necessary

6. **Artifacts**
   - `outputs/triage/<issue-id>/repro.md`
   - `outputs/triage/<issue-id>/logs.txt`
   - `outputs/triage/<issue-id>/fix-plan.md`

## Helper script
Use `scripts/collect-logs.sh <issue-id>` to create an initial log bundle.
