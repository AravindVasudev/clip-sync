const webpack = require('webpack');
const path    = require('path');

module.exports = {
  entry: './clipSync/src/js/main.js',
  output: {
    path: path.resolve(__dirname, 'clipSync/static'),
    filename: 'main.js',
    publicPath: '/static/'
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
    },
    {
      test: /\.(jpe?g|png|gif|svg)$/i,
      loader: 'file-loader'
    }
  ]
  }
};
