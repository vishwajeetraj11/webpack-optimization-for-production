
Webpack bundle Analyzer can visualize the size of webpack output files and provide an interactive representation of them.

Drawbacks of putting everythinh into a single bundle.
- bundle size is huge.
- suboptimal use of browser caching.

`npm i --save-dev webpack-bundle-analyzer`

webpack.analyze.config.js

```js
const production = require('./webpack.prod.config.js');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const { merge } = require('webpack-merge');

module.exports = merge(production, {
    plugins: [
        new BundleAnalyzerPlugin({
            analyzerMode: 'server',
            openAnalyzer: true
        })
    ]
})
```

npm script

```json
"bundle-analyzer": "NODE_ENV=production webpack --config webpack/webpack.analyze.config.js"
```

![[Pasted image 20230825163808.png]]

openAnalyzer: tell webpack to open report in your default browser.

