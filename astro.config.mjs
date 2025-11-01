import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://abhishek0s1ingh.github.io',
  integrations: [mdx(), sitemap(), tailwind()],
  // Hide the Astro Dev Toolbar during development
  devToolbar: { enabled: false }
});