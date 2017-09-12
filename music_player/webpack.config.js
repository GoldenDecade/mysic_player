/**
 * Created by lenovo on 2017/9/9.
 */
const path = require('path')
// import {path} from 'path'
module.exports = {
    entry: './app/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        // publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,  // required
                loader: 'babel-loader',  // required
                include: [
                    path.resolve(__dirname, 'app')
                ],
                exclude: [
                    path.resolve(__dirname, 'node_modules')
                ],
                options: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader', 'css-loader'
                ]
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
                /*use: [
                    'style-loader','css-loader','less-loader'
                ]*/
            }
        ]
    }
}