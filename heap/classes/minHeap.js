module.exports = class MinHeap {
  constructor() {
    this.heap = [null];
    this.size = 0;
  }
  getParent = (current) => Math.floor(current / 2);
  getLeft = (current) => current * 2;
  getRight = (current) => current * 2 + 1;

  add(value) {
    this.heap.push(value);
    this.size++;
    this.bubbleUp();
  }

  /**
   * If the parent is greater than the child, swap them.
   */

  bubbleUp() {
    let current = this.size;
    while (
      current > 1 &&
      this.heap[this.getParent(current)] > this.heap[current]
    ) {
      this.swap(current, this.getParent(current));
      current = this.getParent(current);
    }
  }

  /**
   * We remove the root node, replace it with the last node in the heap, and then heapify the heap
   * @returns The minimum value in the heap.
   */
  popMin() {
    if (this.size === 0) {
      return null;
    }
    const min = this.heap[1];
    this.heap[1] = this.heap[this.size];
    this.size--;
    this.heap.pop();
    this.heapify();
    return min;
  }

  /**
   * If the current node is greater than either of its children, then we can swap
   * @param current - The index of the current node
   * @param leftChild - The index of the left child of the current node
   * @param rightChild - The index of the right child of the current node
   * @returns a boolean value.
   */
  canSwap(current, leftChild, rightChild) {
    return (
      (this.exists(leftChild) && this.heap[current] > this.heap[leftChild]) ||
      (this.exists(rightChild) && this.heap[current] > this.heap[rightChild])
    );
  }

  /**
   * It swaps the values of two indices in the heap
   * @param a - the index of the first element
   * @param b - the index of the parent node
   */
  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  exists(index) {
    return index <= this.size;
  }

  /**
   * While the current node is greater than either of its children, swap it with the smaller of the two
   * children.
   */
  heapify() {
    let current = 1;
    let leftChild = this.getLeft(current);
    let rightChild = this.getRight(current);
    // Check that there is something to swap (only need to check the left if both exist)
    while (this.canSwap(current, leftChild, rightChild)) {
      // Only compare left & right if they both exist
      if (this.exists(leftChild) && this.exists(rightChild)) {
        // Make sure to swap with the smaller of the two children
        if (this.heap[leftChild] < this.heap[rightChild]) {
          this.swap(current, leftChild);
          current = leftChild;
        } else {
          this.swap(current, rightChild);
          current = rightChild;
        }
      } else {
        // If only one child exist, always swap with the left
        this.swap(current, leftChild);
        current = leftChild;
      }
      leftChild = this.getLeft(current);
      rightChild = this.getRight(current);
    }
  }

  /**
   * We remove the root node, replace it with the last node in the heap, and then heapify the heap
   * @returns The minimum value in the heap.
   */
  popMin() {
    if (this.size === 0) {
      return null;
    }
    const min = this.heap[1];
    this.heap[1] = this.heap[this.size];
    this.size--;
    this.heap.pop();
    this.heapify();
    return min;
  }
};
