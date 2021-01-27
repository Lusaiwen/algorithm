/** 
 * -             A
            C        B
          F   G    D   E
1. 前序遍历：A C F G B D E 
2. 中序遍历：F C G A D B E
*/

function Node(value) {
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


function deepSearch(root, target){
  if(root == null) return false;
  if(root.value == target) return true;
  var left = deepSearch(root.left, target);
  var right = deepSearch(root.right, target);
  return left || right;
}
console.log(deepSearch(A, 'F'));
