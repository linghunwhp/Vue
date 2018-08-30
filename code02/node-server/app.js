//导入http内置模块
const http = require('http')

//这个核心模块，能够帮我们解析URL地址，从而拿到pathname query
const urlModel = require('url')

//创建一个http服务器
const server = http.createServer()

//监听http服务器的request请求
server.on('request', function(req, res) {
    // const url = req.url

    const { pathname: url, query } = urlModel.parse(req.url, true)

    if (url === '/getscript') {
        // 拼接一个合法的JS脚本，这里拼接一个方法调用
        // var scriptStr = 'show()'

        var data = {
                name: '123',
                age: 18,
                gender: '女'
            }
            // 解析字符串，实现了动态执行传递过来的函数名
            // 服务器给客户端传递数据
        var scriptStr = `${query.callback}(${JSON.stringify(data)})`

        // res.end发送给客户端，客户端把字符串当作JS代码解析执行
        res.end(scriptStr)
    } else {
        res.end('404')
    }
})

//监听端口号并启动服务器监听
server.listen(3000, function() {
    console.log('server listen at http://127.0.0.1:3000')
})