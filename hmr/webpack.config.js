/**
 * Created by lenovo on 2017/9/12.
 */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    entry: {
        app : './src/index.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'inline-source-map',
    devServer: {
        inline: true,
        contentBase: './dist',
        hot: true,    //  在使用热替换的时候才加
        port: 3000
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'HMR'
        }),
        new webpack.HotModuleReplacementPlugin() // 在运行时更新各种模块，而无需进行完全刷新
    ]
}
