/**
 *
 * @param n number
 * @returns boolean
 * @description evaluates if a given number is prime or not
 * @implements Big-O ==> O(sqrt(n))
 */

function isPrime(n: number): boolean {
  if (n < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

export function isPrimeSolution(): void {
  const r1 = isPrime(1);
  console.log(`is number 1 prime: ${r1}`);
  const r2 = isPrime(2);
  console.log(`is number 2 prime: ${r2}`);
  const r4 = isPrime(4);
  console.log(`is number 4 prime: ${r4}`);
  const r5 = isPrime(5);
  console.log(`is number 5 prime: ${r5}`);
  const r11 = isPrime(11);
  console.log(`is number 11 prime: ${r11}`);
  const r15 = isPrime(15);
  console.log(`is number 15 prime: ${r15}`);
}
