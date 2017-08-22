require('tester')({
  'layout': {
    'должен отдать содержимое index.html': () => {
      const layout = require('./index')
      const config = require('../config');

      let state = {}
      let app = '<div></div>'

      const html = layout.getFromFile();
      const content = layout.replace(html, state, app)

      return content.indexOf('<div></div>') > -1
    }
  }
})
