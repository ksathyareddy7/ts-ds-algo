/**
 *
 * @param arr number[]
 * @param target number
 * @returns `number`
 * @description finds `index` of the target element if exists, otherwise returns `-1`
 * @implements Big-O ==> O(logn)
 */

function binarySearch(arr: number[], target: number): number {
  let leftIndex: number = 0;
  let rightIndex: number = arr.length - 1;

  while (leftIndex <= rightIndex) {
    let middleIndex: number = Math.floor((leftIndex + rightIndex) / 2);
    if (arr[middleIndex] === target) {
      return middleIndex;
    } else if (arr[middleIndex] < target) {
      leftIndex = middleIndex + 1;
    } else {
      rightIndex = middleIndex - 1;
    }
  }
  return -1;
}

function search(
  arr: number[],
  target: number,
  leftIndex: number,
  rightIndex: number
): number {
  if (leftIndex > rightIndex) {
    return -1;
  }
  let middleIndex: number = Math.floor((leftIndex + rightIndex) / 2);
  if (arr[middleIndex] === target) {
    return middleIndex;
  }
  if (arr[middleIndex] < target) {
    return search(arr, target, middleIndex + 1, rightIndex);
  } else {
    return search(arr, target, leftIndex, middleIndex - 1);
  }
}

/**
 *
 * @param arr number[]
 * @param target number
 * @returns `number`
 * @description finds `index` of the target element if exists, otherwise returns `-1`
 * @implements Big-O ==> O(logn)
 */
function recursiveBinarySearch(arr: number[], target: number): number {
  return search(arr, target, 0, arr.length - 1);
}

export function binarySearchSolution(): void {
  const inputArray: number[] = [-5, 2, 4, 6, 10];
  console.log(`given array [${inputArray}]`);
  const bsr10: number = binarySearch(inputArray, 10);
  console.log(`the index of value 10 is : ${bsr10}`);
  const bsr6: number = binarySearch(inputArray, 6);
  console.log(`the index of value 6 is : ${bsr6}`);
  const bsr20: number = binarySearch(inputArray, 20);
  console.log(`the index of value 20 is : ${bsr20}`);

  console.log(
    "\n================== recursive solution results =====================\n"
  );

  const rbsr10: number = recursiveBinarySearch(inputArray, 10);
  console.log(`the index of value 10 is : ${rbsr10}`);
  const rbsr6: number = recursiveBinarySearch(inputArray, 6);
  console.log(`the index of value 6 is : ${rbsr6}`);
  const rbsr20: number = recursiveBinarySearch(inputArray, 20);
  console.log(`the index of value 20 is : ${rbsr20}`);
}
