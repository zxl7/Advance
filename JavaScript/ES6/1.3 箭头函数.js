var p = {
  age = 18,
  run: () => {
    setTimeout(() => {
      // this:window
      console.log(this)//this指向window
    }, 100)
  },
  travel: function () {
    // this:p
    setTimeout(() => {
      console.log(this)//this:p
    }, 100)
  },
  say() {
    // this:p
    console.log('say方法的this：', this)  //this:p
    setTimeout(() => {
      console.log(this)//this:p
    }, 100)
  }
}



// 箭头函数，没有独立作用域，this指向由上层函数this指向决定
// 不能做构造函数，不可以new
// 不可用arguments,用rest代替


// ajax和map也指向window