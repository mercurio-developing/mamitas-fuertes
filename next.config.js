const path = require('path')

module.exports = {
  devIndicators: {
    autoPrerender: false,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles'),path.join(__dirname, 'node_modules/bootstrap/scss/')],
  },
}