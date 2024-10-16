function swap(arr: any[], index1: any, index2: any) {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
}

class MaxBinaryHeap {
  values: any[];
  constructor() {
    this.values = [];
  }

  insert(val: any) {
    this.values.push(val);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.values.length - 1;
    let element = this.values[index];
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];
      if (element <= parent) break;
      this.values[index] = parent;
      this.values[parentIndex] = element;
      index = parentIndex;
    }
  }

  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length) this.values[0] = end;
    this.sinkDown();
    return max;
  }

  sinkDown() {
    let index = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null; // [22, 25, 23]
      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        if (leftChild > element) {
          swap = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        if (
          (!swap && rightChild > element) ||
          (swap && rightChild > leftChild)
        ) {
          swap = rightChildIndex;
        }
      }
      if (!swap) break;
      this.values[index] = this.values[swap];
      this.values[swap] = element;
      index = swap;
    }
  }
}

const heap = new MaxBinaryHeap();

heap.insert(15);
heap.insert(20);
heap.insert(30);
heap.insert(45);
heap.insert(35);
heap.insert(65);
heap.insert(33);

console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap);
