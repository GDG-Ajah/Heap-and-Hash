/* EXERCISE 1 ON HEAP

Implement a heap data structure storing numeric data in your chosen language with the following operations
heapify() - balance a heap 
insert(item) - add a new item to a heap
find(item) - returns the node containing search item.
findParent(item) - returns parent of an item
findChildren(item) - returns children of an item
remove(item) - remove an item
traverse() - print out values from top to down
heapsort() - sort the items of a heap
*/

import 'dart:io';

class Heap {
  List<int> heap = [];
  int size = 0;

  void heapify() {
    for (int i = size ~/ 2; i >= 1; i--) {
      heapifyDown(i);
    }
  }

  void heapifyDown(int index) {
    int left = 2 * index;
    int right = 2 * index + 1;
    int smallest = index;

    if (left <= size && heap[left] < heap[index]) {
      smallest = left;
    }

    if (right <= size && heap[right] < heap[smallest]) {
      smallest = right;
    }

    if (smallest != index) {
      swap(index, smallest);
      heapifyDown(smallest);
    }
  }

  void insert(int item) {
    heap.add(item);
    size++;
    heapify();
  }

  int find(int item) {
    for (int i = 1; i <= size; i++) {
      if (heap[i] == item) {
        return i;
      }
    }
    return -1;
  }

  int findParent(int item) {
    int index = find(item);
    if (index == -1) {
      return -1;
    }
    return heap[index ~/ 2];
  }

  List<int> findChildren(int item) {
    int index = find(item);
    if (index == -1) {
      return [];
    }
    List<int> children = [];
    if (2 * index <= size) {
      children.add(heap[2 * index]);
    }
    if (2 * index + 1 <= size) {
      children.add(heap[2 * index + 1]);
    }
    return children;
  }

  void remove(int item) {
    int index = find(item);
    if (index == -1) {
      return;
    }
    swap(index, size);
    heap.removeLast();
    size--;
    heapify();
  }

  void traverse() {
    for (int i = 1; i <= size; i++) {
      stdout.write(heap[i].toString() + " ");
    }
    stdout.write("\n");
  }

  void heapsort() {
    for (int i = size; i >= 1; i--) {
      swap(1, i);
      size--;
      heapify();
    }
  }

  void swap(int i, int j) {
    int temp = heap[i];
    heap[i] = heap[j];
    heap[j] = temp;
  }
}

void main() {
  Heap heap = Heap();
  heap.insert(5);
  heap.insert(3);
  heap.insert(7);
  heap.insert(1);
  heap.insert(2);
  heap.insert(6);
  heap.insert(4);
  heap.traverse();
  heap.remove(3);
  heap.traverse();
  print(heap.find(6));
  print(heap.findParent(6));
  print(heap.findChildren(6));
  heap.heapsort();
  heap.traverse();
}

