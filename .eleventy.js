const pluginRss = require("@11ty/eleventy-plugin-rss");
const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss);

  eleventyConfig.addFilter("valueIf", (input, match, replacement) => {
    if (input === match) return replacement;

    return input;
  });

  eleventyConfig.addFilter("valueIfEmpty", (input, value) => {
    return input || value;
  });

  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
  eleventyConfig.addFilter("htmlDateString", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toFormat("yyyy-LL-dd");
  });

  return {
    passthroughFileCopy: true,
    dir: {
      input: "_views",
      output: "_site",
    },
  };
};
