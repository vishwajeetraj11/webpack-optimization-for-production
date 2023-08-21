const common = require('./webpack.common.config.js');
const { merge } = require('webpack-merge');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = merge(common, {
    mode: 'production',
    output: {
        filename: 'js/[name].[contenthash:12].js',
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                exclude: /\.module\.css$/,
                use: [MiniCSSExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.css$/,
                include: /\.module\.css$/,
                use: [
                    MiniCSSExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: "[hash:64]"
                            },
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new MiniCSSExtractPlugin({
            filename: 'css/[name].[contenthash].css'
        })
    ]
})