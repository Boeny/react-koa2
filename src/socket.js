const http = require('http')
let io     = require('koa-socket.io')

io = new io({namespace: '/'})

module.exports = function(app){
  const server = http.createServer(app.callback())
  io.start(server)
  return server
}