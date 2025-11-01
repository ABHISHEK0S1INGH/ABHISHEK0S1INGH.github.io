import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://abhishek0s1ingh.github.io',
  base: '/',
  integrations: [mdx(), sitemap(), tailwind()],
  // Hide the Astro Dev Toolbar during development
  devToolbar: { enabled: false },
  // Build configuration for optimal GitHub Pages deployment
  build: {
    // Keep CSS as external files for better debugging and caching
    inlineStylesheets: 'never',
  },
  // Vite configuration for better asset handling
  vite: {
    build: {
      // Generate a single CSS bundle for all pages
      cssCodeSplit: false,
      // Rollup options for asset handling
      rollupOptions: {
        output: {
          // Consistent asset file naming for better caching
          assetFileNames: '_astro/[name].[hash][extname]'
        }
      }
    }
  }
});