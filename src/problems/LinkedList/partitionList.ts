import { LinkedList, NodeOrNull } from "data-structures/LinkedList/LinkedList";

//! LEETCODE LINK -> https://leetcode.com/problems/partition-list/

class Problem extends LinkedList {
  constructor(value: number) {
    super(value);
  }

  solution(x: number) {
    let temp: NodeOrNull = this.head;
    let left: LinkedList = new LinkedList(0);
    let right: LinkedList = new LinkedList(0);
    while (temp != null) {
      if (temp.value < x) {
        left.append(temp.value);
      } else {
        right.append(temp.value);
      }
      temp = temp.next;
    }
    this.head = left.head!.next;
    right.head = right.head!.next;
    left.tail!.next = right.head;
    this.tail = right.tail;
  }
}

export function partitionListSolution() {
  let ll = new Problem(7);
  ll.append(4);
  ll.append(9);
  ll.append(8);
  ll.append(1);
  ll.append(6);
  ll.append(2);
  ll.append(5);
  ll.append(3);
  console.log("******* INITIAL LINKED LIST VALUES *******");
  ll.printList();
  ll.solution(5);
  console.log("******* LINKED LIST REVERSED BETWEEN 2 AND 5 *******");
  ll.printList();
}
