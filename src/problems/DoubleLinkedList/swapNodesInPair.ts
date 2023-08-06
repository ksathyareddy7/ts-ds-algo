import {
  DLLNode,
  DoublyLinkedList,
} from "data-structures/DoubleLinkedList/DoubleLinkedList";

class Problem extends DoublyLinkedList {
  constructor(value: number) {
    super(value);
  }

  solution() {
    let dummy = new DLLNode(0);
    let prev = dummy;
    dummy.next = this.head;

    while (this.head !== null && this.head.next !== null) {
      let firstNode = this.head;
      let secondNode = this.head!.next;

      prev.next = secondNode;
      firstNode.next = secondNode.next;
      secondNode.next = firstNode;

      secondNode.prev = prev;
      firstNode.prev = secondNode;
      if (firstNode.next !== null) {
        firstNode.next.prev = firstNode;
      }
      this.head = firstNode.next;
      prev = firstNode;
    }
    this.head = dummy.next;
    if (this.head !== null) this.head.prev = null;
  }
}

export function checkSwapNodesInPairDLL() {
  let dll = new Problem(1);
  dll.append(2);
  dll.append(3);
  dll.append(4);
  dll.append(5);
  dll.append(6);
  dll.append(9);
  console.log("Double Linked List values: ");
  dll.printList();
  dll.solution();
  console.log("Double Linked List values after swapping in pair: ");
  dll.printList();
}
