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

  eleventyConfig.addFilter("formatPhone", (value) => {
    return value.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
  });

  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
  eleventyConfig.addFilter("htmlDateString", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toFormat("yyyy-LL-dd");
  });

  eleventyConfig.addPassthroughCopy("scripts/site.js");
  eleventyConfig.addPassthroughCopy({ assets: "/" });

  return {
    passthroughFileCopy: true,
    dir: {
      input: "_views",
      output: "_site",
    },
  };
};
