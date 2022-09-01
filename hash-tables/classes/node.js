module.exports = class Node {
  constructor(data) {
    this._data = data || 23;
    this._next = null;
  }

  /**
   * It returns the value of the private variable _data
   * @returns The data property of the object.
   */
  getData() {
    return this._data;
  }

  /**
   * Return the value of the private variable _next.
   * @returns The next node in the linked list.
   */
  getNext() {
    return this._next;
  }
  /**
   * This function sets the next node in the linked list
   * @param node - The node object to be set as the next node.
   */

  setNext(node) {
    if (node instanceof Node || node === null) {
      this._next = node;
    } else {
      throw new Error("ERROR: Next must be a node object or Null.");
    }
  }
};
