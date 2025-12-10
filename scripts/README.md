# Figma Design Fetch Scripts

Scripts to fetch design data from Figma API, bypassing 403 Forbidden errors.

## Setup

1. Get your Figma Personal Access Token:
   - Go to [Figma Account Settings](https://www.figma.com/settings)
   - Navigate to "Personal access tokens"
   - Generate a new token

2. Create a `.env` file in the project root:
   ```bash
   cp .env.example .env
   ```

3. Update the `.env` file with your credentials:
   ```env
   FIGMA_TOKEN=your_figma_token_here
   FIGMA_URL=https://www.figma.com/design/FILE_KEY/FILE_NAME?node-id=NODE_ID
   ```

## Usage

### Option 1: Bash Script (Recommended)

```bash
# Set environment variables
export FIGMA_TOKEN="your_token"
export FIGMA_FILE_KEY="xpdGoY96vb93v4Ys4ljdaE"
export FIGMA_NODE_ID="7975:36627"

# Run the script
bash scripts/fetch-figma-simple.sh
```

### Option 2: Node.js Script

```bash
# Set environment variables
export FIGMA_TOKEN="your_token"
export FIGMA_URL="https://www.figma.com/design/..."

# Run the script
node scripts/fetch-figma-design.mjs
```

## Output

The scripts will create a `figma-data/` directory containing:

- `file-data.json` - Complete file structure and design data
- `node-data.json` - Specific node/frame data
- `images.json` - Image URLs for rendered designs
- `design-image.png` - Downloaded design screenshot

## Why This Works

Figma's web interface blocks automated requests with 403 Forbidden errors. However, the official Figma REST API allows programmatic access with a Personal Access Token, enabling:

- ✅ Fetch complete design files
- ✅ Extract specific frames/components
- ✅ Download rendered images
- ✅ Parse design tokens (colors, spacing, typography)

## Security Note

**NEVER commit your Figma Personal Access Token to git!**

The `.env` file is already in `.gitignore` to prevent accidental commits.
