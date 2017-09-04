/** @namespace routes */
/** @module routes/mainContent */

const SRC = require('config').SRC

const layout = require(`${SRC}middle/layout`)
const app = require(`${SRC}middle/app`)

const content = layout.getFromFile()

/**
 * Renders content of the index.html by state
 * @param {Map} state
 * @returns {String} content
 */
module.exports = state => layout.replace(content, {
  INITIAL_STATE: JSON.stringify(state),
  app: app(state)
})
