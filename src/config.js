// все пути считаются относительно ROOT/src/
module.exports = {
  server: {
    port: 3000
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
