var car = {
  brand: 'bmw', price: '777777', length: '3.8米'
}

// 克隆一个跟car完全一样的对象出来
var car2 = { ...car }
console.log(car2);  //.......


var car3 = { ...car, length: "4mi" }


const arr1 = [1, 2, 3, 454, 5]
const arr2 = [...arr1]