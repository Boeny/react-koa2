const config = require('../config')
const request = require('../request')

module.exports = {
  cache: [],

  getAll: async function(filter) {
    if (this.cache.length) return this.cache

    const data = await request(config.data_url)
    this.cache = filter ? data.filter(filter) : data

    return this.cache
  }
}
