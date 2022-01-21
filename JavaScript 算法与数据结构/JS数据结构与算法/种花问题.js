/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  flowerbed.push(0);
  flowerbed.unshift(0);
  let max = 0;
  for (let i = 0, len = flowerbed.length - 1; i < len; i++) {
    if (flowerbed[i - 1] === 0 && flowerbed[i] === 0 && flowerbed[i + 1] === 0) {
      flowerbed[i] = 1
      max++
    }
  }
  return max >= n;
};