#!/usr/bin/env sh
# Entrypoint: load env file(s) if present, print readiness, then exec command
# Looks for /app/.env, /app/.env.test (in that order) and exports variables.

load_env_file(){
	f="$1"
	if [ -f "$f" ]; then
		echo "Loading env from $f"
		# shellcheck disable=SC1090
		set -o allexport
		# read lines and export only simple KEY=VALUE pairs
		while IFS= read -r line || [ -n "$line" ]; do
			case "$line" in
				''|\#*) continue ;;
			esac
			if echo "$line" | grep -qE '^[A-Z0-9_]+=.*$'; then
				k=$(echo "$line" | sed -E 's/=.*$//')
				v=$(echo "$line" | sed -E 's/^[^=]*=//')
				export "$k"="$v"
			fi
		done < "$f"
		set +o allexport
	fi
}

# Prefer .env.test if present for testing
load_env_file /app/.env.test
load_env_file /app/.env

printf "Edge Impulse MCP server running on stdio\n" >&1
exec "$@"
