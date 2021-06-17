const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    server: './app.ts'
  },
  target: 'node',
  externals: [
    /* Firebase has some troubles being webpacked when in
    in the Node environment, let's skip it.
    Note: you may need to exclude other dependencies depending
    on your project. */
    /^firebase/
  ],
  resolve: {
    extensions: ['.ts', '.js']
  },
  optimization: {
    minimize: true
  },
  output: {
    libraryTarget: 'commonjs2',
    // Puts the output at the root of the dist folder
    path: path.join(__dirname, '../dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      },
    ]
  },
};