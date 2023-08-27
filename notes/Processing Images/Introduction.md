Handle Images in development

```js
{
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset',
                parser: {
                    maxSize: 10 * 1024 // 10kb
                },
                generator: {
                    filename: './images/[name][ext]'
                }
}
```

So here we are using asset types in order to import images.
This will tell Webpack to generate a separate file only for large images, and small images will be inline directly into the JavaScript code.

So, serving an image of 1.3 M in development results in having 1.3 MB image in prod build too.

### Optimizing Images.
There are multiple tools you can use for image optimization.
using imagemin

Image Mean has quite a lot of various plugins it can minify PNG, jpg, SVG, WebP, etc.
there is a web back loader that utilizes image mean in order to minify images.

```js
npm install image-webpack-loader --save-dev
```

```js
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
                use: [
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                quality: 40,
                            },
                            pngquant: {
                                quality: [0.65, 0.95],
                                speed: 4,
                            }
                        }
                    }
                ]
            }
```

- JPEGs
It's the compression quality in range from zero, which means the worst quality to 100, which means perfect quality.

After multiple tries, I figured out that 40 value gives the best balance between the quality and the size of the image.

- PNGs
When using PNG one, you need to provide quality as a range of numbers, specifically minimum and maximum.
If conversion results in quality below the minimum, the image won't be saved.
So you can also specify the speed of compression which will affect the quality as well.