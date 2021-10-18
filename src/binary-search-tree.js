const { NotImplementedError } = require('../extensions/index.js');

 const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {
 
  constructor() {
    this.TreeRoot = null;
  }
  
  root() {
    return this.TreeRoot;
  }

  add(data) {
    this.TreeRoot = addData(this.TreeRoot, data)
    function addData(node, data) {
      if (node == null) {
        return new Node(data);
      }
      if (node.data === data) {
        return node;
      }
      if (data < node.data) {
        node.left = addData(node.left, data);
      } else {
        node.right = addData(node.right, data);
      }
      return node;
    }
  }

  has(data) {
    function findRootData(node, data) {
      if (node == null) {
        return false;
      }
      if (node.data === data) {
        return true;
      }
      if (data < node.data) {
        return findRootData(node.left, data);
      } else {
        return findRootData(node.right, data);
      }
    }
    return findRootData(this.TreeRoot, data);
  }

  find( data ) {
    function findRootData(node, data) {
      if (node == null) {
        return null;
      }
      if (node.data === data) {
        return node;
      }
      if (data < node.data) {
        return findRootData(node.left, data);
      } else {
        return findRootData(node.right, data);
      }
    }
    return findRootData(this.TreeRoot, data);
  }

  remove(data) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    if (this.TreeRoot == null) {
      return null;
    }
    let node = this.TreeRoot;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (this.TreeRoot == null) {
      return null;
    }
    let node = this.TreeRoot;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }

}