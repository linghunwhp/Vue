// Node.js中向外暴露成员的形式：
// module.export={}

// 在ES6中，通过规范的形式，规定了ES6中如何导入和导出模块
// ES6中导入模块，使用import 模块名称 from '模块标识符' import '标识路径'
// 在ES6中，使用export default和export向外暴露成员
export default {
    name: 'zs',
    age: 20
}
// 注意：使用export default可以使用任意变量名接收；每个模块中，只允许使用一次。

export var title = 'zs'
export var content = 'hhh'
    // 注意：使用export向外暴露的成员，只能使用{}接收，叫做按需导出，不需要时可以不使用，
    // export可以同时向外暴露多个成员，且必须使用定义时候的名称
    // 如果想使用自定义名称，则需要title as title123起别名




// 在Node中，使用var 名称 = require('模块标识符')
// module.exports 和 exports来暴露成员