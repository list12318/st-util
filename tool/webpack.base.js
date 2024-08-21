const path = require("path");

module.exports = {
  resolve: {
    extensions: [".js", ".ts", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "tslint-loader",
            options: {
              configFile: path.resolve(__dirname, "../tslint.json"),
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              // 指定特定的ts编译配置，为了区分脚本的ts配置
              configFile: path.resolve(__dirname, "../tsconfig.json"),
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
};
