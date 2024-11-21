export type StackNodeOrNull = StackNode<any> | null;

export class StackNode<T> {
  value: T;
  next: StackNodeOrNull = null;
  constructor(value: T) {
    this.value = value;
  }
}

export class Stack<T> {
  height: number = 0;
  top: StackNodeOrNull = null;
  constructor(value?: T) {
    if (value) {
      let node = new StackNode(value);
      this.top = node;
      this.height++;
    }
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

  isEmpty() {
    return !this.height;
  }

  peek() {
    return this.top;
  }

  push(value: T) {
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
