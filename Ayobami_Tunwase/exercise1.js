class Heap {
    #data = []

    /**
     * Swaps two elements in an array using their indexes.
     * 
     * @param {number} i index of the first element to be swapped
     * @param {number} j index of the second element to be swapped
     */
    #swap(i, j) {
        [this.#data[i], this.#data[j]] = [this.#data[j], this.#data[i]];
    }

    /**
     * Balances a heap.
     * 
     * @param {number[]} arr 
     * @param {number} heapSize 
     * @param {number} i 
     */
    heapify(arr = this.#data, heapSize = this.#data.length, i = Math.floor(this.#data.length / 2) - 1) {
        let max = i;
        let leftChild = (2 * i) + 1;
        let rightChild = (2 * i) + 2;

        if (leftChild < heapSize && arr[i] < arr[leftChild]) {
            max = leftChild;
        } else {
            max = i;
        }

        if (rightChild < heapSize && arr[max] < arr[rightChild]) {
            max = rightChild;
        }

        if (i !== max) {
            this.#swap(i, max);

            this.heapify(arr, heapSize, max);
        }
    }

    /**
     * Heapifies the heap to ensure it obeys the max-heap property.
     */
    #maxHeapify() {
        // the initial value of i is the index of the last non-leaf node (the rightmost one)
        for (let i = Math.floor(this.#data.length / 2) - 1; i >= 0; i--) {
            this.heapify(this.#data, this.#data.length, i);
        }
    }

    /**
     * Adds a new item to the heap.
     * 
     * @param {number} item 
     */
    insert(item) {
        this.#data.push(item);

        if (this.#data.length > 1) {

            this.#maxHeapify();
        }
    }

    /**
     * 
     * @param {number} item 
     * @returns {number} the index of the 'node' containing the search item
     */
    find(item) {
        // this or that
        // const index = this.#data.findIndex((element) => element === item);
        // return index;

        let i;
        for (i = 0; i < this.#data.length; i++) {
            if (this.#data[i] === item) {
                return i;
            }
        }

        return -1;
    }

    /**
     * 
     * @param {number} item 
     * @returns {number} the parent of an item
     */
    findParent(item) {
        const childIndex = this.find(item);

        // calculates the parent index using the appropriate formulas
        // depending on whether it is a left node or right node
        const parentIndex = childIndex % 2 === 1 ?
            Math.floor(childIndex / 2) :
            (childIndex / 2) - 1;

        return this.#data[parentIndex] ?? null;
    }

    /**
     * 
     * @param {number} item 
     * @returns {number[]} the children of an item
     */
    findChildren(item) {
        const parentIndex = this.find(item);

        const children = [];

        if (parentIndex !== -1) {

            // checks if the parent is not a leaf node
            if (parentIndex < Math.floor(this.#data.length / 2)) {

                let currentChildIndex = (2 * parentIndex) + 1;

                while (currentChildIndex < this.#data.length && children.length < 2) {
                    children.push(this.#data[currentChildIndex]);

                    currentChildIndex++;
                }
            }
        }

        return children;
    }

    /**
     * Removes an item from the heap.
     * 
     * @param {number} item 
     */
    remove(item) {

        let index = this.find(item);

        // if the element was found
        if (index !== -1) {
            // swap the node to be deleted with the last element
            this.#swap(index, this.#data.length - 1);

            this.#data.pop();
            this.#maxHeapify();
        }

    }

    /**
     * Prints out the values of the heap from top to bottom.
     */
    traverse() {
        // the heap is already a max-heap at this point
        console.log(this.#data);
    }

    /**
     * Sorts the items of the heap.
     */
    heapSort() {
        for (let i = this.#data.length - 1; i >= 0; i--) {
            this.#swap(i, 0);

            this.heapify(this.#data, i, 0);
        }
    }
}

const heap = new Heap();

for (let i = 1; i <= 30; i++) {
    heap.insert(i);
}

console.log(heap.findChildren(30));
console.log(heap.findChildren(29));
console.log(heap.findChildren(28));
console.log(heap.findChildren(24));

console.log(heap.findParent(30));
console.log(heap.findParent(11));

heap.remove(29)

heap.traverse();

heap.heapSort();
heap.traverse();

heap.insert(31);
heap.traverse();