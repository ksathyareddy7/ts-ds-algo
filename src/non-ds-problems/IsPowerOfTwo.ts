/**
 *
 * @param n number
 * @returns boolean
 * @description evaluates if given number is value of power of two
 * @implements Big-O ==> O(logn)
 */
function isPowerOfTwo(n: number): boolean {
  if (n < 1) {
    return false;
  }
  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
}

/**
 *
 * @param n number
 * @returns boolean
 * @description evaluates if given number is value of power of two
 * @implements Big-O ==> O(1)
 */
function isPowerOfTwoBitwise(n: number): boolean {
  if (n < 1) {
    return false;
  }
  return (n & (n - 1)) === 0;
}

export function isPowerOfTwoSolution(): void {
  const r1 = isPowerOfTwo(1);
  console.log(`is 1 power of two: ${r1}`);
  const r2 = isPowerOfTwo(2);
  console.log(`is 2 power of two: ${r2}`);
  const r5 = isPowerOfTwo(5);
  console.log(`is 5 power of two: ${r5}`);
  const r32 = isPowerOfTwo(32);
  console.log(`is 32 power of two: ${r32}`);
  console.log(
    "\n================== bitwise solution results =====================\n"
  );
  const br1 = isPowerOfTwoBitwise(1);
  console.log(`is 1 power of two: ${br1}`);
  const br2 = isPowerOfTwoBitwise(2);
  console.log(`is 2 power of two: ${br2}`);
  const br5 = isPowerOfTwoBitwise(5);
  console.log(`is 5 power of two: ${br5}`);
  const br32 = isPowerOfTwoBitwise(32);
  console.log(`is 32 power of two: ${br32}`);
}
