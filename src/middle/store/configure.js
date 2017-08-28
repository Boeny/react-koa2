const request = require('request')

const config = require(`${SRC}config`)
const { initAction } = require('./actions')

function dispatch (store) {
  return (data) => {
    console.log('data has received')
    store.dispatch(initAction(data, config.data.pageSize))
  }
}

/**
 * sets the initial state of the store
 * @param {Object} store
 * @returns {function} getState
 */
module.exports = (store) => {
  request(config.data.url).then(dispatch(store))
  return () => store.getState().get('viewData')
}
