/*
 * This mainly ripped from babel-tape-runner.
 * https://github.com/wavded/babel-tape-runner/blob/master/bin%2Fbabel-tape-runner
 *
 * Sets up everything we need to be able to run tests.
 */
const path = require('path');
const glob = require('glob');

// 1. Setup babel to transform all require'd js files
require('babel-register');
require('babel-polyfill');

// 2. Setup css-module hook so we can read CSS files in JS
const hook = require('css-modules-require-hook');
const varMap = require('webpack-postcss-tools').makeVarMap('./globals/index.css');
hook({
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

// 3. Require in each requested test file
process.argv.slice(2).forEach(function (arg) {
  glob(arg, function (er, files) {
    if (er) throw er;

    files.forEach(function (file) {
      require(path.resolve(process.cwd(), file));
    });
  });
});
