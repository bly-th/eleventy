// Import plugins
const eleventyNavigationPlugin = require('@11ty/eleventy-navigation');
const pluginRss = require('@11ty/eleventy-plugin-rss');
const { eleventyImageTransformPlugin } = require("@11ty/eleventy-img");

// Import filters
const cssMinFilter = require('./src/filters/css-min.js');

// Import shortcodes
const imageShortcode = require('./src/shortcodes/image.js');

module.exports = (eleventyConfig) => {
  // Add plugins
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(pluginRss);
	eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
		// optional, output image formats
		formats: ["webp", "jpeg", "svg"],
    urlPath: '/img/built/',
    outputDir: '_site/img/built',
    svgShortCircuit: true,
    fixOrientation: true,
    svgCompressionSize: "br",
    cacheOptions: {
      duration: "*",
      directory: ".cache",
      removeUrlQueryParams: false,
    },
		defaultAttributes: {
			loading: "lazy",
      decoding: "async",
      sizes: '(min-width: 30em) 50vw, 100vw',
      class: 'w-full h-auto'
		},
	});

  // Add filters
  eleventyConfig.addFilter('cssmin', cssMinFilter);

  // Add shortcodes
  eleventyConfig.addShortcode('image', imageShortcode);

  // Pass through
  eleventyConfig.addPassthroughCopy('./src/img/');
  eleventyConfig.addPassthroughCopy('./src/fonts/');
  eleventyConfig.addPassthroughCopy('./src/js/');
  eleventyConfig.addPassthroughCopy('./src/android-chrome-192x192.png');
  eleventyConfig.addPassthroughCopy('./src/android-chrome-384x384.png');
  eleventyConfig.addPassthroughCopy('./src/apple-touch-icon.png');
  eleventyConfig.addPassthroughCopy('./src/favicon-16x16.png');
  eleventyConfig.addPassthroughCopy('./src/favicon-32x32.png');
  eleventyConfig.addPassthroughCopy('./src/favicon.ico');
  eleventyConfig.addPassthroughCopy('./src/safari-pinned-tab.svg');
  eleventyConfig.addPassthroughCopy('./src/site.webmanifest');
  eleventyConfig.addPassthroughCopy('./src/robots.txt');

  return {
    dir: {
      input: 'src',
      output: '_site',
    },
    passthroughFileCopy: true,
  };
};
