class QNode {
  val: any;
  next: QNode | null;
  constructor(val: any) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  first: any;
  last: any;
  length: number;
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  enqueue(val: any) {
    let newNode = new QNode(val);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let prevLast = this.last;
      prevLast.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this.length;
  }

  dequeue() {
    let prevFirst = this.first;
    if (this.length === 0) {
      return;
    } else if (this.length === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = prevFirst.next;
    }
    this.length--;
    return prevFirst.val;
  }
}

const queue = new Queue();

queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);

console.log(queue.dequeue());
console.log(queue);
// console.log(queue.dequeue());
