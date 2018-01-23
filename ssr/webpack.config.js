const path = require('path');
const webpack = require('webpack');
// const paths = require('./../config/paths');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');

module.exports = {
  entry: [
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true',
    './src/index.js',
  ],
  output: {
    path: __dirname,
    filename: 'static/js/bundle.js',
    publicPath: '/',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        // include: path.join(__dirname, 'app'),
        exclude: '/node_modules/',
        query: {
          presets: ['react-app']
        }
      }
    ]
  },
  plugins: [
    new StaticSiteGeneratorPlugin({
      paths: [
        '/',
      ]
    }),
    new webpack.HotModuleReplacementPlugin(),
  ]
};