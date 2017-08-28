const readFileSync = require('readfilesync')(SRC)

const config = require(`${SRC}config`)

const js = readFileSync(config.bundle)

module.exports = () => js
