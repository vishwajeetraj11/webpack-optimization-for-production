const common = require('./webpack.common.config.js');
const { merge } = require('webpack-merge');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { PurgeCSSPlugin } = require('purgecss-webpack-plugin')
const glob = require('glob');
const ImageMinimizerWebpackPlugin = require('image-minimizer-webpack-plugin');

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
            new ImageMinimizerWebpackPlugin({
                minimizer: {
                    implementation: ImageMinimizerWebpackPlugin.imageminMinify,
                    options: {
                        plugins: [
                            ['imagemin-mozjpeg', { quality: 40 }],
                            ['imagemin-pngquant', { quality: [0.65, 0.95], speed: 4 }],
                            ['imagemin-gifsicle', { interlaced: true }],
                            ['imagemin-svgo', {
                                plugins: [
                                    {
                                        name: 'preset-default',
                                        params: {
                                            overrides: {
                                                removeViewBox: false,
                                                addAttributesToSVGElement: {
                                                    params: {
                                                        attributes: [
                                                            {
                                                                xmlns: 'http://www.w3.org/2000/svg'
                                                            }
                                                        ]
                                                    }
                                                }
                                            }
                                        }
                                    }
                                ]
                            }]
                        ]
                    }
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
            // {
            //     test: /\.scss$/i,
            //     use: [MiniCSSExtractPlugin.loader, 'css-loader', 'sass-loader'],
            // },
            {
                test: /\.scss$/i,
                use: [MiniCSSExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
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
                    filename: './images/[name].[contenthash:12][ext]'
                },
                // use: [
                //     {
                //         loader: 'image-webpack-loader',
                //         options: {
                //             mozjpeg: {
                //                 quality: 40,
                //             },
                //             pngquant: {
                //                 quality: [0.65, 0.95],
                //                 speed: 4,
                //             }
                //         }
                //     }
                // ]
            }
        ]
    },
    plugins: [
        new MiniCSSExtractPlugin({
            filename: 'css/[name].[contenthash].css'
        }),
        new PurgeCSSPlugin({
            paths: glob.sync(
                `${path.join(__dirname, '../src')}/**/*`,
                { nodir: true }
            )
        })
    ]
})
