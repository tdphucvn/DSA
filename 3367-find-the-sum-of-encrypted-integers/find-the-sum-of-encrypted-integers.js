/**
 * @param {number[]} nums
 * @return {number}
 */
function sumOfEncryptedInt(nums) {
  return nums.reduce((prev, num) => {
    return prev + encrypt(num);
  }, 0);
}

function encrypt(num) {
  const digits = num
    .toString()
    .split("")
    .map((x) => parseInt(x));

  const maxDigit = Math.max(...digits);
  return parseInt(new Array(digits.length).fill(maxDigit).join(""));
}

