//https://www.hackerrank.com/challenges/bon-appetit/problem

/*
 * Complete the 'bonAppetit' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY bill
 *  2. INTEGER k
 *  3. INTEGER b
 */

/*
 * bill: an array of integers representing the cost of each item ordered
 * k: an integer representing the zero-based index of the item Anna doesn't eat
 * b: the amount of money that Anna contributed to the bill
 */

function bonAppetit(bill: number[], k: number, b: number): void {
  // Write your code here
  let sum: number = 0;
  bill.forEach((item: number, index: number) => {
    if (index === k) return;
    sum += item;
  });
  let splitHalf: number = sum / 2;
  if (splitHalf === b) {
    console.log("Bon Appetit");
  } else {
    return console.log(bill[k] / 2);
  }
}

bonAppetit([3, 10, 2, 9], 1, 12);
