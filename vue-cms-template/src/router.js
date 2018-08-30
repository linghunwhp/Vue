// 抽离router模块

import VueRouter from 'vue-router'

var router = new VueRouter({
    routes: [{
            path: '',
            component: '',
            children: [
                { path: '', component: '' },
                { path: '', component: '' }
            ]
        },
        { path: '', component: '' }
    ]
})

export default router