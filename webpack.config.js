'use strict';

const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const OUT_PATH = path.resolve(__dirname, 'packages');

const IS_DEV = process.env.BABEL_ENV === 'development';
const IS_PROD = false;


const PUBLIC_PATH = '/assets/';
const SOURCE_MAPS = IS_DEV ? 'source-map' : false;

const CSS_FILENAME_OUTPUT_PATTERN = '[name]/dist/index.' + (IS_DEV ? '' : 'min.') + 'css';

const createCssExtractTextPlugin = () => new ExtractTextPlugin(CSS_FILENAME_OUTPUT_PATTERN);

module.exports = [{
    name: 'js-components',
    entry: {
        Button: [path.resolve('./packages/button/index.js')],
        Checkbox: [path.resolve('./packages/checkbox/index.js')],
        Theme: [path.resolve('./packages/theme/index.js')]
    },
    output: {
        path: OUT_PATH,
        publicPath: PUBLIC_PATH,
        filename: '[name]/dist/index.' + (IS_DEV ? '' : 'min.') + 'js',
        library: ['rmd', '[name]'],
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    devtool: SOURCE_MAPS,
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
                use: [
                    {
                        loader: 'style-loader',
                        options: {
                            sourceMap: false,
                            hmr: false
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
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