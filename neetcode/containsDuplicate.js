//Given an integer array nums, return true if any value appears at least twice in the array,
//and return false if every element is distinct.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function (nums) {
  const dupes = new Set();

  for (const num of nums) {
    if (dupes.has(num)) return true;
    dupes.add(num);
  }
  return false;
};

console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4]));
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
