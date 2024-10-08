"use strict";
class SNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    push(val) {
        let newNode = new SNode(val);
        if (this.length === 0) {
            this.first = newNode;
            this.last = this.first;
        }
        else {
            let prevFirst = this.first;
            this.first = newNode;
            this.first.next = prevFirst;
        }
        this.length++;
        return this.length;
    }
    pop() {
        let poppedItem = this.first;
        if (this.length === 0) {
            return;
        }
        else {
            this.first = poppedItem.next;
        }
        this.length--;
        return poppedItem.val;
    }
}
const stack = new Stack();
// stack.push(1);
// stack.push(2);
// stack.push(3);
// stack.push(4);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
// console.log(stack.first.next);
