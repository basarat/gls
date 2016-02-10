module.exports = {
  entry: './app.js',
  output: {
      filename: 'bundle.js'
  },
  resolve: {
      extensions: ['', '.webpack.js', '.web.js', '.js']
  },
  module: {
      loaders: [
      ]
  }
}
