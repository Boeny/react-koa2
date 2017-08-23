const config = require(SRC + 'config');
const {Map} = require('immutable')

module.exports = (state, action) => {
  if (!action.data) return state
  
  if (!state.get('page')) state = state.set('page', action.page)
  
  let page = state.get('page');
  let pageSize = config.data.pageSize
  
  let start = (page - 1) * pageSize// 0 .. size * n
  let end = start + pageSize// size .. size * (n + 1)
  
  if (!state.get('all')) state = state.set('all', action.all)
  
  return state.set('data', state.get('all').filter((el, index) => index >= start && index <= end)
}