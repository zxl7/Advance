创建
function Node(data, left, right) {
  this.data = data;//数值
  this.left = left;//左节点
  this.right = right;//右节点
};
插入二叉树
function insert(node, data) {
  //创建一个新的节点
  let newNode = new Node(data, null, null);
  //判断是否存在根节点，没有将新节点存入
  if (node == null) {
    node = newNode;
  } else {
    //获取根节点
    let current = node;
    let parent;
    while (true) {
      //将当前节点保存为父节点
      parent = current;
      //将小的数据放在左节点
      if (data < current.data) {
        //获取当前节点的左节点
        //判断当前节点下的左节点是否有数据
        current = current.left;
        if (current == null) {
          //如果没有数据将新节点存入当前节点下的左节点
          parent.left = newNode;
          break;
        }
      } else {
        current = current.right;
        if (current == null) {
          parent.right = newNode;
          break;
        }
      }
    }
  }
}
翻转二叉树
function invertTree(node) {
  if (node !== null) {
    node.left, node.right = node.left, node.right;
    invertTree(node.left);
    invertTree(node.right);
  }
  return node;
}
