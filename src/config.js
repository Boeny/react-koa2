module.exports = {
  server: {
    port: 3000
  },
  
  data: {
    url: 'http://jsonplaceholder.typicode.com/comments'
  },
  
  layouts: {
    main: 'layouts/index.html'
  },
  
  bundle: '../dist/index.js'
}