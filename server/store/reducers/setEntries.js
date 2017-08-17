var {List} = require('immutable');

module.exports = function (state, entries) {
  const list = List(entries);
  return state.set('entries', list).set('initialEntries', list);
};