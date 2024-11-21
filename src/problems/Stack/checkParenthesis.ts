import { Stack } from "data-structures/Stack/Stack";

function solution(str: string) {
  let stack = new Stack();

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      stack.push(")");
    } else if (stack.pop()?.value !== ")") {
      return false;
    }
  }

  return stack.isEmpty();
}

export function checkStackIsBalancedParentheses() {
  let result1 = solution("((()))");
  console.log("balanced parenthesis: " + result1);
  let result2 = solution("(((()))");
  console.log("balanced parenthesis: " + result2);
}
