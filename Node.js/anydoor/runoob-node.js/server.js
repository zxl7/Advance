var https = require('http');

https.createServer(function (request, response) {
  // 发送头部请求
  // http状态值：200：OK
  // 内容类型：text/plain
  response.writeHead(200, { 'Content-Type': 'text/plain' })

  // 发送响应数据
  response.end()

})