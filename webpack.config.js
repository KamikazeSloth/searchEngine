const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: {
    main: ['webpack-hot-middleware/client', './searchEngine.js']
  },
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      title: 'Development'
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
