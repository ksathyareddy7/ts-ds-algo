import { LinkedList } from "data-structures/LinkedList/LinkedList";

//! LEETCODE PROBLEM LINK -> https://leetcode.com/problems/middle-of-the-linked-list/

class Problem extends LinkedList {
  constructor(value: number) {
    super(value);
  }

  solution() {
    let slow = this.head;
    let fast = this.head;
    //* we are moving fast pointer at 2 times speed so that by the time it reaches end
    //* slow will be at the middle of the linked list
    while (fast !== null && fast.next !== null) {
      fast = fast.next.next;
      slow = slow!.next;
    }
    return slow;
  }
}

export function findMiddleNodeOfLinkedListSolution() {
  let ll = new Problem(1);
  ll.append(2);
  ll.append(3);
  ll.append(4);
  ll.append(5);
  ll.append(8);
  ll.append(9);
  console.log("******* INITIAL LINKED LIST VALUES *******");
  ll.printList();
  console.log("******* MIDDLE NODE VALUE *******");
  let temp = ll.solution();
  console.log(temp!.value);
}
