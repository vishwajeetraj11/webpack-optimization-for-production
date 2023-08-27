
While developing new features, we want to spend as little time possible waiting for the code to  built. Ideally we wanna see our changes in the browser instantly. Even without rebuilding stuff.

webpack dev server provides
- automatic rebuilds
- hot module replacements

Example 

```js
devServer: {
	port: 3000,
	static: {
		directory: path.resolve(__dirname, '../dist'),
	},
	devMiddleware: {
		index: 'index.html',
		writeToDisk: true
	},
	client: {
		overlay: true,
	},
	liveReload: false
}
```

By default webpack dev server generates file in-memory and doesn't save them to dist. 
to allow files to be written to dist folder in development specify `writeToDisk: true`

`overlay:true`
This option tells webpack to show full screen overlay in the browser, when there are compiler errors or warnings.

By default,
The dev server will reload the page when file changes are detected, this is needed when we don't use hot module reload.

Hot module reloading allows us to get the latest changes in the browser without reloading the page.

disabling liveReload simply says not to reload the page since we'll enable hot module reload feature.

making changes in dev script in package.json 

```
"dev": "webpack serve --config webpack/webpack.dev.config.js --hot",
```