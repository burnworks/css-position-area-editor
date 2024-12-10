// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://burnworks.github.io',
  base: '/css-position-area-editor',
  trailingSlash: "always",
  integrations: [tailwind()],
  compressHTML: true,
  vite: {
    build: {
      minify: false,
    },
  },
});