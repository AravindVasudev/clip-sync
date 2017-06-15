const webpack = require('webpack');
const path    = require('path');

module.exports = {
  entry: './clipSync/src/js/main.js',
  output: {
    path: path.resolve(__dirname, 'clipSync/static'),
    filename: 'main.js'
  },
  module: {
    rules: [{
        test: /\.scss$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "sass-loader" }
        ]
    },
    {
      test: /\.js$/,
      loader: "babel-loader", exclude: /node_modules/,
      query: { presets:['es2015'] }
    }
  ]
  }
};
