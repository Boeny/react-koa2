const reducers = require('./reducers')
const { createStore } = require('redux')
const INITIAL_STATE = require('immutable').Map()

const reducer = function (state = INITIAL_STATE, action = {}) {
  return reducers[action.type] ? reducers[action.type](state, action) : state
}

module.exports = createStore(reducer)
