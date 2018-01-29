const path = require('path');
const paths = require('./paths');
const webpack = require('webpack');
const jsdom = require("jsdom");
const {JSDOM} = jsdom;
const {window} = new JSDOM(``);
const {document} = window;

const {getBundles} = require('react-loadable/webpack');
const {ReactLoadablePlugin} = require('react-loadable/webpack');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
const eslintFormatter = require('react-dev-utils/eslintFormatter');

const LOADABLE_JSON_PATH = path.resolve(__dirname, '.tmp', 'react-loadable.json');

module.exports = {
  // You may want 'eval' instead if you prefer to see the compiled output in DevTools.
  // See the discussion in https://github.com/facebookincubator/create-react-app/issues/343.
  // devtool: 'source-map',
  devtool: false,
  // target: "node",
  // node: {
  //   fs: true
  // },
  // entry: {
  //   index: [
  //     // 'webpack-hot-middleware/client?path=/__webpack_hmr&reload=true',
  //     paths.appIndexJs
  //   ],
  //   browser: './src/browser.js'
  // },
  entry: [
    paths.appIndexJs
  ],
  output: {
    // pathinfo: true,
    // This does not produce a real file. It's just the virtual path that is
    // served by WebpackDevServer in development. This is the JS bundle
    // containing code from all our entry points, and the Webpack runtime.
    // filename: 'static/js/bundle.js',
    filename: '[name].js',
    // There are also additional JS chunk files if you use code splitting.
    // chunkFilename: 'static/js/[name].chunk.js',
    chunkFilename: '[name].js',
    publicPath: '/',
    libraryTarget: 'umd'
  },
  module: {
    // strictExportPresence: true,
    rules: [
      // {
      //   test: /\.(js|jsx|mjs)$/,
      //   enforce: 'pre',
      //   use: [
      //     {
      //       options: {
      //         formatter: eslintFormatter,
      //         eslintPath: require.resolve('eslint'),
      //       },
      //       loader: require.resolve('eslint-loader'),
      //     },
      //   ],
      //   include: [paths.appSrc],
      // },
      {
        oneOf: [
          // Process JS with Babel.
          {
            test: /\.(js|jsx|mjs)$/,
            // include: [paths.appSrc],
            exclude: /node_modules/,
            loader: require.resolve('babel-loader'),
            options: {
              plugins: [
                // require.resolve('react-loadable/babel'),
                // require.resolve('babel-plugin-syntax-dynamic-import'),
                // require.resolve('babel-plugin-dynamic-import-node'),
                // 'syntax-dynamic-import',
                require.resolve('react-loadable/babel'),
                // 'dynamic-import-webpack'
              ],
              // This is a feature of `babel-loader` for webpack (not Babel itself).
              // It enables caching results in ./node_modules/.cache/babel-loader/
              // directory for faster rebuilds.
              // cacheDirectory: true,
            },
          },
        ]
      }
    ]
  },
  plugins: [
    new ReactLoadablePlugin({
      filename: LOADABLE_JSON_PATH
    }),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'browser',
    //   filename: 'static/js/browser.js',
    //   chunks: ["browser"],
    //   minChunks: Infinity,
    // }),
    new StaticSiteGeneratorPlugin({
      paths: [
        '/',
      ],
      globals: {
        window: window,
        document: document,
      },
      // entry: 'index',
      crawl: true,
      locals: {
        loadableStats: (modules) => {
          console.log(modules);
          return getBundles(require.resolve(LOADABLE_JSON_PATH), modules)
        }
      }
    }),
    // new webpack.HotModuleReplacementPlugin(),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
  ]
};