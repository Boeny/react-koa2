const fs = require('fs')
const {layouts} = require(SRC + 'config');
const readFileSync = require('readfilesync')(SRC);

module.exports = {
  getFromFile() {
    return readFileSync(layouts.main);
  },
  
  replace(template, params = {}) {
    for (let placeholder in params){
      template = template.replace('{{'+placeholder+'}}', params[placeholder])
    }
    return template
  }
}
