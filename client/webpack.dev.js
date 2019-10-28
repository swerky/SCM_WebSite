/**
 * Webpack.dev.js
 * @description Webpack utilisé en developpement
 * @documentation https://webpack.js.org/
 * @info permet de créé un build exécutable de l'application
 */

const path = require("path");
const common = require("./webpack.common"); // Récupère le webpack commun
const merge = require("webpack-merge");     // Permet de merger le webpack commun avec celui de dev
let HtmlWebpackPlugin = require("html-webpack-plugin"); // Permet d'injecter les fichiers js, img, etc au template

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
      filename: "index.html"
    })
  ],
});