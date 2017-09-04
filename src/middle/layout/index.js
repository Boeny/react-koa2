/** @module layout */

const config = require('config')
const readFileSync = require('readfilesync')(config.SRC)
const replacePlaceholder = require('./replacePlaceholder')

module.exports = {
  /**
   * Gets the content of the layout file
   * @returns {String} content
   */
  getFromFile () {
    return readFileSync(config.layouts.main)
  },

  /**
   * Replaces the placeholders in the layout
   * @param {string} template
   * @param {Object} params
   * @returns {String} content
   */
  replace (template, params = {}) {
    const keys = Object.keys(params)
    let result = template

    for (let i = 0; i < keys.length; i += 1) {
      const placeholder = keys[i]

      result = replacePlaceholder(
        placeholder,
        params[placeholder],
        result,
        params.start,
        params.end
      )
    }

    return result
  }
}
