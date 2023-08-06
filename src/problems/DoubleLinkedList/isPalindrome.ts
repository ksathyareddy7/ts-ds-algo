import { DoublyLinkedList } from "data-structures/DoubleLinkedList/DoubleLinkedList";

class Problem extends DoublyLinkedList {
  constructor(value: number) {
    super(value);
  }

  solution() {
    if (this.length === 0) return false;
    let start = this.head;
    let end = this.tail;
    for (let i = 0; i < this.length / 2; i++) {
      if (start!.value !== end!.value) {
        return false;
      }
      start = start!.next;
      end = end!.prev;
    }
    return true;
  }
}

export function checkIsPalindromeDLL() {
  let dll1 = new Problem(1);
  dll1.append(2);
  dll1.append(3);
  dll1.append(2);
  dll1.append(1);
  console.log("First DLL values: ");
  dll1.printList();
  console.log("First DLL is palindrome: " + dll1.solution());
  let dll2 = new Problem(1);
  dll2.append(2);
  dll2.append(3);
  dll2.append(4);
  dll2.append(5);
  console.log("Second DLL values: ");
  dll2.printList();
  console.log("Second DLL is palindrome: " + dll2.solution());
}
