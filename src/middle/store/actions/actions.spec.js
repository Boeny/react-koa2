const { initAction, setPageAction, searchAction } = require('./index')

require('tester')({
  'store actions': {
    'initAction(data, pageSize) возвращает {type: "init": all: data, pageCount, pageSize}': (assert) => {
      const action = (pageSize, pageCount, all) => ({
        type: 'init',
        all,
        pageSize,
        pageCount
      })

      assert.deepEqual(initAction([], 10), action(10, 1, []))
      assert.deepEqual(initAction([1, 1, 1, 1], 2), action(2, 2, [1, 1, 1, 1]))
      assert.deepEqual(initAction([1, 1, 1], 2), action(2, 2, [1, 1, 1]))
      assert.deepEqual(initAction([1, 1], 1), action(1, 2, [1, 1]))
    },

    'setPageAction(1) возвращает {type: "setPage", page: 1}': () => [setPageAction(1), { type: 'setPage', page: 1 }],

    'setPageAction преобразует строку page в число': () => [typeof setPageAction('1').page, 'number'],

    'searchAction("phrase", ["name"], 10) возвращает {type: "search", phrase, fields, limit}': () => [
      searchAction('phrase', ['name'], 10), { type: 'search', phrase: 'phrase', fields: ['name'], limit: 10 }
    ]
  }
})
