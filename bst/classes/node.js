module.exports = class Node {
  constructor(value) {
    this.value = value;
    this.lesserChild = null;
    this.greaterChild = null;
  }
};
