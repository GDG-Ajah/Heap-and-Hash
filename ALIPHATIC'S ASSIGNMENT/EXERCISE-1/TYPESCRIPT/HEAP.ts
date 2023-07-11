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


class Heap {
    private heap: number[];
    constructor() {
        this.heap = [];
    }

    //heapify() - balance a heap 
    heapify() {
        let i = this.heap.length - 1;
        while (i > 0) {
            let parent = Math.floor((i - 1) / 2);
            if (this.heap[i] > this.heap[parent]) {
                let temp = this.heap[i];
                this.heap[i] = this.heap[parent];
                this.heap[parent] = temp;
            }
            i--;
        }
    }

    //insert(item) - add a new item to a heap
    insert(item: number) {
        this.heap.push(item);
        this.heapify();
    }

    //find(item) - returns the node containing search item.
    find(item: number) {
        let i = 0;
        while (i < this.heap.length) {
            if (this.heap[i] == item) {
                return this.heap[i];
            }
            i++;
        }
        return -1;
    }

    //findParent(item) - returns parent of an item
    findParent(item: number) {
        let i = 0;
        while (i < this.heap.length) {
            if (this.heap[i] == item) {
                return this.heap[Math.floor((i - 1) / 2)];
            }
            i++;
        }
        return -1;
    }

    //findChildren(item) - returns children of an item
    findChildren(item: number) {
        let i = 0;
        while (i < this.heap.length) {
            if (this.heap[i] == item) {
                let children = [];
                if (2 * i + 1 < this.heap.length) {
                    children.push(this.heap[2 * i + 1]);
                }
                if (2 * i + 2 < this.heap.length) {
                    children.push(this.heap[2 * i + 2]);
                }
                return children;
            }
            i++;
        }
        return -1;
    }
    
    //remove(item) - remove an item
    remove(item: number) {
        let i = 0;
        while (i < this.heap.length) {
            if (this.heap[i] == item) {
                this.heap[i] = this.heap[this.heap.length - 1];
                this.heap.pop();
                this.heapify();
                return;
            }
            i++;
        }
    }

    //traverse() - print out values from top to down
    traverse() {
        let i = 0;
        while (i < this.heap.length) {
            console.log(this.heap[i]);
            i++;
        }
    }

    //heapsort() - sort the items of a heap
    heapsort() {
        let sorted = [];
        while (this.heap.length > 0) {
            sorted.push(this.heap[0]);
            this.heap[0] = this.heap[this.heap.length - 1];
            this.heap.pop();
            this.heapify();
        }
        return sorted;
    }

}

