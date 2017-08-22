const config = require('../config')

class Comment {
  static async getAll(filter) {
    const data = this.store.getState().toArray()
    return filter ? data.filter(filter) : data
  }
}

module.exports = Comment;