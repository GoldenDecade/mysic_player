const path = require('path')
const webpack = require('webpack')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
module.exports = {
    entry: {
        main: './src/index.js',
        // another: './src/another.js',
        vendor: [
            'lodash',
            'jquery'
        ]
    },
    devtool: 'inline-source-map',
    devServer: {
        port: 3000,
        contentBase: './dist'
    },
    output: {
        // filename: '[name].bundle.js',
        filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        alias: {
            src: path.resolve(__dirname, 'src')
        },
        extensions: [" ", ".js", ".jsx"]
    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                use: 'babel-loader',
                exclude: path.resolve(__dirname, 'node_modules'),

            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            title: 'prevent duplication',
            template: path.resolve(__dirname, 'index.html')  //确定使用的模板
        }),
        new webpack.HashedModuleIdsPlugin(), // 对于vendor中的第三方库，不需要经常更换其hash名，这个插件的作用就是如此
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor' // 指定公共bundle的名字
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'runtime' // 必须放在vendor的后面
        }),
        new CleanWebpackPlugin(['dist'])
    ],
    externals: {
        jquery: { // 在index.html中引入这个js库，因此不需要生成它的bundle了
            commonjs: 'jquery',
            commonjs2: 'jquery',
            amd: 'jquery',
            root: '$'  //这是在其他js文件中使用的别名
        }
    }
}