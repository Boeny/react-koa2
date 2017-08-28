const { Map } = require('immutable')

function between (start, end) {
  return (el, index) => index >= start && index < end
}

module.exports = (state, action) => {
  const init = !state.get('viewData')// initial action

  if (init) {
    state = Map({
      all: action.all,
      pageSize: action.pageSize,
      viewData: {
        page: action.page,
        pageCount: action.pageCount
      }
    })
  }

  const viewData = state.get('viewData')
  if (!init && viewData.page === action.page) return state// page is the same

  const pageSize = state.get('pageSize')
  const start = (action.page - 1) * pageSize// 0 .. size * n
  const end = start + pageSize// size .. size * (n + 1)

  viewData.data = state.get('all').filter(between(start, end))

  return state.set('viewData', viewData)
}
