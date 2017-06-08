const pkj = require('./package.json')
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const sourcePath = path.join(__dirname, 'src')
const destPath = path.join(__dirname, 'dist')

module.exports = {
    devtool: 'source-map',
    entry: {
        project: [path.join(sourcePath, 'assets', 'project.js')]
    },
    output: {
        path: destPath,
        publicPath: '/',
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        loaders: [
            // Javascript NEXT
            { test: /\.jsx?$/, loader: 'babel-loader', options: {
                presets: [
                    'es2015',
                    'react',
                ],
                plugins: [
                    'transform-object-rest-spread'
                ]
            }},
            // CSS
            {
                test: /\.css$/,
                include: [
                    path.join(__dirname, 'node_modules'),
                    path.join(__dirname, 'src/assets/styles')
                ],
                loader: 'style-loader!css-loader?sourceMap'
            },
            // CSS (with modules)
            {
                test: /\.css$/,
                exclude: [
                    path.join(__dirname, 'node_modules'),
                    path.join(__dirname, 'src/assets/styles')
                ],
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[name]__[local]--[hash:base64:5]',
                            sourceMap: true
                        }
                    }
                ]
            },
            // CSS Preprocessors
            { test: /\.less/, loader: 'style-loader!css-loader!less-loader?sourceMap' },
            { test: /\.scss/, loader: 'style-loader!css-loader!sass-loader?sourceMap' },
            { test: /\.styl/, loader: 'style-loader!css-loader!stylus-loader?sourceMap' },
            // Fonts
            { test: /\.svg$/, loader: 'url-loader?mimetype=image/svg+xml&name=assets/fonts/[name].[ext]' },
            { test: /\.woff$/, loader: 'url-loader?mimetype=application/font-woff&name=assets/fonts/[name].[ext]' },
            { test: /\.woff2$/, loader: 'url-loader?mimetype=application/font-woff2&name=assets/fonts/[name].[ext]' },
            { test: /\.[ot]tf$/, loader: 'url-loader?mimetype=application/octet-stream&name=assets/fonts/[name].[ext]' },
            { test: /\.eot$/, loader: 'url-loader?mimetype=application/vnd.ms-fontobject&name=assets/fonts/[name].[ext]' }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development')
            }
        }),
    ],
    devServer: {
        contentBase: sourcePath,
        stats: {
            warnings: false
        }
    }
}
