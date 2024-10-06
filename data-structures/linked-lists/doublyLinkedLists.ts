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

  pop() {
    if (this.length === 0) {
      return;
    } else if (this.length === 1) {
      this.length--;
      this.head = null;
      this.tail = null;
      return this;
    }
    var temp = this.tail;
    this.tail = temp.prev;
    this.tail.next = null;
    temp.prev = null;
    this.length--;
    return temp;
  }

  shift() {
    let removedNode = this.head;
    if (this.length === 0) {
      return undefined;
    } else if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = removedNode.next;
      this.head.prev = null;
      removedNode.next = null;
    }
    this.length--;
    return removedNode;
  }

  unshift(val: any) {
    let newNode = new DoublyNode(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
}

const doublyList = new DoublyLinkedList();
// doublyList.push("something");
// doublyList.push("something two");
// doublyList.push("something three");
// doublyList.push("something four");
doublyList.unshift("should be at the tails");
doublyList.unshift("should be at the begininning");
console.log(doublyList.head.next.prev);
