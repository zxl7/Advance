// 非递归算法
function binary_search(arr, key) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = parseInt((high + low) / 2);
    if (key === arr[mid]) {
      return mid;
    } else if (key > arr[mid]) {
      low = mid + 1;
    } else if (key < arr[mid]) {
      high = mid - 1;
    } else {
      return -1;
    }
  }
}


// 递归算法
function binary_search(arr, low, high, key) {
  if (low > high) {
    return -1;
  }
  let mid = parseInt((high + low) / 2);
  if (arr[mid] === key) {
    return mid;
  } else if (arr[mid] > key) {
    high = mid - 1;
    return binary_search(arr, low, high, key);
  } else if (arr[mid] < key) {
    low = mid + 1;
    return binary_search(arr, low, high, key);
  }
};
