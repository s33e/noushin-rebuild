#!/bin/bash
# Simple HTTP server for testing

echo "🚀 Starting local server..."
echo "📂 Serving: /data/.openclaw/workspace/noushin-rebuild"
echo "🌐 Visit: http://localhost:8080/new-index.html"
echo ""
echo "Press Ctrl+C to stop"
echo ""

cd /data/.openclaw/workspace/noushin-rebuild
python3 -m http.server 8080
