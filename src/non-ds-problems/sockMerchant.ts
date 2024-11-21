//https://www.hackerrank.com/challenges/sock-merchant/problem

/*
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */

/*
 * int n: the number of socks in the pile
 * int ar[n]: the colors of each sock
 * returns number of pairs
 */

function sockMerchant(n: number, ar: number[]): number {
  // Write your code here
  let socksByNumber: any = {};
  ar.forEach((item) => {
    if (socksByNumber[item]) {
      socksByNumber[item] = ++socksByNumber[item];
    } else {
      socksByNumber[item] = 1;
    }
  });
  let pairs = 0;
  let totalByNumber = Object.values(socksByNumber);
  totalByNumber.forEach((item: unknown) => {
    pairs += Math.floor((item as number) / 2);
  });
  return pairs;
}

let result = sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]);

console.log(result);
