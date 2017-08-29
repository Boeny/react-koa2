// все пути считаются относительно ROOT/src/
module.exports = {
  SRC: `${__dirname}/`,

  server: {
    port: 80
  },

  data: {
    url: 'http://jsonplaceholder.typicode.com/comments',
    pageSize: 15
  },

  layouts: {
    main: 'layouts/index.html'
  },

  bundle: '../dist/index.js'
}
