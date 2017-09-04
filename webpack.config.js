/** @namespace webpack */
/** @module webpack/config */
/**
 * Uses the webpack/*.js config file with name from the "--env" key
 * @param {String} env key in npm command
 * @returns {Object} config
 */
module.exports = env => require(`./webpack/${env}.js`)
