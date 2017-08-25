const config = require(SRC + 'config');
const {Map} = require('immutable')

function between(start, end) {
  return (el, index) => {
    return index >= start && index < end
  }
}

module.exports = (state, action) => {
  if (!state.get('page')){
    state = Map(action)
  }
  
  if (action.page){
    state = state.set('page', action.page)
  }
  
  let page = state.get('page');
  let pageSize = config.data.pageSize
  
  let start = (page - 1) * pageSize// 0 .. size * n
  let end = start + pageSize// size .. size * (n + 1)
  
  return state.set('data', state.get('all').filter(between(start, end)) )
}