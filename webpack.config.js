module.exports = {
  entry: './demo/app.js',
  output: {
      filename: './demo/bundle.js'
  },
  resolve: {
      extensions: ['', '.webpack.js', '.web.js', '.js']
  },
  module: {
      noParse: [
        /ntypescript/,
      ],
      loaders: [
      ]
  }
}
