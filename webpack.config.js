var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var path = require('path');

module.exports = {
  entry: [
      './components/index'
    ],

  output: {
    filename: 'bundle.js',
    path: path.resolve('./dist'),
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
    require('postcss-simple-vars')
  ],

  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ['node_modules', 'components'],
    alias: {
      components: path.join(__dirname, 'components'),
      lib: path.join(__dirname, 'lib')
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
