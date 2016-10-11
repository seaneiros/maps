var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './src/index.js',
  output: {
    path: './assets/',
    filename: 'bundle.js',
    publicPath: '/assets/'
  },
  module: {
    loaders: [{
      test: /.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['es2015', 'react']
      }
    },
    {
      test: /\.less$/,
      loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader!less-loader")
    },
    {
      test: /\.(jpe?g|png|gif|svg)$/i,
      // loader: 'file-loader'
      loaders: [
          'file?name=img/[hash].[ext]',
          'image-webpack'
      ]
    }]
  },
  plugins: ([
    new ExtractTextPlugin("style.css", {
            allChunks: true
        }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    // Avoid publishing files when compilation failed:
    new webpack.NoErrorsPlugin(),

    // Aggressively remove duplicate modules:
    new webpack.optimize.DedupePlugin()
  ]).concat([
    new webpack.optimize.OccurenceOrderPlugin(),

    // minify the JS bundle
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false
      },
      exclude: [/\.min\.js$/gi, /react/gi]
    })
  ]),
  // Pretty terminal output
  stats: {
    colors: true
  },
  // Generate external sourcemaps for the JS & CSS bundles
  devtool: 'source-map',
  devServer: {inline: true}
};