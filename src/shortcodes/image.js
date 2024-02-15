const Image = require('@11ty/eleventy-img');

module.exports = async function imageShortcode(src, opts = {}) {
  const defaults = {
    alt: "",
    tag: true,
    classes: "",
    widths: [null],
    sizes: "(min-width: 30em) 50vw, 100vw",
    loading: "lazy"
  }

  const config = { ...defaults, ...opts };
  
  const options = {
    widths: config.widths || [null],
    formats: ['webp', 'jpg', 'svg'],
    urlPath: '/img/built/',
    outputDir: '_site/img/built',
    svgShortCircuit: true,
    cacheOptions: {
      duration: "*",
      directory: ".cache",
      removeUrlQueryParams: false,
    }
  };

  let imageAttributes = {
    alt: config.alt,
    loading: config.loading,
    decoding: 'async',
    sizes: config.sizes || '100vw',
    class: config.classes,
  };

  let metadata = await Image(`src${src}`, options);

  if (config.tag) {
    // You bet we throw an error on missing alt in `imageAttributes` (alt="" works okay)
    return Image.generateHTML(metadata, imageAttributes);
  }

  return metadata.jpeg.map((entry) => entry.url);
};
