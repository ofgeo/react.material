const path = require('path');
const fs = require("fs");
const chalk = require('chalk');
const openBrowser = require('react-dev-utils/openBrowser');

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config');
const compiler = webpack(config);
const express = require('express');
const app = express();
const React = require('react');
const PORT = 3000;

app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: config.output.publicPath}));
app.use(webpackHotMiddleware(compiler));

app.use('*', function (req, res, next) {
  res.set('content-type', 'text/html');
  res.send('index.html');
  res.end();
});

app.listen(PORT, function () {
  console.log(chalk.cyan('Starting the development server...\n'));
  openBrowser('http://localhost:' + PORT);
});