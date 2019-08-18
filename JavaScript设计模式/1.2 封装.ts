// 封装的三个关键字：publice完全开放，protected对子类开放，private只对自己开放
// 减少耦合，不外露的不外露
// 利于数据，借口的权限管理
// es6目前不支持，一般认为_开头的属性是private

// 父类
class People {
  name
  age
  protected weight // 受保护的属性，只有自己或者子类可以访问
  constructor(name, age) {
    this.name = name
    this.age = age
    this.weight = 120
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
  number
  private girlfriend
  constructor(name, age, number) {
    super(name, age)
    this.number = number
    this.girlfriend = 'xiaoli'
  }

  study() {
    alert(`${this.name} study`)
  }
  getWeight() {
    alert(`weight ${this.weight}`)
  }
}

// 测试
let xiaoming = new Student('xiaoming', 11, 'a1')
xiaoming.getWeight()

// alert.(xiaoming.weight)
// alert (xiaoming.girlfirend)
