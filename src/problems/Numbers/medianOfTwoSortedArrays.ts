//! LEETCODE LINK
//! https://leetcode.com/problems/median-of-two-sorted-arrays/

//? Given two sorted arrays nums1 and nums2 of size m and n respectively,
//? return the median of the two sorted arrays.

export function medianOfTwoSortedArrays(nums1: number[], nums2: number[]) {
  let sorted = [...nums1, ...nums2].sort((a, b) => a - b);
  let len = sorted.length;
  return len % 2 === 0
    ? (sorted[len / 2 - 1] + sorted[len / 2]) / 2
    : sorted[Math.floor(len / 2)];
}
