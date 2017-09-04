/** @namespace routes */
/** @module routes/bundle */

const config = require('config')
const readFileSync = require('readfilesync')(config.SRC)

const js = readFileSync(config.bundle)

/**
 * Gets the cached content of the index.js from the file
 * @returns {String} index.js
 */
module.exports = () => js
