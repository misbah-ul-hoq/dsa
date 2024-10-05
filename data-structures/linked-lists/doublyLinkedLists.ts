class DoublyNode {
  val: any;
  next: any;
  prev: any;
  constructor(val: any) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  head: any;
  tail: any;
  length: number;
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val: any) {
    let node = new DoublyNode(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
    return this;
  }
}

const doublyList = new DoublyLinkedList();
doublyList.push("something");
doublyList.push("something two");
doublyList.push("something three");
console.log(doublyList);
