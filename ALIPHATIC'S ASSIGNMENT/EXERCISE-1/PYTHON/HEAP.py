# EXERCISE 1 ON HEAP

# Implement a heap data structure storing numeric data in your chosen language with the following operations
# heapify() - balance a heap 
# insert(item) - add a new item to a heap
# find(item) - returns the node containing search item.
# findParent(item) - returns parent of an item
# findChildren(item) - returns children of an item
# remove(item) - remove an item
# traverse() - print out values from top to down
# heapsort() - sort the items of a heap



class Heap:
    def __init__(self):
        self.heap = []

    def heapify(self, arr):
        self.heap = arr
        for i in range(len(self.heap)//2, -1, -1):
            self.__min_heapify(i)

    def insert(self, item):
        self.heap.append(item)
        self.__percolate_up(len(self.heap)-1)

    def find(self, item):
        for i in range(len(self.heap)):
            if self.heap[i] == item:
                return i
        return -1

    def findParent(self, item):
        for i in range(len(self.heap)):
            if self.heap[i] == item:
                return self.heap[(i-1)//2]
        return -1

    def findChildren(self, item):
        for i in range(len(self.heap)):
            if self.heap[i] == item:
                return self.heap[2*i+1], self.heap[2*i+2]
        return -1

    def remove(self, item):
        for i in range(len(self.heap)):
            if self.heap[i] == item:
                self.heap[i], self.heap[-1] = self.heap[-1], self.heap[i]
                self.heap.pop()
                self.__min_heapify(i)
                return
        print("Item not found")

    def traverse(self):
        for i in self.heap:
            print(i, end=" ")
        print()

    def heapsort(self):
        for i in range(len(self.heap)-1, -1, -1):
            self.heap[0], self.heap[i] = self.heap[i], self.heap[0]
            self.__min_heapify(0, i-1)

    def __percolate_up(self, index):
        parent = (index-1)//2
        if index <= 0:
            return
        elif self.heap[parent] > self.heap[index]:
            self.heap[parent], self.heap[index] = self.heap[index], self.heap[parent]
            self.__percolate_up(parent)

    def __min_heapify(self, index, size=None):
        if size is None:
            size = len(self.heap)-1
        left = 2*index+1
        right = 2*index+2
        smallest = index
        if left <= size and self.heap[left] < self.heap[index]:
            smallest = left
        if right <= size and self.heap[right] < self.heap[smallest]:
                smallest = right
        if smallest != index:
            self.heap[index], self.heap[smallest] = self.heap[smallest], self.heap[index]
            self.__min_heapify(smallest, size)


if __name__ == "__main__":
    heap = Heap()
    heap.heapify([1, 2, 3, 4, 5, 6, 7, 8, 9])
    heap.insert(10)
    heap.insert(11)
    heap.insert(12)
    heap.insert(13)
    heap.insert(14)
    heap.insert(15)
    heap.insert(16)
    heap.insert(17)
    heap.insert(18)
    heap.insert
    heap.traverse()
    heap.remove(10)
    heap.traverse()
    heap.heapsort()
    heap.traverse()
    print(heap.find(10))
    print(heap.findParent(10))
    print(heap.findChildren(10))



        
                                   
                                