const path = require('path')

// 启用热更新第二步
const webpack = require('webpack')

// 导入在内存中生产HTML页面的插件
const htmlWebpackPlugin = require('html-webpack-plugin')

// 这个配置文件其实是一个JS文件，通过Node中的模块操作，向外暴露了一个配置对象
module.exports = {
    // 配置入口和出口
    entry: path.join(__dirname, './src/main.js'),
    output: {
        // 打包输出目录路径
        path: path.join(__dirname, './dist'),
        // 配置文件名称
        filename: 'bundle.js'
    },
    devServer: {
        // 这是配置dev-server命令参数的第二种形式，相对麻烦一些，了解一下
        // --mode development --open --port 5000 --contentBase src --hot
        open: true, // 自动打开浏览器
        port: 5000, // 指定启动时打开的窗口
        contentBase: 'src', // 指定托管根路径
        hot: true // 启用热更新第一步
    },
    plugins: [
        // 配置插件的节点
        // webpack中只要带s就是数组
        // new 一个热更新的模块对象，启用热更新
        new webpack.HotModuleReplacementPlugin(),

        // 创建一个在内存中生产HTML页面的插件
        new htmlWebpackPlugin({
            // 指定模板页面，奖励会更加指定的页面路径，生产内存中的页面
            template: path.join(__dirname, './src/index.html'),

            // 指定生产的页面的名称
            filename: 'index.html'
        })
    ],
    module: { // 这个节点，用于配置所有第三方模块加载器
        rules: [ //所有第三方模块匹配规则
            // 配置处理css文件的loader规则，从后往前匹配调用
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] }
        ]
    }

}

// 命令行中输入webpack之后，做以下几步：
// 1、首先，webpack并没有通过命令的形式，给它指定入口和出口
// 2、webpack回去项目的根目录中，查找叫做‘webpack.config.js’的配置文件
// 3、查找到该文件后，解析执行，得到了配置文件中的各个对象
// 4、当webpack得到对象后，拿到了配置对象中指定的入口出口，进行打包构建