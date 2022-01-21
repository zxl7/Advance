// 浅拷贝
var source = { age: 18, height: 170 }


// 克隆一个新对象出来
var newObject = Object.assign({}, source)
console.log(newObj)

var newObj2 = {}
Object.assign(newObj2, source)