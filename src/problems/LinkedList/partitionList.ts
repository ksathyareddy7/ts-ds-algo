import {
  LinkedList,
  LLNode,
  NodeOrNull,
} from "data-structures/LinkedList/LinkedList";

//! LEETCODE LINK -> https://leetcode.com/problems/partition-list/

class Problem extends LinkedList {
  constructor(value: number) {
    super(value);
  }

  solution(x: number) {
    if (this.head === null) return;
    let dummy1: LLNode = new LLNode(0);
    let dummy2: LLNode = new LLNode(0);
    let prev1: LLNode = dummy1;
    let prev2: LLNode = dummy2;
    let current: LLNode | null = this.head;

    while (current != null) {
      if (current.value < x) {
        prev1.next = current;
        prev1 = current;
      } else {
        prev2.next = current;
        prev2 = current;
      }
      current = current.next;
    }
    prev2.next = null;
    prev1.next = dummy2.next;
    this.head = dummy1.next;
  }
}

export function partitionListSolution() {
  //1,4,3,2,5,2
  let ll = new Problem(1);
  ll.append(4);
  ll.append(3);
  ll.append(2);
  ll.append(5);
  ll.append(2);
  console.log("******* INITIAL LINKED LIST VALUES *******\n");
  ll.printList();
  ll.solution(3);
  console.log("\n******* LINKED LIST PARTITIONED BETWEEN 5 *******\n");
  ll.printList();
}
