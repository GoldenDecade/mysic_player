const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
    devtool: 'inline-source-map', // 追踪错误和警告在源代码中的原始位置
    devServer: {
        contentBase: './dist'
    }
})
