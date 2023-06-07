/**
 *
 * @param arr number[]
 * @returns `number[]`
 * @description sorts a given array in the ascending order
 * @implements Big-O ==> O(n^2)
 */
function bubbleSort(arr: number[]): number[] {
  let swapped = true;
  while (swapped) {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  }
  return arr;
}

export function bubbleSortSolution(): void {
  const input: number[] = [8, 6, 20, -2, 4, -6];
  console.log(`given array : [${input}]`);
  const r1: number[] = bubbleSort(input);
  console.log(`result array: [${r1}]`);
}
