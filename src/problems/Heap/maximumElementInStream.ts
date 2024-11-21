import { Heap } from "data-structures/Heap/Heap";

function maximumElementInStream(nums: number[]) {
  let maxHeap = new Heap();
  let maxStream = [];
  for (let i = 0; i < nums.length; i++) {
    maxHeap.insert(nums[i]);
    maxStream.push(maxHeap.getHeap()[0]);
  }
  return maxStream;
}

export function checkMaximumElementInStream() {
  const nums1 = [1, 5, 2, 9, 3, 6, 8];
  const result1 = maximumElementInStream(nums1);
  console.log("result 1 => ", result1);
  const nums2 = [10, 2, 5, 1, 0, 11, 6];
  const result2 = maximumElementInStream(nums2);
  console.log("result 2 => ", result2);
  const nums3 = [3, 3, 3, 3, 3];
  const result3 = maximumElementInStream(nums3);
  console.log("result 3 => ", result3);
}
