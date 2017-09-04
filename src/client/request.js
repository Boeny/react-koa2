/** @namespace client */
/** @module request */

const err = ::console.error


/**
 * Does request by fetch
 * @param {String} url
 * @returns {Promise} data
 */
export default url => global.fetch(url)
  .catch(err)
  .then(res => res.json(), err)
