
Besides transforming new syntax to the older syntax, Babel can add polyfills to missing features.

For example, promises have appeared in ECMA Script 6 and they are not supported in some browsers thatcame out before ECMA Script 6 was implemented everywhere.

Promises are not supported in Internet Explorer at all, and some of the newer promise features like Promise.any are not supported in all the versions of Chrome and Firefox.

This situation can be easily fixed by providing polyfills for those features.

A polyfill is a piece of code used to provide modern functionality to older browsers that don't natively support it.

Great news is that Babel can figure out by itself which polyfills you need based on the list of browsers that you want to support.

We just need to specify a couple of extra options in the Babel configuration before going forward.

Babel config 
```js
{
    "presets": [
        ["@babel/preset-env", {
            "useBuiltIns": "usage",
            "corejs": {
                "version": 3,
                "proposals": true
            },
            "debug": true
        }]
    ]
}
```

Use built ins option configures how env preset handles polyfills setting value to usage will add specific imports for polyfills based on their usage.

This functionality of adding polyfills is possible due to the library called Core JS.

First, we need to specify which versions of core gas we are going to use.
You can specify a major version here, or you can also include a minor version by default only polyfills for stable ECMA Script features are injected.

If you want to fill proposals, you need to specify this explicitly.

This setup will enable fill in for every proposal supported by core JS Version three.

The last option I was going to add here is called Debug.

Now, when running the build process, we would be able to see which molecules exactly were added by Babel.

We only need polyfills in production builds not in development because generating polyfills will increase build(rebuilds too.) times.