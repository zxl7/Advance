var Node = function (data) {
  this.data = data
  this.next = null
}

var node1 = new Node(1)
var node2 = new Node(2)
var node3 = new Node(3)

node1.next = node2
node2.next = node3


console.log(node1.data);
console.log(node1.next.data);
console.log(node1.next.next.data);


// 定义一个链表类
function LinkList() {
  var Node = (data) => {
    this.data = data
    this.next = null
  }

  var length = 0
  var head = null //头结点
  var tail = null //尾结点

  // 链表方法
  // 尾部添加节点
  this.append = () => {
    var new_node = new Node(data)
    if (head == null) {
      head = new_node
      tail = new_node
    } else {
      tail.next = new_node
      tail = new_node
    }
    length += 1
    return true
  }
  this.print = () => {
    var curr_node = head
    while (curr_node) {
      console.log(curr_node.data);
      curr_node = curr_node.next
    }
  }

  this.instert = (index, data) => {
    if (index < 0 || index > length) {
      return false
    } else if (index == length) {
      return this.append(data)
    } else {
      var new_node = new Node(data)
      // new_node 为新的头节点
      if (index == 0) {
        new_node.next = head
        head = new_node
      } else {
        var insert_index = 1
        var curr_node = head
        whild(insert_index < index) {
          insert_index += 1
          curr_node = curr_node.next
        }
        // index= 1,curr_node指向head，是第一个节点
        var next_node = curr_node.next // next_node是第二个节点
        // 第一个节点指向新的节点
        curr_node.next = new_node
        new_node.next = next_node

      }
    }
  }
  this.remove = () => {

  }

}


