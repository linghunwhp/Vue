import Vue from 'vue'

// // mint-UI的使用
// import MintUI from 'mint-ui'
// // 可以省略node_modules这一层目录，默认去那找
// import 'mint-ui/lib/style.css'
// // 将MintUI安装到Vue实例中
// Vue.use(MintUI)

// 按需导入mint-ui
import { Button } from "mint-ui"
// Vue.component('mybtn', Button)
// 可以自定义名称，使用官方的mt-button
Vue.component(Button.name, Button)

// 导入bootstrap样式
import 'bootstrap3/dist/css/bootstrap.css'
import './css/app.css'

// 导入MUI
import './lib/mui/css/mui.css'

// 1、导入vue-router包
import VueRouter from 'vue-router'
// 2、手动安装VueRouter
Vue.use(VueRouter)

// 导入app组件
import app from './App.vue'

// 导入自定义路由模块
import router from './router.js';

// import account from './main/Account.vue'
// import goodlist from './main/GoodList.vue'
// import login from './subcom/login.vue';
// import register from './subcom/register.vue'

// // 3、创建路由对象
// var router = new VueRouter({
//     routes: [{
//             path: '/account',
//             component: account,
//             children: [
//                 { path: 'login', component: login },
//                 { path: 'register', component: register }
//             ]
//         },
//         { path: '/goodlist', component: goodlist }
//     ]
// })

var vm = new Vue({
    el: '#app',
    // render会把el指定的容器中，所有的内容都清空覆盖，所以不要把路由的router-view和router-link直接写到el所控制的容器中
    render: c => c(app),
    // 4、将路由对象挂载到vm实例上
    router
})

// 注意：App组件，树通过VM实例的render函数渲染出来的，render渲染出来的组件只能放到el:'#app'所指的元素中去；
// Account和Goodlist组件，是通过路由匹配监听到的，所以这两个组件只能展示到router-view中去