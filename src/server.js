const Koa = require('koa')
const error = require('./middle/error')
const config = require('config')
const http = require('http')
const { routes, allowedMethods } = require('./middle/router')

const app = new Koa()
app.use(error)
app.use(routes())
app.use(allowedMethods())

http
  .createServer(app.callback())
  .listen(config.server.port, () => {
    console.log(`server running on port ${config.server.port}`)
  })
