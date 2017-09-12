/**
 * Created by lenovo on 2017/9/9.
 */
const path = require('path')
module.exports = {
    entry: './index.js',
    output: {
        // path: path.resolve(__dirname, 'dist'),
        path: path.join(__dirname, 'dist'),  // 输出文件的目录名字   与publicPath之间并没有关系
        filename: 'bundle.js',
        publicPath: 'dist/'  //  publicPath  指的是  打包之后的文件所放的目录名字
    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
                // use: ['style-loader', 'css-loader', 'scss-loader']
            },
            {
                test: /\.styl$/,
                // loader: 'style-loader!css-loader!stylus-loader'
                use: ['style-loader', 'css-loader', 'stylus-loader']
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
    }
}