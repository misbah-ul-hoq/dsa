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
    pop() {
        if (this.length === 0)
            return undefined;
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
        if (this.length === 0)
            return undefined;
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return currentHead;
    }
    unshift(val) {
        let newNode = new Nodes(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }
        else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(index) {
        if (index < 0 || index >= this.length)
            return undefined;
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
    set(index, value) {
        if (index < 0 || index >= this.length)
            return undefined;
        let i = 0;
        let currentValue = this.get(index);
        currentValue.val = value;
        return this;
    }
    insert(index, value) {
        if (index < 0 || index > this.length)
            return false;
        if (index === 0) {
            this.unshift(value);
        }
        else if (index === this.length) {
            this.push(value);
        }
        else {
            let newNode = new Nodes(value);
            let previous = this.get(index - 1);
            let next = this.get(index);
            previous.next = newNode;
            newNode.next = next;
            this.length++;
        }
        return true;
    }
}
const list = new SinglyLinkedList();
{
}
list.push("some value");
list.push("some value two");
list.push("some value three");
list.insert(1, "between two and three");
console.log(list);
// console.log(list);
