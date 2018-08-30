// main.js是项目的JS的入口文件

// 导入Jquery
// import *** from *** 是ES6中导入模块的方式
// 语法太新，当前浏览器不支持
import $ from 'jquery'

// 使用import导入css样式表
// webpack默认只打包处理JS类型文件，无法处理其他类型文件
// 如果想出来非JS文件,需要手动安装第三方loader加载器
// 1、打包处理css文件，需要安装npm i style-loader css-loader -D
// 2、打开webpack.config.js文件，新增配置节点，叫做module，是一个对象，在这个module对象身上，有一个rules属性，是一个数组，
// 在数组中存放了所有第三方文件的匹配和处理规则

// webpack处理第三方文件类型的过程
// 1、发现这个要处理的文件不是JS文件，去配置文件中查找有无第三方loader规则
// 2、如果有对应规则，这调用对应的loader处理该类型文件
// 3、调用loader的时候，从后往前逐一匹配
// 4、当最后一个loader调用完毕，把处理的结果直接交给webpack打包合并，最终输出到bundle.js中

import './css/index.css'

// 需要安装less和less-loader两个包文件
import './css/index.less'

// 需要安装node-sass和sass-loader两个包文件
import './css/index.scss'
$(function() {
    $('li:odd').css('backgroundColor', 'green')
    $('li:even').css('backgroundColor', function() {
        return '#' + 'D97634'
    })
})

// webpack的工作：
// 1、webpack能够处理JS文件相互依赖关系
// 2、webpack能够处理一些JS兼容问题，浏览器不识别的语法，转换为低级的，浏览器识别的语法
// 3、项目中本地安装的webpack-dev-server，所以无法当作脚本命令，在powershell直接运行，只有-g全局安装的工具才能直接运行
// 4、webpack-dev-server工具要直接运行，要在本地安装webpack
// 5、webpack-dev-server自动打包的bundle.js文件，没有存放到实际的物理磁盘上，而是存在了电脑内存中，项目目录中找不到打包好的bundle.js
// 6、webpack-dev-server自动打包的bundle.js文件，以一种虚拟的形式，托管到项目的目录中，虽然看不见，但是可以认为和dist, src, node_modules平级
// 放到内存的原因是速度较快，方便开发使用