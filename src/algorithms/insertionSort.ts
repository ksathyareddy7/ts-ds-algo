export function insertionSort<T>(arr: T[]) {
  for (let i = 1; i < arr.length; i++) {
    let temp: T = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j];
      arr[j] = temp;
      j--;
    }
  }
}
