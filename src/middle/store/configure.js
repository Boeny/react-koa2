const request = require('request')
const config  = require(SRC + 'config')

function dispatch(store){
  return (data) => {
    store.dispatch({type: 'setEntries', all: data, page: 1})
  }
}

module.exports = (store) => {
  request(config.data.url).then(dispatch(store))
}