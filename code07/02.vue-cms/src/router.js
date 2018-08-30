// 抽离router模块

import VueRouter from 'vue-router'

// 1、导入对应的路由组件
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'

// 2、创建路由对象
var router = new VueRouter({
    // 配置路由规则
    routes: [{
            path: '/home',
            component: HomeContainer
        },
        { path: '/member', component: MemberContainer },
        { path: '/shopcar', component: ShopcarContainer },
        { path: '/search', component: SearchContainer }
        // {
        //     path: '',
        //     component: '',
        //     children: [
        //         { path: '', component: '' },
        //         { path: '', component: '' }
        //     ]
        // },
        // { path: '', component: '' }
    ],
    // 覆盖默认路由高亮的类，默认的类是router-link-active
    linkActiveClass: 'mui-active'
})

export default router