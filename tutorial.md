# Docker MCP Tutorial

This guide shows how to build, run, and verify the Dockerized Edge Impulse MCP server.

## Prerequisites
- Docker Desktop or compatible engine
- A local clone of this repo
- Edge Impulse API key (set in an env file or exported as `EI_API_KEY`)

## 1) Build the image
```bash
# from repo root
npm run build
docker build -t ei-agentic-claude:latest .
```

## 2) Prepare environment
Create `.env.test` (git-ignored) with your keys:
```
EI_API_KEY=ei_xxx
ANTHROPIC_API_KEY=optional_claude_key
```

## 3) Run the MCP server container
Interactive stdio session (matches Claude MCP expectations):
```bash
docker run --rm -it --name ei-mcp \
  -v "$PWD/.env.test:/app/.env.test:ro" \
  ei-agentic-claude:latest
```
You should see the readiness line `Edge Impulse MCP server running on stdio`.

Detached run with basic limits:
```bash
docker run --rm -d --name ei-mcp \
  --cpus=0.5 --memory=512m \
  -v "$PWD/.env.test:/app/.env.test:ro" \
  ei-agentic-claude:latest
```
Check health:
```bash
docker ps --filter name=ei-mcp --format '{{.Status}}'
docker logs ei-mcp | tail -n 20
```

## 4) Run test suites (with timeouts)
- Container smoke: `npm run docker:test` (waits up to 30s for readiness)
- Project connectivity: `npm run project:test` (60s per CLI call, uses `.env.test`)
- Prompt/LLM simulated apply flow: `npm run test:apply-flow` (60s per fetch, falls back to placeholders if API response isn’t JSON)
- Unit tests: `npm test` (Vitest, 30s per test)

## 5) Using with Claude Code (MCP)
Point Claude Code at the container command (stdio transport). Example launcher snippet:
```bash
claude mcp add edge-impulse -- "docker run --rm ei-agentic-claude:latest"
```
If you keep the container running, simply reference its name and exec your tool wiring accordingly.

## 6) Troubleshooting
- Missing readiness log: inspect `docker logs ei-mcp` for TypeScript build issues.
- Auth failures: ensure `EI_API_KEY` is available inside the container (`docker exec ei-mcp env | grep EI_`).
- Healthcheck failing: the container expects `dist/mcp-server.js` to be running; rebuild if you changed sources.
- Large image: runtime installs production deps only; run `docker system prune` if local layers pile up.
- Prompt tests returning HTML: indicates auth or wrong endpoint; the runner will drop in placeholder JSONs so prompts still generate.

## Cleanup
```bash
docker rm -f ei-mcp 2>/dev/null || true
```
