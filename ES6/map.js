{
  let map = new Map()
  let arr = ['123']

  map.set(arr, 456)
  console.log('map', map, map.get(arr)); //Map {['123]=>456} 456
}

{
  let map = new Map([['a', 213], ['b', 456]])
  console.log('map args', map); //Map {'a' => 123,'b' =>456}
  console.log('size', map.size); //2
  console.log('delete', map.delete('a'), map); //Map {'b' =>456}
  console.log('clear', map.clear(), map); //Map {}
  // 遍历相同

}



{
  let weakmap = new WeakMap()
  // 只能要对象
  // 一样不能遍历
  // 一样没有set
}