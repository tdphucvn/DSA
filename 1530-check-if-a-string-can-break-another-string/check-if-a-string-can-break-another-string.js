/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
function checkIfCanBreak(s1, s2) {
  let res1 = true;
  let res2 = true;
  const sortedLettersS1 = s1.split("").sort();
  const sortedLettersS2 = s2.split("").sort();

  for (let i = 0; i < s1.length; i++) {
    if (sortedLettersS1[i] < sortedLettersS2[i]) {
      res1 = false;
    }
  }

  for (let i = 0; i < s1.length; i++) {
    if (sortedLettersS2[i] < sortedLettersS1[i]) {
      res2 = false;
    }
  }

  return res1 || res2;
}
