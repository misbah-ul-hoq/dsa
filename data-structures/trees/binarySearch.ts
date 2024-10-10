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
    } else {
      let current = this.root;
      while (true) {
        if (val < current.val) {
          if (!current.left) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (val > current.val) {
          if (!current.right) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        } else {
          return;
        }
      }
    }
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
// bst.root.left = new BinarySearchNode(8);
// bst.root.right = new BinarySearchNode(11);
// bst.root.right.right = new BinarySearchNode(12);

console.log(bst);
// console.log(null);
