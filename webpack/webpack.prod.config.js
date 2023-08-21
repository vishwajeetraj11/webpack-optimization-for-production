const common = require('./webpack.common.config.js');
const { merge } = require('webpack-merge');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = merge(common, {
    mode: 'production',
    output: {
        filename: '[name].[contenthash:12].js',
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCSSExtractPlugin.loader, 'css-loader'],
            }
        ]
    },
    plugins: [
        new MiniCSSExtractPlugin({
            filename: '[name].[contenthash].css'
        })
    ]
})