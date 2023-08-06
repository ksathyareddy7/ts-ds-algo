import { Stack } from "./Stack";

export function checkStack() {
  let stack = new Stack(1);
  stack.push(2);
  stack.push(3);
  stack.push(4);
  console.log("Stack after pushing 3 elements:");
  stack.printStack();
  let poppedElement = stack.pop();
  console.log("popped node value: " + poppedElement?.value);
  console.log("Stack after popping top element:");
  stack.printStack();
}
