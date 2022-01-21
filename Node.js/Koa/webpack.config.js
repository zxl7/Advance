const path = require('path')

const webpackconfig = {
  tartget: 'node ',
  mode: 'development',
  entry: {
    server: path.join(__dirname, 'src/index.js'),
  },
  output: {
    path: './dist',
  },
}
