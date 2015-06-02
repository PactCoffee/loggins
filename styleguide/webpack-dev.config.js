var path = require('path');
var webpack = require('webpack');
var assign = require('object-assign');

var config = require('./webpack.config');

module.exports = assign({}, config, {
  output: {
    filename: 'bundle.js',
    path: path.resolve('./dist'),
    publicPath: '/dist/'
  },
  module: {
    loaders: [{
      test: /\.svg$/,
      loader: 'raw-loader!svgo-loader?useConfig=svgoConfig'
    }, {
      test: /\.js$/,
      loaders: ['react-hot', 'babel-loader'],
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader?module&importLoaders=1&localIdentName=[hash:base64:4]!postcss-loader'
    }]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
});
