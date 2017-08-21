const http = require('http')

module.exports = url => {
  return new Promise((resolve, reject) => {
    var data = ''

    var req = http.get(url, (res) => {
      res.setEncoding('utf8')
      res.on('data', chunk => { data += chunk })
      res.on('end', () => resolve(JSON.parse(data)))
    })

    req.on('error', (e) => {
      reject('problem with request: ' + e.message)
    })
  })
}
