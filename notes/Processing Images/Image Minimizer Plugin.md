This plugin can also use imagemin under the hood.

```js
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
                minimizerOptions: {
                    implementation: ImageMinimizerWebpackPlugin.imageminMinify,
                    options: {
                        plugins: [
                            ['imagemin-mozjpeg', { quality: 40 }],
                            ['imagemin-pngquant', { quality: [0.65, 0.95], speed: 4 }],
                        ]
                    }
                }
            })
        ]
    },
```

More Plugins (imagemin)
```js
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
```

We've seen that we can get similar results using this plugin in comparison with `image-webpack-loader.`
- reduction of image sizes.

This plugin has some benefits over `image-webpack-loader`.
Example: 
It's possible to optimize images that were copied over to your dist folder using `copy-webpack-plugin`.

This is useful when dealing of 100s of images from file system.
In that case, it would be time consuming to reference all those images one by one in your source code. Instead, you might want to generate image references programmatically.

Fix:
What's more, you can store file names in your database and get those file names from the backend.
You can get the list of images by making an HTTP request to the back end.

In this case, we won't know which images will be returned from BE at compile time. It'll be in runtime.
Therefore, Webpack doesn't know which images it should process based on the source code.
That's why in this case we need to use something different than exit modules or standard Webpack loaders.

Luckily there is a special Webpack plugin that can take care of large amounts of image files, even

if they are not referenced statically in the source code.

This plugin is called Copy Webpack plugin and it's basically copying files from one folder to another during the build process.

Those images can also be optimized during the process of copying.

Example: 
```js
new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, '../images/tocopy/*.*'),
                }
            ]
        })
```

