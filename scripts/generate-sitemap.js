const fs = require('fs')
const globby = require('globby')
const prettier = require('prettier')
const items = [
  {
    project: 'B 301, Hari Nagar',
    end: 4,
  },
  {
    project: 'Raveesh Bagla KWS & Civil CGA, DLF MOTI NAGAR',
    end: 107,
  },
  {
    project: 'Rakesh Kohli, Inderpuri',
    end: 26,
  },
  {
    project: 'Rekha Gupta A Block Vishal Enclave, Rajouri Garden',
    end: 38,
  },
  {
    project: 'Faisal Irfan CGB, DLF MOTI NAGAR',
    end: 28,
  },
  {
    project: 'CGG, DLF Moti Nagar',
    end: 6,
  },
  {
    project: 'Pavas Bhatia Kitchen, Vasant Kunj',
    end: 8,
  },
  {
    project: 'Amit Khurana Kitchen, Kirti Nagar',
    end: 13,
  },
  {
    project: 'A-11, Anand Niketan',
    end: 43,
  },
  {
    project: 'B10 Kitchen 3D View, Vasant Kunj',
    end: 5,
  },
  {
    project: 'Belmont Club, Indore',
    end: 26,
  },
  {
    project: 'D-25, Janak Puri',
    end: 28,
  },
  {
    project: 'MS-90, Hari Nagar',
    end: 20,
  },
]

;(async () => {
  const prettierConfig = await prettier.resolveConfig('./.prettierrc.js')
  const pages = await globby([
    '!pages/api',
    'pages/*.js',
    '!pages/_*.js',
    'blogs/**/*.md',
    '!pages/404.js',
  ])

  items.map((item) => {
    let temp = `/projects/${item.project}`.replace(/ /g, '%20')
    pages.push(temp)
  })

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
