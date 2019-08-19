// 系统中被唯一使用
// 一个类只有一个实例

// 应用：登录框，购物车


class SingleObject {
  login() {
    console.log('login...')
  }
}

// 静态方法
SingleObject.getInstance = (function () {
  let instance
  return function () {
    if (!instance) {
      instance = new SingleObject();
    }
    return instance
  }
})()

// 测试 
let Obj1 = SingleObject.getInstance()
Obj1.login()

let Obj2 = SingleObject.getInstance()
Obj2.login()

console.log("obj1 === obj2:", obj1 === obj2);

// 不可避免的不能私有变量
// 只能用规范来约束