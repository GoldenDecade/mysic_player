const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const cleanWepbpackPlugin = require('clean-webpack-plugin')

module.exports = {
    entry: {
        index: './src/index.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /^.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            title: '生产环境构建'
        }),
        new cleanWepbpackPlugin(['dist'])
    ]
}