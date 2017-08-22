global.SRC = __dirname + '/';

const Koa    = require('koa')
const error  = require('./middle/error')
const config = require('./config')
const socket = require('./socket');
const {routes, allowedMethods} = require('./middle/router')

let server = new Koa()
server.use(error)
server.use(routes())
server.use(allowedMethods())

server = socket(server)
server.listen(config.server.port)
