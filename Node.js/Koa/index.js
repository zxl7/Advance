const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()

router.get('/', (ctx) => {
  console.log(ctx)
  ctx.body = '跟路径'
})
router.get('/api', (ctx) => {
  console.log(ctx)
  ctx.body = '123123'
})

app.use(router.routes()).use(router.allowedMethods())

app.listen(8080)
