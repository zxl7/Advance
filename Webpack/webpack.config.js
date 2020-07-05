// ./webpack.config.js
/** @type {import('webpack').Configuration} */
const config = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js'
  },
  mode: 'none'
}
module.exports = config
