const fs = require('fs')

module.exports = function(dirname) {
  return (file) => {
    const path = dirname + '/' + file

    return new Promise((resolve, reject) => {
      fs.readFile(path, 'utf-8', (err, content) => {
        if (err) {
          reject(err)
        }        else {
          resolve(content)
        }
      })
    })
  }
}
