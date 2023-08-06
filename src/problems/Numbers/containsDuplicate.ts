//! LEETCODE -> https://leetcode.com/problems/contains-duplicate/

function containsDuplicate(nums: number[]) {
  return new Set(nums).size !== nums.length;
}

export function checkContainsDuplicate() {
  const result1 = containsDuplicate([1, 2, 3, 4]);
  console.log("result 1: " + result1);
  const result2 = containsDuplicate([1, 2, 3, 1]);
  console.log("result 2: " + result2);
}
