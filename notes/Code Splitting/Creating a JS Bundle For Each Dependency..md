```js
// Creating a JS Bundle For Each Dependency
            chunks: 'all',
            maxSize: Infinity,
            minSize: 0,
            cacheGroups: {
                node_modules: {
                    test: /[\\/]node_modules[\\/]/,
                    name(module, chunks, cacheGroupKey) {
                        const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
                        return packageName
                    }
                }
            }
```

This strategy optimizes the size of each bundle.
As a result, all your bundles will be as small as possible.
However, there will be tons of them.
This means that your browser needs to make lots of HTTP requests in order to get them all.
This strategy makes sense only if you are using HTTP2 because it works fine in terms of performance even if you have so many HTTP requests.

also, it's worth noting that your browser will make that many requests only the first time you visit the website.

During your second short and consecutive visits, your browser will take all the data from cache, and for that reason you may see an improvement in loading times.

Thats's why this strategy is considered by many people.