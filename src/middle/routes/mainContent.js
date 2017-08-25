const layout = require(SRC + 'middle/layout')
const app    = require(SRC + 'middle/app')

let content = layout.getFromFile()

module.exports = (state) => {
  delete state.all
  
  return layout.replace(content, {
    INITIAL_STATE: JSON.stringify(state),
    app: app(state)
  })
}
