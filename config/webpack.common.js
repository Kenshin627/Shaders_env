const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const resolve = (dir) => path.resolve(__dirname, dir);

module.exports = {
  entry: "./src/index.js",
  resolve: {
    alias: {
      "@": resolve("src"),
    },
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new htmlWebpackPlugin({
      title: "Shaders",
      template: "./public/index.html",
    }),
  ],
};
