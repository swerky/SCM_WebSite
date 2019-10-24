const presets = [
  [
    "@babel/env",
    {
      targets: {
        edge: "17",
        firefox: "60",
        chrome: "67",
        safari: "11.1",
      },
      useBuiltIns: "usage",
    },
  ],
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
      "libraryDirectory": "es",
      "style": true
    },
  ]
];

module.exports = { presets, plugins };