/**
 * @param {number[]} nums
 * @return {number}
 */
function countCompleteSubarrays(nums) {
  const uniqueValues = new Set(nums);
  const uniqueCount = uniqueValues.size;
  let res = 0;

  for (let left = 0; left < nums.length; left++) {
    const currentSet = new Set();
    for (let right = left; right < nums.length; right++) {
      currentSet.add(nums[right]);

      // If the current subarray contains all unique values, increment the result
      if (currentSet.size === uniqueCount) {
        res += nums.length - right; // All subarrays starting from `left` and ending at or after `right` are valid
        break;
      }
    }
  }

  return res;
}

countCompleteSubarrays([5, 5, 5, 5]);
