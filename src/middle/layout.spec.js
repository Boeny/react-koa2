require('tester')({
  'layout': {
    'должен отдать содержимое index.html': () => {
      const layout = require('./layout')
      const readFileSync = require('../readfilesync')(__dirname)

      let state = {}
      let app = '<div></div>'

      const html = readFileSync('../templates/index.html')
      const content = layout.replace(html, state, app)

      return content.indexOf('<div></div>') > -1
    }
  }
})
