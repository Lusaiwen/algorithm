/** 
 * -             A
            C        B
          F   G    D   E
1. 前序遍历：A C F G B D E 
2. 中序遍历：F C G A D B E
*/

const { indigo } = require("color-name");

function Node(value){
  this.value = value;
  this.left = null;
  this.right = null;
}

var A = new Node('A');
var B = new Node('B');
var C = new Node('C');
var D = new Node('D');
var E = new Node('E');
var F = new Node('F');
var G = new Node('G');

A.left = C;
A.right = B;
C.left = F;
C.right = G;
B.left = D;
B.right = E;

var A2 = new Node('A');
var B2 = new Node('B');
var C2 = new Node('C');
var D2 = new Node('D');
var E2 = new Node('E');
var F2 = new Node('F');
var G2 = new Node('G');

//左右互换位置
A2.left = B2;
A2.right = C2;
C2.left = F2;
C2.right = G2;
B2.left = D2;
B2.right = E2;

function compareTree(root1, root2){
  if(root1 == root2) return true;
  if(root1 == null && root2 != null || root1 != null && root2 == null) return false;
  if(root1.value != root2.value) return false;
  return compareTree(root1.left, root2.left) && compareTree(root1.right, root2.right) ||
  compareTree(root1.left, root2.right) && compareTree(root1.right, root2.left);
}

console.log(compareTree(A, A2));