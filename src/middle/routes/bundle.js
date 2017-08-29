const config = require('config')
const readFileSync = require('readfilesync')(config.SRC)

const js = readFileSync(config.bundle)

module.exports = () => js
