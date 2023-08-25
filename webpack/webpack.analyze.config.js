const production = require('./webpack.prod.config.js');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const { merge } = require('webpack-merge');

module.exports = merge(production, {
    plugins: [
        new BundleAnalyzerPlugin({
            analyzerMode: 'server',
            openAnalyzer: true
        })
    ]
})