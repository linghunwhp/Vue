# 学习页面中渲染组件的两种方式

# 前端使用 Vue.js

# 基于 MIT 开源协议

## 五种开源协议不同之处 https://www.oschina.net/question/54100_9455

# 项目目录结构

## 1、dist 文件夹 -- 内部放编译好的 bundle.js 文件

## 2、node_modules 文件夹 -- 内部放使用 npm 下载的第三方包文件，上传时默认忽略，重建时使用 npm i 命令，根据 package.json 文件安装即可

## 3、src 文件夹 -- 内部放 css、less、scss、js、lib 等资源文件夹

- css 文件夹 -- 内部放样式文件
- js 文件夹 -- 内部放 JavaScript 文件
- lib 文件夹 -- 内部放手动下载的第三方包文件，如 MUI
- App.vue -- 项目的根组建
- main.js -- 整个项目的入口文件
- router.js -- 项目的路由文件

## 4、.babelrc 文件 -- 使用 webpack 处理 ES6、ES7 高级语法的配置文件，mint-ui 也需要使用这个文件

## 5、.gitignore 文件 -- 上传文件时，自动忽略的文件信息

## 6、LICENSE 文件 -- 开源协议文件

## 7、package-lock.json 文件 -- 使用 npm 下载第三方包文件时，自动生成的文件

## 8、package.json 文件 -- 记录 npm 下载的第三方包文件，以及编译打包方法等信息

## 9、README 文件 -- 写一些备注信息

## 10、webpack.config.js 文件 -- 一些配置文件，处理第三方包文件用
