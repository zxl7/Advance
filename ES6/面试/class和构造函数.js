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
// typeof MathHandle    //'functuon'
// MathHandle === MathHandle.prototype.constructir  //true

const m = new MathHandle(1, 2)
console.log(m.add());

// m.__proyo__ === MathHandle.prototype