const obj = {
  store: ['12', '112', '1212'],
  [Symbol.iterator]: function () {
    let index = 0
    const self = this
    //   迭代器
    return {
      next: function () {
        //   迭代结果
        const result = {
          value: self.store[index],
          done: index >= self.store.length,
        }
        index++
        return result
      },
    }
  },
}

for (const i of obj) {
  console.log('循环', i)
}
