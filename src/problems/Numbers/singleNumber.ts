//! LEETCODE LINK -> https://leetcode.com/problems/single-number/

function singleNumber(nums: number[]) {
  if (nums.length == 1) {
    return nums[0];
  }
  let result = nums[0];
  // As we know XOR operation with 0 gives the same number => 2 XOR 0 = 2
  // 010 XOR 000 = 010
  // XOR operation with same number gives 0 => 2 XOR 2 = 0
  // 010 XOR 010 = 000
  // each element i in array, we will perform the XOR operation of the element
  // with 0, ans will become 0 if the same number is found (as a XOR a = 0) and
  // so after the completion of the loop, only element with no duplicate number
  // will remain and will be returned as ans.
  for (let i = 1; i < nums.length; i++) {
    result = result ^ nums[i];
  }
  return result;
}
