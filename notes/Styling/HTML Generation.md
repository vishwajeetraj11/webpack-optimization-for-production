
Now, everytime we change some thing in the css or js file, webpack will generate a new file which we will have to go update in index.html.

Webpack can take care of that.

> **Plugin: html-webpack-plugin.**
   It  can also create html files from scratch.

> Loader: html-loader
> It tells webpack how to handle html files.


```js
plugins: [
	new HtmlWebpackPlugin({
		`filename: 'index.html',
		templa`te: 'src/template.html'
	})
]
```

```js
rules: [
	{
		test: /\.html$/i,
		use: [
			{
				loader: 'html-loader'
			}
		]
	}
]
```