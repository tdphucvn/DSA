/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
function canConstruct(ransomNote, magazine) {
  const charMap = new Map();

  for (let ch of magazine) {
    if (charMap.has(ch)) {
      charMap.set(ch, charMap.get(ch) + 1);
    } else {
      charMap.set(ch, 1);
    }
  }

  for (let ch of ransomNote) {
    if (charMap.has(ch) && charMap.get(ch) > 0) {
      charMap.set(ch, charMap.get(ch) - 1);
    } else {
      return false;
    }
  }

  return true;
}

console.log(
  canConstruct("bg", "efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj")
);