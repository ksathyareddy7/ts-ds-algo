function flipAndInvertImage(image: number[][]) {
  // map over the outer array, for each inner array reverse it and flip the value
  return image.map((row) => row.reverse().map((i) => +!i));
}
