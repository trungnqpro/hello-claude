/**
 * Script to fetch Figma design data
 * Usage: node scripts/fetch-figma-design.mjs
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Configuration
const FIGMA_URL = process.env.FIGMA_URL || 'https://www.figma.com/design/YOUR_FILE_KEY/YOUR_FILE_NAME?node-id=YOUR_NODE_ID'
const FIGMA_TOKEN = process.env.FIGMA_TOKEN || 'YOUR_FIGMA_PERSONAL_ACCESS_TOKEN'
const FIGMA_API_BASE = 'https://api.figma.com/v1'

/**
 * Parse Figma URL to extract file key and node ID
 */
function parseUrl(url) {
  const urlObj = new URL(url)
  const pathParts = urlObj.pathname.split('/')

  // Extract file key (usually after /design/ or /file/)
  const fileKeyIndex = pathParts.findIndex(part => part === 'design' || part === 'file')
  const fileKey = fileKeyIndex !== -1 ? pathParts[fileKeyIndex + 1] : ''

  // Extract node ID from query params
  const nodeId = urlObj.searchParams.get('node-id')

  return { fileKey, nodeId }
}

/**
 * Convert node ID format (7975-36627 to 7975:36627)
 */
function formatNodeId(nodeId) {
  return nodeId.replace('-', ':')
}

/**
 * Fetch Figma file data
 */
async function getFile(fileKey, token) {
  const response = await fetch(`${FIGMA_API_BASE}/files/${fileKey}`, {
    headers: {
      'X-Figma-Token': token
    }
  })

  if (!response.ok) {
    throw new Error(`Figma API error: ${response.status} ${response.statusText}`)
  }

  return await response.json()
}

/**
 * Get specific node(s) from file
 */
async function getNodes(fileKey, nodeIds, token) {
  const ids = nodeIds.join(',')
  const response = await fetch(
    `${FIGMA_API_BASE}/files/${fileKey}/nodes?ids=${ids}`,
    {
      headers: {
        'X-Figma-Token': token
      }
    }
  )

  if (!response.ok) {
    throw new Error(`Figma API error: ${response.status} ${response.statusText}`)
  }

  return await response.json()
}

/**
 * Get image URLs for nodes
 */
async function getImages(fileKey, nodeIds, token, format = 'png', scale = 2) {
  const ids = nodeIds.join(',')
  const response = await fetch(
    `${FIGMA_API_BASE}/images/${fileKey}?ids=${ids}&format=${format}&scale=${scale}`,
    {
      headers: {
        'X-Figma-Token': token
      }
    }
  )

  if (!response.ok) {
    throw new Error(`Figma API error: ${response.status} ${response.statusText}`)
  }

  return await response.json()
}

async function main() {
  console.log('🎨 Fetching Figma design data...\n')

  // Parse Figma URL
  const { fileKey, nodeId } = parseUrl(FIGMA_URL)
  console.log(`📄 File Key: ${fileKey}`)
  console.log(`🎯 Node ID: ${nodeId}\n`)

  try {
    // Fetch file data
    console.log('⏳ Fetching file data...')
    const fileData = await getFile(fileKey, FIGMA_TOKEN)
    console.log(`✅ File fetched: ${fileData.name}`)
    console.log(`📅 Last modified: ${fileData.lastModified}`)
    console.log(`📸 Thumbnail: ${fileData.thumbnailUrl}\n`)

    // Save full file data
    const outputDir = path.join(path.dirname(__dirname), 'figma-data')
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true })
    }

    const fileDataPath = path.join(outputDir, 'file-data.json')
    fs.writeFileSync(fileDataPath, JSON.stringify(fileData, null, 2))
    console.log(`💾 Full file data saved to: ${fileDataPath}\n`)

    // Fetch specific node if provided
    if (nodeId) {
      const formattedNodeId = formatNodeId(nodeId)
      console.log(`⏳ Fetching node: ${formattedNodeId}...`)

      const nodeData = await getNodes(fileKey, [formattedNodeId], FIGMA_TOKEN)
      console.log(`✅ Node data fetched\n`)

      // Save node data
      const nodeDataPath = path.join(outputDir, 'node-data.json')
      fs.writeFileSync(nodeDataPath, JSON.stringify(nodeData, null, 2))
      console.log(`💾 Node data saved to: ${nodeDataPath}\n`)

      // Fetch images for the node
      console.log(`⏳ Fetching images for node...`)
      const images = await getImages(fileKey, [formattedNodeId], FIGMA_TOKEN, 'png', 2)
      console.log(`✅ Image URLs fetched\n`)

      // Save image URLs
      const imagesPath = path.join(outputDir, 'images.json')
      fs.writeFileSync(imagesPath, JSON.stringify(images, null, 2))
      console.log(`💾 Image URLs saved to: ${imagesPath}\n`)

      // Print image URLs
      if (images.images && images.images[formattedNodeId]) {
        console.log(`🖼️  Image URL: ${images.images[formattedNodeId]}\n`)
      }
    }

    // Print document structure overview
    console.log('📊 Document Structure:')
    console.log(`  - Name: ${fileData.document.name}`)
    console.log(`  - Type: ${fileData.document.type}`)
    console.log(`  - Children: ${fileData.document.children?.length || 0} pages\n`)

    if (fileData.document.children) {
      console.log('📄 Pages:')
      fileData.document.children.forEach((page, index) => {
        console.log(`  ${index + 1}. ${page.name} (${page.children?.length || 0} frames)`)
      })
    }

    console.log('\n✨ Done! Check the figma-data directory for output files.')

  } catch (error) {
    console.error('❌ Error fetching Figma data:', error)
    process.exit(1)
  }
}

main()
