function Node(value) {
  this.value = value;
  this.left = right = null;
}

var node2 = new Node(2);
var node5 = new Node(5);
var node3 = new Node(3);
var node6 = new Node(6);

//左单旋
node2.right = node5;
node5.left = node3;
node5.right = node6;

function getDepth(root) {
  if (root == null) return 0;
  return Math.max(getDepth(root.left), getDepth(root.right)) + 1;
}

function isBanlance(root) {
  if (root == null) return true;
  var leftDepth = getDepth(root.left);
  var rightDepth = getDepth(root.right);
  if (Math.abs(leftDepth - rightDepth) > 1) {
    return false;
  } else return isBanlance(root.left) && isBanlance(root.right);
}

function leftChange(root) {
  /**
   * 1. 找到新根
   * 2. 找到变化分支
   * 3. 旋转节点的右孩子为变化分支
   * 4. 新根的左孩子为旋转节点
   * 5. 返回新的根节点
   */
  var newRoot = root.right;
  var changeTree = root.right.left;
  root.right = changeTree;
  newRoot.left = root;
  return newRoot;
}

function rightChange(root) {
  /**
   * 1. 找到新根
   * 2. 找到变化分支
   * 3. 旋转节点的左孩子为变化分支
   * 4. 新根的右孩子为旋转节点
   * 5. 返回新的根节点
   */
  var newRoot = root.left;
  var changeTree = root.left.right; 
  root.left = changeTree;
  newRoot.right = root;
  return newRoot;
}

function change(root) {
  if (isBanlance(root)) return root;
  if (root.left != null) change(root.left);
  if (root.right != null) change(root.right);
  var leftDepth = getDepth(root.left);
  var rightDepth = getDepth(root.right);
  if (Math.abs((leftDepth = rightDepth)) < 2) {
    return true;
  } else if (leftDepth > rightDepth) {
    //左边深，右单旋
    return rightChange(root);
  } else {
    //右边深,左单旋
    return leftChange(root);
  }
}

console.log(isBanlance(node2));
var newRoot = change(node2);
console.log(isBanlance(newRoot));
console.log(newRoot);