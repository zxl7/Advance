module.exprots = {
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: '_./build/bundle.js_'
  },
  module: {
    reles: [{
      test: /\.js?$/,
      exclude: /(node_modules)/,
      loader: 'babel-loader'
    }]

  }
}