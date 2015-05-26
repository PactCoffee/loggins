var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './basic.js',

  output: {
    filename: 'basic.js',
    path: './dist',
    libraryTarget: 'umd'
  },

  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader?module&importLoaders=1&localIdentName=[name]-[local]')
    }]
  },

  resolve: {
    modulesDirectories: ['node_modules']
  },

  plugins: [
    new ExtractTextPlugin('style.css', {
      allChunks: true
    })
  ]
};
