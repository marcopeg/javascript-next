const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const sourcePath = path.join(__dirname, 'src')
const destPath = path.join(__dirname, 'dist')

module.exports = {
    entry: {
        project: [path.join(sourcePath, 'assets', 'project.js')]
    },
    output: {
        path: destPath,
        publicPath: '.',
        filename: 'assets/[name].js'
    },
    module: {
        loaders: [
            // CSS
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            // Fonts
            { test: /\.svg$/, loader: 'url-loader?limit=9999999&mimetype=image/svg+xml&name=assets/fonts/[name].[ext]' },
            { test: /\.woff$/, loader: 'url-loader?limit=9999999&mimetype=application/font-woff&name=assets/fonts/[name].[ext]' },
            { test: /\.woff2$/, loader: 'url-loader?limit=9999999&mimetype=application/font-woff2&name=assets/fonts/[name].[ext]' },
            { test: /\.[ot]tf$/, loader: 'url-loader?limit=9999999&mimetype=application/octet-stream&name=assets/fonts/[name].[ext]' },
            { test: /\.eot$/, loader: 'url-loader?limit=9999999&mimetype=application/vnd.ms-fontobject&name=assets/fonts/[name].[ext]' }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack',
            template: path.join(sourcePath, 'index.html')
        })
    ],
    devServer: {
        contentBase: destPath,
        stats: {
            warnings: false
        }
    }
}
