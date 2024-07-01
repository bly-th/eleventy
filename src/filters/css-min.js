import CleanCSS from 'clean-css';

export default (code) => {
  return new CleanCSS({}).minify(code).styles;
};