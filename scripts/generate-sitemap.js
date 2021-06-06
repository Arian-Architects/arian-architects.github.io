const fs = require('fs')

const globby = require('globby')
const prettier = require('prettier')

;(async () => {
  const prettierConfig = await prettier.resolveConfig('./.prettierrc.js')
  const pages = await globby([
    '!pages/api',
    'pages/*.js',
    '!pages/_*.js',
    'blogs/**/*.md',
    '!pages/404.js',
  ])

  const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${pages
              .map((page) => {
                const path = page
                  .replace('.js', '')
                  .replace('.md', '')
                  .replace('data', '')
                  .replace('pages', '')

                let route = path
                if (path === '/index') route = ''
                else if (path.includes('blogs/'))
                  route = `/${path.replace('blogs/', 'blog/')}`

                return `<url>
                            <loc>${`https://arian-architects.github.io${route}`}</loc>
                        </url>
                        `
              })
              .join('')}
        </urlset>
    `

  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html',
  })

  // eslint-disable-next-line no-sync
  fs.writeFileSync('public/sitemap.xml', formatted)
})()
