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
const ReactDOMServer = require('react-dom/server');
const PORT = 3000;

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));
app.use(webpackHotMiddleware(compiler));

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

// app.listen(PORT, function () {
//   console.log(chalk.cyan('Starting the development server...\n'));
//   openBrowser('http://localhost:' + PORT);
// });


app.get('/', (req, res) => {
  res.send(`
    <!doctype html>
    <html lang="en">
      <head>...</head>
      <body>
        <div id="app">${ReactDOMServer.renderToString(<App/>)}</div>
        <script src="static/js/bundle.js"></script>
      </body>
    </html>
  `);
});


Loadable.preloadAll().then(() => {
  app.listen(3000, () => {
    console.log('Running on http://localhost:3000/');
  });
});
app.listen(3000, () => {
  console.log('Running on http://localhost:3000/');
});
