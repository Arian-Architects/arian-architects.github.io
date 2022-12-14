import fs from 'fs'
import { join } from 'path'
import { load } from 'cheerio'
import { globbySync } from 'globby'
import { minify } from 'html-minifier'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'
import { minifyOptions } from './minifyOptions'

export default defineConfig({
  site: 'https://arian-architects.github.io',
  integrations: [
    tailwind(),
    sitemap(),
    {
      name: 'minify-html',
      hooks: {
        'astro:build:done': ({}) => {
          globbySync('dist/**/*.html').forEach((i) => {
            const filePath = join(process.cwd(), i)
            const $ = load(fs.readFileSync(filePath, 'utf8').toString())
            const minifiedHTML = minify($.html(), minifyOptions)
            fs.writeFileSync(filePath, minifiedHTML, 'utf8')
          })
        },
      },
    },
  ],
})
