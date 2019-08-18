class Product {
  constructor(name) {
    this.name = name
  }
  init() {
    alert('init')
  }
  fun1() {
    alert('fun1')
  }
  fun2() {
    alert('fun2')
  }
}

// 封装构造函数
class Creator {
  create(name) {
    return new Product(name)
  }
}

let creator = new Creator()
let p = creator.create('小白')

p.init()
p.fun1()
