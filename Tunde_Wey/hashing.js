class HashTable {
  constructor(size = 10) {
    this.size = size;
    this.table = new Array(size);
  }

  computeHash(value) {
    // Use a simple hash function that calculates the modulo of the value with the table size
    return value % this.size;
  }

  insert(value) {
    const key = this.computeHash(value);

    if (!this.table[key]) {
      this.table[key] = [];
    }

    this.table[key].push(value);
  }

  delete(value) {
    const key = this.computeHash(value);
    const bucket = this.table[key];

    if (bucket) {
      const index = bucket.indexOf(value);
      if (index !== -1) {
        bucket.splice(index, 1);
      }
    }
  }

  search(value) {
    const key = this.computeHash(value);
    const bucket = this.table[key];

    if (bucket) {
      return bucket.includes(value) ? value : null;
    }

    return null;
  }

  getIndex(value) {
    const key = this.computeHash(value);
    const bucket = this.table[key];

    if (bucket) {
      const index = bucket.indexOf(value);
      return index !== -1 ? index : null;
    }

    return null;
  }

  display() {
    for (let i = 0; i < this.size; i++) {
      const bucket = this.table[i];
      console.log(`Bucket ${i}: ${bucket ? bucket.join(", ") : ""}`);
    }
  }

  checkDistribution() {
    const distribution = new Array(this.size).fill(0);

    for (let i = 0; i < this.size; i++) {
      const bucket = this.table[i];
      distribution[i] = bucket ? bucket.length : 0;
    }

    return distribution;
  }

  hasGaps() {
    for (let i = 0; i < this.size; i++) {
      if (!this.table[i]) {
        return true;
      }
    }

    return false;
  }
}

// Example usage:
const hashTable = new HashTable();
hashTable.insert(5);
hashTable.insert(15);
hashTable.insert(25);
hashTable.insert(7);
hashTable.insert(17);
hashTable.insert(27);
hashTable.insert(8);
hashTable.insert(18);
hashTable.insert(28);
hashTable.delete(25);
console.log(hashTable.search(15)); // Output: 15
console.log(hashTable.getIndex(15)); // Output: 1
hashTable.display();
console.log(hashTable.checkDistribution());
console.log(hashTable.hasGaps());
