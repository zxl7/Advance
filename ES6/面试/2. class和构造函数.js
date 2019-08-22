// 构造函数
function MathHandle(x, y) {
  this.x = x
  this.y = y
}
MathHandle.prptotype.add = () => {
  this.x + this.y
}

var m = new MathHandle(1, 2)
console.log(m.add());


// class语法，简洁易用
class MathHandle {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  add() {
    return this.x + this.y

  }
}

// typeof MathHandle    //'functuon'   证明class 是语法糖
// MathHandle === MathHandle.prototype.constructir  //true  class的原型
// m.__proyo__ === MathHandle.prototype   //true


const m = new MathHandle(1, 2)
console.log(m.add());
