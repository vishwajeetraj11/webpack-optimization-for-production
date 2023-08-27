
```js
 splitChunks: {
            chunks: 'all',
            maxSize: 140000,
            minSize: 50000,
            name(module, chunks, cacheGroupKey) {
                const filePathAsArray = module.identifier().split('/');
                return filePathAsArray[filePathAsArray.length - 1]
            }
        }
```

`maxSize` option is intended to be used with HTTP/2 and long term caching.
It increases the request count for better caching. It could also be used to decrease the file size for faster rebuilding.

`minSize`: Minimum size, in bytes, for a chunk to be generated.