# Testing Progress
Date: 2026-02-13
Environment: Windows, Node 22.17.1
Status: 100% (Testing complete)

Test Matrix
| ID | Test | Command | Result | Notes |
| --- | --- | --- | --- | --- |
| T1 | CLI help | `node launch-cli.mjs --help` | Pass | 544 commands listed |
| T2 | Smoke tests | `npm run smoke` | Pass | Windows path resolution fixed |
| T3 | Unit tests | `npm test` | Pass | Uses `vitest --run --pool=forks` |
| T4 | MCP tools list | `tools/list` | Pass | 544 tools returned |
| T5 | MCP list_active_projects | `tools/call` | Pass | 1 project returned |
| T6 | MCP project_information | `tools/call` | Pass | Project 888999 |
| T7 | MCP get_impulse | `tools/call` | Pass | learnId=16 (anomaly-gmm) |
| T8 | MCP anomaly_information | `tools/call` | Pass | learnId=16 |
| T9 | MCP list_active_organizations | `tools/call` | Pass | 1 org returned |
| T10 | MCP test script | `npm run test-mcp` | Pass | End-to-end success (544 tools) |
| T11 | OpenAPI coverage check | `src/openapi/openapi.yml` vs generated clients | Pass | 544 OpenAPI ops, 544 client ops, 0 missing, 0 extra |
| T12 | CLI E2E vs OpenAPI | CLI calls: `list-active-projects`, `project-information`, `get-impulse` | Pass | Project 888999 validated |

# Issues
| ID | Severity | Area | Status | Description | Resolution |
| --- | --- | --- | --- | --- | --- |
| I1 | High | Generated API clients | Resolved | Base URL was missing `/v1`, path/query params not mapped, and JSON parsing failed on non-JSON responses. | Updated generator to use collection `baseUrl`, map path/query params, and handle non-JSON errors. Regenerated clients and rebuilt dist. |
| I2 | Medium | Smoke test harness | Resolved | Windows path resolution produced `C:\\C:\\...` and broke `npm run smoke`. | Switched to `fileURLToPath` + `path.dirname`. |
| I3 | Medium | Unit tests | Resolved | `npm test` hung and lacked a non-watch default. | Updated `package.json` test script to `vitest --run --pool=forks`. |
| I4 | Medium | MCP test harness | Resolved | `test-mcp-simple.js` timed out and didn't support chunked JSONL. | Rewrote harness to buffer JSONL, increased timeout, and added functional MCP calls. |
| I5 | Low | Admin org endpoints | Resolved | Admin-only endpoints not in the OpenAPI spec were removed to align CLI with OpenAPI coverage. | CLI now matches OpenAPI operations; org validation uses `list_active_organizations`. |
| I6 | High | OpenAPI coverage | Resolved | OpenAPI spec has 544 operations; generated clients/CLI now cover all 544 with no extras. | Added reconciliation script and regenerated clients/CLI. |
| I7 | High | OpenAPI parameter resolution | Resolved | `$ref` parameters were not resolved, leaving missing path params in some generated clients. | Reconcile script now resolves `$ref` parameters and derives path params from URLs, then rewrites existing clients. |

# OpenAPI Validation
Date: 2026-02-13
Spec: `src/openapi/openapi.yml`

Summary
- OpenAPI operations: 544
- Generated client operations: 544
- Missing in clients: 0
- Extra in clients: 0

Notes
- Coverage is derived from generated clients, which map 1:1 to CLI commands.
