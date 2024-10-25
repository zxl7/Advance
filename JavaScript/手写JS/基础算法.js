// 完全扁平化
const multiDimensionalArray = [1, [2, 3], [4, 5, [6, 7]], 8]

const flatArray = multiDimensionalArray.reduce((acc, val) => {
  const flatten = (array) => array.reduce((flat, item) => (Array.isArray(item) ? flat.concat(flatten(item)) : flat.concat([item])), [])
  return acc.concat(flatten([val]))
}, [])

console.log(flatArray) // 输出：[1, 2, 3, 4, 5, 6, 7, 8]
