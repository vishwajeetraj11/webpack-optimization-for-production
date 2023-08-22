const common = require('./webpack.common.config.js');
const { merge } = require('webpack-merge');
const path = require('path');

module.exports = merge(common, {
    mode: 'development',
    output: {
        filename: 'bundle.js'
    },
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
                use: ['style-loader', 'css-loader', 'sass-loader'],
            }
        ]
    }
})
