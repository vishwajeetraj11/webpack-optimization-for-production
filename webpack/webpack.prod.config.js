const common = require('./webpack.common.config.js');
const { merge } = require('webpack-merge');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    output: {
        filename: 'js/[name].[contenthash:12].js',
    },
    optimization: {
        minimize: true,
        minimizer: [
            '...',
            new CssMinimizerPlugin({
                minimizerOptions: {
                    preset: [
                        'default',
                        {
                            discardComments: { removeAll: true },
                        }
                    ]
                }
            }),
        ]
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
            },
            {
                test: /\.less$/i,
                use: [MiniCSSExtractPlugin.loader, 'css-loader', 'less-loader'],
            },
            {
                test: /\.scss$/i,
                use: [MiniCSSExtractPlugin.loader, 'css-loader', 'sass-loader'],
            }
        ]
    },
    plugins: [
        new MiniCSSExtractPlugin({
            filename: 'css/[name].[contenthash].css'
        })
    ]
})
