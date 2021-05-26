const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  assetPrefix: isProd
    ? 'https://cdn.jsdelivr.net/gh/Arian-Architects/arian-architects.github.io/'
    : '',
  future: {
    webpack5: true,
  },
  webpack5: (config, { isServer, dev }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: 'empty',
      }
    }
    if (!dev) {
      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
      })
    }
    return config
  },
}
