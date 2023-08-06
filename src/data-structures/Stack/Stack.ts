export type StackNodeOrNull = StackNode | null;

export class StackNode {
  value: number;
  next: StackNodeOrNull = null;
  constructor(value: number) {
    this.value = value;
  }
}

export class Stack {
  height: number = 0;
  top: StackNodeOrNull;
  constructor(value: number) {
    let node = new StackNode(value);
    this.top = node;
    this.height++;
  }

  printStack() {
    let temp: StackNodeOrNull = this.top;
    while (temp != null) {
      console.log(temp.value);
      temp = temp.next;
    }
  }

  getTop() {
    console.log("top: " + this.top?.value);
  }

  getHeight() {
    console.log("height: " + this.height);
  }

  makeEmpty() {
    this.top = null;
    this.height = 0;
  }

  push(value: number) {
    let node = new StackNode(value);
    if (this.top !== null) {
      node.next = this.top;
    }
    this.top = node;
    this.height++;
  }

  pop(): StackNodeOrNull {
    if (this.height === 0) return null;
    let temp = this.top;
    this.top = this.top!.next;
    temp!.next = null;
    this.height--;
    return temp;
  }
}
