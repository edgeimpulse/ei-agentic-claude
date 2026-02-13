---
name: ei-regenerate-clients
description: "Regenerate generated API clients/CLI commands, refresh integrity hashes, and run verification tests for ei-agentic-claude."
user-invocable: true
---

# Regenerate Clients + Integrity Gate

## Purpose
When the Studio API evolves, the generated clients and CLI commands need to be regenerated and verified.

## Workflow
1. Clean install + build
   - `npm ci`
   - `npm run build`

2. Regenerate generated sources
   - Run the repo’s Postman/OpenAPI generation workflow used to produce:
     - generated API clients
     - generated CLI command wrappers

3. Refresh integrity hashes
   - `npm run generate-integrity`

4. Verify
   - `npm test`
   - `npm run docker:test`

## Acceptance criteria
- Generated outputs land only in expected generated directories.
- `integrity.json` updates to match regenerated outputs.
- Tests pass before opening a PR.

## Output (recommended)
Create a PR description that includes:
- what changed in the upstream definition
- regeneration commands executed
- test commands executed
