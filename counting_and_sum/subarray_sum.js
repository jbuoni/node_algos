/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const subarraySum = function(nums, k) {

  let totalHits = 0;
  let currentSum = 0;
  let prevSums = {};

  for(let i = 0; i < nums.length; i++) {
    currentSum += nums[i];

    if(currentSum === k) {
      totalHits += 1;
    }

    if(prevSums[currentSum - k] !== undefined) {
      totalHits += prevSums[currentSum - k];
    }

    if(prevSums[currentSum]) {
      prevSums[currentSum] &&  prevSums[currentSum] + 1 || 1;
    } else {
      prevSums[currentSum] = 1;
    }
  }

  return totalHits
};
