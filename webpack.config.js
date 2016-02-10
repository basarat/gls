module.exports = {
  devtool: 'source-map',
  entry: './demo/app.js',
  output: {
      filename: './demo/bundle.js'
  },
  module: {
      noParse: [
        /ntypescript/,
      ],
      loaders: [
          {
                test: /\.css$/,
                loader: "style!css"
          }
      ]
  }
}
