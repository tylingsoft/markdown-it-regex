const path = require('path')

const loaders = [
  {
    test: /\.json$/,
    loader: 'json-loader'
  },
  {
    test: /\.js$/,
    loader: 'babel-loader',
    exclude: /node_modules/,
    query: {
      presets: [
        ['env', {
          'targets': {
            'node': 'current'
          }
        }]
      ]
    }
  }
]

const configurations = [
  {
    entry: {
      'index': './test/index.js'
    },
    output: {
      path: path.join(__dirname, 'test'),
      filename: '[name].bundle.js'
    },
    module: { loaders },
    target: 'node'
  }
]

module.exports = configurations
