const Koa = require("koa")
const Router = require("koa-router")
const bodyParser = require("koa-bodyparser")

// 创建一个Koa对象表示web app本身:
const app = new Koa()
const router = new Router()

// 对于任何请求，app将调用该异步函数处理请求：
app.use(async (ctx, next) => {
  bodyParser()
  await next()
  ctx.response.type = "text/html"
  ctx.response.body = "<h1>Hello, koa2!</h1>"
})

// 在端口3000监听:
const port = 3000
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
