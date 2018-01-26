import React from 'react';
import {StaticRouter} from 'react-router'
import ReactDOMServer,{renderToString} from 'react-dom/server';
import Loadable from 'react-loadable';
import App from './App';
import {getBundles} from 'react-loadable/webpack'

const context = {};

// noinspection JSUnusedGlobalSymbols
export default function render(locals) {
  const assets = locals.assets;
  const scripts = Object.keys(locals.assets).filter(key => assets[key].match(/\.js$/))
      .map((key) => assets[key]);

  const modules = [];

  const app = ReactDOMServer.renderToString(
      <Loadable.Capture report={moduleName => modules.push(moduleName)}>
        <StaticRouter location={locals.path} context={context}>
          <App/>
        </StaticRouter>
      </Loadable.Capture>
  );

  const bundles = getBundles(locals.loadableStats, modules);
  let bundleJs = bundles.filter(bundle => bundle.file.endsWith('.js'));

  const HTML = ` 
      <!doctype html>
      <html lang="en">
      <head>
        <link rel="stylesheet"
              href="//fonts.googleapis.com/css?family=Roboto+Mono:400,500|Roboto:400,500|Material+Icons"/>
        <title>Server render</title>
      </head>
      <body>
      <div id="root">
        ${app}
      </div>
        ${scripts.map((script) => `<script type="text/javascript" src="${script}"></script>`)}
        ${bundleJs.map((js) => `<script type="text/javascript" src="/${js.file}"></script>`)}
      </body>
      </html>
  `;


  // const content = renderToString(HTML);
  console.log("---------------webpackStats START---------------");
  // console.log(locals.webpackStats.compilation.assets);
  // console.log(locals.webpackStats.assets);
  console.log("modules", modules);
  console.log("bundles", bundles);
  console.log("bundleJS", bundleJs);
  // console.log(Object.keys(locals.webpackStats.additionalChunkAssets));
  console.log("\n---------------webpackStats END  ---------------\n");

  return `<!DOCTYPE html>${HTML}`;

  // return renderToString(HTML);
}