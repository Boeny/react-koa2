const request = require('request')
const config = require('config')

/**
 * @param {Function} dispatch (action: Function):void
 * @param {Function} initAction (data: Array, pageSize: Number):Object
 * @returns {Function} setData (data: Array):void
 */
exports.setData = (dispatch, initAction) => (data) => {
  dispatch(initAction(data, config.data.pageSize))
}

/**
 * @param {Object} store
 * @returns {Function} getState (void):Object
 */
exports.getData = () => request(config.data.url).then((data) => {
  console.log('data has received')
  return data
})
