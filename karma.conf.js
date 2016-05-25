/* eslint no-var: 0, babel/object-shorthand: 0, vars-on-top: 0 */
require('babel-core/register');

var webpack = require('webpack');
var path = require('path');

var isCI = process.env.CI === 'true';

module.exports = function(config) {
  config.set({

    frameworks: [
      'mocha',
      'sinon-chai'
    ],

    files: [
      'tests.webpack.js'
    ],

    preprocessors: {
      'tests.webpack.js': ['webpack', 'sourcemap']
    },

    reporters: ['mocha'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: ['Chrome'],

    customLaunchers: {
      ChromeTravisCI: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },

    captureTimeout: 60000,
    browserNoActivityTimeout: 45000,

    singleRun: isCI,

    webpack: {

      output: {
        pathInfo: true
      },

      webpackServer: {
        noInfo: true
      },

      resolve: {
        extensions: ['', '.js', '.json', '.jsx'],
        modulesDirectories: ['node_modules', 'app'],
        alias: {
          lib: path.join(__dirname, 'lib'),
          globals: path.join(__dirname, 'globals'),
          components: path.join(__dirname, 'components')
        }
      },

      module: {
        loaders: [{
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          query: {
            presets: ["es2015", "react", "stage-1"],
          }
        }, {
          test: /\.css$/,
          loader: 'css-loader/locals?modules'
        }, {
          test: /\.(gif|png|jpe?g)$/,
          loaders: [
            'file?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack?optimizationLevel=7&interlaced=false&progressive=true'
          ]
        }, {
          test: /\.(woff|woff2|eot|ttf)$/,
          loader: 'url?limit=10000&name=[sha512:hash:base64:7].[ext]'
        }, {
          test: /\.svg$/,
          exclude: /icons\/.+\.svg$/, // exclude all icons inside /icons folder
          loader: 'url-loader!svgo-loader?useConfig=svgoConfig'
        }, {
          test: /icons\/.+\.svg$/,
          loader: 'raw-loader!svgo-loader?useConfig=svgoConfig'
        }]
      },

      svgoConfig: {
        plugins: [{
          removeAttrs: {
            attrs: '(width|height)'
          }
        }, {
          mergePaths: false
        }, {
          cleanupIDs: false
        }]
      },

      plugins: [
        new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: JSON.stringify('development')
          }
        })
      ],
      devTool: 'inline-source-map'
    }
  });

  if (isCI) {
    config.sngleRun = true;
    config.reporters = ['dots'];
  }
};
