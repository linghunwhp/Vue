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

// 设置请求根路径
// Vue.http.options.root = 'http://vue.studyit.io'
// 全局设置post表单数据格式
Vue.http.options.emulateJSON = true;

// 导入时间插件
import moment from 'moment'
// 定义全局过滤器
Vue.filter('dateFormat', function(dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
        return moment(dataStr).format(pattern)
    })
    // {{ item.time | dateFormat('YYYY-MM-DD')}}

// 注册vuex
import Vuex from 'vuex'
Vue.use(Vuex)

// 每次进入网站后，进入main.js，从本地存储中拿到购物车数据
var car = JSON.parse(localStorage.getItem('car') || '[]')

var store = new Vuex.Store({
    // this.$store.state.***
    state: {
        // 购物车中的商品数据，用一个数组存储起来，存储商品对象：{id:商品id, count：购买数量, price：商品单价, selected:false/true }
        car
    },
    // this.$store.commit('方法名称', '按需传递唯一参数')
    mutations: {
        addToCar(state, goodsinfo) {
            // 点击加入购物车，把商品信息保存到store中的car上
            // 分析：购物车之前已经有对应商品，直接更新数量即可
            // 如果没有，把商品数据push到car中
            var flag = false
            state.car.some(item => {
                if (item.id == goodsinfo.id) {
                    item.count += parseInt(goodsinfo.count)
                    flag = true
                    return true
                }
            })

            if (!flag) {
                state.car.push(goodsinfo)
            }

            // 当car数组有更新之后，存储到本地的localStorage中
            localStorage.setItem('car', JSON.stringify(state.car))
        },
        upadateGoodsInfo(state, goodsinfo) {
            // 修改购物车中商品的数量值
            state.car.some(item => {
                    if (item.id == goodsinfo.id) {
                        item.count = parseInt(goodsinfo.count)
                        return true
                    }
                })
                // 当car数组有更新之后，存储到本地的localStorage中
            localStorage.setItem('car', JSON.stringify(state.car))
        },
        removeFromCar(state, id) {
            // 根据id，从store中的购物车删除对应的商品记录
            state.car.some((item, i) => {
                    if (item.id == id) {
                        state.car.splice(i, 1)
                        return true;
                    }
                })
                // 当car数组有更新之后，存储到本地的localStorage中
            localStorage.setItem('car', JSON.stringify(state.car))
        },
        updateGoodsSelected(state, info) {
            state.car.some(item => {
                    if (item.id == info.id) {
                        item.selected = info.selected
                    }
                })
                // 当car数组有更新之后，存储到本地的localStorage中
            localStorage.setItem('car', JSON.stringify(state.car))
        }
    },
    // this.$store.getters.***
    getters: {
        // 相当于compute属性和过滤器属性
        getAllCount(state) {
            var c = 0;
            state.car.forEach(item => {
                c += item.count
            })
            return c
        },
        // 拼接出id和count的数组
        getGoodsCount(state) {
            var counts = {}
            state.car.forEach(item => {
                counts[item.id] = item.count
            })
            return counts
        },
        getGoodsSelected(state) {
            var o = {}
            state.car.forEach(item => {
                o[item.id] = item.selected
            })
            return o
        },
        getGoodsCountAndAmount(state) {
            var o = {
                count: 0,
                amount: 0
            }
            state.car.forEach(item => {
                if (item.selected) {
                    o.count += item.count
                    o.amount += item.price * item.count
                }
            })
            return o
        }
    }
})

// 按需导入mint-ui组件(会导致Lazyload加载不出来，所以使用全部加载方式)
// import { Header, Swipe, SwipeItem, Button, Lazyload } from 'mint-ui'
// Vue.component(Header.name, Header)
// Vue.component(Swipe.name, Swipe)
// Vue.component(SwipeItem.name, SwipeItem)
// Vue.component(Button.name, Button)
// Vue.use(Lazyload)

import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'

// 安装图片预览插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)

// 导入MUI样式
import './lib/mui/css/mui.css'
import './css/icons-extra.css'

var vm = new Vue({
    el: '#app',
    render: c => c(app),
    // 挂载路由对象到Vue实例中
    router,
    // 挂载状态管理对象
    store,
})