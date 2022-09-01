const Node = require("./node");

//https://towardsdatascience.com/4-types-of-tree-traversal-algorithms-d56328450846

module.exports = class BST {
  constructor(value) {
    this.root = new Node(value);
    this.count = 1;
  }

  size() {
    return this.count;
  }

  insert(value) {
    this.count++;

    let newNode = new Node(value);

    /**
     * If the value is less than the current node, check if there is a lesser child, if there is,
     * recursively call the function on the lesser child, if there isn't, add the new node as the lesser
     * child. If the value is greater than the current node, check if there is a greater child, if there
     * is, recursively call the function on the greater child, if there isn't, add the new node as the
     * greater child
     * @param node - the current node we're looking at
     */
    const searchTree = (node) => {
      if (value < node.value) {
        if (!node.lesserChild) {
          node.lesserChild = newNode;
        } else {
          searchTree(node.lesserChild);
        }
      } else if (value > node.value) {
        if (!node.greaterChild) {
          node.greaterChild = newNode;
        } else {
          searchTree(node.greaterChild);
        }
      }
    };

    searchTree(this.root);
  }

  min() {
    let currentNode = this.root;

    while (currentNode.lesserChild) {
      currentNode = currentNode.lesserChild;
    }

    return currentNode.value;
  }

  max() {
    let currentNode = this.root;

    while (currentNode.greaterChild) {
      currentNode = currentNode.greaterChild;
    }

    return currentNode.value;
  }

  /**
   * If the value is equal to the current node's value, return true. Otherwise, if the value is less than
   * the current node's value, set the current node to the current node's lesser child. Otherwise, set
   * the current node to the current node's greater child.
   * @param value - The value to search for in the tree.
   * @returns A boolean value.
   */
  contains(value) {
    let currentNode = this.root;
    while (currentNode) {
      if (value === currentNode.value) {
        return true;
      }
      if (value < currentNode.value) {
        currentNode = currentNode.lesserChild;
      } else {
        currentNode = currentNode.greaterChild;
      }
    }
    return false;
  }

  /**
   * "If the node has a lesser child, traverse it. Push the node's value to the result array. If the node
   * has a greater child, traverse it."
   *
   * The function is recursive, meaning it calls itself. It's also a depth-first search, meaning it goes
   * as deep as it can before backtracking.
   */
  dfsInOrder() {
    let result = [];
    const traverse = (node) => {
      if (node.lesserChild) traverse(node.lesserChild);

      result.push(node.value);

      if (node.greaterChild) traverse(node.greaterChild);
    };

    traverse(this.root);
    return result;
  }

  dfsPreOrder() {
    let result = [];
    /**
     * Push the current node's value into the result array, then recursively call the function on the
     * lesser and greater children.
     * @param node - the node we're currently on
     */
    const traverse = (node) => {
      result.push(node.value);
      if (node.lesserChild) traverse(node.lesserChild);
      if (node.greaterChild) traverse(node.greaterChild);
    };

    traverse(this.root);
    return result;
  }

  dfsPostOrder() {
    let result = [];
    /**
     * "If the node has a lesser child, traverse it. If the node has a greater child, traverse it. Push the
     * node's value to the result array."
     *
     * The function is recursive, meaning it calls itself. It's also a depth-first search, meaning it goes
     * as deep as it can before backtracking
     * @param node - the node we're currently on
     */
    const traverse = (node) => {
      if (node.lesserChild) traverse(node.lesserChild);
      if (node.greaterChild) traverse(node.greaterChild);
      result.push(node.value);
    };

    traverse(this.root);
    return result;
  }

  bfs() {
    let result = [];
    let queue = [];

    queue.push(this.root);

    while (queue.length) {
      let currentNode = queue.shift();
      result.push(currentNode.value);

      if (currentNode.lesserChild) {
        queue.push(currentNode.lesserChild);
      }
      if (currentNode.greaterChild) {
        queue.push(currentNode.greaterChild);
      }
    }
    return result;
  }
};
