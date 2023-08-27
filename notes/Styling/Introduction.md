
CSS
CSS Modules
PostCSS
Emotion
Sass
less
jss

Some of these approaches are similar to the traditional way of styling.

In this case, we are going to use two loaders at once.

**CSS loader and style loader.**

CSS loader knows how to read CSS files from disk and style loader knows how to inject the CSS right into the document object model.

Example

```js
rules: [
	{
		test: /\.css$/i,
		use: ['style-loader', 'css-loader'],
	}
]
```

This rule tells Webpack that every time it tries to import a CSS file, it needs to use both CSS loader and style loader.

CSS loader reads the contents of a CSS file and returns this contents, but it doesn't do anything else with this CSS.

Then the style loader kicks in, it takes the CSS and injects it right into the page using style tags.
By the way, using style loader bundles, your CSS together with your JavaScript into a single resulting file called bundle.js.

