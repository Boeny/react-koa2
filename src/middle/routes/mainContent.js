const SRC = require('config').SRC

const layout = require(`${SRC}middle/layout`)
const app = require(`${SRC}middle/app`)

const content = layout.getFromFile()

module.exports = state => layout.replace(content, {
  INITIAL_STATE: JSON.stringify(state),
  app: app(state)
})
