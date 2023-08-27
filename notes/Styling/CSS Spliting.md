```js
rules: [
	{
		test: /\.css$/i,
		use: ['style-loader', 'css-loader'],
	}
]
```

This rule tells Webpack to bundle all our styles together with our JavaScript inside a single JavaScript file called bundle.js.

Bundled JS styles are dynamically added by JavaScript to the document object model during runtime. This works fine during the development phase, but if you are talking about production, we can do better than that if you are putting all your code into a single file.

**Eventually this file will become really huge.**

As you can guess, huge files can take ages to load and obviously customers would be happy to wait that long, especially if they are visiting your website from a mobile device with a slow internet connection.

**One of the best practices for improving the application performance is splitting your code into multiple bundles.**

We are going to extract our CSS code into a separate file that will be generated alongside the JavaScript bundle.

This way we will have two bundles one CSS bundle and one JavaScript bundle.
This approach has at least two benefits compared to having only one bundle.

- First, it will make the size of each bundle much smaller so each of them can be downloaded faster.
- Second, this will allow us to load multiple files in parallel, making the user experience even better.

---
### Mini Css Extract Plugin
`mini-css-extract-plugin`

This will extract our CSS into a separate file and we can specify the name of this file.

```js
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCSSExtractPlugin.loader, 'style-loader', 'css-loader'],
            }
        ]
    },
    plugins: [
        new MiniCSSExtractPlugin({
            filename: '[name].[contenthash].css'
        })
    ]
})
```

Plugins is a JavaScript array because it can accept many plugins.

In general, Webpack can create multiple CSS bundles.
However, if you have only one entry point and only one output bundle, this can be a static name.

```
filename: 'style.css'
```

If you need to generate multiple bundles via multiple entry points, then you can use various file name substitutions in order to give each bundle a unique name.

By default, the name of the generated CSS file will be determined by the name of the entry point.

It's also possible to add the content hash to the name.

This is going to be the MD5 hash of the contents of the generated CSS file.

By default, the length of the content hash is 20 characters, but you can customize even that.

If I we 12 there, Webpack will put only the first 12 characters of the hash in the file name.

```
filename: '[name].[contenthash:12].css'
```

we can use the same substitutions in the name of the generated JavaScript bundle.

```
filename: '[name].[contenthash].js',
```

**MD5 hash in the filename only changes if the contents of the file changed from last generated file.**

