var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack-dev.config');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(8181, 'localhost', function(err) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:8181');
});
