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
}

const heap = new MaxBinaryHeap();

heap.insert(15);
heap.insert(20);
heap.insert(30);
heap.insert(35);
console.log(heap);