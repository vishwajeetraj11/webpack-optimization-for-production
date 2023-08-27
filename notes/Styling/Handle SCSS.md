
```js
{
     test: /\.scss$/i,
     use: [MiniCSSExtractPlugin.loader, 'css-loader', 'sass-loader'],
}    
```

Webpack process loaders from right to left.

First, it will invoke the `sass-loader`, which will convert our source to CSS, and then it will invoke

`css-loader`, which will take the converted CSS and convert it into the JavaScript representation.

And only then Webpack will invoke `style-loader`, which will create a style text inside our HTML page and put CSS inside those tags.

