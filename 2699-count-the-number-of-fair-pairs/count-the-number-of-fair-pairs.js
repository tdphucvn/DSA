/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */

function countFairPairs(nums, lower, upper) {
  nums.sort((a, b) => a - b);
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    // Find the smallest index where nums[i] + nums[left] >= lower
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (nums[i] + nums[mid] >= lower) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    const start = left;

    left = i + 1;
    right = nums.length - 1;

    // Find the largest index where nums[i] + nums[right] <= upper
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (nums[i] + nums[mid] <= upper) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    const end = right;

    if (start <= end) {
      count += end - start + 1;
    }
  }

  return count;
}
