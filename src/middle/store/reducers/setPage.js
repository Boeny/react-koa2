function between (start, end) {
  return (el, index) => index >= start && index < end
}

module.exports = (state, action) => {
  const viewData = state.get('viewData')
  if (viewData.page === action.page) return state// page is the same

  const pageSize = state.get('pageSize')
  const start = (action.page - 1) * pageSize// 0 .. size * n
  const end = start + pageSize// size .. size * (n + 1)

  return state.set('viewData', {
    ...viewData,
    page: action.page,
    data: state.get('all').filter(between(start, end))
  })
}
