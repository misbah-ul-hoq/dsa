"use strict";
class DoublyNode {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let node = new DoublyNode(val);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        }
        else {
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
        }
        else if (this.length === 1) {
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
        }
        else if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        else {
            this.head = removedNode.next;
            this.head.prev = null;
            removedNode.next = null;
        }
        this.length--;
        return removedNode;
    }
}
const doublyList = new DoublyLinkedList();
doublyList.push("something");
doublyList.push("something two");
doublyList.push("something three");
doublyList.push("something four");
console.log(doublyList.shift());
console.log(doublyList.shift());
console.log(doublyList.shift());
console.log(doublyList.shift());
// console.log(doublyList.shift());
console.log(doublyList);
