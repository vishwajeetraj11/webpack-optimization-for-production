```js
"dev": "BABEL_ENV=dev webpack serve --config webpack/webpack.dev.config.js --hot",
"build": "BABEL_ENV=production webpack --config webpack/webpack.prod.config.js"
```

Babel will look for BABEL_ENV if not present then NODE_ENV if not then assume development.

Config.
```js
{
    "env": {
        "production": {
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
        },
        "dev": {
            "presets": [
                ["@babel/preset-env"]
            ]
        }
    }
}
```