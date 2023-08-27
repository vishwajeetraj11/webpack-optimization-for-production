A CSS Module is a CSS file in which all class names and animation names are scoped locally.
CSS Modules in not a feature of the browser but rather a step in build proces.

CSS Module File
```css
.notification {
    background-color: #d4edda;
    color: #155724;
    height: 50px;
    width: 100%;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 0;
}
```

```js
import style from '../style/notification.module.css';

//Accessing it 
const notification = `<div class='${styles.notification}'>Todo item added</div>`
```

So here is how it works.

When you import a CSS module inside a JavaScript file, CSS modules will define an object making class names from the file to dynamically scoped class names that can be used in JavaScript code as an object and properties of that object.

The notification class does not have to be unique throughout the project as it's not the actual class name that you'll be rendered.

Webpack will replace this class name vs another generated class name that's going to be rendered on the page.

### Webpack Config to support CSS Modules

```js
  rules: [
            {
                test: /\.css$/i,
                exclude: /\.module\.css$/,
                use: [MiniCSSExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.css$/,
                include: /\.module\.css$/,
                use: [
                    MiniCSSExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                        }
                    }
                ]
            }
        ]
```

This will render a classname in browser as some Hash.

```html
<div class="LUCnAtTYHzuZtKP0yOci">Todo item added</div>
```

```js
            {
                test: /\.css$/,
                include: /\.module\.css$/,
                use: [
                    MiniCSSExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
	                            localIdentName: "[hash:64]"
                            },
                        }
                    }
                ]
            }
```

To prevent this.

```js
            {
                test: /\.css$/,
                include: /\.module\.css$/,
                use: [
                    MiniCSSExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
	                            localIdentName: "[local]--[hash:64]"
	                            // local is classname
                            },
                        }
                    }
                ]
            }
```

