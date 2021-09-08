const path = require("path");

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: "./src/scripts/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    // static: "./dist",
  },
  module: {
    rules: [
      {
        test: /\.css/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
