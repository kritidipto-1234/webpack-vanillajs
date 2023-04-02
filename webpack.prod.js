const path = require("path");
const commonConfig = require("./webpack.common");
const { merge: mergeWebpack } = require("webpack-merge");
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = mergeWebpack(commonConfig, {
  mode: "production",
  output: {
    filename: "[name]-[contenthash].js",
    assetModuleFilename: "[hash][ext]",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          miniCssExtractPlugin.loader, //3 Extract css into sep file
          "css-loader", //Turns css into commonjs
          "sass-loader", //Sass->css
        ],
      },
    ],
  },
  plugins: [
    new miniCssExtractPlugin({
      filename: "[name]-[hash].css",
    }),
    new CleanWebpackPlugin(),
  ],
  optimization: {
    minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
  },
});
