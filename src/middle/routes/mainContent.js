const layout  = require(SRC + 'middle/layout')
const app     = require(SRC + 'middle/app')
const Comment = require(SRC + 'models/comment')

let content = layout.getFromFile()

module.exports = async () => {
  const state = store.getState().toArray()
  return layout.replace(content, state, app(state))
}