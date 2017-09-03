require('babel-core/register')({
  presets: ['es2015', 'stage-0', 'react']
})

module.exports = (config) => {
  config.set({
    files: [
      {
        pattern: 'src/node_modules/*.js',
        mutated: false,
        included: true
      },

      {
        pattern: 'src/config.js',
        mutated: false,
        included: true
      },

      {
        pattern: 'src/middle/layout/index.js',
        mutated: true,
        included: true
      },

      {
        pattern: 'src/middle/store/configure.js',
        mutated: true,
        included: true
      },

      {
        pattern: 'src/middle/store/actions/*.js',
        mutated: true,
        included: true
      },

      {
        pattern: 'src/middle/store/reducers/*.js',
        mutated: true,
        included: true
      },

      {
        pattern: 'src/**/index.html',
        mutated: false,
        included: false
      },

      'src/**/*.spec.js'
    ],

    testRunner: 'mocha',

    reporter: [
      'clear-text'
    ],

    coverageAnalysis: 'off',
    plugins: ['stryker-mocha-runner']
  })
}
