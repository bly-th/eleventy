const CleanCSS = require('clean-css');

module.exports = function cssMin(code) {
  return new CleanCSS({}).minify(code).styles;
};
