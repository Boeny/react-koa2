const request = require('request')
const config  = require(SRC + 'config')

function dispatch(store){
  return (data) => {
    console.log('data has received')
    
    let count = Object.keys(data).length
    let pageSize = config.data.pageSize
    let divResult = count / pageSize
    
    store.dispatch({
      type: 'setEntries',
      all: data,
      page: 1,
      pageCount: count % pageSize === 0 ? divResult : Math.floor(divResult) + 1
    })
  }
}

/**
 * sets the initial state of the store
 * @param {Object} store
 * @returns {function} getState
 */
module.exports = (store) => {
  request(config.data.url).then(dispatch(store))
  return () => store.getState().toObject()
}
