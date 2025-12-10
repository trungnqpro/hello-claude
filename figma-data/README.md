# Figma Design Export - Inline SVG

This directory contains exported Figma designs as **inline SVG** to avoid image loading issues.

## Why Inline SVG?

Using inline SVG instead of external image files (PNG/JPG) provides several benefits:

1. **No 403 Errors**: SVG content is embedded directly in your components, eliminating external image request errors
2. **Better Performance**: No additional HTTP requests needed
3. **Scalability**: Vector graphics scale perfectly at any size
4. **Customization**: Easy to modify colors, sizes, and styles with CSS
5. **Accessibility**: Better semantic structure for screen readers

## How to Use

### 1. Export from Figma

Run the export script with your Figma URL and token:

```bash
# Set environment variables
export FIGMA_TOKEN="your_figma_token"
export FIGMA_URL="https://www.figma.com/design/FILE_KEY/FILE_NAME?node-id=NODE_ID"

# Run export script
npx tsx scripts/fetch-figma-design.ts
```

### 2. Use Generated Components

The script will generate:
- `exported-design.svg` - Raw SVG file
- `FigmaDesign.vue` - Ready-to-use Vue component with inline SVG
- `images.json` - Image URLs from Figma
- `node-data.json` - Node structure data
- `file-data.json` - Complete file data

### 3. Copy to Your Components

Copy the generated `.vue` file to your components directory:

```bash
cp figma-data/FigmaDesign.vue components/login/YourComponent.vue
```

### 4. Use in Your Pages

```vue
<template>
  <div>
    <YourComponent />
  </div>
</template>
```

## Example: Current Login Illustration

The `LoginIllustration.vue` component already uses inline SVG for all graphics:

```vue
<template>
  <svg viewBox="0 0 100 100" class="w-full h-full">
    <!-- Your SVG paths here -->
  </svg>
</template>
```

## Customizing SVG

You can customize the exported SVG by:

1. **Colors**: Modify `fill` and `stroke` attributes
2. **Sizes**: Adjust `viewBox` and CSS classes
3. **Animations**: Add CSS transitions or animations
4. **Interactivity**: Add Vue event handlers

## Tips

- Use `viewBox` for responsive scaling
- Apply Tailwind classes directly to SVG elements
- Keep SVG code clean by removing unnecessary attributes
- Use CSS variables for dynamic theming

## Troubleshooting

**Issue**: SVG not displaying correctly
- Check that `viewBox` is set properly
- Ensure parent container has defined width/height
- Verify SVG paths are not clipped

**Issue**: Colors not matching Figma
- Figma exports may use different color formats
- Convert colors to your project's color system
- Use Tailwind color classes for consistency
