export type BSTNodeOrNull = BSTNode | null;

export class BSTNode {
  left: BSTNodeOrNull = null;
  right: BSTNodeOrNull = null;
  value: number;

  constructor(value: number) {
    this.value = value;
  }
}

export class BinarySearchTree {
  root: BSTNodeOrNull = null;

  insert(value: number): boolean {
    let node = new BSTNode(value);
    if (this.root === null) {
      this.root = node;
      return true;
    } else {
      let temp = this.root;
      while (true) {
        if (temp.value === node.value) return false;
        if (node.value > temp.value) {
          if (temp.right === null) {
            temp.right = node;
            return true;
          }
          temp = temp.right;
        } else {
          if (temp.left === null) {
            temp.left = node;
            return true;
          }
          temp = temp.left;
        }
      }
    }
  }

  contains(value: number) {
    let temp = this.root;

    while (temp !== null) {
      if (temp.value === value) {
        return true;
      } else if (value > temp.value) {
        temp = temp.right;
      } else {
        temp = temp.left;
      }
    }
    return false;
  }

  rContains(value: number) {
    let currentNode = this.root;
    if (currentNode === null) return false;
    if (currentNode.value === value) return true;
  }
}
