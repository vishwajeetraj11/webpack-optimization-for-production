
Remove unused CSS.

Adding bootstrap increased the bundle side by 198kb and it was around a whole lot less before.

Example:
```js
 new PurgeCSSPlugin({
            paths: glob.sync(
                `${path.join(__dirname, '../src')}/**/*`,
                { nodir: true }
            )
        })
```

glob will find all files that match specific pattern.
and `nodir` option doesn't match any directories only files.

`/* purgecss ignore */
for whitelisting selectors.

why we need to whitelist certain selectors.
The reason for that is because Webpack will convert all CSS selectors to some kind of unreadable hash during the build process for production builds.