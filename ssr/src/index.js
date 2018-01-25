import React from 'react';
import {StaticRouter} from 'react-router'
import {renderToString} from 'react-dom/server';
import Loadable from 'react-loadable';
import App from './App';

// noinspection JSUnusedGlobalSymbols
export default function render(locals) {
  const assets = locals.assets;
  const context = {};
  let modules = [];
  // let bundles = getBundles(locals.webpackStats, modules);

  const scripts = Object.keys(locals.assets).filter(key => assets[key].match(/\.js$/))
      .map((key) => assets[key]);


  let HTML = (
      <html lang="en">
      <head>
        <link rel="stylesheet"
              href="//fonts.googleapis.com/css?family=Roboto+Mono:400,500|Roboto:400,500|Material+Icons"/>
        <title>Server render</title>
      </head>
      <body>
      <div id="root">
        <Loadable.Capture report={moduleName => modules.push(moduleName)}>
          <StaticRouter location={locals.path} context={context}>
            <App/>
          </StaticRouter>
        </Loadable.Capture>
      </div>
      {scripts.map((script, index) => <script key={index} src={script}/>)}
      </body>
      </html>
  );
  Loadable.preloadAll();

  const content = renderToString(HTML);
  // console.log("---------------webpackStats START---------------");
  // console.log(locals.webpackStats.compilation.assets);
  // console.log(locals.webpackStats.assets);
  // console.log(Object.keys(locals.webpackStats.additionalChunkAssets));
  console.log(modules);
  console.log(content + "\n---------------webpackStats END  ---------------\n");


  return '<!DOCTYPE html>' + content;
}