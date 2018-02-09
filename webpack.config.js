const Path = require('path');

module.exports = {
  entry: './src/App.js',
  output: {
    path: Path.join(process.env.BASE_PATH, 'dist'),
    filename: 'app.js'
  },
  devtool: 'source-map',
  context: process.env.BASE_PATH,
  target: 'web',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: [
          './node_modules/**/*'
        ],
        options: {
          presets: [
            'es2015'
          ]
        }
      }
    ]
  }
};