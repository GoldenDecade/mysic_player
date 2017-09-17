/**
 * Created by lenovo on 2017/9/17.
 */
const webpack = require('webpack')
const merge = require('webpack-merge')
const base = require('./webpack.base.config.js')
const uglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = merge(base,{
    // devtool: 'source-map',
    output: {
        publicPath: './'
    },
    plugins: [
        new uglifyJSPlugin({
            sourceMap: true
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production') //library针对具体环境进行代码优化，决定是否有log和test
            }
        })
    ]
})