import { LinkedList, NodeOrNull } from "data-structures/LinkedList/LinkedList";

//? LEETCODE LINK -> https://leetcode.com/problems/remove-duplicates-from-sorted-list/

class Problem extends LinkedList {
  constructor(value: number) {
    super(value);
  }

  solution() {
    if (this.head === null) return null;
    let prev: NodeOrNull = null;
    let current: NodeOrNull = this.head;
    // remove 1 so that initial values at head do not match in first iteration
    let prevValue = this.head.value - 1;
    while (current !== null) {
      if (prevValue === current.value) {
        prev!.next = current.next;
        current = current.next;
      } else {
        prevValue = current.value;
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
