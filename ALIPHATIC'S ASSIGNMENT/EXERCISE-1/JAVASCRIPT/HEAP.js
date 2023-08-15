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

// Heap class

class Heap {
    constructor() {
        this.items = [];
        this.size = 0;
    }

    // heapify() - balance a heap
    heapify() {
        let i = Math.floor(this.size / 2 - 1);
        while (i >= 0) {
            this.percolateDown(i);
            i--;
        }
    }

    // insert(item) - add a new item to a heap
    insert(item) {
        this.items[this.size] = item;
        this.size++;
        this.percolateUp(this.size - 1);
    }

    // find(item) - returns the node containing search item.
    find(item) {
        for (let i = 0; i < this.size; i++) {
            if (this.items[i] === item) {
                return i;
            }
        }
        return -1;
    }

    // findParent(item) - returns parent of an item
    findParent(item) {
        let index = this.find(item);
        if (index === -1) {
            return -1;
        }
        return Math.floor((index - 1) / 2);
    }

    // findChildren(item) - returns children of an item
    findChildren(item) {
        let index = this.find(item);
        if (index === -1) {
            return -1;
        }
        let children = [];
        if (2 * index + 1 < this.size) {
            children.push(this.items[2 * index + 1]);
        }
        if (2 * index + 2 < this.size) {
            children.push(this.items[2 * index + 2]);
        }
        return children;
    }

    // remove(item) - remove an item
    remove(item) {
        let index = this.find(item);
        if (index === -1) {
            return -1;
        }
        this.items[index] = this.items[this.size - 1];
        this.size--;
        this.percolateDown(index);
    }

    // traverse() - print out values from top to down
    traverse() {
        for (let i = 0; i < this.size; i++) {
            console.log(this.items[i]);
        }
    }

    // heapsort() - sort the items of a heap
    heapsort() {
        let sorted = [];
        while (this.size > 0) {
            sorted.push(this
                .items[0]);
            this.items[0] = this.items[this.size - 1];
            this.size--;
            this.percolateDown(0);
        }
        return sorted;
    }

    // percolateUp() - move an item up in the heap
    percolateUp(index) {

        while (index > 0) {
            let parent = Math.floor((index - 1) / 2);
            if (this.items[index] <= this.items[parent]) {
                let temp = this.items[index];
                this.items[index] = this.items[parent];
                this.items[parent] = temp;
                index = parent;
            } else {
                break;
            }
        }
    }

    // percolateDown() - move an item down in the heap
    percolateDown(index) {
        let left = 2 * index + 1;
        let right = 2 * index + 2;
        let min = index;
        if (left < this.size && this.items[left] <= this.items[min]) {
            min = left;
        }
        if (right < this.size && this.items[right] <= this.items[min]) {
            min = right;
        }
        if (min !== index) {
            let temp = this.items[index];
            this.items[index] = this.items[min];
            this.items[min] = temp;
            this.percolateDown(min);
        }
    }
}
