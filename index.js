
function Node(value) {
  this.value = value;
  this.left = this.right = null;
}

var A = new Node('A');
var B = new Node('B');
var C = new Node('C');
var D = new Node('D');
var E = new Node('E');
var F = new Node('F');
var G = new Node('G');
var H = new Node('H');
var I = new Node('I');

A.left = B;
A.right = C;
B.left = D;
B.right = E;
C.left = F;
C.right = G;
D.right = H;
E.right = I;

function getDepth(root) {
  if(root == null) return 0;
  return Math.max(getDepth(root.left), getDepth(root.right)) + 1; 
}

function isBalance(root){
  if(root == null) return true;
  var leftDepth = getDepth(root.left);
  var rightDepth = getDepth(root.right);
  if(Math.abs(leftDepth - rightDepth) > 1){
    return false;
  }else {
    return isBalance(root.left) && isBalance(root.right);
  }
}

console.log(isBalance(A));
