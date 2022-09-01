const Node = require("./node");

module.exports = class LinkedList {
  constructor() {
    this.head = null;
  }
  /**
   * If there is no head, create a new head, otherwise create a new head and set the old head as the next
   * node.
   * @param data - the data to be written to the stack
   */
  write(data) {
    if (!this.head) {
      this.head = new Node(data);
    } else {
      const newHead = new Node(data);
      const oldHead = this.head;
      newHead.setNext(oldHead);
      this.head = newHead;
    }
  }
  /**
   * If the key is found, delete the node and return the data
   * @param key - The key of the node to be deleted.
   * @returns The data of the node that was deleted.
   */

  delete(key) {
    if (!this.head) {
      return null;
    } else {
      let prevNode = null;
      let currentNode = this.head;
      while (currentNode) {
        if (currentNode.getData().key === key) {
          if (prevNode === null) {
            this.head = null;
            return currentNode.getData();
          } else {
            prevNode.setNext(currentNode.getNext());
            return currentNode.getData();
          }
        }
        prevNode = currentNode;
        currentNode = currentNode.getNext();
      }
    }
  }

  /**
   * We start at the head of the list and traverse the list until we find the node with the key we're
   * looking for
   * @param key - The key of the node you want to search for.
   * @returns The value of the key that is being searched for.
   */
  search(key) {
    let currentNode = this.head;
    if (!this.head) {
      return null;
    } else {
      while (currentNode) {
        if (currentNode.getData().key === key) {
          return currentNode.getData();
        }
        currentNode = currentNode.getNext();
      }
    }
  }
};
