// with

// no with
var obj = {
    name: 'zhangsan ',
    age: 20,
    getAddress: function() {
        alert('biejing')
    }
}

function fn() {
    alert(obj.age)
    alert(obj.name)
    alert(obj.getAddress())
}
fn()

// with
function fn1() {
    with(obj) {
        alert(age)
        alert(name)
        getAddress()
    }
}
fn1()