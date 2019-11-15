const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
const MinicssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
    entry: './frontend/app.js',
    output: {
        path: path.join(__dirname, 'backend/public'),
        filename: 'js/bundle.js',
    },
    mode: 'production',
    module: {
        rules: [
          {
            test: /\.css$/,
            use: [ devMode ? 
                  'style-loader' : 
                  MinicssExtractPlugin.loader,
                  'css-loader']
          }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './frontend/index.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            }
        }),
        new MinicssExtractPlugin({
            filename: 'css/bundle.css'
        })
    ],
    devtool: 'source-map'
}