/**
 * Webpack.dev.js
 * @description Webpack utilisé en production
 * @documentation https://webpack.js.org/
 * @info permet de créé un build exécutable de l'application
 */

const path = require("path");
const common = require("./webpack.common");
const webpack = require("webpack");
const merge = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
let HtmlWebpackPlugin = require("html-webpack-plugin");
const CompressionPlugin = require('compression-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

// TODO peut être encore optimisé et testé
module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "[name].[contentHash].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  optimization: {
    /** DOC: https://webpack.js.org/configuration/optimization/ **/
    minimizer: [
      new OptimizeCssAssetsPlugin(), // Compresse les fichier CSS
      new TerserPlugin({ // Compresse les fichier js
        // Ensure .mjs files get included.
        test: /\.m?js$/,
      }),
      // Minifie le fichier html
      new HtmlWebpackPlugin({
        template: "public/index.html",
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeRedundantAttributes: true,
          removeComments: true,
          removeStyleLinkTypeAttributes: true,
          useShortDoctype: true,
          minifyCSS: true,
          minifyJS: true,
          minifyURLs: true
        }
      })
    ],
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
          name(module) {
            // get the name. E.g. node_modules/packageName/not/this/part.js
            // or node_modules/packageName
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

            // npm package names are URL-safe, but some servers don't like @ symbols
            return `npm.${packageName.replace('@', '')}`;
          },
        },
      },
    }
  },
  plugins: [
    /** compress les fichier en .gz, réduit l'utilisation de la bande passante
        Attention, le serveur doit géré le fait qu'il rende des fichiers compresser (exemple avec nginx:
        https://bit.ly/2JBDNWX ) */
    new CompressionPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
      },
    }),
    // Le fait de hash permet de charger les nouveau fichier en cas de mise à jour et que les fichier sont en cache
    new MiniCssExtractPlugin({ filename: "[name].[contentHash].css" }),
    new CleanWebpackPlugin(),
    /**
     * Workbox
     * @description Outil pour créé un service worker et gérer les différentes règles de caching
     * @info Peut encore être grandement amélioré
     * @doc https://developers.google.com/web/tools/workbox/
     */
    new WorkboxPlugin.GenerateSW({
      runtimeCaching: [
        {
          urlPattern: new RegExp('/\\.(?:png|gif|jpg|jpeg|svg|ico)$/'),
          handler: 'CacheFirst'
        },
        {
          urlPattern: new RegExp('.+\\.js$'),
          handler: 'StaleWhileRevalidate'
        },
        {
          urlPattern: new RegExp('.+\\.html$'),
          handler: 'StaleWhileRevalidate'
        },
        {
          urlPattern: /.*/,
          handler: 'NetworkFirst',
          options: {
            cacheableResponse: {
              statuses: [0, 200]
            }
          }
        },
        // TODO Ne fonctionne pas car on fait des requête post sur les webservice ! Trouvé une solution.
        // Solution actuelle: Faire le caching à la main...
        {
          urlPattern: 'https://myfitness.gsinfo.ch/MAW_WEBSERVICE_WEB/MAW_WebService.awws?wsdl',
          handler: 'StaleWhileRevalidate',
          options: {
            cacheableResponse: {
              statuses: [0, 200]
            }
          },
        }
      ],
      swDest: 'sw.js', // nom du fichier généré
    }),
  ],
  module: {
    rules: [
      {
        test: /\.bundle\.js$/,
        use: [
          {
            loader: 'bundle-loader',
            options: {
              lazy: true
            }
          }
        ]
      },
      {
        test: /\.js\.gz$/,
        enforce: 'pre',
        use: 'gzip-loader'
      }
    ]
  }
});