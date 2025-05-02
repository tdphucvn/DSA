/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
function canConstruct(ransomNote, magazine) {
  let res = true;
  const ransomNoteMap = new Map();
  const magazineMap = new Map();

  for (let ch of ransomNote) {
    if (ransomNoteMap.has(ch)) {
      ransomNoteMap.set(ch, ransomNoteMap.get(ch) + 1);
    } else {
      ransomNoteMap.set(ch, 1);
    }
  }

  for (let ch of magazine) {
    if (magazineMap.has(ch)) {
      magazineMap.set(ch, magazineMap.get(ch) + 1);
    } else {
      magazineMap.set(ch, 1);
    }
  }

  ransomNoteMap.forEach((value, key) => {
    if (!magazineMap.get(key) || magazineMap.get(key) < value) {
      console.log(
        `The key ${key} is violating the rule, since the total number of occurances is ${value}, however, only appears ${magazineMap.get(
          key
        )} in the magazine`
      );
      res = false;
    }
  });

  return res;
}

console.log(
  canConstruct("bg", "efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj")
);
