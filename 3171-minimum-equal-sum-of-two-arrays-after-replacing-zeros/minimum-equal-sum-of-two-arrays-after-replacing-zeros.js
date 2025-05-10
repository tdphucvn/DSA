/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function minSum(nums1, nums2) {
  // swap the 0s in both arrays and check the sum
  const nums1Contains0 = nums1.some((num) => num === 0);
  const nums2Contains0 = nums2.some((num) => num === 0);

  const modifiedNums1 = nums1.map((num) => {
    return num != 0 ? num : 1;
  });

  const modifiedNums2 = nums2.map((num) => {
    return num != 0 ? num : 1;
  });

  const sumModified1 = modifiedNums1.reduce((prev, curr) => prev + curr, 0);
  const sumModified2 = modifiedNums2.reduce((prev, curr) => prev + curr, 0);

  if (
    (sumModified1 > sumModified2 && !nums2Contains0) ||
    (sumModified1 < sumModified2 && !nums1Contains0)
  ) {
    return -1;
  }

  return Math.max(sumModified1, sumModified2);
}

// console.log(minSum([3, 2, 0, 1, 0], [6, 5, 0]));
// console.log(minSum([2, 0, 2, 0], [1, 4]));

// console.log(minSum([0, 7, 28, 17, 18], [1, 2, 6, 26, 1, 0, 27, 3, 0, 30]));

// console.log(
//   minSum(
//     [8, 13, 15, 18, 0, 18, 0, 0, 5, 20, 12, 27, 3, 14, 22, 0],
//     [29, 1, 6, 0, 10, 24, 27, 17, 14, 13, 2, 19, 2, 11]
//   )
// );

// console.log(minSum([15, 10, 7, 16], [8, 16, 2, 6, 4, 12, 6, 16, 24, 0]));

// console.log(minSum([0], [0]));
