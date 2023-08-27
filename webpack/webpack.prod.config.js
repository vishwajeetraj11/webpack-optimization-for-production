const common = require('./webpack.common.config.js');
const { merge } = require('webpack-merge');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { PurgeCSSPlugin } = require('purgecss-webpack-plugin')
const glob = require('glob');
const ImageMinimizerWebpackPlugin = require('image-minimizer-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    entry: path.resolve(__dirname, '../src/js/index.js'),
    output: {
        filename: 'js/[name].[contenthash:12].js',
        publicPath: '/static/'
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
                        ],
                    }
                },
                generator: [{
                    type: 'asset',
                    preset: 'webp-custom-name',
                    implementation: ImageMinimizerWebpackPlugin.imageminGenerate,
                    options: {
                        plugins: ['imagemin-webp']
                    }
                }]
            }),
        ],
        runtimeChunk: true,
        splitChunks: {
            // Extracting Heavy Dependencies into Separate Bundles.
            // cacheGroups: {
            //     jquery: {
            //         test: /[\\/]node_modules[\\/]jquery[\\/]/,
            //         name: 'jquery',
            //         chunks: 'initial',
            //     },
            //     bootstrap: {
            //         test: /[\\/]node_modules[\\/]bootstrap[\\/]/,
            //         name: 'bootstrap',
            //         chunks: 'initial',
            //     }
            // }
            // Specifying Criteria For Code Splitting
            // chunks: 'all',
            // maxSize: 140000,
            // minSize: 50000,
            // name(module, chunks, cacheGroupKey) {
            //     const filePathAsArray = module.identifier().split('/');
            //     return filePathAsArray[filePathAsArray.length - 1]
            // }
            // Node modules into its own separate dependency bundle
            // chunks: 'all',
            // maxSize: Infinity,
            // minSize: 0,
            // cacheGroups: {
            //     node_modules: {
            //         test: /[\\/]node_modules[\\/]/,
            //         name: 'node_modules',
            //     }
            // }
            // Creating a JS Bundle For Each Dependency
            // chunks: 'all',
            // maxSize: Infinity,
            // minSize: 0,
            // cacheGroups: {
            //     node_modules: {
            //         test: /[\\/]node_modules[\\/]/,
            //         name(module, chunks, cacheGroupKey) {
            //             const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
            //             return packageName
            //         }
            //     }
            // }
            // Custom Logic
            chunks: 'all',
            maxSize: Infinity,
            minSize: 2000,
            cacheGroups: {
                // jquery: {
                //     test: /[\\/]node_modules[\\/]jquery[\\/]/,
                //     name: 'jquery',
                //     priority: 2,
                // },
                // bootstrap will be handled asynchronously
                // bootstrap: {
                //     test: /[\\/]node_modules[\\/]bootstrap[\\/]/,
                //     name: 'bootstrap',
                // },
                lodash: {
                    test: /[\\/]node_modules[\\/]lodash-es[\\/]/,
                    name: 'lodash',
                    priority: 2,
                },
                node_modules: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'node_modules',
                    chunks: 'initial'
                },
                async: {
                    test: /[\\/]node_modules[\\/]/,
                    chunks: 'async',
                    name(module, chunks, cacheGroupKey) {
                        return chunks.map(chunk => chunk.name).join('-')
                    }
                }
            }
        }
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
        }),
        new CompressionPlugin({
            algorithm: 'gzip',
            test: /\.(js|css)$/,
        })
    ]
})
