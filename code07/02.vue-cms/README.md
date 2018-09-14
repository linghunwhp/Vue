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

+ 把扩展图标的css样式拷贝到项目中
+ 把扩展图标的ttf文件拷贝到项目中
+ 为购物车图标添加以下样式：```<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>```

（3）在中间放置一个router-view展示路由匹配到的组件

## 2、改造tabbar 为router-link
（1）在main.js导入VueRouter路由包，```import VueRouter from 'vue-router'```

（2）安装路由模块，Vue.use(VueRouter)

（3）导入自己的router.js路由模块，```import router from './router.js'```

（4）修改App.vue文件中的```<a>```标签为```<router-link to="/地址">```

## 3、设置路由高亮
（1）检查元素，查看默认高亮元素的标签是什么

（2）覆盖默认路由高亮的类，默认的类是```router-link-active```，在Router.js中加入 ```linkActiveClass: 'mui-active'```

## 4、点击tabbar中的路由链接，展示对应的路由组件
（1）在src下创建components文件夹，在其中嵌套tabbar文件夹，tabbar文件夹下创建自定义的组件，如HomeContainer等

（2）匹配路由规则，在router.js中引入需要匹配的组件，并写好规则，规则中的地址是在其他组件中自己定义的，如'/home'
```
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
```

（4）放入展示区域
```
<router-view></router-view>
```

## 4、制作首页轮播图
（1）在mint-ui中查找可以使用的轮播图组件，在main.js中按需导入该组件，并use

（2）在HomeContainer.vue组件中，插入代码段
```
<mt-swipe :auto="4000">
    <mt-swipe-item></mt-swipe-item>
    <mt-swipe-item></mt-swipe-item>
    <mt-swipe-item></mt-swipe-item>
</mt-swipe>
```
（3）编译后无法正常展示，一般是因为style有问题，通过检查元素查看原因，编写css
```
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
```

## 5、加载首页轮播图数据
（1）为获取数据，安装，导入vue-resouce
```
npm i vue-resource -S
import VueResource from 'vue-resource'
Vue.use(VurResouce)
```
（2）使用Vue-resource的this.$http.get获取数据

（3）获取到的数据，保存到组件的data上去

（4）使用v-for循环渲染每个item项

## 6、九宫格-六宫格布局
（1）查找九宫格布局代码，在MUI中的grid-default中

（2）转换成六宫格后，修改文字，布局，图标等内容

## 7、改造新闻资讯链接
（1）创建新闻页面

（2）修改router-link和to的信息

（3）设置匹配规则

## 8、新闻资讯页面制作
（1）绘制界面，使用MUI中的media-list代码

（2）使用vue-resource获取数据

（3）渲染真实数据

## 9、实现新闻列表点击跳转到新闻详情
（1）列表中的每一项改造成router-link, 跳转的同时提供唯一ID标识符

（2）创建新闻详情组件页面 NewsInfo.vue

（3）在路由模块中，将新闻详情的路由地址和组件页面对应起来

## 10、实现新闻详情页面的布局渲染
（1）从服务器通过get请求获取数据，并保存到本地的data上

（2）通过插值表达式渲染到页面上

## 11、单独封装一个comment.vue评论子组件
（1）先创建一个单独的comment.vue组件模板

（2）在需要使用comment组件的页面中，手动导入comment组件
```
   + 'import comment from './comment.vue'
```

（3）父组件中，使用'components'属性，将刚才导入的comment组件，注册为自己的子组件

（4）将注册子组件时候的注册名称，以标签形式在页面中引用即可

## 12、获取所有的评论数据加载到页面中
（1）从服务器获得评论数据，并绑定到本地data中

（2）对应评论页面id，父组件向子组件传值，包含父组件id，以获取对应的评论值

（3）绘制页面，分为title，userinfo，body等信息

（4）渲染数据到页面中

## 13、评论页面的加载更多功能
（1）为加载更多按钮，设置一个点击事件，事件中请求下一页数据

（2）点击加载更多事件，让pageIdex++, this.getCommments()方法重新获取最新一页的数据

（3）为防止新数据加载覆盖老数据的情况，在点击加载更多的时候，使用老数组.concat(新数据)的方式，组合到一起

## 14、发表评论功能
（1）文本框双向数据绑定

（2）为发表按钮绑定一个事件

（3）校验评论内容，如果非法，这Toast提示用户，评论内容不合法

（4）通过vue-resource 发送一个请求，提交评论内容给服务器

