const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require ("extract-text-webpack-plugin");
//const HtmlWebpackPlugin = require ("html-webpack-plugin");
const CleanWebpackPlugin = require ("clean-webpack-plugin");

module.exports = {
  entry: {admin: "./src/admin.js"},
  output: {
    filename: "[name]/[name].js",
    path: path.resolve(__dirname, "dist-admin")
  },
  module: {
    rules: [{
      test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
      loader: "file-loader",
      options: {name: "font/[name].[ext]"}
    },
    {
      test: /\.(png|svg|jpg|gif|ico)$/,
      loader: "file-loader",
      options: {name: "img/[name].[ext]"}
    },
    {
      test: /\.html$/,
      loader: "html-loader"
    },
    {
      test: /\.pug$/,
      loader: "pug-loader"
    },
    {
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: ["css-loader", "resolve-url-loader", "sass-loader"]
      })
    }]
  },
  plugins: [
    new ExtractTextPlugin("[name].style.css"),
    //new HtmlWebpackPlugin({template: "./src/index/index.pug"}),
    new CleanWebpackPlugin(["dist-admin"]),
    new webpack.ProvidePlugin({
      $: "jquery",
      jquery: "jquery",
      "window.jquery": "jquery",
      Popper: ["popper.js", "default"]
    })
  ]
};