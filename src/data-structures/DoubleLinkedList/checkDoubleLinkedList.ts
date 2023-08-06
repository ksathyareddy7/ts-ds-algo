import { DoublyLinkedList } from "./DoubleLinkedList";

export function checkDoubleLinkedList() {
  let dll = new DoublyLinkedList(1);
  dll.append(2);
  dll.append(3);
  dll.append(4);
  dll.append(5);
  dll.append(8);
  dll.append(9);
  console.log("******* INITIAL LINKED LIST VALUES *******");
  dll.printList();

  dll.removeLast();
  console.log("******* AFTER DELETING LAST *******");
  dll.printList();

  dll.prepend(6);
  console.log("******* AFTER PREPENDING *******");
  dll.printList();

  dll.removeFirst();
  console.log("******* AFTER DELETING FIRST *******");
  dll.printList();

  console.log("******* GET VALUE AT INDEX : 2 *******");
  console.log(dll.get(2)!.value);

  console.log("******* SET VALUE of 62 AT INDEX : 1 *******");
  dll.set(1, 62);
  dll.printList();

  console.log("******* INSERT A NEW NODE AT INDEX : 3 *******");
  dll.insert(3, 45);
  dll.printList();

  console.log("******* REMOVE A NODE AT INDEX : 4 *******");
  dll.remove(4);
  dll.printList();
}
