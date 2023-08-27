const common = require('./webpack.common.config.js');
const { merge } = require('webpack-merge');
const path = require('path');
const webpack = require('webpack')

module.exports = merge(common, {
    mode: 'development',
    // UNCMNT: this is for manual dev server setup
    // entry: path.resolve(__dirname, '../src/js/index-dev.js'),
    entry: path.resolve(__dirname, '../src/js/index.js'),
    output: {
        filename: 'bundle.js',
        // UNCMNT: this is for manual dev server setup
        // publicPath: '/static/'
    },
    devtool: 'eval-source-map',
    devServer: {
        port: 9000,
        static: {
            directory: path.resolve(__dirname, '../dist'),
        },
        devMiddleware: {
            index: 'index.html',
            writeToDisk: true
        },
        client: {
            overlay: true,
        },

    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                exclude: /\.module\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.css$/,
                include: /\.module\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: "[local]--[md4:hash:7]"
                            },
                        }
                    }
                ]
            },
            {
                test: /\.less$/i,
                exclude: /\.module\.less$/,
                use: ['style-loader', , 'css-loader', 'less-loader'],
            },
            {
                test: /\.scss$/i,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 10 * 1024 // 10kb
                    }
                },
                generator: {
                    filename: './images/[name][ext]'
                }
            }
        ]
    },
    // needed for manual dev server setup to run.
    plugins: [
        // UNCMNT: this is for manual dev server setup
        // new webpack.HotModuleReplacementPlugin(),
    ]
})
