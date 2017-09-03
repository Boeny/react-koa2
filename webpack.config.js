/**
 * uses the webpack/<env>.js config file from "--env" key
 * @param {String} env key in npm command
 * @returns {Object} config
 */
module.exports = env => require(`./webpack/${env}.js`)
