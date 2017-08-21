module.exports = function(config) {
  config.set({
    files: [
      {
        pattern: 'src/**/tester.js',
        mutated: false,
        included: true
      },
      {
        pattern: 'src/**/*.json',
        mutated: false,
        included: true
      },

      {
        pattern: 'src/**/setEntries.js',
        mutated: true,
        included: true
      },

      {
        pattern: 'src/**/layout.js',
        mutated: true,
        included: true
      },
      {
        pattern: 'src/**/index.html',
        mutated: false,
        included: false
      },

      {
        pattern: 'src/**/comment.js',
        mutated: true,
        included: true
      },
      {
        pattern: 'src/request.js',
        mutated: false,
        included: true
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
