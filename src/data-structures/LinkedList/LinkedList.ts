export type NodeOrNull = LLNode | null;

export class LLNode {
  value: number;
  next: LLNode | null = null;
  constructor(value: number) {
    this.value = value;
  }
}

//* append -> O(1)
//* removeLast -> O(n)
//* prepend -> O(1)
//* removeFirst -> O(1)
//* insert -> O(n)
//* remove -> O(n)
//* find by value/index -> O(n)

export class LinkedList {
  head: LLNode | null = null;
  tail: LLNode | null = null;
  length: number = 0;

  constructor(value: number) {
    let node = new LLNode(value);
    this.head = node;
    this.tail = node;
    this.length = 1;
  }

  getHead() {
    console.log("Head value: " + this.head!.value);
  }

  getTail() {
    console.log("Tail value: " + this.tail!.value);
  }

  getLength() {
    console.log("Length of LL: " + this.length);
  }

  printList(): void {
    let temp = this.head;
    let result = "";
    while (temp !== null) {
      result += temp.value + " -> ";
      temp = temp.next;
    }
    result += "NULL";
    console.log(result);
  }

  //* add a node at the end of the linked list.
  append(value: number): boolean {
    let node = new LLNode(value);
    if (this.length === 0) {
      this.head = node;
    } else {
      this.tail!.next = node;
    }
    this.tail = node;
    this.length++;
    return true;
  }

  //* remove the last node of the linked list and return its value;
  removeLast(): number | null {
    if (this.length === 0) return null;
    let temp = this.head;
    let pre = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return temp!.value;
    }

    while (temp!.next !== null) {
      pre = temp;
      temp = temp!.next;
    }
    this.tail = pre;
    this.tail!.next = null;
    this.length--;
    return temp!.value;
  }

  //* add a node at the start of the linked list
  prepend(value: number): boolean {
    let node = new LLNode(value);
    if (this.length === 0) {
      this.tail = node;
    } else {
      node.next = this.head;
    }
    this.head = node;
    this.length++;
    return true;
  }

  //* remove the first node and return its value;
  removeFirst(): number | null {
    if (this.length === 0) return null;
    if (this.length === 1) {
      let temp = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return temp!.value;
    }
    let temp = this.head;
    this.head = temp!.next;
    temp!.next = null;
    this.length--;
    return temp!.value;
  }

  //* get a node at a given index, ZERO index
  get(index: number): LLNode | null {
    if (index > this.length || index < 0) return null;
    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp!.next;
    }
    return temp;
  }

  //* set value of a node at a given index
  set(index: number, value: number): boolean {
    let temp = this.get(index);
    if (temp === null) return false;
    temp.value = value;
    return true;
  }

  //* insert a new node at a given index
  insert(index: number, value: number): boolean {
    if (index === 0) {
      return this.prepend(value);
    }
    if (index === this.length) {
      return this.append(value);
    }
    let temp = this.get(index - 1);
    if (temp === null) return false;
    let node = new LLNode(value);
    let after = temp.next;
    temp.next = node;
    node.next = after;
    this.length++;
    return true;
  }

  //* remove a node at a given index and return its value
  remove(index: number): number | null {
    if (index >= this.length || index < 0) return null;
    if (index === 0) {
      return this.removeFirst();
    }
    if (index === this.length - 1) {
      return this.removeLast();
    }
    let temp: LLNode | null = this.get(index - 1);
    if (temp === null) return null;
    let target: LLNode | null = temp.next;
    temp.next = target!.next;
    target!.next = null;
    this.length--;
    return target!.value;
  }

  //* reverse current linked list
  reverse() {
    let temp: LLNode | null = this.head;
    this.head = this.tail;
    this.tail = temp;
    let after: LLNode | null = temp!.next;
    let before: LLNode | null = null;
    for (let i = 0; i < this.length; i++) {
      after = temp!.next;
      temp!.next = before;
      before = temp;
      temp = after;
    }
  }
}
