/**
 *
 * @param n number
 * @returns `number`
 * @description factorial value for the given number `n`
 * @implements Big-O ==> O(n)
 */
function factorial(n: number): number {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

export function checkFactorial() {
  const result1 = factorial(4);
  console.log("result 1: " + result1);
  const result2 = factorial(5);
  console.log("result 2: " + result2);
}
