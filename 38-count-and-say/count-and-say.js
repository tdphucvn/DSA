/**
 * @param {number} n
 * @return {string}
 */
function countAndSay(n) {
  if (n === 1) {
    return "1";
  }

  return assembleResult(countOccurances(countAndSay(n - 1)));
}

function countOccurances(str) {
  let res = [];
  let currentNumber = "";
  let count = 0;
  for (let i = 0; i < str.length; ) {
    if (currentNumber === "") {
      currentNumber = str[i];
      count++;
      i++;
      continue;
    }

    if (currentNumber !== str[i]) {
      res.push([count, currentNumber]);
      currentNumber = "";
      count = 0;
      continue;
    }

    count++;
    i++;
  }

  if (currentNumber !== "") {
    res.push([count, currentNumber]);
  }
  return res;
}

function assembleResult(arr) {
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    result += arr[i][0] + arr[i][1];
  }
  return result;
}