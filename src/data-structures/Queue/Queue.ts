export type QueueNodeOrNull = QueueNode | null;

export class QueueNode {
  value: number;
  next: QueueNodeOrNull = null;
  constructor(value: number) {
    this.value = value;
  }
}

export class Queue {
  first: QueueNodeOrNull = null;
  last: QueueNodeOrNull = null;
  length: number = 0;
  constructor(value: number) {
    let node = new QueueNode(value);
    this.first = node;
    this.last = node;
    this.length++;
  }
  printQueue() {
    let temp = this.first;
    while (temp != null) {
      console.log(temp.value);
      temp = temp.next;
    }
  }

  getFrist() {
    console.log("First: " + this.first!.value);
  }

  getLast() {
    console.log("Last: " + this.last!.value);
  }
  getLength() {
    console.log("Length: " + this.length);
  }

  enqueue(value: number): boolean {
    let node = new QueueNode(value);
    if (this.length === 0) {
      this.first = node;
    } else {
      this.last!.next = node;
    }
    this.last = node;
    this.length++;
    return true;
  }

  dequeue(): QueueNodeOrNull {
    if (this.length === 0) return null;
    let temp = this.first;
    this.first = this.first!.next;
    temp!.next = null;
    this.length--;
    if (this.length === 0) {
      this.last = null;
    }
    return temp;
  }
}
