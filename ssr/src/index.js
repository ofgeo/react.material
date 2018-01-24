import React from 'react';
import {StaticRouter} from 'react-router'
import App from './App';
// import ReactDOMServer from 'react-dom/server';
const ReactDOMServer = require('react-dom/server');

// noinspection JSUnusedGlobalSymbols
export default function render(locals) {
  const assets = locals.assets;
  const context = {};

  const scripts = Object.keys(locals.assets).filter(key => assets[key].match(/\.js$/))
      .map((key) => assets[key]);

  // const scripts = assets.filter(value => value.match(/\.js$/));
  // console.log(scripts);
  // assets.filter(true);

  const HTML = (
      <html lang="en">
      <head>
        <link rel="stylesheet"
              href="//fonts.googleapis.com/css?family=Roboto+Mono:400,500|Roboto:400,500|Material+Icons"/>
        <title>Server render</title>
      </head>
      <body>
      <div id="root">
        <StaticRouter location={locals.path} context={context}>
          <App/>
        </StaticRouter>
      </div>
      {scripts.map((script, index) => <script key={index} src={script}/>)}
      </body>
      </html>
  );

  return '<!DOCTYPE html>' + ReactDOMServer.renderToString(HTML);
}