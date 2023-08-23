const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const config = {
    // if we don't specify the file inside a folder, webpack will assume its index.js
    entry: path.resolve(__dirname, '../src/js/index.js'),
    output: {
        path: path.resolve(__dirname, '../dist'),
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            },
            {
                test: /\.js$/i,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/template.html'
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, '../images/tocopy/*.*'),
                }
            ]
        })
        // new CleanWebpackPlugin({
        //     cleanOnceBeforeBuildPatterns: [
        //         '**/*',
        //         path.join(process.cwd(), 'dist/**/*')
        //     ]
        // })
    ]
}

module.exports = config 