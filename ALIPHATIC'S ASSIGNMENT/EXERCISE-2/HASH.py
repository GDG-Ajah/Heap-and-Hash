# Exercise 2 on Hashing

# Implement a hash data structure in your chosen language with the following operations
# computeHash(value) - compute and return a key for a given value. Use any algorithm of your choice
# insert(value) - add item 
# delete(item) - delete an item from a list
# search(item) - returns item
# getIndex(item) - returns the index of an item
# display() - print out each item in the hash table



class HashTable:
    def __init__(self):
        self.size = 11
        self.slots = [None] * self.size
        self.data = [None] * self.size
    
    def hashfunction(self,key,size):
        return key%size
    
    def rehash(self,oldhash,size):
        return (oldhash+1)%size
    
    def put(self,key,data):
        hashvalue = self.hashfunction(key,len(self.slots))
        
        if self.slots[hashvalue] == None:
            self.slots[hashvalue] = key
            self.data[hashvalue] = data
        
        else:
            if self.slots[hashvalue] == key:
                self.data[hashvalue] = data
            
            else:
                nextslot = self.rehash(hashvalue,len(self.slots))
                
                while self.slots[nextslot] != None and self.slots[nextslot] != key:
                    nextslot = self.rehash(nextslot,len(self.slots))
                
                if self.slots[nextslot] == None:
                    self.slots[nextslot] = key
                    self.data[nextslot] = data
                
                else:
                    self.data[nextslot] = data
    
    def get(self,key):
        startslot = self.hashfunction(key,len(self.slots))
        
        data = None
        stop = False
        found = False
        position = startslot
        
        while self.slots[position] != None and not found and not stop:
            if self.slots[position] == key:
                found = True
                data = self.data[position]
            
            else:
                position = self.rehash
                if position == startslot:
                    stop = True

        return data
    
    def __getitem__(self,key):
        return self.get(key)

    def __setitem__(self,key,data):
        self.put(key,data)

def main():
