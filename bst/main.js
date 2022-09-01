const BST = require("./classes/bst");

const bst = new BST(15);

bst.insert(3);
bst.insert(36);
bst.insert(2);
bst.insert(12);
bst.insert(28);
bst.insert(39);
bst.insert(8);

console.log("Tree Size:", bst.size());
console.log("Min Val:", bst.min());
console.log("Max Val:", bst.max());

console.log("Contains 2:", bst.contains(2));
console.log("Contains 9:", bst.contains(9));

// DFS!!!
console.log("dfsInOrder:", bst.dfsInOrder());
console.log("dfsPreOrder:", bst.dfsPreOrder());
console.log("dfsPostOrder:", bst.dfsPostOrder());
// BFS!!!
console.log("bfs:", bst.bfs());
