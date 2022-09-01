const minHeap = require("./classes/minHeap");

const heap = new minHeap();

heap.add(5);
heap.add(3);
heap.add(10);
heap.add(1);
heap.add(4);
heap.add(2);

console.log(heap.heap);
heap.popMin();
console.log(heap.heap);
