import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://arian-architects.github.io',
  integrations: [tailwind(), sitemap()],
})