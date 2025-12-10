/**
 * Script to fetch Figma design data
 * Usage: npx tsx scripts/fetch-figma-design.ts
 */

import { FigmaAPI } from '../utils/figma'
import * as fs from 'fs'
import * as path from 'path'

// Configuration
const FIGMA_URL = process.env.FIGMA_URL || 'https://www.figma.com/design/YOUR_FILE_KEY/YOUR_FILE_NAME?node-id=YOUR_NODE_ID'
const FIGMA_TOKEN = process.env.FIGMA_TOKEN || 'YOUR_FIGMA_PERSONAL_ACCESS_TOKEN'

async function main() {
  console.log('🎨 Fetching Figma design data...\n')

  // Parse Figma URL
  const { fileKey, nodeId } = FigmaAPI.parseUrl(FIGMA_URL)
  console.log(`📄 File Key: ${fileKey}`)
  console.log(`🎯 Node ID: ${nodeId}\n`)

  // Initialize Figma API
  const figma = new FigmaAPI({
    accessToken: FIGMA_TOKEN,
    fileKey: fileKey
  })

  try {
    // Fetch file data
    console.log('⏳ Fetching file data...')
    const fileData = await figma.getFile()
    console.log(`✅ File fetched: ${fileData.name}`)
    console.log(`📅 Last modified: ${fileData.lastModified}`)
    console.log(`📸 Thumbnail: ${fileData.thumbnailUrl}\n`)

    // Save full file data
    const outputDir = path.join(process.cwd(), 'figma-data')
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true })
    }

    const fileDataPath = path.join(outputDir, 'file-data.json')
    fs.writeFileSync(fileDataPath, JSON.stringify(fileData, null, 2))
    console.log(`💾 Full file data saved to: ${fileDataPath}\n`)

    // Fetch specific node if provided
    if (nodeId) {
      const formattedNodeId = FigmaAPI.formatNodeId(nodeId)
      console.log(`⏳ Fetching node: ${formattedNodeId}...`)

      const nodeData = await figma.getNodes([formattedNodeId])
      console.log(`✅ Node data fetched\n`)

      // Save node data
      const nodeDataPath = path.join(outputDir, 'node-data.json')
      fs.writeFileSync(nodeDataPath, JSON.stringify(nodeData, null, 2))
      console.log(`💾 Node data saved to: ${nodeDataPath}\n`)

      // Fetch images for the node
      console.log(`⏳ Fetching images for node...`)
      const images = await figma.getImages([formattedNodeId], 'png', 2)
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
      fileData.document.children.forEach((page: any, index: number) => {
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
