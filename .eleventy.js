// Import plugins
const eleventyNavigationPlugin = require('@11ty/eleventy-navigation');
const pluginRss = require('@11ty/eleventy-plugin-rss');

// Import filters
const cssMinFilter = require('./src/filters/css-min.js');

module.exports = (eleventyConfig) => {
  // Add plugins
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(pluginRss);

  // Add filters
  eleventyConfig.addFilter('cssmin', cssMinFilter);

  // Pass through
  eleventyConfig.addPassthroughCopy('./src/img/');
  eleventyConfig.addPassthroughCopy('./src/fonts/');
  eleventyConfig.addPassthroughCopy('./src/js/');
  eleventyConfig.addPassthroughCopy('./src/apple-touch-icon-57x57.png');
  eleventyConfig.addPassthroughCopy('./src/apple-touch-icon-72x72.png');
  eleventyConfig.addPassthroughCopy('./src/apple-touch-icon-76x76.png');
  eleventyConfig.addPassthroughCopy('./src/apple-touch-icon-114x114.png');
  eleventyConfig.addPassthroughCopy('./src/apple-touch-icon-152x152.png');
  eleventyConfig.addPassthroughCopy('./src/apple-touch-icon-180x180.png');
  eleventyConfig.addPassthroughCopy('./src/apple-touch-icon.png');
  eleventyConfig.addPassthroughCopy('./src/favicon.ico');
  eleventyConfig.addPassthroughCopy('./src/robots.txt');

  return {
    dir: {
      input: 'src',
      output: '_site',
    },
    passthroughFileCopy: true,
  };
};
