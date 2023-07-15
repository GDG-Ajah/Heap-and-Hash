class Hash {

    // using a prime number greater than 137
    #size = 149;

    #hashTable = new Array(this.#size).fill(null);

    /**
     * Computes a key which can be used to retrieve the value from the hash table.
     * 
     * @param {string} value 
     * @returns {number} the associated key for the given value
     */
    computeHash(value) {
        let key = 0;

        for (let i = 0; i < value.length; i++) {
            key += value.charCodeAt(i);
        }

        key %= this.#size;

        return key;
    }

    /**
     * Adds an item to the hash table.
     * 
     * @param {string} value 
     */
    insert(value) {
        const key = this.computeHash(value);

        this.#hashTable[key] = value;
    }

    /**
     * Removes an item from the hash table.
     * 
     * @param {string} item 
     */
    delete(item) {
        const key = this.computeHash(item);

        this.#hashTable[key] = null;
    }

    /**
     * Returns the item being searched for from the hash table.
     * 
     * @param {string} item 
     * @returns {string}
     */
    search(item) {
        const key = this.computeHash(item);

        return this.#hashTable[key];
    }

    /**
     * Gets the index of an item in the hash table.
     * 
     * @param {string} item 
     * @returns {number}
     */
    getIndex(item) {
        const key = this.computeHash(item);
        const value = this.#hashTable[key];

        return value !== null ? key : -1;
    }

    /**
     * Prints out the items in the hash table.
     */
    display() {
        let output = '';

        for (const item of this.#hashTable) {
            output += item !== null ? item + ', ' : '';
        }

        console.log(output);
    }

}

const hash = new Hash();

hash.insert('Football');
hash.insert('Volleyball');
hash.insert('Cricket');
hash.insert('Hockey');
hash.insert('Lacrosse');
hash.insert('Table tennis');
hash.delete('Ayobami');

console.log(hash.search('Ayoami'))
console.log(hash.getIndex('Ayobami'))

hash.display()
