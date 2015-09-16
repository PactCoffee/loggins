const path = require('path');
const webpack = require('webpack');
const assign = require('object-assign');

const config = require('./webpack.config');

module.exports = assign({}, config, {
  devtool: 'eval',
  entry: [
    'webpack-hot-middleware/client',
    './index',
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve('./public'),
    publicPath: '/public/',
  },
  module: {

    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint',
        include: [__dirname, path.join(__dirname, '../components')],
        exclude: [path.join(__dirname, '../', 'node_modules')],
      },
    ],
    loaders: [
      {
        test: /\.(woff|woff2|gif|png|jpe?g)$/,
        loader: 'url-loader',
      }, {
        test: /\.svg$/,
        exclude: /icons\/.+\.svg$/, // exclude all icons inside /icons folder
        loader: 'url-loader!svgo-loader?useConfig=svgoConfig',
      }, {
        test: /icons\/.+\.svg$/,
        loader: 'raw-loader!svgo-loader?useConfig=svgoConfig',
      }, {
        test: /\.js$/,
        loaders: ['babel'],
        include: [path.join(__dirname, '../')],
        exclude: [path.join(__dirname, '../', 'node_modules')],
      }, {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]-[local]!postcss-loader',
      },
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
});
