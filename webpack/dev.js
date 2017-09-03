const { merge } = require('./base')

/**
 * adds sourcemaps and watches the files in development mode
 */
module.exports = merge({
  watch: true,
  devtool: 'source-map'
})
