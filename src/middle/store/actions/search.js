const config = require('config')

module.exports = function (phrase, fields, limit = config.data.pageSize) {
  return { type: 'search', phrase, fields, limit }
}
