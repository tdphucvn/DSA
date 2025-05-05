/**
 * @param {number[]} nums
 * @return {number}
 */
function minOperations(nums) {
  const numberCounts = new Map();

  for (const num of nums) {
    if (numberCounts.has(num)) {
      numberCounts.set(num, numberCounts.get(num) + 1);
    } else {
      numberCounts.set(num, 1);
    }
  }

  let res = 0;
  let impossible = false;

  numberCounts.forEach((count, num) => {
    if (count < 2) {
      impossible = -1;
    }
    const numOfOps = getRequiredOperations(count);
    res += numOfOps;
  });

  return impossible ? -1 : res;
}

function getRequiredOperations(count) {
  if (count % 3 === 0) {
    return count / 3;
  } else {
    const isEven = count % 2 === 0;

    if (isEven) {
      const y = Math.max(
        Math.floor(count / 3) % 2 === 0
          ? Math.floor(count / 3)
          : Math.floor(count / 3) - 1,
        0
      );

      const x = (count - y * 3) / 2;

      return x + y;
    } else {
      const y = Math.max(
        Math.floor(count / 3) % 2 !== 0
          ? Math.floor(count / 3)
          : Math.floor(count / 3) - 1,
        0
      );

      const x = (count - y * 3) / 2;

      return x + y;
    }
  }
}