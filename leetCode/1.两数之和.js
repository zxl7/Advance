/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  var ret = []
  var exist = {}
  for (var i = 0; i < nums.length; i++) {
    if (typeof exist[target - nums[i]] !== 'undefined') {
      ret.push(exist[target - nums[i]])
      ret.push(i + 1)
    }

    exist[nums[i]] = i + 1
  }

  return ret
}
