// Exercise 2 on Hashing

// Implement a hash data structure in your chosen language with the following operations
// computeHash(value) - compute and return a key for a given value. Use any algorithm of your choice
// insert(value) - add item 
// delete(item) - delete an item from a list
// search(item) - returns item
// getIndex(item) - returns the index of an item
// display() - print out each item in the hash table


// Hash class
class Hash {
    // Properties
    private table: any[];
    private size: number;

    // Constructor
    constructor(size: number) {
        this.table = new Array(size);
        this.size = size;
    }

    // Hash function
    private computeHash(value: string): number {
        let hash = 0;
        for (let i = 0; i < value.length; i++) {
            hash += value.charCodeAt(i);
        }
        return hash % this.size;
    }

    // Insert function
    public insert(value: string): void {
        let index = this.computeHash(value);
        if (this.table[index]) {
            this.table[index].push(value);
        } else {
            this.table[index] = [value];
        }
    }

    // Delete function
    public delete(value: string): void {
        let index = this.computeHash(value);
        if (this.table[index]) {
            let pos = this.table[index].indexOf(value);
            if (pos > -1) {
                this.table[index].splice(pos, 1);
            }
        }
    }

    // Search function
    public search(value: string): boolean {
        let index = this.computeHash(value);
        if (this.table[index]) {
            return this.table[index].indexOf(value) > -1;
        } else {
            return false;
        }
    }

    // Get index function
    public getIndex(value: string): number {
        let index = this.computeHash(value);
        if (this.table[index]) {
            return this.table[index].indexOf(value);
        } else {
            return -1;
        }
    }

    // Display function
    public display(): void {
        for (let i = 0; i < this.size; i++) {
            if (this.table[i]) {
                console.log(i + " -> " + this.table[i].join(', '));
            }
        }
    }
}



