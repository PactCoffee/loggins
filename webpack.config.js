var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var ReactToHtmlPlugin = require('react-to-html-webpack-plugin');

var path = require('path');
var jade = require('jade');
var fs = require('fs');

module.exports = {
  entry: './styleguide/index.js',

  output: {
    filename: 'index.js',
    path: path.resolve('./dist'),
    libraryTarget: 'umd'
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
    new ReactToHtmlPlugin('index.html', 'index.js', {
      template: jade.compile(fs.readFileSync(__dirname + '/styleguide/index.jade'))
    })
  ]
};
