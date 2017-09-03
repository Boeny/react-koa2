require('tester')({
  layout: {
    index: {
      'должен отдать содержимое index.html': () => {
        const layout = require('./index')
        const state = {}
        const app = '<div class="app"></div>'

        const html = layout.getFromFile()
        const content = layout.replace(html, {
          INITIAL_STATE: JSON.stringify(state),
          app
        })

        return content.indexOf('<div class="app"></div>') > -1 && content.indexOf('{}') > -1
      }
    },

    replacePlaceholder: {
      'должен заменить подстроку в строке': () => {
        const replacePlaceholder = require('./replacePlaceholder')
        const content = 'maintext <--placeholder--> maintext'
        return [
          replacePlaceholder('placeholder', 'text', content, '<--', '-->'),
          'maintext text maintext'
        ]
      }
    }
  }
})
