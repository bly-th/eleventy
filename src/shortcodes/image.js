import Image from '@11ty/eleventy-img';

export default async function imageShortcode(src, opts = {}) {
  const defaults = {
    alt: "",
    tag: true,
    classes: "",
    widths: [null],
    sizes: "(min-width: 30em) 50vw, 100vw",
    loading: "lazy"
  };

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

  const imageAttributes = {
    alt: config.alt,
    loading: config.loading,
    decoding: 'async',
    sizes: config.sizes || '100vw',
    class: config.classes,
  };

  const metadata = await Image(`src${src}`, options);

  if (config.tag) {
    // Generate HTML with image metadata
    return Image.generateHTML(metadata, imageAttributes);
  }

  const firstKey = Object.keys(metadata)[0]; // Get the first key dynamically
  return metadata[firstKey].map((entry) => entry.url);
}