const config = require('config')
const readFileSync = require('readfilesync')(config.SRC)

module.exports = {
  getFromFile () {
    return readFileSync(config.layouts.main)
  },

  replace (template, params = {}) {
    for (const placeholder in params) {
      template = template.replace(`{{${placeholder}}}`, params[placeholder])
    }
    return template
  }
}
