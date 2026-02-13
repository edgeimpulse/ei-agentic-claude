# OpenClaw Skills Pack for ei-agentic-claude

This zip contains a set of local OpenClaw skills intended to be used alongside the
`edgeimpulse/ei-agentic-claude` repository (Edge Impulse + MCP + CLI integration).

## Included skills
- `ei-safe-ops` — read-first / explicit approval for writes
- `ei-issue-triage` — structured reproduction + safe log capture + fix plan
- `ei-apply-flow-dryrun` — propose changes, produce diffs, never mutate
- `ei-regenerate-clients` — regenerate generated clients + integrity gate + tests
- `ei-release-gate` — pre-release checklist + smoke gates
- `ei-studio-api-verify` — validate intended operations against Studio API docs

## Install
Copy the `skills/` directory into your OpenClaw skills directory, e.g.:

- `~/.openclaw/skills/`  (or your configured OpenClaw workspace skills folder)

Then enable skills in `openclaw.json`.

## Example openclaw.json
This is a minimal example showing skill registration. Ensure each key is unique.

```json
{
  "skills": {
    "install": { "nodeManager": "npm" },
    "entries": {
      "ei-safe-ops": { "enabled": true },
      "ei-issue-triage": { "enabled": true },
      "ei-apply-flow-dryrun": { "enabled": true },
      "ei-regenerate-clients": { "enabled": true },
      "ei-release-gate": { "enabled": true },
      "ei-studio-api-verify": { "enabled": true }
    }
  }
}
```

Verify registration:

```bash
openclaw skills list
```
