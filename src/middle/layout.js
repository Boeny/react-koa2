const fs = require('fs')

module.exports = {
  replace(template, state = '', app = '') {
    return template
      .replace('{{INITIAL_STATE}}', JSON.stringify(state))
      .replace('{{app}}', app)
  }
}
