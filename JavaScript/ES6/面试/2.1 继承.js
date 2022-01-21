// 动物
function Animal() {
  this.eat = function () {
    console.log('animal eat')
  }
}

// 狗
function Dog() {
  this.bark = function () {
    console.log('dog bark');
  }
}

// 原型绑定，实现继承
Dog.prototype = new Animal()

var hashiqi = new Dog()
hashiqi.bark()
hashiqi.eat()


// class实现继承

class Animal {
  constructor(name) {
    this.name = name
  }
  eat() {
    alert(this.name + 'eat')
  }

}

class Dog extends Animal {
  constructor(name) {
    super(name) // super参数于constructor
    this.name = name
  }
  say() {
    alert(this.name + 'say')
  }
}

const dog = new Dog('哈士奇')
dog.say()
dog.eat()



// 区别：
// class更易读和理解
// class语法贴合面向对象的写法
// 本质语法糖，使用prototype