Lazy loading is a great way to optimize your application because you don't need to load all your code at once.

Lazy loading goes together with code splitting because it requires you first to split your code into multiple bundles and then load some of those bundles when your application needs it.

This speeds up the initial load of your application and saves Internet traffic, since some of the bundles may never be loaded for particular users.

`chunks: 'all'`
This property indicates which chunks will be selected for optimization.

`chunks: 'initial'`
Initial chunks mean that these optimizations should be applicable only to those chunks that will be loaded during the initial application load.

`chunks: 'async'`
async chunks are those chunks which are loaded asynchronously after the application has already loaded.

```js
splitChunks: {
            chunks: 'all',
            maxSize: Infinity,
            minSize: 2000,
            cacheGroups: {
                jquery: {
                    test: /[\\/]node_modules[\\/]jquery[\\/]/,
                    name: 'jquery',
                    priority: 2,
                },
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
```

we need to specify a priority for remaining cache groups.
one module can belong to multiple cache groups.
both jquery and lodash can be handled by node_modules, cache group but we want them to be generated as separate bundles.

In order to achieve that, we can specify higher priority to those two cash groups.

If you don't specify any kind of priority, Webpack will use zero as a default priority.

Therefore, if you need to overwrite that priority, you can put any number greater than zero.

### Parallel Lazy Loading 

```js
  const [{ Modal }, { default: $ }] = await Promise.all([
        import(
            'bootstrap'
            /* webpackChunkName: "bootstrap" */
        ),
        import(
            'jquery'
            /* webpackChunkName: "jquery" */
        )
    ]);
    console.log('loaded')
```

