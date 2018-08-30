const path = require('path')

const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: path.join(__dirname, src = "./src/main.js"),
    output: {
        path: path.join(__dirname, src = "./dist"),
        filename: 'bundle.js'
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),
            filename: 'index.html'
        })
    ],
    module: {
        rules: [
            // 处理CSS文件
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            // 处理less文件
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loadr'] },
            // 处理scss文件
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
            // 处理图片文件
            { test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader?limit=10240&name=[hash:8]-[name].[ext]' },
            // limit给定的值，是图片大小，单位为byte, 如果应用的图片大于等于给定的limit值，则不会转换为base64格式的字符串，如果小于的话则会转换
            // name=[name].[ext]表示文件名和后缀名不变
            // 为了防止重名，可以取32位中的前8位哈希值，用-连接

            // 处理字体文件
            { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' },

            // 配置babel，转换高级语法到低级语法
            { test: /\.js$/, use: "babel-loader", exclude: /node_modules/ }
        ]
    }
}