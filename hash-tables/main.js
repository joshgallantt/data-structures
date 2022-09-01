const HashTable = require("./classes/hashTable");

const table = new HashTable(1);
table.add("Key 1", "Some Data");
table.add("Key 2", "Some More");
table.add("Key 3", "Some Data");
table.add("Key 4", "Some Data");
table.add("Key 5", "Some Data");
table.add("Key 6", "Some More");
table.add("Key 7", "Some Data");
table.add("Key 8", "Some Data");
table.search("Key 3");
