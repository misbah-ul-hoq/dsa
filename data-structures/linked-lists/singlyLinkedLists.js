"use strict";
class Nodes {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let node = new Nodes(val);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        }
        else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this;
    }
}
const list = new SinglyLinkedList();
list.push("some value");
// console.log(list.push("some value two"));
list.push("some value three");
list.push("some value four");
console.log(list.head.next);
