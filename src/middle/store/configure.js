/** @namespace store */
/** @module store/configure */

const request = require('request')
const config = require('config')

/**
 * Returns the function that applies the dispatch function
 * to the initial action with data and page size
 * @param {Function} dispatch (action: Function):void
 * @param {Function} initAction (data: Array, pageSize: Number):Object
 * @returns {Function} setData (data: Array):void
 */
exports.setData = (dispatch, initAction) => (data) => {
  dispatch(initAction(data, config.data.pageSize))
}

/**
 * make a request to fetch the data
 * @returns {Promise} data
 */
exports.getData = () => request(config.data.url).then((data) => {
  console.log('data has received')
  return data
})
