/**
 * Figma API Utility
 * Documentation: https://www.figma.com/developers/api
 */

const FIGMA_API_BASE = 'https://api.figma.com/v1'

export interface FigmaConfig {
  accessToken: string
  fileKey: string
}

export interface FigmaNode {
  id: string
  name: string
  type: string
  children?: FigmaNode[]
  [key: string]: any
}

export interface FigmaFile {
  document: FigmaNode
  components: Record<string, any>
  styles: Record<string, any>
  name: string
  lastModified: string
  thumbnailUrl: string
  version: string
}

export class FigmaAPI {
  private accessToken: string
  private fileKey: string

  constructor(config: FigmaConfig) {
    this.accessToken = config.accessToken
    this.fileKey = config.fileKey
  }

  /**
   * Get file data
   */
  async getFile(): Promise<FigmaFile> {
    const response = await fetch(`${FIGMA_API_BASE}/files/${this.fileKey}`, {
      headers: {
        'X-Figma-Token': this.accessToken
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
  async getNodes(nodeIds: string[]): Promise<any> {
    const ids = nodeIds.join(',')
    const response = await fetch(
      `${FIGMA_API_BASE}/files/${this.fileKey}/nodes?ids=${ids}`,
      {
        headers: {
          'X-Figma-Token': this.accessToken
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
  async getImages(nodeIds: string[], format: 'png' | 'jpg' | 'svg' | 'pdf' = 'png', scale: number = 2): Promise<any> {
    const ids = nodeIds.join(',')
    const response = await fetch(
      `${FIGMA_API_BASE}/images/${this.fileKey}?ids=${ids}&format=${format}&scale=${scale}`,
      {
        headers: {
          'X-Figma-Token': this.accessToken
        }
      }
    )

    if (!response.ok) {
      throw new Error(`Figma API error: ${response.status} ${response.statusText}`)
    }

    return await response.json()
  }

  /**
   * Parse Figma URL to extract file key and node ID
   */
  static parseUrl(url: string): { fileKey: string; nodeId?: string } {
    const urlObj = new URL(url)
    const pathParts = urlObj.pathname.split('/')

    // Extract file key (usually after /design/ or /file/)
    const fileKeyIndex = pathParts.findIndex(part => part === 'design' || part === 'file')
    const fileKey = fileKeyIndex !== -1 ? pathParts[fileKeyIndex + 1] : ''

    // Extract node ID from query params
    const nodeId = urlObj.searchParams.get('node-id')

    return { fileKey, nodeId: nodeId || undefined }
  }

  /**
   * Convert node ID format (7975-36627 to 7975:36627)
   */
  static formatNodeId(nodeId: string): string {
    return nodeId.replace('-', ':')
  }
}

/**
 * Helper function to extract styles from Figma node
 */
export function extractStyles(node: any): any {
  return {
    backgroundColor: node.backgroundColor,
    fills: node.fills,
    strokes: node.strokes,
    effects: node.effects,
    cornerRadius: node.cornerRadius,
    constraints: node.constraints,
    layoutMode: node.layoutMode,
    primaryAxisSizingMode: node.primaryAxisSizingMode,
    counterAxisSizingMode: node.counterAxisSizingMode,
    primaryAxisAlignItems: node.primaryAxisAlignItems,
    counterAxisAlignItems: node.counterAxisAlignItems,
    paddingLeft: node.paddingLeft,
    paddingRight: node.paddingRight,
    paddingTop: node.paddingTop,
    paddingBottom: node.paddingBottom,
    itemSpacing: node.itemSpacing,
  }
}

/**
 * Helper function to convert Figma color to CSS
 */
export function figmaColorToCSS(color: { r: number; g: number; b: number; a: number }): string {
  const r = Math.round(color.r * 255)
  const g = Math.round(color.g * 255)
  const b = Math.round(color.b * 255)
  const a = color.a

  if (a === 1) {
    return `rgb(${r}, ${g}, ${b})`
  }
  return `rgba(${r}, ${g}, ${b}, ${a})`
}
