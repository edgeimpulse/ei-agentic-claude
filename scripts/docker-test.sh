#!/usr/bin/env bash
set -euo pipefail

IMAGE=ei-agentic-claude:latest
CONTAINER=test-ei-mcp-$$
TIMEOUT=30

echo "[docker-test] Building image ${IMAGE}..."
docker build -t "${IMAGE}" .

echo "[docker-test] Running container ${CONTAINER}..."
# Pass through .env.test variables if present to support org/project API keys
ENV_FILE=.env.test
if [ -f "$ENV_FILE" ]; then
  # load to export for docker env args
  set -o allexport
  source "$ENV_FILE"
  set +o allexport
fi

echo "[docker-test] Running container ${CONTAINER}..."
docker run --rm -d --name "${CONTAINER}" \
  -e EI_API_KEY="${EI_API_KEY:-}" \
  -e ORG_EI_API_KEY="${ORG_EI_API_KEY:-}" \
  -e PROJECT_888999_ID="${PROJECT_888999_ID:-}" \
  -e PROJECT_888996_ID="${PROJECT_888996_ID:-}" \
  -e PROJECT_888995_ID="${PROJECT_888995_ID:-}" \
  "${IMAGE}"

echo "[docker-test] Waiting up to ${TIMEOUT}s for server to report ready..."
for i in $(seq 1 ${TIMEOUT}); do
  if docker logs "${CONTAINER}" 2>&1 | grep -q "Edge Impulse MCP server running on stdio"; then
    echo "[docker-test] Server started successfully"
    docker rm -f "${CONTAINER}" >/dev/null 2>&1 || true
    exit 0
  fi
  sleep 1
done

echo "[docker-test] Server did not start within ${TIMEOUT}s"
docker logs "${CONTAINER}" || true
docker rm -f "${CONTAINER}" >/dev/null 2>&1 || true
exit 2
