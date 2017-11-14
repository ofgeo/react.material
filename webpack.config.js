'use strict';

const path = require('path');

const OUT_PATH = path.resolve(__dirname, 'packages');
const IS_DEV = process.env.BABEL_ENV === 'development';
const PUBLIC_PATH = '/assets/';
const SOURCE_MAPS = IS_DEV ? 'source-map' : false;

const EXCLUDE_PATTERN = new RegExp('(node_modules)' + `${path.sep}` + '(?!(@material)' + path.sep + ').*');
const EXTERNAL_PATTERN = new RegExp('(^@material)' + `${path.sep}.*`);
const EXTERNAL_PATTERN2 = new RegExp('(^@material)' + `${path.sep}` + '.+$');

module.exports = [{
    name: IS_DEV ? 'packages.js' : 'packages.min.js',
    entry: {
        Button: [path.resolve('./packages/button/index.js')],
        Checkbox: [path.resolve('./packages/checkbox/index.js')],
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
                exclude: EXCLUDE_PATTERN,
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
        // EXTERNAL_PATTERN,
        // EXTERNAL_PATTERN2,
        {
            react: {
                root: 'React',
                commonjs2: 'react',
                commonjs: 'react',
                amd: 'react',
                umd: 'react',
            }
        },
        {
            'react-dom': {
                root: 'ReactDOM',
                commonjs2: 'react-dom',
                commonjs: 'react-dom',
                amd: 'react-dom',
                umd: 'react-dom',
            }
        },
        {
            'prop-types': {
                root: 'PropTypes',
                commonjs2: 'prop-types',
                commonjs: 'prop-types',
                amd: 'prop-types',
                umd: 'prop-types',
            }
        },
        {
            immutable: {
                root: 'Immutable',
                commonjs2: 'immutable',
                commonjs: 'immutable',
                amd: 'immutable',
                umd: 'immutable',
            }
        }
    ]
}];