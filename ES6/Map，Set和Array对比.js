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


{
  let set = new Set()

  // 增
  set.add({ t: 1 })

  // 查
  let set_exist = set.has({ t: 1 })
  // 改
  set.forEach(item => item.t ? item.t = 2 : '')

  // 删
  set.forEach(item => item.t ? set.delete(item) : '')
}

// objedct
{
  let obj = {}
  obj['t'] = 1

  obj_exist: 't' in obj

  obj['t'] = 2

  delete obj['t']
}