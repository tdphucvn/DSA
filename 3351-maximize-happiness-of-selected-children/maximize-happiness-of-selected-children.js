/**
 * @param {number[]} happiness
 * @param {number} k
 * @return {number}
 */
function maximumHappinessSum(happiness, k) {
  const kLargest = happiness.sort((a, b) => b - a).slice(0, k);
  const sum = kLargest.reduce((prev, curr, index) => {
    const decrementedCurr = Math.max(curr - index, 0);

    return prev + decrementedCurr;
  }, 0);

  return sum;
}
