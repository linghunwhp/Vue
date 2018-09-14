// 抽离router模块

import VueRouter from 'vue-router'

// 1、导入对应的路由组件
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'
import NewsList from './components/news/NewsList.vue'
import Newsinfo from './components/news/Newsinfo.vue'
import PhotoList from './components/photos/PhotoList.vue'
import PhotoInfo from './components/photos/PhotoInfo.vue'
import GoodsList from './components/goods/GoodsList.vue'
import GoodsInfo from './components/goods/GoodsInfo.vue'
import GoodsDesc from './components/goods/GoodsDesc.vue'
import GoodsComm from './components/goods/GoodsComm.vue'

// 2、创建路由对象
var router = new VueRouter({
    // 配置路由规则
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: HomeContainer },
        { path: '/member', component: MemberContainer },
        { path: '/shopcar', component: ShopcarContainer },
        { path: '/search', component: SearchContainer },
        { path: '/home/newsList', component: NewsList },
        { path: '/home/newsinfo/:id', component: Newsinfo },
        { path: '/home/photolist', component: PhotoList },
        { path: '/home/photoinfo/:id', component: PhotoInfo },
        { path: '/home/goodslist', component: GoodsList },
        { path: '/home/goodsinfo/:id', component: GoodsInfo, name: 'goodsinfo' },
        { path: '/home/goodsdesc/:id', component: GoodsDesc, name: 'goodsdesc' },
        { path: '/home/goodscomm/:id', component: GoodsComm, name: 'goodscomm' },
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