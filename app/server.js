const express = require('express');
// const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./../config/webpack.config.dev');

const app = express();

app.use(express.static('build/public'));
// app.use(require('./src/index'));

const PORT = 3000;
app.listen(3000, function() {
  console.log('http://localhost:' + PORT);
});