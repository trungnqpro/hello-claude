#!/bin/bash

# Figma API configuration
FILE_KEY="${FIGMA_FILE_KEY:-YOUR_FILE_KEY}"
NODE_ID="${FIGMA_NODE_ID:-YOUR_NODE_ID}"
TOKEN="${FIGMA_TOKEN:-YOUR_FIGMA_PERSONAL_ACCESS_TOKEN}"

# Create output directory
mkdir -p figma-data

echo "🎨 Fetching Figma design data..."
echo ""

# Fetch file data
echo "⏳ Fetching file data..."
curl -H "X-Figma-Token: $TOKEN" \
  "https://api.figma.com/v1/files/$FILE_KEY" \
  -o figma-data/file-data.json

echo "✅ File data saved to figma-data/file-data.json"
echo ""

# Fetch specific node
echo "⏳ Fetching node data for: $NODE_ID..."
curl -H "X-Figma-Token: $TOKEN" \
  "https://api.figma.com/v1/files/$FILE_KEY/nodes?ids=$NODE_ID" \
  -o figma-data/node-data.json

echo "✅ Node data saved to figma-data/node-data.json"
echo ""

# Fetch images
echo "⏳ Fetching image URLs..."
curl -H "X-Figma-Token: $TOKEN" \
  "https://api.figma.com/v1/images/$FILE_KEY?ids=$NODE_ID&format=png&scale=2" \
  -o figma-data/images.json

echo "✅ Image URLs saved to figma-data/images.json"
echo ""
echo "✨ Done! Check the figma-data directory for output files."
