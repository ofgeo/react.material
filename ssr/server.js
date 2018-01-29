const path = require('path');
const fs = require("fs");
const chalk = require('chalk');
const Loadable = require('react-loadable');
const openBrowser = require('react-dev-utils/openBrowser');

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config');
const compiler = webpack(config);
const express = require('express');
const app = express();
const React = require('react');
const PORT = 3001;

app.use(webpackDevMiddleware(compiler, {
  // logLevel: 'silent',
  publicPath: config.output.publicPath
}));
// app.use(webpackHotMiddleware(compiler, {
//   log: false,
// }));

// app.use('*', function (req, res, next) {
//   res.set('content-type', 'text/html');
//   res.send('index.html');
//   res.end();
// });

// Loadable.preloadAll().then(() => {
//   app.listen(PORT, function() {
//     console.log(chalk.cyan('Starting the development server...\n'));
//     openBrowser('http://localhost:' + PORT);
//   });
// });


app.listen(PORT, function () {
  console.log(chalk.cyan('Starting the development server...\n'));
  openBrowser('http://localhost:' + PORT);
});