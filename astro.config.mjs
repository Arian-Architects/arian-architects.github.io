import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'

export default defineConfig({
  integrations: [tailwind(), sitemap()],
  site: 'https://arian-architects.github.io',
  server: {
    port: 3000,
    open: true,
    host: '0.0.0.0',
  },
})
