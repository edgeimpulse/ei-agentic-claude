---
name: ei-safe-ops
description: "Guard-railed operating procedure for using the Edge Impulse MCP server and CLI safely (read-only first, explicit approval before writes)."
user-invocable: true
---

# EI Safe Ops

## Purpose
This skill provides guardrails for operating `ei-agentic-claude` (CLI and MCP server) in a safe, repeatable way.

## Operating rules
1. **Default to READ operations**:
   - List, get, describe, inspect, export, status.
   - Do not change server state unless the user explicitly approves.

2. **No secret exposure**:
   - Never print API keys, tokens, `.env` contents, or full environment dumps.
   - If checking keys exist, state only **present/missing**.

3. **Before ANY write operation** (create/update/delete/train/apply):
   - Produce a **Change Plan** containing:
     - Objective
     - Exact endpoint(s) or CLI command(s) to be invoked
     - Risks
     - Rollback steps
     - Artifacts/logs to be saved
   - Ask: **"Proceed with write operations? (yes/no)"**
   - If no, stop and provide only the plan.

4. **For project configuration changes**:
   - Capture a **before snapshot** (JSON export/config text).
   - Propose edits and show a diff.
   - Prefer dry-run mode when possible.

5. **After execution (when approved)**:
   - Re-query state to confirm changes took effect.
   - Save outputs to `outputs/` and summarize results.

## Example interactions
- "List my Edge Impulse projects" → read-only actions, no approval required.
- "Change my impulse config" → Change Plan + explicit approval required.
