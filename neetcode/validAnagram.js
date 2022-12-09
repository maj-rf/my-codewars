// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
// typically using all the original letters exactly once.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function (s, t, map = new Map()) {
  const sameLength = s.length === t.length;
  if (!sameLength) return false;

  // checking if s elements exists on map
  for (const char of s) {
    const count = (map.get(char) || 0) + 1;
    map.set(char, count);
  }

  // check if t elements exists on map, if exist, subtract 1 from map value
  for (const char of t) {
    if (!map.has(char)) continue;
    const count = map.get(char) - 1;
    map.set(char, count);
  }

  for (const [char, count] of map) {
    const isEmpty = count === 0;
    if (!isEmpty) return false;
  }
  return true;
};

console.log(isAnagram('blueeeee', 'red'));
console.log(isAnagram('anagram', 'nagaram'));
console.log(isAnagram('rat', 'car'));
