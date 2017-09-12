/**
 * Created by lenovo on 2017/9/10.
 */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')  //  自动生成html的插件
const CleanWebpackPlugin = require('clean-webpack-plugin') // 打包之后清理目录的插件
module.exports = {
    devtool: 'inline-source-map',
    devServer: { // 需要先 cnpm install --save-dev webpack-dev-server
        contentBase: './dist'  //  将dist目录下的文件，作为可访问文件
    },
    entry:{
        index : './src/index.js', // app对应的是output中filename中的name
        print : './src/print.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        // filename: 'bundle.js',
        filename: '[name].bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: path.resolve(__dirname, 'index.html'),
            title: 'Output Management'
        }),
        new CleanWebpackPlugin(['dist'], {
            root: ''//  默认是webpack.config.js所在的目录
        })
    ]
}