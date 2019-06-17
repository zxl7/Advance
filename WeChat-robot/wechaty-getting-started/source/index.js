const { Wechaty, Contact } = require('Wechaty'),
QRcode = require('qrcode-terminal')

const robot = new Wechaty()

function sleep(sec) {
return new Promise(resolve => setTimeout(resolve, sec * 1000))
}

robot
.on('scan', qrcode => console.log(QRcode.generate(qrcode, { small: true })))
.on('login', async user => {
console.log('登录成功' + user)
const room = await robot.Room.find({topic: '微信机器人测试'})

if (!room) {
return console.log('Not Found')
}
await room.sync()
const list = await room.memberAll()
for ( let guy of list ) {
await sleep(0.5)
guy.say(`Hello, ${guy.name()}`)
}
})
.on('logout', user => console.log('登出成功' + user))
.on('message', message => {
if (!message.self() && !message.room()) {
// message.say( message.from().name() + ': ' + message.text())
message.say( message.text().replace('吗？', ''))
}
})

.on('room-join',async (room,list, from ) => {
    room.say('欢迎 ${list.map(guy = > guy.name())} !
    按格式修改群名。
    如上新人被踢'
.start()

