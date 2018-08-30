// 入口文件
import Vue from 'vue'
// 导入App根组建
import app from './App.vue'


// 1.1导入路由包
import VueRouter from 'vue-router'
// 1.2安装路由模块
Vue.use(VueRouter)
    // 1.3导入自己的router.js路由模块
import router from './router.js'

// 2.1导入vue-resource
import VueResource from 'vue-resource'
// 2.2安装Vue-resource
Vue.use(VueResource)



// 按需导入mint-ui组件
import { Header, Swipe, SwipeItem } from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

// 导入MUI样式
import './lib/mui/css/mui.css'
import './css/icons-extra.css'

var vm = new Vue({
    el: '#app',
    render: c => c(app),
    // 挂载路由对象到Vue实例中
    router,
})