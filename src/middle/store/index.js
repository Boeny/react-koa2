/** @namespace store */
/** @module store */

const reducers = require('./reducers')
const { createStore } = require('redux')
const INITIAL_STATE = require('immutable').Map()

/**
 * Reducer function
 * combines all reducers by action.type
 * @param {Map} state
 * @param {Object} action {type:String, ...params}
 * @returns {Map} state
 */
function reducer (state = INITIAL_STATE, action = {}) {
  const name = `${action.type}Reducer`
  return reducers[name] ? reducers[name](state, action) : state
}

/**
 * Redux store
 * @type {Object}
 */
module.exports = createStore(reducer)
