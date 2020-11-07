const koa = require('koa')
const statics = require('koa-statics')

const app = new koa()

const router = require('./routes/routes')

app.use(router())
app.use(statics(path.join(__dirname, '../pubilc')))

app.listen(3000)
