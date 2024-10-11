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
}

const bst = new BinarySearchTree();

bst.insert(10);
bst.insert(12);
bst.insert(9);
bst.insert(6);
bst.insert(15);
bst.insert(11);
bst.insert(5);

// console.log(bst.find(5));s
console.log(bst.contains(50));
// console.log(bst);
