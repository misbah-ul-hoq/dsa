"use strict";
class PriorityQueueNode {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}
class PriorityQueue {
    constructor() {
        this.values = [];
        this.values = [];
    }
    enqueue(val, priority) {
        let newNode = new PriorityQueueNode(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }
    bubbleUp() {
        let index = this.values.length - 1;
        let element = this.values[index];
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.values[parentIndex];
            if (element.priority >= parent.priority)
                break;
            this.values[parentIndex] = element;
            this.values[index] = parent;
            index = parentIndex;
        }
    }
    dequeue() {
        let min = this.values[0];
        let end = this.values.pop();
        if (this.values.length)
            this.values[0] = end;
        this.sinkDown();
        return min;
    }
    sinkDown() {
        let index = 0;
        const length = this.values.length;
        const element = this.values[0];
        while (true) {
            let leftChildIndex = index * 2 + 1;
            let rightChildIndex = index * 2 + 2;
            let leftChild, rightChild, swap;
            if (leftChildIndex < length) {
                leftChild = this.values[leftChildIndex];
                if (element.priority > leftChild.priority) {
                    swap = leftChildIndex;
                }
            }
            if (rightChildIndex < length) {
                rightChild = this.values[rightChildIndex];
                if ((!swap && rightChild.priority < element.priority) ||
                    (swap && rightChild.priority < leftChild.priority)) {
                    swap = rightChildIndex;
                }
            }
            if (!swap)
                break;
            this.values[index] = this.values[swap];
            this.values[swap] = element;
            index = swap;
        }
    }
}
const priorityQueue = new PriorityQueue();
priorityQueue.enqueue("Second Priority", 2);
priorityQueue.enqueue("First", 1);
priorityQueue.enqueue("Fourth", 4);
priorityQueue.enqueue("Third", 3);
priorityQueue.enqueue("Fifth", 5);
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
