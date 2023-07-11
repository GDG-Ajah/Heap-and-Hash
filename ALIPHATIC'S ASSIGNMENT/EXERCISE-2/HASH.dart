// Exercise 2 on Hashing

// Implement a hash data structure in your chosen language with the following operations
// computeHash(value) - compute and return a key for a given value. Use any algorithm of your choice
// insert(value) - add item 
// delete(item) - delete an item from a list
// search(item) - returns item
// getIndex(item) - returns the index of an item
// display() - print out each item in the hash table


import 'dart:io';

class HashTable {
  List<String> table;
  int size;
  HashTable(int size) {
    this.size = size;
    table = new List<String>(size);
  }

  int computeHash(String value) {
    int hash = 0;
    for (int i = 0; i < value.length; i++) {
      hash = hash + value.codeUnitAt(i);
    }
    return hash % size;
  }

  void insert(String value) {
    int index = computeHash(value);
    if (table[index] == null) {
      table[index] = value;
    } else {
      print("Collision detected at $index");
      int i = 1;
      while (table[index] != null) {
        index = (index + i * i) % size;
        i++;
      }
      table[index] = value;
    }
  }

  void delete(String value) {
    int index = computeHash(value);
    if (table[index] == value) {
      table[index] = null;
    } else {
      int i = 1;
      while (table[index] != value && table[index] != null) {
        index = (index + i * i) % size;
        i++;
      }
      if (table[index] == value) {
        table[index] = null;
      }
    }
  }

  int getIndex(String value) {
    int index = computeHash(value);
    if (table[index] == value) {
      return index;
    } else {
      int i = 1;
      while (table[index] != value && table[index] != null) {
        index = (index + i * i) % size;
        i++;
      }
      if (table[index] == value) {
        return index;
      }
    }
    return -1;
  }

  void search(String value) {
    int index = computeHash(value);
    if (table[index] == value) {
      print("$value found at index $index");
    } else {
      int i = 1;
      while (table[index] != value && table[index] != null) {
        index = (index + i * i) % size;
        i++;
      }
      if (table[index] == value) {
        print("$value found at index $index");
      } else {
        print("$value not found");
      }
    }
  }

  void display() {
    for (int i = 0; i < size; i++) {
      if (table[i] != null) {
        print("Index $i: ${table[i]}");
      }
    }
  }
}

