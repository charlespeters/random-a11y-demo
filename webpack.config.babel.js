import webpack from 'webpack'

const config = {
  entry: './index.js',
  output: {
    path: './dist',
    filename: 'random-a11y-demo.min.js'
  },
  devServer: {
    port: 9123
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'source-map-loader'
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({ minimize: true })
  ]
}

export default config
