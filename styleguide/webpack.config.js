const webpack = require('webpack');
const failPlugin = require('webpack-fail-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const varMap = require('webpack-postcss-tools').makeVarMap('../globals/index.css');
const path = require('path');

module.exports = {
  entry: [
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
        test: /\.js|jsx$/,
        loaders: ['babel-loader'],
        include: [
          path.join(__dirname, '../', 'components'),
          path.join(__dirname, '../', 'globals'),
          path.join(__dirname, '../', 'util'),
          path.join(__dirname, '../', 'styleguide'),
          path.join(__dirname, '../', 'node_modules', 'react-maskedinput'),
        ],
      }, {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]-[local]-[hash:base64:5]!postcss-loader'),
      },
    ],
  },

  svgoConfig: {
    plugins: [],
  },

  postcss: [
    require('autoprefixer-core'),
    require('postcss-custom-properties')({
      variables: varMap.vars,
    }),
    require('postcss-calc'),
    require('postcss-color-function')(),
    require('lost'),
  ],

  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ['node_modules', 'components'],
    alias: {
      components: path.join(__dirname, '../components'),
      globals: path.join(__dirname, '../globals'),
      lib: path.join(__dirname, '../lib'),
    },
  },

  plugins: [
    failPlugin,
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new ExtractTextPlugin('bundle.css', {
      allChunks: true,
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
  ],
};
