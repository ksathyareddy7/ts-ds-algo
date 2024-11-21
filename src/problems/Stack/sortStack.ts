import { Stack, StackNodeOrNull } from "data-structures/Stack/Stack";

function solution(stack: Stack<number>) {
  let additional = new Stack<number>();

  while (!stack.isEmpty()) {
    let temp: StackNodeOrNull = stack.pop();

    if (temp?.value) {
      while (!additional.isEmpty() && additional.peek()?.value > temp.value) {
        stack.push(additional.pop()?.value);
      }
      additional.push(temp.value);
    }
  }

  while (!additional.isEmpty()) {
    stack.push(additional.pop()?.value);
  }
  return stack;
}

export function checkStackSortStack() {
  let temp = new Stack<number>();
  temp.push(4);
  temp.push(1);
  temp.push(5);
  temp.push(2);
  temp.push(3);
  console.log("before sorting");
  temp.printStack();
  console.log("after sorting");
  let result = solution(temp);
  result.printStack();
}
