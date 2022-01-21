const koa = require('koa')
const path = require('path')
const statics = require('koa-static')

const app = new koa()

const router = require('./routes/routes')

app.use(router())
app.use(statics(path.join(__dirname, '../pubilc')))

app.listen(3000)
