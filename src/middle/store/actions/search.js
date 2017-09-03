const config = require('config')

module.exports = (phrase, fields, limit = config.data.pageSize) => ({ type: 'search', phrase, fields, limit })
