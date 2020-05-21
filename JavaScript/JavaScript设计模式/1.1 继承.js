// 父类：公用的，公共方法抽离，提高复用，减少冗余
class People {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  eat() {
    alert(`${this.name} eat something`)
  }
  speak() {
    alert(`my name is ${this.name},age ${this.age}`)
  }
}


// 子类继承父类
class Student extends People {
  constructor(name, age, number) {
    super(name, age)
    this.number = number
  }

  study() {
    alert(`${this.name} study`)
  }
}

// 测试
let xm = new Student('xm', 10, 'math')
xm.study()
alert(xm.number)
xm.eat()

let xh = new Student('xh', 18, 'musie')
xh.study()
alert(xh.number)
xh.eat()

