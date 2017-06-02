const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

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
    externals: {
        jquery: 'jQuery'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                  fallback: 'style-loader',
                  use: 'css-loader'
                })
            }
        ],
        loaders: [
            // CSS
            // { test: /\.css$/, loader: 'style-loader!css-loader' },
            // Fonts
            { test: /\.svg$/, loader: 'url-loader?limit=65000&mimetype=image/svg+xml&name=assets/fonts/[name].[ext]' },
            { test: /\.woff$/, loader: 'url-loader?limit=65000&mimetype=application/font-woff&name=assets/fonts/[name].[ext]' },
            { test: /\.woff2$/, loader: 'url-loader?limit=65000&mimetype=application/font-woff2&name=assets/fonts/[name].[ext]' },
            { test: /\.[ot]tf$/, loader: 'url-loader?limit=65000&mimetype=application/octet-stream&name=assets/fonts/[name].[ext]' },
            { test: /\.eot$/, loader: 'url-loader?limit=65000&mimetype=application/vnd.ms-fontobject&name=assets/fonts/[name].[ext]' }
        ]
    },
    plugins: [
        new ExtractTextPlugin('assets/[name].css'),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin(),
        new HtmlWebpackPlugin({
            title: 'Webpack',
            template: path.join(sourcePath, 'index.prod.html')
        })
    ],
    devServer: {
        contentBase: destPath,
        stats: {
            warnings: false
        }
    }
}
