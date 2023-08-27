
Basically, a source map is a way to map the generated JavaScript bundle back to the original source code.

In order to make this work.
When you run your build process along with the minify and bundling your code would also generate a source map which holds the information about your original files.

At the same time, developer tools in your browser can parse source maps and make it appear as if you are running an minified original source code.

Webpack uses source-maps in development out of the box.
In development(js): Webpack uses a variant of source maps where the original source code is being generated using eval function.
for css- it still shows minified.
