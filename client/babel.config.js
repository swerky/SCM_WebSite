/**
 * Fichier de config pour Babel
 * @description Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments.
 * @info permet de convertir le code de react en javascript compréhensible par tous les navigateurs
 */
const presets = [
  "@babel/preset-env",
  "@babel/preset-react",
];

const plugins = [
  // Source: https://babeljs.io/docs/en/babel-plugin-proposal-class-properties
  //"@babel/plugin-proposal-class-properties",
  // Source: https://babeljs.io/docs/en/babel-plugin-syntax-dynamic-import
  "@babel/plugin-syntax-dynamic-import",
  [
    "import",
    {
      "libraryName": "antd",
      "libraryDirectory": "lib",
      "style": true
    },
  ],
];

module.exports = { presets, plugins };