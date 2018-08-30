// 区分webpack中导入vue和普通网页使用script导入vue的区别

// 项目JS的入口文件
console.log("ok")

// 1、在普通网页中使用Vue:
// （1）使用script标签，引入vue包
// （2）在index页面中，创建一个id为app div的容器
// （3）通过new vue得到vm实例

// 2、在webpack中使用vue：
// （1）安装Vue的包
// （2）导入Vue的包，可以有两种方式解决包不完整的问题

// 注意：import进来的包，功能不完整，只提供了runtime-only的方式

// 1、安装导入vue的包
import Vue from 'vue' //这个包不完整
// import Vue from '../node_modules/vue/dist/vue.js'
// 查找包的规则：
// 1、找项目根目录中有没有node_modules的文件夹
// 2、在node_modules中，根据包名找对应的vue文件夹
// 3、在vue文件夹中，找一个叫package.json的包配置文件
// 4、在package.json文件中，查找一个main属性【main属性制定了包在被加载时候的入口文件】


// 2、由于默认webpack无法打包.vue组件，需要安装相关的loader，npm i vue-loader vue-template-compiler -D
// 3、在webpack.config中加入配置项{ test: /\.vue$/, use: "vue-loader" },
// 4、Vue-loader在15.*之后的版本,vue-loader的使用都是需要伴生 VueLoaderPlugin的,所以要手动新建VueLoaderPlugin
// const VueLoaderPlugin = require('vue-loader/lib/plugin'); 
// new VueLoaderPlugin({
// })
// 5、新建.vue文件，分为三部分，template, script, style
// 6、使用import login from './login.vue'导入login组件
import login from './login.vue'

// 7、创建VM实例，
// var vm = new Vue({ el: '#app', data: { msg: '123' }, components: { login }, render: c => c(login)})
// 8、在页面中创建一个id为app的div元素，作为vm实例控制的区域

var vm = new Vue({
    el: '#app',
    data: {
        msg: '123'
    },
    // components: {
    //     login
    // },
    render: function(createElements) {
        // 在webpack中，如果想通过vue把一个组件放到页面中展示，vm实例中的render函数可以实现
        return createElements(login)
    },

    // render: c => c(login)
})

import zs, { title as title123, content } from './test'
console.log(zs)
console.log(title123 + content)