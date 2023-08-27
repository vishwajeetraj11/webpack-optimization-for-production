
Babel is a JavaScript compiler that can convert to ECMAScript 2015 and above into backwards compatible version of JavaScript that supported in all browsers.

This becomes handy, especially if your application needs to work flawlessly in older browsers like
Internet Explorer, older version of Firefox and so on.

Babel allows you to use all kinds of newest script features by combining various Babel plugins.

`npm i --save-dev @babel/preset-env @babel/core @babel-loader`

"@babel/preset-env" will tell babel to env preset in order to support ECMA Script 6 and later.
Envy preset needs to have the list of target browsers in order to generate the list of plugins needed for Babel.

For example, if your application only needs to support the latest version of Chrome, you don't have to transform Arrow functions to regular JavaScript function because Chrome supports Arrow functions out of the box.

However, if your application needs to support Internet Explorer, then you would have to transform them.

EMV preset will figure out by itself which things it needs to transform and which it doesn't.

Based on the list of supported browsers, you only need to tell it which browsers you need to support.

### .browserlistrc
file that needs to contain what browser version to support.
`> 0.25%` mean all browsers that 0.25% market share.