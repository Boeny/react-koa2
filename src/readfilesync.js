const fs = require('fs')

module.exports = function(dirname) {
  return (file) => {
    return fs.readFileSync(dirname + '/' + file, 'utf-8')
  }
}
