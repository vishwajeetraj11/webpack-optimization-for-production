Passing Environment variables on Linux and Mac

```
NODE_ENV=production <command>
```

Passing Environment variables on Windows

```
set NODE_ENV=production&& <command>
```

The easiest way to define your NPM script in a cross-platform way is to use an extra NPM package named `corss-env`.


```js
  "dev": "cross-env BABEL_ENV=dev webpack serve --config webpack/webpack.dev.config.js --hot",
    "build": "cross-env BABEL_ENV=production webpack --config webpack/webpack.prod.config.js"
```

