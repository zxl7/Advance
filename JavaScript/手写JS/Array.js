// Array.prototype.map()
// callback 函数会被自动传入三个参数：数组元素，元素索引，原数组本身。
// thisArg可选,执行 callback 函数时值被用作this。
// map 不修改调用它的原数组本身（当然可以在 callback 执行时改变原数组）
// map 方法处理数组元素的范围是在 callback 方法第一次调用之前就已经确定了。调用map方法之后追加的数组元素不会被callback访问。
// 如果存在的数组元素改变了，那么传给 callback 的值是 map 访问该元素时的值。
// 在 map 函数调用后但在访问该元素前，该元素被删除的话，则无法被访问到。
Array.prototype.myMap = function (fn, context) {
  if (typeof fn !== 'function') {
    return
  }
  const array = this
  const temp = []
  for (let i = 0; i < array.length; i++) {
    const result = fn.call(context, array[i], i, array)
    temp.push(result)
  }
  return temp
}

// Array.prototype.filter()
// filter() 被调用时不会改变数组。
// filter() 方法创建一个新数组，其包含通过所提供函数实现的测试的所有元素。
// 返回值: 一个新的、由通过测试的元素组成的数组，如果没有任何数组元素通过测试，则返回空数组。
Array.prototype.myFilter = function (fn, context) {
  if (typeof fn !== 'function') {
    return
  }
  const array = this
  const temp = []
  for (let i = 0; i < array.length; i++) {
    const isTure = fn.call(context, array[i], i, array)
    if (isTure) {
      temp.push(result)
    }
  }
  return temp
}

// Array.prototype.some()
// some() 方法测试数组中是不是至少有 1 个元素通过了被提供的函数测试。
// 用一个空数组进行测试，在任何情况下它返回的都是false
// 返回值: 数组中有至少一个元素通过回调函数的测试就会返回true；所有元素都没有通过回调函数的测试返回值才会为 false。
// some() 被调用时不会改变数组。
Array.prototype.mySome = function (fn, context) {
  if (typeof fn !== 'function') {
    return
  }
  const array = this
  let isTure = false
  for (let i = 0; i < array.length; i++) {
    isTure = fn.call(context, array[i], i, array)
    if (isTure) {
      break
    }
  }
  return isTure
}

// Array.prototype.every()
// every() 方法测试一个数组内的所有元素是否都能通过某个指定函数的测试。它返回一个布尔值。
// 返回值: 如果回调函数的每一次返回都为 truthy 值，返回 true，否则返回 false。
// every 不会改变原数组。
Array.prototype.mySome = function (fn, context) {
  if (typeof fn !== 'function') {
    return
  }
  const array = this
  let isTure = true
  for (let i = 0; i < array.length; i++) {
    isTure = fn.call(context, array[i], i, array)
    if (isTure === false) {
      break
    }
  }
  return isTure
}

// Array.prototype.find()
// find() 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined。
// find 方法不会改变数组。
Array.prototype.myFind = function (fn, context) {
  if (typeof fn !== 'function') {
    return
  }
  const array = this
  let temp
  for (let i = 0; i < array.length; i++) {
    const isTure = fn.call(context, array[i], i, array)
    if (isTure) {
      temp = array[i]
      break
    }
  }
  return temp
}

// Array.prototype.findIndex()
// findIndex()方法返回数组中满足提供的测试函数的第一个元素的索引。若没有找到对应元素则返回-1
Array.prototype.myFindIndex = function (fn, context) {
  if (typeof fn !== 'function') {
    return
  }
  const array = this
  let temp
  for (let i = 0; i < array.length; i++) {
    const isTure = fn.call(context, array[i], i, array)
    if (isTure) {
      temp = i
      break
    }
  }
  return temp
}

// Array.prototype.concat()
// concat() 方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。
Array.prototype.myConcat = function () {
  let arr = [...this]
  arguments = [...arguments]
  arguments.forEach((item) => {
    Array.isArray(item) ? item.forEach((x) => arr.push(x)) : arr.push(item)
  })
  return arr
}
