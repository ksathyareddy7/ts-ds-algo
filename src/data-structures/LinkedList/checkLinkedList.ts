import { LinkedList } from "./LinkedList";

export function checkLinkedList() {
  let ll = new LinkedList(1);
  ll.append(2);
  ll.append(3);
  ll.append(4);
  ll.append(5);
  ll.append(8);
  ll.append(9);
  console.log("******* INITIAL LINKED LIST VALUES *******");
  ll.printList();

  ll.removeLast();
  console.log("******* AFTER DELETING LAST *******");
  ll.printList();

  ll.prepend(6);
  console.log("******* AFTER PREPENDING *******");
  ll.printList();

  ll.removeFirst();
  console.log("******* AFTER DELETING FIRST *******");
  ll.printList();

  console.log("******* GET VALUE AT INDEX : 2 *******");
  console.log(ll.get(2)!.value);

  console.log("******* SET VALUE of 62 AT INDEX : 1 *******");
  ll.set(1, 62);
  ll.printList();

  console.log("******* INSERT A NEW NODE AT INDEX : 3 *******");
  ll.insert(3, 45);
  ll.printList();

  console.log("******* REMOVE A NODE AT INDEX : 4 *******");
  ll.remove(4);
  ll.printList();

  console.log("******* REVERSED LINKED LIST VALUES *******");
  ll.reverse();
  ll.printList();
}
