/** @namespace test */

const { Map } = require('immutable')
const { initReducer, setPageReducer, searchReducer } = require('./index')

require('tester')({
  'store reducers': {
    'initReducer возвращает Map': () => initReducer() instanceof Map,

    'initReducer возвращает Map({all, pageSize, viewData: {pageCount}})': () => [
      initReducer(null, { all: [], pageSize: 10, pageCount: 1 }),
      Map({
        all: [],
        pageSize: 10,

        viewData: {
          pageCount: 1
        }
      })
    ],

    'setPageReducer({all: [1,1,1], pageSize: 1}, {page: 1}) возвращает {viewData: {data: [1]}}': () => {
      const state = initReducer(null, {
        all: [1, 1, 1],
        pageSize: 1,
        pageCount: 3
      })

      return [
        setPageReducer(state, { page: 1 }).get('viewData'),
        { pageCount: 3, page: 1, data: [1] }
      ]
    },

    'setPageReducer возвращает тот же state, если страница не изменилась': (assert) => {
      const state = initReducer(null, {
        all: [1, 1, 1],
        pageSize: 2,
        pageCount: 1
      })

      const state2 = setPageReducer(state, { page: 2 })

      return [setPageReducer(state2, { page: 2 }), state2]
    },

    'searchReducer ищет 22 в [221, 211] и возвращает [221] в viewData: data': () => {
      let state = initReducer(null, {
        all: [{ name: '221' }, { name: '211' }],
        pageSize: 2,
        pageCount: 1
      })

      state = setPageReducer(state, { page: 1 })
      state = searchReducer(state, { phrase: 22, limit: 10, fields: ['name'] })

      return [state.get('viewData').data, [{ name: '221' }]]
    },

    'searchReducer возвращает тот же state в отсутсвие фразы': () => {
      const state = initReducer(null, {
        all: [],
        pageSize: 2,
        pageCount: 1
      })

      return [searchReducer(state, {}), state]
    }
  }
})
