const { Map } = require('immutable')

module.exports = (state, action) => {
  if (!action) return Map()

  return Map({
    all: action.all || [],
    pageSize: action.pageSize || 1,

    viewData: {
      pageCount: action.pageCount || 1
    }
  })
}
