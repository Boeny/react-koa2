const reducers = require('./reducers')
const { createStore } = require('redux')
const INITIAL_STATE = require('immutable').Map()

function reducer (state = INITIAL_STATE, action = {}) {
  const name = `${action.type}Reducer`
  return reducers[name] ? reducers[name](state, action) : state
}

module.exports = createStore(reducer)
