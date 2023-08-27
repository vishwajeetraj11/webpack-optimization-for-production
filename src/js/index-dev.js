import 'webpack-hot-middleware/client'
import { renderApp } from '.';

if (module.hot) {
    module.hot.accept('./index.js', function () {
        console.log('index.js has been changed');
        renderApp()
    })
}