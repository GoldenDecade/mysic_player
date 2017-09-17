/**
 * Created by lenovo on 2017/9/17.
 */
const merge = require('webpack-merge')
const base = require('./webpack.base.config.js')

module.exports = merge(base, {
    // devtool: 'inline-source-map', // 追踪错误和警告在源代码中的原始位置
    output: {
        publicPath: '/'
    },
    devServer: {
        contentBase: './dist',
        port: 3009
    }
})