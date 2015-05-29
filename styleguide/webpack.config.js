var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var varMap = require('webpack-postcss-tools').makeVarMap('../globals/index.css');
var path = require('path');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './index'
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve('../dist'),
    publicPath: '/dist/'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel-loader'],
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader?module&importLoaders=1&localIdentName=[name]-[local]!postcss-loader')
    }]
  },

  postcss: [
    require('autoprefixer-core'),
    require('postcss-calc'),
    require('postcss-custom-properties')({
      variables: varMap.vars
    }),
    require('postcss-color-function')(),
    require('lost')
  ],

  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ['node_modules', 'components'],
    alias: {
      components: path.join(__dirname, '../components'),
      globals: path.join(__dirname, '../globals'),
      lib: path.join(__dirname, '../lib')
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
