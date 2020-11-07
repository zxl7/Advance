const koa = require('koa')

const app = new koa()

const router = require('./routes/routes')

app.use(router())

app.listen(3000)
