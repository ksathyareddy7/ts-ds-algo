import { LinkedList, NodeOrNull } from "data-structures/LinkedList";

//? return Kth node from the end of a linked list for given K

class Problem extends LinkedList {
  constructor(value: number) {
    super(value);
  }

  solution(k: number): NodeOrNull {
    let slow: NodeOrNull = this.head;
    let fast: NodeOrNull = this.head;
    //* we are moving FAST pointer by K so that when fast becomes null, slow will be at the Kth Node.
    for (let i = 0; i < k; i++) {
      if (fast == null) return null;
      fast = fast.next;
    }
    while (fast != null) {
      slow = slow!.next;
      fast = fast.next;
    }
    return slow;
  }
}

//! k = 2

//* F
//* 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7
//* S

//? after FOR loop
//*           F
//* 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7
//* S

//? after WHILE loop
//*                                    F
//* 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> null
//*                          S

export function findKthNodeFromEndLinkedListSolution() {
  let ll = new Problem(1);
  ll.append(2);
  ll.append(3);
  ll.append(4);
  ll.append(5);
  ll.append(6);
  ll.append(7);
  console.log("******* LINKED LIST VALUE: *******");
  ll.printList();
  console.log("******* NODE VALUE AT 2nd POSITION FROM END: *******");
  console.log(ll.solution(2)!.value);
}
