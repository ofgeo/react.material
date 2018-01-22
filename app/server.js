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
const {renderToString} = require('react-dom/server');
const PORT = 3000;

const HTML = fs.readFileSync(path.join(__dirname, 'public/index.html'), 'utf8');

// app.use(express.static(__dirname + '/static'));

// This function makes server rendering of asset references consistent with different webpack chunk/entry configurations
function normalizeAssets(assets) {
  return Array.isArray(assets) ? assets : [assets]
}

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  serverSideRender: true
}));

app.use(webpackHotMiddleware(compiler));

app.use((req, res) => {
  const assetsByChunkName = res.locals.webpackStats.toJson().assetsByChunkName
  res.send(`
<html>
  <head>
    <title>My App</title>
		${normalizeAssets(assetsByChunkName.main)
      .filter(path => path.endsWith('.css'))
      .map(path => `<link rel="stylesheet" href="${path}" />`)
      .join('\n')}
  </head>
  <body>
    <div id="root"></div>
		${normalizeAssets(assetsByChunkName.main)
      .filter(path => path.endsWith('.js'))
      .map(path => `<script src="${path}"></script>`)
      .join('\n')}
  </body>
</html>
  `)
});

app.listen(PORT, function() {
  console.log(chalk.cyan('Starting the development server...\n'));
  openBrowser('http://localhost:' + PORT);
});