{
	let list = new Set()
	list.add(5)
	list.add(7)

	// 长度 
	console.log('size', list.size)
}

{
	let arr = [1, 2, 3, 4, 5]
	let list = new Set(arr)

	console.log(list.size)
}


{
	let list = new Set()
	list.add(1)
	list.add(2)
	list.add(1)

	//去重
	console.log('list', list)

}

{
	let arr = [1, 2, 3, 4, 1, 2]
	let list2 = new Set(arr)
	cosnole.log('unique', list) //unique {1,2,3}
	//set 不会做数据类型的转换，过滤时注意数据类型要一致
}

{
	// 移除delete
	// 清空clear
	// has检查有没有
	let arr = ['add', 'delete', 'clear', 'has']
	let list = new Set(arr)

	cosnole.log('has', list.has('add'))
	cosnole.log('delete', list.delete('add'), list)
	list.clear()
	cosnole.log('list', list)
}

{
	let arr = ['add', 'delete', 'clear', 'has']
	let list = new Set(arr)

	// 循环keys
	for (let key of list.keys()) {
		console.log('keys', key)
	}

	for (let key of list.values()) {
		console.log('value', value)
	}

	//默认就是value
	for (let key of list) {
		console.log('value', value)
	}

	//entries
	for (let [key, value] of list.entries()) {
		console.log('entries', key, value)
	}

	//只返回值
	list.forEach(function (item) { console.log(item); })

}


{
	let weaklist = new WeakSet()
	// 区别：数据类型不一样，只能是对象，不能是其他
	// 弱引用，不会检测是否用过，不能和垃圾回收机制挂钩
	let arg = {}
	weaklist.add(arg)

	console.log('weakList', weakList);
	// 没有clear方法
	// 没有set属性
	// 没有size，不能遍历
}