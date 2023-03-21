const webfont = require("webfont").default;

webfont({
  files: "src/icons/**/*.svg",
  fontName: "my-font-name",
  svgicons2svgfont: {
    fontName: 'test',
    normalize: true
  }
});
