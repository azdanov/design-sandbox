const purgecss = require("@fullhuman/postcss-purgecss");
const tailwind = require("tailwindcss");

const postcssPlugins = [tailwind("./tailwind.config.js")];

if (process.env.NODE_ENV === "production") postcssPlugins.push(purgecss());

module.exports = {
  siteName: "Design Sandbox",
  plugins: [],
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins
      }
    }
  },
  chainWebpack: config => {
    const svgRule = config.module.rule("svg");
    svgRule.uses.clear();
    svgRule.use("vue-svg-loader").loader("vue-svg-loader");
  }
};
