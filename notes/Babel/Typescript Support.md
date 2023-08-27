Benefits
- Helps to catch more bugs at compile time.
- Better IDE support (accurate autocomplete, showing errors instantly).
- Much easier to maintain and refactor larger codebases.

Drawbacks
- A lot of time spent of defining types.
- Your codebase becomes significantly larger.
- Extra step in build process.

```
npm i --save-dev @babel/preset-typescript typescript
```

Adding tsconfig.json

```json
{
    "compilerOptions": {
        "module": "es2015",
        "target": "es2015",
		"noImplicitAny": true,
        "noUnusedParameters": true
	},
    "include": [
        "src/**/*"
    ],
    "exclude": [
        "node_modules",
		"dist"
    ]
}
```

Modifying Babel config 

```js
    "presets": [
        "@babel/preset-typescript"
    ],
```

Modifying Webpack config 

```js
 {
                test: /\.(js|ts)$/i,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
}
```

Adding typecheck script in package.json

```json
"typecheck": "tsc --noEmit"
```