/**
 *
 * @param n number
 * @returns `number[]`
 * @description returns a Fibonacci series for `n` elements
 * @implements Big-O ==> O(n)
 */

function fibonacciSeries(n: number): number[] {
  const result: number[] = [0, 1];
  if (n === 1) {
    return result.slice(0, 1);
  }
  if (n === 2) {
    return result;
  }

  for (let i = 0; i < n - 2; i++) {
    result.push(result[i] + result[i + 1]);
  }
  return result;
}
/**
 *
 * @param n number
 * @returns `number`
 * @description returns a Nth Fibonacci number
 * @implements Big-O ==> O(2^n)
 */
function findNthFibonacciNumber(n: number): number {
  if (n < 2) {
    return n;
  }
  return findNthFibonacciNumber(n - 1) + findNthFibonacciNumber(n - 2);
}
