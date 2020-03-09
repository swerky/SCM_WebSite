const webpack = require("webpack"); // librairie principal pour faire le webpack
const CopyWebpackPlugin = require('copy-webpack-plugin'); // Permet de copier des fichiers dans le dossier de build
const path = require("path");       // Permet d'accèder au fichier système
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: {
    index : [
      path.resolve(__dirname, "src/index.js")
    ],
    /** Possibilité de séparé les points d'entré, cela crée plus de fichier et peux augmenter la vitesse de téléchargement
     *    Mais choisie de laisser le webpack faire le code splitting lui même pour le moment
     * **/
    /*layout: path.resolve(__dirname, "src/components/MyLayout/MyLayout"),
    lessons: path.resolve(__dirname, "src/components/Lessons/Lessons.js"),
    login: path.resolve(__dirname, "src/components/Login/Login.js"),
    client: path.resolve(__dirname, "src/components/Clients/Clients.js"),
    logs: path.resolve(__dirname, "src/components/LogsCoachActivity/LogsCoachActivity.js"),
    tasks: path.resolve(__dirname, "src/components/Tasks/Tasks.js"),
    settings: path.resolve(__dirname, "src/components/Settings/Settings.js")"*/
  },
  plugins: [
    new Dotenv(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: "'development'",
      },
    }),
    // Permet de copier les images et autres fichiers du dossier public dans le dossier public de build (dist/public)
    new CopyWebpackPlugin([
      { from: 'public', to: 'public' }
    ]),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // all options are optional
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
      ignoreOrder: false, // Enable to remove warnings about conflicting order
    }),
  ],
  /** Gère comment les fichiers doivent être convertie
   *    Permet de faire des optimisation ou convertir des fichier pour être compatible avec tous les navigateurs
   */
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it uses publicPath in webpackOptions.output
              publicPath: '../',
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          { loader: 'css-loader' }
        ]
      },
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            babelrc: true
          }
        }
      },
      {
        test: /\.less/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it uses publicPath in webpackOptions.output
              publicPath: '../',
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          {
            loader: "css-loader" //2. Turns css into commonjs
          },
          {
            loader: "less-loader", //1. Turns less into css
            options: {modifyVars: {
                //'primary-color': '#1DA57A',
                'link-color': '#FAFAFA',
                'text-color': '#FAFAFA',
                'heading-color': '#FAFAFA',
                //'border-radius-base': '2px',
                'font-size-base': '20px',
                'font-family': "'Raleway', Helvetica, sans-serif",
                //'body-background': "#003399",
                'input-color':"#000000",
                // or
                //'hack': `true; @import "./index.less";`, // Override with less file
              },
              javascriptEnabled: true
            }
          }
        ]
      },
      {
        test: /\.(svg|png|jpg|gif|ico)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "imgs"
          }
        }
      },
    ]
  },
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
};