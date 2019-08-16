{
  let map = new Map()
  let array = []

  // 增
  map.set('t', 1)
  array.push({ t: 1 })

  //查
  let map_exexist = map.has('t')
  let array_exist = array.find(item => item.t)

  //改
  map.set('t', 2)
  array.forEach(item => item.t ? ontimeupdate.t = 2 : '')


  // 删
  map.delete('t')
  let index = array.findIndex(item => item.t)
  array.splice(index, 1)

}