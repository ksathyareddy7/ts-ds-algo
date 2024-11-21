export class Heap {
  heap: number[] = [];

  getHeap() {
    return [...this.heap];
  }

  parent(index: number) {
    return Math.floor((index - 1) / 2);
  }

  leftChild(index: number) {
    return index * 2 + 1;
  }

  rightChild(index: number) {
    return index * 2 + 2;
  }

  swap(index1: number, index2: number) {
    let temp = this.heap[index1];
    this.heap[index1] = this.heap[index2];
    this.heap[index2] = temp;
  }

  insert(value: number) {
    this.heap.push(value);
    let currentIndex = this.heap.length - 1;

    while (
      currentIndex > 0 &&
      this.heap[currentIndex] > this.heap[this.parent(currentIndex)]
    ) {
      this.swap(currentIndex, this.parent(currentIndex));
      currentIndex = this.parent(currentIndex);
    }
  }

  sinkDown(index: number) {
    let maxIndex = index;
    while (true) {
      let leftIndex = this.leftChild(index);
      let rightIndex = this.rightChild(index);

      if (
        leftIndex < this.heap.length &&
        this.heap[leftIndex] > this.heap[maxIndex]
      ) {
        maxIndex = leftIndex;
      }

      if (
        rightIndex < this.heap.length &&
        this.heap[rightIndex] > this.heap[maxIndex]
      ) {
        maxIndex = rightIndex;
      }

      if (maxIndex != index) {
        this.swap(index, maxIndex);
        index = maxIndex;
      } else {
        debugger;
        return;
      }
    }
  }

  remove() {
    if (this.heap.length === 0) {
      return null;
    }
    if (this.heap.length === 1) {
      return this.heap.pop();
    }
    let maxValue = this.heap[0];
    this.heap[0] = this.heap.pop()!;
    this.sinkDown(0);
    return maxValue;
  }
}
