const Path = require('path');
const cwd = process.cwd();

module.exports = {
  entry: './src/App.js',
  output: {
    path: Path.join(cwd, 'dist'),
    filename: 'app.js'
  },
  devtool: 'source-map',
  context: cwd,
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