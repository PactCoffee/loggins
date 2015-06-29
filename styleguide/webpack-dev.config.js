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
    preLoaders: [{
      test: /\.js$/,
      loader: 'eslint',
      include: [path.join(__dirname, '../')],
      exclude: [path.join(__dirname, '../', 'node_modules')]
    }],
    loaders: [{
      test: /\.svg$/,
      loader: 'raw-loader!svgo-loader?useConfig=svgoConfig'
    }, {
      test: /\.js$/,
      loaders: ['react-hot', 'babel-loader'],
      include: [path.join(__dirname, '../')],
      exclude: [path.join(__dirname, '../', 'node_modules')]
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader?module&importLoaders=1&localIdentName=[name]-[local]!postcss-loader'
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
