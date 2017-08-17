const reducers = require('./reducers');
const {INITIAL_STATE}  = require('./core');

const reducer = function(state = INITIAL_STATE, action) {
  return reducers[action.type] ? reducers[action.type](state, action) : state;
};

module.exports = require('redux').createStore( reducer );
