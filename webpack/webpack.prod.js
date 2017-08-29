const {defaults, merge} = require('./webpack.base')
const dest = defaults.output.path;
const fs = require('fs');

fs.readdir(dest, (err, files) => {
  if (err) throw err;

  files = files.filter((file) => file.match(/.*\.map/ig));

  for (var i = 0; i < files.length; i++){
    fs.unlink(dest+'/'+files[i]);
  }
});

const Uglify = require('uglifyjs-webpack-plugin');

module.exports = merge({
  plugins: [
    new Uglify()
  ]
});