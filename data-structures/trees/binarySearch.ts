class BinarySearchNode {
  val: any;
  left: any;
  right: any;

  constructor(val: any) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  root: any;

  constructor() {
    this.root = null;
  }

  insert(val: any) {
    let newNode = new BinarySearchNode(val);

    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current = this.root;

    while (true) {
      if (val < current.val) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else if (val > current.val) {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      } else {
        return;
      }
    }
  }

  find(val: any) {
    if (!this.root) {
      return;
    }
    let current = this.root;
    let isFound = false;

    while (current && !isFound) {
      if (val < current.val) {
        current = current.left;
      } else if (val > current.val) {
        current = current.right;
      } else {
        isFound = true;
      }
    }

    return current ? current : undefined;
  }

  contains(val: any) {
    if (!this.root) return false;
    let current = this.root;
    let isFound = false;
    while (current && !isFound) {
      if (val < current.val) current = current.left;
      else if (val > current.val) current = current.right;
      else isFound = true;
    }
    return isFound;
  }

  BFS() {
    const queue = [this.root];
    const values = [];
    while (queue.length) {
      let dequedNode = queue.shift();
      values.push(dequedNode.val);
      if (dequedNode.left) {
        queue.push(dequedNode.left);
      }
      if (dequedNode.right) {
        queue.push(dequedNode.right);
      }
    }
    return values;
  }

  DFSPreOrder() {
    let data: any[] = [];
    let current = this.root;
    function traverse(node: any) {
      data.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(current);
    return data;
  }

  DFSPostOrder() {
    let values: any[] = [];
    let current = this.root;
    function traverse(node: any) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      values.push(node.val);
    }
    traverse(current);
    return values;
  }

  DFSInOrder() {
    const values: any[] = [];
    const current = this.root;
    function traverse(node: any) {
      if (node.left) traverse(node.left);
      values.push(node.val);
      if (node.right) traverse(node.right);
    }
    traverse(current);
    return values;
  }
}

const bst = new BinarySearchTree();

bst.insert(10);
bst.insert(12);
bst.insert(9);
bst.insert(6);
bst.insert(15);
bst.insert(11);
bst.insert(5);
bst.insert(5);

console.log(bst.DFSInOrder());
