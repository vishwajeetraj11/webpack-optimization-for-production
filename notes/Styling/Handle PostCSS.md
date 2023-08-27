

Post CSS is a tool for transforming CSS with JavaScript.

It's a framework to develop CSS tools.

For example, it can be used to develop a template language such as SASS  and less.

Features are made available through plugins, postCSS plugins are small programs working with the object tree after the core has transformed a CSS string into an object tree, the plugins analyze and change the tree then post CSS generates a new string for the plugin changed tree.

we are going to use CSS in order to add browser specific prefixes.

We are using display flex in order to align DOM elements inside every TODO item in the list.
However, Display Flex wasn't supported by all browsers from the beginning of its existence.
Instead, browsers are adding support for it gradually over time.
It was quite popular for browser authors to add cutting edge features and hide it behind a vendor prefix until the specification became official.
Then and only then, they are adding support for CSS properties without any vendor prefixes.
Display Flex is one of such features.
Other examples include box shadow and Display Grid.

Vendor prefixes for flexbox.
```css
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
```

There are automated tools that can analyze your CSS based on the browser versions you need to support and add vendor prefixes only to those properties that actually need them.

Tool: Autoprefixer

```json
npm i --save-dev autoprefixer postcss-loader
```

postcss needs a config file that can be json or a js file.

```js
module.exports = {
    plugins: [
        require('autoprefixer'),    
    ]
}
```

An interesting question is how after prefix from knows which CSS properties need vendor prefixes and which don't?

you can create a small browsers list file where you can specify which browsers you need to support, and based on that list of supported browsers autoprefixr will know which CSS properties still need vendor prefixes in your specific case.

.browserlistrc

```.browserlistrc
last 10 versions
```

Our application should work fine in the last ten versions of every browser.

I'm going to do it only for production builds because during the development builds, I'm using the latest version of Chrome browser, which already has support for most features without any kind of vendor prefixes.

webpack config.
```js
 {
    test: /\.scss$/i,
    use: [MiniCSSExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
 },
            
```