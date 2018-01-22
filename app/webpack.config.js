const path = require('path');
const webpack = require('webpack');
// const paths = require('./../config/paths');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true',
    './src/index2.js'
  ],
  output: {
    path: __dirname,
    filename: 'static/js/bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        // include: path.join(__dirname, 'app'),
        exclude: '/node_modules/',
        query: {
          presets: ['env']
        }
      }
    ]
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   inject: true,
    //   template: './public/index.html',
    // }),
    new webpack.HotModuleReplacementPlugin(),
  ]
};