var webpack = require('webpack');
var webpackPostcssTools = require('webpack-postcss-tools');
var path = require('path');

var varMap = webpackPostcssTools.makeVarMap('../variables/index.css');
console.log(varMap);

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './index'
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
      loader: 'style-loader!css-loader?module&importLoaders=1&localIdentName=[name]-[local]!postcss-loader'
    }]
  },

  postcss: [
    require('autoprefixer-core'),
    require('postcss-custom-properties')({
      variables: varMap.vars
    })
  ],

  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ['node_modules', 'components'],
    alias: {
      components: path.join(__dirname, '../components'),
      lib: path.join(__dirname, '../lib')
    }
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
