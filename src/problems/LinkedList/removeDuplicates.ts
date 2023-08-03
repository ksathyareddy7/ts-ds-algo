import { LinkedList, NodeOrNull } from "data-structures/LinkedList";

//! LEETCODE LINK -> https://leetcode.com/problems/remove-duplicates-from-sorted-list/

class Problem extends LinkedList {
  constructor(value: number) {
    super(value);
  }

  solution() {
    let values = new Set();

    let prev: NodeOrNull = null;
    let current: NodeOrNull = this.head;

    while (current !== null) {
      if (values.has(current.value)) {
        prev!.next = current.next;
        current!.next = null;
        current = prev!.next;
        this.length--;
      } else {
        values.add(current.value);
        prev = current;
        current = current.next;
      }
    }
  }
}

export function removeDuplicatesSolution() {
  let ll = new Problem(1);
  ll.append(2);
  ll.append(1);
  ll.append(3);
  ll.append(4);
  ll.append(5);
  ll.append(2);
  ll.append(1);
  ll.append(8);
  console.log("******* INITIAL LINKED LIST VALUES *******");
  ll.printList();
  ll.solution();
  console.log("******* LINKED LIST WITHOUT DUPLICATES *******");
  ll.printList();
}
