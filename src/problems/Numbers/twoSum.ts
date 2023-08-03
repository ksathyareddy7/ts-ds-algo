//! LEETCODE LINK
//! https://leetcode.com/problems/two-sum/description/

//? Given an array of integers nums and an integer target,
//? return indices of the two numbers such that they add up to target.

export function twoSum(nums: number[], target: number) {
  let answer = [0, 0];
  for (let i = 0; i < nums.length; i++) {
    if (answer[0] != 0 && answer[1] != 0) {
      break;
    }
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        answer[0] = i;
        answer[1] = j;
        break;
      }
    }
  }
  return answer;
}
