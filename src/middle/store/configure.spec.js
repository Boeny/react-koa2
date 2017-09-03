const config = require('config')
const { setData, getData } = require('./configure')

require('tester')({
  'store configure': {
    'setData возвращает функцию': () => [typeof setData(), 'function'],

    'setData(dispatch, action)(data) вызывает dispatch(action(data, size))': () => {
      let result

      function action (data, size) {
        return { type: 'action', data, size }
      }

      function dispatch (act) {
        result = { dispatch: act }
      }

      setData(dispatch, action)([])

      return [
        result,
        {
          dispatch: {
            type: 'action',
            data: [],
            size: config.data.pageSize
          }
        }
      ]
    },

    'getData возвращает Promise': () => getData() instanceof Promise,

    'getData().then возвращает Array': () => getData().then((data) => {
      if (!(data instanceof Array)) new Error('data must be array')
    })
  }
})
