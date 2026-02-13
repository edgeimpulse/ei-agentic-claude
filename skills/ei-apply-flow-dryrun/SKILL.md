---
name: ei-apply-flow-dryrun
description: "Generate optimization/configuration proposals for an Edge Impulse project and produce a dry-run apply pack (no server mutations)."
user-invocable: true
---

# Apply Flow (Dry-Run Only)

## Hard rule
Do **NOT** run any command that changes server state (no create/update/delete/train/apply).
If the user requests a write action, stop and provide:
- a plan,
- the exact commands that would be executed,
- what the user should verify before running them.

## Workflow
1. Identify the target project (read-only)
   - list projects
   - match by name/id

2. Snapshot current configuration (read-only where possible)
   - export relevant JSON/config/state
   - record timestamps and IDs

3. Propose changes
   - rationale
   - expected impact (accuracy vs latency vs memory)
   - risks and rollback

4. Output a “Dry-Run Apply Pack”
   - `outputs/apply-dryrun/<project-id>/before.json`
   - `outputs/apply-dryrun/<project-id>/proposed.json`
   - `outputs/apply-dryrun/<project-id>/diff.md`
   - `outputs/apply-dryrun/<project-id>/commands.sh` (not executed)

## Notes
This skill is intended to pair with tools that can read project configuration via the Studio API
and the `ei-agentic-claude` CLI/MCP integration.
