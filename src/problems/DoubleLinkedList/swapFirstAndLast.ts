import { DoublyLinkedList } from "data-structures/DoubleLinkedList/DoubleLinkedList";

class Problem extends DoublyLinkedList {
  constructor(value: number) {
    super(value);
  }

  solution() {
    if (this.length < 2) return;
    let temp = this.head!.value;
    this.head!.value = this.tail!.value;
    this.tail!.value = temp;
  }
}

export function checkSwapFirstAndLastDLL() {
  let dll = new Problem(1);
  dll.append(2);
  dll.append(3);
  dll.append(4);
  console.log("DLL values: ");
  dll.printList();
  dll.solution();
  console.log("DLL after first and last swap: ");
  dll.printList();
}
