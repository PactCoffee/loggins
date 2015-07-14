var path = require('path');
var webpack = require('webpack');
var assign = require('object-assign');

var config = require('./webpack.config');

module.exports = assign({}, config, {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './index'
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve('./public'),
    publicPath: '/public/'
  },
  module: {

    preLoaders: [{
      test: /\.js$/,
      loader: 'eslint',
      include: [__dirname],
      exclude: [path.join(__dirname, '../', 'node_modules')]
    }],

    loaders: [{
      test: /\.(woff|woff2)$/,
      loader: 'url-loader'
    }, {
      test: /\.svg$/,
      loader: 'url-loader!svgo-loader?useConfig=svgoConfig'
    }, {
      test: /icons\/.+\.svg$/,
      loader: 'raw-loader!svgo-loader?useConfig=svgoConfig'
    }, {
      test: /\.js$/,
      loaders: ['react-hot', 'babel-loader'],
      include: [path.join(__dirname, '../')],
      exclude: [path.join(__dirname, '../', 'node_modules')]
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]-[local]!postcss-loader'
    }]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
});
