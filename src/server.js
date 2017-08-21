var io = require('koa-socket.io')
const Koa = require('koa')
const http = require('http')
const config = require('./config')
const error = require('./middle/error')
const {routes, allowedMethods} = require('./middle/routes')

io = new io({namespace: '/'})
const app = new Koa()

app.use(error)
app.use(routes())
app.use(allowedMethods())

const server = http.createServer(app.callback())
io.start(server)
server.listen(config.port)
