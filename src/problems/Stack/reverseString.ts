import { Stack } from "data-structures/Stack/Stack";

function solution(str: string) {
  let stack = new Stack();
  let reversedString = "";
  for (let i = 0; i < str.length; i++) {
    stack.push(str[i]);
  }

  while (!stack.isEmpty()) {
    let temp = stack.pop();
    reversedString += temp!.value;
  }
  return reversedString;
}

export function checkStackReverseString() {
  let result1 = solution("hello world");
  console.log(result1);
}
