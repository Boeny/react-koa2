/** @namespace webpack */
/** @module webpack/development */
const { merge } = require('./base')

/**
 * Adds sourcemaps and watching to the base config
 * @type {Object}
 */
module.exports = merge({
  watch: true,
  devtool: 'source-map'
})
