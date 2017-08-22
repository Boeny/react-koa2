const fs = require('fs')
const {layouts} = require(SRC + 'config');
const readFileSync = require('readfilesync')(SRC);

module.exports = {
  getFromFile() {
    return readFileSync(layouts.main);
  },
  
  replace(template, state = '', app = '') {
    return template
      .replace('{{INITIAL_STATE}}', JSON.stringify(state))
      .replace('{{app}}', app)
  }
}
