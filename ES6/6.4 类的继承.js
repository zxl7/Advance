// 父类
class Person {
  constructor(name) {
    this.name

  }
}


// 继承
class Student extends Person {
  // 构造方法
  constructor(name, grade) {
    // 规定：必须调用父类构造方法，如果不调用就会报错
    super(name) // 调父构造，给子添加name属性
    this.grade = grade
  }

}