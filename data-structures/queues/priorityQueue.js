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
            if (element.priority <= parent.priority)
                break;
            this.values[parentIndex] = element;
            this.values[index] = parent;
            index = parentIndex;
        }
    }
}
const priorityQueue = new PriorityQueue();
priorityQueue.enqueue("Morium", 2);
priorityQueue.enqueue("Fatema", 1);
priorityQueue.enqueue("Tabassum", 4);
priorityQueue.enqueue("Tripty", 3);
console.log(priorityQueue);
