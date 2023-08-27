
GZIP is a data compression algorithm capable of compression and decompression files, and it's able to do that at a high speed.

GZIP can compress almost any file type from plain text to images, and it's fast enough to compress and decompress data on the fly.

Web servers use GZIP to reduce the total amount of data transferred to clients.

When a browser with GZIP support sends an HTTP request, it adds a special flag to accept encoding header.

On the other hand, when the web server receives such kind of request, it's going to check this header.

If the browser supports GZIP compression, then the web server sends the compressed files to the browser instead of the original files.

In this case, the browser will decompress the content it received from the web server before rendering that content.

Nowadays, all modern browsers and web servers support GZIP compression.

```json
npm i --save-dev compression-webpack-plugin
```

```js
new CompressionPlugin({
            algorithm: 'gzip',
            test: /\.(js|css)$/,
        })
```

If the browser supports GZIP compression, then the web server will send the compressed version to the browser instead of the original file.