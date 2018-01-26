const path = require('path');
const paths = require('./paths');
const webpack = require('webpack');
const jsdom = require("jsdom");
const {JSDOM} = jsdom;
const dom = new JSDOM('');

const {window} = new JSDOM(``);
const {document} = window;

const {ReactLoadablePlugin} = require('react-loadable/webpack');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
const eslintFormatter = require('react-dev-utils/eslintFormatter');

const loadablePlugin = new ReactLoadablePlugin({
  filename: '.tmp/react-loadable.json',
});

module.exports = {
  // You may want 'eval' instead if you prefer to see the compiled output in DevTools.
  // See the discussion in https://github.com/facebookincubator/create-react-app/issues/343.
  devtool: 'source-map',
  // target: "node",
  // entry: [
  //   'webpack-hot-middleware/client?path=/__webpack_hmr&reload=true',
  //   './src/browser.js',
  //   paths.appIndexJs,
  // ],
  node: {
    fs: "empty"
  },
  entry: {
    index: [
      'webpack-hot-middleware/client?path=/__webpack_hmr&reload=true',
      paths.appIndexJs
    ],
    browser: './src/browser.js'
  },
  output: {
    pathinfo: true,
    // This does not produce a real file. It's just the virtual path that is
    // served by WebpackDevServer in development. This is the JS bundle
    // containing code from all our entry points, and the Webpack runtime.
    filename: 'static/js/bundle.js',
    // There are also additional JS chunk files if you use code splitting.
    chunkFilename: 'static/js/[name].chunk.js',
    publicPath: '/',
    libraryTarget: 'umd'
  },
  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /\.(js|jsx|mjs)$/,
        enforce: 'pre',
        use: [
          {
            options: {
              formatter: eslintFormatter,
              eslintPath: require.resolve('eslint'),
            },
            loader: require.resolve('eslint-loader'),
          },
        ],
        include: [paths.appSrc],
      },
      {
        oneOf: [
          // Process JS with Babel.
          {
            test: /\.(js|jsx|mjs)$/,
            include: [paths.appSrc],
            loader: require.resolve('babel-loader'),
            options: {
              plugins: [
                'react-loadable/babel',
                require.resolve('react-loadable/babel'),
                // require.resolve('babel-plugin-syntax-dynamic-import'),
                // require.resolve('babel-plugin-dynamic-import-node'),
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
      filename: path.resolve(__dirname, 'build', 'react-loadable.json')
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'browser',
      filename: 'static/js/browser.js',
      chunks: ["browser"],
      minChunks: Infinity,
      // minSize: 1,
    }),
    new StaticSiteGeneratorPlugin({
      paths: [
        '/',
      ],
      globals: {
        window: window,
        document: document,
      },
      entry: 'index',
      crawl: true,
      locals:{
        loadableStats:require(path.resolve(__dirname, 'build', 'react-loadable.json'))
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  ]
};