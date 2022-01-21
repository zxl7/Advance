// 同一个借口，不同表现
// 需要结合java等语言的接口、重写、重载的功能


// 保持了子类的开放性和灵活性
// 面向接口编程

class People {
  constructor(name) {

  }
  saySomething() {

  }
}

class A extends People {
  constructor(name) {
    super(name)
  }
  saySomething() {
    alert('I am a')
  }
}

class B extends People {
  constructor(name) {
    super(name)
  }
  saySomething() {
    alert("i am b")
  }
}

let a = new A('a')
a.saySomething()

let b = new B('b')
b.saySomething()
