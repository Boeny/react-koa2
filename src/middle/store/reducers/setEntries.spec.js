require('tester')({
  setEntries: {
    'должен генерировать List из массива action.data': () => {
      const { List } = require('immutable')
      const setEntries = require('./setEntries')
      return [setEntries(null, { data: [] }), List()]
    }
  }
})
