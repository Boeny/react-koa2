const { defaults, merge } = require('./base')

const dest = defaults.output.path
const fs = require('fs')

// searching and deleting the *.map.js files in the destination folder
fs.readdir(dest, (err, files) => {
  if (err) throw err

  const maps = files.filter(file => file.match(/.*\.map/ig))

  for (let i = 0; i < maps.length; i += 1) {
    fs.unlink(`${dest}/${maps[i]}`)
  }
})

const Uglify = require('uglifyjs-webpack-plugin')

/**
 * merges the base config with uglifying plugin
 */
module.exports = merge({
  plugins: [
    new Uglify()
  ]
})
