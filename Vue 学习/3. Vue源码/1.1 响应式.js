// 什么是响应式？
// 修改data属性后，vue立刻监听到！
// data属性，被代理到vm上



// Object.defineProperty(对象，属性名，对象)
// 双向绑定，响应式原理
var obj = {}
var _name = 'zhangsan'
Object.defineProperty(obj, "name", {
    get: () => {
        console.log('set', _name)
        return _name
    },
    set: (newVal) => {
        console.log('get', newVal)
        _name = newVal
    }
})

var vm = {}
var data = {
    name: 'zhangsan',
    age: 14
}

var key, value
for (key in data) {
    (function(key) {
        Object.defineProperty(vm, key, {
            get: function() {
                console.log('get', data[key]) // 监听
                return data[key]
            },
            get: function(newVal) {
                console.log('set', newVal) // 监听
                data[key] = newVal
            }
        })
    })(key)
}