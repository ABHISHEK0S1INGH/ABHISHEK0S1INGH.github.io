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
    // Inline small stylesheets to reduce requests
    inlineStylesheets: 'auto',
  },
  // Vite configuration for better asset handling
  vite: {
    build: {
      // Ensure CSS is always generated as separate files
      cssCodeSplit: true,
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