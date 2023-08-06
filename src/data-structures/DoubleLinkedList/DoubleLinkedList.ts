export type DLLNodeOrNull = DLLNode | null;

export class DLLNode {
  next: DLLNodeOrNull = null;
  prev: DLLNodeOrNull = null;
  value: number;

  constructor(value: number) {
    this.value = value;
  }
}

export class DoublyLinkedList {
  head: DLLNodeOrNull = null;
  tail: DLLNodeOrNull = null;
  length: number = 0;

  constructor(value: number) {
    let node = new DLLNode(value);
    this.head = node;
    this.tail = node;
    this.length = 1;
  }

  getHead(): void {
    console.log("Head: " + this.head!.value);
  }

  getTail(): void {
    console.log("Tail: " + this.tail!.value);
  }

  getLength(): void {
    console.log("Length of DLL: " + this.length);
  }

  printList(): void {
    let temp: DLLNodeOrNull = this.head;
    while (temp !== null) {
      console.log(temp.value);
      temp = temp!.next;
    }
  }

  //* add a node at the end of the linked list.
  append(value: number): boolean {
    let node = new DLLNode(value);
    if (this.length === 0) {
      this.head = node;
    } else {
      this.tail!.next = node;
      node.prev = this.tail;
    }
    this.tail = node;
    this.length++;
    return true;
  }

  //* add a node at the start of the linked list
  prepend(value: number): boolean {
    let node = new DLLNode(value);
    if (this.length === 0) {
      this.tail = node;
    } else {
      node.next = this.head;
      this.head!.prev = node;
    }
    this.head = node;
    this.length++;
    return true;
  }

  //* remove the last node of the linked list and return its value.
  removeLast(): DLLNodeOrNull {
    if (this.length === 0) return null;
    let temp = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail!.prev;
      this.tail!.next = null;
      temp!.prev = null;
    }
    this.length--;
    return temp;
  }

  //* remove the first node and return its value
  removeFirst(): DLLNodeOrNull {
    if (this.length === 0) return null;
    let temp = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head!.next;
      this.head!.prev = null;
      temp!.next = null;
    }
    this.length--;
    return temp;
  }

  //* get a node at a given index
  get(index: number): DLLNodeOrNull {
    if (this.length < index || index < 0) return null;
    let temp: DLLNodeOrNull = null;
    if (this.length / 2 > index) {
      temp = this.head;
      for (let i = 0; i < index; i++) {
        temp = temp!.next;
      }
    } else {
      temp = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        temp = temp!.prev;
      }
    }
    return temp;
  }

  //* set value of a node at a given index
  set(index: number, value: number) {
    let temp = this.get(index);
    if (!temp) return temp;
    temp.value = value;
    return true;
  }

  //* insert a new node at given index if valid index
  insert(index: number, value: number): boolean {
    let current = this.get(index);
    if (!current) return false;
    if (index === 0) {
      return this.prepend(value);
    }
    if (index === this.length - 1) {
      return this.append(value);
    }
    let before = current!.prev;
    let node = new DLLNode(value);
    before!.next = node;
    node.prev = before;
    node.next = current;
    current!.prev = node;
    return true;
  }

  //* remove a node at a given index if valid index
  remove(index: number): DLLNodeOrNull {
    let current = this.get(index);
    if (!current) return null;
    if (index === 0) {
      return this.removeFirst();
    }
    if (index === this.length - 1) {
      return this.removeLast();
    }
    let before = current!.prev;
    let after = current!.next;
    before!.next = after;
    after!.prev = before;
    current.next = null;
    current.prev = null;
    return current;
  }
}

// TODO: add test function
