/*
 * This mainly ripped from babel-tape-runner.
 * https://github.com/wavded/babel-tape-runner/blob/master/bin%2Fbabel-tape-runner
 *
 * Sets up everything we need to be able to run tests.
 */
const path = require('path');
const glob = require('glob');
const fs = require('fs');

// Setup babel to transform all require'd js files
require('babel-register');
require('babel-polyfill');

// Setup css-module hook so we can read CSS files in JS
const cssHook = require('css-modules-require-hook');
const varMap = require('webpack-postcss-tools').makeVarMap('./globals/index.css');
cssHook({
  prepend: [
    require('autoprefixer'),
    require('postcss-custom-properties')({
      variables: varMap.vars,
    }),
    require('postcss-calc'),
    require('postcss-color-function')(),
    require('lost'),
  ],
});

// Allow importing of SVG files with node
require.extensions['.svg'] = function hook(m, filename) {
  const str = fs.readFileSync(filename).toString();
  return m._compile('module.exports = ' + JSON.stringify(str), filename);
};

// Require in each requested test file
process.argv.slice(2).forEach(function (arg) {
  glob(arg, function (er, files) {
    if (er) throw er;

    files.forEach(function (file) {
      require(path.resolve(process.cwd(), file));
    });
  });
});
