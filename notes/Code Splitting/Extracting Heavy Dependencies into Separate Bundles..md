
having all your code together with all the dependencies in one bundle is not great for browser caching.

As you know, each time you open a website in your browser, it needs to download all the code needed for that website together with all the assets.
This can take quite a lot of time, especially on mobile devices.

That's why all browsers use caching.
Caching allows browsers to decrease amount of requests needed to load websites, as well as make websites load faster.

### Code Splilting

In Webpack code splitting can be achieved using split chunks plugin, which is included out of the box.

```js
optimizations: {
	...,
	splitChunks: {
            cacheGroups: {
                jquery: {
                    test: /[\\/]node_modules[\\/]jquery[\\/]/,
                    name: 'jquery',
                    chunks: 'initial',
                },
                bootstrap: {
                    test: /[\\/]node_modules[\\/]bootstrap[\\/]/,
                    name: 'bootstrap',
                    chunks: 'initial',
                }
            }
        }
}
```

chunks can have three values.
It indicates which chunks will be selected for optimisation.
all -  both initial and asynchronous chunks.

async - those dynamic chunks that will be loaded asynchronously.

initial -  those chunks that will be loaded initially when your browser starts loading your page. Initial chunks need to be present in your main HTML file, which contains references to your JavaScript code and CSS.

name - naming the chunks.