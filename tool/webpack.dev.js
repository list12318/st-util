const { merge } = require("webpack-merge");
const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpackBaseConfig = require("./webpack.base");

module.exports = merge(webpackBaseConfig, {
  entry: "./examples/index.js",
  output: {
    //定义出口
    path: path.resolve(__dirname, "../dist"),
    filename: "js/[name]-[hash].js",
  },
  devServer: {
    publicPath: "/",
    contentBase: path.resolve(__dirname, "../dist"),
    host: "localhost",
    port: 8082,
    open: true,
    hot: true,
    hotOnly: true,
    proxy: {
      "/rest": {
        target: "http://192.168.10.106:15020",
        changeOrigin: true,
        pathRewrite: {
          "^/rest": "/bp",
        },
      },
      "/sso": {
        target: "http://192.168.10.106:15040",
        changeOrigin: true,
        pathRewrite: {
          "^/sso": "/bp",
        },
      },
      "/cdn": {
        target: "http://127.0.0.1:3000",
        changeOrigin: true,
      },
    },
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), //热跟新
    new HtmlWebpackPlugin({
      filename: "index.html", //定义生成的页面的名称
      minify: {
        collapseWhitespace: true, //压缩html代码
      },
      title: "这里是设置HTML title",
      template: "./public/index.html",
    }),
  ],
});
