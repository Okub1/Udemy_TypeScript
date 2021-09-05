const path = require('path');

module.exports = {
  mode: "development",
  entry: "./src/app.ts",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "dist",
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: [/node_modules/, path.resolve(__dirname, "Sections")],
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, ""), // this shit needed, as dev-server takes static content (html/css) defaultly from /public folder, which i do not have...
    },
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
};