# 这是一个购物网站项目

# 前端使用Vue.js

# 基于MIT开源协议

## 五种开源协议不同之处 https://www.oschina.net/question/54100_9455

# 项目目录结构

## 1、dist文件夹 -- 内部放编译好的bundle.js文件
## 2、node_modules文件夹 -- 内部放使用npm下载的第三方包文件，上传时默认忽略，重建时使用npm i 命令，根据package.json文件安装即可
## 3、src文件夹 -- 内部放css、less、scss、js、lib等资源文件夹
+ css文件夹 -- 内部放样式文件
+ js 文件夹 -- 内部放JavaScript文件
+ lib文件夹 -- 内部放手动下载的第三方包文件，如 MUI
+ App.vue -- 项目的根组建
+ main.js -- 整个项目的入口文件
+ router.js -- 项目的路由文件
## 4、.babelrc文件 -- 使用webpack处理ES6、ES7高级语法的配置文件，mint-ui也需要使用这个文件
## 5、.gitignore文件 -- 上传文件时，自动忽略的文件信息
## 6、LICENSE文件 -- 开源协议文件
## 7、package-lock.json文件 -- 使用npm下载第三方包文件时，自动生成的文件
## 8、package.json文件 -- 记录npm下载的第三方包文件，以及编译打包方法等信息
## 9、README文件 -- 写一些备注信息
## 10、webpack.config.js文件 -- 一些配置文件，处理第三方包文件用

# 项目流程
## 1、制作首页App组件
（1）完成Header区域，使用的是Mint-UI中的Header组件
（2）制作底部的Tabbar区域，使用的是MUI的Tabbar.html
制作购物车图标有以下几个步骤：
+把扩展图标的css样式拷贝到项目中
+把扩展图标的ttf文件拷贝到项目中
+为购物车图标添加以下样式：<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
（3）在中间放置一个router-view展示路由匹配到的组件

## 2、改造tabbar 为router-link
（1）在main.js导入VueRouter路由包，import VueRouter from 'vue-router'
（2）安装路由模块，Vue.use(VueRouter)
（3）导入自己的router.js路由模块，import router from './router.js'
（4）修改App.vue文件中的<a>标签为<router-link to="/地址">

## 3、设置路由高亮
（1）检查元素，查看默认高亮元素的标签是什么
（2）覆盖默认路由高亮的类，默认的类是router-link-active，在Router.js中加入 linkActiveClass: 'mui-active'

## 4、点击tabbar中的路由链接，展示对应的路由组件
（1）在src下创建components文件夹，在其中嵌套tabbar文件夹，tabbar文件夹下创建自定义的组件，如HomeContainer等
（2）匹配路由规则，在router.js中引入需要匹配的组件，并写好规则，规则中的地址是在其他组件中自己定义的，如'/home'

import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'
var router = new VueRouter({
    routes: [{
            path: '/home',
            component: HomeContainer
        },
        { path: '/member', component: MemberContainer },
        { path: '/shopcar', component: ShopcarContainer },
        { path: '/search', component: SearchContainer }
    ]
}

（4）放入展示区域
<router-view></router-view>

## 4、制作首页轮播图
（1）在mint-ui中查找可以使用的轮播图组件，在main.js中按需导入该组件，并use
（2）在HomeContainer.vue组件中，插入代码段
        <mt-swipe :auto="4000">
            <mt-swipe-item></mt-swipe-item>
            <mt-swipe-item></mt-swipe-item>
            <mt-swipe-item></mt-swipe-item>
        </mt-swipe>
（3）编译后无法正常展示，一般是因为style有问题，通过检查元素查看原因，编写css
.mint-swipe{
    height: 200px;
    .mint-swipe-item{
        &:nth-child(1){
            background-color: red;
        }
        &:nth-child(2){
            background-color: blue;
        }
        &:nth-child(3){
            background-color: cyan;
        }
    }
}

## 5、加载首页轮播图数据
（1）为获取数据，安装，导入vue-resouce
npm i vue-resource -S
import VueResource from 'vue-resource'
Vue.use(VurResouce)
（2）使用Vue-resource的this.$http.get获取数据

（3）获取到的数据，保存到组件的data上去
（4）使用v-for循环渲染每个item项

## 6、九宫格-六宫格布局




# 修改后提交代码到git上
* git add .
* git commit -m "提示信息"
* git push


