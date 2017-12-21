'use strict';

const path = require('path');

const OUT_PATH = path.resolve(__dirname, 'packages');
const IS_DEV = process.env.BABEL_ENV === 'development';
const PUBLIC_PATH = '/assets/';
const SOURCE_MAPS = IS_DEV ? 'source-map' : false;

const EXCLUDE_PATTERN = new RegExp('(node_modules)' + `${path.sep}`
    + '(?!(@material)' + path.sep
    + ').*');
const INCLUDE_PATTERN = new RegExp('(node_modules)' + `${path.sep}`
    + '((@material)' + path.sep
    + ').*');
// const EXTERNAL_PATTERN = new RegExp('(^@material)' + `${path.sep}.*`);
const EXTERNAL_PATTERN = new RegExp('(^@react.material)' + `${path.sep}` + '.+$');

module.exports = {
  name: IS_DEV ? 'packages.js' : 'packages.min.js',
  entry: {
    Button: [path.resolve('./packages/button/index.js')],
    Checkbox: [path.resolve('./packages/checkbox/index.js')],
    Drawer: [path.resolve('./packages/drawer/index.js')],
    List: [path.resolve('./packages/list/index.js')],
    Theme: [path.resolve('./packages/theme/index.js')],
    Ripple: [path.resolve('./packages/ripple/index.js')]
  },
  output: {
    path: OUT_PATH,
    publicPath: PUBLIC_PATH,
    filename: '[name]/dist/index.' + (IS_DEV ? '' : 'min.') + 'js',
    library: ['r', 'm', '[name]'],
    libraryTarget: 'umd'
  },
  devtool: SOURCE_MAPS,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [EXCLUDE_PATTERN],
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              'react-app'
            ]
          }
        }]
      },
      {
        test: /\.css$/,
        use: [{
          loader: 'style-loader',
          options: {
            sourceMap: false,
            hmr: false
          }
        }, {
          loader: 'css-loader',
          options: {
            sourceMap: false
          }
        }]
      }
    ]
  },
  // resolve: {
  //   modules: ["node_modules"],
  //   alias: {
  //     react: path.resolve('node_modules/react'),
  //   },
  // },
  externals: [
    // EXTERNAL_PATTERN,
    EXTERNAL_PATTERN,
    {
      classnames: {
        commonjs2: 'classnames',
        commonjs: 'classnames',
        amd: 'classnames',
        umd: 'classnames',
        root: '_',
      }
    }, {
      react: {
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react',
        umd: 'react',
        root: '_',
      }
    }, {
      'react-dom': {
        commonjs2: 'react-dom',
        commonjs: 'react-dom',
        amd: 'react-dom',
        umd: 'react-dom',
        root: '_',
      }
    }, {
      'prop-types': {
        commonjs2: 'prop-types',
        commonjs: 'prop-types',
        amd: 'prop-types',
        umd: 'prop-types',
        root: '_',
      }
    }, {
      immutable: {
        root: '_',
        commonjs2: 'immutable',
        commonjs: 'immutable',
        amd: 'immutable',
        umd: 'immutable',
      }
    }
  ]
};