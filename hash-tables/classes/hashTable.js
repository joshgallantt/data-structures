const LinkedList = require("./linkedList");

module.exports = class HashTable {
  constructor(size = Infinity) {
    this.size = size;
    this.buckets = Array(this.size);
    console.log("Hash Table Created with a size of", this.size);
  }

  /**
   * It takes a string, adds up the character codes of each character in the string, adds 3 to that sum,
   * and then returns the remainder of that sum divided by the size of the hash table
   * @param key - the key of the key-value pair that we're adding to the hash table
   * @returns The hashed key is being returned.
   */
  hash(key) {
    let hashedKey = 0;
    for (let i = 0; i < key.length; i++) {
      hashedKey += key.charCodeAt(i);
    }
    return (hashedKey + 3) % this.size;
  }

  /**
   * We're going to take the key, hash it, and then write the data to the linked list at the index of the
   * hash
   * @param key - the key to be hashed
   * @param data - the data to be stored in the hash table
   */
  add(key, data) {
    let idx = this.hash(key);
    if (!this.buckets[idx]) {
      this.buckets[idx] = new LinkedList();
    }
    this.buckets[idx].write({ key: key, data: data });
    console.log(`WROTE ${data} to [${idx}]`);
  }
  /**
   * We're going to delete the data at the index of the key we pass in
   * @param key - The key to be deleted
   */
  remove(key) {
    let idx = this.hash(key);
    if (!this.buckets[idx]) {
      console.log(`REMOVE FAILED: Unable to find data with key: ${key}`);
      return;
    }
    const deletedData = this.buckets[idx].delete(key);
    /* If the linked list is now empty, delete it from the bucket */
    if (this.buckets[idx].head === null) {
      delete this.buckets[idx];
    }
    console.log("DELETE SUCCESS: ", deletedData);
  }
  /**
   * We use the hash function to find the index of the bucket that the data is in, then we use the search
   * function of the linked list to find the data
   * @param key - The unique key of the data you want to search for
   * @returns The data that is being searched for.
   */
  search(key) {
    let idx = this.hash(key);
    if (this.buckets[idx] === undefined) {
      console.log(`SEARCH FAILED: Unable to find data with key: ${key}`);
      return null;
    } else {
      const searchData = this.buckets[idx].search(key);
      console.log("DATA FOUND: ", searchData);
    }
  }
  print() {
    this.buckets.forEach((bucket, index) => {
      console.log(bucket, index);
    });
  }
};
