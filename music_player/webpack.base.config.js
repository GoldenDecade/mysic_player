/**
 * Created by lenovo on 2017/9/9.
 */
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var cleanWepbpackPlugin  = require('clean-webpack-plugin')
// import {path} from 'path'
module.exports = {
    entry: './app/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[chunkhash].js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,  // required
                loader: 'babel-loader',  // required
                exclude: /node_modules/,
                options: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader', 'css-loader'
                ]
            },
            {
                test: /\.styl$/,
                loader: 'style-loader!css-loader!stylus-loader'
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader'],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['file-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'music player by react',
            template: './app/index.tpl.html'
        }),
        new cleanWepbpackPlugin(['dist'])
    ],
    resolve: {
        alias: {
            app: path.resolve(__dirname, 'app')
        },
        extensions: [" ", ".js", ".jsx"]
    },
    externals: {
        jquery: { // 在index.html中引入这个js库，因此不需要生成它的bundle了
            commonjs: 'jquery',
            commonjs2: 'jquery',
            amd: 'jquery',
            root: '$'  //这是在其他js文件中使用的别名
        }
    }
}