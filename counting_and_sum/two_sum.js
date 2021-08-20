/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {

  let numsAndPosition = {};

  for(let i = 0; i < nums.length; i++) {
    if(numsAndPosition[target - nums[i]] !== undefined) {
      return[i, numsAndPosition[target - nums[i]]];
    } else {
      numsAndPosition[nums[i]] = i;
    }
  }
  return [0, nums.length];
};
