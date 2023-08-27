Webpack doesn't minify CSS even in production mode.
Webpack also won't remove code/ css attributes that's commented out.

### CssMinimizerWebpack Plugin

It can shorten some CSS property values, it can replace color values with a shorter name, and it can also remove duplicated gestures, properties and so on.

By default, this plugin uses CSS Nano under the hood.

This can go through all the CSS we have and apply multiple optimizations to the CSS.

Example: 

```js
 optimization: {
        minimize: true,
        minimizer: [
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
```

These are the options that are going to be passed directly to CSS Nano.

Earlier when we used webpack before adding this minimizer we used to get minimized js.
But now we won't. 
because - by default the minimized array is not empty.
This array contains only one plugin that's called Terser plugin, and this plugin takes care of minifying JavaScript.

adding a minimizer, we overwrote the default plugin.

How to fix it?

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
        ]
    },
```

These three dots tell webpack to keep existing minimizers and only add new ones.