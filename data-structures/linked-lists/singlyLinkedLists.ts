class Nodes {
  val: any;
  next: any;
  constructor(val: any) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  head: any;
  tail: any;
  length: number;
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val: any) {
    let node = new Nodes(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }
  pop() {
    if (this.length === 0) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  shift() {
    if (this.length === 0) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }
  unshift(val: any) {
    let newNode = new Nodes(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index: number) {
    if (index < 0 || index >= this.length) return undefined;
    let i = 0;
    let currentVal = this.head;
    while (i <= index) {
      if (i === index) {
        return currentVal;
      }
      currentVal = currentVal.next;
      i++;
    }
  }
}

const list = new SinglyLinkedList();

list.push("some value");
list.push("some value two");
list.push("some value three");
console.log(list.get(0));
// console.log(list);
