const readFileSync = require('readfilesync')(SRC)
const layout       = require(SRC + 'middle/layout')
const config       = require(SRC + 'config')

let js = readFileSync(config.bundle)
let html = layout.getFromFile()

module.exports = {
  getJS: () => js,
  getContent: () => html
}