（5）发表评论完成后，不通过重新刷新列表，以查看评论
+ 如果调用getComments方法，刷新评论列表的话，可能只能得到最后一页的评论，前几页的评论获取不到

+ 换思路：当评论成功后，再客户端手动拼接出了一个最新的评论对象，然后调用数组的unshift方法，把最新的评论追加到commentsList的开头

## 15、改造图片分享按钮牛为路由链接并显示对应的组件页面

## 16、绘制图片列表组件页面并美化样式
### （1）制作顶部滚动条
+ 1、需借助于MUI中的```tab-top-webview-main.html```

+ 2、需要把silder区域的mui-fullscreen类去掉，保证页面正常

+ 3、滑动条无法正常触发滑动，通过检查官方文档发现，需要初始化JS（导入mui.js + 调用官方提供的初始化方式）
```
mui('.mui-scroll-wrapper').scroll({
    deceleration: 0.0005 //flick减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值是0.0006
})
```
+ 4、初始化滑动条的时候，导入mui.min.js，控制台报错，可能是mui.js中用到了一些函数，webpack打包bundle.js中，默认使用严格模式，两者冲突

解决方案：

+ + 4.1、改掉mui.js中非严格模式的代码改掉，不现实 

+ + 4.2、禁用webpack打包时候的严格模式
+ + + 1）安装npm i babel-plugin-transform-remove-strict-mode -D
+ + + 2）在.babelrc中加入如下代码：{ "plugins": ["transform-remove-strict-mode"] }
+ + + 3）滑动的时候会报警告，可以在photolist中加入*{touch-action: pan-y}，去除警告

+ 5、刚进入图片分享页面的时候，滑动条无法正常工作，经分析，发现如果要初始化滑动条，必须等DOM元素加载完毕才行，需要把初始化滚动条代码放入mounted中

+ 6、滑动条调试结束后，发现tabbar按钮无法工作，把每个tabbar按钮的样式中的 mui-tab-item重命名，是名字冲突的原因

### （2）制作底部图片列表
1、图片列表懒加载技术，使用Mint-UI提供的组件'lazy-load'

2、根据使用文档使用该组件

3、获取数据

### （3）实现图片列表懒加载改造和样式美化

1、调用mint-ui中的Lazyload组件，发现没有图标，改用全局加载可以

2、引入style.css文件
```'mint-ui/lib/style.css'```

3、在template文件中调用该组件的模板代码

4、编写style中的样式和布局的代码

### （4）点击图片跳转到图片详情页面
1、改造li成router-link的时候，需要使用tag属性强制将其渲染为li元素

2、渲染页面

### （5）实现图片详情中的缩略图功能
1、vue-preview基于photoswipe, 先安装photoswipe
```npm install photoswipe```

2、安装导入vue-preview缩略图插件

3、获取所有的图片列表，使用v-for进行循环

4、img标签中的class不能去掉

5、每个图片的数据对象中绑定 W 和 H 属性

### （6）绘制商品购买页面并美化（手动画页面C3）
1、编写页面，手写CSS

2、获取、渲染商品信息


### （7）在手机上进行项目预览和测试
1、手机正常运行

2、手机和开发电脑处于同一个WIFI环境中

3、打开项目中的package.json文件，在dev脚本中加入 --host指令，把当前电脑的WIFI地址，设置为 --host指令值

4、

### (8)商品详细信息页面
1、路由导航，改用编程式路由

2、绘制页面：轮播图+参数列表+详情页面

3、获取、渲染信息

### (9)制作购物车页面
1、需要公共的存储区域store中的car，学习使用方法

2、完成购物车逻辑，加载商品总额等

### (10)把项目部署在apache上
1、运行webpack进行打包

2、开启apache中的gzip压缩
+ 打开apache的配置文件http.conf
+ 105行左右，找到如下两行内容启用：（不连续）
    ```
    #LoadModule deflate_module modules/mod_deflate.so
    #LoadModule headers_module modules/mod_headers.so
    ```
+ 开启后，再末尾添加如下配置内容：
```
<IfModule deflate_module>
     # 像一个开关一样，告诉apache对传输到浏览器的内容进行压缩,1-9级压缩，越大约厉害
     SetOutputFilter DEFLATE
     DeflaeCompressionLevel 9
</IfModule>
```

### 使用ngrok将本机映射为一个外网的Web服务器
+ 速度较慢，可以开启FQ软件

# 修改后提交代码到git上
* git add .
* git commit -m "提示信息"
* git push


