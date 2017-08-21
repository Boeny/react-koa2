require('tester')({
  'setEntries': {
    'должен генерировать List из массива action.data': () => {
      var {List} = require('immutable')
      var setEntries = require('./setEntries')
      return [setEntries(null, {data: []}), List()]
    }
  }
})
