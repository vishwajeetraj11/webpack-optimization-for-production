const path = require('path')

const config = {
    // if we don't specify the file inside a folder, webpack will assume its index.js
    entry: '../src/js/index.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'main.js'
    },
    mode: 'development'
}

module.exports = { ...config }