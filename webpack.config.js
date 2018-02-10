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
        enforce: 'pre',
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
        options: {
          configFile: Path.join(__dirname, '..', '.eslintrc')
        }
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          plugins: [
            'transform-react-jsx'
          ],
          presets: [
            'es2015'
          ]
        }
      }
    ]
  },
  devServer: {
    port: 9001,
    contentBase: Path.join(process.env.BASE_PATH, 'public'),
  }
};