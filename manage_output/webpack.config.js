/**
 * Created by lenovo on 2017/9/10.
 */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')  //  自动生成html的插件
const CleanWebpackPlugin = require('clean-webpack-plugin') // 打包之后清理目录的插件
const UglifyJSPlugin = require('uglifyjs-webpack-plugin') //  能够删除未引用代码的压缩工具
module.exports = {
    devtool: 'inline-source-map',
    /*devServer: { // 需要先 cnpm install --save-dev webpack-dev-server
        contentBase: './dist'  //  将dist目录下的文件，作为可访问文件
    },*/
    entry:{
        index : './src/index.js' // app对应的是output中filename中的name
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        // filename: 'bundle.js',
        filename: '[name].bundle.js',
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            // filename: path.resolve(__dirname, 'index.html'),  这里引起的问题  指输出的文件名字及路径
            title: 'Output Management'
        }),
        new CleanWebpackPlugin(['dist'], {
            root: ''//  默认是webpack.config.js所在的目录
        }),
        new UglifyJSPlugin()
    ]
}