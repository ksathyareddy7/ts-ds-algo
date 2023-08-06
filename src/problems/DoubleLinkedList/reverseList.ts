import { DoublyLinkedList } from "data-structures/DoubleLinkedList/DoubleLinkedList";

class Problem extends DoublyLinkedList {
  constructor(value: number) {
    super(value);
  }

  solution() {
    let current = this.head;
    let temp = null;
    while (current !== null) {
      temp = current.prev;
      current.prev = current.next;
      current.next = temp;
      current = current.prev;
    }
    temp = this.head;
    this.head = this.tail;
    this.tail = temp;
  }
}

export function checkReverseListDLL() {
  let dll = new Problem(1);
  dll.append(2);
  dll.append(3);
  dll.append(4);
  dll.append(5);
  console.log("Double Linked List values :");
  dll.printList();
  dll.solution();
  console.log("Double Linked List values after reversing: ");
  dll.printList();
}
