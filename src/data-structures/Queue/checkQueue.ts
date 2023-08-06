import { Queue } from "./Queue";

export function checkQueue() {
  let stack = new Queue(1);
  stack.enqueue(2);
  stack.enqueue(3);
  stack.enqueue(4);
  console.log("Queue after enqueueing 3 elements:");
  stack.printQueue();
  let dequeuedNode = stack.dequeue();
  console.log("dequeued node value: " + dequeuedNode?.value);
  console.log("Queue after dequeueing first element:");
  stack.printQueue();
}
