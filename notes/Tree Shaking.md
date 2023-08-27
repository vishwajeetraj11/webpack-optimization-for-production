it means that code elimination.
In other words, Webpack can simply remove unused code from your production bundles.

This can reduce the size of the files significantly.
However, the benefits of shaken will vary depending on your code base.
If you have a lot of imported code from external or internal libraries that's not been used, you will
see a huge improvement in your generated bundle size.

```js
  optimization: {
        usedExports: true
    },
    mode: 'production'
```

Treeshaking works in production mode. 
and doesn't have unusedExports in bundle.

Lodash doesn't allow treeshaking but lodash-es does because it uses ECMA Script modules.

