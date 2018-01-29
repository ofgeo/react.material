import React from 'react';
import {renderToString} from 'react-dom/server';
import Loadable from 'react-loadable';
import App from './App';
// import {getBundles} from 'react-loadable/webpack'

const context = {};

// noinspection JSUnusedGlobalSymbols
export default (locals) => {
  const modules = [];
  const assets = locals.assets;
  const scripts = Object.keys(locals.assets).filter(key => assets[key].match(/\.js$/))
      .map((key) => assets[key]);


  const app =
      <Loadable.Capture report={moduleName => modules.push(moduleName)}>
        {/*<StaticRouter location={locals.path} context={context}>*/}
        <App/>
        {/*</StaticRouter>*/}
      </Loadable.Capture>;
  const bundles = locals.loadableStats(modules);
  let bundleJs = bundles.filter(bundle => bundle.file.endsWith('.js'));

  const APP = renderToString(app);

  const HTML = (
      <html lang="en">
      <head>
        <link rel="stylesheet"
              href="//fonts.googleapis.com/css?family=Roboto+Mono:400,500|Roboto:400,500|Material+Icons"/>
        <title>Server render</title>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </head>
      <body>
      <div id="root">
        {app}
      </div>
      {/*{scripts.map((script) => <script src={script}/>)}*/}
      {/*{bundleJs.map((js) => <script src={`/${js.file}`}/>)}*/}
      </body>
      </html>
  );

  const html = renderToString(HTML);
  console.log("---------------webpackStats START---------------");
  console.log("APP", APP);
  console.log("scripts", scripts);
  console.log("modules", modules);
  console.log("bundles", bundles);
  console.log("bundleJS", bundleJs);
  console.log("\n---------------webpackStats END ---------------\n");


  return Promise.resolve()
      .then(Loadable.preloadAll())
      .then(() => html);
}