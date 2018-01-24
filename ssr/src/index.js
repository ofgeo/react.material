import React from 'react';
import App from './App';
import {StaticRouter} from 'react-router'
// import ReactDOMServer from 'react-dom/server';
const ReactDOMServer = require('react-dom/server');

// noinspection JSUnusedGlobalSymbols
export default function render(locals) {
  const assets = locals.assets;
  const context = {};
  const scripts = Object.keys(assets)
  .filter(key => assets[key].match(/\.js$/))
  .map((key) => assets[key]);
  return ReactDOMServer.renderToString(
      <html>
      <head></head>
      <title>Server render</title>
      <body>
      <div id="root">
        <StaticRouter location={locals.path} context={context}>
          <App/>
        </StaticRouter>
      </div>
      {scripts.map(script => <script src={script}/>)}
      </body>
      </html>
  );
}