#!/bin/bash

# Claude Code + Edge Impulse MCP Setup Script

echo "Setting up Claude Code + Edge Impulse MCP Integration"
echo ""

# Load API keys from .env file if it exists
if [ -f .env ]; then
  echo "Loading API keys from .env file..."
  set -a
  source .env
  set +a
else
  echo "No .env file found. Please create one from .env.example with your API keys."
  echo "API keys configured (using placeholder values)"
fi
echo ""

# Test Claude Code authentication
echo "Testing Claude Code authentication..."
~/.local/bin/claude -p "Test message" --model sonnet
echo ""

# Test MCP server connectivity
echo "Testing MCP server connectivity..."
~/.local/bin/claude mcp list
echo ""

# Test Edge Impulse API access
echo "Testing Edge Impulse API access..."
~/.local/bin/claude -p "List available Edge Impulse API functions" --model sonnet
echo ""

echo "Setup complete! You can now use:"
echo "  claude -p 'your Edge Impulse questions'"
echo "  claude  # for interactive mode"