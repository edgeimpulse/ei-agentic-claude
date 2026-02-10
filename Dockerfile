FROM node:20-alpine AS builder

WORKDIR /app

# Install dev deps for build
COPY package.json package-lock.json* ./
RUN npm ci --no-progress

# Copy sources and build
COPY . .
RUN npm run build

FROM node:20-alpine AS runtime
WORKDIR /app

ENV NODE_ENV=production

# Install production-only deps without running lifecycle scripts (already built in builder)
COPY package.json package-lock.json* ./
RUN npm ci --omit=dev --no-progress --ignore-scripts

# Copy built dist and original generated API sources required at runtime
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/src/postman ./src/postman
# Copy helper scripts
COPY --from=builder /app/scripts ./scripts

# Create non-root user and group, change ownership of app dir
RUN addgroup -S app && adduser -S app -G app
RUN chown -R app:app /app

# Use non-root user
USER app

# Add a tiny entrypoint that prints a deterministic readiness line
COPY --chown=app:app scripts/entrypoint.sh /app/entrypoint.sh
RUN chmod +x /app/entrypoint.sh

# Expose a simple HEALTHCHECK that verifies the node process is running
HEALTHCHECK --interval=10s --timeout=3s --retries=3 CMD sh -c "pgrep -f 'dist/mcp-server.js' >/dev/null || exit 1"

# Run entrypoint which prints readiness line then execs the MCP server
ENTRYPOINT ["/app/entrypoint.sh"]
CMD ["npm", "run", "mcp-server"]
