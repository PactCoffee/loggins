var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var path = require('path');

module.exports = {
  entry: [
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      './styleguide/index'
    ],

  output: {
    filename: 'bundle.js',
    path: path.resolve('./dist'),
    publicPath: '/dist/'
  },

  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader?module&importLoaders=1&localIdentName=[name]-[local]!postcss-loader')
    }]
  },

  postcss: [
    require('autoprefixer-core')
  ],

  resolve: {
    modulesDirectories: ['node_modules', 'components'],
    alias: {
      components: path.join(__dirname, 'components')
    }
  },

  plugins: [
    new ExtractTextPlugin('style.css', {
      allChunks: true
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
