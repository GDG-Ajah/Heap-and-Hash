// Exercise 2 on Hashing

// Implement a hash data structure in your chosen language with the following operations
// computeHash(value) - compute and return a key for a given value. Use any algorithm of your choice
// insert(value) - add item 
// delete(item) - delete an item from a list
// search(item) - returns item
// getIndex(item) - returns the index of an item
// display() - print out each item in the hash table


// Hash Table Class
class HashTable {
    constructor(size) {
        this.size = size;
        this.buckets = new Array(size);
    }

    // Hash Function
    hash(key) {
        return key.toString().length % this.size;
    }

    // Insert Function
    insert(key, value) {
        let index = this.hash(key);
        if (!this.buckets[index]) {
            this.buckets[index] = [];
        }
        this.buckets[index].push([key, value]);
        return index;
    }

    // Search Function
    search(key) {
        let index = this.hash(key);
        if (!this.buckets[index]) {
            return null;
        }
        for (let bucket of this.buckets[index]) {
            if (bucket[0] === key) {
                return bucket[1];
            }
        }
    }

    // Delete Function
    delete(key) {
        let index = this.hash(key);
        if (!this.buckets[index]) {
            return null;
        }
        for (let i = 0; i < this.buckets[index].length; i++) {
            if (this.buckets[index][i][0] === key) {
                let deleted = this.buckets[index][i];
                this.buckets[index].splice(i, 1);
                return deleted;
            }
        }
    }

    // Get Index Function
    getIndex(key) {
        let index = this.hash(key);
        if (!this.buckets[index]) {
            return null;
        }
        for (let i = 0; i < this.buckets[index].length; i++) {
            if (this.buckets[index][i][0] === key) {
                return index;
            }
        }
    }

    // Display Function
    display() {
        for (let i = 0; i < this.buckets.length; i++) {
            if (this.buckets[i]) {
                console.log(i, this.buckets[i]);
            }
        }
    }
}

// Create a new Hash Table

let hashTable = new HashTable(10);

// Insert Values

hashTable.insert('a', 'alpha');
hashTable.insert('b', 'beta');
hashTable.insert('c', 'gamma');
hashTable.insert('d', 'delta');
hashTable.insert('e', 'epsilon');
hashTable.insert('f', 'zeta');
hashTable.insert('g', 'eta');


