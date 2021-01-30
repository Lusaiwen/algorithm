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

function addNode(root, value) {
  if (root == null) return;
  if (root.value == value) return;
  if (value >= root.value) {
    if (root.right != null) addNode(root.right, value);
    else root.right = new Node(value);
  } else {
    if (root.left != null) addNode(root.left, value);
    else root.left = new Node(value);
  }
}

function buildSearchTree(arr) {
  if (arr == null || arr.length == 0) return;
  var root = new Node(arr[0]);
  for (var i = 1; i < arr.length; i++) {
    addNode(root, arr[i]);
  }
  return root;
}

var num = 0;
function searchTree(root, target) {
  if (root == null) return false;
  num++;
  if (root.value == target) return true;
  if (target >= root.value) return searchTree(root.right, target);
  else return searchTree(root.left, target);
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
  if (root.left != null) root.left = change(root.left);
  if (root.right != null) root.right = change(root.right);
  var leftDepth = getDepth(root.left);
  var rightDepth = getDepth(root.right);
  if (Math.abs((leftDepth - rightDepth)) < 2) {
    return root;
  } else if (leftDepth > rightDepth) {
    //左边深，右单旋
    //如果变化分支深度大于不变分支，左右双旋
    var changeTreeDepth = getDepth(root.left.right);
    var noChangeDepth = getDepth(root.left.left);
    if (changeTreeDepth > noChangeDepth) {
      root.left = leftChange(root.left);
    }
    var newRoot = rightChange(root);
    newRoot.right = change(newRoot.right);
    newRoot = change(newRoot);
    return newRoot;
  } else {
    //右边深,左单旋
    var changeTreeDepth = getDepth(root.right.left);
    var noChangeDepth = getDepth(root.right.right);
    if (changeTreeDepth > noChangeDepth) {
      root.right = rightChange(root.right);
    }
    var newRoot = leftChange(root);
    newRoot.left = change(newRoot.left);
    newRoot = change(newRoot);
    return newRoot;
  }
}

var arr = [];
for (var i = 0; i < 100000; i++) {
  arr[i] = Math.floor(Math.random() * 100000);
}

var root = buildSearchTree(arr);
console.log(searchTree(root, 45677));
console.log(num);

num = 0;
var newRoot = change(root);
console.log(searchTree(newRoot, 45677));
console.log(num);
console.log(isBanlance(newRoot));
// s
