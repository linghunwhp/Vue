// 项目JS的入口文件

console.log("ok")

import './css/index.css'
import './css/index.scss'

// 如果想要通过路径，引入mode_modules中的相关文件，可以直接省略node_modules这一层目录，直接写包的名称，后面跟上具体目录
import 'bootstrap3/dist/css/bootstrap.css'

// class关键字，ES6提供的新语法，用来实现面向对象编程方式
// 和Java/c#的实现方式一样
// 静态属性：可以直接通过类名访问的属性
// 实例属性：只能通过类的实例，访问的属性
class Person {
    static info = { name: 'zs', age: 20 }
}
var p1 = new Person()

console.log(Person.info)

// 有一些高级的ES6或者ES7语法，webpack处理不了，需要loader处理一下，如Babel，可以转换
// 1、安装两套包:
// 第一套：npm i babel-core babel-loader babel-plugin-transform-runtime -D
// 第二套：npm i babel-preset-env babel-preset-stage-0 -D

// 2、打开webpack配置文件，在module节点下的rules数组中，添加新的匹配规则：
// {test:/\.js$/, use:'babel-loader', exclude:/node_modules/}
// 配置babel的loader规则时，必须把node_modules目录中的文件排除掉，因为其本身就是转换好的，不需要再费资源，其次转换完了JS也不能正常运行

// 3、在项目的根目录中，新建.babelrc的配置文件，属于Json格式，写的时候不能加注释，符合Json规范
// 具体内容如下：
// presets是babel语法，
// {
//     "presets": ["env", "stage-0"],
//     "plugins": ["transform-runtime"]
// }