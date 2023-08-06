import { LinkedList, NodeOrNull } from "data-structures/LinkedList/LinkedList";

//! LEETCODE PROBLEM LINK -> https://leetcode.com/problems/linked-list-cycle/

class Problem extends LinkedList {
  constructor(value: number) {
    super(value);
  }

  //* the FAST will catch up with SLOW node if there is a loop
  solution(): boolean {
    let slow: NodeOrNull = this.head;
    let fast: NodeOrNull = this.head;
    while (fast !== null && fast.next !== null) {
      fast = fast.next!.next;
      slow = slow!.next;
      //! this has to be last line otherwise it will fail in the first iteration as both are at HEAD
      if (slow === fast) return true;
    }
    return false;
  }
}

export function findLinkedListHasLoopSolution() {
  let ll1 = new Problem(1);
  ll1.append(2);
  ll1.append(3);
  ll1.append(4);
  ll1.append(5);
  console.log("******* LINKED LIST 1 HAS LOOP: *******");
  console.log(ll1.solution());
  let ll2 = new Problem(10);
  ll2.append(20);
  ll2.append(30);
  ll2.append(40);
  ll2.append(50);
  ll2.tail!.next = ll2.get(2);
  console.log("******* LINKED LIST 2 HAS LOOP: *******");
  console.log(ll2.solution());
}
