const Path = require('path');

module.exports = {
  entry: './src/App.js',
  resolve: {
    extensions: [ '.js', '.jsx' ]
  },
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
        exclude: [
          './node_modules/**/*'
        ],
        options: {
          configFile: Path.join(__dirname, '.eslintrc')
        }
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: [
          './node_modules/**/*'
        ],
        options: {
          presets: [
            'es2015',
            'react',
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