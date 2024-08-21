const { merge } = require("webpack-merge");
const webpackBaseConfig = require("./webpack.base");
const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");

// the path(s) that should be cleaned
let pathsToClean = ["../dist"];

// the clean options to use
let cleanOptions = {
  root: path.resolve(__dirname),
  // exclude: ['shared.js'],
  verbose: true,
  dry: false,
};

module.exports = merge(webpackBaseConfig, {
  devtool: "source-map", // 打包出的js文件是否生成map文件（方便浏览器调试）
  mode: "production",
  entry: "./src/index.ts",
  output: {
    filename: "st-util.js", // 生成的fiename需要与package.json中的main一致
    path: path.resolve(__dirname, "../dist"),
    libraryExport: "default",
    library: "__",
    libraryTarget: "umd",
  },
  plugins: [new CleanWebpackPlugin(pathsToClean, cleanOptions)],
});
