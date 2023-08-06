//! LEETCODE LINK -> https://leetcode.com/problems/two-sum/description/

//? Given an array of integers nums and an integer target,
//? return indices of the two numbers such that they add up to target.

function twoSum(nums: number[], target: number) {
  // we will store two index that will equal to target sum
  // we start with 0's as we can't use the same element twice and target should be sum of two different
  // numbers
  let answer = [0, 0];
  // we will loop over the array, pick one elment at a time
  for (let i = 0; i < nums.length; i++) {
    // we will break the loop if we have two different index in answer array
    if (answer[0] != 0 && answer[1] != 0) {
      break;
    }
    // we will loop over the array from next index of the selected element in the above loop
    for (let j = i + 1; j < nums.length; j++) {
      // if we find two numbers that equal to target sum we will store their indexs in answer array
      // break the loop to stop execution of the program
      if (nums[i] + nums[j] == target) {
        answer[0] = i;
        answer[1] = j;
        break;
      }
    }
  }
  return answer;
}
