// 抽离router模块

import VueRouter from 'vue-router'
import account from './main/Account.vue'
import goodlist from './main/GoodList.vue'
import login from './subcom/login.vue';
import register from './subcom/register.vue'

// 3、创建路由对象
var router = new VueRouter({
    routes: [{
            path: '/account',
            component: account,
            children: [
                { path: 'login', component: login },
                { path: 'register', component: register }
            ]
        },
        { path: '/goodlist', component: goodlist }
    ]
})

export default router