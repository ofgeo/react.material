'use strict';

const path = require('path');
const paths = require('./paths');

const OUT_PATH = path.resolve(__dirname, 'packages');
const IS_DEV = process.env.BABEL_ENV === 'development';
const PUBLIC_PATH = '/assets/';
const SOURCE_MAPS = IS_DEV ? 'source-map' : false;

const resolvePackage = relativePath => path.resolve(paths.packages, relativePath);

module.exports = [{
  name: IS_DEV ? 'packages.js' : 'packages.min.js',
  entry: {
    Button: [resolvePackage('button/es6/index.js')],
    Checkbox: [resolvePackage('checkbox/es6/index.js')],
    Drawer: [resolvePackage('drawer/es6/index.js')],
    List: [resolvePackage('list/es6/index.js')],
    Theme: [resolvePackage('theme/es6/index.js')],
    Ripple: [resolvePackage('ripple/es6/index.js')],
    Switch: [resolvePackage('switch/es6/index.js')],
    Components: [resolvePackage('components/es6/index.js')],
  },
  output: {
    path: paths.packages,
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
  externals: [
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
}];