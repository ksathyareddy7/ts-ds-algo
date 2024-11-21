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

export function factorialSolution(): void {
  const r0 = factorial(0);
  console.log(`the factorial of 0 : ${r0}`);
  const r1 = factorial(1);
  console.log(`the factorial of 1 : ${r1}`);
  const r4 = factorial(4);
  console.log(`the factorial of 4 : ${r4}`);
  const r5 = factorial(5);
  console.log(`the factorial of 5 : ${r5}`);
  const r10 = factorial(10);
  console.log(`the factorial of 10 : ${r10}`);
}
