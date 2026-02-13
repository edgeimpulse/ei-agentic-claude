# Validation notes against Edge Impulse Studio API docs

This pack is designed to be compatible with the Studio API surface and interaction patterns
documented at: https://docs.edgeimpulse.com/apis/studio#studio-api

## Key constraints reflected in skills

1. Base URL
- Studio API base URL is `https://studio.edgeimpulse.com/v1`.

2. Auth types
- Supports API key auth via `x-api-key` header.
- JWT auth exists but API-key is the simplest for project-scoped automation.

3. Project-scoped routing
- Most endpoints are under `/v1/api/{projectId}/...`.

4. Jobs model
- Long-running tasks return a job identifier and should be polled/monitored.
- Skills emphasize planning + verification around job-based workflows.

5. Deprecated endpoints awareness
- Some endpoints (e.g. legacy deployment download) are marked deprecated; skills recommend
  confirming and using replacements.

## Where to extend
If you add new skills that execute writes, ensure:
- explicit confirmation gate (ei-safe-ops)
- a before/after snapshot and diff
- a rollback plan
- avoid deprecated endpoints and prefer documented replacements

