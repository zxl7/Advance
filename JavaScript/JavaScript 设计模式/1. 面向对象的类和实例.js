class Person {
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


let zhang = new Person('zhang', 20)
zhang.eat()
zhang.speak()


let wang = new Person('wang', 77)
wang.eat()
wang.speak()