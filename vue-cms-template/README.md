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