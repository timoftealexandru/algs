
//Implement an algorithm to find the kth to last element of a singly linked list.
class LinkedListNode {
  constructor() {
   this.data = null;
   this.next = null;
  }
}

class Main {

  nthToLast(head, k) {
      if (head === null) {
          return 0;
      }
      let i = this.nthToLast(head.next, k) + 1;

      if (i === k) {
        console.log(head.data);
      }
      return i;
  }

  run() {
    let head = new LinkedListNode();
    let n2 = new LinkedListNode();
    let n3 = new LinkedListNode();
    let n4 = new LinkedListNode();
    let n5 = new LinkedListNode();
    let tail = new LinkedListNode();
    head.next=n2;
    n2.data = Number.MAX_SAFE_INTEGER;
    n2.next=n3;
    n3.data=20;
    n3.next=n4;
    n4.data=30;
    n4.next=n5;
    n5.data=40;
    n5.next=tail;


    this.nthToLast(head, 5)

  }
}
