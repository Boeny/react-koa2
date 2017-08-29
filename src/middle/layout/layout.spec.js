require('tester')({
  layout: {
    'должен отдать содержимое index.html': () => {
      const layout = require('./index')

      const state = {}
      const app = '<div></div>'

      const html = layout.getFromFile()
      const content = layout.replace(html, {
        INITIAL_STATE: JSON.stringify(state),
        app
      })

      return content.indexOf('<div></div>') > -1
    }
  }
})
