var {List} = require('immutable')

module.exports = function(state, action) {
  return List(action.data)
}
