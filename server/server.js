const jsonServer = require('json-server');
const server = jsonServer.create();
const middlewares = jsonServer.defaults({static: './dist'});

server.use(middlewares);

const config = require('./server.config');
const db_config = require('./db.config');

require(config.db_wrapper)().then(() => {
  const router = jsonServer.router(__dirname +'/'+ db_config.db_file);
  server.use(router);
  
  server.get('/', (req, res) => {
    res.jsonp(req.query);
  });
  server.get('/favicon.ico', (req) => req.end());
  
  server.listen(config.port, () => {
    console.log('JSON Server is running');
  });
})
.catch(console.error.bind(console));