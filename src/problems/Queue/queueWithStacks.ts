import { Stack } from "data-structures/Stack/Stack";

class Problem {
  stack1 = new Stack();
  stack2 = new Stack();

  enqueue(value: number) {
    while (!this.stack1.isEmpty()) {
      this.stack2.push(this.stack1.pop()?.value);
    }
    this.stack1.push(value);
    while (!this.stack2.isEmpty()) {
      this.stack1.push(this.stack2.pop()?.value);
    }
  }
  dequeue() {
    if (this.stack1.isEmpty()) return null;
    return this.stack1.pop()?.value;
  }
  print() {
    console.log("peek : " + this.stack1.peek()?.value);
    console.log("queue is empty : " + this.stack1.isEmpty());
    this.stack1.printStack();
  }
}

export function checkEnqueueDequeueWithStack() {
  let queue = new Problem();
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  queue.print();
}
