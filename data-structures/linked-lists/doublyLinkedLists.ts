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

  get(index: number) {
    let currentElement;
    if (index < 0 || index === this.length) {
      return;
    } else if (index <= this.length / 2) {
      currentElement = this.head;
      for (let i = 0; i <= index; i++) {
        if (i === index) {
          return currentElement;
        } else {
          currentElement = currentElement.next;
        }
      }
    } else {
      currentElement = this.tail;
      for (let i = this.length - 1; i >= index; i--) {
        if (i === index) {
          return currentElement;
        } else {
          currentElement = currentElement.prev;
        }
      }
    }
  }

  set(index: number, val: any) {
    let oldNode = this.get(index);
    if (!oldNode) return false;
    oldNode.val = val;
    return true;
  }
}

const doublyList = new DoublyLinkedList();
doublyList.push(1);
doublyList.push(2);
doublyList.push(3);
doublyList.push(4);
doublyList.push(5);
doublyList.push(6);

console.log(doublyList.set(1, "two"));
console.log(doublyList.head.next);
