Broadly is yet another compression algorithm similar to GZIP, but providing slightly better compression numbers broadly is supported by most web browsers, by major web servers and by some CDNs.

```js
 new CompressionPlugin({
            algorithm: 'brotliCompress',
            test: /\.(js|css)$/,
            compressionOptions: {
                level: 11,
            }
        })
```