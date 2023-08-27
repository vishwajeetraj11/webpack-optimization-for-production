
```js
		splitChunks: {
            chunks: 'all',
            maxSize: 5000,
            minSize: 1000,
            cacheGroups: {
                jquery: {
                    test: /[\\/]node_modules[\\/]jquery[\\/]/,
                    name: 'jquery',
                },
                bootstrap: {
                    test: /[\\/]node_modules[\\/]bootstrap[\\/]/,
                    name: 'bootstrap',
                },
                lodash: {
                    test: /[\\/]node_modules[\\/]lodash-es[\\/]/,
                    name: 'lodash',
                },
                node_modules: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'node_modules',
                    // priority: -10,
                }
            }
        }
```



