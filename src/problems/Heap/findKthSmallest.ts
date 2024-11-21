import { Heap } from "data-structures/Heap/Heap";

function findKthSmallest(nums: number[], k: number) {
  let heap = new Heap();
  for (let i = 0; i < nums.length; i++) {
    heap.insert(nums[i]);

    if (heap.getHeap().length > k) {
      heap.remove();
    }
  }

  return heap.remove();
}

export function checkFindKthSmallestInHeap() {
  const nums1 = [7, 10, 4, 3, 20, 15];
  const nums2 = [2, 1, 3, 5, 6, 4];
  const nums3 = [9, 3, 2, 11, 7, 10, 4, 5];

  const result1 = findKthSmallest(nums1, 3);
  console.log("result1 = 3 =>", result1);

  const result2 = findKthSmallest(nums2, 2);
  console.log("result2 = 2 =>", result2);

  const result3 = findKthSmallest(nums3, 5);
  console.log("result3 = 5 =>", result3);
}
