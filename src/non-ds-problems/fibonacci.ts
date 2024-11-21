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
function findNthFibonacciNumberRecursion(n: number): number {
  if (n < 2) {
    return n;
  }
  return (
    findNthFibonacciNumberRecursion(n - 1) +
    findNthFibonacciNumberRecursion(n - 2)
  );
}

export function fibonacciSolution(): void {
  const r1: number[] = fibonacciSeries(1);
  console.log(`the fibonacci series for 1 : ${r1}`);
  const r2: number[] = fibonacciSeries(2);
  console.log(`the fibonacci series for 2 : ${r2}`);
  const r3: number[] = fibonacciSeries(3);
  console.log(`the fibonacci series for 3 : ${r3}`);
  const r7: number[] = fibonacciSeries(7);
  console.log(`the fibonacci series for 7 : ${r7}`);

  console.log(
    "\n================== fibonacci summation results =====================\n"
  );

  const nfbr1: number = findNthFibonacciNumberRecursion(1);
  console.log(`the 1 fibonacci number : ${nfbr1}`);
  const nfbr2: number = findNthFibonacciNumberRecursion(2);
  console.log(`the 2 fibonacci number : ${nfbr2}`);
  const nfbr3: number = findNthFibonacciNumberRecursion(3);
  console.log(`the 3 fibonacci number : ${nfbr3}`);
  const nfbr7: number = findNthFibonacciNumberRecursion(7);
  console.log(`the 7 fibonacci number : ${nfbr7}`);
}
