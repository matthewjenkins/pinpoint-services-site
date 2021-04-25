module.exports = function (eleventyConfig) {
  return {
    passthroughFileCopy: true,
    dir: {
      input: "_views",
      output: "_site",
    },
  };
};
