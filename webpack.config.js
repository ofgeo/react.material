'use strict';

const IS_DEV = process.env.BABEL_ENV === 'development';
const IS_PROD = false;

const path = require('path');

const OUT_PATH = path.resolve(__dirname, 'packages');
const PUBLIC_PATH = '/assets/';
const DEVTOOL = IS_DEV ? 'source-map' : false;

module.exports = [{
    name: 'js-components',
    entry: {
        Button: [path.resolve('./packages/button/index.js')],
        Checkbox: [path.resolve('./packages/checkbox/index.js')]
    },
    output: {
        path: OUT_PATH,
        publicPath: PUBLIC_PATH,
        filename: '[name]/dist/index.' + (IS_DEV ? '' : 'min.') + 'js',
        library: ['rmd', '[name]'],
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    devtool: DEVTOOL,
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/(node_modules)/],
                loader: 'babel-loader',
                options: {
                    cacheDirectory: true,
                    presets: [
                        'react-app'
                    ]
                },
            }, {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    externals: {
        react: {
            root: 'React',
            commonjs2: 'react',
            commonjs: 'react',
            amd: 'react',
            umd: 'react',
        },
        'react-dom': {
            root: 'ReactDOM',
            commonjs2: 'react-dom',
            commonjs: 'react-dom',
            amd: 'react-dom',
            umd: 'react-dom',
        },
        'immutable': {
            root: '_',
            commonjs2: 'immutable',
            commonjs: 'immutable',
            amd: 'immutable',
            umd: 'immutable',
        }
    }
}];