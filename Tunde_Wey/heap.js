class MinHeap {
  constructor() {
    this.heap = [];
  }

  heapify() {
    const n = this.heap.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      this.heapifyDown(i);
    }
  }

  heapifyDown(index) {
    const n = this.heap.length;
    let smallest = index;
    const left = 2 * index + 1;
    const right = 2 * index + 2;

    if (left < n && this.heap[left] < this.heap[smallest]) {
      smallest = left;
    }

    if (right < n && this.heap[right] < this.heap[smallest]) {
      smallest = right;
    }

    if (smallest !== index) {
      this.swap(index, smallest);
      this.heapifyDown(smallest);
    }
  }

  insert(item) {
    this.heap.push(item);
    this.heapifyUp(this.heap.length - 1);
  }

  heapifyUp(index) {
    const parent = Math.floor((index - 1) / 2);
    if (index > 0 && this.heap[index] < this.heap[parent]) {
      this.swap(index, parent);
      this.heapifyUp(parent);
    }
  }

  find(item) {
    const index = this.heap.indexOf(item);
    return index !== -1 ? index : null;
  }

  findParent(item) {
    const index = this.find(item);
    if (index !== null && index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      return this.heap[parentIndex];
    }
    return null;
  }

  findChildren(item) {
    const index = this.find(item);
    if (index !== null) {
      const leftIndex = 2 * index + 1;
      const rightIndex = 2 * index + 2;
      const leftChild =
        this.heap[leftIndex] !== undefined ? this.heap[leftIndex] : null;
      const rightChild =
        this.heap[rightIndex] !== undefined ? this.heap[rightIndex] : null;
      return [leftChild, rightChild];
    }
    return null;
  }

  remove(item) {
    const index = this.find(item);
    if (index !== null) {
      this.swap(index, this.heap.length - 1);
      this.heap.pop();
      this.heapifyDown(index);
    }
  }

  swap(i, j) {
    const temp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = temp;
  }

  traverse() {
    return this.heap;
  }

  heapsort() {
    const sorted = [];
    const heapCopy = [...this.heap];

    while (heapCopy.length) {
      sorted.push(heapCopy[0]);
      this.swap(0, heapCopy.length - 1);
      heapCopy.pop();
      this.heapifyDown(0);
    }

    return sorted;
  }
}

// Example usage:
const heap = new MinHeap();
heap.insert(5);
heap.insert(3);
heap.insert(8);
heap.insert(2);
heap.insert(1);
console.log(heap.traverse()); // Output: [1, 2, 8, 5, 3]
console.log(heap.find(8)); // Output: 2
console.log(heap.findParent(8)); // Output: 1
console.log(heap.findChildren(8)); // Output: [5, 3]
heap.remove(2);
console.log(heap.traverse()); // Output: [1, 3, 8, 5]
console.log(heap.heapsort()); // Output: [1, 3, 5, 8]
