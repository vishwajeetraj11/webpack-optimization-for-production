
Example: 
```js
 new ImageMinimizerWebpackPlugin({
                minimizer: {
                    implementation: ImageMinimizerWebpackPlugin.imageminMinify,
                    options: {...},
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
```

Image Minimize Our plugin allows us to generate images in this format if you specify a special option in its configuration.

This option is called generator and it's part of image Minimizer plugin.

Here, we need to specify type asset because we want to generate images from other plugins.
In our case, it's copy Webpack plugin.

Similar to minimize our option inside the generator option, we can also specify different implementations.

Here, we can only specify one plugin.
According to the official documentation.
Specifying multiple plugins here will not work.
This plugin is responsible for creating WebP images out of existing images.

So basically this configuration will allow us to generate images in WebP format inside the disk folder out of our JPEG images.