import {
  LLNode,
  LinkedList,
  NodeOrNull,
} from "data-structures/LinkedList/LinkedList";

//? LEETCODE LINK -> https://leetcode.com/problems/reverse-linked-list-ii/

class Problem extends LinkedList {
  constructor(value: number) {
    super(value);
  }

  solution(m: number, n: number) {
    if (this.length === 0) return null;
    let dummy: NodeOrNull = new LLNode(0);
    dummy.next = this.head;
    let prev: NodeOrNull = dummy;
    for (let i = 0; i < m; i++) {
      prev = prev!.next;
    }
    let current: NodeOrNull = prev!.next;
    for (let j = 0; j < n - m; j++) {
      let temp: NodeOrNull = current!.next;
      current!.next = temp!.next;
      temp!.next = prev!.next;
      prev!.next = temp;
    }
    dummy.next = null;
  }
}

//! m = 1, n = 3

//? 2nd FOR LOOP

//*      p    c    t
//* d -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7

//? after FOR loop 1st iteration
//*      p    t    c
//* d -> 1 -> 3 -> 2 -> 4 -> 5 -> 6 -> 7

//? before 2nd iteration
//*      p         c    t
//* d -> 1 -> 3 -> 2 -> 4 -> 5 -> 6 -> 7

export function reverseBetweenMNSolution() {
  let ll = new Problem(1);
  ll.append(2);
  ll.append(3);
  ll.append(4);
  ll.append(5);
  ll.append(6);
  ll.append(7);
  ll.append(8);
  ll.append(9);
  console.log("******* INITIAL LINKED LIST VALUES *******");
  ll.printList();
  ll.solution(2, 5);
  console.log("******* LINKED LIST REVERSED BETWEEN 2 AND 5 *******");
  ll.printList();
}
