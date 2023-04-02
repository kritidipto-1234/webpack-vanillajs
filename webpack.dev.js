const path = require("path");
const commonConfig = require("./webpack.common");
const { merge: mergeWebpack } = require("webpack-merge");

module.exports = mergeWebpack(commonConfig, {
  mode: "development",
  devtool: "source-map",
  output: {
    filename: "[name].js",
    assetModuleFilename: "includedAssets/[name][ext]",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader", //3.Injects css into dom by js
          "css-loader", //2.Turns css into commonjs
          "sass-loader", //1.Sass->css
        ],
      },
    ],
  },
});
