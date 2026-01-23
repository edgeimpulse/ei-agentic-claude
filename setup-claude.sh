#!/bin/bash

# Claude Code + Edge Impulse MCP Setup Script

echo "🚀 Setting up Claude Code + Edge Impulse MCP Integration"
echo ""

# Set API keys (you'll need to replace these with your actual keys)
export ANTHROPIC_API_KEY="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"
export EI_API_KEY="ei_your_edge_impulse_api_key_here"  # Replace with your actual EI key

echo "✅ API keys configured"
echo ""

# Test Claude Code authentication
echo "🧪 Testing Claude Code authentication..."
~/.local/bin/claude -p "Hello! Claude Code + Edge Impulse MCP integration test" --model sonnet
echo ""

# Test MCP server connectivity
echo "🔗 Testing MCP server connectivity..."
~/.local/bin/claude mcp list
echo ""

# Test Edge Impulse API access
echo "🎯 Testing Edge Impulse API access..."
~/.local/bin/claude -p "Show me 3 Edge Impulse API functions you can access" --model sonnet
echo ""

echo "🎉 Setup complete! You can now use:"
echo "  claude -p 'your Edge Impulse questions'"
echo "  claude  # for interactive mode"